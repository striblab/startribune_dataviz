!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var o=n(1);(0,function(t){return t&&t.__esModule?t:{default:t}}(o).default)({}),$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var r=$.urlParam("chart");null!=r&&($(".slide").hide(),$("#"+r).show()),"all"==r&&$(".slide").show(),d3.json("./data/agencies.json",function(t,e){d3.json("./data/counts.json",function(t,n){var o=e.agencies,r=n.counts,i=60791553,a=934;!function(t){d3.select("#agenciesList").selectAll(".district").data(o).enter().append("li").attr("class",function(t){return"district"}).on("click",function(t,e){d3.format("%.2f")(t.total/i),$("#thisDistrict").html(t.agency),$("#pct").html(t.count),$("#total").html(d3.format("$,.0f")(t.total)),"All Agencies"!=t.agency?($("#chartPortion .bar").css("height",d3.format("%.2f")(t.total/i+.1)),$("#chartCounts .bar").css("height",d3.format("%.2f")(t.count/a+.1))):($("#chartPortion .bar").css("height",d3.format("%.2f")(t.total/i-.1)),$("#chartCounts .bar").css("height",d3.format("%.2f")(t.count/a-.1))),s.load({columns:[["Total",t.y2007,t.y2008,t.y2009,t.y2010,t.y2011,t.y2012,t.y2013,t.y2014,t.y2015,t.y2016,t.y2017]]});for(var e=0;e<r.length;e++)if(r[e].agency==t.agency){u.load({columns:[["Payments",r[e].y2007,r[e].y2008,r[e].y2009,r[e].y2010,r[e].y2011,r[e].y2012,r[e].y2013,r[e].y2014,r[e].y2015,r[e].y2016,r[e].y2017]]});break}}).html(function(t,e){return e+".) "+t.agency})}(),$("#districtSelect").click(function(){$("#agenciesList, #filter").slideToggle(),$(".directions").toggle()}),$(".district").click(function(){$("#agenciesList, #filter").slideToggle(),$(".directions").toggle()}),$("#filter input").on("keyup search",function(t){$(".district").hide();var e=$("#filter input").val();$(".district").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})});var c={top:20,right:0,bottom:20,left:40},s=c3.generate({bindto:"#chartYear",padding:c,data:{x:"x",columns:[["x","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],["Total",6518409.18,1420910.08,6768494.82,2263038.36,10803924.29,5218351.25,6164615.62,4269012.44,5853555.49,3097124.18,8414117.5]],type:"bar"},legend:{show:!1},color:{pattern:["#3580A3"]},axis:{rotated:!0,y:{show:!1,min:0,padding:{bottom:0,top:0},tick:{values:[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],count:11,format:d3.format("$,.0f")}},x:{type:"category",tick:{multiline:!1}}}}),u=c3.generate({bindto:"#chartTime",padding:c,data:{x:"x",columns:[["x","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],["Payments",48,59,84,81,74,110,81,76,112,9,109]],type:"bar",labels:{format:{Payments:d3.format(",")}}},legend:{show:!1},color:{pattern:["#3580A3"]},axis:{rotated:!0,y:{show:!1,max:120,min:0,padding:{bottom:0,top:14},tick:{values:[2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],count:11,format:d3.format(",")}},x:{type:"category",tick:{multiline:!1}}}})})})},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(i),c=function(){function t(e){o(this,t),this.options=e||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(t,[{key:"setView",value:function(){if(this.options.useView){var t=void 0;if(_.find(this.options.views,function(e,n){return t=n,window.location.href.match(e)?n:void 0}),t){var e=document.createElement("div"),n=document.getElementsByTagName("body")[0];e.className="site-view site-view-"+t,n.insertBefore(e,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(t){return JSON.parse(JSON.stringify(t))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(t){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(t){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(t){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(e){t(null,{lat:e.coords.latitude,lng:e.coords.longitude})},function(){t("Unable to find your position.")}):t("Geolocation not available")}},{key:"goTo",value:function(t){var e=_.isElement(t)?t:t[0]&&_.isElement(t[0])?t[0]:document.getElementById(t);e&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(e):e.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(t){t=t||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",t),window.ga("send","pageview"))}}]),t}();e.default=function(t){return new c(t)}},function(t,e,n){"use strict";function o(t){switch(t.arrayFormat){case"index":return function(e,n,o){return null===n?[i(e,t),"[",o,"]"].join(""):[i(e,t),"[",i(o,t),"]=",i(n,t)].join("")};case"bracket":return function(e,n){return null===n?i(e,t):[i(e,t),"[]=",i(n,t)].join("")};default:return function(e,n){return null===n?i(e,t):[i(e,t),"=",i(n,t)].join("")}}}function r(t){var e;switch(t.arrayFormat){case"index":return function(t,n,o){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(o[t]=n);void 0===o[t]&&(o[t]={}),o[t][e[1]]=n};case"bracket":return function(t,n,o){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===o[t]?void(o[t]=[n]):void(o[t]=[].concat(o[t],n)):void(o[t]=n)};default:return function(t,e,n){if(void 0===n[t])return void(n[t]=e);n[t]=[].concat(n[t],e)}}}function i(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function a(t){return Array.isArray(t)?t.sort():"object"==typeof t?a(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var c=n(3),s=n(4);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=s({arrayFormat:"none"},e);var n=r(e),o=Object.create(null);return"string"!=typeof t?o:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)}),Object.keys(o).sort().reduce(function(t,e){var n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t},Object.create(null))):o},e.stringify=function(t,e){e=s({encode:!0,strict:!0,arrayFormat:"none"},e);var n=o(e);return t?Object.keys(t).sort().map(function(o){var r=t[o];if(void 0===r)return"";if(null===r)return i(o,e);if(Array.isArray(r)){var a=[];return r.slice().forEach(function(t){void 0!==t&&a.push(n(o,t,a.length))}),a.join("&")}return i(o,e)+"="+i(r,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,n){"use strict";function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,s=o(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(r){c=r(n);for(var d=0;d<c.length;d++)a.call(n,c[d])&&(s[c[d]]=n[c[d]])}}return s}}]);
//# sourceMappingURL=app.bundle.js.map