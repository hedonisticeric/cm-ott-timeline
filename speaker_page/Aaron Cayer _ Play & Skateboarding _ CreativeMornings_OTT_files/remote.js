(function(g){var window=this;var owa=function(a,b){var c=[];g.Dl(b,function(a){try{var b=g.oD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.nD(b)&&c.push(a):c.push(a)},a);
return c},pwa=function(a,b){var c=owa(a,b);
(0,g.H)(c,function(a){g.oD.prototype.remove.call(this,a)},a)},F8=function(a,b){g.V0.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.U=a;this.F={};this.R(a,"onMdxReceiversChange",this.J);this.R(a,"presentingplayerstatechange",this.J);this.J()},qwa=function(){var a=g.LG;
pwa(a,a.g.Td(!0))},G8=function(a){g.nH.call(this,"ScreenServiceProxy");
this.cd=a;this.o=[];this.o.push(this.cd.$_s("screenChange",(0,g.B)(this.mT,this)));this.o.push(this.cd.$_s("onlineScreenChange",(0,g.B)(this.xP,this)))},H8=function(a){g.aH("cloudview",a)},rwa=function(a){H8("setApiReady_ "+a);
g.v("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},swa=function(a){g.cG[a]&&(a=g.cG[a],(0,g.H)(a,function(a){g.aG[a]&&delete g.aG[a]}),a.length=0)},J8=function(){return g.x("yt.mdx.remote.connection_")},K8=function(a){g.v("yt.mdx.remote.connectData_",a,void 0)},twa=function(a){g.v("yt.mdx.remote.currentScreenId_",a,void 0)},L8=function(){return g.x("yt.mdx.remote.currentScreenId_")},N8=function(){if(!M8){var a=g.x("yt.mdx.remote.screenService_");
M8=a?new G8(a):null}return M8},O8=function(a){g.v("yt.mdx.remote.cloudview.initializing_",a,void 0)},P8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},Q8=function(a){H8("setCastInstalled_ "+a);
g.NG("yt-remote-cast-installed",a)},R8=function(a){g.aH("cloudview",a)},uwa=function(a,b){I8().init(a,b)},S8=function(){return!!g.OG("yt-remote-cast-installed")},vwa=function(){H8("dispose");
var a=I8();a&&a.dispose();g.v("yt.mdx.remote.cloudview.instance_",null,void 0);rwa(!1);g.eG(T8);T8.length=0},wwa=function(){var a=window.document.createElement("a");
g.Gd(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ta(a)},xwa=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},ywa=function(a){var b=g.$F();
if(b)if(b.clear(a),a)swa(a);else for(var c in g.cG)swa(c)},U8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},W8=function(a){var b=J8();
K8(null);a||twa("");g.v("yt.mdx.remote.connection_",a,void 0);V8&&((0,g.H)(V8,function(b){b(a)}),V8.length=0);
b&&!a?g.hG("yt-remote-connection-change",!1):!b&&a&&g.hG("yt-remote-connection-change",!0)},zwa=function(){return g.x("yt.mdx.remote.connectData_")},X8=function(){var a=L8();
if(!a)return null;var b=N8().ae();return g.mH(b,a)},Awa=function(a,b){Q8(!0);
O8(!1);uwa(a,function(a){a?(rwa(!0),g.fG("yt-remote-cast2-api-ready")):(R8("Failed to initialize cast API."),Q8(!1),g.PG("yt-remote-cast-available"),g.PG("yt-remote-cast-receiver"),vwa());b(a)})},Bwa=function(){return S8()?I8()?I8().getCastSession():(R8("getCastSelector: Cast is not initialized."),null):(R8("getCastSelector: Cast API is not installed!"),null)},Cwa=function(){var a=wwa(),b=window.document.getElementById(a),c=b&&g.pF(b,"loaded");
c||b&&!c||(b=xwa(a,function(){g.pF(b,"loaded")||(g.qF(b,"loaded","true"),g.fG(a),g.xE(g.za(ywa,a),0))}))},Dwa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},Ewa=function(){if(g.opa){var a=2,b=g.Bh(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Gh("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Dh,c)}},Z8=function(a,b){L8();
X8()&&X8();twa(a.id);var c=new g.rI(Y8,a,U8());c.connect(b,zwa());c.subscribe("beforeDisconnect",function(a){g.hG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){J8()&&(J8(),W8(null))});
W8(c)},$8=function(){var a=g.sH();
if(!a)return null;var b=N8().ae();return g.mH(b,a)},a9=function(a){g.aH("remote",a)},b9=function(){var a=J8();
return!!a&&3!=a.getProxyState()},c9=function(){P8()?I8().stopSession():R8("stopSession called before API ready.");
var a=J8();a&&(a.disconnect(1),W8(null))},Fwa=function(){var a=N8().cd.$_gos();
var b=X8();b&&J8()&&(g.lH(a,b)||a.push(b));return Dwa(a)},e9=function(a,b){g.RF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.CB;this.A=this.o=null;this.J=(0,g.B)(this.DN,this);this.F=(0,g.B)(this.il,this);this.G=(0,g.B)(this.CN,this);this.K=(0,g.B)(this.QN,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Zt,this),Gwa(this))):c=3;0!=c&&(b?this.Zt(c):g.xE((0,g.B)(function(){this.Zt(c)},this),0));
var d=Bwa();d&&d9(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},f9=function(a){return new g.gI(a.B.getPlayerContextData())},Hwa=function(a,b,c,d,e){var f=f9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.kI(f,b,d);g.t(c)&&(g.iI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);g9(a,"setPlaylist",l);e||h9(a,f)},Gwa=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.za(this.PP,a),this))},a)},Iwa=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},i9=function(a,b){50>a.C.Kc()&&g.EB(a.C,b)},j9=function(a,b,c){var d=f9(a);
g.iI(d,c);-1E3!=d.g&&(d.g=b);h9(a,d)},g9=function(a,b,c){a.B.sendMessage(b,c)},h9=function(a,b){Iwa(a);
a.B.setPlayerContextData(g.lI(b));Gwa(a)},d9=function(a,b){a.A&&(a.A.removeUpdateListener(a.J),a.A.removeMediaListener(a.F),a.il(null));
a.A=b;a.A&&(k9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.J),a.A.addMediaListener(a.F),a.A.media.length&&a.il(a.A.media[0]))},Jwa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=f9(a);b.contentId!=d.videoId&&k9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.iI(d,a.o.getEstimatedTime());h9(a,d)}else k9("No cast media video. Ignoring state update.")},k9=function(a){g.aH("CP",a)},l9=function(a,b,c){return(0,g.B)(function(a){this.jc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.jc("Retrying "+b+" using MDx browser channel."),g9(this,b,c))},a)},Kwa=function(a,b){var c=!1;
I8()||(c=new g.aI(a,b),c.subscribe("yt-remote-cast2-availability-change",function(a){g.NG("yt-remote-cast-available",a);g.hG("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){H8("onReceiverSelected: "+a.friendlyName);
g.NG("yt-remote-cast-receiver",a);g.hG("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){H8("onReceiverResumed: "+a.friendlyName);
g.NG("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){H8("onSessionChange: "+g.iH(a));
a||g.PG("yt-remote-cast-receiver");g.hG("yt-remote-cast2-session-change",a)}),g.v("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
H8("cloudview.createSingleton_: "+c);return c},Lwa=function(){var a=0<=g.Hb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.UE||a},m9=function(a,b){P8()?I8().setConnectedScreenStatus(a,b):R8("setConnectedScreenStatus called before ready.")},Mwa=function(){H8("clearCurrentReceiver");
g.PG("yt-remote-cast-receiver")},Nwa=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Ewa();a({command:"cast.sender.init"});return}}if(window.chrome)if(Ewa(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.zh();55<=b?a="55":50<=b&&(a="50");g.Gh("//www.gstatic.com/eureka/clank"+a+g.Eh,g.Dh)}else g.Hh(0);else g.Dh()},Owa=function(a){a?(g.NG("yt-remote-session-app",a.app),g.NG("yt-remote-session-name",a.name)):(g.PG("yt-remote-session-app"),g.PG("yt-remote-session-name"));
g.v("yt.mdx.remote.channelParams_",a,void 0)},Pwa=function(){var a=U8();
if(g.Ub(a)){var a=g.rH(),b=g.OG("yt-remote-session-name")||"",c=g.OG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.v("yt.mdx.remote.channelParams_",a,void 0)}},Qwa=function(){var a=$8();
a?(a9("Resume connection to: "+g.iH(a)),Z8(a,0)):(g.AH(),Mwa(),a9("Skipping connecting because no session screen found."))},Rwa=function(a){a9("remote.onCastSessionChange_: "+g.iH(a));
if(a){var b=X8();b&&b.id==a.id?m9(b.id,"YouTube TV"):(b&&c9(),Z8(a,1))}else J8()&&c9()},Swa=function(){var a=Fwa(),b=X8();
b||(b=$8());return g.ab(a,function(a){return b&&g.fH(b,a.key)?!0:!1})},Twa=function(){var a=g.OG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Uwa=function(a,b,c,d,e){Lwa()?Kwa(b,e)&&(O8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Awa(a,c):(window.__onGCastApiAvailable=function(b,d){b?Awa(a,c):(R8("Failed to load cast API: "+d),Q8(!1),O8(!1),g.PG("yt-remote-cast-available"),g.PG("yt-remote-cast-receiver"),vwa(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Cwa():Nwa())):H8("Cannot initialize because not running Chrome")},
Vwa=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.ug(a)||"";b&&(this.port=":"+b);this.domain=g.tg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Sa(a,"10.0")&&(this.o=!1))},Wwa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);
return c},n9=function(){var a=Swa();
!a&&S8()&&Twa()&&(a={key:"cast-selector-receiver",name:Twa()});return a},Xwa=function(){var a=Fwa();
S8()&&g.OG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Ywa=function(a){var b={device:"Desktop",
app:"youtube-desktop"},b=g.OD("MDX_CONFIG")||b;g.LG&&qwa();g.uH();Y8||(Y8=new Vwa(b?b.loungeApiHost:void 0),g.CH()&&(Y8.g="/api/loungedev"));V8||(V8=g.x("yt.mdx.remote.deferredProxies_")||[],g.v("yt.mdx.remote.deferredProxies_",V8,void 0));Pwa();var c=N8();if(!c){var d=new g.NH(Y8);g.v("yt.mdx.remote.screenService_",d,void 0);c=N8();Uwa(a,d,function(a){a?L8()&&m9(L8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.hG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),
b?b.appId:void 0)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.v("yt.mdx.remote.initialized_",!0,void 0),a9("Initializing: "+g.lg(b)),o9.push(g.dG("yt-remote-cast2-availability-change",function(){g.hG("yt-remote-receiver-availability-change")})),o9.push(g.dG("yt-remote-cast2-receiver-selected",function(){K8(null);
g.hG("yt-remote-auto-connect","cast-selector-receiver")})),o9.push(g.dG("yt-remote-cast2-receiver-resumed",function(){g.hG("yt-remote-receiver-resumed","cast-selector-receiver")})),o9.push(g.dG("yt-remote-cast2-session-change",Rwa)),o9.push(g.dG("yt-remote-connection-change",function(a){a?m9(L8(),"YouTube TV"):$8()||(m9(null,null),Mwa())})),a=U8(),b.isAuto&&(a.id+="#dial"),g.$E("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),a9(" -- with channel params: "+
g.lg(a)),Owa(a),c.start(),L8()||Qwa())},p9=function(){S8()?I8()?P8()?(H8("Requesting cast selector."),I8().requestSession()):(H8("Wait for cast API to be ready to request the session."),T8.push(g.dG("yt-remote-cast2-api-ready",p9))):R8("requestCastSelector: Cast is not initialized."):R8("requestCastSelector: Cast API is not installed!")},q9=function(a,b,c){g.N.call(this);
this.F=a;this.U=b;this.o=new g.OF(this);g.O(this,this.o);this.o.R(b,"onCaptionsTrackListChanged",this.QO);this.o.R(b,"captionschanged",this.BN);this.o.R(b,"captionssettingschanged",this.PB);this.o.R(b,"videoplayerreset",this.Zn);this.o.R(b,"mdxautoplaycancel",this.vG);this.O=this.o.R(b,"onVolumeChange",this.mA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.xA,this);c.subscribe("remotePlayerChange",this.ll,this);c.subscribe("remoteQueueChange",this.Zn,this);c.subscribe("autoplayUpNext",this.Zz,
this);c.subscribe("previousNextChange",this.uA,this);c.subscribe("nowAutoplaying",this.nA,this);c.subscribe("autoplayDismissed",this.Yz,this);this.suggestion=null;this.G=new g.UJ(64);this.A=new g.qt(this.KB,500,this);g.O(this,this.A);this.B=new g.qt(this.LB,1E3,this);g.O(this,this.B);this.C={};this.K=new g.qt(this.dC,1E3,this);g.O(this,this.K);this.J=new g.bk(this.wL,1E3,this);g.O(this,this.J);this.M=g.y;this.PB();this.Zn();this.ll()},r9=function(a,b){var c=a.F,d=a.U.ia().lengthSeconds;
c.J=b||0;c.g.Y("progresssync",b,d)},Zwa=function(a){r9(a,0);
a.A.stop();s9(a,new g.UJ(64))},u9=function(a,b){if(t9(a)&&!a.D){var c=null;
b&&(c={style:a.U.ji()},g.bc(c,b));a.g.EB(a.U.ia().videoId,c);a.C=f9(a.g).o}},v9=function(a,b){var c=a.U.Pf();
c?Hwa(a.g,a.U.ia().videoId,b,c.Yd(),c.listId.toString()):Hwa(a.g,a.U.ia().videoId,b);s9(a,new g.UJ(1))},$wa=function(a,b){if(b){var c=a.U.yc("captions","tracklist",{Tx:1});
c&&c.length?(a.U.Dd("captions","track",b),a.D=!1):(a.U.Rk("captions"),a.D=!0)}else a.U.Dd("captions","track",{})},t9=function(a){return f9(a.g).videoId==a.U.ia().videoId},s9=function(a,b){a.B.stop();
var c=a.G;if(!g.$J(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.U;g.c2(e.app,d,e.playerType)}a.G=b;axa(a.F,c,b)}},w9=function(a){g.X.call(this,{H:"div",
N:"ytp-remote",L:[{H:"div",N:"ytp-remote-display-status",L:[{H:"div",N:"ytp-remote-display-status-icon",L:[g.TD()]},{H:"div",N:"ytp-remote-display-status-text",L:["{{statustext}}"]}]}]});this.o=new g.LV(this,250);g.O(this,this.o);this.A=a;this.R(a,"presentingplayerstatechange",this.B);bxa(this,g.VU(a))},bxa=function(a,b){if(3==a.A.Wa()){var c={RECEIVER_NAME:a.A.yc("remote","currentReceiver").name},c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.xb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Fa("statustext",c);a.o.show()}else a.o.hide()},x9=function(a){g.AV.call(this,a);
this.A={key:g.kH(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.K=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.UJ(64);this.J=0;var b=g.OU(a).D;b&&(b=b.A&&b.A.g)&&(b=new F8(a,b),g.O(this,b));b=new w9(a);g.O(this,b);g.pV(a,b.element,5)},axa=function(a,b,c){a.F=c;
a.g.Y("presentingplayerstatechange",new g.eK(c,b))},y9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)c9();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ia().videoId;if(c||d){var e=a.g.Pf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.gc(k).videoId}else f=[a.g.ia().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Gy(),0),currentTime:a.g.getCurrentTime()}}else c=null;a9("Connecting to: "+g.lg(b));"cast-selector-receiver"==b.key?(K8(c||null),c=c||null,P8()?I8().setLaunchParams(c):R8("setLaunchParams called before ready.")):!c&&b9()&&L8()==b.key?g.hG("yt-remote-connection-change",!0):
(c9(),K8(c||null),c=N8().ae(),(c=g.mH(c,b.key))&&Z8(c,1))}};
g.p(F8,g.V0);F8.prototype.J=function(){var a=this.U.yc("remote","receivers");a&&1<a.length&&!this.U.yc("remote","quickCast")?(this.F=g.Db(a,this.B,this),g.X0(this,(0,g.I)(a,this.B)),a=this.U.yc("remote","currentReceiver"),g.W0(this,this.B(a)),this.enable(!0)):this.enable(!1)};
F8.prototype.B=function(a){return a.key};
F8.prototype.hf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
F8.prototype.rd=function(a){g.V0.prototype.rd.call(this,a);this.U.Dd("remote","currentReceiver",this.F[a]);this.A.Rb()};
g.D(G8,g.nH);g.h=G8.prototype;g.h.ae=function(a){return this.cd.$_gs(a)};
g.h.contains=function(a){return!!this.cd.$_c(a)};
g.h.get=function(a){return this.cd.$_g(a)};
g.h.start=function(){this.cd.$_st()};
g.h.Vo=function(a,b,c){this.cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.cd.$_r(a,b,c)};
g.h.Fo=function(a,b,c,d){this.cd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.cd.$_ubk(this.o[a]);this.o.length=0;this.cd=null;G8.aa.X.call(this)};
g.h.mT=function(){this.Y("screenChange")};
g.h.xP=function(){this.Y("onlineScreenChange")};
var M8=null,T8=[],V8=null,Y8=null;g.D(e9,g.RF);g.h=e9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,l9(this,"play")):g9(this,"play"),j9(this,1,g.jI(f9(this))),this.Y("remotePlayerChange")):i9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,l9(this,"pause")):g9(this,"pause"),j9(this,2,g.jI(f9(this))),this.Y("remotePlayerChange")):i9(this,this.pause)};
g.h.pC=function(a){if(1==this.g){if(this.o){var b=f9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.xb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,l9(this,"seekTo",{newTime:a}))}else g9(this,"seekTo",{newTime:a});j9(this,3,a);this.Y("remotePlayerChange")}else i9(this,g.za(this.pC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,l9(this,"stopVideo")):g9(this,"stopVideo");var a=f9(this);a.index=-1;a.videoId="";g.hI(a);h9(this,a);this.Y("remotePlayerChange")}else i9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=f9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.B)(function(){k9("set receiver volume: "+d)},this),(0,g.B)(function(){this.jc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.B)(function(){k9("set receiver muted: "+b)},this),(0,g.B)(function(){this.jc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);g9(this,"setVolume",e)}c.muted=b;c.volume=a;h9(this,c)}else i9(this,g.za(this.setVolume,a,b))};
g.h.EB=function(a,b){if(1==this.g){var c=f9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.lg(b.style),g.bc(d,c.o));g9(this,"setSubtitlesTrack",d);h9(this,c)}else i9(this,g.za(this.EB,a,b))};
g.h.Yt=function(a,b){if(1==this.g){g9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Sc.id});var c=f9(this);c.audioTrackId=b.Sc.id;h9(this,c)}else i9(this,g.za(this.Yt,a,b))};
g.h.oC=function(a,b){if(1==this.g){if(a&&b){var c=f9(this);g.kI(c,a,b);h9(this,c)}g9(this,"previous")}else i9(this,g.za(this.oC,a,b))};
g.h.nC=function(a,b){if(1==this.g){if(a&&b){var c=f9(this);g.kI(c,a,b);h9(this,c)}g9(this,"next")}else i9(this,g.za(this.nC,a,b))};
g.h.uw=function(){1==this.g?g9(this,"dismissAutoplay"):i9(this,this.uw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.Y("proxyStateChange",a,this.g)}e9.aa.dispose.call(this)};
g.h.X=function(){Iwa(this);this.B=null;this.C.clear();d9(this,null);e9.aa.X.call(this)};
g.h.Zt=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.Y("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.FB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.PP=function(a,b){this.Y(a,b)};
g.h.DN=function(a){if(!a)this.il(null),d9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=f9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,h9(this,b)}};
g.h.il=function(a){k9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Jwa(this),this.Y("remotePlayerChange")};
g.h.CN=function(a){a?(Jwa(this),this.Y("remotePlayerChange")):this.il(null)};
g.h.QN=function(){var a=Bwa();a&&d9(this,a)};
g.h.jc=function(a){g.aH("CP",a)};
var o9=[];g.h=Vwa.prototype;g.h.Wh=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Bg(b+a,{})};
g.h.Xt=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Nb:g.za(this.hT,c,!0),onError:g.za(this.gT,d),ed:g.za(this.iT,d)};b&&(c.Sb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.KE(a,c)};
g.h.hT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.gT=function(a,b){a(Error("Request error: "+b.status))};
g.h.iT=function(a){a(Error("request timed out"))};
g.p(q9,g.N);g.h=q9.prototype;g.h.X=function(){g.N.prototype.X.call(this);this.A.stop();this.B.stop();this.M();this.g.unsubscribe("proxyStateChange",this.xA,this);this.g.unsubscribe("remotePlayerChange",this.ll,this);this.g.unsubscribe("remoteQueueChange",this.Zn,this);this.g.unsubscribe("autoplayUpNext",this.Zz,this);this.g.unsubscribe("previousNextChange",this.uA,this);this.g.unsubscribe("nowAutoplaying",this.nA,this);this.g.unsubscribe("autoplayDismissed",this.Yz,this);this.g=this.F=null};
g.h.az=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(t9(this)){if(1081!=f9(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":f9(this.g).xb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.Yi(c[0],c[1]);break;case "control_subtitles_set_track":u9(this,c[0]);break;case "control_set_audio_track":c=c[0],t9(this)&&this.g.Yt(this.U.ia().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":v9(this,this.U.getCurrentTime());break;case "control_seek":v9(this,c[0]);break;case "control_subtitles_set_track":u9(this,c[0]);break;case "control_set_audio_track":c=c[0],t9(this)&&this.g.Yt(this.U.ia().videoId,c)}};
g.h.BN=function(a){this.az("control_subtitles_set_track",g.Ub(a)?null:a)};
g.h.PB=function(){var a=this.U.yc("captions","track");g.Ub(a)||u9(this,a)};
g.h.mA=function(a){if(t9(this)){this.g.unsubscribe("remotePlayerChange",this.ll,this);var b=Math.round(a.volume);a=!!a.muted;var c=f9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.ll,this)}};
g.h.QO=function(){g.Ub(this.C)||$wa(this,this.C);this.D=!1};
g.h.xA=function(a,b){this.B.stop();2==b&&this.LB()};
g.h.ll=function(){if(t9(this)){this.A.stop();var a=f9(this.g);switch(a.g){case 1081:s9(this,new g.UJ(8));break;case 1:this.KB();s9(this,new g.UJ(8));break;case 1083:case 3:s9(this,new g.UJ(9));break;case 0:s9(this,new g.UJ(2));this.J.stop();r9(this,this.U.ia().lengthSeconds);break;case 1082:s9(this,new g.UJ(4));break;case 2:s9(this,new g.UJ(4));r9(this,g.jI(a));break;case -1:s9(this,new g.UJ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},s9(this,new g.UJ(128,
a))}var a=f9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,$wa(this,a));a=f9(this.g);-1==a.volume||Math.round(this.U.getVolume())==a.volume&&this.U.Ie()==a.muted||this.K.isActive()||this.dC()}else Zwa(this)};
g.h.uA=function(){this.U.Y("mdxpreviousnextchange")};
g.h.Zn=function(){t9(this)||Zwa(this)};
g.h.vG=function(){this.g.uw()};
g.h.Zz=function(a){a&&(a=g.KE("/watch_queue_ajax",{method:"GET",Zc:{action_get_watch_queue_item:1,video_id:a},Nb:(0,g.B)(this.QQ,this)}))&&(this.M=(0,g.B)(a.abort,a))};
g.h.QQ=function(a,b){var c=new g.pQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.U.Y("mdxautoplayupnext",c)};
g.h.nA=function(a){(0,window.isNaN)(a)||this.U.Y("mdxnowautoplaying",a)};
g.h.Yz=function(){this.U.Y("mdxautoplaycanceled")};
g.h.wL=function(a,b){-1==f9(this.g).g?v9(this,a):b&&this.g.pC(a)};
g.h.dC=function(){if(t9(this)){var a=f9(this.g);this.o.Da(this.O);a.muted?this.U.mute():this.U.vg();this.U.setVolume(a.volume);this.O=this.o.R(this.U,"onVolumeChange",this.mA)}};
g.h.KB=function(){this.A.stop();if(!this.g.na()){var a=f9(this.g);a.xb()&&s9(this,new g.UJ(8));r9(this,g.jI(a));this.A.start()}};
g.h.LB=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(w9,g.X);w9.prototype.B=function(a){bxa(this,a.state)};g.p(x9,g.AV);g.h=x9.prototype;g.h.create=function(){Ywa("embedded"==g.Y(this.g).g);this.D.push(g.dG("yt-remote-before-disconnect",this.yN,this));this.D.push(g.dG("yt-remote-connection-change",this.ZP,this));this.D.push(g.dG("yt-remote-receiver-availability-change",this.vA,this));this.D.push(g.dG("yt-remote-auto-connect",this.XP,this));this.D.push(g.dG("yt-remote-receiver-resumed",this.WP,this));this.vA()};
g.h.load=function(){this.g.Op();g.AV.prototype.load.call(this);this.C=new q9(this,this.g,this.o);var a=zwa(),a=a?a.currentTime:0,b=b9()?new e9(J8(),void 0):null;0==a&&b&&(a=g.jI(f9(b)));0!=a&&(this.J=a||0,this.g.Y("progresssync",a,void 0));axa(this,this.F,this.F);g.h2(this.g.app,6)};
g.h.unload=function(){this.g.Y("mdxautoplaycanceled");this.B=this.A;g.Le(this.C,this.o);this.o=this.C=null;g.AV.prototype.unload.call(this);g.h2(this.g.app,5)};
g.h.X=function(){g.eG(this.D);g.AV.prototype.X.call(this)};
g.h.Wk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.az.apply(this.C,[].concat([a],c instanceof Array?c:Wwa(g.ka(c))))};
g.h.hH=function(){return this.loaded?this.C.suggestion:null};
g.h.Hf=function(){return this.o?f9(this.o).Hf:!1};
g.h.hasNext=function(){return this.o?f9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.iL=function(){var a=f9(this.o),b=this.g.ia();return{allowSeeking:this.g.Md(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.jL=function(){this.o&&this.o.nC()};
g.h.kL=function(){this.o&&this.o.oC()};
g.h.yN=function(a){1==a&&(this.K=this.o?f9(this.o):null)};
g.h.ZP=function(){var a=b9()?new e9(J8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Ke(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.g.ia().videoId&&this.g.Ey(a.videoId,g.jI(a)));this.g.Y("videodatachange","newdata",this.g.ia(),3)};
g.h.vA=function(){this.G=[this.A].concat(Xwa());var a=n9()||this.A;y9(this,a);this.g.ya("onMdxReceiversChange")};
g.h.XP=function(){var a=n9();y9(this,a)};
g.h.WP=function(){this.B=n9()};
g.h.hL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?p9():y9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&p9(),!0):!1}};
g.h.lL=function(){g9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Fd=function(){return!1};window._exportCheck==g.Ca&&g.v("ytmod.player.remote",x9,void 0);})(_yt_player);
