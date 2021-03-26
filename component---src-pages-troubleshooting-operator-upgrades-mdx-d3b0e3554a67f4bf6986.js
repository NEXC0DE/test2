(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{wKyo:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return d}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("q1tI");var n=o("7ljp"),a=o("013z");o("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=i("PageDescription"),c=i("InlineNotification"),b={_frontmatter:l},s=a.a;function d(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(n.b)(s,r({},b,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"If any known issues exist or migration paths are needed to upgrade from one version of the DataPower Operator to another, they will be documented here.")),Object(n.b)("h1",null,"1.2.0"),Object(n.b)("h2",null,"Pod Topology Spread Constraints"),Object(n.b)("h3",null,"Symptoms"),Object(n.b)("p",null,"DataPower Operator pods fail to schedule, stating that no nodes match pod topology spread constraints (missing required label)."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"0/15 nodes are available: 12 node(s) didn't match pod topology spread constraints (missing required label), 3 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate.\n")),Object(n.b)("h3",null,"Description"),Object(n.b)("p",null,"There was a ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/kubernetes/kubernetes/issues/95808"}),"Kubernetes bug")," that allowed for pods to schedule when ",Object(n.b)("inlineCode",{parentName:"p"},"topologyKey")," was not matched. Kubernetes recently fixed this bug in 1.20, and back-ported the fix to 1.18 and 1.19."),Object(n.b)("p",null,"Once this fix is installed to a Kubernetes cluster, the scheduler would no longer schedule DataPower Operator pods, due to the ",Object(n.b)("inlineCode",{parentName:"p"},"topologyKey")," in our pod spec not using a well-known “zone” label."),Object(n.b)("h3",null,"Solution"),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,"We have fixed this issue in DataPower Operator version ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.1"),", see ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/release-notes#1.2.1"}),"Release notes"),".")),Object(n.b)("p",null,"Performing a clean installation of DataPower Operator version ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.1")," or higher should succeed without the below workaround needed. However, if you previously tried to upgrade to ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.0")," and the upgrade is stuck in a pending state, the following workaround can be used to allow the ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.0")," install to complete."),Object(n.b)("p",null,"Manually add a ",Object(n.b)("inlineCode",{parentName:"p"},"zone")," label (with any value) to one of the worker nodes in the Kubernetes cluster. The DataPower Operator pods will then be scheduled to that worker node."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl label nodes <node-name> zone=<label-value>\n")),Object(n.b)("p",null,"Reference: ",Object(n.b)("a",r({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#step-one-attach-label-to-the-node"}),"Assigning Pods to Nodes")),Object(n.b)("p",null,"Optionally, once a successful upgrade to ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.1")," has been completed, the ",Object(n.b)("inlineCode",{parentName:"p"},"zone")," label can be removed from the node(s) in the cluster. This ",Object(n.b)("inlineCode",{parentName:"p"},"zone")," label is no longer used in ",Object(n.b)("inlineCode",{parentName:"p"},"1.2.1")," or higher."),Object(n.b)("h2",null,"Slow Kubernetes garbage collection can cause webhook service creation to fail"),Object(n.b)("h3",null,"Symptoms"),Object(n.b)("p",null,"An error may be seen that indicates a webhook ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," is not found:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'failed calling webhook "datapowerservices.defaulter.datapower.ibm.com": Post https://datapower-operator.default.svc:443/default-datapower-ibm-com-v1beta2-datapowerservice?timeout=2s: service "datapower-operator" not found\n')),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator")," pod logs, the following log message is seen indicating the ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," exists already:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'{"level":"info","ts":"2020-10-06T20:32:45.818Z","logger":"setup-webhook","msg":"webhook service found. skip create"}\n')),Object(n.b)("p",null,"However, checking for the ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," object (name ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator"),") in the namespace would show it does not exist:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ kubectl get svc datapower-operator\n")),Object(n.b)("h3",null,"Description"),Object(n.b)("p",null,"During the DataPower Operator boot the defaulting and validating webhooks are initialized. As part of this process, a ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," object is created if not found in the cluster. If the Kubernetes garbage collection is slow or delayed it is possible for the ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," object to have been marked for deletion, but still exist in the namespace for a span of time. If the new DataPower Operator pod attempts to initialize the new ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," resource during this time window, the operator will continue through the boot sequence without creating a new ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," instance."),Object(n.b)("p",null,"Once the Kubernetes garbage collection catches up, and the ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," is deleted, no ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," will remain to expose the webhooks and thus API errors will be seen when invoking the webhooks."),Object(n.b)("h3",null,"Solution"),Object(n.b)("p",null,"To resolve this issue, the DataPower Operator pod can be deleted manually. Once this is done, the Deployment’s ReplicaSet controller will spin up a new DataPower Operator pod, which will in turn create the webhook ",Object(n.b)("inlineCode",{parentName:"p"},"Service"),"."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Fetch the DataPower Operator pod, taking note of the name (will be the first column in the output)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"kubectl [-n namespace] get pod | grep datapower-operator\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Delete the DataPower Operator pod, where ",Object(n.b)("inlineCode",{parentName:"p"},"name")," is the name of the pod found in Step 5."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"kubectl [-n namespace] delete pod/name\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Validate a new pod is created in its place."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"kubectl [-n namespace] get pod | grep datapower-operator\n")))),Object(n.b)("h1",null,"1.1.0"),Object(n.b)("h2",null,"Operator lock not released after Leader Pod removed"),Object(n.b)("h3",null,"Symptoms"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Immediately following an upgrade from 1.0.X to 1.1.X, you may see the following error when attempting to interact with a DataPowerService CR:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'Error from server: conversion webhook for datapower.ibm.com/v1beta1, Kind=DataPowerService failed: Post https://changeme.default.svc:443/?timeout=30s: service "changeme" not found\n'))),Object(n.b)("li",{parentName:"ul"},"Failure to reconcile changes made to a DataPowerService CR after a failover event caused the previous DataPower Operator Leader Pod to be rescheduled.")),Object(n.b)("h3",null,"Description"),Object(n.b)("p",null,"Occasionally, when the DataPower Operator Leader Pod is removed, the new DataPower Operator Pod will show as being Ready but isn’t doing anything. In the logs you might see"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'{"level":"info","ts":"2020-09-08T19:29:53.432Z","logger":"leader","msg":"Not the leader. Waiting."}\n{"level":"info","ts":"2020-09-08T19:29:57.971Z","logger":"leader","msg":"Leader pod has been deleted, waiting for garbage collection do remove the lock."}\n')),Object(n.b)("p",null,"followed by additional waiting. In this case, Kubernetes’ garbage collection failed to clean up the ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator-lock")," after the old Leader Pod was removed. This stops the new DataPower Operator Pod from completing initialization tasks such as creating the conversion webhook."),Object(n.b)("h3",null,"Solution"),Object(n.b)("p",null,"To resolve this issue, you must manually remove the lock resource. This can be done with"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl delete cm datapower-operator-lock\n")),Object(n.b)("p",null,"Once the lock is removed, the new DataPower Operator pod will begin its initialization."),Object(n.b)("h1",null,"1.0.1"),Object(n.b)("h2",null,"Invalid value for ",Object(n.b)("inlineCode",{parentName:"h2"},"spec.selector")),Object(n.b)("p",null,"When attempting to ugprade from ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.0")," to ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.1")," through the Operator Lifecycle Manager, an error will likely be seen that the ",Object(n.b)("inlineCode",{parentName:"p"},"installPlan")," failed."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'install strategy failed: Deployment.apps "datapower-operator" is invalid: spec.selector: Invalid value: v1.LabelSelector{...}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable\n')),Object(n.b)("p",null,"This error occurs because between version ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.0")," and ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.1")," a new ",Object(n.b)("inlineCode",{parentName:"p"},"label")," was added to the DataPower Operator Deployment resource to fix an issue related to operator-metrics. However, the install plan is not able to resolve this update because the LabelSelector is an immutable field."),Object(n.b)("h3",null,"Resolution"),Object(n.b)("p",null,"To workaround this issue, you can manually delete the existing ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator")," Deployment resource. The Operator Lifecycle Manager should then recreate the ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator")," Deployment resource with the ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.1")," spec, and the install plan should succeed."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc delete deployment datapower-operator\n")),Object(n.b)("p",null,"Once done, validate a new ",Object(n.b)("inlineCode",{parentName:"p"},"datapower-operator")," Deployment is created:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get deployment\n")),Object(n.b)("p",null,"Then validate the ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.1")," install plan succeeds by checking the ",Object(n.b)("inlineCode",{parentName:"p"},"ClusterServiceVersion")," resource:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ oc get csv\nNAME                        DISPLAY                 VERSION   REPLACES                    PHASE\ndatapower-operator.v1.0.1   IBM DataPower Gateway   1.0.1     datapower-operator.v1.0.0   Succeeded\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-operator-upgrades-mdx-d3b0e3554a67f4bf6986.js.map