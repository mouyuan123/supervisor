"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[99],{34099:function(e,t,r){r.r(t);r(87724);var n=r(37500),i=r(26767),o=r(5701),a=r(17717),s=r(67352),c=r(47181),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_",r="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz".concat(t).concat(t).concat(t).concat(t).concat(t).concat(t),i=new RegExp(r.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(i,(function(e){return n.charAt(r.indexOf(e))})).replace(/&/g,"".concat(t,"and").concat(t)).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp("(".concat(t,")\\1+"),"g"),"$1").replace(new RegExp("^".concat(t,"+")),"").replace(new RegExp("".concat(t,"+$")),"")};r(98762),r(9381),r(81545),r(90806),r(66255);"".concat(location.protocol,"//").concat(location.host);var u,d,p,h,f,m,v,y=r(41682),b=r(60538),k=r(26765),g=r(11654),w=(r(4552),r(63864)),_=r(32594);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){P(o,n,i,a,s,"next",e)}function s(e){P(o,n,i,a,s,"throw",e)}a(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var i=O(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(){j=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!B(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=F(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:M(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=M(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function z(e){var t,r=F(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function L(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function M(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function F(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=j();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(I(o.descriptor)||I(i.descriptor)){if(B(o)||B(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(B(o)){if(B(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}L(o,i)}else t.push(o)}return t}(a.d.map(z)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,i.M)("dialog-hassio-backup")],(function(e,t){var r,i,x,P,S,O,j=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(n,t);var r=R(n);function n(){var t;C(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(T(t)),t}return n}(t);return{F:j,d:[{kind:"field",decorators:[(0,o.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_backup",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,a.S)()],key:"_restoringBackup",value:function(){return!1}},{kind:"field",decorators:[(0,s.I)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:(O=A(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b._P)(this.hass,t.slug);case 2:this._backup=e.sent,this._dialogParams=t,this._restoringBackup=!1;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._backup=void 0,this._dialogParams=void 0,this._restoringBackup=!1,this._error=void 0,(0,c.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;return this._dialogParams&&this._backup?(0,n.dy)(d||(d=E(["\n      <ha-dialog\n        open\n        scrimClickAction\n        @closed=","\n        .heading=",'\n      >\n        <div slot="heading">\n          <ha-header-bar>\n            <span slot="title">',"</span>\n            <ha-icon-button\n              .label=","\n              .path=",'\n              slot="actionItems"\n              dialogAction="cancel"\n            ></ha-icon-button>\n          </ha-header-bar>\n        </div>\n        ',"\n        ","\n\n        <mwc-button\n          .disabled=",'\n          slot="secondaryAction"\n          @click=',"\n        >\n          Restore\n        </mwc-button>\n\n        ","\n      </ha-dialog>\n    "])),this.closeDialog,!0,this._backup.name,(null===(e=this.hass)||void 0===e?void 0:e.localize("common.close"))||"close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._restoringBackup?(0,n.dy)(p||(p=E([" <ha-circular-progress active></ha-circular-progress>"]))):(0,n.dy)(h||(h=E(["<supervisor-backup-content\n              .hass=","\n              .supervisor=","\n              .backup=","\n              .onboarding=","\n              .localize=","\n            >\n            </supervisor-backup-content>"])),this.hass,this._dialogParams.supervisor,this._backup,this._dialogParams.onboarding||!1,this._dialogParams.localize),this._error?(0,n.dy)(f||(f=E(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._restoringBackup,this._restoreClicked,this._dialogParams.onboarding?"":(0,n.dy)(m||(m=E(['<ha-button-menu\n              fixed\n              slot="primaryAction"\n              @action=',"\n              @closed=","\n            >\n              <ha-icon-button\n                .label=","\n                .path=",'\n                slot="trigger"\n              ></ha-icon-button>\n              <mwc-list-item>Download Backup</mwc-list-item>\n              <mwc-list-item class="error">Delete Backup</mwc-list-item>\n            </ha-button-menu>'])),this._handleMenuAction,_.U,this.hass.localize("common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z")):(0,n.dy)(u||(u=E([""])))}},{kind:"get",static:!0,key:"styles",value:function(){return[g.Qx,g.yu,(0,n.iv)(v||(v=E(["\n        ha-circular-progress {\n          display: block;\n          text-align: center;\n        }\n        ha-header-bar {\n          --mdc-theme-on-primary: var(--primary-text-color);\n          --mdc-theme-primary: var(--mdc-theme-surface);\n          flex-shrink: 0;\n          display: block;\n        }\n        ha-icon-button {\n          color: var(--secondary-text-color);\n        }\n      "])))]}},{kind:"method",key:"_handleMenuAction",value:function(e){switch(e.detail.index){case 0:this._downloadClicked();break;case 1:this._deleteClicked()}}},{kind:"method",key:"_restoreClicked",value:(S=A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._backupContent.backupDetails(),this._restoringBackup=!0,"full"!==this._backupContent.backupType){e.next=7;break}return e.next=5,this._fullRestoreClicked(t);case 5:e.next=9;break;case 7:return e.next=9,this._partialRestoreClicked(t);case 9:this._restoringBackup=!1;case 10:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{kind:"method",key:"_partialRestoreClicked",value:(P=A(regeneratorRuntime.mark((function e(t){var r,n,i,o,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(r=this._dialogParams)||void 0===r?void 0:r.supervisor)||"running"===(null===(n=this._dialogParams)||void 0===n?void 0:n.supervisor.info.state)){e.next=4;break}return e.next=3,(0,k.Ys)(this,{title:"Could not restore backup",text:"Restoring a backup is not possible right now because the system is in ".concat(null===(o=this._dialogParams)||void 0===o?void 0:o.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,k.g7)(this,{title:"Are you sure you want partially to restore this backup?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:null!==(i=this._dialogParams)&&void 0!==i&&i.onboarding?((0,c.B)(this,"restoring"),fetch("/api/hassio/backups/".concat(this._backup.slug,"/restore/partial"),{method:"POST",body:JSON.stringify(t)}),this.closeDialog()):this.hass.callApi("POST","hassio/".concat((0,w.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/restore/partial"),t).then((function(){a.closeDialog()}),(function(e){a._error=e.body.message}));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return P.apply(this,arguments)})},{kind:"method",key:"_fullRestoreClicked",value:(x=A(regeneratorRuntime.mark((function e(t){var r,n,i,o,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(r=this._dialogParams)||void 0===r?void 0:r.supervisor)||"running"===(null===(n=this._dialogParams)||void 0===n?void 0:n.supervisor.info.state)){e.next=4;break}return e.next=3,(0,k.Ys)(this,{title:"Could not restore backup",text:"Restoring a backup is not possible right now because the system is in ".concat(null===(o=this._dialogParams)||void 0===o?void 0:o.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,k.g7)(this,{title:"Are you sure you want to wipe your system and restore this backup?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:null!==(i=this._dialogParams)&&void 0!==i&&i.onboarding?((0,c.B)(this,"restoring"),fetch("/api/hassio/backups/".concat(this._backup.slug,"/restore/full"),{method:"POST",body:JSON.stringify(t)}),this.closeDialog()):this.hass.callApi("POST","hassio/".concat((0,w.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/restore/full"),t).then((function(){a.closeDialog()}),(function(e){a._error=e.body.message}));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return x.apply(this,arguments)})},{kind:"method",key:"_deleteClicked",value:(i=A(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.g7)(this,{title:"Are you sure you want to delete this backup?",confirmText:"delete",dismissText:"cancel"});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.hass.callApi((0,w.I)(this.hass.config.version,2021,9)?"DELETE":"POST","hassio/".concat((0,w.I)(this.hass.config.version,2021,9)?"backups/".concat(this._backup.slug):"snapshots/".concat(this._backup.slug,"/remove"))).then((function(){t._dialogParams.onDelete&&t._dialogParams.onDelete(),t.closeDialog()}),(function(e){t._error=e.body.message}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_downloadClicked",value:(r=A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a=this.hass,s="/api/hassio/".concat((0,w.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/download"),a.callWS({type:"auth/sign_path",path:s});case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,(0,k.Ys)(this,{text:(0,y.js)(e.t0)});case 10:return e.abrupt("return");case 11:if(!window.location.href.includes("ui.nabu.casa")){e.next=17;break}return e.next=14,(0,k.g7)(this,{title:"Potential slow download",text:"Downloading backups over the Nabu Casa URL will take some time, it is recomended to use your local URL instead, do you want to continue?",confirmText:"continue",dismissText:"cancel"});case 14:if(e.sent){e.next=17;break}return e.abrupt("return");case 17:r=this,n=t.path,i="home_assistant_backup_".concat(l(this._computeName),".tar"),o=void 0,(o=document.createElement("a")).target="_blank",o.href=n,o.download=i,r.shadowRoot.appendChild(o),o.dispatchEvent(new MouseEvent("click")),r.shadowRoot.removeChild(o);case 18:case"end":return e.stop()}var r,n,i,o,a,s}),e,this,[[0,6]])}))),function(){return r.apply(this,arguments)})},{kind:"get",key:"_computeName",value:function(){return this._backup?this._backup.name||this._backup.slug:"Unnamed backup"}}]}}),n.oi)}}]);