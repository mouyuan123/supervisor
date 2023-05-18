"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2094],{72094:function(e,t,r){r.r(t);var n=r(99312),s=r(81043),a=r(88962),i=r(33368),o=r(71650),c=r(82390),u=r(69205),d=r(70906),h=r(91808),l=r(88771),p=r(47838),f=r(68144),v=r(14243),b=r(47181),k=r(83849),x=r(15493),g=r(96151),y=(r(5666),r(34154)),m=r(41682),_=r(63864);function Z(e){return document.cookie="ingress_session=".concat(e,";path=/api/hassio_ingress/;SameSite=Strict").concat("https:"===location.protocol?";Secure":""),e}var w,S,A,C,I,P,K=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,_.I)(t.config.version,2021,2,4)){e.next=5;break}return e.next=3,t.callWS({type:"supervisor/api",endpoint:"/ingress/session",method:"post"});case 3:return r=e.sent,e.abrupt("return",Z(r.session));case 5:return e.next=7,t.callApi("POST","hassio/ingress/session");case 7:return s=e.sent,e.abrupt("return",Z(s.data.session));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,_.I)(t.config.version,2021,2,4)){e.next=4;break}return e.next=3,t.callWS({type:"supervisor/api",endpoint:"/ingress/validate_session",method:"post",data:{session:r}});case 3:return e.abrupt("return");case 4:return e.next=6,t.callApi("POST","hassio/ingress/validate_session",{session:r});case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),z=r(26765);r(15291),r(15803),(0,h.Z)([(0,v.Mo)("hassio-ingress-view")],(function(e,t){var r,h,_=function(t){(0,u.Z)(n,t);var r=(0,d.Z)(n);function n(){var t;(0,o.Z)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return t=r.call.apply(r,[this].concat(a)),e((0,c.Z)(t)),t}return(0,i.Z)(n)}(t);return{F:_,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"ingressPanel",value:function(){return!1}},{kind:"field",decorators:[(0,v.SB)()],key:"_addon",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",key:"_sessionKeepAlive",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,l.Z)((0,p.Z)(_.prototype),"disconnectedCallback",this).call(this),this._sessionKeepAlive&&(clearInterval(this._sessionKeepAlive),this._sessionKeepAlive=void 0)}},{kind:"method",key:"render",value:function(){if(!this._addon)return(0,f.dy)(w||(w=(0,a.Z)([" <hass-loading-screen></hass-loading-screen> "])));var e=(0,f.dy)(S||(S=(0,a.Z)(['<iframe title="','" src="','"> </iframe>'])),this._addon.name,this._addon.ingress_url);return this.ingressPanel?(0,f.dy)(C||(C=(0,a.Z)(["",""])),this.narrow||"always_hidden"===this.hass.dockedSidebar?(0,f.dy)(I||(I=(0,a.Z)(['<div class="header"> <ha-icon-button .label="','" .path="','" @click="','"></ha-icon-button> <div class="main-title">',"</div> </div> ",""])),this.hass.localize("ui.sidebar.sidebar_toggle"),"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",this._toggleMenu,this._addon.name,e):e):(0,f.dy)(A||(A=(0,a.Z)(['<hass-subpage .hass="','" .header="','" .narrow="','"> '," </hass-subpage>"])),this.hass,this._addon.name,this.narrow,e)}},{kind:"method",key:"firstUpdated",value:(h=(0,s.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.route.path){e.next=34;break}if(!(t=(0,x.io)("addon"))){e.next=34;break}return e.prev=3,e.next=6,(0,y.AD)(this.hass,t);case 6:r=e.sent,e.next=17;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,(0,z.Ys)(this,{text:(0,m.js)(e.t0),title:t});case 13:return e.next=15,(0,g.y)();case 15:return(0,k.c)("/hassio/store",{replace:!0}),e.abrupt("return");case 17:if(r.version){e.next=25;break}return e.next=20,(0,z.Ys)(this,{text:this.supervisor.localize("my.error_addon_not_installed"),title:r.name});case 20:return e.next=22,(0,g.y)();case 22:(0,k.c)("/hassio/addon/".concat(r.slug,"/info"),{replace:!0}),e.next=34;break;case 25:if(r.ingress){e.next=33;break}return e.next=28,(0,z.Ys)(this,{text:this.supervisor.localize("my.error_addon_no_ingress"),title:r.name});case 28:return e.next=30,(0,g.y)();case 30:(0,k.c)("/hassio/addon/".concat(r.slug,"/info"),{replace:!0}),e.next=34;break;case 33:(0,k.c)("/hassio/ingress/".concat(r.slug),{replace:!0});case 34:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return h.apply(this,arguments)})},{kind:"method",key:"updated",value:function(e){if((0,l.Z)((0,p.Z)(_.prototype),"updated",this).call(this,e),e.has("route")){var t=this.route.path.substr(1),r=e.get("route"),n=r?r.path.substr(1):void 0;t&&t!==n&&this._fetchData(t)}}},{kind:"method",key:"_fetchData",value:(r=(0,s.Z)((0,n.Z)().mark((function e(t){var r,a,i,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=K(this.hass),e.prev=1,e.next=4,(0,y.AD)(this.hass,t);case 4:a=e.sent,e.next=15;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,(0,z.Ys)(this,{text:"Unable to fetch add-on info to start Ingress",title:"Supervisor"});case 11:return e.next=13,(0,g.y)();case 13:return history.back(),e.abrupt("return");case 15:if(a.ingress_url){e.next=22;break}return e.next=18,(0,z.Ys)(this,{text:"Add-on does not support Ingress",title:a.name});case 18:return e.next=20,(0,g.y)();case 20:return history.back(),e.abrupt("return");case 22:if("started"===a.state){e.next=29;break}return e.next=25,(0,z.Ys)(this,{text:"Add-on is not running. Please start it first",title:a.name});case 25:return e.next=27,(0,g.y)();case 27:return(0,k.c)("/hassio/addon/".concat(a.slug,"/info"),{replace:!0}),e.abrupt("return");case 29:return e.prev=29,e.next=32,r;case 32:i=e.sent,e.next=43;break;case 35:return e.prev=35,e.t1=e.catch(29),e.next=39,(0,z.Ys)(this,{text:"Unable to create an Ingress session",title:a.name});case 39:return e.next=41,(0,g.y)();case 41:return history.back(),e.abrupt("return");case 43:this._sessionKeepAlive&&clearInterval(this._sessionKeepAlive),this._sessionKeepAlive=window.setInterval((0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(o.hass,i);case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,K(o.hass);case 9:i=e.sent;case 10:case"end":return e.stop()}}),e,null,[[0,5]])}))),6e4),this._addon=a;case 46:case"end":return e.stop()}}),e,this,[[1,7],[29,35]])}))),function(e){return r.apply(this,arguments)})},{kind:"method",key:"_toggleMenu",value:function(){(0,b.B)(this,"hass-toggle-menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,f.iv)(P||(P=(0,a.Z)(["iframe{display:block;width:100%;height:100%;border:0}.header+iframe{height:calc(100% - 40px)}.header{display:flex;align-items:center;font-size:16px;height:40px;padding:0 16px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box;--mdc-icon-size:20px}.main-title{margin:0 0 0 24px;line-height:20px;flex-grow:1}ha-icon-button{pointer-events:auto}hass-subpage{--app-header-background-color:var(--sidebar-background-color);--app-header-text-color:var(--sidebar-text-color);--app-header-border-bottom:1px solid var(--divider-color)}"])))}}]}}),f.oi)},15493:function(e,t,r){r.d(t,{Q2:function(){return a},io:function(){return i},ou:function(){return o}});var n=r(62746),s=r(40039),a=function(){var e,t={},r=new URLSearchParams(location.search),a=(0,s.Z)(r.entries());try{for(a.s();!(e=a.n()).done;){var i=(0,n.Z)(e.value,2),o=i[0],c=i[1];t[o]=c}}catch(u){a.e(u)}finally{a.f()}return t},i=function(e){return new URLSearchParams(window.location.search).get(e)},o=function(e){var t=new URLSearchParams;return Object.entries(e).forEach((function(e){var r=(0,n.Z)(e,2),s=r[0],a=r[1];t.append(s,a)})),t.toString()}}}]);
//# sourceMappingURL=2094-tgv1BHrk-vs.js.map