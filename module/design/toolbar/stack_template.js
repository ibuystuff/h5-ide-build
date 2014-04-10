define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){return"disabled"}function c(e,t){var r="",i;r+='\n<button class="btn-toolbar modal icon-delete tooltip seperator" id="toolbar-delete" data-modal-template="modalApp" data-modal-data=\'{"title":"',i=n.i18n.call(e,"TOOL_POP_TIT_DELETE_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='", "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_DELETE_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+=" "+a((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===u?i.apply(e):i))+'?", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_DELETE_STACK",{hash:{},data:t});if(i||i===0)r+=i;return r+='", "color":"red" }\' data-modal-dismiss="true"  data-tooltip=\''+a(n.i18n.call(e,"TOOL_TIP_DELETE_STACK",{hash:{},data:t}))+"'></button>\n",r}function h(e,t){var r="";return r+='\n<button class="btn-toolbar disabled modal icon-delete tooltip seperator" id="toolbar-delete" data-tooltip=\''+a(n.i18n.call(e,"TOOL_TIP_DELETE_NEW_STACK",{hash:{},data:t}))+"'></button>\n",r}function p(e,t){var r="",i;r+='\n<button class="modal btn-toolbar tooltip icon-duplicate" data-tooltip=\''+a(n.i18n.call(e,"TOOL_TIP_DUPLICATE_STACK",{hash:{},data:t}))+'\' id="toolbar-duplicate" data-modal-template="modalApp" data-modal-data=\'{"title":"',i=n.i18n.call(e,"TOOL_POP_TIT_DUPLICATE_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='", "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_DUPLICATE_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='", "input":"'+a((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===u?i.apply(e):i))+'", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_DUPLICATE_STACK",{hash:{},data:t});if(i||i===0)r+=i;return r+='", "color":"blue" }\' data-modal-dismiss="true"></button>\n',r}function d(e,t){var r="";return r+='\n<button class="btn-toolbar tooltip icon-duplicate disabled" data-tooltip=\''+a(n.i18n.call(e,"TOOL_TIP_DUPLICATE_STACK",{hash:{},data:t}))+"'></button>\n",r}function v(e,t){return"tooltip"}function m(e,t){return"selected"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<button class="btn-toolbar icon-play tooltip modal toolbar-btn-primary ',o=n.unless.call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_enable),{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='" id="toolbar-run" data-tooltip=\''+a(n.i18n.call(t,"TOOL_TIP_BTN_RUN_STACK",{hash:{},data:i}))+'\' data-modal-template="modalRunStack" data-modal-data=\'{"title":"',o=n.i18n.call(t,"TOOL_POP_TIT_RUN_STACK",{hash:{},data:i});if(o||o===0)s+=o;s+='", "name":"'+a((o=(o=t&&t.item_flags,o==null||o===!1?o:o.name),typeof o===u?o.apply(t):o))+'"}\' data-modal-dismiss="false">'+a(n.i18n.call(t,"TOOL_BTN_RUN_STACK",{hash:{},data:i}))+'</button>\n\n<button class="btn-toolbar tooltip icon-save ',o=n.unless.call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_enable),{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\" data-tooltip='"+a(n.i18n.call(t,"TOOL_TIP_SAVE_STACK",{hash:{},data:i}))+"'></button>\n\n",o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_delete),{hash:{},inverse:f.program(5,h,i),fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+="\n\n",o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_duplicate),{hash:{},inverse:f.program(9,d,i),fn:f.program(7,p,i),data:i});if(o||o===0)s+=o;s+='\n<button class="btn-toolbar icon-new-stack tooltip seperator" id="toolbar-new" data-tooltip=\''+a(n.i18n.call(t,"TOOL_TIP_CREATE_STACK",{hash:{},data:i}))+"'></button>\n\n<button class=\"btn-toolbar icon-zoom-in ",o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_zoomin),{hash:{},inverse:f.program(1,l,i),fn:f.program(11,v,i),data:i});if(o||o===0)s+=o;s+="\" data-tooltip='",o=n.i18n.call(t,"TOOL_TIP_ZOOM_IN",{hash:{},data:i});if(o||o===0)s+=o;s+="'></button>\n<button class=\"btn-toolbar icon-zoom-out seperator ",o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_zoomout),{hash:{},inverse:f.program(1,l,i),fn:f.program(11,v,i),data:i});if(o||o===0)s+=o;s+="\" data-tooltip='",o=n.i18n.call(t,"TOOL_TIP_ZOOM_OUT",{hash:{},data:i});if(o||o===0)s+=o;s+='\'></button>\n\n<div class="selectbox btn-toolbar seperator">\n	<button class="selection tooltip icon-send" data-tooltip=\''+a(n.i18n.call(t,"TOOL_EXPORT",{hash:{},data:i}))+'\' id="toolbar-export"></button>\n\n	<ul class="dropdown">\n		<li id="toolbar-export-png" class="icon-export-png">'+a(n.i18n.call(t,"TOOL_EXPORT_AS_PNG",{hash:{},data:i}))+'</li>\n		<li id="toolbar-export-json" class="icon-export-json">'+a(n.i18n.call(t,"TOOL_EXPORT_AS_JSON",{hash:{},data:i}))+'</li>\n		<li id="toolbar-convert-cf"  class="icon-toolbar-cloudformation">'+a(n.i18n.call(t,"TOOL_EXPORT_AS_CF",{hash:{},data:i}))+'</li>\n	</ul>\n</div>\n\n<!-- line style -->\n<div class="selectbox btn-toolbar toolbar-line-style seperator">\n	<button class="selection tooltip" data-tooltip=\''+a(n.i18n.call(t,"TOOL_TIP_LINESTYLE",{hash:{},data:i}))+'\' id="toolbar-line-style"><i class="'+a((o=(o=t&&t.lines,o==null||o===!1?o:o.icon),typeof o===u?o.apply(t):o))+'"></i></button>\n\n	<ul class="dropdown">\n		<li id="toolbar-straight" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style0),{hash:{},inverse:f.noop,fn:f.program(13,m,i),data:i});if(o||o===0)s+=o;s+='\'>\n			<i class="icon-straight"></i><span>'+a(n.i18n.call(t,"TOOL_LBL_LINESTYLE_STRAIGHT",{hash:{},data:i}))+'</span></li>\n		<li id="toolbar-elbow" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style1),{hash:{},inverse:f.noop,fn:f.program(13,m,i),data:i});if(o||o===0)s+=o;s+='\'> <i class="icon-elbow"></i><span>'+a(n.i18n.call(t,"TOOL_LBL_LINESTYLE_ELBOW",{hash:{},data:i}))+'</span></li>\n		<li id="toolbar-bezier-q" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style2),{hash:{},inverse:f.noop,fn:f.program(13,m,i),data:i});if(o||o===0)s+=o;s+='\'> <i class="icon-bezier-q"></i><span>'+a(n.i18n.call(t,"TOOL_LBL_LINESTYLE_QUADRATIC_BELZIER",{hash:{},data:i}))+'</span></li>\n		<li id="toolbar-bezier-qt" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style3),{hash:{},inverse:f.noop,fn:f.program(13,m,i),data:i});if(o||o===0)s+=o;return s+='\'><i class="icon-bezier-qt"></i><span>'+a(n.i18n.call(t,"TOOL_LBL_LINESTYLE_SMOOTH_QUADRATIC_BELZIER",{hash:{},data:i}))+'</span></li>\n	</ul>\n</div>\n\n<!-- env:dev                                                                                                                                                                                                                                                                                              env:dev:end -->\n\n<section class="toolbar-btn-group">\n	<a href="javascript:void(0);" id="apply-visops" style="display: none;">'+a(n.i18n.call(t,"TOOL_EXPERIMENT",{hash:{},data:i}))+'</a>\n</section>\n\n<label class="switch toolbar-visual-ops-switch tooltip" data-tooltip="'+a(n.i18n.call(t,"TOOL_TIP_CUSTOM_USER_DATA",{hash:{},data:i}))+'" style="display: none;">\n  <span class="switch-label" data-on="'+a(n.i18n.call(t,"TOOL_TOGGLE_VISUALOPS_ON",{hash:{},data:i}))+'" data-off="'+a(n.i18n.call(t,"TOOL_TOGGLE_VISUALOPS_OFF",{hash:{},data:i}))+'"></span>\n  <span class="switch-handle"></span>\n</label>\n',s};return e.template(t)});