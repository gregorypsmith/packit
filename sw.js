!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.2"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.2"]&&_()}catch(e){}},function(e,t,n){"use strict";n.r(t);n(1);const s=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class r extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}n(0);const c=[],a={get:()=>c,add(e){c.push(...e)}};const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[o.prefix,e,o.suffix].filter(e=>e&&e.length>0).join("-"),h=e=>e||i(o.precache),l=new Set;const u=(e,t)=>e.filter(e=>t in e),f=async({request:e,mode:t,plugins:n=[]})=>{const s=u(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},d=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const c=await self.caches.open(e),a=await f({plugins:r,request:t,mode:"read"});let o=await c.match(a,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:a})}return o},p=async({cacheName:e,request:t,response:n,event:s,plugins:c=[],matchOptions:a})=>{const o=await f({plugins:c,request:t,mode:"write"});if(!n)throw new r("cache-put-with-no-response",{url:(i=o.url,new URL(String(i),location.href).href.replace(new RegExp("^"+location.origin),""))});var i;const h=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,c=!1;for(const t of s)if("cacheWillUpdate"in t){c=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return c||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:c,response:n,request:o});if(!h)return void 0;const p=await self.caches.open(e),y=u(c,"cacheDidUpdate"),w=y.length>0?await d({cacheName:e,matchOptions:a,request:o}):null;try{await p.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of l)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:h,request:o})},y=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const c=u(s,"fetchDidFail"),a=c.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new r("plugin-error-request-will-fetch",{thrownError:e})}const o=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:o,response:r}));return r}catch(e){0;for(const t of c)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:o.clone()});throw e}};let w;async function g(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,c=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(c,r)}function m(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),c=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:c.href}}class R{constructor(e){this._cacheName=h(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=m(n),c="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,c),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),c=await r.keys(),a=new Set(c.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)a.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:c,event:e,integrity:r,plugins:t,url:s})});return await Promise.all(o),{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:c,integrity:a}){const o=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,h=await y({event:s,plugins:c,request:o});for(const e of c||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:o,response:h}):h.status<400))throw new r("bad-precaching-response",{url:t,status:h.status});h.redirected&&(h=await g(h)),await p({event:s,plugins:c,response:h,request:e===t?o:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new r("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new r("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let v;const _=()=>(v||(v=new R),v);const U=(e,t)=>{const n=_().getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}={}){const c=new URL(e,location.href);c.hash="",yield c.href;const a=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(c,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(s){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:c});for(const t of e)yield t.href}}(e,t)){const e=n.get(s);if(e)return e}};let L=!1;function q(e){L||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}={})=>{const r=h();self.addEventListener("fetch",c=>{const a=U(c.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!a)return void 0;let o=self.caches.open(r).then(e=>e.match(a)).then(e=>e||fetch(a));c.respondWith(o)})})(e),L=!0)}const T=e=>{const t=_(),n=a.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},K=e=>{const t=_();e.waitUntil(t.activate())};var b;(function(e){_().addToCacheList(e),e.length>0&&(self.addEventListener("install",T),self.addEventListener("activate",K))})([{'revision':'9fa0f4932fa2cfe046e73680090b4fc7','url':'assets/.DS_Store'},{'revision':'41d08803b16dc225ad2b94b3cb3c6a6b','url':'assets/img/.DS_Store'},{'revision':'bdf8db905cfb36014d86188219271152','url':'assets/img/Untitled-1.psd'},{'revision':'03157126863343dbb69b29ebbb2112be','url':'assets/img/backgroundLevel.jpg'},{'revision':'a0732f8b3693f76363d6e5307ec43996','url':'assets/img/backgroundMain.jpeg'},{'revision':'381f7425067ef8584098e6f320e2c253','url':'assets/img/backgroundMain.png'},{'revision':'5cea5993a699a367967ffb24cb245478','url':'assets/img/biggerpicturetext1.png'},{'revision':'0cb65d33b5c9950d781ac8699712e83f','url':'assets/img/biggerpicturetext2.png'},{'revision':'33385fdb728e2db1a82a65a6d377bec8','url':'assets/img/biggerpicturetext3.png'},{'revision':'ff372cbffdaa427f6860d063bc788c13','url':'assets/img/bigpicturetext1.png'},{'revision':'b41329f3f91c52b08da30c24b9c888ba','url':'assets/img/bigpicturetext2.png'},{'revision':'c59849e3444ffeccc40281a649182a0c','url':'assets/img/bigpicturetext3.png'},{'revision':'94253b2f6bec43d417e9b65a83aee861','url':'assets/img/checkeredflag.jpg'},{'revision':'a4fb665e50c8cabb6ef8fb878c751baa','url':'assets/img/checkeredflag.png'},{'revision':'8b0b8534a8c7c319020c7cd6ee43d70c','url':'assets/img/conveyor.png'},{'revision':'dcd4f59f5d94204eb039f12582cfac59','url':'assets/img/conveyor.psd'},{'revision':'c1bf1b09f6da736e56e293ee30ad6049','url':'assets/img/correctbelt.png'},{'revision':'a5300419509809c07779c13e595ffd74','url':'assets/img/detailorientedtext1.png'},{'revision':'a211c7a119d6f100b5c99a58adcccab8','url':'assets/img/detailorientedtext2.png'},{'revision':'d80515a02e811ba02be5caf409d749fa','url':'assets/img/detailorientedtext3.png'},{'revision':'ffcc0d7e45d4afc1985eb4b9c0164b98','url':'assets/img/failure.png'},{'revision':'c3e9286a50da8593674a3e9bd01d0cbd','url':'assets/img/greenarrow.png'},{'revision':'fdf24e1805c34f3de7a5d49d2a8c4f50','url':'assets/img/helloworldtext1.png'},{'revision':'4c28db162e6b4324a25851db8a1f7f3a','url':'assets/img/helloworldtext2.png'},{'revision':'6b259403f5f74422c8fe5d0a1dff5a60','url':'assets/img/helloworldtext3.png'},{'revision':'e179232b4689d1629575f399a1368861','url':'assets/img/helloworldtext4.png'},{'revision':'d1ffc4f7ddfe4751b4d354b6df6fc679','url':'assets/img/helloworldtext5.png'},{'revision':'a7819ba49513dce12c037bc29335ffda','url':'assets/img/helloworldtext6.png'},{'revision':'9bdfcbde064649b6547cfa7c74b2c7c1','url':'assets/img/hint.png'},{'revision':'5fad7229c62c2dd66ab51e3f8c292cdc','url':'assets/img/introtext1.png'},{'revision':'336217e6bb0b8030438b16f3b104534a','url':'assets/img/introtext10.png'},{'revision':'c32e7b8a9d74cae47c67c363dc56923c','url':'assets/img/introtext11.png'},{'revision':'c8eca6fe7ea10162e83cce24272ced93','url':'assets/img/introtext2.png'},{'revision':'e6f10a23492ed56a2077bb24ee271d5f','url':'assets/img/introtext3.png'},{'revision':'4bf4a3aa262a17e2ce218302305cf1ae','url':'assets/img/introtext4.png'},{'revision':'4a575381d586f39877602eab19cbaf89','url':'assets/img/introtext5.png'},{'revision':'acba47e7bffb4f2e93a586810c883a3f','url':'assets/img/introtext6.png'},{'revision':'477cbcd651cb3b1be1be90ef10f98154','url':'assets/img/introtext7.png'},{'revision':'b1c83944bd5f8f31ccec33c55e8d9ddd','url':'assets/img/introtext8.png'},{'revision':'ad2c5b3f9b04b8b79682708b1e5107dd','url':'assets/img/introtext9.png'},{'revision':'ef8ad8df405a84e6635f617dc6df3d3f','url':'assets/img/level10text.png'},{'revision':'b7ba71d410deee2f261211928dd4fe62','url':'assets/img/level11text.png'},{'revision':'a4734712c2caf01841fd77e174432a0c','url':'assets/img/level12text.png'},{'revision':'72b1c0a0ce92acf6dbf9df7e0642a75a','url':'assets/img/level13text.png'},{'revision':'35edc36a949bb9a4b8370e46ccf9c7b1','url':'assets/img/level14text.png'},{'revision':'c9c3c58b83ed78859fb1c8f6b1742154','url':'assets/img/level15text.png'},{'revision':'34dce013678d59ce6a046ea2e8387285','url':'assets/img/level1text.png'},{'revision':'addc4130e58828e3c8d92cc7341d33b1','url':'assets/img/level2text.png'},{'revision':'6a64ae90f07828e8ffdbc83c12d38ff1','url':'assets/img/level2text1.png'},{'revision':'65e013448bcb99678e3f690f2ae7a981','url':'assets/img/level2text2.png'},{'revision':'55be9d2609c3d852da5b24d7e0cc3ceb','url':'assets/img/level2text3.png'},{'revision':'c0ad3c020ac5c9fcd79c6071e7ad6624','url':'assets/img/level2text4.png'},{'revision':'9ab8fa49ee8f0744c62ce4191216cb8a','url':'assets/img/level3text.png'},{'revision':'c84a11991f2d955670df0d1b118b29b1','url':'assets/img/level4text.png'},{'revision':'16491581ccbc15eb9f22c28e82b681a4','url':'assets/img/level5text.png'},{'revision':'3913d0b19c3e7fa79b97a340760c4a31','url':'assets/img/level6text.png'},{'revision':'620b1411df79bcc68a86290144fd5a0d','url':'assets/img/level7text.png'},{'revision':'cd7012d8a0f04ce0da6f5697e5e51232','url':'assets/img/level8text.png'},{'revision':'c11fef98aa6df119d41f2192390096a1','url':'assets/img/level9text.png'},{'revision':'5b51262f6fbcca38eb5d3b3b11137a0c','url':'assets/img/nestednightmaretext1.png'},{'revision':'32510c74e9d4c23ff3c5beed60a2bae4','url':'assets/img/nestednightmaretext2.png'},{'revision':'4e6775af90fa616b91cd0d0dd45012a2','url':'assets/img/nestednightmaretext3.png'},{'revision':'026bff6101df680f07bf157a7ea0992c','url':'assets/img/options.png'},{'revision':'bcabfb7480cda65ed0e5753a6e243cc6','url':'assets/img/package0.png'},{'revision':'76188b1d5283c94a6c8f87feab3ed127','url':'assets/img/package1.png'},{'revision':'934e4828275f41d691857acd4c1b3fde','url':'assets/img/package2.png'},{'revision':'6451ac67a2328cf6910084ce73409d51','url':'assets/img/package3.png'},{'revision':'1b03d1323849f99288ef2dc98a0444f5','url':'assets/img/package4.png'},{'revision':'42f7e30406a9eb124e4b822e50fb8bd3','url':'assets/img/playbutton.gif'},{'revision':'6ce8ece270e39e6089bdcdc8b0ff8bf3','url':'assets/img/progress1.png'},{'revision':'9111584a89c3d01782d5d4eca0ba9e55','url':'assets/img/progress10.png'},{'revision':'470beb202ff8fbabe4167ff2d17ef7a0','url':'assets/img/progress11.png'},{'revision':'d5e356c551c8000ef15e7b53483c1b84','url':'assets/img/progress12.png'},{'revision':'7ac762993cbf2feb4a8c00ca3108c726','url':'assets/img/progress13.png'},{'revision':'0587a5d4fc905087c0b57d3247489d55','url':'assets/img/progress14.png'},{'revision':'032c40306f51a2cace2191ad4df02a5b','url':'assets/img/progress15.png'},{'revision':'2f727f4675f633c0e6e835e7c88820ec','url':'assets/img/progress2.png'},{'revision':'10ba8eb68f2b09d445f09810c9ca9f6e','url':'assets/img/progress3.png'},{'revision':'96f775475dcb2be4a7a78147eb35694d','url':'assets/img/progress4.png'},{'revision':'83737abfec69ece81687dcb335507e8b','url':'assets/img/progress5.png'},{'revision':'fe5135f91628a12d827cfa035ac3a1df','url':'assets/img/progress6.png'},{'revision':'3f7ad55e412a9f2cc58bf9e78ddf42f8','url':'assets/img/progress7.png'},{'revision':'71af842312bef4e46ea2573a1853064f','url':'assets/img/progress8.png'},{'revision':'8538f9b23446fab3fc63b4700f20b865','url':'assets/img/progress9.png'},{'revision':'89300c4f95f1695ec421a80e4b9cb698','url':'assets/img/progressbar.png'},{'revision':'4e60e027cccc3d595da31a7a63825a1d','url':'assets/img/progressdone.png'},{'revision':'a09c5be60a964c34bd7f046521ca7efa','url':'assets/img/progresslast.png'},{'revision':'56a1e05aa2fa219d0ec5d7a821a6bcda','url':'assets/img/remove-package.png'},{'revision':'e2d2ff187f60ea332890a75d5ffdd2c9','url':'assets/img/run-button.png'},{'revision':'8a02a1dc7fd6a3d8c7590e119b5ca725','url':'assets/img/skiptutorial.png'},{'revision':'fd9dfe5eb188975b357fe014ee4db7de','url':'assets/img/success.png'},{'revision':'dfa9cac016b8d36e98bc049b56ccdc32','url':'assets/img/top-bar.jpg'},{'revision':'f832fd83e900d656b004651a5a6051fe','url':'assets/img/viewtutorial.png'},{'revision':'64af13fec17e1675f2c502aaaf753b70','url':'assets/txt/.DS_Store'},{'revision':'812fe2527836c647e1453bb18417000a','url':'assets/txt/level1.txt'},{'revision':'57040e5677322118f6d56a1d9e43c5c6','url':'favicon.ico'},{'revision':'2ffbc23293ee8a797bc61e9c02534206','url':'icons/icons-192.png'},{'revision':'8bdcc486cda9b423f50e886f2ddb6604','url':'icons/icons-512.png'},{'revision':'2574ba908b40c4a6b7737b557779c17a','url':'index.html'},{'revision':'550c2b816150e09f1530ccc2a66bfc6b','url':'main.2bb6145cb7e58c7ef1f8.bundle.js'},{'revision':'bf38d0c9760162342f12cd9b44fbf4ef','url':'manifest.json'},{'revision':'eb0958c1d16a38c8be74228cc6f66059','url':'vendors.08c055a5752e647b060c.bundle.js'}]),q(b)}]);