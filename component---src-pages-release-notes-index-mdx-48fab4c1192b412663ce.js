(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{YkMA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},b=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"1.1.1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fixes an issue relating to metering and licensing of DataPower Virtual Edition for Nonproduction, when deployed in IBM Cloud Pak for Integration."),Object(a.b)("li",{parentName:"ul"},"Fixes an issue relating to the ",Object(a.b)("inlineCode",{parentName:"li"},"storage.size")," property rendering in OCP Console UI, as well as IBM Cloud Pak for Integration Platform Navigator."),Object(a.b)("li",{parentName:"ul"},"Fixes an issue relating to the name generation and reconciliation of the ",Object(a.b)("inlineCode",{parentName:"li"},"username-commands")," ConfigMap created by the operator."),Object(a.b)("li",{parentName:"ul"},"Adds documentation ",Object(a.b)("inlineCode",{parentName:"li"},"links")," to the ",Object(a.b)("inlineCode",{parentName:"li"},"ClusterServiceVersion")," for both CRDs, as well as this documentation website."),Object(a.b)("li",{parentName:"ul"},"Conversion webhook management routine will now adopt orphaned webhook deployments if found during reconciliation.")),Object(a.b)("h2",null,"1.1.0"),Object(a.b)("h3",null,"v1beta2 APIs"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"1.1.0")," introduces a new ",Object(a.b)("inlineCode",{parentName:"p"},"v1beta2")," API version, consisting of an ",Object(a.b)("strong",{parentName:"p"},"updated")," ",Object(a.b)("a",o({parentName:"p"},{href:"/apis/datapowerservice/v1beta2"}),Object(a.b)("inlineCode",{parentName:"a"},"DataPowerService"))," CustomResourceDefition (CRD), and a ",Object(a.b)("strong",{parentName:"p"},"new")," ",Object(a.b)("a",o({parentName:"p"},{href:"/apis/datapowermonitor/v1beta2"}),Object(a.b)("inlineCode",{parentName:"a"},"DataPowerMonitor"))," CRD."),Object(a.b)("p",null,"For more details on the (automatic) API migration process, see ",Object(a.b)("a",o({parentName:"p"},{href:"/features/api-migration"}),"API Migration"),"."),Object(a.b)("p",null,"With the new ",Object(a.b)("inlineCode",{parentName:"p"},"v1beta2")," API, the following changes have been made:"),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"DataPowerService")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Removed ",Object(a.b)("inlineCode",{parentName:"li"},"dataPowerMonitor")," (replaced by ",Object(a.b)("inlineCode",{parentName:"li"},"DataPowerMonitor")," CRD)."),Object(a.b)("li",{parentName:"ul"},"Added support for custom ",Object(a.b)("a",o({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#tolerations"}),Object(a.b)("inlineCode",{parentName:"a"},"tolerations")),"."),Object(a.b)("li",{parentName:"ul"},"Added support for custom ",Object(a.b)("a",o({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#nodeselector"}),Object(a.b)("inlineCode",{parentName:"a"},"nodeSelector")),"."),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"mgmtPorts")," to Custom Resource ",Object(a.b)("inlineCode",{parentName:"li"},"Status"),"."),Object(a.b)("li",{parentName:"ul"},"Changed the ",Object(a.b)("inlineCode",{parentName:"li"},"version")," ",Object(a.b)("a",o({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#available-channels"}),"channel structure"),".")),Object(a.b)("h4",null,Object(a.b)("inlineCode",{parentName:"h4"},"DataPowerMonitor")),Object(a.b)("p",null,"See the API spec ",Object(a.b)("a",o({parentName:"p"},{href:"/apis/datapowermonitor/v1beta2"}),"here"),", and more information on the functionality ",Object(a.b)("a",o({parentName:"p"},{href:"/features/monitor"}),"here"),"."),Object(a.b)("h2",null,"1.0.2"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(a.b)("inlineCode",{parentName:"li"},"10.0.0.1"),"."),Object(a.b)("li",{parentName:"ul"},"Add support for DataPower Monitor version ",Object(a.b)("inlineCode",{parentName:"li"},"1.0.1"),"."),Object(a.b)("li",{parentName:"ul"},"Add DataPower init script to clean ",Object(a.b)("inlineCode",{parentName:"li"},"temporary:///config")," on boot.")),Object(a.b)("h2",null,"1.0.1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Several changes and enhancements to support deployment via IBM Cloud Pak for Integration, including:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"A minimal ",Object(a.b)("inlineCode",{parentName:"li"},"ServiceAccount")," is generated for use by the StatefulSet is none is provided in the ",Object(a.b)("inlineCode",{parentName:"li"},"DataPowerService")," Custom Resource spec."),Object(a.b)("li",{parentName:"ul"},"Support for automatically using an ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," Secret to pull images from the IBM Container Registry."),Object(a.b)("li",{parentName:"ul"},"Labels and Annotations for Licensing and Metering of workloads, both standalone and within IBM Cloud Pak for Integration."),Object(a.b)("li",{parentName:"ul"},"Kibana dashboard support.")))),Object(a.b)("h2",null,"1.0.0"),Object(a.b)("p",null,"Initial release."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-index-mdx-48fab4c1192b412663ce.js.map