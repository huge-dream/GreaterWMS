(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("q-layout",{style:{height:e.$q.screen.height,width:e.$q.screen.width},attrs:{view:"hHh LpR fFf"}},[t("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[t("q-toolbar",{staticClass:"main-headers text-white shadow-18 rounded-borders"},["1"===e.authin?t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawerleft=!e.drawerleft}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.hide_menu")))])],1)],1):e._e(),t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[e._v(e._s(e.$t("index.title")))])],1),t("q-space"),9===e.isVip9?t("div",[e._v("\n        "+e._s(e.$t("twoKai.useWarehouse"))+"："+e._s(e.useWarehouse)+"\n      ")]):e._e(),t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"translate"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.translate")))]),t("q-menu",[t("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.langOptions,(function(n,a){return t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(t){return e.langChange(n.value)}}},[t("q-item-section",[e._v(e._s(n.label))])],1)})),1)],1)],1)],1),9===e.isVip9?t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"account_balance"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("twoKai.duocang")))]),t("q-menu",[t("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.warehouseList,(function(n,a){return t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(t){return e.warehouseChange(n)}}},[t("q-item-section",[e._v(e._s(n.warehouse_id+"-"+n.warehouse_name))])],1)})),1)],1)],1)],1):e._e(),t("q-separator",{attrs:{vertical:""}}),"1"===e.authin?[t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn-dropdown",{attrs:{stretch:"",flat:"",color:"white-8",icon:"account_circle"},on:{click:function(t){e.chat=!1}}},[t("div",{staticClass:"row no-wrap q-pa-md"},[t("div",{staticClass:"column",staticStyle:{width:"150px"}},[t("div",{staticClass:"text-h6 q-mb-md"},[e._v("\n                  "+e._s(e.$t("index.user_center"))+"\n                ")]),t("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.change_user")},on:{click:function(t){e.login=!0}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.change_user")))])],1),t("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.view_my_openid")},on:{click:function(t){e.authid=!0}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.view_my_openid")))])],1)],1),t("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),t("div",{staticClass:"column items-center"},[t("q-avatar",{attrs:{size:"72px"}},[t("q-img",{attrs:{src:"statics/staff/stafftype.png"}})],1),t("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[e._v("\n                  "+e._s(e.login_name)+"\n                ")]),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:e.$t("index.logout"),push:"",size:"sm",icon:"img:statics/icons/logout.png"},on:{click:function(t){return e.Logout()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.logout")))])],1)],1)],1)])],1)]:e._e(),"0"===e.authin?[t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.login"),color:"primary"},on:{click:function(t){e.login=!0}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.login_tip")))])],1)],1),t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[t("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.register"),color:"primary"},on:{click:function(t){e.register=!0}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.register_tip")))])],1)],1)]:e._e()],2)],1),"1"===e.authin?t("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 shadow-24"},model:{value:e.drawerleft,callback:function(t){e.drawerleft=t},expression:"drawerleft"}},[t("q-scroll-area",{staticClass:"fit",staticStyle:{"overflow-y":"auto"}},[t("q-list",[t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"inboundAndOutbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"inboundAndOutbound"},exact:"",active:"inboundAndOutbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("inboundAndOutbound")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"auto_graph"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.dashboard")))])],1),t("q-separator"),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"inbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"asn"},exact:"",active:"inbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("inbound")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"speaker_notes"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.inbound")))])],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"outbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"dn"},exact:"",active:"outbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("outbound")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"rv_hookup"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.outbound")))])],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"stock"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"stocklist"},exact:"",active:"stock"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("stock")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"multiline_chart"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.stock")))])],1),t("q-separator"),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"goods"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"goodslist"},exact:"",active:"goods"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("goods")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"shop_two"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.goods")))])],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"baseinfo"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"company"},exact:"",active:"baseinfo"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("baseinfo")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"info"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.baseinfo")))])],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"warehouse"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"warehouseset"},exact:"",active:"warehouse"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("warehouse")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"settings"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.warehouse")))])],1),t("q-separator"),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"staff"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"stafflist"},exact:"",active:"staff"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("staff")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"assignment_ind"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.staff")))])],1),t("q-separator",{directives:[{name:"show",rawName:"v-show",value:0===e.device,expression:"device === 0"}]}),9===e.isVip9?t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"uploadcenter"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"initializeupload"},exact:"",active:"uploadcenter"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("uploadcenter")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"file_upload"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.uploadcenter")))])],1):e._e(),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"downloadcenter"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"downloadinbound"},exact:"",active:"downloadcenter"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("downloadcenter")}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"file_download"}})],1),t("q-item-section",[e._v(e._s(e.$t("menuItem.downloadcenter")))])],1)],1)],1)],1):e._e(),t("q-page-container",{staticClass:"main-page",style:{height:e.container_height,width:e.$q.screen.width}},[t("router-view")],1),t("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.authid,callback:function(t){e.authid=t},expression:"authid"}},[t("q-card",{staticStyle:{"min-width":"350px"}},[t("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[t("div",[e._v(e._s(e.$t("index.your_openid")))]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),t("q-card-section",{staticClass:"q-pt-md"},[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Openid",readonly:""},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}})],1)],1)],1),t("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[t("q-card",{staticStyle:{"min-width":"350px"}},[t("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[t("q-tabs",{staticClass:"tabs",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[t("q-tab",{attrs:{name:"user"},on:{click:function(t){e.admin=!1}}},[e._v("\n            "+e._s(e.$t("index.user_login"))+"\n            "),t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.user_login")))])],1),t("q-tab",{attrs:{name:"admin"},on:{click:function(t){e.admin=!0}}},[e._v("\n            "+e._s(e.$t("index.admin_login"))+"\n            "),t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.admin_login")))])],1)],1),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),t("q-card-section",{staticClass:"q-pt-md"},[e.admin?[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.admin_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},model:{value:e.adminlogin.name,callback:function(t){e.$set(e.adminlogin,"name",t)},expression:"adminlogin.name"}}),t("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.adminlogin.password,callback:function(t){e.$set(e.adminlogin,"password",t)},expression:"adminlogin.password"}})]:e._e(),e.admin?e._e():[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.your_openid")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}}),t("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.login_name,callback:function(t){e.login_name=t},expression:"login_name"}}),t("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("staff.check_code"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.check_code,callback:function(t){e.check_code=e._n(t)},expression:"check_code"}})]],2),t("q-card-actions",{staticClass:"text-primary",attrs:{align:"left"}},[t("q-space"),[t("q-btn",{staticStyle:{"font-size":"16px",margin:"0 8px",width:"100%"},attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){e.admin?e.adminLogin():e.Login()}}})],t("div",{staticClass:"q-mx-auto"},[t("q-btn",{staticClass:"text-teal-4 q-mt-sm",attrs:{flat:""},on:{click:function(t){e.login=!1,e.register=!0}}},[e._v("\n            "+e._s(e.$t("index.register_tip"))+"\n          ")])],1)],2)],1)],1),t("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[t("q-card",{staticStyle:{"min-width":"350px"}},[t("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[t("div",[e._v(e._s(e.$t("index.register_tip")))]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),t("q-card-section",{staticClass:"q-pt-md"},[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},model:{value:e.registerform.name,callback:function(t){e.$set(e.registerform,"name",t)},expression:"registerform.name"}}),t("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerform.password1,callback:function(t){e.$set(e.registerform,"password1",t)},expression:"registerform.password1"}}),t("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.confirm_password"),type:e.isPwd2?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd2?"visibility_off":"visibility"},on:{click:function(t){e.isPwd2=!e.isPwd2}}})]},proxy:!0}]),model:{value:e.registerform.password2,callback:function(t){e.$set(e.registerform,"password2",t)},expression:"registerform.password2"}})],1),t("q-card-actions",{staticClass:"text-primary q-mx-sm",attrs:{align:"right"}},[t("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:e.$t("index.register")},on:{click:function(t){return e.Register()}}})],1),t("q-card-actions",{staticStyle:{"margin-top":"-8px"},attrs:{align:"center"}},[t("q-btn",{staticClass:"text-teal-4",attrs:{flat:"",label:e.$t("index.return_to_login")},on:{click:function(t){e.login=!0,e.register=!1}}})],1)],1)],1)],1)},i=[],s=(n("14d9"),n("3004")),o=n("18d6"),l=n("a639"),r=n("b06b"),c=n("bca8"),d={data(){return{isVip9:o["a"].getItem("is_vip")||"",device:o["a"].getItem("device"),device_name:o["a"].getItem("device_name"),lang:this.$i18n.locale,container_height:this.$q.screen.height+"px",langOptions:[{value:"en-us",label:"English"},{value:"zh-hans",label:"中文简体"}],title:this.$t("index.webtitle"),admin:!1,adminlogin:{name:"",password:""},openid:"",isPwd:!0,isPwd2:!0,authin:"0",authid:!1,left:!1,drawerleft:!1,tab:"",login:!1,link:"",login_name:"",login_id:0,check_code:"",register:!1,registerform:{name:"",password1:"",password2:""},needLogin:"",activeTab:"",warehouseList:[],useWarehouse:o["a"].getItem("useWarehouse")||"all"}},methods:{getWarehouseData(){Object(s["e"])(s["b"]+"warehouse/getallwarehouse/").then((e=>{e.results.map((e=>{9===e.vip&&(e.warehouse_name="all")})),this.warehouseList=e.results}))},warehouseChange(e){this.useWarehouse=e.warehouse_id+"-"+e.warehouse_name,this.openid=e.openid,o["a"].set("openid",e.openid),o["a"].set("useWarehouse",this.useWarehouse)},linkChange(e){var t=this;localStorage.removeItem("menulink"),localStorage.setItem("menulink",e),t.link=e},drawerClick(e){var t=this;t.miniState&&(t.miniState=!1,e.stopPropagation())},brownlink(e){Object(r["a"])(e)},apiLink(){Object(r["a"])(s["b"]+"docs/")},Login(){var e=this;""===e.login_name?e.$q.notify({message:"Please enter the login name",color:"negative",icon:"close"}):""===e.openid?e.$q.notify({message:"Please Enter The Openid",icon:"close",color:"negative"}):""===e.check_code?e.$q.notify({message:"Please Enter The Check Code",icon:"close",color:"negative"}):(o["a"].set("openid",e.openid),l["a"].set("axios_check","false"),Object(s["e"])("staff/?staff_name="+e.login_name+"&check_code="+e.check_code).then((t=>{1===t.count&&(e.authin="1",e.login=!1,e.login_id=t.results[0].id,o["a"].set("auth","1"),o["a"].set("login_name",e.login_name),o["a"].set("login_id",t.results[0].id),o["a"].set("login_mode","user"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),localStorage.removeItem("menulink"),e.link="",this.staffType(),e.$router.push({name:"web_index"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})))},adminLogin(){var e=this;e.adminlogin.name?e.adminlogin.password?(l["a"].set("axios_check","false"),Object(s["h"])("login/",e.adminlogin).then((t=>{"200"===t.code?(e.authin="1",e.login=!1,e.admin=!1,e.openid=t.data.openid,e.login_name=t.data.name,e.login_id=t.data.user_id,o["a"].set("auth","1"),o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.login_name),o["a"].set("login_id",e.login_id),o["a"].set("login_mode","admin"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),localStorage.removeItem("menulink"),e.link="",this.staffType(),e.$router.push({name:"web_index"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):e.$q.notify({message:"Please enter the admin password",icon:"close",color:"negative"}):e.$q.notify({message:"Please enter the admin name",color:"negative",icon:"close"})},Logout(){var e=this;e.authin="0",e.login_name="",e.isVip9="",o["a"].remove("auth"),o["a"].remove("is_vip"),l["a"].remove("axios_check"),o["a"].set("login_name",""),o["a"].set("login_id",""),o["a"].set("useWarehouse",""),e.$q.notify({message:"Success Logout",icon:"check",color:"negative"}),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"})},Register(){var e=this;l["a"].set("axios_check","false"),Object(s["h"])("register/",e.registerform).then((t=>{"200"===t.code?(e.register=!1,e.openid=t.data.openid,e.login_name=e.registerform.name,e.login_id=t.data.user_id,e.authin="1",o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.registerform.name),o["a"].set("login_id",e.login_id),o["a"].set("auth","1"),e.registerform={name:"",password1:"",password2:""},e.$q.notify({message:t.msg,icon:"check",color:"green"}),e.staffType(),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},staffType(){if(9!==this.isVip9){var e=this;Object(s["e"])("staff/?staff_name="+e.login_name).then((e=>{this.isVip9=e.results[0].vip||"",o["a"].set("staff_type",e.results[0].staff_type),o["a"].set("is_vip",e.results[0].vip)}))}this.getWarehouseData()},langChange(e){var t=this;t.lang=e,window.setTimeout((()=>{location.reload()}),1)},isLoggedIn(){this.$q.localStorage.getItem("openid")?this.login=!0:this.register=!0}},created(){var e=this;o["a"].has("openid")?(e.openid=o["a"].getItem("openid"),e.activeTab=o["a"].getItem("login_mode")):(e.openid="",o["a"].set("openid","")),o["a"].has("login_name")?e.login_name=o["a"].getItem("login_name"):(e.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?(e.authin="1",e.staffType()):(o["a"].set("staff_type","Admin"),e.authin="0",e.isLoggedIn())},mounted(){var e=this;e.link=localStorage.getItem("menulink"),c["a"].$on("needLogin",(t=>{e.isLoggedIn()}))},updated(){},beforeDestroy(){c["a"].$off("needLogin")},destroyed(){},watch:{lang(e){var t=this;o["a"].set("lang",e),t.$i18n.locale=e},login(e){e&&("admin"===this.activeTab?this.admin=!0:this.admin=!1)}}},m=d,u=(n("dd20"),n("42e1")),p=n("4d5a"),g=n("e359"),f=n("65c6"),h=n("9c40"),k=n("05c0"),_=n("6ac5"),b=n("2c91"),v=n("4e73"),q=n("1c1c"),w=n("66e5"),x=n("4074"),y=n("eb85"),$=n("f20b"),C=n("cb32"),S=n("068f"),I=n("9404"),L=n("4983"),Q=n("0016"),z=n("09e3"),O=n("24e8"),P=n("f09f"),T=n("d847"),N=n("a370"),j=n("27f9"),E=n("429b"),W=n("7460"),A=n("4b7e"),R=n("7f67"),V=n("714f"),D=n("eebe"),B=n.n(D),H=Object(u["a"])(m,a,i,!1,null,null,null);t["default"]=H.exports;B()(H,"components",{QLayout:p["a"],QHeader:g["a"],QToolbar:f["a"],QBtn:h["a"],QTooltip:k["a"],QToolbarTitle:_["a"],QSpace:b["a"],QMenu:v["a"],QList:q["a"],QItem:w["a"],QItemSection:x["a"],QSeparator:y["a"],QBtnDropdown:$["a"],QAvatar:C["a"],QImg:S["a"],QDrawer:I["a"],QScrollArea:L["a"],QIcon:Q["a"],QPageContainer:z["a"],QDialog:O["a"],QCard:P["a"],QBar:T["a"],QCardSection:N["a"],QInput:j["a"],QTabs:E["a"],QTab:W["a"],QCardActions:A["a"]}),B()(H,"directives",{ClosePopup:R["a"],Ripple:V["a"]})},dd20:function(e,t,n){"use strict";n("eac4")},eac4:function(e,t,n){}}]);