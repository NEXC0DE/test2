(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{YkMA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},b=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"1.1.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to metering and licensing of DataPower Virtual Edition for Nonproduction, when deployed in IBM Cloud Pak for Integration."),Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to the ",Object(n.b)("inlineCode",{parentName:"li"},"storage.size")," property rendering in OCP Console UI, as well as IBM Cloud Pak for Integration Platform Navigator."),Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to the name generation and reconciliation of the ",Object(n.b)("inlineCode",{parentName:"li"},"username-commands")," ConfigMap created by the operator."),Object(n.b)("li",{parentName:"ul"},"Adds documentation ",Object(n.b)("inlineCode",{parentName:"li"},"links")," to the ",Object(n.b)("inlineCode",{parentName:"li"},"ClusterServiceVersion")," for both CRDs, as well as this documentation website."),Object(n.b)("li",{parentName:"ul"},"Conversion webhook management routine will now adopt orphaned webhook deployments if found during reconciliation.")),Object(n.b)("h2",null,"1.1.0"),Object(n.b)("h3",null,"v1beta2 APIs"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"1.1.0")," introduces a new ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2")," API version, consisting of an ",Object(n.b)("strong",{parentName:"p"},"updated")," ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2"}),Object(n.b)("inlineCode",{parentName:"a"},"DataPowerService"))," CustomResourceDefition (CRD), and a ",Object(n.b)("strong",{parentName:"p"},"new")," ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowermonitor/v1beta2"}),Object(n.b)("inlineCode",{parentName:"a"},"DataPowerMonitor"))," CRD."),Object(n.b)("p",null,"For more details on the (automatic) API migration process, see ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/features/api-migration"}),"API Migration"),"."),Object(n.b)("p",null,"With the new ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2")," API, the following changes have been made:"),Object(n.b)("h4",null,Object(n.b)("inlineCode",{parentName:"h4"},"DataPowerService")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed ",Object(n.b)("inlineCode",{parentName:"li"},"dataPowerMonitor")," (replaced by ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerMonitor")," CRD)."),Object(n.b)("li",{parentName:"ul"},"Added support for custom ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#tolerations"}),Object(n.b)("inlineCode",{parentName:"a"},"tolerations")),"."),Object(n.b)("li",{parentName:"ul"},"Added support for custom ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#nodeselector"}),Object(n.b)("inlineCode",{parentName:"a"},"nodeSelector")),"."),Object(n.b)("li",{parentName:"ul"},"Added ",Object(n.b)("inlineCode",{parentName:"li"},"mgmtPorts")," to Custom Resource ",Object(n.b)("inlineCode",{parentName:"li"},"Status"),"."),Object(n.b)("li",{parentName:"ul"},"Changed the ",Object(n.b)("inlineCode",{parentName:"li"},"version")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#available-channels"}),"channel structure"),".")),Object(n.b)("h4",null,Object(n.b)("inlineCode",{parentName:"h4"},"DataPowerMonitor")),Object(n.b)("p",null,"See the API spec ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowermonitor/v1beta2"}),"here"),", and more information on the functionality ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/features/monitor"}),"here"),"."),Object(n.b)("h2",null,"1.0.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.0.1"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for DataPower Monitor version ",Object(n.b)("inlineCode",{parentName:"li"},"1.0.1"),"."),Object(n.b)("li",{parentName:"ul"},"Add DataPower init script to clean ",Object(n.b)("inlineCode",{parentName:"li"},"temporary:///config")," on boot.")),Object(n.b)("h2",null,"1.0.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Several changes and enhancements to support deployment via IBM Cloud Pak for Integration, including:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A minimal ",Object(n.b)("inlineCode",{parentName:"li"},"ServiceAccount")," is generated for use by the StatefulSet is none is provided in the ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," Custom Resource spec."),Object(n.b)("li",{parentName:"ul"},"Support for automatically using an ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," Secret to pull images from the IBM Container Registry."),Object(n.b)("li",{parentName:"ul"},"Labels and Annotations for Licensing and Metering of workloads, both standalone and within IBM Cloud Pak for Integration."),Object(n.b)("li",{parentName:"ul"},"Kibana dashboard support.")))),Object(n.b)("h2",null,"1.0.0"),Object(n.b)("p",null,"Initial release."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-index-mdx-a86670edbae7d597ecbd.js.map