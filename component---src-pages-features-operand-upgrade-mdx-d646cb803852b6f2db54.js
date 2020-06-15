(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+vKq":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return h}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=p("PageDescription"),s=p("AnchorLinks"),l=p("AnchorLink"),b={_frontmatter:o},d=i.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(d,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"The DataPower Operator supports both manual and automatic upgrades of the IBM DataPower Pods it manages via the StatefulSet.")),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Upgrade Strategy"),Object(n.b)(l,{mdxType:"AnchorLink"},"Specifying a Version"),Object(n.b)(l,{mdxType:"AnchorLink"},"Manual Upgrades"),Object(n.b)(l,{mdxType:"AnchorLink"},"Automatic Upgrades"),Object(n.b)(l,{mdxType:"AnchorLink"},"Checking the Reconciled Version")),Object(n.b)("h2",null,"Upgrade Strategy"),Object(n.b)("p",null,"The DataPower pods are managed by a StatefulSet, which is managed by the DataPower Operator. When any change is made to the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource (CR), the StatefulSet performs a rolling update to serialize the change across the pods. This same strategy is used to perform an upgrade, as the specified version of the DataPower operand is simply a property in the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," spec."),Object(n.b)("h2",null,"Specifying a Version"),Object(n.b)("p",null,"One of the required fields of the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," spec is ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowerservice/spec#version"}),"version"),". This property will determine which version the operator reconciles, unless a custom image is provided via the ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowerservice/spec#image"}),"image")," property."),Object(n.b)("p",null,"If a custom ",Object(n.b)("inlineCode",{parentName:"p"},"image")," is provided, the exact ",Object(n.b)("inlineCode",{parentName:"p"},"version")," must also be specified to inform the operator of what base image version is being used."),Object(n.b)("h3",null,"Manual Upgrades"),Object(n.b)("p",null,"To manually schedule the upgrade, an existing ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," CR can be modified to specify a new ",Object(n.b)("inlineCode",{parentName:"p"},"version"),"."),Object(n.b)("p",null,"For example, let’s assume ",Object(n.b)("inlineCode",{parentName:"p"},"10.0.0.0")," was the currently specified ",Object(n.b)("inlineCode",{parentName:"p"},"version"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"10.0.0.1")," was available. To apply the CR change:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'oc patch dp <name> -p \'{"spec":{"version":"10.0.0.1"}}\' --type=merge\n')),Object(n.b)("p",null,"This change could also be applied via ",Object(n.b)("inlineCode",{parentName:"p"},"oc edit")," or by ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply")," with the appropriate YAML."),Object(n.b)("h3",null,"Automatic Upgrades"),Object(n.b)("p",null,"The DataPower Operator supports automatically upgrading the DataPower pods when new versions are available. To subscribe to an upgrade channel, specify an available channel name as the ",Object(n.b)("inlineCode",{parentName:"p"},"version")," in the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," CR spec. For example:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: datapower.ibm.com/v1beta1\nkind: DataPowerService\nmetadata:\n  name: example\nspec:\n  version: 10.0.0\n")),Object(n.b)("p",null,"In the above example, the DataPower Operator will automatically apply the latest version when the CR is created. When a new version becomes available within that channel (i.e. ",Object(n.b)("inlineCode",{parentName:"p"},"10.0.0.x"),"), the operator will automatically reconcile the new version, using the same Upgrade Strategy as above (rolling update)."),Object(n.b)("h2",null,"Checking the Reconciled Version"),Object(n.b)("p",null,"The reconciled version of the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," will always represent the current version being used by the StatefulSet. If a channel is supplied in the ",Object(n.b)("inlineCode",{parentName:"p"},"version")," field, the reconciled version will reflect the chosen latest version within that channel. If a custom ",Object(n.b)("inlineCode",{parentName:"p"},"image")," is provided, the reconciled version will reflect the version specified in the ",Object(n.b)("inlineCode",{parentName:"p"},"version")," property, which is expected to match that of the ",Object(n.b)("inlineCode",{parentName:"p"},"image"),"."),Object(n.b)("p",null,"The reconciled version is available in the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," status at ",Object(n.b)("inlineCode",{parentName:"p"},"status.versions.reconciled"),". More on this topic ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowerservice/status#versions"}),"here"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-features-operand-upgrade-mdx-d646cb803852b6f2db54.js.map