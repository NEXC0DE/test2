(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qeHG:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),a=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var r={},b=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},l=b("PageDescription"),c=b("AnchorLinks"),p=b("AnchorLink"),s={_frontmatter:r},m=a.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(m,o({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"As new CustomResourceDefinition API versions are released, the API migrations which occur on those boundaries will be documented here.")),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Background"),Object(i.b)(p,{mdxType:"AnchorLink"},"v1beta2 migration"),Object(i.b)(p,{mdxType:"AnchorLink"},"v1beta3 migration")),Object(i.b)("h2",null,"Background"),Object(i.b)("p",null,"As we iterate on the DataPower Operator, add new functionality, etc. our APIs will invetibly change over time. Our APIs are described by our CustomResourceDefinitions (CRDs), which have an ",Object(i.b)("inlineCode",{parentName:"p"},"apiVersion")," associated with them. Each version of a given CRD can have its own schema, and thus the functionality of a given CRD version can change over time."),Object(i.b)("p",null,"For more information on the conversion webhook that makes these migrations possible, see our ",Object(i.b)("a",o({parentName:"p"},{href:"/features/webhooks#conversion-webhook"}),"Conversion webhook")," documentation."),Object(i.b)("h2",null,"v1beta2 migration"),Object(i.b)("p",null,"The release of ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0")," introduces a ",Object(i.b)("inlineCode",{parentName:"p"},"v1beta2")," API and a new ",Object(i.b)("inlineCode",{parentName:"p"},"DataPowerMonitor")," CustomResourceDefinition. When upgrading from ",Object(i.b)("inlineCode",{parentName:"p"},"1.0.x")," to ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.x")," the following migrations will occur:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any existing ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta1")," ",Object(i.b)("inlineCode",{parentName:"li"},"DataPowerService")," Custom Resources (CRs) will be converted to ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta2")," CRs."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"dataPowerMonitor")," spec from the ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta1")," CR will be translated to an equivalent ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta2")," ",Object(i.b)("inlineCode",{parentName:"li"},"DataPowerMonitor")," CR."),Object(i.b)("li",{parentName:"ul"},"If a ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta1")," ",Object(i.b)("inlineCode",{parentName:"li"},"DataPowerService")," specified a ",Object(i.b)("strong",{parentName:"li"},"channel")," in ",Object(i.b)("inlineCode",{parentName:"li"},"spec.version")," it will be converted according to the following rules:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spec.version: 10.0.0")," becomes ",Object(i.b)("inlineCode",{parentName:"li"},"spec.version: 10.0-cd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spec.version: 10.0.1")," becomes ",Object(i.b)("inlineCode",{parentName:"li"},"spec.version: 10.0-lts"))))),Object(i.b)("h2",null,"v1beta3 migration"),Object(i.b)("p",null,"The release of ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.0")," introduces a ",Object(i.b)("inlineCode",{parentName:"p"},"v1beta3")," API for the ",Object(i.b)("inlineCode",{parentName:"p"},"DataPowerService")," CustomResourceDefinition. When upgrading from ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.x")," to ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.x")," the following migrations will occur:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any existing ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta2")," ",Object(i.b)("inlineCode",{parentName:"li"},"DataPowerService")," instances will be converted to ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta3"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spec.license.license")," is a new ",Object(i.b)("strong",{parentName:"li"},"required")," field in ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta3")," of the ",Object(i.b)("inlineCode",{parentName:"li"},"DataPowerService"),", and as such will be automatically populated during migration."),Object(i.b)("li",{parentName:"ul"},"If upgrading from ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.x")," and ",Object(i.b)("inlineCode",{parentName:"li"},"spec.version")," is set to ",Object(i.b)("inlineCode",{parentName:"li"},"10.0-eus"),", this will be migrated to ",Object(i.b)("inlineCode",{parentName:"li"},"10.0-lts"),". Note that this will incur no change to the DataPower operand runtime.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-features-api-migration-mdx-b9746bbfe0d0bd6c72f0.js.map