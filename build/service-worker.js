"use strict";var precacheConfig=[["/index.html","02da585105785f8d5d11ba18ff1ce5e5"],["/static/css/main.c56281c8.css","74fa46d1ab7716168d65faf2b99b5cbc"],["/static/js/main.263fa302.js","4fca9a9e34c32c0166dd43bf5f5daade"],["/static/media/icon_cheese_Mozzarella.wdp.7986c1f3.png","7986c1f3e4a3659a58fe4c3170a78680"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/topping_Beef.4f470af2.png","4f470af21f8c09ce38fb0e3d8d867b2e"],["/static/media/topping_Chicken.ab089de3.png","ab089de3742e538ca8f9bb7e71c960bb"],["/static/media/topping_GreenBellPepper.c7e36e95.png","c7e36e9557c88c16e2fe4408fb79060a"],["/static/media/topping_Ham.e59f69d1.png","e59f69d19a66a89ecafed6f83fa6e55d"],["/static/media/topping_ItalianSausage.e5068a9a.png","e5068a9a57a95177edaa36dff148feba"],["/static/media/topping_Meatball.06eb78a0.png","06eb78a019d86f87d274e491a380a75b"],["/static/media/topping_Mushroom.a37ba003.png","a37ba0039d6fc0435958841aac7c09aa"],["/static/media/topping_Olives_black.5566ba87.png","5566ba8786e13915b5126b83b6637b50"],["/static/media/topping_Onion_red.0ca82432.png","0ca82432027eccf09783d4d7049256dd"],["/static/media/topping_Pepperoni.c8999f8e.png","c8999f8e59b0092c27dae7001854a600"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});