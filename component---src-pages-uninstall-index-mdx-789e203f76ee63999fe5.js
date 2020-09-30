(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{tfSj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),r=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=l("PageDescription"),s=l("AnchorLinks"),b=l("AnchorLink"),p={_frontmatter:i},u=r.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(u,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"A guide to uninstalling the DataPower Operator with troubleshooting tips and workarounds.")),Object(o.b)(s,{mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"Order of uninstallation"),Object(o.b)(b,{mdxType:"AnchorLink"},"Uninstalling with OLM"),Object(o.b)(b,{mdxType:"AnchorLink"},"Uninstalling with CASE"),Object(o.b)(b,{mdxType:"AnchorLink"},"Known issues")),Object(o.b)("h2",null,"Order of uninstallation"),Object(o.b)("p",null,"Resources ",Object(o.b)("strong",{parentName:"p"},"must")," be removed in the following order to avoid deadlocks:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Remove all ",Object(o.b)("inlineCode",{parentName:"li"},"DataPowerService")," and ",Object(o.b)("inlineCode",{parentName:"li"},"DataPowerMonitor")," Custom Resources from namespace."),Object(o.b)("li",{parentName:"ol"},"Uninstall Operator with either OLM or CASE."),Object(o.b)("li",{parentName:"ol"},"If completely removing from cluster, remove CRDs.")),Object(o.b)("h2",null,"Uninstalling with OLM"),Object(o.b)("h3",null,"In the GUI"),Object(o.b)("p",null,"In the OCP GUI, navigate to Operators->Installed Operators on the left side pane. In the ",Object(o.b)("inlineCode",{parentName:"p"},"Project")," dropdown box, select the namespace from which to uninstall. Find the specific DataPower Operator Subscription you wish to uninstall and click the options menu on the right side of the row. Select “Uninstall Operator”."),Object(o.b)("h3",null,"In the CLI"),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," CLI tool, delete the DataPower Operator Subscription by doing"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"oc -n mynamespace delete subscription datapower-operator\n")),Object(o.b)("h2",null,"Uninstalling with CASE"),Object(o.b)("p",null,"For uninstalling via CASE, refer to the relevant uninstall command in the ",Object(o.b)("a",a({parentName:"p"},{href:"/datapower-operator-doc/install/case"}),"CASE document"),"."),Object(o.b)("h2",null,"Removing CRDs"),Object(o.b)("p",null,"To remove the DataPower CRDs from the cluster, run"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"kubectl delete crds datapowerservices.datapower.ibm.com\nkubectl delete crds datapowermonitors.datapower.ibm.com \n")),Object(o.b)("h2",null,"Known issues"),Object(o.b)("h3",null,"Custom Resource deletion blocked by conversion"),Object(o.b)("p",null,"As of DataPower Operator version 1.1.0, a conversion webhook is deployed by the DataPower Operator. If the conversion webhook was managed by the DataPower Operator being uninstalled it will get cleaned up due to having Owner References set to the managing DataPower Operator. If you are uninstalling the last DataPower Operator in the cluster, no new conversion webhook will get deployed. Once in this state, it becomes impossible to delete or create new ",Object(o.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resources because the Kubernetes API Server is attempting to connect to a no-longer-alive conversion webhook."),Object(o.b)("p",null,"To clear out the conversion definition, run"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'kubectl patch crds datapowerservices.datapower.ibm.com -p \'{"spec": {"conversion": null}}\'\n')),Object(o.b)("p",null,"After the patch has been processed, the custom resources can be modified and deleted."),Object(o.b)("p",null,"To avoid getting into this situation in the future, remove all ",Object(o.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resources before uninstalling the DataPower Operator."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-uninstall-index-mdx-789e203f76ee63999fe5.js.map