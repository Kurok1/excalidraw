if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-e5b2ea8b"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjs-dynamic-modules-TDtrdbi3.js",revision:null},{url:"assets/arc-DbLUVpLK.js",revision:null},{url:"assets/array-BKyUJesY.js",revision:null},{url:"assets/blockDiagram-91b80b7a-W8TE85MG.js",revision:null},{url:"assets/bug-issue-template-BID_ABWq.js",revision:null},{url:"assets/c4Diagram-b2a90758-BvdNqkhr.js",revision:null},{url:"assets/channel-BjQAn3GX.js",revision:null},{url:"assets/classDiagram-30eddba6-DX2iAiY9.js",revision:null},{url:"assets/classDiagram-v2-f2df5561-C0TZg1_a.js",revision:null},{url:"assets/clone-DHnSeJrt.js",revision:null},{url:"assets/createText-6b48ae7d-DulV96BZ.js",revision:null},{url:"assets/directory-open-01563666-DWU9wJ6I.js",revision:null},{url:"assets/directory-open-4ed118d0-BNgAhb94.js",revision:null},{url:"assets/edges-d32062c0-FuVzwFNQ.js",revision:null},{url:"assets/erDiagram-47591fe2-BkUaok4Y.js",revision:null},{url:"assets/file-open-002ab408-CQ9a1yTP.js",revision:null},{url:"assets/file-open-7c801643-CD3BRLr1.js",revision:null},{url:"assets/file-save-3189631c-x92wctJd.js",revision:null},{url:"assets/file-save-745eba88-D6MGJDcB.js",revision:null},{url:"assets/flowchart-elk-definition-5fe447d6-QEDgFKxc.js",revision:null},{url:"assets/flowDb-4b19a42f-DP8wvVQp.js",revision:null},{url:"assets/flowDiagram-5540d9b9-B7JzXtIK.js",revision:null},{url:"assets/flowDiagram-v2-3b53844e-cCav8GUR.js",revision:null},{url:"assets/ganttDiagram-9a3bba1f-DWrOiVIH.js",revision:null},{url:"assets/gitGraphDiagram-96e6b4ee-BlgjaHSa.js",revision:null},{url:"assets/graph-W1XBU0J9.js",revision:null},{url:"assets/image-blob-reduce.esm-xKov1Fz_.js",revision:null},{url:"assets/index-CDtAUWsv.css",revision:null},{url:"assets/index-ChGp7972.js",revision:null},{url:"assets/index-CzI8LLj2.js",revision:null},{url:"assets/index-fc10efb0-CVYaVCcU.js",revision:null},{url:"assets/index-vzFZ3tkr.js",revision:null},{url:"assets/index.esm-BBPbcu4J.js",revision:null},{url:"assets/index.esm-CEdfWUhJ.js",revision:null},{url:"assets/index.esm-DD3bSLCo.js",revision:null},{url:"assets/index.esm-x8eGJrJY.js",revision:null},{url:"assets/infoDiagram-bcd20f53-Cb9NS27P.js",revision:null},{url:"assets/init-Gi6I4Gst.js",revision:null},{url:"assets/journeyDiagram-4fe6b3dc-bVRKXQwr.js",revision:null},{url:"assets/katex-rPiVaalG.js",revision:null},{url:"assets/layout-L9Lvi1l7.js",revision:null},{url:"assets/line-ByDJ1EgR.js",revision:null},{url:"assets/linear-Cz5C6tZE.js",revision:null},{url:"assets/mindmap-definition-f354de21-DGrnEuEa.js",revision:null},{url:"assets/ordinal-Cboi1Yqb.js",revision:null},{url:"assets/path-CbwjOpE9.js",revision:null},{url:"assets/pica-Bo4pFOUb.js",revision:null},{url:"assets/pieDiagram-79897490-BUNVlCsF.js",revision:null},{url:"assets/quadrantDiagram-62f64e94-u8JpTaLJ.js",revision:null},{url:"assets/random-username.esm-__vdrxyo.js",revision:null},{url:"assets/requirementDiagram-05bf5f74-BDyo7-fA.js",revision:null},{url:"assets/roundRect-0PYZxl1G.js",revision:null},{url:"assets/sankeyDiagram-97764748-CuCfvB5x.js",revision:null},{url:"assets/sequenceDiagram-acc0e65c-YJBpL6bl.js",revision:null},{url:"assets/stateDiagram-0ff1cf1a-Dk3HKQmO.js",revision:null},{url:"assets/stateDiagram-v2-9a9d610d-BWs_c8fk.js",revision:null},{url:"assets/styles-3ed67cfa-BJUvqFdu.js",revision:null},{url:"assets/styles-991ebdfc-C1WQw8_a.js",revision:null},{url:"assets/styles-d20c7d72-CeZeKdjx.js",revision:null},{url:"assets/svgDrawCommon-5ccd53ef-5fCbChUw.js",revision:null},{url:"assets/Tableau10-B-NsZVaP.js",revision:null},{url:"assets/timeline-definition-fea2a41d-Cjvet8uu.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/xychartDiagram-ab372869-DnEMwKxl.js",revision:null},{url:"index.html",revision:"5f65a907036e67b039a169db7498f642"},{url:"android-chrome-192x192.png",revision:"3d005c71b9ea629a8d137916a02ce9af"},{url:"apple-touch-icon.png",revision:"a9b855bc4fa588808a72c126fa9ade00"},{url:"favicon-32x32.png",revision:"1bcbbaf7639d13ce6e4abbd4a785f3dd"},{url:"favicon-16x16.png",revision:"6fc51d9533178efaec96f5c3c1f4c357"},{url:"manifest.webmanifest",revision:"32940221b0f79f23fbd72cc42b202d25"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/.+.(ttf|woff2|otf)/,new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET"),s.registerRoute(/fonts.css/,new s.StaleWhileRevalidate({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50})]}),"GET"),s.registerRoute(/locales\/[^/]+.js/,new s.CacheFirst({cacheName:"locales",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
