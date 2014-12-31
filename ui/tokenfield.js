/*!
 * bootstrap-tokenfield
 * https://github.com/sliptree/bootstrap-tokenfield
 * Copyright 2013-2014 Sliptree and other contributors; Licensed MIT
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):typeof exports=="object"?module.exports=global.window&&global.window.$?e(global.window.$):function(t){if(!t.$&&!t.fn)throw new Error("Tokenfield requires a window object with jQuery or a jQuery instance");return e(t.$||t)}:e(jQuery,window)})(function(e,t){var n=function(n,r){var i=this;this.$element=e(n),this.textDirection=this.$element.css("direction"),this.options=e.extend(!0,{},e.fn.tokenfield.defaults,{tokens:this.$element.val()},this.$element.data(),r),this._delimiters=typeof this.options.delimiter=="string"?[this.options.delimiter]:this.options.delimiter,this._triggerKeys=e.map(this._delimiters,function(e){return e.charCodeAt(0)}),this._firstDelimiter=this._delimiters[0];var s=e.inArray(" ",this._delimiters),o=e.inArray("-",this._delimiters);s>=0&&(this._delimiters[s]="\\s"),o>=0&&(delete this._delimiters[o],this._delimiters.unshift("-"));var u=["\\","$","[","{","^",".","|","?","*","+","(",")"];e.each(this._delimiters,function(t,n){var r=e.inArray(n,u);r>=0&&(i._delimiters[t]="\\"+n)});var a=t&&typeof t.getMatchedCSSRules=="function"?t.getMatchedCSSRules(n):null,f=n.style.width,l,c=this.$element.width();a&&e.each(a,function(e,t){t.style.width&&(l=t.style.width)});var h=e("body").css("direction")==="rtl"?"right":"left",p={position:this.$element.css("position")};p[h]=this.$element.css(h),this.$element.data("original-styles",p).data("original-tabindex",this.$element.prop("tabindex")).css("position","absolute").css(h,"-10000px").prop("tabindex",-1),this.$wrapper=e('<div class="tokenfield form-control" />'),this.$element.hasClass("input-lg")&&this.$wrapper.addClass("input-lg"),this.$element.hasClass("input-sm")&&this.$wrapper.addClass("input-sm"),this.textDirection==="rtl"&&this.$wrapper.addClass("rtl");var d=this.$element.prop("id")||(new Date).getTime()+""+Math.floor((1+Math.random())*100);this.$input=e('<input type="'+this.options.inputType+'" class="token-input" autocomplete="off" />').appendTo(this.$wrapper).prop("placeholder",this.$element.prop("placeholder")).prop("id",d+"-tokenfield").prop("tabindex",this.$element.data("original-tabindex"));var v=e('label[for="'+this.$element.prop("id")+'"]');v.length&&v.prop("for",this.$input.prop("id")),this.$copyHelper=e('<input type="text" />').css("position","absolute").css(h,"-10000px").prop("tabindex",-1).prependTo(this.$wrapper),f?this.$wrapper.css("width",f):l?this.$wrapper.css("width",l):this.$element.parents(".form-inline").length&&this.$wrapper.width(c),(this.$element.prop("disabled")||this.$element.parents("fieldset[disabled]").length)&&this.disable(),this.$element.prop("readonly")&&this.readonly(),this.$mirror=e('<span style="position:absolute; top:-999px; left:0; white-space:pre;"/>'),this.$input.css("min-width",this.options.minWidth+"px"),e.each(["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],function(e,t){i.$mirror[0].style[t]=i.$input.css(t)}),this.$mirror.appendTo("body"),this.$wrapper.insertBefore(this.$element),this.$element.prependTo(this.$wrapper),this.update(),this.setTokens(this.options.tokens,!1,!this.$element.val()&&this.options.tokens),this.listen();if(!e.isEmptyObject(this.options.autocomplete)){var m=this.textDirection==="rtl"?"right":"left",g=e.extend({minLength:this.options.showAutocompleteOnFocus?0:null,position:{my:m+" top",at:m+" bottom",of:this.$wrapper}},this.options.autocomplete);this.$input.autocomplete(g)}if(!e.isEmptyObject(this.options.typeahead)){var y=this.options.typeahead,b={minLength:this.options.showAutocompleteOnFocus?0:null},w=e.isArray(y)?y:[y,y];w[0]=e.extend({},b,w[0]),this.$input.typeahead.apply(this.$input,w),this.typeahead=!0}};n.prototype={constructor:n,createToken:function(t,n){var r=this;typeof t=="string"?t={value:t,label:t}:t=e.extend({},t),typeof n=="undefined"&&(n=!0),t.value=e.trim(t.value.toString()),t.label=t.label&&t.label.length?e.trim(t.label):t.value;if(!t.value.length||!t.label.length||t.label.length<=this.options.minLength)return;if(this.options.limit&&this.getTokens().length>=this.options.limit)return;var i=e.Event("tokenfield:createtoken",{attrs:t});this.$element.trigger(i);if(!i.attrs||i.isDefaultPrevented())return;var s=e('<div class="token" />').append('<span class="token-label" />').append('<a href="#" class="close" tabindex="-1">&times;</a>').data("attrs",t);this.$input.hasClass("tt-input")?this.$input.parent().before(s):this.$input.before(s),this.$input.css("width",this.options.minWidth+"px");var o=s.find(".token-label"),u=s.find(".close");return this.maxTokenWidth||(this.maxTokenWidth=this.$wrapper.width()-u.outerWidth()-parseInt(u.css("margin-left"),10)-parseInt(u.css("margin-right"),10)-parseInt(s.css("border-left-width"),10)-parseInt(s.css("border-right-width"),10)-parseInt(s.css("padding-left"),10)-parseInt(s.css("padding-right"),10),parseInt(o.css("border-left-width"),10)-parseInt(o.css("border-right-width"),10)-parseInt(o.css("padding-left"),10)-parseInt(o.css("padding-right"),10),parseInt(o.css("margin-left"),10)-parseInt(o.css("margin-right"),10)),o.text(t.label).css("max-width",this.maxTokenWidth),s.on("mousedown",function(e){if(r._disabled||r._readonly)return!1;r.preventDeactivation=!0}).on("click",function(e){if(r._disabled||r._readonly)return!1;r.preventDeactivation=!1;if(e.ctrlKey||e.metaKey)return e.preventDefault(),r.toggle(s);r.activate(s,e.shiftKey,e.shiftKey)}).on("dblclick",function(e){if(r._disabled||r._readonly||!r.options.allowEditing)return!1;r.edit(s)}),u.on("click",e.proxy(this.remove,this)),this.$element.trigger(e.Event("tokenfield:createdtoken",{attrs:t,relatedTarget:s.get(0)})),n&&this.$element.val(this.getTokensList()).trigger(e.Event("change",{initiator:"tokenfield"})),this.update(),this.$element.get(0)},setTokens:function(t,n,r){if(!t)return;n||this.$wrapper.find(".token").remove(),typeof r=="undefined"&&(r=!0),typeof t=="string"&&(this._delimiters.length?t=t.split(new RegExp("["+this._delimiters.join("")+"]")):t=[t]);var i=this;return e.each(t,function(e,t){i.createToken(t,r)}),this.$element.get(0)},getTokenData:function(t){var n=t.map(function(){var t=e(this);return t.data("attrs")}).get();return n.length==1&&(n=n[0]),n},getTokens:function(t){var n=this,r=[],i=t?".active":"";return this.$wrapper.find(".token"+i).each(function(){r.push(n.getTokenData(e(this)))}),r},getTokensList:function(t,n,r){t=t||this._firstDelimiter,n=typeof n!="undefined"&&n!==null?n:this.options.beautify;var i=t+(n&&t!==" "?" ":"");return e.map(this.getTokens(r),function(e){return e.value}).join(i)},getInput:function(){return this.$input.val()},listen:function(){var n=this;this.$element.on("change",e.proxy(this.change,this)),this.$wrapper.on("mousedown",e.proxy(this.focusInput,this)),this.$input.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("paste",e.proxy(this.paste,this)).on("keydown",e.proxy(this.keydown,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.$copyHelper.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keydown",e.proxy(this.keydown,this)).on("keyup",e.proxy(this.keyup,this)),this.$input.on("keypress",e.proxy(this.update,this)).on("keyup",e.proxy(this.update,this)),this.$input.on("autocompletecreate",function(){var t=e(this).data("ui-autocomplete").menu.element,r=n.$wrapper.outerWidth()-parseInt(t.css("border-left-width"),10)-parseInt(t.css("border-right-width"),10);t.css("min-width",r+"px")}).on("autocompleteselect",function(e,t){return n.createToken(t.item)&&(n.$input.val(""),n.$input.data("edit")&&n.unedit(!0)),!1}).on("typeahead:selected typeahead:autocompleted",function(e,t,r){n.createToken(t)&&(n.$input.typeahead("val",""),n.$input.data("edit")&&n.unedit(!0))}),e(t).on("resize",e.proxy(this.update,this))},keydown:function(t){function r(e){if(n.$input.is(document.activeElement)){if(n.$input.val().length>0)return;e+="All";var r=n.$input.hasClass("tt-input")?n.$input.parent()[e](".token:first"):n.$input[e](".token:first");if(!r.length)return;n.preventInputFocus=!0,n.preventDeactivation=!0,n.activate(r),t.preventDefault()}else n[e](t.shiftKey),t.preventDefault()}function i(r){if(!t.shiftKey)return;if(n.$input.is(document.activeElement)){if(n.$input.val().length>0)return;var i=n.$input.hasClass("tt-input")?n.$input.parent()[r+"All"](".token:first"):n.$input[r+"All"](".token:first");if(!i.length)return;n.activate(i)}var s=r==="prev"?"next":"prev",o=r==="prev"?"first":"last";n.$firstActiveToken[s+"All"](".token").each(function(){n.deactivate(e(this))}),n.activate(n.$wrapper.find(".token:"+o),!0,!0),t.preventDefault()}if(!this.focused)return;var n=this;switch(t.keyCode){case 8:if(!this.$input.is(document.activeElement))break;this.lastInputValue=this.$input.val();break;case 37:r(this.textDirection==="rtl"?"next":"prev");break;case 38:i("prev");break;case 39:r(this.textDirection==="rtl"?"prev":"next");break;case 40:i("next");break;case 65:if(this.$input.val().length>0||!t.ctrlKey&&!t.metaKey)break;this.activateAll(),t.preventDefault();break;case 9:case 13:if(this.$input.data("ui-autocomplete")&&this.$input.data("ui-autocomplete").menu.element.find("li:has(a.ui-state-focus), li.ui-state-focus").length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-cursor").length)break;if(this.$input.hasClass("tt-input")&&this.$wrapper.find(".tt-hint").val()&&this.$wrapper.find(".tt-hint").val().length)break;if(this.$input.is(document.activeElement)&&this.$input.val().length||this.$input.data("edit"))return this.createTokensFromInput(t,this.$input.data("edit"));if(t.keyCode===13){if(!this.$copyHelper.is(document.activeElement)||this.$wrapper.find(".token.active").length!==1)break;if(!n.options.allowEditing)break;this.edit(this.$wrapper.find(".token.active"))}}this.lastKeyDown=t.keyCode},keypress:function(t){if(e.inArray(t.which,this._triggerKeys)!==-1&&this.$input.is(document.activeElement))return this.$input.val()&&this.createTokensFromInput(t),!1},keyup:function(e){this.preventInputFocus=!1;if(!this.focused)return;switch(e.keyCode){case 8:if(this.$input.is(document.activeElement)){if(this.$input.val().length||this.lastInputValue.length&&this.lastKeyDown===8)break;this.preventDeactivation=!0;var t=this.$input.hasClass("tt-input")?this.$input.parent().prevAll(".token:first"):this.$input.prevAll(".token:first");if(!t.length)break;this.activate(t)}else this.remove(e);break;case 46:this.remove(e,"next")}this.lastKeyUp=e.keyCode},focus:function(e){this.focused=!0,this.$wrapper.addClass("focus"),this.$input.is(document.activeElement)&&(this.$wrapper.find(".active").removeClass("active"),this.$firstActiveToken=null,this.options.showAutocompleteOnFocus&&this.search())},blur:function(e){this.focused=!1,this.$wrapper.removeClass("focus"),!this.preventDeactivation&&!this.$element.is(document.activeElement)&&(this.$wrapper.find(".active").removeClass("active"),this.$firstActiveToken=null),!this.preventCreateTokens&&(this.$input.data("edit")&&!this.$input.is(document.activeElement)||this.options.createTokensOnBlur)&&this.createTokensFromInput(e),this.preventDeactivation=!1,this.preventCreateTokens=!1},paste:function(e){var t=this;t.options.allowPasting&&setTimeout(function(){t.createTokensFromInput(e)},1)},change:function(e){if(e.initiator==="tokenfield")return;this.setTokens(this.$element.val())},createTokensFromInput:function(e,t){if(this.$input.val().length<this.options.minLength)return;var n=this.getTokensList();return this.setTokens(this.$input.val(),!0),n==this.getTokensList()&&this.$input.val().length?!1:(this.$input.hasClass("tt-input")?this.$input.typeahead("val",""):this.$input.val(""),this.$input.data("edit")&&this.unedit(t),!1)},next:function(e){if(e){var t=this.$wrapper.find(".active:first"),n=t&&this.$firstActiveToken?t.index()<this.$firstActiveToken.index():!1;if(n)return this.deactivate(t)}var r=this.$wrapper.find(".active:last"),i=r.nextAll(".token:first");if(!i.length){this.$input.focus();return}this.activate(i,e)},prev:function(e){if(e){var t=this.$wrapper.find(".active:last"),n=t&&this.$firstActiveToken?t.index()>this.$firstActiveToken.index():!1;if(n)return this.deactivate(t)}var r=this.$wrapper.find(".active:first"),i=r.prevAll(".token:first");i.length||(i=this.$wrapper.find(".token:first"));if(!i.length&&!e){this.$input.focus();return}this.activate(i,e)},activate:function(t,n,r,i){if(!t)return;if(typeof i=="undefined")var i=!0;if(r)var n=!0;this.$copyHelper.focus(),n||(this.$wrapper.find(".active").removeClass("active"),i?this.$firstActiveToken=t:delete this.$firstActiveToken);if(r&&this.$firstActiveToken){var s=this.$firstActiveToken.index()-2,o=t.index()-2,u=this;this.$wrapper.find(".token").slice(Math.min(s,o)+1,Math.max(s,o)).each(function(){u.activate(e(this),!0)})}t.addClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select()},activateAll:function(){var t=this;this.$wrapper.find(".token").each(function(n){t.activate(e(this),n!==0,!1,!1)})},deactivate:function(e){if(!e)return;e.removeClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select()},toggle:function(e){if(!e)return;e.toggleClass("active"),this.$copyHelper.val(this.getTokensList(null,null,!0)).select()},edit:function(t){if(!t)return;var n=t.data("attrs"),r={attrs:n,relatedTarget:t.get(0)},i=e.Event("tokenfield:edittoken",r);this.$element.trigger(i);if(i.isDefaultPrevented())return;t.find(".token-label").text(n.value);var s=t.outerWidth(),o=this.$input.hasClass("tt-input")?this.$input.parent():this.$input;t.replaceWith(o),this.preventCreateTokens=!0,this.$input.val(n.value).select().data("edit",!0).width(s),this.update(),this.$element.trigger(e.Event("tokenfield:editedtoken",r))},unedit:function(e){var t=this.$input.hasClass("tt-input")?this.$input.parent():this.$input;t.appendTo(this.$wrapper),this.$input.data("edit",!1),this.$mirror.text(""),this.update();if(e){var n=this;setTimeout(function(){n.$input.focus()},1)}},remove:function(t,n){if(this.$input.is(document.activeElement)||this._disabled||this._readonly)return;var r=t.type==="click"?e(t.target).closest(".token"):this.$wrapper.find(".token.active");if(t.type!=="click"){if(!n)var n="prev";this[n]();if(n==="prev")var i=r.first().prevAll(".token:first").length===0}var s={attrs:this.getTokenData(r),relatedTarget:r.get(0)},o=e.Event("tokenfield:removetoken",s);this.$element.trigger(o);if(o.isDefaultPrevented())return;var u=e.Event("tokenfield:removedtoken",s),a=e.Event("change",{initiator:"tokenfield"});r.remove(),this.$element.val(this.getTokensList()).trigger(u).trigger(a),(!this.$wrapper.find(".token").length||t.type==="click"||i)&&this.$input.focus(),this.$input.css("width",this.options.minWidth+"px"),this.update(),t.preventDefault(),t.stopPropagation()},update:function(e){var t=this.$input.val(),n=parseInt(this.$input.css("padding-left"),10),r=parseInt(this.$input.css("padding-right"),10),i=n+r;if(this.$input.data("edit")){t||(t=this.$input.prop("placeholder"));if(t===this.$mirror.text())return;this.$mirror.text(t);var s=this.$mirror.width()+10;if(s>this.$wrapper.width())return this.$input.width(this.$wrapper.width());this.$input.width(s)}else{var o=this.textDirection==="rtl"?this.$input.offset().left+this.$input.outerWidth()-this.$wrapper.offset().left-parseInt(this.$wrapper.css("padding-left"),10)-i-1:this.$wrapper.offset().left+this.$wrapper.width()+parseInt(this.$wrapper.css("padding-left"),10)-this.$input.offset().left-i;isNaN(o)?this.$input.width("100%"):this.$input.width(o)}},focusInput:function(t){if(e(t.target).closest(".token").length||e(t.target).closest(".token-input").length||e(t.target).closest(".tt-dropdown-menu").length)return;var n=this;setTimeout(function(){n.$input.focus()},0)},search:function(){this.$input.data("ui-autocomplete")&&this.$input.autocomplete("search")},disable:function(){this.setProperty("disabled",!0)},enable:function(){this.setProperty("disabled",!1)},readonly:function(){this.setProperty("readonly",!0)},writeable:function(){this.setProperty("readonly",!1)},setProperty:function(e,t){this["_"+e]=t,this.$input.prop(e,t),this.$element.prop(e,t),this.$wrapper[t?"addClass":"removeClass"](e)},destroy:function(){this.$element.val(this.getTokensList()),this.$element.css(this.$element.data("original-styles")),this.$element.prop("tabindex",this.$element.data("original-tabindex"));var t=e('label[for="'+this.$input.prop("id")+'"]');t.length&&t.prop("for",this.$element.prop("id")),this.$element.insertBefore(this.$wrapper),this.$element.removeData("original-styles").removeData("original-tabindex").removeData("bs.tokenfield"),this.$wrapper.remove(),this.$mirror.remove();var n=this.$element;return n}};var r=e.fn.tokenfield;return e.fn.tokenfield=function(t,r){var i,s=[];Array.prototype.push.apply(s,arguments);var o=this.each(function(){var o=e(this),u=o.data("bs.tokenfield"),a=typeof t=="object"&&t;typeof t=="string"&&u&&u[t]?(s.shift(),i=u[t].apply(u,s)):!u&&typeof t!="string"&&!r&&(o.data("bs.tokenfield",u=new n(this,a)),o.trigger("tokenfield:initialize"))});return typeof i!="undefined"?i:o},e.fn.tokenfield.defaults={minWidth:60,minLength:0,allowEditing:!0,allowPasting:!0,limit:0,autocomplete:{},typeahead:{},showAutocompleteOnFocus:!1,createTokensOnBlur:!1,delimiter:",",beautify:!0,inputType:"text"},e.fn.tokenfield.Constructor=n,e.fn.tokenfield.noConflict=function(){return e.fn.tokenfield=r,this},n});