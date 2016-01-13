define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var r="",i;r+='\r\n      <li rule-num="'+a((i=e&&e.ruleAction,typeof i===u?i.apply(e):i))+'" rule-engress="'+a((i=e&&e.egress,typeof i===u?i.apply(e):i))+'">\r\n        <div class="acl-rule-number" data-id="'+a((i=e&&e.ruleNumber,typeof i===u?i.apply(e):i))+'"><span class="tooltip" data-tooltip=\''+a(n.i18n.call(e,"PROP.ACL_TIP_RULE_NUMBER",{hash:{},data:t}))+"'>"+a((i=e&&e.ruleNumber,typeof i===u?i.apply(e):i))+'</span></div>\r\n\r\n        <div class="acl-rule-details">\r\n          <div class="rule-list-row">\r\n            <div class="acl-rule-allow-cb tooltip acl-rule-action icon-'+a((i=e&&e.ruleAction,typeof i===u?i.apply(e):i))+'" data-id="'+a((i=e&&e.ruleAction,typeof i===u?i.apply(e):i))+"\" data-tooltip='",i=n.ifCond.call(e,e&&e.ruleAction,"deny",{hash:{},inverse:f.program(4,h,t),fn:f.program(2,c,t),data:t});if(i||i===0)r+=i;r+="'></div>\r\n\r\n            ",i=n["if"].call(e,e&&e.egress,{hash:{},inverse:f.program(8,d,t),fn:f.program(6,p,t),data:t});if(i||i===0)r+=i;return r+='\r\n            <span class="acl-rule-reference tooltip" data-tooltip=\''+a(n.i18n.call(e,"PROP.ACL_TIP_CIDR_BLOCK",{hash:{},data:t}))+"' data-id=\""+a((i=e&&e.cidrBlock,typeof i===u?i.apply(e):i))+'">'+a((i=e&&e.cidrBlock,typeof i===u?i.apply(e):i))+'</span>\r\n          </div>\r\n          <div class="rule-list-row">\r\n            <div><span class="rule-protocol acl-rule-protocol tooltip" data-tooltip=\''+a(n.i18n.call(e,"PROP.ACL_TIP_PROTOCOL",{hash:{},data:t}))+"' data-id=\""+a((i=e&&e.protocol,typeof i===u?i.apply(e):i))+'">'+a((i=e&&e.protocolName,typeof i===u?i.apply(e):i))+"("+a((i=e&&e.protocol,typeof i===u?i.apply(e):i))+')</span></div>\r\n            <div class="acl-rule-port tooltip" data-tooltip=\''+a(n.i18n.call(e,"PROP.PORT",{hash:{},data:t}))+"'>"+a((i=e&&e.dispPort,typeof i===u?i.apply(e):i))+"</div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      ",r}function c(e,t){var r;return r=n.i18n.call(e,"PROP.ACL_TIP_ACTION_DENY",{hash:{},data:t}),r||r===0?r:""}function h(e,t){var r;return r=n.i18n.call(e,"PROP.ACL_TIP_ACTION_ALLOW",{hash:{},data:t}),r||r===0?r:""}function p(e,t){var r="",i;r+='<span class="acl-rule-direction acl-rule-outbound icon-outbound tooltip" data-tooltip=\'',i=n.i18n.call(e,"PROP.ACL_TIP_OUTBOUND",{hash:{},data:t});if(i||i===0)r+=i;return r+="' data-id=\""+a((i=e&&e.egress,typeof i===u?i.apply(e):i))+'"></span>\r\n            ',r}function d(e,t){var r="",i;r+='<span class="acl-rule-direction acl-rule-inbound icon-inbound tooltip" data-tooltip=\'',i=n.i18n.call(e,"PROP.ACL_TIP_INBOUND",{hash:{},data:t});if(i||i===0)r+=i;return r+="' data-id=\""+a((i=e&&e.egress,typeof i===u?i.apply(e):i))+'"></span>\r\n            ',r}function v(e,t){var n="",r;return n+="\r\n      <li>"+a((r=e&&e.subnetDisplay,typeof r===u?r.apply(e):r))+"</li>\r\n    ",n}function m(e,t){var r="",i;r+='\r\n  <div class="option-group-head">\r\n      '+a(n.i18n.call(e,"PROP.RESOURCE_TAGS",{hash:{},data:t}))+'\r\n  </div>\r\n  <div class="option-group">\r\n    ',i=n["if"].call(e,e&&e.tagSet,{hash:{},inverse:f.program(16,b,t),fn:f.program(13,g,t),data:t});if(i||i===0)r+=i;return r+="\r\n  </div>\r\n  ",r}function g(e,t){var r="",i;r+='\r\n    <table class="table cost-estimation-table">\r\n      <tbody>\r\n      ',i=n.each.call(e,e&&e.tagSet,{hash:{},inverse:f.noop,fn:f.program(14,y,t),data:t});if(i||i===0)r+=i;return r+="\r\n      </tbody>\r\n    </table>\r\n    ",r}function y(e,t){var n="",r;return n+='\r\n      <tr> <td style="min-width:70px;">'+a((r=t==null||t===!1?t:t.key,typeof r===u?r.apply(e):r))+"</td><td>"+a(typeof e===u?e.apply(e):e)+"</td> </tr>\r\n      ",n}function b(e,t){var r="";return r+='\r\n    <div class="empty-tag">'+a(n.i18n.call(e,"PROP.RESOURCE_NO_TAGS",{hash:{},data:t}))+"</div>\r\n    ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<article class="property-app">\r\n\r\n  <dl class="dl-vertical">\r\n    <dt>'+a(n.i18n.call(t,"PROP.ACL_APP_ID",{hash:{},data:i}))+"</dt>\r\n    <dd>"+a((o=(o=t&&t.component,o==null||o===!1?o:o.networkAclId),typeof o===u?o.apply(t):o))+"</dd>\r\n\r\n    <dt>"+a(n.i18n.call(t,"PROP.ACL_APP_IS_DEFAULT",{hash:{},data:i}))+"</dt>\r\n    <dd>"+a((o=(o=t&&t.component,o==null||o===!1?o:o["default"]),typeof o===u?o.apply(t):o))+"</dd>\r\n\r\n    <dt>"+a(n.i18n.call(t,"PROP.ACL_APP_VPC_ID",{hash:{},data:i}))+"</dt>\r\n    <dd>"+a((o=(o=t&&t.component,o==null||o===!1?o:o.vpcId),typeof o===u?o.apply(t):o))+'</dd>\r\n  </dl>\r\n\r\n\r\n  <header class="option-group-head">'+a(n.i18n.call(t,"PROP.ACL_TIT_RULE",{hash:{},data:i}))+'<span class="property-head-num-wrap">('+a((o=(o=t&&t.component,o==null||o===!1?o:o.rule_number),typeof o===u?o.apply(t):o))+')</span></header>\r\n  <article class="option-group">\r\n    <div class="rule-list-sort property-control-group">\r\n      <label>'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY",{hash:{},data:i}))+'</label>\r\n      <div class="selectbox" id="acl-sort-rule-select">\r\n        <div class="selection">'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY_NUMBER",{hash:{},data:i}))+'</div>\r\n        <ul class="dropdown" tabindex="-1">\r\n          <li data-id="number" class="item selected">'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY_NUMBER",{hash:{},data:i}))+'</li>\r\n          <li data-id="action" class="item">'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY_ACTION",{hash:{},data:i}))+'</li>\r\n          <li data-id="direction" class="item">'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY_DIRECTION",{hash:{},data:i}))+'</li>\r\n          <li data-id="source/destination" class="item">'+a(n.i18n.call(t,"PROP.ACL_RULE_SORT_BY_SRC_DEST",{hash:{},data:i}))+'</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class="mega-list-wraper acl-rule-list" id="acl-rule-list" >\r\n      ',o=n.each.call(t,(o=(o=t&&t.component,o==null||o===!1?o:o.entrySet),o==null||o===!1?o:o.item),{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\r\n    </ul>\r\n  </article>\r\n\r\n\r\n  <header class="option-group-head expand">'+a(n.i18n.call(t,"PROP.ACL_TIT_ASSOC",{hash:{},data:i}))+'<span class="property-head-num-wrap">('+a((o=(o=t&&t.component,o==null||o===!1?o:o.asso_number),typeof o===u?o.apply(t):o))+')</span></header>\r\n  <ul class="option-group mega-list-wraper">\r\n    ',o=n.each.call(t,(o=(o=t&&t.component,o==null||o===!1?o:o.associationSet),o==null||o===!1?o:o.item),{hash:{},inverse:f.noop,fn:f.program(10,v,i),data:i});if(o||o===0)s+=o;s+="\r\n  </ul>\r\n  ",o=n["if"].call(t,t&&t.tagSet,{hash:{},inverse:f.noop,fn:f.program(12,m,i),data:i});if(o||o===0)s+=o;return s+="\r\n</article>",s};return e.template(t)});