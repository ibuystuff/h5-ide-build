(function(){define(["Design","event","./module/design/template","constant","i18n!nls/lang.js","state_status","backbone","jquery","handlebars"],function(e,t,n,r,i,s){var o;return o=Backbone.View.extend({el:"#tab-content-design",events:{"click .btn-ta-valid":"statusBarTAClick","click .btn-state":"statusBarClick"},render:function(){return void 0,this.$el.html(n()),this.trigger("DESIGN_COMPLETE"),$("#main-statusbar").html(MC.template.statusbar())},listen:function(e){return this.model=e,this.listenTo(this.model,"change:snapshot",this.writeOldDesignHtml),this.listenTo(t,"SHOW_DESIGN_OVERLAY",this.showDesignOverlay),this.listenTo(t,"HIDE_DESIGN_OVERLAY",this.hideDesignOverlay)},html:function(){var e;return e={resource:$("#resource-panel").html(),canvas:$("#canvas-panel").html(),overlay:$("#overlay-panel").html()},e},writeOldDesignHtml:function(e){void 0;if(_.isNumber(e.attributes.snapshot))return;return $("#canvas-panel").one("DOMNodeInserted",".canvas-svg-group",this,_.debounce(this.canvasChange,200,!0)),$("#resource-panel").html(this.model.get("snapshot").resource),$("#canvas-panel").html(this.model.get("snapshot").canvas),$("#overlay-panel").html(this.model.get("snapshot").overlay),$.trim($("#overlay-panel").html())!==""?this.showDesignOverlay():this.hideDesignOverlay(),null},canvasChange:function(e){void 0,void 0;if(MC.data.current_tab_type==="OLD_APP"||MC.data.current_tab_type==="OLD_STACK")t.trigger(t.SWITCH_WAITING_BAR),MC.data.current_tab_type=null;return null},statusBarTAClick:function(e){var t,n;return void 0,t=$(e.currentTarget),n="Validate",t.text("Validating..."),setTimeout(function(){return MC.ta.validAll(),t.text(n),require(["component/trustedadvisor/main"],function(e){return e.loadModule("statusbar",null)})},50)},statusBarClick:function(e){return s.loadModule()},updateStatusbar:function(e,n){return void 0,t.trigger(t.UPDATE_TA_MODAL),null},updateStatusBarSaveTime:function(){var e,t;return void 0,t=$.now()/1e3,clearInterval(this.timer),e=$(".stack-save-time"),e.text(MC.intervalDate(t)),e.attr("data-tab-id",MC.data.current_tab_id),e.attr("data-save-time",t),this.timer=setInterval(function(){e=$(".stack-save-time");if(e.attr("data-tab-id")===MC.data.current_tab_id)return e.text(MC.intervalDate(e.attr("data-save-time")))},500),null},renderStateBar:function(e){var t,n,r,i,s,o,u,a,f,l;s=n=0,_.isArray(e)||(e=[e]);for(o=0,a=e.length;o<a;o++){r=e[o];if(r.app_id!==MC.common.other.canvasData.data("origin").id)continue;if(r.status){l=r.status;for(u=0,f=l.length;u<f;u++)i=l[u],i.result==="success"?s++:i.result==="failure"&&n++}}return t=$(".statusbar-btn"),t.find(".state-success b").text(s),t.find(".state-failed b").text(n)},loadStateStatusBar:function(){var e,n,r,i;t.offListen(t.UPDATE_STATE_STATUS_DATA,this.updateStateBar),t.onLongListen(t.UPDATE_STATE_STATUS_DATA,this.updateStateBar,this),t.offListen(t.UPDATE_APP_STATE,this.updateStateBarWhenStateChanged),t.onLongListen(t.UPDATE_APP_STATE,this.updateStateBarWhenStateChanged,this),n=MC.common.other.canvasData.data("origin").state==="Stopped",e=$("#main-statusbar .btn-state"),((i=Tabbar.current)==="app"||i==="appedit")&&n&&e.hide();if(n)return;return Tabbar.current==="appview"?e.hide():e.show(),r=MC.data.websocket.collection.status.find().fetch(),this.renderStateBar(r)},updateStateBarWhenStateChanged:function(e){var t;return e==="Stopped"?t=[]:t=MC.data.websocket.collection.status.find().fetch(),this.renderStateBar(t)},updateStateBar:function(e,t,n){var r;return r=MC.data.websocket.collection.status.find().fetch(),this.renderStateBar(r)},unloadStateStatusBar:function(){return $("#main-statusbar .btn-state").hide(),t.offListen(t.UPDATE_STATE_STATUS_DATA)},hideStatusbar:function(){var e;return void 0,(e=Tabbar.current)==="app"||e==="appview"?($("#main-statusbar .btn-ta-valid").hide(),this.loadStateStatusBar()):Tabbar.current==="appedit"?($("#main-statusbar .btn-ta-valid").show(),this.loadStateStatusBar()):($("#main-statusbar .btn-ta-valid").show(),this.unloadStateStatusBar()),Tabbar.current==="appedit"&&$("#canvas").css("bottom",24),null},showDesignOverlay:function(e,n){var s,o,u,a,f;try{void 0;if(MC.data.current_tab_id!==n)return;s=$("#overlay-panel"),s.addClass("design-overlay");switch(e){case"OPEN_TAB_FAIL":s.html(MC.template.openTabFail());break;case r.APP_STATE.APP_STATE_STARTING:s.html(MC.template.appStarting());break;case r.APP_STATE.APP_STATE_STOPPING:s.html(MC.template.appStopping());break;case r.APP_STATE.APP_STATE_TERMINATING:s.html(MC.template.appTerminating());break;case r.APP_STATE.APP_STATE_UPDATING:f={is_show:!1,rate:0,steps:0,dones:0},MC.data.process&&MC.data.current_tab_id&&MC.data.process[MC.data.current_tab_id]&&MC.data.process[MC.data.current_tab_id].flag_list&&(a=MC.data.process[MC.data.current_tab_id].flag_list,a.rate&&a.steps&&a.dones&&(f={is_show:!0,rate:a.rate,steps:a.steps,dones:a.dones})),s.html(MC.template.appUpdating(f));break;case"CHANGED_FAIL":f={is_show:!1,state:"update",detail:"",update_detail:!0},MC.data.process&&MC.data.current_tab_id&&MC.data.process[MC.data.current_tab_id]&&MC.data.process[MC.data.current_tab_id].flag_list&&(a=MC.data.process[MC.data.current_tab_id].flag_list,a.flag&&i.ide[a.flag]&&a.err_detail&&(f={is_show:!0,state:i.ide[a.flag],detail:a.err_detail.replace(/\n/g,"</br>"),update_detail:a.flag==="UPDATE_APP"?!0:!1})),s.html(MC.template.appChangedfail(f));break;case"UPDATING_SUCCESS":s.html(MC.template.appUpdatedSuccess());break;default:void 0,void 0}e==="OPEN_TAB_FAIL"?(f=MC.common.other.searchStackAppById(MC.data.current_tab_id),Tabbar.current==="new"?u="RELOAD_NEW_STACK":f?(u=MC.data.current_tab_id.split("-")[0]==="app"?"RELOAD_APP":"RELOAD_STACK",MC.open_failed_list[MC.data.current_tab_id]=$.extend(!0,{},f)):void 0,$("#btn-fail-reload").one("click",function(e){return Tabbar.current==="new"?t.trigger(t.OPEN_DESIGN_TAB,u,MC.open_failed_list[MC.data.current_tab_id].platform,MC.open_failed_list[MC.data.current_tab_id].region,MC.open_failed_list[MC.data.current_tab_id].id):MC.open_failed_list[MC.data.current_tab_id]?t.trigger(t.OPEN_DESIGN_TAB,u,null,MC.open_failed_list[MC.data.current_tab_id].region,MC.open_failed_list[MC.data.current_tab_id].id):void 0,null})):e==="CHANGED_FAIL"?$("#btn-changedfail").one("click",function(e){return t.trigger(t.HIDE_DESIGN_OVERLAY),null}):e==="UPDATING_SUCCESS"?$("#btn-updated-success").one("click",function(e){return t.trigger(t.APPEDIT_2_APP,MC.data.process[MC.data.current_tab_id].id,MC.data.process[MC.data.current_tab_id].region),null}):e===r.APP_STATE.APP_STATE_UPDATING&&(MC.data.process[MC.data.current_tab_id].flag_list.is_pending?($(".overlay-content-wrap").find(".progress").hide(),$(".overlay-content-wrap").find(".process-info").hide()):MC.data.process[MC.data.current_tab_id].flag_list.is_inprocess&&($(".overlay-content-wrap").find(".loading-spinner").hide(),$(".overlay-content-wrap").find(".progress").show(),$(".overlay-content-wrap").find(".process-info").show()))}catch(l){o=l,void 0,void 0,void 0}return null},hideDesignOverlay:function(){var e;return void 0,e=$("#overlay-panel"),e.removeClass("design-overlay"),$.trim(e.html())!==""&&e.empty(),MC.common.other.deleteProcess(MC.data.current_tab_id),null}}),o})}).call(this);