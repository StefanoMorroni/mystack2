(self.webpackChunkRicercheGoogleLike=self.webpackChunkRicercheGoogleLike||[]).push([[627],{10306:(e,t,r)=>{const n=r(7185),o=r(56647),i=r(72500),a=r(59154).ZP,{isAuthenticationActivated:s,getAuthenticationRule:l,getToken:u,getBasicAuthHeader:c}=r(36493),d=r(51312),p=r(20238),g=r(72240),h=r(54702),f=r(72500);function m(e,t,r){e.params=d({},e.params,{[t]:r}),e.url=e.url?a.getUrlWithoutParameters(e.url,[t]):e.url}function v(e,t,r){e.headers=d({},e.headers,{[t]:r})}const y=[];n.interceptors.request.use((e=>{var t=e.url||"",r=!(0===t.indexOf("http")),n=!r&&t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(function(e){if(!e||!e.url||!s())return e;const t=o(e.baseURL||"",e.url),r=l(t);switch(r&&r.method){case"browserWithCredentials":return e.withCredentials=!0,e;case"authkey":{const t=u();return t?(m(e,r.authkeyParamName||"authkey",t),e):e}case"test":{const t=r?r.token:"";return t?(m(e,r.authkeyParamName||"authkey",t),e):e}case"basic":const t=c();return t?(v(e,"Authorization",t),e):e;case"bearer":{const t=u();t&&v(e,"Authorization","Bearer "+t)}}}(e),n){let e=window.location;r=n[1]===e.protocol&&n[3]===e.hostname;let t=n[4],o=e.port,i=0===e.protocol.indexOf("https")?443:80;t=""===t?i+"":t+"",o=""===o?i+"":o+"",r=r&&t===o}if(!r){let r=a.getProxyUrl(e);if(r){let n=[],o=!1;p(r)&&(n=r.useCORS||[],o=r.autoDetectCORS||!1,r=r.url);const i=n.reduce(((e,r)=>e||0===t.indexOf(r)),!1),a=y.reduce(((e,r)=>e||0===t.indexOf(r)),!1);if(i||o&&!a)o&&(e.autoDetectCORS=!0);else{const n=f.parse(t,!0,!0),o=g(e.params,h);e.url=r+encodeURIComponent(f.format(d({},n,{search:null,query:d({},n.query,o)}))),e.params=void 0}}}return e})),n.interceptors.response.use((e=>e),(e=>{if(e.config&&e.config.autoDetectCORS){const t=i.parse(e.config.url),r=t.protocol+"//"+t.host+t.pathname;if(-1===y.indexOf(r))return y.push(r),new Promise(((t,r)=>{n({...e.config,autoDetectCORS:!1}).then(t).catch(r)}))}return Promise.reject(e.response?{...e.response,originalError:e}:e)})),e.exports=n},59154:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>V});var n=r(91868),o=r(77580),i=r.n(o),a=r(72500),s=r.n(a),l=r(7185),u=r.n(l),c=r(23317),d=r.n(c),p=r(21389),g=r.n(p),h=r(20238),f=r.n(h),m=r(55564),v=r.n(m),y=r(54702),w=r.n(y),b=r(51312),P=r.n(b),k=r(89820),E=r(10082),L=r.n(E),x=r(71547);const A=n.Z?new n.Z.Proj("EPSG:4326"):null,C=i().shape({x:i().number.isRequired,y:i().number.isRequired,crs:i().string}),S=s().parse(window.location.href,!0).query;let O="configs/localConfig.json",R={proxyUrl:"/mapstore/proxy/?url=",geoStoreUrl:"/rest/geostore/",printUrl:"/mapstore/print/info.json",translationsPath:"translations",extensionsRegistry:"extensions/extensions.json",extensionsFolder:"extensions/",configurationFolder:"configs/",contextPluginsConfiguration:"configs/pluginsConfig.json",projectionDefs:[],themePrefix:"ms2",bingApiKey:null,mapquestApiKey:null,defaultSourceType:"gxp_wmssource",backgroundGroup:"background",userSessions:{enabled:!1}};const G=function(e,t,r,n){const o=e.mapId;let i;return i=o?(n||R.geoStoreUrl)+"data/"+o:R.configurationFolder+(e.config||t||"config")+"."+(r||"json"),{configUrl:i,legacy:!!o}},U=e=>{const t=e.split("?");if(t.length>2){let e=t.slice(1);return t[0]+"?"+e.join("&")}return e},I=(e,t)=>{const r=U(e).split("?");let n="";if(r.length>=2&&r[1]){const e=r[1].split(/[&;]/g).filter((e=>!!e));e.forEach(((r,o)=>{const i=r.split("=");if(-1===t.indexOf(i[0].toLowerCase())){let t=o===e.length-1?"":"&";n+=i.join("=")+t}}))}return n?r[0]+"?"+n:r[0]},T=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return w()(e)||""===e?null:I(U(e),t)},N=function(e,t){const r=g()(e)?{x:e[0],y:e[1]}:e,o=e.crs||t||"EPSG:4326",i="EPSG:4326"!==o?n.Z.transform(new n.Z.Proj(o),A,r):r;return P()({},i,{crs:"EPSG:4326"})},D=function(e){return"bing"===e.type&&(e.apiKey=R.bingApiKey),"mapquest"===e.type&&(e.apiKey=R.mapquestApiKey),e},F=function(e,t){return e.id||(e.id=e.name+"__"+t),e},q=function(e){let t=e;return(t.match(/\{.*?\}/g)||[]).forEach((e=>{const r=R[e.substring(1,e.length-1)];void 0!==r&&(t=t.replace(e,r||""))})),t},z=function(e){return e.url&&(g()(e.url)?e.url=e.url.map((e=>q(e))):e.url=q(e.url)),e},_=function(e){const{layers:t,groups:r,plugins:n,...o}=e;return o.center=N(o.center),{map:o,layers:t.map(D,e).map(F).map(z),groups:r,plugins:n}},j=function(e,t){var r,n=t;for(r in t||(n=R.defaultSourceType),e)e.hasOwnProperty(r)&&(e[r].ptype||(e[r].ptype=n))},H=function(e){return e&&-1!==e.indexOf("?")?e.split("?")[0]:e},K=function(e,t){if(e.baseParams=t.baseParams,t.url){let r=s().parse(t.url,!0);for(let e in r.query)"REQUEST"===e.toUpperCase()&&delete r.query[e];e.baseParams=P()({},e.baseParams,r.query)}e.url=H(t.url)},M=function(e,t,r){var n,o,i,a;for(o=0;o<e.length;o++){(a=t[(i=e[o]).source])&&K(i,a);let s=a.ptype;i.type=s?s.replace(/^gxp_(.*)source$/i,"$1"):"unknown",i&&(r.indexOf(a&&a.ptype)>=0?i.group===R.backgroundGroup&&(i.visibility=i.visibility||!1,n&&n.visibility?i.visibility&&(n.visibility=!1,n=i):n=i):i.visibility=!1)}n&&(n.visibility=!0)},Z=function(e){return e.proxyUrl?e.proxyUrl:R.proxyUrl},V={PropTypes:{center:C,config:i().shape({center:C,zoom:i().number.isRequired}),mapStateSource:i().string},getParsedUrl:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e){const n=s().parse(T(e,r),!0);let o=null;if(v()(n.pathname,"wfs")||v()(n.pathname,"wms")||v()(n.pathname,"ows"))return o=n.pathname.replace(/(wms|ows|wfs|wps)$/,"wps"),s().format(P()({},n,{search:null,pathname:o},{query:P()({service:"WPS",...t},n.query)}))}return null},getDefaults:function(){return{...R}},setLocalConfigurationFile:function(e){O=e},loadConfiguration:function(){if(O){const e=d()(O);return u().all(e.map((e=>u().get(e).then((e=>e.data)).catch((()=>null))))).then((e=>{const[t,...r]=e;if(!t)throw new Error("local configuration file is broken");const n=(0,x.ao)(t,r.filter((e=>e&&"object"==typeof e)));return R=n?{...R,...n}:R,{...R}}))}return new k.Promise((e=>{e({...R})}))},getCenter:N,normalizeConfig:_,getUserConfiguration:function(e,t,r){return G(S,e,t,r)},getConfigurationOptions:G,getConfigUrl:e=>{let{mapId:t,config:r}=e,n=t,o=r;try{let e=parseInt(n,10);isNaN(e)&&(o=t,n=null)}catch(e){o=t,n=null}return G({mapId:n,config:o})},convertFromLegacy:function(e){var t=e.map,r=e.gsSources||e.sources,n=t.layers.filter((e=>r[e.source])),o=N(t.center,t.projection),i=t.zoom,a=t.maxExtent||t.extent;return j(r,e.defaultSourceType),M(n,r,["gxp_osmsource","gxp_wmssource","gxp_googlesource","gxp_bingsource","gxp_mapquestsource","gxp_olsource"]),_({center:o,zoom:i,maxExtent:a,layers:n,projection:t.projection||"EPSG:3857"})},setupSources:j,normalizeSourceUrl:H,copySourceOptions:K,setupLayers:M,mergeConfigs:function(e,t){return e.map=t.map,e.gsSources=t.gsSources||t.sources,e},getProxyUrl:Z,cleanDuplicatedQuestionMarks:U,getUrlWithoutParameters:I,filterUrlParams:T,getProxiedUrl:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!(0===e.indexOf("http")),n=!r&&e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(n){let e=window.location;r=n[1]===e.protocol&&n[3]===e.hostname;let t=n[4],o=e.port,i=0===e.protocol.indexOf("https")?443:80;t=""===t?i+"":t+"",o=""===o?i+"":o+"",r=r&&t===o}if(!r){let r=Z(t);if(r){let t=[];if(f()(r)&&(t=r.useCORS||[],r=r.url),!t.reduce(((t,r)=>t||0===e.indexOf(r)),!1))return r+encodeURIComponent(e)}}return e},getBrowserProperties:function(){let e="ActiveXObject"in window,t=e&&!document.addEventListener,r=e&&window.location.hash===!!window.MSInputMethodContext&&!!document.documentMode,n=navigator.userAgent.toLowerCase(),o=-1!==n.indexOf("webkit"),i=-1!==n.indexOf("chrome"),a=-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),s=-1!==n.indexOf("phantom"),l=-1!==n.indexOf("android"),u=-1!==n.search("android [23]"),c=-1!==n.indexOf("gecko"),d=L().any,p=!window.PointerEvent&&window.MSPointerEvent,g=window.PointerEvent&&window.navigator.pointerEnabled&&window.navigator.maxTouchPoints||p,h="devicePixelRatio"in window&&window.devicePixelRatio>1||"matchMedia"in window&&window.matchMedia("(min-resolution:144dpi)")&&window.matchMedia("(min-resolution:144dpi)").matches,f=document.documentElement,m=e&&"transition"in f.style,v="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!u,y="MozPerspective"in f.style,w="OTransition"in f.style,b=!window.L_DISABLE_3D&&(m||v||y||w)&&!s,P=!window.L_NO_TOUCH&&!s&&(g||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch);return{ie:e,ie11:r,ielt9:t,webkit:o,gecko:c&&!o&&!window.opera&&!e,android:l,android23:u,chrome:i,safari:a,ie3d:m,webkit3d:v,gecko3d:y,opera3d:w,any3d:b,mobile:d,mobileWebkit:d&&o,mobileWebkit3d:d&&v,mobileOpera:d&&window.opera,touch:P,msPointer:p,pointer:g,retina:h}},setApiKeys:D,setUrlPlaceholders:z,replacePlaceholders:q,setLayerId:F,getConfigProp:function(e){return R[e]},setConfigProp:function(e,t){R[e]=t},removeConfigProp:function(e){delete R[e]}}},36493:(e,t,r)=>{"use strict";r.r(t),r.d(t,{addAuthenticationParameter:()=>I,addAuthenticationToSLD:()=>D,addAuthenticationToUrl:()=>T,cleanAuthParamsFromURL:()=>F,clearNilValuesForParams:()=>N,default:()=>q,findUserAttribute:()=>x,findUserAttributeValue:()=>A,getAuthKeyParameter:()=>G,getAuthenticationHeaders:()=>U,getAuthenticationMethod:()=>O,getAuthenticationRule:()=>R,getAuthenticationRules:()=>C,getBasicAuthHeader:()=>P,getRefreshToken:()=>E,getSecurityInfo:()=>w,getToken:()=>k,getUser:()=>b,getUserAttributes:()=>L,isAuthenticationActivated:()=>S,setStore:()=>y});var n=r(59154),o=r(72500),i=r.n(o),a=r(51312),s=r.n(a),l=r(81938),u=r.n(l),c=r(54702),d=r.n(c),p=r(21389),g=r.n(p),h=(r(70913),r(46569),r(54863),r(1376),r(8364)),f=r.n(h);r(49977);const m="persisted.reduxStore",v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"persisted.reduxStore";return n.ZP.getConfigProp(e)||{}};function y(e){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;n.ZP.setConfigProp(t,e)}(e)}function w(){return(!f()(v(e))&&(null===(t=v(e))||void 0===t?void 0:t.getState())||{}).security||{};var e,t}function b(){var e;return null===(e=w())||void 0===e?void 0:e.user}function P(){var e;return null===(e=w())||void 0===e?void 0:e.authHeader}function k(){var e;return null===(e=w())||void 0===e?void 0:e.token}function E(){var e;return null===(e=w())||void 0===e?void 0:e.refresh_token}function L(e){const t=e||b();if(!t||!t.attribute)return[];const r=t.attribute;return g()(r)?r:[r]}function x(e){const t=L();return t&&e?u()(t.filter((t=>t.name&&t.name.toLowerCase()===e.toLowerCase()))):null}function A(e){const t=x(e);return null==t?void 0:t.value}function C(){return n.ZP.getConfigProp("authenticationRules")||[]}function S(){return n.ZP.getConfigProp("useAuthenticationRules")||!1}function O(e){const t=u()(C().filter((t=>t&&t.urlPattern&&e.match(new RegExp(t.urlPattern,"i")))));return null==t?void 0:t.method}function R(e){return u()(C().filter((t=>t&&t.urlPattern&&e.match(new RegExp(t.urlPattern,"i")))))}function G(e){var t;const r=R(e);return null!==(t=null==r?void 0:r.authkeyParamName)&&void 0!==t?t:"authkey"}function U(e,t){if(!e||!S())return null;if("bearer"===O(e)){const e=d()(t)?k():t;return e?{Authorization:"Bearer ".concat(e)}:null}return null}function I(e,t,r){if(!e||!S())return t;switch(O(e)){case"authkey":{const n=d()(r)?k():r;if(!n)return t;const o=G(e);return s()(t||{},{[o]:n})}case"test":{const r=R(e),n=r?r.token:"",o=G(e);return s()(t||{},{[o]:n})}default:return t}}function T(e){if(!e||!S())return e;const t=i().parse(e,!0);return t.query=I(e,t.query),delete t.search,i().format(t)}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(((t,r)=>d()(e[r])?t:{...t,[r]:e[r]}),{})}function D(e,t){if(e.SLD){const r=i().parse(e.SLD,!0),n=I(e.SLD,r.query,t.securityToken);return s()({},e,{SLD:i().format(s()({},r,{query:n,search:void 0}))})}return e}function F(e){return n.ZP.filterUrlParams(e,[G(e)].filter((e=>e)))}const q={setStore:y,getSecurityInfo:w,getUser:b,getBasicAuthHeader:P,getToken:k,getRefreshToken:E,getUserAttributes:L,findUserAttribute:x,findUserAttributeValue:A,getAuthenticationRules:C,isAuthenticationActivated:S,getAuthenticationMethod:O,getAuthenticationRule:R,addAuthenticationToUrl:T,addAuthenticationParameter:I,clearNilValuesForParams:N,addAuthenticationToSLD:D,getAuthKeyParameter:G,cleanAuthParamsFromURL:F,getAuthenticationHeaders:U}},19426:e=>{e.exports={name:"RicercheGoogleLike"}},54486:(e,t,r)=>{"use strict";r.r(t),r.d(t,{changeLayerProperties:()=>b,default:()=>E,locationChange:()=>w,saveId:()=>P,saveOption:()=>k});var n=r(71703),o=r(19426),i=r(24852),a=r.n(i),s=r(77580),l=r.n(s),u=r(10306),c=r.n(u);r(72500),r(20238);const{addLocaleData:d}=r(68195);d([...r(83836),...r(61017),...r(67249),...r(37179),...r(2082),...r(84425),...r(41146),...r(96864),...r(39118),...r(83416),...r(75784),...r(57545),...r(27058)]);let p,g={it:{code:"it-IT",description:"Italiano"},en:{code:"en-US",description:"English"},fr:{code:"fr-FR",description:"Français"},de:{code:"de-DE",description:"Deutsch"},es:{code:"es-ES",description:"Español"},zh:{code:"zh-ZH",description:"中文"},nl:{code:"nl-NL",description:"Nederlands"},hr:{code:"hr-HR",description:"Hrvatski"},pt:{code:"pt-PT",description:"Português"},vi:{code:"vi-VN",description:"tiếng Việt"},fi:{code:"fi-FI",description:"Suomi"},sv:{code:"sv-SE",description:"Svenska"},sk:{code:"sk-SK",description:"Slovak"}};const h=function(e,t){var r=e;return t.split(".").forEach((e=>{r=r?r[e]:null})),r||t};p={getLocale:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(g)[0],r=g.en?{key:"en",locale:g.en}:{key:t,locale:g[t]};let n=g[p.normalizeLocaleCode(e.locale||(navigator?navigator.language||navigator.browserLanguage:r.key))];return n?n.code:r.locale.code},normalizeLocaleCode:function(e){var t;if(null==e)t=void 0;else{let r=/^[a-z]+/i.exec(e);t=r&&r.length>0?r[0].toLowerCase():void 0}return t}},r(23317),r(61394),r(33437),r(46274),r(21389),r(38295),r(8073),r(97764),r(51312),r(55595);var f=r(28642),m=r.n(f);r(59154),new(m().Builder);r(36493),r(36551),r(40463),r(52766),r(62752),r(81938);const v=(e,t)=>((0,i.useEffect)((()=>{var t,r,n,o,i,a;Array.isArray(null==e||null===(t=e.maps)||void 0===t?void 0:t.results)&&(null==e||null===(o=e.maps)||void 0===o||o.results.filter((t=>{var r;return!(null!=e&&null!==(r=e.ricercheGoogleLike)&&void 0!==r&&r.ids.includes("map"+t.id))})).forEach((t=>{var r;e.saveId("map"+t.id);let n={headers:{Authorization:"Bearer "+(null==e||null===(r=e.security)||void 0===r?void 0:r.token)},method:"GET",url:"rest/geostore/data/"+t.id};c()(n).then((r=>{r.data.map.layers.filter((e=>"wms"===e.type)).forEach((r=>{e.saveOption({id:t.name+"layer"+r.id,type:"layer",searchvalue:t.name+" "+t.description+" "+r.title+" "+r.description,map:t,layer:r})}))})).catch((e=>{console.error("[STF] RicercheGoogleLike, get:",t.id,e)}))}))),Array.isArray(null==e||null===(r=e.dashboards)||void 0===r?void 0:r.results)&&(null==e||null===(i=e.dashboards)||void 0===i||i.results.filter((t=>{var r;return!(null!=e&&null!==(r=e.ricercheGoogleLike)&&void 0!==r&&r.ids.includes("dashboard"+t.id))})).forEach((t=>{e.saveId("dashboard"+t.id),e.saveOption({id:"dashboard"+t.id,type:"dashboard",searchvalue:t.name+""+t.description,dashboard:t})}))),Array.isArray(null==e||null===(n=e.geostories)||void 0===n?void 0:n.results)&&(null==e||null===(a=e.geostories)||void 0===a||a.results.filter((t=>{var r;return!(null!=e&&null!==(r=e.ricercheGoogleLike)&&void 0!==r&&r.ids.includes("geostory"+t.id))})).forEach((t=>{e.saveId("geostory"+t.id),e.saveOption({id:"geostory"+t.id,type:"geostory",searchvalue:t.name+""+t.description,geostory:t})})))}),[e.maps.results,e.dashboards.results,e.geostories.results]),(0,i.useEffect)((()=>{window.$("#searchField").selectize()[0].selectize.clear(),window.$("#searchField").selectize()[0].selectize.destroy(),window.$("#searchField").selectize({maxItems:1,persist:!1,create:!1,valueField:"id",labelField:"searchvalue",searchField:"searchvalue",placeholder:h(null==t?void 0:t.messages,"ricercheGoogleLike.search"),options:e.ricercheGoogleLike.options,items:[],plugins:["optgroup_columns"],optgroups:[{id:"map",name:h(null==t?void 0:t.messages,"ricercheGoogleLike.Maps")},{id:"layer",name:h(null==t?void 0:t.messages,"ricercheGoogleLike.Maps")},{id:"dashboard",name:"Dashboards"},{id:"geostory",name:"GeoStories"}],optgroupField:"type",optgroupLabelField:"name",optgroupValueField:"id",onChange:function(t){e.ricercheGoogleLike.options.filter((e=>e.id===t)).forEach((t=>{var r,n,o,i;null!=t&&null!==(r=t.map)&&void 0!==r&&r.id?(e.locationChange("/viewer/openlayers/"+t.map.id),null!=t&&null!==(i=t.layer)&&void 0!==i&&i.id&&setTimeout((()=>{e.changeLayerProperties(t.layer.id)}),2e3)):null!=t&&null!==(n=t.dashboard)&&void 0!==n&&n.id?e.locationChange("/dashboard/"+t.dashboard.id):null!=t&&null!==(o=t.geostory)&&void 0!==o&&o.id&&e.locationChange("/geostory/"+t.geostory.id)}))},render:{option:function(r,n){return"map"===r.type?'<div className="option" data-selectable="" data-value="'+r.id+'">'+r.map.name+"</div>":"layer"===r.type&&("dipendente",(null==e?void 0:e.group.filter((e=>"dipendente"===e.groupName)).length)>0)?'<div style="padding: 5px" className="option" data-selectable="" data-value="'+r.id+'">'+h(null==t?void 0:t.messages,"ricercheGoogleLike.map")+": "+r.map.name+"<br/>"+h(null==t?void 0:t.messages,"ricercheGoogleLike.layer")+": "+r.layer.title+"<br/>"+h(null==t?void 0:t.messages,"ricercheGoogleLike.name")+": "+r.layer.name+"<br/>"+h(null==t?void 0:t.messages,"ricercheGoogleLike.description")+": "+(r.layer.description||"")+"</div>":"layer"===r.type?'<div style="padding: 5px" className="option" data-selectable="" data-value="'+r.id+'">'+h(null==t?void 0:t.messages,"ricercheGoogleLike.map")+": "+r.map.name+"<br/>"+h(null==t?void 0:t.messages,"ricercheGoogleLike.layer")+": "+r.layer.title+"<br/>"+h(null==t?void 0:t.messages,"ricercheGoogleLike.description")+": "+(r.layer.description||"")+"</div>":"dashboard"===r.type?'<div style="padding: 5px" className="option" data-selectable="" data-value="'+r.id+'">'+r.dashboard.name+"<br/>"+r.dashboard.description+"</div>":"geostory"===r.type?'<div style="padding: 5px" className="option" data-selectable="" data-value="'+r.id+'">'+r.geostory.name+"<br/>"+r.geostory.description+"</div>":a().createElement("span",null)}}})}),[e.ricercheGoogleLike.options]),a().createElement("div",{className:"RicercheGoogleLike"},a().createElement("div",{className:"row"},a().createElement("div",{className:"col-md-12"},a().createElement("input",{type:"text",id:"searchField"})))));v.contextTypes={messages:l().object};const y=v;function w(e){return{type:"@@router/LOCATION_CHANGE",payload:{action:"PUSH",isFirstRendering:!1,location:{hash:"",key:void 0,pathname:e,search:"",state:void 0}}}}function b(e){return{type:"CHANGE_LAYER_PROPERTIES",newProperties:{visibility:!0},layer:e}}function P(e){return{type:"RICERCHEGOOGLELIKE:SAVEID",id:e}}function k(e){return{type:"RICERCHEGOOGLELIKE:SAVEOPTION",option:e}}const E={name:o.name,component:(0,n.connect)((e=>{var t,r,n,o;return{user:(null==e||null===(t=e.security)||void 0===t?void 0:t.user)||{},group:(null==e||null===(r=e.security)||void 0===r||null===(n=r.user)||void 0===n||null===(o=n.groups)||void 0===o?void 0:o.group)||[],security:null==e?void 0:e.security,localConfig:null==e?void 0:e.localConfig,maps:null==e?void 0:e.maps,dashboards:null==e?void 0:e.dashboards,geostories:null==e?void 0:e.geostories,layers:null==e?void 0:e.layers,ricercheGoogleLike:null==e?void 0:e.ricercheGoogleLike}}),{locationChange:w,changeLayerProperties:b,saveId:P,saveOption:k})(y),reducers:{ricercheGoogleLike:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{ids:[],options:[]},t=arguments.length>1?arguments[1]:void 0;if("RICERCHEGOOGLELIKE:SAVEID"===t.type)return{...e,ids:[...e.ids,t.id]};if("RICERCHEGOOGLELIKE:SAVEOPTION"===t.type)return{...e,options:[...e.options,t.option]};if("RICERCHEGOOGLELIKE:CLEARDATA"===t.type)return{...e,options:[],ids:[]};if("@@router/LOCATION_CHANGE"===t.type);else if("LOGOUT"===t.type)return{...e,options:[],ids:[]};return e}},epics:{},containers:{}}},18698:()=>{},45968:()=>{}}]);