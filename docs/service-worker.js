/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-7z9a286-.js",[],["A5SCimyrjAE"]],["q-9krpkQXY.js",[50],["xZMN9tCHIlM"]],["q-B2ascL3x.js",[50],["GXAT3NdXIPo"]],["q-B7gceFk2.js",[23],["VKFlAWJuVm8"]],["q-BBWsAYzf.js",[23]],["q-BGmau5pl.js",[23],["0vphQYqOdZI"]],["q-BIaRSdx6.js",[50],["pBe1mUorAcM"]],["q-BRBr7aun.js",[],["9KRx0IOCHt8"]],["q-BTQ6Cm87.js",[23],["zPJUEsxZLIA"]],["q-BUvWN14P.js",[16],["mkGhtyPe7Vk"]],["q-BX2mzk3S.js",[12],["F3iwExJPWMY"]],["q-BYuS2psb.js",[23],["Mq57Thc0D0A"]],["q-BatyJqDA.js",[23],["d7akcssg4D0"]],["q-Bb-sTMp1.js",[23],["ScE8eseirUA"]],["q-Bbv3-Vbj.js",[50],["O7Nv1DitW7o"]],["q-BjKv-uld.js",[23],["i3Y1IcUyvyE"]],["q-Br_g8pp1.js",[13],["MMTj0J2JmqU"]],["q-C1FXnUfp.js",[23]],["q-C2ceVtJ2.js",[1],["vyU09J8k9to"]],["q-C4YDirsF.js",[50],["sMCm00zs4UQ"]],["q-C5eesaBT.js",[9],["FdQ8zERN4uM"]],["q-C6qV9Mek.js",[23]],["q-C8mYF_0p.js",[1],["pWsmcogutG8"]],["q-CCnOBAfZ.js",[43],["Ysfvd0zsHZc"]],["q-CJU6j3M0.js",[43],["K4gvalEGCME"]],["q-COhZpAtQ.js",[1],["B0lqk5IDDy4"]],["q-Cb1qb1Vb.js",[1],["N26RLdG0oBg"]],["q-Ce21fwJM.js",[50],["B73JozxSZZg"]],["q-Ci4jmJ-O.js",[12],["1D70niFH5Yc"]],["q-Cilfqzov.js",[23]],["q-CsgH5Jse.js",[12],["8w3v0bM2vqM"]],["q-Cwqc2oId.js",[59],["MiPVFWJLcMo"]],["q-CxKl-0Xg.js",[23]],["q-D-gkXkkU.js",[23],["WfTOxT4IrdA"]],["q-D3EYZLhu.js",[50],["ByJnoWpGYvQ"]],["q-D9MQkWAm.js",[50],["9Ov9PDoFncU"]],["q-DAiWVBGA.js",[43],["qGVD1Sz413o"]],["q-DDsiIB9D.js",[23]],["q-DO4Ztmpy.js",[50],["xPgGXwQW1aU"]],["q-DaJViG1r.js",[16],["gI0Ffa02FNU"]],["q-Dmw44waj.js",[50],["foUkk6iCvZM"]],["q-DsXpy8df.js",[1],["26Zk9LevwR4"]],["q-Dty6FMWV.js",[23],["p1yCGpFL1xE"]],["q-FTY34oCX.js",[50],["fa19e2Udw0o"]],["q-FxLh1nGw.js",[23],["tntnak2DhJ8"]],["q-IV7UuVyN.js",[50],["AP8fsAvgNUU"]],["q-Poxd5gup.js",[43],["aww2BzpANGM"]],["q-U2ey7rhJ.js",[1],["dT0sDkUStYI"]],["q-_d66pCDZ.js",[23],["xe8duyQ5aaU"]],["q-atEF3nXb.js",[1],["eYi5ppf5mj8"]],["q-dTmLcSrm.js",[50],["dq0u60WpdYo"]],["q-eGl6L-Ls.js",[50],["r73kTlFVFvY"]],["q-f-ZjJR7h.js",[23],["zpHcJzYZ88E"]],["q-oMbDF_3J.js",[23]],["q-pd3MsBqq.js",[50],["xWwQReA0ccI"]],["q-qwoXQYOP.js",[50],["Jn1TNHm9lGg"]],["q-sMmEeB1u.js",[50],["OLJbpW3Lm8U"]],["q-w_r0SrkJ.js",[9],["1raneLGffO8"]],["q-xq0K28iu.js",[23],["PmWjL2RrvZM"]]];
const libraryBundleIds=[43];
const linkBundles=[[/^\/$/,[38,4,30,26]],[/^\/about\/?$/,[38,4,33,48]],[/^\/projet\/?$/,[38,4,18,40]],[/^\/projet\/([^/]+?)\/?$/,[38,4,5,10]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
