(function(e){function t(t){for(var a,s,c=t[0],o=t[1],d=t[2],l=0,h=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17ed":function(e,t,n){"use strict";n("3c56")},"2e13":function(e,t,n){"use strict";n("bde0")},"2e6d":function(e,t,n){},"3c56":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"};function i(e,t,n,i,s,c){var o=Object(a["p"])("Header"),d=Object(a["p"])("Sidebar"),u=Object(a["p"])("Calendar"),l=Object(a["p"])("Notes"),h=Object(a["p"])("WorkViewer"),p=Object(a["p"])("LoadingScreen");return Object(a["k"])(),Object(a["d"])("div",r,[Object(a["h"])(o),Object(a["h"])(d),Object(a["h"])(u,{default:!0}),Object(a["h"])(l),Object(a["h"])(h),Object(a["h"])(p)])}n("d3b7"),n("3ca3"),n("ddb0"),n("96cf");var s=n("1da1"),c=Object(a["s"])("data-v-0559abcc");Object(a["m"])("data-v-0559abcc");var o={class:"body"},d=Object(a["h"])("li",{class:"item name"},[Object(a["g"])(" Name"),Object(a["h"])("br"),Object(a["g"])("Lastname ")],-1);Object(a["l"])();var u=c((function(e,t,n,r,i,s){return Object(a["k"])(),Object(a["d"])("div",{class:["sidebar",{show:s.show}]},[Object(a["h"])("div",{class:"bg",onClick:t[1]||(t[1]=function(){return s.hide.apply(s,arguments)})}),Object(a["h"])("div",o,[Object(a["h"])("ul",null,[d,(Object(a["k"])(!0),Object(a["d"])(a["a"],null,Object(a["o"])(s.items,(function(t,n){return Object(a["k"])(),Object(a["d"])("li",{class:["item",{active:t.selected}],key:t.action,onClick:function(t){return e.$store.dispatch("Sidebar/onItemClick",n)}},Object(a["q"])(t.text),11,["onClick"])})),128))])])],2)})),l={name:"Sidebar",computed:{show:function(){return this.$store.state.Sidebar.show},items:function(){return this.$store.state.Sidebar.items}},methods:{hide:function(){this.$store.commit("Sidebar/hide")}}};n("17ed");l.render=u,l.__scopeId="data-v-0559abcc";var h=l,p=Object(a["s"])("data-v-3764adbe");Object(a["m"])("data-v-3764adbe");var f={class:"header"},b={class:"body"},v={class:"content"},m=Object(a["h"])("div",{class:"avatar"},null,-1);Object(a["l"])();var g=p((function(e,t,n,r,i,s){var c=Object(a["p"])("ios-menu-icon");return Object(a["k"])(),Object(a["d"])("div",f,[Object(a["h"])("div",b,[Object(a["h"])("button",{class:"menu-btn",onClick:t[1]||(t[1]=function(){return s.showSidebar.apply(s,arguments)})},[Object(a["h"])(c)]),Object(a["h"])("div",v,Object(a["q"])(s.title),1),m])])})),j={name:"Header",computed:{title:function(){var e=this.$store.state.Fragments.selected;return e?this.$store.state.Fragments.items[e]&&this.$store.state.Fragments.items[e].title:""}},methods:{showSidebar:function(){this.$store.commit("Sidebar/show")}}};n("2e13");j.render=g,j.__scopeId="data-v-3764adbe";var O=j,w=Object(a["s"])("data-v-694afad8");Object(a["m"])("data-v-694afad8");var k={key:0,class:"calendar"},y=Object(a["h"])("div",{class:"header-sized"},null,-1),$={class:"day-list",id:"block1"},S=Object(a["f"])('<div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>понедылок</div><div class="day warning" data-v-694afad8><div class="dot" data-v-694afad8></div>вывторок</div><div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>середа</div>',3),x=Object(a["h"])("div",{class:"dot"},null,-1),z=Object(a["g"])("четвер"),R=Object(a["h"])("div",{class:"day warning"},[Object(a["h"])("div",{class:"dot"}),Object(a["g"])("пятниця")],-1),_={class:"day-list",id:"block2"},I=Object(a["f"])('<div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>понедылок</div><div class="day warning" data-v-694afad8><div class="dot" data-v-694afad8></div>вывторок</div><div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>середа</div><div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>четвер</div><div class="day warning" data-v-694afad8><div class="dot" data-v-694afad8></div>пятниця</div>',5),C={class:"day-list",id:"block3"},F=Object(a["f"])('<div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>понедылок</div><div class="day warning" data-v-694afad8><div class="dot" data-v-694afad8></div>вывторок</div><div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>середа</div><div class="day" data-v-694afad8><div class="dot" data-v-694afad8></div>четвер</div><div class="day warning" data-v-694afad8><div class="dot" data-v-694afad8></div>пятниця</div>',5);Object(a["l"])();var A=w((function(e,t,n,r,i,s){return s.show?(Object(a["k"])(),Object(a["d"])("div",k,[y,Object(a["h"])("div",$,[Object(a["h"])("div",{class:"date-range-text active",onClick:t[1]||(t[1]=function(e){return s.goToBlock("#block1")})}," 1 травня - 5 травня "),S,Object(a["h"])("div",{class:"day active",onClick:t[2]||(t[2]=function(t){return e.$store.dispatch("WorkViewer/show",s.randomNumber(1,6))})},[x,z]),R]),Object(a["h"])("div",_,[Object(a["h"])("div",{class:"date-range-text",onClick:t[3]||(t[3]=function(e){return s.goToBlock("#block2")})}," 7 червень - 12 червень "),I]),Object(a["h"])("div",C,[Object(a["h"])("div",{class:"date-range-text",onClick:t[4]||(t[4]=function(e){return s.goToBlock("#block3")})}," 1 травня - 5 травня "),F])])):Object(a["e"])("",!0)})),E="Calendar",P={name:E,props:{default:Boolean},data:function(){return{isDefault:this.default}},computed:{show:function(){return this.$store.state.Fragments.items[E]&&this.$store.state.Fragments.items[E].selected}},methods:{goToBlock:function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})},randomNumber:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},created:function(){this.$store.dispatch("Fragments/addFragment",{name:E,title:"календар",selected:this.isDefault});var e=this;e.$store.dispatch("Sidebar/addElement",{text:"календар",action:function(){return e.$store.commit("Fragments/selectFragment",E),!0},selectable:!0,selected:this.isDefault})}};n("5b40");P.render=A,P.__scopeId="data-v-694afad8";var V=P,W={key:0,class:"notes"};function B(e,t,n,r,i,s){return s.show?(Object(a["k"])(),Object(a["d"])("div",W,"Notes")):Object(a["e"])("",!0)}var N="Notes",T={name:N,props:{default:Boolean},data:function(){return{isDefault:this.default}},computed:{show:function(){return this.$store.state.Fragments.items[N]&&this.$store.state.Fragments.items[N].selected}},created:function(){this.$store.dispatch("Fragments/addFragment",{name:N,title:"записник",selected:this.isDefault});var e=this;e.$store.dispatch("Sidebar/addElement",{text:"записник",action:function(){return e.$store.commit("Fragments/selectFragment",N),!0},selectable:!0,selected:this.isDefault})}};T.render=B;var L=T,D=Object(a["s"])("data-v-161d6f26");Object(a["m"])("data-v-161d6f26");var M={key:0,class:"loader-bg"},J=Object(a["h"])("svg",null,[Object(a["h"])("g",null,[Object(a["h"])("path",{d:"M 50,100 A 1,1 0 0 1 50,0"})]),Object(a["h"])("g",null,[Object(a["h"])("path",{d:"M 50,75 A 1,1 0 0 0 50,-25"})]),Object(a["h"])("defs",null,[Object(a["h"])("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[Object(a["h"])("stop",{offset:"0%",style:{"stop-color":"#4aa57b","stop-opacity":"1"}}),Object(a["h"])("stop",{offset:"100%",style:{"stop-color":"#186B45","stop-opacity":"1"}})])])],-1);Object(a["l"])();var U=D((function(e,t,n,r,i,s){return s.shown?(Object(a["k"])(),Object(a["d"])("div",M,[J])):Object(a["e"])("",!0)})),H="LoadingScreen",q={name:H,data:function(){return{}},computed:{shown:function(){return this.$store.state.LoadingScreen.show}}};n("7281");q.render=U,q.__scopeId="data-v-161d6f26";var G=q,K=Object(a["s"])("data-v-0768a80c");Object(a["m"])("data-v-0768a80c");var Q={class:"body",ref:"work-viewer-body"},X={class:"title"},Y=Object(a["h"])("hr",null,null,-1);Object(a["l"])();var Z=K((function(e,t,n,r,i,s){var c=Object(a["p"])("v-touch");return Object(a["k"])(),Object(a["d"])("div",{class:["work-viewer",{show:s.shown}]},[Object(a["h"])("div",Q,[Object(a["h"])("div",{class:"bg",onClick:t[1]||(t[1]=function(){return s.hide.apply(s,arguments)})}),Object(a["h"])(c,{tag:"div",class:"box",onPandown:s.onPanDown},{default:K((function(){return[Object(a["h"])("div",X,[Object(a["g"])(Object(a["q"])(s.subject_title)+" ",1),Y]),Object(a["h"])("div",{class:"content",innerHTML:s.work_content},null,8,["innerHTML"])]})),_:1},8,["onPandown"])],512)],2)})),ee=(n("ac1f"),n("5319"),"WorkViewer"),te={name:ee,data:function(){return{}},watch:{shown:function(){this.$refs["work-viewer-body"].scrollTop=0}},computed:{shown:function(){return this.$store.state.WorkViewer.show},subject_title:function(){return this.$store.state.WorkViewer.content.subject_title},work_content:function(){return this.$store.state.WorkViewer.content.text.replace(/(\r\n|\n)/gim,"<br>")}},methods:{hide:function(){this.$store.commit("WorkViewer/hide")},onPanDown:function(){0==this.$refs["work-viewer-body"].scrollTop&&this.hide()}}};n("fe2c");te.render=Z,te.__scopeId="data-v-0768a80c";var ne=te,ae={name:"App",components:{Sidebar:h,Calendar:V,Header:O,Notes:L,LoadingScreen:G,WorkViewer:ne},methods:{appLoading:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("LoadingScreen/show"),t.next=3,Promise.all([e.$store.dispatch("dataAPI/updateWorks"),e.$store.dispatch("dataAPI/updateSubjects")]);case 3:e.$store.commit("LoadingScreen/hide");case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){window.gg=this.$store,window.app=this,this.appLoading()}};n("9cdc");ae.render=i;var re=ae,ie=n("5502"),se=n("5530"),ce={namespaced:!0,state:function(){return{items:[],selected:-1,show:!1}},mutations:{addElement:function(e,t){var n=t.item,a=t.callback;n=Object(se["a"])(Object(se["a"])({},n),{},{selectable:!!n.selectable,selected:!1}),e.items.push(n),a(e.items.length-1)},selectItem:function(e,t){e.items[e.selected]&&(e.items[e.selected].selected=!1),e.items[t].selected=!0,e.selected=t},show:function(e){e.show=!0},hide:function(e){e.show=!1},switch:function(e){e.show=!e.show}},actions:{onItemClick:function(e,t){var n=e.state.items[t];n.action()&&n.selectable&&e.commit("selectItem",t),e.commit("hide")},addElement:function(e,t){e.commit("addElement",{item:t,callback:function(n){t.selected&&e.commit("selectItem",n)}})}}},oe=(n("b0c0"),{namespaced:!0,state:function(){return{items:{},selected:""}},mutations:{addFragment:function(e,t){t=Object(se["a"])(Object(se["a"])({},t),{},{selected:!1}),e.items[t.name]=t},selectFragment:function(e,t){e.items[e.selected]&&(e.items[e.selected].selected=!1),e.items[t].selected=!0,e.selected=t}},actions:{addFragment:function(e,t){e.commit("addFragment",t),t.selected&&e.commit("selectFragment",t.name)}}}),de=(n("99af"),n("13d5"),"undefined"!=typeof InternalStorage?{write:function(e,t){InternalStorage.write(e,JSON.stringify(t))},read:function(e){var t=JSON.parse(InternalStorage.read(e));return t.ok?JSON.parse(t.data):null},exists:function(e){return InternalStorage.exists(e)}}:{write:function(e,t){localStorage.setItem(e,JSON.stringify(t))},read:function(e){var t=localStorage.getItem(e);return null!=t?JSON.parse(t):null},exists:function(e){return null!=localStorage.getItem(e)}}),ue={address:"https://449ea08942f8.ngrok.io/",call:function(e){var t=arguments;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:null,n.abrupt("return",fetch(ue.address+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a||{})}).then((function(e){return e.json()})));case 2:case"end":return n.stop()}}),n)})))()}},le={getUpdates:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!de.exists(e)||!(n=de.read(e)).data){t.next=13;break}return t.prev=1,t.next=4,ue.call("student/get"+e,{lastVersion:n.lastVersion||null});case 4:a=t.sent,a.hasUpdates&&(Array.isArray(a.data)?n.data=n.data.concat(a.data):Object.assign(n.data,a.data),n.lastVersion=a.lastVersion),de.write(e,n),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:t.next=26;break;case 13:return t.prev=13,n={},t.next=17,ue.call("student/get"+e,{lastVersion:null});case 17:a=t.sent,n.data=a.data,n.lastVersion=a.lastVersion,de.write(e,n),t.next=26;break;case 23:return t.prev=23,t.t1=t["catch"](13),t.abrupt("return",!1);case 26:return t.abrupt("return",n);case 27:case"end":return t.stop()}}),t,null,[[1,9],[13,23]])})))()}},he={namespaced:!0,state:function(){return{subjects:{},works:{}}},mutations:{updateSubjects:function(e,t){e.subjects=t},updateWorks:function(e,t){e.works=t}},actions:{updateSubjects:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,le.getUpdates("Subjects");case 2:n=t.sent,n&&(n=n.data.reduce((function(e,t){return e[t.id]=t,e}),{}),e.commit("updateSubjects",n));case 4:case"end":return t.stop()}}),t)})))()},updateWorks:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,le.getUpdates("Works");case 2:n=t.sent,n&&(n=n.data.reduce((function(e,t){return e[t.id]=t,e}),{}),e.commit("updateWorks",n));case 4:case"end":return t.stop()}}),t)})))()}},getters:{getWorkById:function(e,t){return function(n){return{data_text:e.works[n].data_text,subject:t.getSubjectById(e.works[n].subj_id)}}},getSubjectById:function(e){return function(t){return e.subjects[t]}}}},pe={namespaced:!0,state:function(){return{show:!1}},mutations:{show:function(e){e.show=!0},hide:function(e){e.show=!1}}},fe={namespaced:!0,state:function(){return{show:!1,content:{subject_title:"",text:""}}},mutations:{setData:function(e,t){e.content.text=t.data_text,e.content.subject_title=t.subject.title},show:function(e){e.show=!0},hide:function(e){e.show=!1}},actions:{show:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.rootGetters["dataAPI/getWorkById"](t),a&&(e.commit("setData",a),e.commit("show"));case 2:case"end":return n.stop()}}),n)})))()},hide:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("hide");case 1:case"end":return t.stop()}}),t)})))()}}},be=Object(ie["a"])({state:{},mutations:{},actions:{},modules:{Sidebar:ce,Fragments:oe,dataAPI:he,LoadingScreen:pe,WorkViewer:fe}}),ve=n("d516"),me=n("b489"),ge=(n("fb6a"),n("b64b"),n("53ca")),je=n("b85c"),Oe=n("c8b5"),we=n.n(Oe);function ke(e){var t=[],n=arguments.length-1;while(n-- >0)t[n]=arguments[n+1];for(var a=0;a<t.length;a++)for(var r=t[a],i=Object.keys(r),s=0;s<i.length;s++){var c=i[s];e[c]=r[c]}return e}function ye(){return{type:Object,default:function(){return{}}}}function $e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Se={up:!0,down:!0,left:!0,right:!0,horizontal:!0,vertical:!0,all:!0};function xe(e){var t=e.direction;if("string"===typeof t){var n="DIRECTION_"+t.toUpperCase();void 0!==Se[t]&&void 0!==we.a[n]?e.direction=we.a[n]:console.warn("[vue-touch] invalid direction: "+t)}return e}var ze={},Re={},_e=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown","pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","press","pressup","rotate","rotatestart","rotatemove","rotateend","rotatecancel","swipe","swipeleft","swiperight","swipeup","swipedown","tap"],Ie={pan:"pan",panstart:"pan",panmove:"pan",panend:"pan",pancancel:"pan",panleft:"pan",panright:"pan",panup:"pan",pandown:"pan",pinch:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",pinchin:"pinch",pinchout:"pinch",press:"press",pressup:"press",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe",tap:"tap"},Ce={props:{options:ye(),tapOptions:ye(),panOptions:ye(),pinchOptions:ye(),pressOptions:ye(),rotateOptions:ye(),swipeOptions:ye(),tag:{type:String,default:"div"},enabled:{default:!0,type:[Boolean,Object]}},mounted:function(){this.$isServer||(this.$hammer=new we.a.Manager(this.$el,Object(se["a"])(Object(se["a"])({},this.options),{},{touchAction:"pan-y"})),this.$recognizers={},this.$setupBuiltinRecognizers(),this.$setupCustomRecognizers(),this.$updateEnabled(this.enabled))},unmounted:function(){this.$isServer||this.$hammer.destroy()},watch:{enabled:{deep:!0,handler:function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];(e=this).$updateEnabled.apply(e,n)}}},methods:{$setupBuiltinRecognizers:function(){var e=this;console.log(this);var t,n=Object(je["a"])(_e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.$attrs["on"+$e(a)]){var r=Ie[a],i=Object(se["a"])(Object(se["a"])({},ze[r]||{}),e[r+"Options"]);e.$addRecognizer(r,i),e.$addEvent(a)}}}catch(s){n.e(s)}finally{n.f()}},$setupCustomRecognizers:function(){for(var e=this,t=0,n=Object.keys(Re);t<n.length;t++){var a=n[t];if(e.$attrs["on"+$e(a)]){var r=Re[a],i=e[a+"Options"]||{},s=Object(se["a"])(Object(se["a"])({},r),i);e.$addRecognizer(a,s,{mainGesture:s.type}),e.$addEvent(a)}}},$addRecognizer:function(e,t,n){void 0===n&&(n={});var a=n.mainGesture;if(!this.$recognizers[e]){var r=new(we.a[$e(a||e)])(xe(t));this.$recognizers[e]=r,this.$hammer.add(r),r.recognizeWith(this.$hammer.recognizers)}},$addEvent:function(e){var t=this;this.$hammer.on(e,(function(n){return t.$emit(e,n)}))},$updateEnabled:function(e){var t=this;if(!0===e)this.$enableAllRecognizers();else if(!1===e)this.$disableAllRecognizers();else if("object"===Object(ge["a"])(e))for(var n=Object.keys(e),a=0,r=n;a<r.length;a++){var i=r[a];t.$recognizers[i]&&(e[i]?t.$enableRecognizer(i):t.$disableRecognizer(i))}},$enableRecognizer:function(e){var t=this.$recognizers[e];t.options.enable||t.set({enable:!0})},$disableRecognizer:function(e){var t=this.$recognizers[e];t.options.enable&&t.set({enable:!1})},$toggleRecognizer:function(e){var t=this.$recognizers[e];t&&(t.options.enable?this.$disableRecognizer(e):this.$enableRecognizer(e))},$enableAllRecognizers:function(){this.$toggleAllRecognizers({enable:!0})},$disableAllRecognizers:function(){this.$toggleAllRecognizers({enable:!1})},$toggleAllRecognizers:function(e){for(var t=this,n=e.enable,a=Object.keys(this.$recognizers),r=0,i=a;r<i.length;r++){var s=i[r],c=t.$recognizers[s];c.options.enable!==n&&c.set({enable:n})}},$isRecognizerEnabled:function(e){return this.$recognizers[e]&&this.$recognizers[e].options.enable}},render:function(){return Object(a["i"])(this.tag,this.$attrs,this.$slots.default())}},Fe=!1,Ae={config:ze,customEvents:Re,component:Ce,install:function(e,t){void 0===t&&(t={});var n=t.name||"v-touch";e.component(n,ke(Ce,{name:n})),Fe=!0},registerCustomEvent:function(e,t){void 0===t&&(t={}),Fe?console.warn("\n      [vue-touch]: Custom Event '"+e+"' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "):(t.event=e,Re[e]=t,Ce.props[e+"Options"]={type:Object,default:function(){return{}}})}},Ee=Ae;Object(a["c"])(re).use(be).use(ve["a"]).use(me["a"]).use(Ee,{name:"v-touch"}).mount("#app")},"5b40":function(e,t,n){"use strict";n("a691f")},7281:function(e,t,n){"use strict";n("2e6d")},"9cdc":function(e,t,n){"use strict";n("c701")},a691f:function(e,t,n){},bde0:function(e,t,n){},c701:function(e,t,n){},f71c:function(e,t,n){},fe2c:function(e,t,n){"use strict";n("f71c")}});
//# sourceMappingURL=app.22ea14ac.js.map