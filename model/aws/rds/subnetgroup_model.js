(function(){define(["backbone","underscore","subnetgroup_service","base_model"],function(e,t,n,r){var i,s;return i=e.Model.extend({initialize:function(){return t.extend(this,r)},DescribeDBSubnetGroups:function(e,t,r,i,s,o,u){var a;return s==null&&(s=null),o==null&&(o=null),u==null&&(u=null),a=this,e.model=a,n.DescribeDBSubnetGroups(e,t,r,i,s,o,u,function(t){if(!!t.is_error)return void 0,a.pub(t);if(e.sender&&e.sender.trigger)return e.sender.trigger("RDS_SNTG_DESC_DB_SNET_GRPS_RETURN",t)})}}),s=new i,s})}).call(this);