(this.webpackJsonpsdk_pathfinder=this.webpackJsonpsdk_pathfinder||[]).push([[0],Array(21).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(15),s=n.n(o),i=(n(21),n(12)),c=n(1),u=n.n(c),l=n(7),d=n(2),p=n(3),h=n(11),f=n(6),v=n(5),b=function(e,t){return new Promise((function(n,a){var r=setInterval(function(){var a=Object(l.a)(u.a.mark((function a(){var o,s,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=null,!(o=e instanceof HTMLIFrameElement?e:document.getElementById(e))){a.next=7;break}return a.next=5,o.contentWindow;case 5:(s=a.sent.MP_SDK)&&(clearInterval(r),i=s.connect(o,t,"3.2"),n(i));case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),100)}))},j=(n(23),n(24),n(0)),m=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.id,a=e.customRef,r=e.children,o=e.disableClicks;return Object(j.jsxs)("div",{className:"frame",children:[Object(j.jsx)("iframe",{id:n||"showcase",className:"frame",src:t,title:"showcase",allowFullScreen:!0,frameBorder:"0",ref:a,style:o?{pointerEvents:"none"}:void 0}),r]})}}]),n}(a.Component),y=n(14),O=(n(26),n(27),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.children;return Object(j.jsxs)("div",{className:"accordion",children:[t&&Object(j.jsx)("div",{className:"accordion-header header-font",children:t}),Object(j.jsx)("div",{className:"accordion-groups",children:n})]})}}]),n}(a.Component)),g=n(8),x=n.n(g),w=(n(28),n(29),"52px"),k=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.body,a=e.selected,r=e.onClick;return Object(j.jsx)("div",{className:x()("accordion-item",{selected:!!a}),onClick:r,style:{height:w},children:Object(j.jsxs)("div",{className:"accordion-item-details",children:[Object(j.jsx)("div",{className:"accordion-item-header",children:t}),Object(j.jsx)("div",{className:"accordion-item-body",children:n})]})})}}]),n}(a.Component),C=n(16),M=(n(30),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.classes,a=[];return n&&(a=Array.isArray(n)?n:[n]),Object(j.jsx)("span",{className:x.a.apply(void 0,["icon","icon-"+t].concat(Object(C.a)(a)))})}}]),n}(a.Component)),S=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).onClick=function(){var e=a.state,t=e.expanded,n=e.showChildren;a.setState({expanded:!t},(function(){return setTimeout((function(){return a.setState({showChildren:!n})}),n?250:0)}))};var r=a.props.expanded;return a.state={expanded:!!r,showChildren:!!r},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.header,a=e.showNumber,r=this.state.expanded,o=0;t&&(o=Array.isArray(t)?t.length:1);var s=o>0,i=r&&s?"calc(".concat(o,"*").concat(w,")"):"0";return Object(j.jsxs)("div",{className:x()("accordion-group-container",{collapsed:!r}),children:[Object(j.jsxs)("div",{className:"accordion-group-header header-font",onClick:this.onClick,children:[""+n+(s&&a?" (".concat(o,")"):""),Object(j.jsx)(M,{icon:"chevron-down"})]}),Object(j.jsx)("div",{className:x()("accordion-group",{collapsed:!r}),style:{height:i},children:o>0&&t})]})}}]),n}(a.Component),N=(n(31),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={opacity:0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({opacity:1})}),30)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClose,a=this.state.opacity;return Object(j.jsxs)("div",{className:"menu-nudge-container",style:{opacity:a},children:[Object(j.jsx)("div",{className:"nudge-text",children:t}),Object(j.jsx)("button",{type:"button",className:"nudge-close-button header-font",onClick:n,children:"CLOSE"})]})}}]),n}(a.Component)),P="menu_nudge_seen",D=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onCloseNudge=function(){sessionStorage.setItem(P,"true"),a.setState({displayNudge:!1})},a.state={sweepGroups:{},displayNudge:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem(P);t&&"false"!==t||window.setTimeout((function(){e.setState({displayNudge:!0})}),2e3)}},{key:"getGroups",value:function(){var e,t=this.props,n=t.sweepData,a=t.sweepAlias,r={},o=Object(y.a)(n);try{for(o.s();!(e=o.n()).done;){var s=e.value;if(!a||s.sid in a){var i=""+s.floor;i in r||(r[i]=[]),r[i].push(s)}}}catch(c){o.e(c)}finally{o.f()}return r}},{key:"renderItem",value:function(e){var t=this.props,n=t.onChange,a=t.selectedSweepId,r=t.sweepAlias,o=e.sid,s=r?r[o]:o;return Object(j.jsx)(k,{header:s,onClick:function(){return n(o)},selected:o===a},o)}},{key:"renderGroups",value:function(){for(var e=this.props,t=e.selectedSweepId,n=e.floorMap,a=this.getGroups(),r=[],o=void 0,s=0,c=Object.entries(a);s<c.length;s++){var u,l,d=Object(i.a)(c[s],2),p=d[0],h=d[1];p in r||(r[p]=[]);var f,v=[],b=Object(y.a)(h);try{for(b.s();!(f=b.n()).done;){var m=f.value;v.push(this.renderItem(m)),m.sid===t&&(o=m.floor)}}catch(w){b.e(w)}finally{b.f()}var O=null===n||void 0===n||null===(u=n[p])||void 0===u?void 0:u.name,g=null===n||void 0===n||null===(l=n[p])||void 0===l?void 0:l.sequence,x=O||void 0!==g&&"Floor ".concat(g+1)||p;r.push(Object(j.jsx)(S,{header:x,expanded:!!o&&""+o===p,showNumber:!0,children:v},p))}return r}},{key:"renderLanguageSelect",value:function(){return Object(j.jsx)("div",{style:{marginLeft:"auto"},children:Object(j.jsxs)("select",{onChange:this.props.onChangeLang,children:[Object(j.jsx)("option",{value:"en",children:"English"}),Object(j.jsx)("option",{value:"es",children:"Espa\xf1ol"}),Object(j.jsx)("option",{value:"fr",children:"Fran\xe7ais"}),Object(j.jsx)("option",{value:"de",children:"Deutsch"}),Object(j.jsx)("option",{value:"ru",children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(j.jsx)("option",{value:"zh",children:"\u4e2d\u6587"}),Object(j.jsx)("option",{value:"ja",children:"\u65e5\u672c\u8a9e"}),Object(j.jsx)("option",{value:"nl",children:"Nederlands"}),Object(j.jsx)("option",{value:"it",children:"Italiano"}),Object(j.jsx)("option",{value:"pt",children:"Portugu\xeas"})]})})}},{key:"render",value:function(){var e=this.props.onClose,t=this.state.displayNudge;return Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"menu-header",children:[Object(j.jsx)("div",{className:"menu-header-text header-font",children:"Sweeps"}),this.renderLanguageSelect(),Object(j.jsx)("button",{type:"button",className:"menu-close-button",onClick:e,children:Object(j.jsx)(M,{icon:"close"})})]}),Object(j.jsx)(O,{children:this.renderGroups()}),t&&Object(j.jsx)(N,{text:"Select a location to begin pathfinding",onClose:this.onCloseNudge})]})}}]),n}(a.Component),E=(n(32),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick;return Object(j.jsx)("div",{className:"menu-button-container",children:Object(j.jsx)("button",{type:"button",className:x()("menu-button",{"text-button":!!t}),onClick:n,children:t||Object(j.jsx)(M,{icon:"chevron-left"})})})}}]),n}(a.Component));function I(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function U(e,t){return t[e].position}function R(e,t,n){return Math.min(Math.max(e,t),n)}var F=function(){function e(t){var n=this;Object(d.a)(this,e),this.VERT_THRESHOLD=.5,this.HORZ_THRESHOLD=10,this.graph={},this.path=[],this.sweepPositions={},t.forEach((function(e){return n.sweepPositions[e.sid]=e.position})),this.createGraph(t)}return Object(p.a)(e,[{key:"createGraph",value:function(e){for(var t={},n=0;n<e.length;n++){for(var a=e[n],r={},o=a.neighbors,s=0;s<o.length;s++){var i=o[s],c=I(a.position,this.sweepPositions[i]);r[i]=c}t[a.sid]=r}this.graph=t}},{key:"heuristic",value:function(e,t){var n=this.sweepPositions;return I(n[e],n[t])}},{key:"penalty",value:function(e,t){var n=this.sweepPositions;return Math.pow((n[e].y-n[t].y)/this.VERT_THRESHOLD,4)+(Math.pow(n[e].x-n[t].x,2)+Math.pow(n[e].z-n[t].z,2))/this.HORZ_THRESHOLD}},{key:"findShortestPath",value:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,r,o,s,i,c,l,d,p,h,f,v,b,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(a=this.graph)[t]&&void 0!==a[n]){e.next=4;break}return console.error("Sweep SID(s) is invalid."),e.abrupt("return");case 4:(r={})[t]={visited:!1,distance:0,cost:0,parent:null},o=0;case 7:for(o+=1,s=void 0,i=Object.keys(r),c=0;c<i.length;c++)l=i[c],!r[l].visited&&(void 0===s||r[l].cost<r[s].cost)&&(s=l);if(void 0!==s){e.next=15;break}return console.error("Could not find path; sweeps are not connected."),e.abrupt("return");case 15:if(s!==n){e.next=17;break}return e.abrupt("break",22);case 17:for(r[s].visited=!0,d=Object.keys(a[s]),p=0;p<d.length;p++)h=d[p],f=r[s].distance+a[s][h],v=f+this.penalty(s,h)+this.heuristic(h,n),h in r?!r[h].visited&&r[h].cost>v&&(r[h].parent=s,r[h].distance=f,r[h].cost=v):r[h]={visited:!1,distance:f,cost:v,parent:s};e.next=7;break;case 22:for(console.log("Pathfind iterations: ".concat(o)),j=[b=n];null!==r[b].parent;)b=r[b].parent,j.push(b);return j.reverse(),e.abrupt("return",j);case 28:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),L=function(){function e(t){Object(d.a)(this,e),this.url="https://api-free.deepl.com/v2/translate",this.key="1fa4cd0a-7872-2cc0-e6e3-e96c6587ca62:fx",this.url+="?auth_key=".concat(this.key,"&target_lang=").concat(t)}return Object(p.a)(e,[{key:"testQuery",value:function(){var e=new XMLHttpRequest,t=this.url+"&text=";e.open("GET",t,!1),e.send();var n=e.status;return 0===n||n>=200&&n<400}},{key:"checkUsage",value:function(){var e=new XMLHttpRequest;e.open("GET","https://api-free.deepl.com/v2/usage?auth_key=".concat(this.key)),e.onload=function(){if(4===e.readyState){var t=e.status;0===t||t>=200&&t<400?console.log("DeepL Usage:",e.responseText):console.error("Usage retrieval failed.")}},e.send()}},{key:"translate",value:function(e,t){for(var n=this,a=new XMLHttpRequest,r=this.url,o=0;o<e.length;o++)r+="&text=".concat(e[o]);a.open("GET",r),a.onload=function(){if(4===a.readyState){var e=a.status;if(0===e||e>=200&&e<400){var r=a.responseText;t(n.parse(r))}else console.error("Translation failed.")}},a.send()}},{key:"parse",value:function(e){for(var t=JSON.parse(e),n=[],a=0;a<t.translations.length;a++)n.push(t.translations[a].text);return n}}]),e}(),T=function e(){var t=this;Object(d.a)(this,e),this.material=void 0,this.inputs={visible:!1,path:[],radius:.15,color:16724312,opacity:.5,heightOffset:-1.1,stepMultiplier:5},this.context=void 0,this.outputs={curve:null,distance:0},this.onInit=Object(l.a)(u.a.mark((function e(){var n,a,r,o,s,i,c,l,d,p,h,f,v,b,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.context.three,a=t.inputs,r=a.path,o=a.radius,s=a.heightOffset,i=a.opacity,c=a.color,l=a.stepMultiplier,!(r.length<2)&&r.every((function(e){return!!e}))){e.next=4;break}return e.abrupt("return");case 4:d=0,p=r.map((function(e,t){return t>0&&(d+=I(r[t-1],e)),new n.Vector3(e.x,e.y+s,e.z)})),h=new n.CatmullRomCurve3(p),f={steps:l*r.length,bevelEnabled:!1,extrudePath:h},v=(new n.Shape).absarc(0,0,o,0,2*Math.PI,!1),b=new n.ExtrudeGeometry(v,f),t.material=new n.MeshBasicMaterial({color:c,transparent:!0,opacity:i}),j=new n.Mesh(b,t.material),t.outputs.objectRoot=j,t.outputs.curve=h,t.outputs.distance=d;case 15:case"end":return e.stop()}}),e)}))),this.onEvent=function(e,t){},this.onInputsUpdated=function(e){},this.onTick=function(e){},this.onDestroy=function(){var e;null===(e=t.material)||void 0===e||e.dispose()}},A="sdk-component.pathRenderer";function H(){return new T}var G=function(){function e(){var t=this;Object(d.a)(this,e),this.u=0,this.length=0,this.up=void 0,this.inputs={curve:null,speed:1.5,verticalOffset:1,enabled:!1,changeUCallback:function(e){return null}},this.outputs={camera:null},this.context=void 0,this.onInit=Object(l.a)(u.a.mark((function e(){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.inputs.curve,a=t.context.three,r=new a.PerspectiveCamera(45,1.333,1,1e3),t.outputs.camera=r,t.length=n.getLength()-1,t.up=new a.Vector3(0,1,0);case 6:case"end":return e.stop()}}),e)}))),this.onTick=function(){var e=Object(l.a)(u.a.mark((function e(n){var a,r,o,s,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.inputs,r=a.speed,a.enabled&&(t.u=R(t.u+r*(n/1e3)/t.length,0,1),o=t.u,s=t.getPoseAt(o),i=s.position,c=s.rotation,t.setCamera(i,c),t.inputs.changeUCallback(o));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onDestroy=function(){}}return Object(p.a)(e,[{key:"getPoseAt",value:function(e){var t=this.inputs,n=t.curve,a=t.speed,r=t.verticalOffset,o=this.context.three,s=Math.max(e-.1*a/this.length,0),i=Math.min(e+a/this.length,1),c=n.getPointAt(e);c.y+=r;var u=n.getPointAt(s),l=n.getPointAt(i),d=(new o.Matrix4).lookAt(u,l,this.up);return{position:c,rotation:(new o.Euler).setFromRotationMatrix(d,"YXZ")}}},{key:"setCamera",value:function(e,t){var n=this.outputs.camera;n.position.copy(e),n.rotation.copy(t),n.updateProjectionMatrix()}},{key:"setU",value:function(e){this.u=e;var t=this.getPoseAt(e),n=t.position,a=t.rotation;this.setCamera(n,a),this.inputs.changeUCallback(e)}}]),e}(),V="sdk-component.cameraController";function _(){return new G}var q=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.Scene.register(A,H),t.Scene.register(V,_)]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z={GycExKiYVFp:{"36642185cf3f481897967d749003d683":"Great Hall",e282bc9e7ae94a58aa624c4679e71946:"105","03dbddfa78074195ad605033e1a5ea88":"106",ecf49427817f4ad2a18971bd836f577a:"107","233c8a90b0d44803b451cc18c2beb2ac":"125: History Department Conference Room","7f3f51d4c0b9448f9e5c78a9882fe912":"222","5c19c240375d4d04a6c9ca790a35fa02":"223",c2096fe91b2543f78ca9d95070e78e63:"225: History Department Graduate Lounge","1b11bb808949421ba32142f4c48b9823":"B21: Warren Center Conference Room"}},B=(n(33),n(34),"14px"),K=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).abortController=new AbortController,a.trackRef=r.a.createRef(),a.onMouseDown=function(e){var t=a.props,n=t.onMouseDown,r=t.onChange,o=e;if(0===o.button){var s=a.calculate(o.clientX);null===n||void 0===n||n(s),null===r||void 0===r||r(s),a.setState({value:s,mouseDown:!0})}},a.onMouseUp=function(e){var t=a.props.onMouseUp,n=a.state,r=n.value,o=n.mouseDown;0===e.button&&(o&&(null===t||void 0===t||t(r)),a.setState({mouseDown:!1}))},a.onMouseMove=function(e){var t=a.props,n=t.scrub,r=t.onChange,o=a.state.mouseDown;if(n&&o){var s=e,i=a.calculate(s.clientX);a.setState({value:i},(function(){return null===r||void 0===r?void 0:r(i)}))}};var o=e.initValue;return a.state={value:o||0,mouseDown:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.onMouseUp,{signal:this.abortController.signal}),window.addEventListener("mousemove",this.onMouseMove,{signal:this.abortController.signal})}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"componentDidUpdate",value:function(e,t){e.overrideValue!==t.value&&this.props.overrideValue&&this.setState({value:this.props.overrideValue})}},{key:"calculate",value:function(e){var t=this.props,n=t.min,a=t.max,r=this.state.value,o=this.trackRef.current;if(!o)return r;var s=o.getBoundingClientRect();return R((e-s.left)/(s.right-s.left)*(a-n),n,a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.min,a=t.max,r=t.overrideValue,o=t.noThumb,s=this.state,i=s.value,c=s.mouseDown,u=100*((r||i)/(a-n));return Object(j.jsxs)("div",{className:"progress-bar-container",children:[Object(j.jsx)("div",{className:"progress-bar-track-container",children:Object(j.jsx)("div",{className:"progress-bar-track",onMouseDown:this.onMouseDown,ref:this.trackRef,children:Object(j.jsx)("div",{className:"progress-bar-progress",style:{width:"".concat(u,"%")}})})}),!o&&Object(j.jsx)("div",{className:"progress-bar-thumb",style:{width:B,height:B,left:"calc(".concat(u,"% - (").concat(B,"/2))")},onMouseDown:function(t){e.onMouseDown(t),console.log("down")}}),Object(j.jsx)("div",{className:"pointer-event-overlay",style:{position:"fixed",inset:"0",pointerEvents:"all",display:c?"block":"none"}})]})}}]),n}(a.Component),X=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onScrubMouseDown=function(){a.props.onPause()},a.onScrubMouseUp=function(){a.state.rememberPlayState&&a.props.onPlay()},a.togglePlay=function(){var e=a.props,t=e.playing,n=e.onPlay,r=e.onPause;t?r():n(),a.setState({rememberPlayState:!t})},a.state={rememberPlayState:e.playing},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.playing,n=e.onExit,a=e.setU,r=e.u;return Object(j.jsx)("div",{className:"controls-overlay-container",children:Object(j.jsxs)("div",{className:"controls-overlay",children:[Object(j.jsx)(K,{min:0,max:1,scrub:!0,onChange:a,onMouseDown:this.onScrubMouseDown,onMouseUp:this.onScrubMouseUp,overrideValue:r}),Object(j.jsxs)("div",{className:"control-button-container",children:[Object(j.jsx)("button",{type:"button",className:"control-button play-button",onClick:this.togglePlay,children:Object(j.jsx)(M,{icon:t?"showcase-pause-lg":"showcase-play-lg",classes:"play-pause-button"})}),Object(j.jsx)("button",{type:"button",className:"control-button exit-button",onClick:n,children:Object(j.jsx)(M,{icon:"close"})})]})]})})}}]),n}(a.Component),W=(n(35),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.onClick;return Object(j.jsx)("div",{className:"flymode-button-container",children:Object(j.jsx)("button",{className:"flymode-button",onClick:e,children:"Fly Mode"})})}}]),n}(a.Component)),Y=(n(36),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.icon,a=e.classes;return Object(j.jsx)("div",{className:x()("icon-button-container",a),children:Object(j.jsx)("button",{type:"button",className:"icon-button",onClick:t,children:Object(j.jsx)(M,{icon:n})})})}}]),n}(a.Component)),J={m:"GycExKiYVFp",applicationKey:"q44m20q8yk81yi0qgixrremda",title:"0",qs:"1",hr:"0",brand:"0",help:"0",play:"1"},Z=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).src=void 0,a.lang=null,a.sdk=void 0,a.pathNode=void 0,a.pathfinder=void 0,a.sweepAlias=void 0,a.flyNode=void 0,a.camCon=void 0,a.onOptionSelect=function(e){e===a.state.selectedSweepId?a.clearSelection():a.setState({selectedSweepId:e})},a.clearSelection=function(){a.pathNode&&a.pathNode.stop(),a.setState({path:void 0,selectedSweepId:void 0})},a.toggleFlyMode=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.flyModeEnabled,a.setState({flyModeEnabled:!t,flyU:0},Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,a.exitFly();case 3:e.next=7;break;case 5:return e.next=7,a.initFly();case 7:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)}))),a.initFly=Object(l.a)(u.a.mark((function e(){var t,n,r,o,s,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(h.a)(a),n=t.sdk,r=a.state.path,!n||!r){e.next=17;break}return a.flyNode&&a.flyNode.stop(),e.next=6,n.Scene.createNode();case 6:return a.flyNode=e.sent,a.camCon=a.flyNode.addComponent(V,{changeUCallback:function(e){return a.setState({flyU:e})}}),o=a.flyNode.addComponent("mp.camera",{enabled:!0}),a.camCon.bind("curve",r,"curve"),o.bind("camera",a.camCon,"camera"),a.flyNode.start(),s=a.camCon.getPoseAt(0),i=s.position,c=s.rotation,e.next=15,n.Mode.moveTo(n.Mode.Mode.DOLLHOUSE,{position:i,rotation:{x:180*c.x/Math.PI,y:180*c.y/Math.PI}});case 15:a.setState({flyU:0}),a.playFly();case 17:case"end":return e.stop()}}),e)}))),a.exitFly=Object(l.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(h.a)(a),n=t.sdk,(r=t.flyNode)&&r.stop(),n&&n.Mode.moveTo(n.Mode.Mode.INSIDE),a.setState({flyModePlaying:!1});case 4:case"end":return e.stop()}}),e)}))),a.playFly=function(){a.camCon&&(a.camCon.inputs.enabled=!0),a.setState({flyModePlaying:!0})},a.pauseFly=function(){a.camCon&&(a.camCon.inputs.enabled=!1),a.setState({flyModePlaying:!1})},a.setFlyU=function(e){a.camCon&&a.camCon.setU(e)},a.toggleMenu=function(){a.setState({menuEnabled:!a.state.menuEnabled})};var r=a.handleUrlParams();return a.src="".concat("/sdk_pathfinder","/bundle/showcase.html?").concat(r),a.state={sweepData:[],menuEnabled:!0,flyModeEnabled:!1,flyU:0,flyModePlaying:!1},a}return Object(p.a)(n,[{key:"handleUrlParams",value:function(){var e=new URLSearchParams(window.location.search);this.lang=e.get("lang");for(var t=0,n=Object.entries(J);t<n.length;t++){var a=Object(i.a)(n[t],2),r=a[0],o=a[1];e.has(r)||e.append(r,""+o)}return e.toString()}},{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("showcase",J.applicationKey);case 2:return this.sdk=e.sent,e.next=5,q(this.sdk);case 5:return e.next=7,this.sdk.Model.getData().then(function(){var e=Object(l.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("GycExKiYVFp"!==n.sid){e.next=5;break}return(r=[]).push({label:"Revitalizing the Great Hall",description:"Within the building\u2019s Great Hall, new vestibule spaces were created to connect the main circulation corridor to new restrooms. Elevator lobbies and office suite entrances were treated as extensions of the original McKim design, with matching marble flooring and wall base, and stained oak millwork-encased openings. The installation of fire sprinklers throughout the building helped call attention to new opportunities for restoring spatial clarity; obsolete steel and wired glass partitions installed in the main corridor in the 1970s were removed, opening up the axial hallway to its original extents and further enhancing spatial connectivity.",anchorPosition:{x:16.55,y:1.28-1.5,z:6.69},stemVector:{x:0,y:1,z:0}}),e.next=5,null===(a=t.sdk)||void 0===a?void 0:a.Mattertag.add(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:this.sdk.Model.getData().then((function(e){var n=e.sweeps;t.pathfinder=new F(n),t.setState({sweepData:n}),t.sweepAlias=z[e.sid]})),this.sdk.Sweep.data.subscribe({onCollectionUpdated:function(e){t.setState({sweepMap:e})}}),this.sdk.Floor.data.subscribe({onCollectionUpdated:function(e){t.setState({floorMap:e})}}),this.sdk.Sweep.current.subscribe((function(e){e.sid&&console.log(e.sid,e.position),t.setState({currSweepId:e.sid})})),this.translateMattertags();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.currSweepId,r=n.selectedSweepId;(a!==t.currSweepId||r!==t.selectedSweepId)&&this.handlePath()}},{key:"handlePath",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.currSweepId,a=t.selectedSweepId,r=t.sweepMap,o=this.sdk,s=this.pathfinder,!(o&&r&&n&&a&&s)){e.next=14;break}return e.next=5,s.findShortestPath(n,a);case 5:if(i=e.sent){e.next=8;break}return e.abrupt("return");case 8:return this.pathNode&&this.pathNode.stop(),e.next=11,o.Scene.createNode();case 11:this.pathNode=e.sent,this.setState({path:i.length>1?this.pathNode.addComponent(A,{path:i.map((function(e){return U(e,r)})),opacity:.7,radius:.12,stepMultiplier:10}):void 0}),this.pathNode.start();case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"translateMattertags",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.sdk,n=this.lang,!t||!n){e.next=9;break}return a=new L(n),e.next=5,t.Mattertag.getData();case 5:for(r=e.sent,o=function(e){var n=r[e],o=n.sid,s=n.label,c=n.description,u=n.media;a.translate([s,c],(function(e){var n=Object(i.a)(e,2),a=n[0],r=n[1];t.Mattertag.editBillboard(o,{label:a,description:r,media:u})}))},s=0;s<r.length;s++)o(s);a.checkUsage();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeLang",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.lang=t,this.translateMattertags();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.currSweepId,a=t.selectedSweepId,r=t.sweepData,o=t.menuEnabled,s=t.flyModeEnabled,i=t.flyU,c=t.path,u=t.flyModePlaying,l=t.floorMap;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{id:"frame-container",children:[Object(j.jsx)(m,{src:this.src,disableClicks:s}),Object(j.jsx)("div",{id:"overlay-container",children:c&&(s?Object(j.jsx)(X,{playing:u,onPlay:this.playFly,onPause:this.pauseFly,onExit:this.toggleFlyMode,setU:this.setFlyU,u:i}):Object(j.jsxs)("div",{className:"nofly-button-container",children:[Object(j.jsx)(W,{onClick:this.toggleFlyMode}),Object(j.jsx)(Y,{onClick:this.clearSelection,icon:"close",classes:["clear-button"]})]}))})]}),!o&&Object(j.jsx)(E,{onClick:this.toggleMenu}),o&&Object(j.jsx)(D,{currSweepId:n,selectedSweepId:a,sweepData:r,sweepAlias:this.sweepAlias,floorMap:l,onChange:this.onOptionSelect,onClose:this.toggleMenu,onChangeLang:function(t){return e.changeLang(t.target.value)}})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Z,{})}),document.getElementById("root"))}]),[[37,1,2]]]);
//# sourceMappingURL=main.a5688181.chunk.js.map