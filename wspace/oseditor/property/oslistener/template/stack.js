define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var r="",i;r+="\r\n",i=n["if"].call(e,e&&e.appId,{hash:{},inverse:f.noop,fn:f.program(2,c,t),data:t});if(i||i===0)r+=i;return r+="\r\n",r}function c(e,t){var n="",r;return n+='\r\n    <dl class="dl-vertical"><dt>ID</dt><dd>'+a((r=e&&e.appId,typeof r===u?r.apply(e):r))+'</dd>\r\n        <dt>Status</dt><dd class="os-status os-status-'+a((r=(r=e&&e.app,r==null||r===!1?r:r.status),typeof r===u?r.apply(e):r))+'">'+a((r=(r=e&&e.app,r==null||r===!1?r:r.status),typeof r===u?r.apply(e):r))+"</dd>\r\n        <dt>Subnet ID</dt><dd>"+a((r=(r=e&&e.app,r==null||r===!1?r:r.subnet_id),typeof r===u?r.apply(e):r))+"</dd></dl>\r\n",n}function h(e,t){return"disabled"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\r\n<div class="option-group-head expand">\r\n    Listener Details\r\n</div>\r\n<div class="option-group" data-model="listener">\r\n    <section class="group required">\r\n        <label class="name">Name</label>\r\n        <input data-id="listener-name" data-target="name" class="selection string" value="'+a((o=t&&t.name,typeof o===u?o.apply(t):o))+'"/>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Connection Limit</label>\r\n        <input data-id="listener-limit" data-target="limit" class="selection string" value="'+a((o=t&&t.limit,typeof o===u?o.apply(t):o))+'"/>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Protocol</label>\r\n        <select class="selection option" value="'+a((o=t&&t.protocol,typeof o===u?o.apply(t):o))+'" data-target="protocol" data-id="listener-protocol" ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:f.noop,fn:f.program(4,h,i),data:i});if(o||o===0)s+=o;s+='>\r\n            <option value=\'HTTP\'>HTTP</option>\r\n            <option value=\'HTTPS\'>HTTPS</option>\r\n            <option value=\'TCP\'>TCP</option>\r\n        </select>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Protocol Port</label>\r\n        <input data-id="listener-port" data-target="port" class="selection string" value="'+a((o=t&&t.port,typeof o===u?o.apply(t):o))+'"  ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:f.noop,fn:f.program(4,h,i),data:i});if(o||o===0)s+=o;return s+="/>\r\n    </section>\r\n</div>",s};return e.template(t)});