/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-17SVbGZt.js",[41],["xZMN9tCHIlM"]],["q-7z9a286-.js",[],["A5SCimyrjAE"]],["q-8lORGWOh.js",[41],["O7Nv1DitW7o"]],["q-B8KIO5TQ.js",[41],["pBe1mUorAcM"]],["q-BI6TUqo3.js",[2],["VKFlAWJuVm8"]],["q-BIIgnDnA.js",[27],["K4gvalEGCME"]],["q-BILXxWSQ.js",[47]],["q-BMtv_rhn.js",[47]],["q-BOsaQ3ki.js",[41],["AP8fsAvgNUU"]],["q-BRBr7aun.js",[],["9KRx0IOCHt8"]],["q-BXkC8pp9.js",[23],["mkGhtyPe7Vk"]],["q-BbiujH18.js",[41],["ByJnoWpGYvQ"]],["q-BeXDT854.js",[27],["aww2BzpANGM"]],["q-BeZGidyZ.js",[47],["ScE8eseirUA"]],["q-BfbS7UfH.js",[47]],["q-BgMYBUwy.js",[41],["xWwQReA0ccI"]],["q-BiDjgbSL.js",[41],["r73kTlFVFvY"]],["q-BppShVii.js",[24],["B0lqk5IDDy4"]],["q-BzC5EMT3.js",[23],["gI0Ffa02FNU"]],["q-C2JZT_pF.js",[41],["Jn1TNHm9lGg"]],["q-C2ceVtJ2.js",[2],["vyU09J8k9to"]],["q-C3r5c8Gz.js",[45],["FdQ8zERN4uM"]],["q-CAi4p9Jw.js",[24],["i3Y1IcUyvyE"]],["q-CJfFupJn.js",[47],["dT0sDkUStYI"]],["q-CLRLICj9.js",[41],["B73JozxSZZg"]],["q-CUO6Vft-.js",[47],["xe8duyQ5aaU"]],["q-CWw-0EGQ.js",[47],["p1yCGpFL1xE"]],["q-Cb1qb1Vb.js",[2],["N26RLdG0oBg"]],["q-CfaLTHuP.js",[47]],["q-CgsXNKCv.js",[41],["OLJbpW3Lm8U"]],["q-ChPgFwo3.js",[47],["d7akcssg4D0"]],["q-Cw1UlsjA.js",[31],["MMTj0J2JmqU"]],["q-D-xtyNaE.js",[43],["F3iwExJPWMY"]],["q-D3GwHawt.js",[47],["zpHcJzYZ88E"]],["q-D3juAzfe.js",[41],["fa19e2Udw0o"]],["q-D7RFyYPr.js",[42],["MiPVFWJLcMo"]],["q-D8QUEWvh.js",[47]],["q-D9YuyAFW.js",[47],["WfTOxT4IrdA"]],["q-DU6_vzkz.js",[47]],["q-D_XYv_nm.js",[41],["sMCm00zs4UQ"]],["q-DfQkU1Hc.js",[2],["eYi5ppf5mj8"]],["q-DipfnV7k.js",[47],["PmWjL2RrvZM"]],["q-DjzU8lUD.js",[47],["Mq57Thc0D0A"]],["q-DkELuORj.js",[41],["dq0u60WpdYo"]],["q-DoveQP3z.js",[47],["zPJUEsxZLIA"]],["q-DsXpy8df.js",[2],["26Zk9LevwR4"]],["q-DuVSsNAP.js",[2],["pWsmcogutG8"]],["q-Du_qKEoh.js",[47],["tntnak2DhJ8"]],["q-EoWwFuFs.js",[27],["Ysfvd0zsHZc"]],["q-L2VGBAS6.js",[45],["1raneLGffO8"]],["q-UukExKje.js",[47]],["q-Vzv8oVJF.js",[43],["1D70niFH5Yc"]],["q-ZYMDZn3Y.js",[47],["0vphQYqOdZI"]],["q-_Z3bsVtK.js",[41],["foUkk6iCvZM"]],["q-lJ9UlzJh.js",[43],["8w3v0bM2vqM"]],["q-uqLkcW5G.js",[27],["qGVD1Sz413o"]],["q-wBzIcXOG.js",[41],["xPgGXwQW1aU"]]];
const libraryBundleIds=[27];
const linkBundles=[[/^\/$/,[39,5,8,18]],[/^\/about\/?$/,[39,5,29,24]],[/^\/projet\/?$/,[39,5,7,19]],[/^\/projet\/([^/]+?)\/?$/,[39,5,15,11]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
