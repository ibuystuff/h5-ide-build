(function(){define(["backbone","underscore","eni_service","base_model"],function(e,t,n,r){var i,s;return i=e.Model.extend({initialize:function(){return t.extend(this,r)},DescribeNetworkInterfaces:function(e,t,r,i,s,o){var u;return s==null&&(s=null),o==null&&(o=null),u=this,e.model=u,n.DescribeNetworkInterfaces(e,t,r,i,s,o,function(t){if(!!t.is_error)return void 0,u.pub(t);if(e.sender&&e.sender.trigger)return e.sender.trigger("VPC_ENI_DESC_NET_IFS_RETURN",t)})},DescribeNetworkInterfaceAttribute:function(e,t,r,i,s,o){var u;return u=this,e.model=u,n.DescribeNetworkInterfaceAttribute(e,t,r,i,s,o,function(t){if(!!t.is_error)return void 0,u.pub(t);if(e.sender&&e.sender.trigger)return e.sender.trigger("VPC_ENI_DESC_NET_IF_ATTR_RETURN",t)})}}),s=new i,s})}).call(this);