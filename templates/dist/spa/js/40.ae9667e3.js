(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"68f8":function(t,e){},"6ef4":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],staticClass:"shadow-24",style:{width:t.width,height:t.height}},[a("q-card-section",[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}})],1)],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(t._s(t.bin_name_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_desc_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.pick_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.picked_qty_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.bin_size_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.bin_property_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.create_time_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.update_time_label))])])]),a("tbody",[t._l(t.table_list,(function(e,o){return a("tr",{key:o},[a("td",{staticClass:"text-left"},[t._v(t._s(e.bin_name))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_desc))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.pick_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.picked_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.bin_size))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.bin_property))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.create_time))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.update_time))])])}))],2)])],1),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:t.barscan},on:{input:[function(e){e.target.composing||(t.barscan=e.target.value)},function(e){return t.datachange()}]}})])],1),a("q-page-sticky",{directives:[{name:"show",rawName:"v-show",value:2===t.device,expression:"device === 2"}],attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{icon:"add",direction:"up",color:"accent","vertical-actions-align":"left"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab8.top,"margin-bottom":t.fab8.bottom,"margin-left":t.fab8.left,"margin-right":t.fab8.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_locationquery"),"label-style":"background-color:transparent",to:"urovo_locationquery"}},[a("q-img",{attrs:{src:"statics/stock/stocklist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab8.top,"margin-bottom":t.fab8.bottom,"margin-left":t.fab8.left,"margin-right":t.fab8.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_locationquery"),"label-style":"background-color:transparent",to:"zebra_locationquery"}},[a("q-img",{attrs:{src:"statics/stock/stocklist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab7.top,"margin-bottom":t.fab7.bottom,"margin-left":t.fab7.left,"margin-right":t.fab7.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_goodsquery"),"label-style":"background-color:transparent",to:"urovo_goodslist"}},[a("q-img",{attrs:{src:"statics/goods/goodslist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab7.top,"margin-bottom":t.fab7.bottom,"margin-left":t.fab7.left,"margin-right":t.fab7.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_goodsquery"),"label-style":"background-color:transparent",to:"zebra_goodslist"}},[a("q-img",{attrs:{src:"statics/goods/goodslist.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab6.top,"margin-bottom":t.fab6.bottom,"margin-left":t.fab6.left,"margin-right":t.fab6.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",icon:"img:statics/stock/cyclecount.png",label:t.$t("scan.scan_inventory"),"label-style":"background-color:transparent",to:"urovo_cyclecount"}},[a("q-img",{attrs:{src:"statics/stock/cyclecount.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab6.top,"margin-bottom":t.fab6.bottom,"margin-left":t.fab6.left,"margin-right":t.fab6.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",icon:"img:statics/stock/cyclecount.png",label:t.$t("scan.scan_inventory"),"label-style":"background-color:transparent",to:"zebra_cyclecount"}},[a("q-img",{attrs:{src:"statics/stock/cyclecount.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab5.top,"margin-bottom":t.fab5.bottom,"margin-left":t.fab5.left,"margin-right":t.fab5.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_movetobin"),"label-style":"background-color:transparent",to:"urovo_movetobin"}},[a("q-img",{attrs:{src:"statics/icons/movetobin.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab5.top,"margin-bottom":t.fab5.bottom,"margin-left":t.fab5.left,"margin-right":t.fab5.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_movetobin"),"label-style":"background-color:transparent",to:"zebra_movetobin"}},[a("q-img",{attrs:{src:"statics/icons/movetobin.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab4.top,"margin-bottom":t.fab4.bottom,"margin-left":t.fab4.left,"margin-right":t.fab4.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_shipping"),"label-style":"background-color:transparent",to:"urovo_shipping"}},[a("q-img",{attrs:{src:"statics/icons/car.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab4.top,"margin-bottom":t.fab4.bottom,"margin-left":t.fab4.left,"margin-right":t.fab4.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_shipping"),"label-style":"background-color:transparent",to:"zebra_shipping"}},[a("q-img",{attrs:{src:"statics/icons/car.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab3.top,"margin-bottom":t.fab3.bottom,"margin-left":t.fab3.left,"margin-right":t.fab3.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_picking"),"label-style":"background-color:transparent",to:"urovo_picking"}},[a("q-img",{attrs:{src:"statics/outbound/picked.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab3.top,"margin-bottom":t.fab3.bottom,"margin-left":t.fab3.left,"margin-right":t.fab3.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_picking"),"label-style":"background-color:transparent",to:"zebra_picking"}},[a("q-img",{attrs:{src:"statics/outbound/picked.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab2.top,"margin-bottom":t.fab2.bottom,"margin-left":t.fab2.left,"margin-right":t.fab2.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_uptobin"),"label-style":"background-color:transparent",to:"urovo_uptobin"}},[a("q-img",{attrs:{src:"statics/inbound/presortstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab2.top,"margin-bottom":t.fab2.bottom,"margin-left":t.fab2.left,"margin-right":t.fab2.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_uptobin"),"label-style":"background-color:transparent",to:"zebra_uptobin"}},[a("q-img",{attrs:{src:"statics/inbound/presortstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Urovo"===t.device_name,expression:"device_name === 'Urovo'"}],style:{"margin-top":t.fab1.top,"margin-bottom":t.fab1.bottom,"margin-left":t.fab1.left,"margin-right":t.fab1.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_sorting"),"label-style":"background-color:transparent",to:"urovo_sorting"}},[a("q-img",{attrs:{src:"statics/inbound/preloadstock.png"}})],1),a("q-fab-action",{directives:[{name:"show",rawName:"v-show",value:"Zebra Technologies"===t.device_name,expression:"device_name === 'Zebra Technologies'"}],style:{"margin-top":t.fab1.top,"margin-bottom":t.fab1.bottom,"margin-left":t.fab1.left,"margin-right":t.fab1.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_sorting"),"label-style":"background-color:transparent",to:"zebra_sorting"}},[a("q-img",{attrs:{src:"statics/inbound/preloadstock.png"}})],1)],1)],1)],1)},i=[],s=a("92bc");function n(){Uplugin.getDeviceID("",(function(t){console.log(t)}),(function(t){console.log(t)}))}function r(){Uplugin.getBarcode("start",(function(t){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=t,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}),(function(t){console.log(t)}))}function l(){Uplugin.getBarcode("stop",(function(t){console.log(t)}),(function(t){console.log(t)}))}var c={name:"Pageurovo_locationquery",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",separator:"cell",loading:!1,device:0,device_name:"",width:"",height:"",scroll_height:"",table_list:[],bin_name_label:this.$t("warehouse.view_binset.bin_name"),goods_code_label:this.$t("stock.view_stocklist.goods_code"),goods_desc_label:this.$t("stock.view_stocklist.goods_desc"),goods_qty_label:this.$t("stock.view_stocklist.onhand_stock"),pick_qty_label:this.$t("stock.view_stocklist.pick_stock"),picked_qty_label:this.$t("stock.view_stocklist.picked_stock"),bin_size_label:this.$t("warehouse.view_binset.bin_size"),bin_property_label:this.$t("warehouse.view_binset.bin_property"),create_time_label:this.$t("createtime"),update_time_label:this.$t("updatetime"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},fab:!1,touchheight:(this.$q.screen.width-50)/5+"px",touchwidth:(this.$q.screen.width-50)/5+"px",fab1:{top:"",bottom:"",left:"",right:""},fab2:{top:"",bottom:"",left:"",right:""},fab3:{top:"",bottom:"",left:"",right:""},fab4:{top:"",bottom:"",left:"",right:""},fab5:{top:"",bottom:"",left:"",right:""},fab6:{top:"",bottom:"",left:"",right:""},fab7:{top:"",bottom:"",left:"",right:""},fab8:{top:"",bottom:"",left:"",right:""},batteryStatus:"determining...",barscan:"",bin_scan:""}},methods:{datachange(){var t=this;t.$q.localStorage.has("auth")&&Object(s["e"])("scanner/?bar_code="+t.barscan,{}).then((e=>{t.barscan=e.results[0].code,"BINSET"===e.results[0].mode&&(t.bin_scan=e.results[0].code,t.getList(e.results[0].code))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getList(t){var e=this;e.$q.localStorage.has("auth")&&Object(s["e"])(e.pathname+"?max_page=10000&bin_name="+t,{}).then((t=>{e.table_list=t.results})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.barscan="",t.bin_scan=""},updateBatteryStatus(t){var e=this;e.batteryStatus=`Level: ${t.level}, plugged: ${t.isPlugged}`},scanEvents(){var t=this;document.addEventListener("deviceready",t.onDeviceReady,!1)},onDeviceReady(){r()},onPause:function(){l()},onResume(){}},created(){var t=this;t.$q.localStorage.has("openid")?t.openid=t.$q.localStorage.getItem("openid"):(t.openid="",t.$q.localStorage.set("openid","")),t.$q.localStorage.has("login_name")?t.login_name=t.$q.localStorage.getItem("login_name"):(t.login_name="",t.$q.localStorage.set("login_name","")),t.$q.localStorage.has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;window.device?"Urovo"===window.device.manufacturer||"Zebra Technologies"===window.device.manufacturer?(t.device_name=window.device.manufacturer,t.device=2):t.device=1:t.$q.platform.is.mobile&&(t.device=1),t.$q.platform.is.electron?t.height=String(t.$q.screen.height)+"px":t.$q.platform.is.cordova?window.device&&(window.plugins.insomnia.keepAwake(),"Urovo"!==window.device.manufacturer&&"Zebra Technologies"!==window.device.manufacturer||(t.fab1.top="0px",t.fab1.bottom=0-(t.$q.screen.width-50)/5+"px",t.fab1.left=(t.$q.screen.width-50)/6-t.$q.screen.width/12*10+"px",t.fab1.right="0px",t.fab2.top="0px",t.fab2.bottom=0-(t.$q.screen.width-50)/5+"px",t.fab2.left=((t.$q.screen.width-50)/6-t.$q.screen.width/12*10)/2+"px",t.fab2.right="0px",t.fab3.top="0px",t.fab3.bottom="0px",t.fab3.left="-0px",t.fab3.right="0px",t.fab4.top=(t.$q.screen.width-50)/5+"px",t.fab4.bottom=0-(t.$q.screen.width-50)/5+"px",t.fab4.left=(t.$q.screen.width-50)/6-t.$q.screen.width/12*10+"px",t.fab4.right="0px",t.fab5.top="0px",t.fab5.bottom=0-(t.$q.screen.width-50)/5+"px",t.fab5.left=((t.$q.screen.width-50)/6-t.$q.screen.width/12*10)/2+"px",t.fab5.right="0px",t.fab6.top="0px",t.fab6.bottom="0px",t.fab6.left="0px",t.fab6.right="0px",t.fab7.top=(t.$q.screen.width-50)/5+"px",t.fab7.bottom=0-(t.$q.screen.width-50)/5+"px",t.fab7.left=(t.$q.screen.width-50)/6-t.$q.screen.width/12*10+"px",t.fab7.right="0px",t.fab8.top="0px",t.fab8.bottom=(t.$q.screen.width-50)/8+"px",t.fab8.left=((t.$q.screen.width-50)/6-t.$q.screen.width/12*10)/2+"px",t.fab8.right="0px")):t.height=t.$q.screen.height+"px",window.addEventListener("batterystatus",t.updateBatteryStatus,!1),t.width=1*t.$q.screen.width+"px",t.height=t.$q.screen.height-50+"px",t.scroll_height=t.$q.screen.height-175+"px",t.barscan="",t.bin_scan="",t.scanEvents(),n()},updated(){},beforeDestroy(){var t=this;window.removeEventListener("batterystatus",t.updateBatteryStatus,!1),window.removeEventListener("deviceready",t.onDeviceReady,!1)},destroyed(){}},b=c,h=a("52cd"),g=a("d1b5"),d=a("505d"),m=a("5ce7"),p=a("7006"),f=a("1631"),u=a("ef9c"),v=a("b51c"),_=a("c101"),w=a("3f5f"),x=a("84df"),q=a("6d58"),y=a("203a"),k=a("8277"),$=a("0798"),C=a("63c1"),S=a.n(C),E=Object(h["a"])(b,o,i,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(E);e["default"]=E.exports;S()(E,"components",{QPage:d["a"],QCard:m["a"],QCardSection:p["a"],QBtnGroup:f["a"],QBtn:u["a"],QScrollArea:v["a"],QMarkupTable:_["a"],QSeparator:w["a"],QCardActions:x["a"],QPageSticky:q["a"],QFab:y["a"],QFabAction:k["a"],QImg:$["a"]})},d1b5:function(t,e,a){"use strict";var o=a("68f8"),i=a.n(o);e["default"]=i.a}}]);