define(["handlebars"],function(e){var t=function(e,t,n,r,i){function f(e,t){var r="",i;r+="\n",i=n["if"].call(e,e&&e.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(2,l,t),data:t});if(i||i===0)r+=i;return r+='\n<section class="group required">\n    <label class="name">Name</label>\n    <input data-target="name" class="selection string" value="'+u((i=e&&e.name,typeof i===o?i.apply(e):i))+'"/>\n</section>\n',r}function l(e,t){var n="",r;return n+='\n<dl class="dl-vertical"><dt>ID</dt><dd>'+u((r=(r=e&&e.app,r==null||r===!1?r:r.id),typeof r===o?r.apply(e):r))+"</dd></dl>\n",n}function c(e,t){var n="",r;return n+='\n<dl class="dl-vertical"><dt>Name</dt><dd>'+u((r=e&&e.name,typeof r===o?r.apply(e):r))+"</dd><dt>ID</dt><dd>"+u((r=e&&e.id,typeof r===o?r.apply(e):r))+"</dd></dl>\n",n}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o="function",u=this.escapeExpression,a=this;return s=n.unless.call(t,t&&t.modeIsApp,{hash:{},inverse:a.program(4,c,i),fn:a.program(1,f,i),data:i}),s||s===0?s:""};return e.template(t)});