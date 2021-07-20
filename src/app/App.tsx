import React, { Component } from 'react';
import { GetSDK } from '../mp/GetSDK';
import { Dictionary, MpSdk, Sweep } from '../mp/sdk';
import './App.scss';
import Frame from './Frame';
import Menu from './ui/Menu';
import MenuButton from './ui/MenuButton';
import Pathfinder from './Pathfinder';
import Translator from './Translator';
import { initComponents } from './sdk-components';
import { pathRendererType } from './sdk-components/PathRenderer';
import { cameraControllerType } from './sdk-components/CameraController';
import { sweepIdToPoint } from './utils';
import { SweepAlias, sweepAliases } from './sweepAliases';
import ControlsOverlay from './ui/overlay/ControlsOverlay';

export interface Sdk extends MpSdk {
  Scene?: any;
}

interface AppState {
  currSweepId?: string;
  selectedSweepId?: string;
  sweepData: Sweep.SweepData[]; // put in state because changes should trigger rerender
  sweepMap?: Dictionary<MpSdk.Sweep.ObservableSweepData>;
  menuEnabled: boolean;
}

const defaultUrlParams: any = {
  m: 'GycExKiYVFp',
  applicationKey: 'q44m20q8yk81yi0qgixrremda',
  title: '0',
  qs: '1',
  hr: '0',
  brand: '0',
  help: '0',
  play: '1',
}

/**
 * This is the top level class for the app. It handles API key, model ID, and url stuff,
 * and holds references to objects/modules/components for object composition.
 * Do non-initializing SDK and UI stuff in other components/files.
 */
export default class App extends Component<{}, AppState> {

  private src: string; // the url source for the sdk
  private lang?: string | null = null;
  private sdk?: Sdk;

  private pathNode: any; // the node for the PathRenderer component
  private path: any; // PathRenderer component. Needed for CameraController.
  private pathfinder?: Pathfinder;

  private sweepAlias?: SweepAlias; // human-readable alias for sweeps, if available

  private flyNode: any; // the node for the CameraController component

  constructor(props: any) {
    super(props);
    const queryString = this.handleUrlParams();
    this.src = `${process.env.PUBLIC_URL}/bundle/showcase.html?${queryString}`;

    this.state = {
      sweepData: [],
      menuEnabled: true,
    };
  }

  /**
   * Parses the current url params and combines them with the default params, updating when necessary.
   * @returns url param query string (without `?`), ready to be pasted directly into the url
   */
  private handleUrlParams(): string {
    const params = new URLSearchParams(window.location.search);
    this.lang = params.get('lang');
    for (const [k, v] of Object.entries(defaultUrlParams)) {
      if (!params.has(k)) {
        params.append(k, ''+v); // convert v to string
      }
    }
    return params.toString();
  }

  // --- React methods ---------------------------------------------------------

  public async componentDidMount() {
    
    this.sdk = await GetSDK('showcase', defaultUrlParams.applicationKey);
    await initComponents(this.sdk);

    this.sdk.Model.getData().then( (data) => {
      const sweepData = data.sweeps;
      this.pathfinder = new Pathfinder(sweepData);
      this.setState({
        sweepData: sweepData,
      });
      this.sweepAlias = sweepAliases[data.sid];
    // pretend these are user-created Mattertags
    var mattertags = [
      {
        label: "Sever Hall",
        description: `Sever Hall is an academic building at Harvard University designed by the 
          American architect H. H. Richardson and built in the late 1870s. It is located in 
          Harvard Yard in Cambridge, Massachusetts. It was designated a National Historic Landmark 
          in 1970, recognized as one of Richardson's mature masterpieces`,
        anchorPosition: { x: -17.89, y: -4.22, z: -7.32},
        stemVector: { x: 0, y: 1, z: 0 },
      },
      {
        label: "1986 Bertone X1/9",
        description: "This is a car.",
        media: {
          type: this.sdk.Mattertag.MediaType.PHOTO,
          src: "https://bringatrailer.com/wp-content/uploads/2019/06/1986_bertone_x_19_156130493598764daBertone-19-e1563480607976.jpg?fit=940%2C626",
        },
        anchorPosition: { x: -17.89, y: -4.22, z: -6.32},
        stemVector: { x: 0, y: 1, z: 0 },
      }
    ];
    await this.sdk.Mattertag.add(mattertags);

    // translate Mattertags
    this.translateMattertags();

    const sweepData = (await this.sdk.Model.getData()).sweeps;
    this.pathfinder = new Pathfinder(sweepData);
    this.setState({
      sweepData: sweepData,
    });

    this.sdk.Sweep.data.subscribe({
      onCollectionUpdated: (collection: Dictionary<MpSdk.Sweep.ObservableSweepData>) => {
        this.setState({
          sweepMap: collection
        });
      },
    });

    this.sdk.Sweep.current.subscribe((currentSweep: any) => {
      //console.log(currentSweep.sid);
      this.setState({
        currSweepId: currentSweep.sid,
      });
    });
  }

  componentDidUpdate() {
    this.handlePath();
  }

  // --- SDK methods -----------------------------------------------------------

  private onOptionSelect = (id: string) => {
    this.setState({
      selectedSweepId: id,
    });
  }

  private async handlePath() {
    const { currSweepId, selectedSweepId, sweepMap } = this.state;
    const { sdk, pathfinder } = this;

    if (sdk && sweepMap && currSweepId && selectedSweepId && pathfinder) {
      const path = await pathfinder.findShortestPath(currSweepId, selectedSweepId);
      if (!path) return;
      if (this.pathNode) this.pathNode.stop();
      this.pathNode = await sdk.Scene.createNode();
      this.path = this.pathNode.addComponent(pathRendererType, {
        path: path.map(id => sweepIdToPoint(id, sweepMap)),
        opacity: 0.7,
        radius: 0.12,
        stepMultiplier: 10,
        color: 0x8df763,
      });
      this.pathNode.start();
    }
  }

  private startFly = async () => {
    const { sdk, path } = this;

    if (sdk && path) {
        this.endFly();
        this.flyNode = await sdk.Scene.createNode();
        const camCon = await this.flyNode.addComponent(cameraControllerType);
        const cam = this.flyNode.addComponent('mp.camera', {
            enabled: true,
        });
        camCon.bind('curve', path, 'curve');
        cam.bind('camera', camCon, 'camera');
        await sdk.Mode.moveTo(sdk.Mode.Mode.DOLLHOUSE, {
          transition: sdk.Mode.TransitionType.INSTANT,
        });
        this.flyNode.start();
    }
  }

  private endFly = async () => {
    const { sdk, flyNode } = this;
    if (sdk && flyNode) {
      flyNode.stop();
      //await sdk.Mode.moveTo(sdk.Mode.Mode.INSIDE);
    }
  }

  private exitFly = async () => {
    const { sdk } = this;
    if (!sdk) return;
    await this.endFly();
    await sdk.Mode.moveTo(sdk.Mode.Mode.INSIDE);
  }

  private toggleMenu = () => {
    this.setState({
      menuEnabled: !this.state.menuEnabled,
    });
  }

  // --- Render ----------------------------------------------------------------

  /**
   * TODO: make entirely async
   */

  private async translateMattertags() {
    const { sdk, lang } = this;
    
    if (sdk && lang) {
      const Trans = new Translator(lang);
      if (Trans.testQuery()) { // check HTTP request works
        const mattertagData = await sdk.Mattertag.getData();
        for (let i=0; i<mattertagData.length; i++) {
          const { sid, label, description, media } = mattertagData[i];
          const [ newLabel, newDescription ] = Trans.translate([label, description]);
          sdk.Mattertag.editBillboard(sid, {
            label: newLabel, 
            description: newDescription, 
            media,
          });
        }
      }
      Trans.checkUsage();
    }
  }

  public render() {
    const { currSweepId, selectedSweepId, sweepData, menuEnabled } = this.state;

    return (
      <div className='app'>
        <div id='frame-container'>
          <Frame src={this.src} />
          <div id='overlay-container'>
            {/* Put all showcase overlay components here */}
            <ControlsOverlay
              onPlay={this.startFly}
              onPause={this.endFly}
              onExit={this.exitFly}
            />
          </div>
        </div>
        { !menuEnabled &&
          <MenuButton onClick={this.toggleMenu} />
        }
        { menuEnabled &&
          <Menu
            currSweepId={currSweepId}
            selectedSweepId={selectedSweepId}
            sweepData={sweepData}
            sweepAlias={this.sweepAlias}
            onChange={this.onOptionSelect}
            onClose={this.toggleMenu}
          />
        }
      </div>
    );
  }
}
