(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{QYEZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=c("PageDescription"),p=c("InlineNotification"),b={_frontmatter:o},m=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(m,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"The DataPower Operator supports automatically pulling IBM DataPower images from the IBM Entitled Registry using your entitlement key.")),Object(n.b)("h2",null,"Image selection"),Object(n.b)("p",null,"When configuring the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource, there are two properties which will determine which image is pulled, and from what container registry:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#version"}),"version")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#license"}),"license.use"))),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"version")," property will decide which base firmware version should be used, while the ",Object(n.b)("inlineCode",{parentName:"p"},"license.use")," will determine which edition to use."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"th"},"license.use")),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Registry"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Image location"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"production")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"IBM Entitled Registry"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cp.icr.io/cp/datapower/datapower-prod"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"nonproduction")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"IBM Entitled Registry"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cp.icr.io/cp/datapower/datapower-nonprod"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"developers")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"IBM Entitled Registry"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cp.icr.io/cp/datapower/datapower-deved"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"developers-limited")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Dockerhub"),Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"docker.io/ibmcom/datapower"))))),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"When deploying within IBM Cloud Pak for Integration, the image location is always ",Object(n.b)("inlineCode",{parentName:"p"},"cp.icr.io/cp/datapower/datapower-cp4i"),"."),Object(n.b)("p",null,"For more details regarding this image, see ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS9H2Y_10.0/com.ibm.dp.doc/icp4i.html"}),"Cloud Pak for Integration: Gateway runtime"),".")),Object(n.b)("h2",null,"Image Pull Secret"),Object(n.b)("p",null,"If the IBM DataPower image is to be pulled from the IBM Entitled Registry, an Entitlement Key must be used as an Image Pull Secret. You can obtain an Entitlement Key from ",Object(n.b)("a",i({parentName:"p"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"My IBM"),"."),Object(n.b)("h2",null,"Default Image Pull Secret"),Object(n.b)("p",null,"If you do not specify an Image Pull Secret in your DataPowerService Custom Resource ",Object(n.b)("inlineCode",{parentName:"p"},"spec"),", then the operator will look for a Secret named ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," in the same namespace as the DataPowerService, and it will use this Secret to pull the IBM DataPower images. This is typically the method used to provide the Entitlement Key."),Object(n.b)("p",null,"If you want to use your own Entitlement Key, then you can create it."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you create it with the name ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," in the same namespace as the DataPowerService, then you do not need to explicitly name it as the Image Pull Secret in your DataPowerService Custom Resource ",Object(n.b)("inlineCode",{parentName:"li"},"spec"),", because the operator will find it automatically."),Object(n.b)("li",{parentName:"ul"},"If you create it with a different name, then you must explicitly name it as the Image Pull Secret in your ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," Custom Resource spec, see ",Object(n.b)("a",i({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta3#imagepullsecrets"}),"imagePullSecrets"),".")),Object(n.b)("h2",null,"Creating the Secret"),Object(n.b)("p",null,"If you want to create your own Entitlement Key as a Secret, you must create it in the same namespace as the DataPowerService."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"We recommend that you use the name ibm-entitlement-key"),Object(n.b)("li",{parentName:"ol"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"cp")," as the username"),Object(n.b)("li",{parentName:"ol"},"Use your Entitlement Key as the password"),Object(n.b)("li",{parentName:"ol"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"cp.icr.io")," as the Docker server")),Object(n.b)("p",null,"For example:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"oc create secret docker-registry \\\n  ibm-entitlement-key \\\n  --docker-username=cp \\\n  --docker-password=<entitlement-key> \\\n  --docker-server=cp.icr.io\n")),Object(n.b)("p",null,"For more information on creating Secrets using the Kubernetes command line, please see their ",Object(n.b)("a",i({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-secret-by-providing-credentials-on-the-command-line"}),"documentation"),"."),Object(n.b)("h3",null,"Using a custom Service Account"),Object(n.b)("p",null,"If you choose to provide your own custom Service Account via the ",Object(n.b)("a",i({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#serviceaccountname"}),"serviceAccountName")," property on the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," spec, then the DataPower Operator ",Object(n.b)("strong",{parentName:"p"},"will not")," automatically attempt to use a ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," Secret. Instead, you should either add this Image Pull Secret to your Service Account, or provide it manually via the ",Object(n.b)("a",i({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#imagepullsecrets"}),"imagePullSecrets")," property."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-features-entitled-registry-mdx-1251e8682ca6317972b1.js.map