(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{kUcz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return O}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=i("PageDescription"),c=i("AnchorLinks"),b=i("AnchorLink"),s=i("InlineNotification"),h={_frontmatter:l},m=o.a;function O(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(m,r({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"The Operator Lifecycle Manager (OLM) provides a framework for installing, updating, and managing the lifecycle of operators and their services.")),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Prerequisites"),Object(n.b)(b,{mdxType:"AnchorLink"},"Installing the CatalogSource"),Object(n.b)(b,{mdxType:"AnchorLink"},"Installing the DataPower Operator"),Object(n.b)(b,{mdxType:"AnchorLink"},"References")),Object(n.b)("h2",null,"Prerequisites"),Object(n.b)("p",null,"The DataPower Operator currently supports installation via OLM in OCP clusters running version 4.6 or higher."),Object(n.b)("h2",null,"Installing the CatalogSource"),Object(n.b)("p",null,"To enable the installation of the DataPower Operator, a ",Object(n.b)("inlineCode",{parentName:"p"},"CatalogSource")," must be created in the ",Object(n.b)("inlineCode",{parentName:"p"},"openshift-marketplace"),"."),Object(n.b)("p",null,"The below YAML snippet can be used to create the ",Object(n.b)("inlineCode",{parentName:"p"},"CatalogSource")," resource, which references the ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcom/datapower-operator-catalog:latest")," image from ",Object(n.b)("a",r({parentName:"p"},{href:"https://hub.docker.com/r/ibmcom/datapower-operator-catalog"}),"Dockerhub"),". The use of the ",Object(n.b)("inlineCode",{parentName:"p"},"latest")," tag here will allow OLM to poll Dockerhub and pull new catalog images when they become available, enabling over-the-air updates."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: operators.coreos.com/v1alpha1\nkind: CatalogSource\nmetadata:\n  name: ibm-datapower-operator-catalog\n  namespace: openshift-marketplace\nspec:\n  displayName: IBM DataPower Operator\n  publisher: IBM\n  sourceType: grpc\n  image: ibmcom/datapower-operator-catalog:latest\n  updateStrategy:\n    registryPoll:\n      interval: 45m\n")),Object(n.b)("p",null,"You can create this resource manually either via the OpenShift Console UI, or by using the ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," CLI."),Object(n.b)("h3",null,"Using the OpenShift Console"),Object(n.b)("p",null,"To creating this resource using the OpenShift Console, use the following steps."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Navigate to your OpenShift Console UI."),Object(n.b)("li",{parentName:"ol"},"In the top-right of the UI, on the header bar, click the Import button ",Object(n.b)("inlineCode",{parentName:"li"},"(+)")," to import YAML."),Object(n.b)("li",{parentName:"ol"},"Copy and paste the above YAML snippet into the editor."),Object(n.b)("li",{parentName:"ol"},"Click the ",Object(n.b)("strong",{parentName:"li"},"Create")," button to create the resource.")),Object(n.b)("h3",null,"Using the ",Object(n.b)("inlineCode",{parentName:"h3"},"oc")," CLI"),Object(n.b)("p",null,"To create this resource using the ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," CLI, use the following steps."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a YAML file containing the above YAML snippet.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use the ",Object(n.b)("inlineCode",{parentName:"p"},"oc apply")," command to apply the YAML resource."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"oc apply -f ibm-datapower-operator-catalog.yaml\n")))),Object(n.b)("h3",null,"Validating the CatalogSource is installed"),Object(n.b)("p",null,"To validate that the ",Object(n.b)("inlineCode",{parentName:"p"},"CatalogSource")," resource was installed correctly, use the following steps."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Navigate to the OpenShift Console UI."),Object(n.b)("li",{parentName:"ol"},"On the left panel, expand the ",Object(n.b)("strong",{parentName:"li"},"Operators")," section."),Object(n.b)("li",{parentName:"ol"},"Select ",Object(n.b)("strong",{parentName:"li"},"OperatorHub"),"."),Object(n.b)("li",{parentName:"ol"},"At the top of the OperatorHub section, enter ",Object(n.b)("inlineCode",{parentName:"li"},"DataPower")," into the Filter search box."),Object(n.b)("li",{parentName:"ol"},"A tile should be shown titled ",Object(n.b)("strong",{parentName:"li"},"IBM DataPower Gateway"),".")),Object(n.b)("h2",null,"Installing the DataPower Operator"),Object(n.b)("p",null,"To install an instance of the DataPower Operator, use the following steps."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use the steps above to locate the ",Object(n.b)("strong",{parentName:"p"},"IBM DataPower Gateway")," tile in the OperatorHub UI.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the ",Object(n.b)("strong",{parentName:"p"},"IBM DataPower Gateway")," tile. A panel to the right should appear.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the ",Object(n.b)("strong",{parentName:"p"},"Install")," button on the right panel.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Under ",Object(n.b)("strong",{parentName:"p"},"Installation Mode")," select your desired installation mode."),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",{parentName:"li"},"For most use cases, installing in a specific namespace is the preferred mode. If using a specific namespace as the install mode, select the ",Object(n.b)("strong",{parentName:"p"},"Installed Namespace")," using the dropdown."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the desired ",Object(n.b)("strong",{parentName:"p"},"Update Channel"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the desired ",Object(n.b)("strong",{parentName:"p"},"Approval Strategy"),"."),Object(n.b)(s,{mdxType:"InlineNotification"},Object(n.b)("p",{parentName:"li"},"The Approval Strategy is what determines if the DataPower Operator will automatically update when new releases become available within the selected channel. If ",Object(n.b)("inlineCode",{parentName:"p"},"Automatic")," is selected, over-the-air updates will occur automatically as they become available. If ",Object(n.b)("inlineCode",{parentName:"p"},"Manual")," is selected, an administrator would need to approve each update as it becomes available through OLM."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the ",Object(n.b)("strong",{parentName:"p"},"Subscribe")," button to install the DataPower Operator."))),Object(n.b)("h2",null,"References"),Object(n.b)("p",null,"The below references might be helpful if you wish to learn more about OLM."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.6/operators/understanding/olm/olm-understanding-olm.html"}),"Understanding the Operator Lifecycle Manager (OLM)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.6/operators/admin/olm-adding-operators-to-cluster.html"}),"Adding Operators to a cluster"))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-install-olm-mdx-58df27b8e73ca95c64c7.js.map