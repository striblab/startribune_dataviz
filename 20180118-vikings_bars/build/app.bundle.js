!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var o=n(1);(0,function(e){return e&&e.__esModule?e:{default:e}}(o).default)({}),d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1PzsxrXT6YjRJlHH64m26HcfJMlfrOOLVIyKT_SMnIuw&sheet=bars",function(e,t){var n=t.bars;mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-95.712891,37.09024],zoom:2,minZoom:2});o.addControl(new mapboxgl.NavigationControl),o.scrollZoom.disable(),o.on("load",function(){!function(){var e="Alaska";d3.select("#listing").selectAll(".card").data(n.sort(function(e,t){return d3.ascending(e.STATE,t.STATE)})).enter().append("div").attr("class",function(e){return"card "}).attr("longitude",function(e){return e.LONG}).attr("latitude",function(e){return e.LAT}).attr("placeName",function(e){return e.NAME}).attr("pitch",function(e){return e.pitch}).attr("bearing",function(e){return e.bearing}).on("mousedown",function(e,t){$("#name, .pname").html(e.NAME),$("#address, .paddress").html("<div>"+e.DISPLAY_ADDRESS+"</div><div>"+e.CITY+", "+e.STATE+"</div>"),$("#phone, .pphone").html(e.PHONE),$("#website, .pwebsite").html("<a href='"+e.WEBSITE+"' target='new_'>Website</a> | <a href='https://maps.google.com?daddr="+e.ADDRESS+"' target='new_'>Directions</a>")}).html(function(t){e!=t.STATE&&(e=t.STATE),o.addLayer({id:"dots-"+t.INDEX,type:"circle",paint:{"circle-color":"rgba(79, 38, 131, 0.5)","circle-radius":5},source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[t.LONG,t.LAT]},properties:{title:t.NAME,icon:"monument"}}]}}});var n=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});return o.on("mousemove",function(e){var r=o.queryRenderedFeatures(e.point,{layers:["dots-"+t.INDEX]});if(o.getCanvas().style.cursor=r.length?"pointer":"",!r.length)return void n.remove();var i=r[0];n.setLngLat(e.lngLat).setHTML(i.properties.title).addTo(o)}),$(".zoom").click(function(){n.remove()}),"<div class='col'>"+t.NAME+"</div><div class='col places'>"+t.CITY+"</div><div class='col places'>"+t.STATE+"</div>"}),$("#filter_box").keyup(function(e){$(".card").hide();var t=$("#filter_box").val();$(".card").each(function(){-1!=$(this).text().toUpperCase().indexOf(t.toUpperCase())&&$(this).show()})}),$(".card").click(function(){var e=Math.floor(4*Math.random())+1,t=$(this).attr("pitch")/e,n=$(this).attr("bearing")/e;o.flyTo({center:[$(this).attr("longitude"),$(this).attr("latitude")],zoom:14,pitch:t,bearing:n}),$(".card").removeClass("selected"),$(this).addClass("selected")})}()}),$(".zoom").click(function(){o.flyTo({center:[-95.712891,37.09024],zoom:2,pitch:0,bearing:0}),$(".stat").html(""),$(".card").removeClass("selected"),$("#filter_box").val(""),$(".card").show()})})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(){function e(t){o(this,e),this.options=t||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(e,[{key:"setView",value:function(){if(this.options.useView){var e=void 0;if(_.find(this.options.views,function(t,n){return e=n,window.location.href.match(t)?n:void 0}),e){var t=document.createElement("div"),n=document.getElementsByTagName("body")[0];t.className="site-view site-view-"+e,n.insertBefore(t,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(e){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(e){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(e){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(t){e(null,{lat:t.coords.latitude,lng:t.coords.longitude})},function(){e("Unable to find your position.")}):e("Geolocation not available")}},{key:"goTo",value:function(e){var t=_.isElement(e)?e:e[0]&&_.isElement(e[0])?e[0]:document.getElementById(e);t&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(t):t.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(e){e=e||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",e),window.ga("send","pageview"))}}]),e}();t.default=function(e){return new c(e)}},function(e,t,n){"use strict";function o(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[i(t,e),"[",o,"]"].join(""):[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}function r(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(o[e]=n);void 0===o[e]&&(o[e]={}),o[e][t[1]]=n};case"bracket":return function(e,n,o){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===o[e]?void(o[e]=[n]):void(o[e]=[].concat(o[e],n)):void(o[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function i(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function a(e){return Array.isArray(e)?e.sort():"object"==typeof e?a(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var c=n(3),s=n(4);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=s({arrayFormat:"none"},t);var n=r(t),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)}),Object.keys(o).sort().reduce(function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=a(n):e[t]=n,e},Object.create(null))):o},t.stringify=function(e,t){t=s({encode:!0,strict:!0,arrayFormat:"none"},t);var n=o(t);return e?Object.keys(e).sort().map(function(o){var r=e[o];if(void 0===r)return"";if(null===r)return i(o,t);if(Array.isArray(r)){var a=[];return r.slice().forEach(function(e){void 0!==e&&a.push(n(o,e,a.length))}),a.join("&")}return i(o,t)+"="+i(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,n){"use strict";function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,s=o(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(r){c=r(n);for(var d=0;d<c.length;d++)a.call(n,c[d])&&(s[c[d]]=n[c[d]])}}return s}}]);
//# sourceMappingURL=app.bundle.js.map