System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){var t;n._RF.push({},"da118eYzAZBiJI8OrOu36Uy","gameManager",void 0);var a=e("default",(function(){this.http=null,this.ServerInfo=null}));t=a,a.Instance=new t,n._RF.pop()}}}));

System.register("chunks:///_virtual/gameRoomScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,t,n,c;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,n=e._decorator,c=e.Component}],execute:function(){var r;t._RF.push({},"19463D4KW1FfISUY8FgtCLo","gameRoomScene",void 0);var u=n.ccclass;n.property,e("gameRoomScene",u("gameRoomScene")(r=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.start=function(){},n.update=function(e){},t}(c))||r);t._RF.pop()}}}));

System.register("chunks:///_virtual/hallScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var o,e,t,i,l,c,r,u;return{setters:[function(n){o=n.applyDecoratedDescriptor,e=n.inheritsLoose,t=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){l=n.cclegacy,c=n._decorator,r=n.Node,u=n.Component}],execute:function(){var a,s,f,h,p,g,d,b,v,y,m,z,A,R,S;l._RF.push({},"d7e0cNvQSxNxJUz5zO2Y3Rh","hallScene",void 0);var w=c.ccclass,V=c.property;n("hallScene",(a=w("hallScene"),s=V(r),f=V(r),h=V(r),p=V(r),g=V(r),d=V(r),a((y=o((v=function(n){function o(){for(var o,e=arguments.length,l=new Array(e),c=0;c<e;c++)l[c]=arguments[c];return o=n.call.apply(n,[this].concat(l))||this,t(o,"商城",y,i(o)),t(o,"戰績",m,i(o)),t(o,"反饋",z,i(o)),t(o,"玩法",A,i(o)),t(o,"設置",R,i(o)),t(o,"個人資料",S,i(o)),o.開啟選單=!1,o}e(o,n);var l=o.prototype;return l.onFace=function(){this.開啟選單||(this.個人資料.active=!0,this.開啟選單=!0)},l.onBack=function(){this.商城.active=!1,this.戰績.active=!1,this.反饋.active=!1,this.玩法.active=!1,this.設置.active=!1,this.個人資料.active=!1,this.開啟選單=!1,console.log("確定按鈕被點擊")},l.onInRookieRoom=function(){console.log("確定按鈕被點擊")},l.onInMasterRoom=function(){console.log("確定按鈕被點擊")},l.onMall=function(){this.開啟選單||(this.商城.active=!0,this.開啟選單=!0)},l.onAddValue150=function(){console.log("確定按鈕被點擊")},l.onAddValue300=function(){console.log("確定按鈕被點擊")},l.onAddValue500=function(){console.log("確定按鈕被點擊")},l.onAddValue1000=function(){console.log("確定按鈕被點擊")},l.onAddValue2000=function(){console.log("確定按鈕被點擊")},l.onAddValue3290=function(){console.log("確定按鈕被點擊")},l.onRecord=function(){this.開啟選單||(this.戰績.active=!0,this.開啟選單=!0)},l.onFeedback=function(){this.開啟選單||(this.反饋.active=!0,this.開啟選單=!0)},l.onFbSummit=function(){console.log("確定按鈕被點擊")},l.onSetting=function(){this.開啟選單||(this.設置.active=!0,this.開啟選單=!0)},l.onMusic=function(){console.log("確定按鈕被點擊")},l.onAudio=function(){console.log("確定按鈕被點擊")},l.onLogout=function(){console.log("確定按鈕被點擊")},l.onRule=function(){this.開啟選單||(this.玩法.active=!0,this.開啟選單=!0)},o}(u)).prototype,"商城",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=o(v.prototype,"戰績",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=o(v.prototype,"反饋",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=o(v.prototype,"玩法",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=o(v.prototype,"設置",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=o(v.prototype,"個人資料",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=v))||b));l._RF.pop()}}}));

System.register("chunks:///_virtual/HTTP.ts",["cc"],(function(){var c;return{setters:[function(t){c=t.cclegacy}],execute:function(){c._RF.push({},"b92c4dY93VAx5+J+x/vYvO0","HTTP",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/loginScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,o,t,r,c,l,a;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,o=n.initializerDefineProperty,t=n.assertThisInitialized},function(n){r=n.cclegacy,c=n._decorator,l=n.Node,a=n.Component}],execute:function(){var s,u,f,p,g,h,v;r._RF.push({},"4695ab0ZjpFXLQchgyQ69nq","loginScene",void 0);var y=c.ccclass,b=c.property;n("loginScene",(s=y("loginScene"),u=b(l),f=b(l),s((h=e((g=function(n){function e(){for(var e,i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r))||this,o(e,"會員註冊",h,t(e)),o(e,"會員登入",v,t(e)),e.開啟選單=!1,e}i(e,n);var r=e.prototype;return r.onLoad=function(){this.會員註冊.active=!1,this.會員登入.active=!1},r.onMemberregist=function(){this.開啟選單||(this.會員註冊.active=!0,this.開啟選單=!0)},r.onMemberLogin=function(){this.開啟選單||(this.會員登入.active=!0,this.開啟選單=!0)},r.onCheckName=function(){console.log("確定按鈕被點擊")},r.onVerif=function(){console.log("確定按鈕被點擊")},r.onConfirmregist=function(){console.log("確定按鈕被點擊")},r.onBack=function(){this.會員註冊.active=!1,this.會員登入.active=!1,this.開啟選單=!1},r.onConfirmLogin=function(){console.log("確定按鈕被點擊")},r.onFindpw=function(){console.log("確定按鈕被點擊")},e}(a)).prototype,"會員註冊",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(g.prototype,"會員登入",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=g))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./HTTP.ts","./gameManager.ts","./urlAPI.ts","./gameRoomScene.ts","./hallScene.ts","./loginScene.ts","./startScene.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/startScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,r,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,o=t.Component}],execute:function(){var c;e._RF.push({},"ef6a2xWb5FFRppcUPNvDQGV","startScene",void 0);var s=r.ccclass;r.property,t("start",s("start")(c=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.start=function(){},r.update=function(t){},r.onSure=function(){console.log("確定按鈕被點擊")},e}(o))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/urlAPI.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"f8623C0n3REDKPsm0/GFCSe","urlAPI",void 0),e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});