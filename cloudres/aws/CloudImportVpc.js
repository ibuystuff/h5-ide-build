(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define(["CloudResources","cloudres/CrCollection","constant","ApiRequest","DiffTree"],function(t,n,r,i,s){var o,u,a,f,l,c,h,p,d;u=function(e,t){return e?t?"@{"+(e.uid||e)+"."+t+"}":"@{"+(e.uid||e)+".r.p}":""},c=MC.guid,o=function(e,t){var n;return n=r.AWS_RESOURCE_KEY[t],e[n]||e.resource&&e.resource[n]},l=function(e){var t;return t=null,e.tagSet&&(t=e.tagSet.name||e.tagSet.Name||e.tagSet["aws:cloudformation:logical-id"]),t},a=function(){function e(e,t,n){this.region=e,this.vpcId=t,this.azs={},this.subnets={},this.instances={},this.enis={},this.gateways={},this.volumes={},this.sgs={},this.iams={},this.elbs={},this.lcs={},this.asgs={},this.topics={},this.sps={},this.sbgs={},this.dbinstances={},this.ogs={},this.ins_in_asg=[],this.component={},this.layout={},this.originalJson=jQuery.extend(!0,{component:[],layout:[]},n),this.originAppJSON=n,this.DEFAULT_KP=null,this.COMPARISONOPERATOR={GreaterThanOrEqualToThreshold:">=",GreaterThanThreshold:">",LessThanThreshold:"<",LessThanOrEqualToThreshold:"<="}}return e.prototype.CrPartials=function(e){return t(r.RESTYPE[e],this.region)},e.prototype.getResourceByType=function(e){return t(r.RESTYPE[e],this.region).filter(function(e){return function(t){return t.RES_TAG===e.vpcId||t.get("vpcId")===e.vpcId}}(this))},e.prototype.add=function(e,t,n){var i,s,u;return u=r.RESTYPE[e],t&&t.uid?(this.component[t.uid]=t,t):(s=this.getOriginalComp(t,u),s?(_.extend(s.resource,t),this.component[s.uid]=s,this.component[s.uid]):(i={uid:c(),name:n||o(t,u)||e,type:u,resource:t},this.component[i.uid]=i,i))},e.prototype.addLayout=function(e,t,n){var r;r=this.originalJson.layout[e.uid],r||(r={uid:e.uid,coordinate:[0,0]},t&&(r.size=[0,0]),n&&(r.groupUId=n.uid)),this.layout[r.uid]=r},e.prototype.addExpandedAsg=function(e,t){var n,r,i,s;s=this.originalJson.layout;for(n in s){i=s[n];if(i.type==="ExpandedAsg"&&i.originalId===e.uid&&i.groupUId===t.uid){r=this.originalJson.layout[i.uid];break}}r||(r={uid:c(),coordinate:[0,0],originalId:e.uid,type:"ExpandedAsg",groupUId:t.uid}),this.layout[r.uid]=r},e.prototype.addAz=function(e){var t,n;return t=this.azs[e],t?t:(n=this.getOriginalComp(e,"AZ"),n||(n={RegionName:this.region,ZoneName:e}),t=this.add("AZ",n,e),this.addLayout(t,!0,this.theVpc),this.azs[e]=t,t)},e.prototype.addIAM=function(e){var t,n,r,i,s;return t=this.iams[e],t?t:(i=/arn:aws:iam::.*:server-certificate\/.*/g,e.match(i)?(s=e.split(":"),r=s[s.length-1].replace("server-certificate/",""),n={CertificateBody:"",CertificateChain:"",PrivateKey:"",ServerCertificateMetadata:{Arn:e,ServerCertificateId:"",ServerCertificateName:r}},t=this.add("IAM",n,r),this.iams[e]=t,t):(void 0,null))},e.prototype.addTopic=function(e){var t,n,r,i;return n=this.topics[e],n?n:(i={TopicArn:e},t=e.split(":"),t.length>0&&(r=t[t.length-1]),n=this.add("TOPIC",i,r),this.topics[e]=n,n)},e.prototype.getOriginalComp=function(e,t){var n,i,s,o,u,a;if(t===r.RESTYPE.NC){u=this.originalJson.component;for(o in u){n=u[o];if(n.type!==t)continue;if(n.resource.AutoScalingGroupName===e.AutoScalingGroupName&&n.resource.TopicARN===e.TopicARN)return n}}else{t=r.RESTYPE[t]||t,s=r.AWS_RESOURCE_KEY[t],i=_.isObject(e)?e[s]:e;if(!i)return null;a=this.originalJson.component;for(o in a){n=a[o];if(n.type!==t)continue;if((n[s]||n.resource[s])===i)return n}}return null},e.prototype._mapProperty=function(e,t){var n,r,i;for(n in e)r=e[n],((i=typeof r)==="string"||i==="number"||i==="boolean")&&t[n[0].toUpperCase()+n.slice(1)]!==void 0&&(t[n[0].toUpperCase()+n.slice(1)]=r);return t},e.prototype._genCompMap=function(e){var t,n,i,s,o;n={},o=e.component;for(s in o){t=o[s],i=r.AWS_RESOURCE_KEY[t.type];if(!t.resource)continue;if(!i)continue;t.resource[i]||void 0,n[t.resource[i]]={uid:s,name:t.name}}return n},e.prototype._removeAppId=function(e){var t,n;return t=/app-[a-z0-9]{8}$/g,n=e.match(t),n&&n.length===1&&(e=e.replace(n[0],"")),e},e}(),f=[function(){var t,n,i,s,o,u,a;s=["AWS.EC2.Tag","AWS.AutoScaling.Tag",r.RESTYPE.KP,r.RESTYPE.TOPIC,r.RESTYPE.SUBSCRIPTION,r.RESTYPE.IAM,r.RESTYPE.DHCP],u=this.originalJson.component;for(o in u)t=u[o],!this.component[o]&&(a=t.type,e.call(s,a)>=0)&&(n=this.add(null,t),t.type===r.RESTYPE.IAM?this.iams[t.resource.ServerCertificateMetadata.Arn]=n:t.type===r.RESTYPE.KP&&t.name==="DefaultKP"&&(this.DEFAULT_KP=jQuery.extend(!0,{},t),this.component[t.uid]=this.DEFAULT_KP)),null;return this.DEFAULT_KP||(i={KeyFingerprint:"",KeyName:"DefaultKP"},this.add("KP",i,"DefaultKP")),null},function(){var e,t;e=this.getResourceByType("VPC")[0],this.theVpc=t=this.add("VPC",{VpcId:this.vpcId,CidrBlock:e.attributes.cidrBlock,DhcpOptionsId:e.attributes.dhcpOptionsId,InstanceTenancy:e.attributes.instanceTenancy,EnableDnsHostnames:e.attributes.enableDnsHostnames,EnableDnsSupport:e.attributes.enableDnsSupport},l(e.attributes)||this.vpcId),this.addLayout(t,!0)},function(){var e,t,n,r,i,s,o;o=this.getResourceByType("SUBNET")||[];for(t=i=0,s=o.length;i<s;t=++i)n=o[t],n=n.attributes,e=this.addAz(n.availabilityZone),r=this.add("SUBNET",{AvailabilityZone:u(e,"resource.ZoneName"),CidrBlock:n.cidrBlock,SubnetId:n.id,VpcId:u(this.theVpc,"resource.VpcId")},l(n)||n.id),this.subnets[n.id]=r,this.addLayout(r,!0,e)},function(){var e,t,n,r,i,s;s=this.getResourceByType("IGW")||[];for(r=0,i=s.length;r<i;r++){e=s[r],e=e.attributes;if(!(e.attachmentSet&&e.attachmentSet.length>0))continue;n={AttachmentSet:[{VpcId:u(this.theVpc,"resource.VpcId")}],InternetGatewayId:e.id},t=this.add("IGW",n,"Internet-gateway"),this.addLayout(t,!0,this.theVpc),this.gateways[e.id]=t}},function(){var e,t,n,r,i,s,o,a;o=this.getResourceByType("VGW");for(i=0,s=o.length;i<s;i++){e=o[i],e=e.attributes;if((a=e.state)==="deleted"||a==="deleting")continue;e.attachments&&e.attachments.length>0&&(t=e.attachments[0]),r={Attachments:[{VpcId:u(this.theVpc,"resource.VpcId")}],Type:e.type,VpnGatewayId:""},r.VpnGatewayId=e.id,n=this.add("VGW",r,"VPN-gateway"),this.addLayout(n,!0,this.theVpc),this.gateways[e.id]=n}},function(){var e,t,n,r,i,s,o;s=this.getResourceByType("CGW");for(r=0,i=s.length;r<i;r++){e=s[r],e=e.attributes;if((o=e.state)==="deleted"||o==="deleting")continue;n={BgpAsn:"bgpAsn"in e?e.bgpAsn:"",CustomerGatewayId:e.id,IpAddress:e.ipAddress,Type:e.type},t=this.add("CGW",n,l(e)),delete this.component[t.uid],this.gateways[e.id]=t}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v;h=this.getResourceByType("VPN");for(o=0,f=h.length;o<f;o++){e=h[o],e=e.attributes;if((p=e.state)==="deleted"||p==="deleting")continue;r=this.gateways[e.vpnGatewayId],t=this.gateways[e.customerGatewayId];if(!t||!r)continue;s={CustomerGatewayId:u(t,"resource.CustomerGatewayId"),Options:{StaticRoutesOnly:!1},Routes:[],Type:e.type,VpnConnectionId:e.id,VpnGatewayId:u(r,"resource.VpnGatewayId")},e.options&&e.options.staticRoutesOnly&&(s.Options.StaticRoutesOnly=e.options.staticRoutesOnly,t.resource.BgpAsn="");if(e.routes){d=e.routes;for(a=0,c=d.length;a<c;a++){n=d[a];if((v=n.state)==="deleting"||v==="deleted")continue;s.Routes.push({DestinationCidrBlock:n.destinationCidrBlock})}}i=this.add("VPN",s,l(e)),this.component[t.uid]=t,this.addLayout(t,!1)}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k;h=this,a={},r=function(e,t){var n;h=this,String(e.ipProtocol)==="-1"&&(e.fromPort="0",e.toPort="65535");if(e.groups&&e.groups.length>0)return _.each(e.groups,function(n){var r,i,s;if(n.groupId)return r="",s=n.groupId,i=a[s],i?r=u(i,"resource.GroupId"):r=n.groupId,t.push({FromPort:String(e.fromPort?e.fromPort:""),IpProtocol:String(e.ipProtocol),IpRanges:r,ToPort:String(e.toPort?e.toPort:"")})});if(e.ipRanges&&e.ipRanges.length>0)return n=e.ipRanges,_.each(n,function(n){return t.push({FromPort:String(e.fromPort?e.fromPort:""),IpProtocol:String(e.ipProtocol),IpRanges:n.cidrIp,ToPort:String(e.toPort?e.toPort:"")})})},T=this.getResourceByType("SG");for(m=0,w=T.length;m<w;m++)e=T[m],i=e.attributes.groupId,o=this.getOriginalComp(i,"SG"),o&&(a[i]=o);v=null,p=null,N=this.getResourceByType("SG");for(g=0,E=N.length;g<E;g++){e=N[g],e=e.attributes,f={Default:!1,GroupDescription:"",GroupId:"",GroupName:"",IpPermissions:[],IpPermissionsEgress:[],VpcId:""},f=this._mapProperty(e,f),s=this.getOriginalComp(e.id,"SG"),s&&(f.GroupName=s.resource.GroupName),d=this.getOriginalComp(e.vpcId,"VPC"),d&&(f.VpcId=u(d.uid,"resource.VpcId")),f.GroupDescription=e.groupDescription;if(e.ipPermissions){C=e.ipPermissions||[];for(y=0,S=C.length;y<S;y++)c=C[y],r.call(this,c,f.IpPermissions)}if(e.ipPermissionsEgress){k=e.ipPermissionsEgress||[];for(b=0,x=k.length;b<x;b++)c=k[b],r.call(this,c,f.IpPermissionsEgress)}o=this.add("SG",f,l(e)||this._removeAppId(e.groupName)),e.groupName==="default"?v=e:e.groupName.indexOf("-DefaultSG-app-")!==-1&&(p=e),this.sgs[e.id]=o}p&&v&&(n=this.sgs[v.id],delete this.sgs[v.id],delete this.component[n.uid],v=null),t=p||v,t&&(t=this.sgs[t.id]),t&&(t.name="DefaultSG",t.resource.Default=!0),_.each(h.sgs,function(e){return _.each(e.resource.IpPermissions,function(e){var t,n;if(e.IpRanges&&e.IpRanges.indexOf("sg-")===0){n=h.sgs[e.IpRanges];if(n)return t=u(n,"resource.GroupId"),e.IpRanges=t}}),_.each(e.resource.IpPermissionsEgress,function(e){var t,n;if(e.IpRanges&&e.IpRanges.indexOf("sg-")===0){n=h.sgs[e.IpRanges];if(n)return t=u(n,"resource.GroupId"),e.IpRanges=t}})})},function(){var e,t,n,r,i,s,o,a;a=this.getResourceByType("VOL");for(s=0,o=a.length;s<o;s++){e=a[s],e=e.attributes;if(!e.attachmentSet)continue;t=this.azs[e.availabilityZone],i={VolumeId:e.id,Size:Number(e.size),SnapshotId:e.snapshotId?e.snapshotId:"",Iops:e.iops?e.iops:"",VolumeType:e.volumeType,AvailabilityZone:u(t,"resource.ZoneName")},e.volumeType==="gp2"&&(i.Iops=""),e.attachmentSet&&(n=this.instances[e.attachmentSet[0].instanceId],n&&(i.AttachmentSet.Device=e.attachmentSet[0].device,i.AttachmentSet.InstanceId=u(n,"resource.InstanceId"))),r=this.add("VOL",i,e.attachmentSet[0].device),delete this.component[r.uid],this.volumes[e.id]=r}},function(){var t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y,b,w;o=this,g=this.getResourceByType("ASG");for(p=0,v=g.length;p<v;p++)t=g[p],t=t.attributes,_.each(t.Instances,function(e,t){return o.ins_in_asg.push(e.InstanceId)});y=this.getResourceByType("INSTANCE")||[];for(d=0,m=y.length;d<m;d++){n=y[d],n=n.attributes;if(n.tagSet&&n.tagSet["aws:elasticmapreduce:instance-group-role"]&&n.tagSet["aws:elasticmapreduce:job-flow-id"]){void 0;continue}if((b=n.instanceState.name)==="shutting-down"||b==="terminated")continue;if(w=n.id,e.call(this.ins_in_asg,w)>=0)continue;r=this.addAz(n.placement.availabilityZone),c=this.subnets[n.subnetId];if(!c)continue;s={BlockDeviceMapping:[],DisableApiTermination:!1,EbsOptimized:"",ImageId:"",InstanceId:"",InstanceType:"",KeyName:"",Monitoring:"",NetworkInterface:[],Placement:{Tenancy:"",AvailabilityZone:""},SecurityGroup:[],SecurityGroupId:[],ShutdownBehavior:"",SubnetId:"",UserData:{Base64Encoded:!1,Data:""},VpcId:""},s=this._mapProperty(n,s),s.SubnetId=u(c,"resource.SubnetId"),s.VpcId=u(this.theVpc,"resource.VpcId"),s.Placement.AvailabilityZone=u(r,"resource.ZoneName"),s.Placement.Tenancy=n.placement.tenancy,n.monitoring&&n.monitoring&&(s.Monitoring=n.monitoring.state),n.placement.tenancy==="default"&&(s.Placement.Tenancy=""),n.shutdownBehavior||(s.ShutdownBehavior="terminate"),s.InstanceId=n.id,s.EbsOptimized=n.ebsOptimized,a=this.getOriginalComp(n.id,"INSTANCE"),h=[],n.rootDeviceType==="ebs"&&(a&&(s.BlockDeviceMapping=a.resource.BlockDeviceMapping||[],s.BlockDeviceMapping=_.filter(s.BlockDeviceMapping,function(e){return _.isString(e)?!1:!0})),f=[],_.each(n.blockDeviceMapping,function(e){var t,r;if(n.rootDeviceName.indexOf(e.deviceName)!==-1){r=o.volumes[e.ebs.volumeId];if(r)return t={DeviceName:e.deviceName,Ebs:{SnapshotId:r.resource.SnapshotId,VolumeSize:r.resource.Size,VolumeType:r.resource.VolumeType}},r.resource.VolumeType==="io1"&&(t.Ebs.Iops=r.resource.Iops),f.push(t)}}),s.BlockDeviceMapping.length!==f.length&&(s.BlockDeviceMapping=f)),_.each(n.blockDeviceMapping||[],function(e){var t;if(n.rootDeviceType==="instance-store"||n.rootDeviceName.indexOf(e.deviceName)===-1){t=o.volumes[e.ebs.volumeId];if(t)return o.component[t.uid]=t,h.push(t.uid)}}),i=this.add("INSTANCE",s,l(n)),_.each(h,function(e,t){var n;n=o.component[e];if(n)return n.resource.AttachmentSet||(n.resource.AttachmentSet={}),n.resource.AttachmentSet.InstanceId=u(i,"resource.InstanceId")}),this.addLayout(i,!1,c),this.instances[n.id]=i}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y,b,w,E;m=this.getResourceByType("ENI")||[];for(f=0,p=m.length;f<p;f++){e=m[f],e=e.attributes,t=this.addAz(e.availabilityZone),a=this.subnets[e.subnetId];if(!a)continue;r={AssociatePublicIpAddress:!1,Attachment:{AttachmentId:"",DeviceIndex:"1",InstanceId:""},AvailabilityZone:"",Description:"",GroupSet:[],NetworkInterfaceId:"",PrivateIpAddressSet:[],SourceDestCheck:!0,SubnetId:"",VpcId:""};if(e.attachment&&e.attachment.instanceOwnerId&&((g=e.attachment.instanceOwnerId)==="amazon-elb"||g==="amazon-rds"))continue;r=this._mapProperty(e,r),e.association&&e.association.publicIp&&(r.AssociatePublicIpAddress=!0),r.NetworkInterfaceId=e.id,r.AvailabilityZone=u(t,"resource.ZoneName"),r.SubnetId=u(a,"resource.SubnetId"),r.VpcId=u(this.theVpc,"resource.VpcId"),e.attachment&&((y=e.attachment.deviceIndex)!=="0"&&y!==0&&(r.Attachment.AttachmentId=e.attachment.attachmentId),s=this.instances[e.attachment.instanceId],s&&(r.Attachment.InstanceId=u(s,"resource.InstanceId"),r.Attachment.DeviceIndex=String(e.attachment.deviceIndex===0?"0":e.attachment.deviceIndex))),b=e.privateIpAddressesSet;for(c=0,d=b.length;c<d;c++)o=b[c],r.PrivateIpAddressSet.push({PrivateIpAddress:o.privateIpAddress,AutoAssign:!1,Primary:o.primary});w=e.groupSet;for(h=0,v=w.length;h<v;h++)i=w[h],r.GroupSet.push({GroupId:u(this.sgs[i.groupId],"resource.GroupId"),GroupName:u(this.sgs[i.groupId],"resource.GroupName")});n=this.add("ENI",r,l(e)),this.enis[e.id]=n,(!e.attachment||(E=e.attachment.deviceIndex)!=="0"&&E!==0)&&this.addLayout(n,!1,a)}},function(){var e,t,n,r,i,s,o,a,f,l,c,h;c=this.getResourceByType("EIP");for(o=0,f=c.length;o<f;o++){e=c[o],e=e.attributes,r=this.enis[e.networkInterfaceId];if(!r)continue;n={AllocationId:e.id,Domain:e.domain,InstanceId:"",NetworkInterfaceId:u(r,"resource.NetworkInterfaceId"),PrivateIpAddress:"",PublicIp:e.publicIp},i=0,h=r.resource.PrivateIpAddressSet;for(a=0,l=h.length;a<l;a++)s=h[a],s.PrivateIpAddress===e.privateIpAddress&&(n.PrivateIpAddress=u(r,"resource.PrivateIpAddressSet."+i+".PrivateIpAddress")),i++;t=this.add("EIP",n)}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y,b,w,E,S,x,T;E=this.getResourceByType("RT")||[];for(p=0,g=E.length;p<g;p++){t=E[p],t=t.attributes,f={AssociationSet:[],PropagatingVgwSet:[],RouteSet:[],RouteTableId:t.id,VpcId:u(this.theVpc,"resource.VpcId")},S=t.associationSet;for(d=0,y=S.length;d<y;d++)i=S[d],e={Main:i.main===!1?!1:"true",RouteTableAssociationId:"",SubnetId:""},e.Main||(e.RouteTableAssociationId=i.routeTableAssociationId,c=this.subnets[i.subnetId],i.subnetId&&c&&(e.SubnetId=u(c,"resource.SubnetId"))),f.AssociationSet.push(e);h={},x=t.routeSet;for(v=0,b=x.length;v<b;v++){i=x[v];if(i.state!=="active")continue;if(i.origin&&i.origin==="EnableVgwRoutePropagation")continue;s=this.instances[i.instanceId],n=this.enis[i.networkInterfaceId],r=this.gateways[i.gatewayId],o={DestinationCidrBlock:i.destinationCidrBlock,GatewayId:"",InstanceId:"",NetworkInterfaceId:i.networkInterfaceId&&n?u(n,"resource.NetworkInterfaceId"):"",Origin:i.gatewayId==="local"?i.origin:""},i.gatewayId&&(h[i.gatewayId]=!0,i.gatewayId!=="local"&&r?r.type==="AWS.VPC.VPNGateway"?o.GatewayId=u(r,"resource.VpnGatewayId"):r.type==="AWS.VPC.InternetGateway"&&(o.GatewayId=u(r,"resource.InternetGatewayId")):o.GatewayId=i.gatewayId),f.RouteSet.push(o)}T=t.propagatingVgwSet;for(m=0,w=T.length;m<w;m++)i=T[m],r=this.gateways[i.gatewayId],r&&h[i.gatewayId]&&f.PropagatingVgwSet.push(u(r,"resource.VpnGatewayId"));a=this.add("RT",f,l(t)),this.addLayout(a,!0,this.theVpc)}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y;m=this.getResourceByType("ACL")||[];for(f=0,p=m.length;f<p;f++){i=m[f],i=i.attributes,r={AssociationSet:[],Default:!1,EntrySet:[],NetworkAclId:"",VpcId:""},r=this._mapProperty(i,r),r.VpcId=u(this.theVpc,"resource.VpcId"),r.NetworkAclId=i.id,i["default"]?(r.Default=i["default"],n="DefaultACL"):n=l(i),g=i.entries;for(c=0,d=g.length;c<d;c++)e=g[c],s=e.egress,_.isString(s)&&(s==="true"?s=!0:s=!1),r.EntrySet.push({RuleAction:e.ruleAction,Protocol:Number(e.protocol),CidrBlock:e.cidrBlock,Egress:e.egress,IcmpTypeCode:{Type:e.icmpTypeCode?String(e.icmpTypeCode.type):"",Code:e.icmpTypeCode?String(e.icmpTypeCode.code):""},PortRange:{To:e.portRange?String(e.portRange.to):"",From:e.portRange?String(e.portRange.from):""},RuleNumber:e.ruleNumber});y=i.associationSet;for(h=0,v=y.length;h<v;h++){e=y[h],a=this.subnets[e.subnetId];if(!a)continue;r.AssociationSet.push({NetworkAclAssociationId:e.networkAclAssociationId,SubnetId:u(a,"resource.SubnetId")})}o=this.getOriginalComp(i.id,"ACL"),o&&o.resource.AssociationSet.sort().toString()===r.AssociationSet.sort().toString()&&(r.AssociationSet=jQuery.extend(!0,[],o.resource.AssociationSet)),t=this.add("ACL",r,n)}},function(){var t,n,r,i,s,o,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L;f=this,T=this.getResourceByType("ELB")||[];for(d=0,y=T.length;d<y;d++){t=T[d],t=t.attributes,i={HealthCheck:{Timeout:"",Target:"",HealthyThreshold:"",UnhealthyThreshold:"",Interval:""},Policies:{AppCookieStickinessPolicies:[{CookieName:"",PolicyName:""}],OtherPolicies:[],LBCookieStickinessPolicies:[{CookieExpirationPeriod:"",PolicyName:""}]},BackendServerDescriptions:[{InstantPort:"",PoliciyNames:""}],SecurityGroups:[],ListenerDescriptions:[],DNSName:"",Scheme:"",Instances:[],Subnets:[],VpcId:"",LoadBalancerName:"",AvailabilityZones:[],CrossZoneLoadBalancing:"",ConnectionDraining:{Enabled:!1,Timeout:null},ConnectionSettings:{IdleTimeout:60}},i=this._mapProperty(t,i),l=this.getOriginalComp(t.Name,"ELB"),i.ConnectionDraining.Enabled=t.ConnectionDraining.Enabled,i.ConnectionSettings.IdleTimeout=Number(t.ConnectionSettings.IdleTimeout),l?i.ConnectionDraining.Timeout=l.resource.ConnectionDraining.Timeout:t.ConnectionDraining.Enabled&&(i.ConnectionDraining.Timeout=Number(t.ConnectionDraining.Timeout));if(t.SecurityGroups){N=t.SecurityGroups;for(v=0,b=N.length;v<b;v++)c=N[v],i.SecurityGroups.push(u(this.sgs[c],"resource.GroupId"))}i.VpcId=u(this.theVpc,"resource.VpcId");if(t.Subnets){C=t.Subnets;for(m=0,w=C.length;m<w;m++)p=C[m],i.Subnets.push(u(this.subnets[p],"resource.SubnetId"))}i.DNSName=t.Dnsname,i.CrossZoneLoadBalancing=t.CrossZoneLoadBalancing.Enabled;if(t.ListenerDescriptions){k=t.ListenerDescriptions;for(g=0,E=k.length;g<E;g++)a=k[g],h="",a.Listener.SslcertificateId?(s=this.addIAM(a.Listener.SslcertificateId),s&&(h=u(s,"resource.ServerCertificateMetadata.Arn"))):a.Listener.SslcertificateId="",n={PolicyNames:"",Listener:{LoadBalancerPort:a.Listener.LoadBalancerPort,InstanceProtocol:a.Listener.InstanceProtocol,Protocol:a.Listener.Protocol,SSLCertificateId:h||a.Listener.SslcertificateId,InstancePort:a.Listener.InstancePort}},i.ListenerDescriptions.push(n)}i.HealthCheck=t.HealthCheck;if(t.Instances){L=t.Instances;for(x=0,S=L.length;x<S;x++)o=L[x],e.call(f.ins_in_asg,o)>=0||this.instances[o]&&i.Instances.push({InstanceId:u(this.instances[o],"resource.InstanceId")})}r=this.add("ELB",i,t.Name),this.addLayout(r,!1,this.theVpc),this.elbs[t.Name]=r}},function(){var e,t,n,r,i,s,o,a,f,l,c;s=this,c=this.getResourceByType("LC");for(f=0,l=c.length;f<l;f++){e=c[f],e=e.attributes,i={AssociatePublicIpAddress:!1,BlockDeviceMapping:[],EbsOptimized:!1,ImageId:"",InstanceMonitoring:!1,InstanceType:"",KeyName:"",LaunchConfigurationARN:"",LaunchConfigurationName:"",SecurityGroups:[],UserData:""},i=this._mapProperty(e,i),i.LaunchConfigurationARN=e.id,i.LaunchConfigurationName=e.Name,i.InstanceMonitoring=e.InstanceMonitoring.Enabled,e.UserData&&(typeof Base64!="undefined"&&Base64!==null?Base64.decode:void 0)&&(i.UserData=Base64.decode(e.UserData)),a=[],_.each(e.SecurityGroups,function(e,t){var n;n=s.sgs[e];if(n)return a.push(u(n,"resource.GroupId"))});if(a.length===0)continue;i.SecurityGroups=a,t=i.BlockDeviceMapping,_.each(e.BlockDeviceMapping||[],function(e,n){var r;return e.Ebs===null&&e.VirtualName?r={DeviceName:e.DeviceName,Ebs:null,NoDevice:e.NoDevice,VirtualName:e.VirtualName}:(r={DeviceName:e.DeviceName,Ebs:{VolumeSize:e.Ebs?Number(e.Ebs.VolumeSize):0,VolumeType:e.Ebs?e.Ebs.VolumeType:""}},e.Ebs&&(e.Ebs.SnapshotId&&(r.Ebs.SnapshotId=e.Ebs.SnapshotId),r.Ebs.VolumeType==="io1"&&(r.Ebs.Iops=e.Ebs.Iops)),t.push(r))}),n=this.getOriginalComp(e.KeyName,"KP"),n?(o=this.getOriginalComp(e.id,"LC"),o?i.KeyName=o.resource.KeyName:i.KeyName=u(n,"resource.KeyName")):e.KeyName&&(i.KeyName=e.KeyName),r=this.add("LC",i,e.Name),this.addLayout(r),delete this.component[e.id],this.lcs[e.Name]=r}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v;o=this,v=this.getResourceByType("ASG");for(p=0,d=v.length;p<d;p++){r=v[p],r=r.attributes;if(!this.lcs[r.LaunchConfigurationName])continue;n={AutoScalingGroupARN:"",AutoScalingGroupName:"",AvailabilityZones:[],DefaultCooldown:"0",DesiredCapacity:"0",HealthCheckGracePeriod:"0",HealthCheckType:"",LaunchConfigurationName:"",LoadBalancerNames:[],MaxSize:"0",MinSize:"0",TerminationPolicies:[],VPCZoneIdentifier:""},n=this._mapProperty(r,n),c=this.getOriginalComp(r.id,"ASG"),n.AutoScalingGroupARN=r.id,n.AutoScalingGroupName=r.Name,n.TerminationPolicies=r.TerminationPolicies,n.LaunchConfigurationName=u(this.lcs[r.LaunchConfigurationName],"resource.LaunchConfigurationName"),h=[],_.each(r.Subnets,function(e,t){var n;n=o.subnets[e];if(n)return h.push(u(n,"resource.SubnetId"))});if(h.length===0)continue;n.VPCZoneIdentifier=h.join(" , "),s=[],_.each(r.LoadBalancerNames,function(e,t){var n;return n=o.elbs[e],s.push(u(n,"resource.LoadBalancerName"))}),n.LoadBalancerNames=s,i=[],_.each(r.AvailabilityZones,function(e,t){var n;return n=o.addAz(e),i.push(u(n,"resource.ZoneName"))}),n.AvailabilityZones=i,t=this.add("ASG",n,l(r)||r.Name),a="",f=this.originalJson.layout[t.uid],e=!1,_.each(r.Subnets,function(n,r){var i;return i=o.subnets[n],!e&&(f&&f.groupUId===i.uid||!f)?(o.addLayout(t,!0,i),e=!0):o.addExpandedAsg(t,i)}),this.asgs[r.Name]=t}},function(){var e,t,n,i,s,o,a,f;f=this.getResourceByType("NC");for(o=0,a=f.length;o<a;o++){t=f[o],t=t.attributes,i={AutoScalingGroupName:t.AutoScalingGroupName,NotificationType:t.NotificationType,TopicARN:t.TopicARN},e=this.asgs[i.AutoScalingGroupName];if(!e)continue;i.AutoScalingGroupName=u(e,"resource.AutoScalingGroupName"),s=_.first(_.filter(this.originalJson.component,function(e){if(e.type===r.RESTYPE.TOPIC)return e.resource.TopicArn===i.TopicARN})),s?i.TopicARN=u(s,"resource.TopicArn"):(s=this.addTopic(i.TopicARN),s&&(i.TopicARN=u(s,"resource.TopicArn"))),n=this.add("NC",i,"SnsNotification")}},function(){var e,t,n,r,i,s,o;o=this.getResourceByType("SP");for(i=0,s=o.length;i<s;i++){t=o[i],t=t.attributes,r={AdjustmentType:"",AutoScalingGroupName:"",Cooldown:"0",MinAdjustmentStep:"",PolicyARN:"",PolicyName:"",ScalingAdjustment:""},r=this._mapProperty(t,r),t.Cooldown===""&&(r.Cooldown="0"),e=this.asgs[t.AutoScalingGroupName],r.ScalingAdjustment&&(r.ScalingAdjustment=String(r.ScalingAdjustment));if(!e)continue;r.AutoScalingGroupName=u(e,"resource.AutoScalingGroupName"),r.PolicyARN=t.id,r.PolicyName=t.Name,n=this.add("SP",r,t.Name),this.sps[t.id]=n}},function(){var e,t,n,r,i,s,o,a,f,l,c,h,p,d;o=this,d=this.getResourceByType("CW");for(h=0,p=d.length;h<p;h++){t=d[h],t=t.attributes,r={AlarmActions:[],AlarmArn:"",AlarmName:"",ComparisonOperator:"",Dimensions:[],EvaluationPeriods:"",InsufficientDataActions:[],MetricName:"",Namespace:"",OKAction:[],Period:0,Statistic:"",Threshold:"",Unit:""},r=this._mapProperty(t,r),i=[],_.each(t.Dimensions,function(e,t){var n,r;if(e.Name==="AutoScalingGroupName"){n=o.asgs[e.Value];if(n)return r={name:e.Name,value:u(n,"resource.AutoScalingGroupName")},i.push(r)}});if(i.length===0)continue;r.Dimensions=i,f=/arn:aws:autoscaling:.*:scalingPolicy:/g,l=/arn:aws:sns:.*:.*/g,c=[],s=!1,_.each(t.AlarmActions,function(e,t){var n,r;if(e.match(l)){r=o.addTopic(e);if(r)return c.push(e)}else if(e.match(f)){n=o.sps[e];if(n)return s=!0,c.push(e)}});if(!s)continue;e=[],_.each(c,function(t,n){var r,i;if(t.match(l)){i=o.addTopic(t);if(i)return e.push(u(i,"resource.TopicArn"))}else if(t.match(f)){r=o.sps[t];if(r)return e.push(u(r,"resource.PolicyARN"))}}),r.AlarmActions=e,a=[],_.each(t.Okactions,function(e,t){var n;if(e.match(f)){n=o.sps[e];if(n)return a.push(u(n,"resource.PolicyARN"))}}),r.OKAction=a,r.Threshold=String(t.Threshold),r.EvaluationPeriods=String(t.EvaluationPeriods),t.ComparisonOperator&&(r.ComparisonOperator=this.COMPARISONOPERATOR[t.ComparisonOperator]),r.AlarmArn=t.id,r.AlarmName=t.Name,n=this.add("CW",r,t.Name)}},function(){var e,t,n,r,i,s,o,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x;w=this.getResourceByType("DBOG");for(h=0,m=w.length;h<m;h++){e=w[h],e=e.attributes;if(e.OptionGroupName.indexOf("default:")===0){void 0;continue}r={CreatedBy:"",EngineName:"",MajorEngineVersion:"",OptionGroupDescription:"",OptionGroupName:"",Options:[],VpcId:""},r=this._mapProperty(e,r),r.OptionGroupName=e.id,r.VpcId=u(this.theVpc,"resource.VpcId"),E=e.Options||[];for(p=0,g=E.length;p<g;p++){i=E[p],s=this._mapProperty(i,{OptionName:"",OptionSettings:[],Port:"",VpcSecurityGroupMemberships:[]}),s.Port=s.Port?s.Port.toString():"",S=i.OptionSettings;for(d=0,y=S.length;d<y;d++)a=S[d],f=this._mapProperty(a,{Name:"",Value:""}),s.OptionSettings.push(f);x=i.VpcSecurityGroupMemberships;for(v=0,b=x.length;v<b;v++)l=x[v],c=this.sgs[l.VpcSecurityGroupId],c?s.VpcSecurityGroupMemberships.push(u(c,"resource.GroupId")):void 0;r.Options.push(s)}o=this.getOriginalComp(e.id,"DBOG"),o?(t=o.name,r.CreatedBy=o.resource.CreatedBy):(t=e.OptionGroupName,r.CreatedBy="user",void 0),n=this.add("DBOG",r,t),this.ogs[e.id]=n}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d;p=this.getResourceByType("DBSBG");for(a=0,c=p.length;a<c;a++){e=p[a],e=e.attributes,i={CreatedBy:"",DBSubnetGroupName:"",SubnetIds:[],DBSubnetGroupDescription:""},i=this._mapProperty(e,i),i.DBSubnetGroupName=e.id,d=e.Subnets;for(f=0,h=d.length;f<h;f++)s=d[f],o=this.subnets[s.SubnetIdentifier],i.SubnetIds.push(u(o,"resource.SubnetId"));n=this.getOriginalComp(e.id,"DBSBG"),n?(t=n.name,i.CreatedBy=n.resource.CreatedBy,i.SubnetIds.sort().toString()===n.resource.SubnetIds.sort().toString()&&(i.SubnetIds=jQuery.extend(!0,[],n.resource.SubnetIds))):(t=e.DBSubnetGroupName,i.CreatedBy="user"),r=this.add("DBSBG",i,l(e)||t),this.addLayout(r,!0,this.theVpc),this.sbgs[e.id]=r}},function(){var e,t,n,r,i,s,o,a,f,c,h,p,d,v,m,g,y,b,w,E;i=[],w=this.getResourceByType("DBINSTANCE");for(d=0,g=w.length;d<g;d++)e=w[d],e=e.attributes,e.ReadReplicaSourceDBInstanceIdentifier?i.push(e):i.unshift(e);for(v=0,y=i.length;v<y;v++){e=i[v],p=this.sbgs[e.sbgId];if(!p){void 0;continue}a=this.sbgs[e.DBSubnetGroup.DBSubnetGroupName];if(!a){void 0;continue}r={CreatedBy:"",DBInstanceIdentifier:"",DBSnapshotIdentifier:"",AllocatedStorage:0,AutoMinorVersionUpgrade:!1,AvailabilityZone:"",MultiAZ:!1,Iops:"",BackupRetentionPeriod:0,CharacterSetName:"",DBInstanceClass:"",DBName:"",Endpoint:{Port:0},Engine:"",EngineVersion:"",LicenseModel:"",MasterUsername:"",MasterUserPassword:"",OptionGroupMembership:{OptionGroupName:""},DBParameterGroups:{DBParameterGroupName:""},PendingModifiedValues:"",PreferredBackupWindow:"",PreferredMaintenanceWindow:"",PubliclyAccessible:!1,DBSubnetGroup:{DBSubnetGroupName:""},VpcSecurityGroupIds:[]},r=this._mapProperty(e,r),e.PendingModifiedValues&&(e.PendingModifiedValues.AllocatedStorage&&(r.AllocatedStorage=Number(e.PendingModifiedValues.AllocatedStorage)),e.PendingModifiedValues.BackupRetentionPeriod&&(r.BackupRetentionPeriod=Number(e.PendingModifiedValues.BackupRetentionPeriod)),e.PendingModifiedValues.DBInstanceClass&&(r.DBInstanceClass=e.PendingModifiedValues.DBInstanceClass),e.PendingModifiedValues.Iops&&(r.Iops=Number(e.PendingModifiedValues.Iops)),e.PendingModifiedValues.MultiAZ&&(r.MultiAZ=e.PendingModifiedValues.MultiAZ),e.PendingModifiedValues.MasterUserPassword&&(r.MasterUserPassword=e.PendingModifiedValues.MasterUserPassword)),r.MultiAZ&&(r.AvailabilityZone=""),e.ReadReplicaSourceDBInstanceIdentifier&&(h=this.dbinstances[e.ReadReplicaSourceDBInstanceIdentifier],h?r.ReadReplicaSourceDBInstanceIdentifier=u(h,"resource.DBInstanceIdentifier"):void 0),e.Endpoint&&(r.Endpoint.Port=e.Endpoint.Port),e.OptionGroupMemberships[0]&&(s=this.ogs[e.OptionGroupMemberships[0].OptionGroupName],s?r.OptionGroupMembership.OptionGroupName=u(s,"resource.OptionGroupName"):(r.OptionGroupMembership.OptionGroupName=e.OptionGroupMemberships[0].OptionGroupName,e.OptionGroupMemberships[0].OptionGroupName.indexOf("default:")!==0&&void 0)),e.DBParameterGroups[0]&&(r.DBParameterGroups.DBParameterGroupName=e.DBParameterGroups[0].DBParameterGroupName),r.DBSubnetGroup.DBSubnetGroupName=u(a,"resource.DBSubnetGroupName"),E=e.VpcSecurityGroups;for(m=0,b=E.length;m<b;m++)f=E[m],c=this.sgs[f.VpcSecurityGroupId],c?r.VpcSecurityGroupIds.push(u(c,"resource.GroupId")):void 0;o=this.getOriginalComp(e.id,"DBINSTANCE"),o?(t=o.name,r.CreatedBy=o.resource.CreatedBy,e.Endpoint||(r.Endpoint.Port=o.resource.Endpoint.Port),o.resource.PreferredBackupWindow||(r.PreferredBackupWindow=o.resource.PreferredBackupWindow),o.resource.PreferredMaintenanceWindow||(r.PreferredMaintenanceWindow=o.resource.PreferredMaintenanceWindow),r.MasterUserPassword=o.resource.MasterUserPassword,r.DBSnapshotIdentifier=o.resource.DBSnapshotIdentifier):(t=e.Name||e.DBInstanceIdentifier,r.CreatedBy="user"),n=this.add("DBINSTANCE",r,l(e)||t),this.addLayout(n,!1,p),this.dbinstances[e.id]=n}}],p=function(e){var t,n,i,o,u,a,f,l,c,h,p;o=new s,h=e.originAppJSON.component,f=e.component,u=function(e){var t,n,i,s,o,a,f,l;f=e.type;if(f===r.RESTYPE.INSTANCE)return e.serverGroupUid;if(f===r.RESTYPE.ENI){o=e.resource.Attachment.InstanceId;if(o){a=MC.extractID(o),s=h[a];if(s)return s.serverGroupUid}else{l=e.serverGroupUid;if(l!==e.uid){t=h[l];if(t)return u(t)}}}if(f===r.RESTYPE.VOL){o=e.resource.AttachmentSet.InstanceId;if(o){a=MC.extractID(o),s=h[a];if(s)return s.serverGroupUid}}if(f===r.RESTYPE.EIP){n=e.resource.NetworkInterfaceId;if(n){i=MC.extractID(n),t=h[i];if(t)return u(t)}}return""},p={},_.each(h,function(e){if(e.number&&e.number>1)return p[e.uid]=e}),l={},_.each(f,function(e){return p[e.uid]&&(l[e.uid]=e),null}),i=o.compare(p,l),i&&_.each(i,function(e,t){var n,r;n=l[t];if(n){r=u(n);if(r)return _.each(l,function(e){if(u(e)===r){e.serverGroupName&&(e.serverGroupName=e.name),e.number&&(e.number=1),e.index&&(e.index=0);if(e.serverGroupUid)return e.serverGroupUid=e.uid}})}}),_.each(e.elbs,function(e){var t,n,r,i,s;r=_.map(e.resource.Instances,function(e){return MC.extractID(e.InstanceId)}),i=h[e.uid];if(i){s=_.map(i.resource.Instances,function(e){return MC.extractID(e.InstanceId)}),t=o.compare(r,s);if(t)return n=[],_.each(t,function(e){return e.__old__&&n.push(e.__old__),e.__new__&&n.push(e.__new__),null}),_.each(n,function(e){var t,n;t=l[e];if(t)return n=t.serverGroupUid,_.each(l,function(e,t){var r;r=u(e);if(r===n){e.serverGroupName&&(e.serverGroupName=e.name),e.number&&(e.number=1),e.index&&(e.index=0);if(e.serverGroupUid)return e.serverGroupUid=e.uid}})})}}),a={},c={},_.each(f,function(e){var t;if((t=e.type)===r.RESTYPE.ENI||t===r.RESTYPE.EIP||t===r.RESTYPE.INSTANCE||t===r.RESTYPE.VOL)if(!h[e.uid])return a[e.uid]=e}),_.each(h,function(e){var t;if((t=e.type)===r.RESTYPE.ENI||t===r.RESTYPE.EIP||t===r.RESTYPE.INSTANCE||t===r.RESTYPE.VOL)f[e.uid]||(c[e.uid]=e);return null}),t=o.compare(a,c),n=[];if(t)return _.each(t,function(e,t){var n,r;return n=f[t]||h[t],r=u(n),_.each(f,function(e,t){var n;n=u(e);if(n===r){e.serverGroupName&&(e.serverGroupName=e.name),e.number&&(e.number=1),e.index&&(e.index=0);if(e.serverGroupUid)return e.serverGroupUid=e.uid}})})},h=function(e,t,n){var r,i,s,o,u;void 0,r=new a(e,t,n);for(o=0,u=f.length;o<u;o++)s=f[o],s.call(r);if(r.originAppJSON)try{p(r)}catch(l){i=l,void 0}return r},d=function(e,n){var i,s,o,u,a,f,l,c,h,p,d,v,m,g;i=r.RESTYPE,a={filter:{"vpc-id":n}},s={"AWS.EC2.SecurityGroup":a,"AWS.VPC.NetworkAcl":a,"AWS.VPC.NetworkInterface":a},c={},m=t(i.SUBNET,e).where({vpcId:n});for(h=0,d=m.length;h<d;h++)l=m[h],c[l.id]=!0;u=[],f=[],g=t(i.ASG,e).models;for(p=0,v=g.length;p<v;p++)o=g[p],c[o.get("VPCZoneIdentifier")]&&(u.push(o.get("AutoScalingGroupName")),f.push(o.get("LaunchConfigurationName")));return u.length&&(s[i.LC]={id:_.uniq(f)},s[i.NC]={id:u},s[i.SP]={filter:{AutoScalingGroupName:u}}),s},t.getAllResourcesForVpc=h})}).call(this);