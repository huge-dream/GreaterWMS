(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{a3a6:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t._self._c;return a("q-page",[a("router-view"),a("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,18]}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:t.barscan},on:{input:function(a){a.target.composing||(t.barscan=a.target.value)}}})]),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{icon:"add",direction:"up",color:"accent","vertical-actions-align":"left"},model:{value:t.fab,callback:function(a){t.fab=a},expression:"fab"}},[a("q-fab-action",{style:{"margin-top":t.fab8.top,"margin-bottom":t.fab8.bottom,"margin-left":t.fab8.left,"margin-right":t.fab8.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_locationquery"),"label-style":"background-color:transparent",to:{name:"urovo_locationquery"}}},[a("q-img",{attrs:{src:"statics/stock/stocklist.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab7.top,"margin-bottom":t.fab7.bottom,"margin-left":t.fab7.left,"margin-right":t.fab7.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_goodsquery"),"label-style":"background-color:transparent",to:{name:"urovo_goodslist"}}},[a("q-img",{attrs:{src:"statics/goods/goodslist.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab6.top,"margin-bottom":t.fab6.bottom,"margin-left":t.fab6.left,"margin-right":t.fab6.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",icon:"img:statics/stock/cyclecount.png",label:t.$t("scan.scan_inventory"),"label-style":"background-color:transparent",to:{name:"urovo_cyclecount"}}},[a("q-img",{attrs:{src:"statics/stock/cyclecount.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab5.top,"margin-bottom":t.fab5.bottom,"margin-left":t.fab5.left,"margin-right":t.fab5.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_movetobin"),"label-style":"background-color:transparent",to:{name:"urovo_movetobin"}}},[a("q-img",{attrs:{src:"statics/icons/movetobin.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab4.top,"margin-bottom":t.fab4.bottom,"margin-left":t.fab4.left,"margin-right":t.fab4.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_shipping"),"label-style":"background-color:transparent",to:{name:"urovo_shipping"}}},[a("q-img",{attrs:{src:"statics/icons/car.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab3.top,"margin-bottom":t.fab3.bottom,"margin-left":t.fab3.left,"margin-right":t.fab3.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_picking"),"label-style":"background-color:transparent",to:{name:"urovo_picking"}}},[a("q-img",{attrs:{src:"statics/outbound/picked.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab2.top,"margin-bottom":t.fab2.bottom,"margin-left":t.fab2.left,"margin-right":t.fab2.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_uptobin"),"label-style":"background-color:transparent",to:{name:"urovo_uptobin"}}},[a("q-img",{attrs:{src:"statics/inbound/presortstock.png"}})],1),a("q-fab-action",{style:{"margin-top":t.fab1.top,"margin-bottom":t.fab1.bottom,"margin-left":t.fab1.left,"margin-right":t.fab1.right,height:t.touchheight,width:t.touchwidth},attrs:{square:"",flat:"","external-label":"","label-position":"bottom","label-class":"text-black",label:t.$t("scan.scan_sorting"),"label-style":"background-color:transparent",to:{name:"urovo_sorting"}}},[a("q-img",{attrs:{src:"statics/inbound/preloadstock.png"}})],1)],1)],1)],1)},i=[],n=o("3004"),s=o("18d6"),r=o("09f9"),b=o("e302");function l(){navigator.notification.beep(1)}var c={name:"Pageurovo_scanbase",data(){return{openid:"",login_name:"",authin:"0",pathname:"scan/",separator:"cell",loading:!1,width:"",height:"",scroll_height:"",table_list:[],thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},touchheight:(r["a"].width-50)/5+"px",touchwidth:(r["a"].width-50)/5+"px",fab1:{top:"",bottom:"",left:"",right:""},fab2:{top:"",bottom:"",left:"",right:""},fab3:{top:"",bottom:"",left:"",right:""},fab4:{top:"",bottom:"",left:"",right:""},fab5:{top:"",bottom:"",left:"",right:""},fab6:{top:"",bottom:"",left:"",right:""},fab7:{top:"",bottom:"",left:"",right:""},fab8:{top:"",bottom:"",left:"",right:""}}},methods:{datachange(t){var a=this;""!==a.barscan&&Object(n["k"])("scanner/list/"+t+"/",{}).then((t=>{t.detail?(navigator.vibrate(100),a.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})):(l(),a.scaneddata=t)})).catch((t=>{navigator.vibrate(100),console.log(t),a.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))}},computed:{fab:{get(){return this.$store.state.fabchange.fab},set(t){this.$store.commit("bardata/barScanned",""),this.$store.commit("scanedsolve/scanedData",""),this.$store.commit("fabchange/fabChanged",t)}},barscan:{get(){return this.$store.state.bardata.barscan},set(t){this.$store.commit("bardata/barScanned",""),this.$store.commit("bardata/barScanned",t),this.datachange(t)}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata},set(t){this.$store.commit("scanedsolve/scanedData",""),this.$store.commit("scanedsolve/scanedData",t)}}},created(){var t=this;s["a"].has("openid")?t.openid=s["a"].getItem("openid"):(t.openid="",s["a"].set("openid","")),s["a"].has("login_name")?t.login_name=s["a"].getItem("login_name"):(t.login_name="",s["a"].set("login_name","")),s["a"].has("auth")?t.authin="1":t.authin="0",t.datachange=Object(b["a"])(t.datachange,200)},mounted(){var t=this;window.plugins.insomnia.keepAwake(),t.fab1.top="0px",t.fab1.bottom=0-(r["a"].width-50)/5+"px",t.fab1.left=(r["a"].width-50)/6-r["a"].width/12*10+"px",t.fab1.right="0px",t.fab2.top="0px",t.fab2.bottom=0-(r["a"].width-50)/5+"px",t.fab2.left=((r["a"].width-50)/6-r["a"].width/12*10)/2+"px",t.fab2.right="0px",t.fab3.top="0px",t.fab3.bottom="0px",t.fab3.left="-0px",t.fab3.right="0px",t.fab4.top=(r["a"].width-50)/5+"px",t.fab4.bottom=0-(r["a"].width-50)/5+"px",t.fab4.left=(r["a"].width-50)/6-r["a"].width/12*10+"px",t.fab4.right="0px",t.fab5.top="0px",t.fab5.bottom=0-(r["a"].width-50)/5+"px",t.fab5.left=((r["a"].width-50)/6-r["a"].width/12*10)/2+"px",t.fab5.right="0px",t.fab6.top="0px",t.fab6.bottom="0px",t.fab6.left="0px",t.fab6.right="0px",t.fab7.top=(r["a"].width-50)/5+"px",t.fab7.bottom=0-(r["a"].width-50)/5+"px",t.fab7.left=(r["a"].width-50)/6-r["a"].width/12*10+"px",t.fab7.right="0px",t.fab8.top="0px",t.fab8.bottom=(r["a"].width-50)/8+"px",t.fab8.left=((r["a"].width-50)/6-r["a"].width/12*10)/2+"px",t.fab8.right="0px",t.barscan=""},beforeDestroy(){},destroyed(){}},h=c,g=o("42e1"),f=o("9989"),p=o("de5e"),m=o("c294"),d=o("72db"),u=o("068f"),x=o("eebe"),w=o.n(x),v=Object(g["a"])(h,e,i,!1,null,null,null);a["default"]=v.exports;w()(v,"components",{QPage:f["a"],QPageSticky:p["a"],QFab:m["a"],QFabAction:d["a"],QImg:u["a"]})}}]);