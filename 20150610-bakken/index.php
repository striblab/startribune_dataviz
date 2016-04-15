<!-- <!DOCTYPE html>
<html>
<head> -->

<?php
    $blog_path = "http://apps.startribune.com/news/20150610-bakken/index.php";
    readfile('http://www.startribune.com/partner/header/307001991/');
    $shareURL = "http://strib.mn/1T7ZgUZ";
    $clickabilityID = "307001991";
    $shareTitle = "StarTribune - Bakken oil trains and public safety";
    $shareDescription = "Minnesota serves as a crossroads for Bakken rail, but is it prepared for an oil train disaster?";
    $shareImage = "http://apps.startribune.com/news/20150610-bakken/img/AX184_1807_9.JPG";
?>

    <meta property="og:url" content="<?php echo $blog_path; ?>" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="<?php echo $shareTitle; ?>" />
    <meta property="og:description" content="<?php echo $shareDescription; ?>" />
    <meta property="og:image" content="<?php echo $shareImage; ?>" />

    <title>StarTribune.com: News, weather, sports from Minneapolis, St. Paul and Minnesota</title>
    
    <meta charset="utf-8"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"VQcCVV9UGwQHUFhQBwY="};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o?o:e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({QJf3ax:[function(t,e){function n(t){function e(e,n,a){t&&t(e,n,a),a||(a={});for(var c=s(e),f=c.length,u=i(a,o,r),d=0;f>d;d++)c[d].apply(u,n);return u}function a(t,e){f[t]=s(t).concat(e)}function s(t){return f[t]||[]}function c(){return n(e)}var f={};return{on:a,emit:e,create:c,listeners:s,_events:f}}function r(){return{}}var o="nr@context",i=t("gos");e.exports=n()},{gos:"7eSDFh"}],ee:[function(t,e){e.exports=t("QJf3ax")},{}],3:[function(t){function e(t){try{i.console&&console.log(t)}catch(e){}}var n,r=t("ee"),o=t(1),i={};try{n=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(i.console=!0,-1!==n.indexOf("dev")&&(i.dev=!0),-1!==n.indexOf("nr_dev")&&(i.nrDev=!0))}catch(a){}i.nrDev&&r.on("internal-error",function(t){e(t.stack)}),i.dev&&r.on("fn-err",function(t,n,r){e(r.stack)}),i.dev&&(e("NR AGENT IN DEVELOPMENT MODE"),e("flags: "+o(i,function(t){return t}).join(", ")))},{1:23,ee:"QJf3ax"}],4:[function(t){function e(t,e,n,i,s){try{c?c-=1:r("err",[s||new UncaughtException(t,e,n)])}catch(f){try{r("ierr",[f,(new Date).getTime(),!0])}catch(u){}}return"function"==typeof a?a.apply(this,o(arguments)):!1}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function n(t){r("err",[t,(new Date).getTime()])}var r=t("handle"),o=t(6),i=t("ee"),a=window.onerror,s=!1,c=0;t("loader").features.err=!0,t(5),window.onerror=e;try{throw new Error}catch(f){"stack"in f&&(t(1),t(2),"addEventListener"in window&&t(3),window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)&&t(4),s=!0)}i.on("fn-start",function(){s&&(c+=1)}),i.on("fn-err",function(t,e,r){s&&(this.thrown=!0,n(r))}),i.on("fn-end",function(){s&&!this.thrown&&c>0&&(c-=1)}),i.on("internal-error",function(t){r("ierr",[t,(new Date).getTime(),!0])})},{1:10,2:9,3:7,4:11,5:3,6:24,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],5:[function(t){t("loader").features.ins=!0},{loader:"G9z0Bl"}],6:[function(t){function e(){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var n=t("ee"),r=t("handle"),o=t(1),i=t(2);t("loader").features.stn=!0,t(3),n.on("fn-start",function(t){var e=t[0];e instanceof Event&&(this.bstStart=Date.now())}),n.on("fn-end",function(t,e){var n=t[0];n instanceof Event&&r("bst",[n,e,this.bstStart,Date.now()])}),o.on("fn-start",function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),o.on("fn-end",function(t,e){r("bstTimer",[e,this.bstStart,Date.now(),this.bstType])}),i.on("fn-start",function(){this.bstStart=Date.now()}),i.on("fn-end",function(t,e){r("bstTimer",[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),n.on("pushState-start",function(){this.time=Date.now(),this.startPath=location.pathname+location.hash}),n.on("pushState-end",function(){r("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),"addEventListener"in window.performance&&(window.performance.addEventListener("webkitresourcetimingbufferfull",function(){r("bstResource",[window.performance.getEntriesByType("resource")]),window.performance.webkitClearResourceTimings()},!1),window.performance.addEventListener("resourcetimingbufferfull",function(){r("bstResource",[window.performance.getEntriesByType("resource")]),window.performance.clearResourceTimings()},!1)),document.addEventListener("scroll",e,!1),document.addEventListener("keypress",e,!1),document.addEventListener("click",e,!1)}},{1:10,2:9,3:8,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],7:[function(t,e){function n(t){i.inPlace(t,["addEventListener","removeEventListener"],"-",r)}function r(t){return t[1]}var o=t("ee").create(),i=t(1)(o),a=t("gos");if(e.exports=o,n(window),"getPrototypeOf"in Object){for(var s=document;s&&!s.hasOwnProperty("addEventListener");)s=Object.getPrototypeOf(s);s&&n(s);for(var c=XMLHttpRequest.prototype;c&&!c.hasOwnProperty("addEventListener");)c=Object.getPrototypeOf(c);c&&n(c)}else XMLHttpRequest.prototype.hasOwnProperty("addEventListener")&&n(XMLHttpRequest.prototype);o.on("addEventListener-start",function(t){if(t[1]){var e=t[1];"function"==typeof e?this.wrapped=t[1]=a(e,"nr@wrapped",function(){return i(e,"fn-",null,e.name||"anonymous")}):"function"==typeof e.handleEvent&&i.inPlace(e,["handleEvent"],"fn-")}}),o.on("removeEventListener-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{1:25,ee:"QJf3ax",gos:"7eSDFh"}],8:[function(t,e){var n=t("ee").create(),r=t(1)(n);e.exports=n,r.inPlace(window.history,["pushState"],"-")},{1:25,ee:"QJf3ax"}],9:[function(t,e){var n=t("ee").create(),r=t(1)(n);e.exports=n,r.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),n.on("raf-start",function(t){t[0]=r(t[0],"fn-")})},{1:25,ee:"QJf3ax"}],10:[function(t,e){function n(t,e,n){t[0]=o(t[0],"fn-",null,n)}var r=t("ee").create(),o=t(1)(r);e.exports=r,o.inPlace(window,["setTimeout","setInterval","setImmediate"],"setTimer-"),r.on("setTimer-start",n)},{1:25,ee:"QJf3ax"}],11:[function(t,e){function n(){f.inPlace(this,p,"fn-")}function r(t,e){f.inPlace(e,["onreadystatechange"],"fn-")}function o(t,e){return e}function i(t,e){for(var n in t)e[n]=t[n];return e}var a=t("ee").create(),s=t(1),c=t(2),f=c(a),u=c(s),d=window.XMLHttpRequest,p=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"];e.exports=a,window.XMLHttpRequest=function(t){var e=new d(t);try{a.emit("new-xhr",[],e),u.inPlace(e,["addEventListener","removeEventListener"],"-",o),e.addEventListener("readystatechange",n,!1)}catch(r){try{a.emit("internal-error",[r])}catch(i){}}return e},i(d,XMLHttpRequest),XMLHttpRequest.prototype=d.prototype,f.inPlace(XMLHttpRequest.prototype,["open","send"],"-xhr-",o),a.on("send-xhr-start",r),a.on("open-xhr-start",r)},{1:7,2:25,ee:"QJf3ax"}],12:[function(t){function e(t){var e=this.params,r=this.metrics;if(!this.ended){this.ended=!0;for(var i=0;c>i;i++)t.removeEventListener(s[i],this.listener,!1);if(!e.aborted){if(r.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var a=t.responseType,f="arraybuffer"===a||"blob"===a||"json"===a?t.response:t.responseText,u=n(f);if(u&&(r.rxSize=u),this.sameOrigin){var d=t.getResponseHeader("X-NewRelic-App-Data");d&&(e.cat=d.split(", ").pop())}}else e.status=0;r.cbTime=this.cbTime,o("xhr",[e,r,this.startTime])}}}function n(t){if("string"==typeof t&&t.length)return t.length;if("object"!=typeof t)return void 0;if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if("undefined"!=typeof FormData&&t instanceof FormData)return void 0;try{return JSON.stringify(t).length}catch(e){return void 0}}function r(t,e){var n=i(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}if(window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)){t("loader").features.xhr=!0;var o=t("handle"),i=t(2),a=t("ee"),s=["load","error","abort","timeout"],c=s.length,f=t(1);t(4),t(3),a.on("new-xhr",function(){this.totalCbs=0,this.called=0,this.cbTime=0,this.end=e,this.ended=!1,this.xhrGuids={}}),a.on("open-xhr-start",function(t){this.params={method:t[0]},r(this,t[1]),this.metrics={}}),a.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),a.on("send-xhr-start",function(t,e){var r=this.metrics,o=t[0],i=this;if(r&&o){var f=n(o);f&&(r.txSize=f)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof e.onload))&&i.end(e)}catch(n){try{a.emit("internal-error",[n])}catch(r){}}};for(var u=0;c>u;u++)e.addEventListener(s[u],this.listener,!1)}),a.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),a.on("xhr-load-added",function(t,e){var n=""+f(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),a.on("xhr-load-removed",function(t,e){var n=""+f(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),a.on("addEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-added",[t[1],t[2]],e)}),a.on("removeEventListener-end",function(t,e){e instanceof XMLHttpRequest&&"load"===t[0]&&a.emit("xhr-load-removed",[t[1],t[2]],e)}),a.on("fn-start",function(t,e,n){e instanceof XMLHttpRequest&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),a.on("fn-end",function(t,e){this.xhrCbStart&&a.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{1:"XL7HBI",2:13,3:11,4:7,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],13:[function(t,e){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");return!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname),r.sameOrigin=!e.hostname||e.hostname===document.domain&&e.port===n.port&&e.protocol===n.protocol,r}},{}],14:[function(t,e){function n(t){return function(){r(t,[(new Date).getTime()].concat(i(arguments)))}}var r=t("handle"),o=t(1),i=t(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var a=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];o(a,function(t,e){window.NREUM[e]=n("api-"+e)}),e.exports=window.NREUM},{1:23,2:24,handle:"D5DuLP"}],gos:[function(t,e){e.exports=t("7eSDFh")},{}],"7eSDFh":[function(t,e){function n(t,e,n){if(r.call(t,e))return t[e];var o=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return t[e]=o,o}var r=Object.prototype.hasOwnProperty;e.exports=n},{}],D5DuLP:[function(t,e){function n(t,e,n){return r.listeners(t).length?r.emit(t,e,n):void(r.q&&(r.q[t]||(r.q[t]=[]),r.q[t].push(e)))}var r=t("ee").create();e.exports=n,n.ee=r,r.q={}},{ee:"QJf3ax"}],handle:[function(t,e){e.exports=t("D5DuLP")},{}],XL7HBI:[function(t,e){function n(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:i(t,o,function(){return r++})}var r=1,o="nr@id",i=t("gos");e.exports=n},{gos:"7eSDFh"}],id:[function(t,e){e.exports=t("XL7HBI")},{}],G9z0Bl:[function(t,e){function n(){var t=p.info=NREUM.info,e=f.getElementsByTagName("script")[0];if(t&&t.licenseKey&&t.applicationID&&e){s(d,function(e,n){e in t||(t[e]=n)});var n="https"===u.split(":")[0]||t.sslForHttp;p.proto=n?"https://":"http://",a("mark",["onload",i()]);var r=f.createElement("script");r.src=p.proto+t.agent,e.parentNode.insertBefore(r,e)}}function r(){"complete"===f.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=t("handle"),s=t(1),c=window,f=c.document;t(2);var u=(""+location).split("?")[0],d={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-686.min.js"},p=e.exports={offset:i(),origin:u,features:{}};f.addEventListener?(f.addEventListener("DOMContentLoaded",o,!1),c.addEventListener("load",n,!1)):(f.attachEvent("onreadystatechange",r),c.attachEvent("onload",n)),a("mark",["firstbyte",i()])},{1:23,2:14,handle:"D5DuLP"}],loader:[function(t,e){e.exports=t("G9z0Bl")},{}],23:[function(t,e){function n(t,e){var n=[],o="",i=0;for(o in t)r.call(t,o)&&(n[i]=e(o,t[o]),i+=1);return n}var r=Object.prototype.hasOwnProperty;e.exports=n},{}],24:[function(t,e){function n(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(0>o?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=n},{}],25:[function(t,e){function n(t){return!(t&&"function"==typeof t&&t.apply&&!t[i])}var r=t("ee"),o=t(1),i="nr@wrapper",a=Object.prototype.hasOwnProperty;e.exports=function(t){function e(t,e,r,a){function nrWrapper(){var n,i,s,f;try{i=this,n=o(arguments),s=r&&r(n,i)||{}}catch(d){u([d,"",[n,i,a],s])}c(e+"start",[n,i,a],s);try{return f=t.apply(i,n)}catch(p){throw c(e+"err",[n,i,p],s),p}finally{c(e+"end",[n,i,f],s)}}return n(t)?t:(e||(e=""),nrWrapper[i]=!0,f(t,nrWrapper),nrWrapper)}function s(t,r,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<r.length;c++)s=r[c],a=t[s],n(a)||(t[s]=e(a,f?s+o:o,i,s))}function c(e,n,r){try{t.emit(e,n,r)}catch(o){u([o,e,n,r])}}function f(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){u([r])}for(var o in t)a.call(t,o)&&(e[o]=t[o]);return e}function u(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=r),e.inPlace=s,e.flag=i,e}},{1:24,ee:"QJf3ax"}]},{},["G9z0Bl",4,12,6,5]);</script>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="google-site-verification" content="bLXTXkzm4dJ8hcJy1LXawtxXxGP3JhInARj69uCiMiM" />
    <meta http-equiv="Set-Cookie" content="section=News; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionPath=/; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionInfo=; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionIndex=; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
   
    <style type="text/css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.7.0/nv.d3.min.css");
  @import url("./css/styles.css");
  @import url("http://stage-www.startribune.com/static/css/screen.css?d=1429128267");
  @import url("js/jquery.bxslider.css");
  @import url("https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css");
  @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.7.0/mapbox-gl.css");
  </style> 

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.css" />
    <link rel="stylesheet" href="//cdn.datatables.net/responsive/1.0.6/css/dataTables.responsive.css" />
    <link rel="canonical" href="http://www.startribune.com/"/>
    <link rel="shortcut icon" href="http://stmedia.startribune.com/designimages/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="http://stmedia.startribune.com/designimages/apple-touch-icon.png"/>
    <link rel="stylesheet" href="http://m.startribune.com/packages/star-tribune/www-startribune-com/css/main.css?d=1441050022"/>
    <link rel="stylesheet" href="http://assets.startribune.com/static/css/screen.css?d=1441910795">
    <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<!-- CUSTOM STYLE TWEAKS -->
    <style>
      .native-ad { display:none !important; }
      #js-navigation-menu { display:block !important; }
      .one-half { display:inline-block !important; float:left; }
      #testDiv { height:400px; background-color:#ddd; width:85%; float:right; }
      .article-share { width:100%; }
    </style>

  <style>
  /*dataviz styles*/
    body { 
      margin:0; 
      padding:0; 
      overflow:hidden; 
      font-size: 0.8125em;
      text-rendering: optimizeLegibility;
      font: 13px/1.231 sans-serif;
    }
    .mapperWrapper { width: 100%; margin-left:auto; margin-right:auto; text-align:center; }
    #map { width:100%; height:450px !important;  }
    #map2 { width:100%; height:auto; float:left; text-align:center;}
    #map3 { width:100%; height:375px; float:left; text-align:center;}
    #map2 svg, #map4 svg { width:100%;}
    .map-legend .swatch { width:20px; height:20px; float:left; margin-right:10px; }
    .leaflet-popup-close-button { display: none; }
    .leaflet-popup-content-wrapper { pointer-events: none; }
    .leaflet-control-attribution{ display:none !important; }
    .leaflet-top { z-index: 200 !important; }
    .mapbox-logo{ display:none !important; }
    #wrapper { width:80%; padding:20px; float:left; }
    .myButton2 { background-color:#2ca25f; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:3px; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family: "Benton Sans",Helvetica,Arial,sans-serif;
  font-size: 1em; padding:14px; text-decoration:none; font-weight:900; width:100%; }
    .myButton2:hover { background-color:#5cbf2a !important; }
    .myButton2:active { background-color:#5cbf2a; }
    button:focus { outline:0 !important; }
    .breaker { clear:both; padding:5px; }
    .sizer { height:200px; }
    .bx-wrapper { width:97%; }
    .bx-wrapper .bx-pager.bx-default-pager a { background: #ddd !important; }
    .bx-pager.bx-default-pager a.active { background: #61bd1a !important; }
    .bx-viewport { padding:20px; height:400px; margin-right:100px; width:98%}
    .title { /*font-size:24px; font-weight:900; font-family: Popular; text-align:center; margin-bottom:10px;*/
    color: #333;
  font-family: "Whitman Display Condensed Bold",Georgia,Times,serif;
  font-size: 26px;
  line-height: 26px;
  margin:10px 0 15px 0; }
    .chatter { font-size:20px; }
    .land { fill: #ddd; }
    .border { fill: none; stroke: #fff; stroke-linejoin: round; stroke-linecap: round; }
    .bubble { fill: brown; fill-opacity: .5; stroke: #fff; stroke-width: .5px; }
    .bubble :hover { stroke: #000; }
    .legend circle { fill: none; stroke: #ccc; }
    .legend text { fill: #777; font: 10px sans-serif; text-anchor: middle; }
    #chart1 { max-width:100%; width:100%; display: block; text-align:center; margin-left:auto; margin-right:auto; height:510px; }
    #chart1 svg { max-width:100% !important; width:100%; height:100%; }
    .source { font-size:12px !important; color:#ccc !important;font-family: "Benton Sans",Helvetica,Arial,sans-serif;padding:5px 0 10px 0; }
    .title { text-align:center; font-family:Popular; }
    #credits{ padding:25px; margin-top:20px;}
    #nerdbox { padding:25px; }
    .credit_block{width: 100%; margin-bottom: 10px; }
    h3 { font-size:24px;}
    .source_link { float:left; padding-top:5px; width:70%;}
    .source_row {clear:both; height:8px;}
    .download { margin:10px 0 0 15px; }
    .download_links { padding-top:10px;}
    #intro_photo { max-width:100%; width:100%; display: block; text-align:center; margin-left:auto; margin-right:auto; }
    .chatter { height:auto; font-size:20px; }
    .bxslider li a { }
    .social_share_m { display:none; }

    .qIcon { width:10%; float:left; margin:10px; display:none; padding-bottom:2%; }
    .qIcon img { width:100%; display:block; }
    .question { font-size:16px; }

    .map-legends, .map-legend { z-index: 3 !important; }

    .bxslider li { display:block; margin-bottom:40px; border: 1px solid #ddd; width:auto; height:auto !important; padding:10px; padding-bottom:5%;}

    .legend2 label, .legend2 span { display:block; float:left; height:3px; width:48%; padding:2px; margin:2px; text-align:center; font-size:12px; color:#808080; }
    #legendInner { width:200px; height:20px; }

    .background { fill: none; pointer-events: all; }
    #states { fill: #aaa; }
    #state-borders { fill: none; stroke: #fff; stroke-width: 2px; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
    #states .active { fill: #333 !important; fill-opacity: 1 !important; }
    .faded { fill-opacity: 0.5 !important; }
    #states .active:hover { fill:#333 !important; }
    #states path:hover{ fill:#333 !important; }
    .tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-family: "Benton Sans",Helvetica,Arial,sans-serif;
  font-size: 1em; }
    .legend label, .legend span { display:block; float:left; height:15px; width:30px; text-align:center; font-size:11px;  color:#808080; }
    #evac { float:right; }

    .countyName { font-weight:bold; font-size:14px; }
    .prevalence { font-size: 14px; }

    .dataTables_scrollBody { border-left: 1px solid #111; border-bottom: 0 !important; }
      th{ visibility:hidden; }
    td{ padding: 8.88px !important; font-family: "Benton Sans",Helvetica,Arial,sans-serif;
  font-size: 13px;line-height:15px;}
    tr.odd td.sorting_1 { background-color: #efefef; }
    tr.even td.sorting_1 { background-color: #efefef; }
    tr.even { background-color: #fff !important; }
    tr.odd { background-color: #fff !important; }
    .dataTables_length{ display:none; }
    .dataTable{ margin-bottom:18px; }
    .dataTables_filter{ display:none;}
    .dataTables_length, .dataTables_info { display:none; }
    .dataTables_info { display:none;}
    .dataTables_scrollHead { display:none;}
    th { background: #ccc !important; }
    table.dataTable.no-footer{ margin-bottom:0 !important; }
    table { font-size:12px; }
    .dataTables_scrollBody thead{ visibility:hidden;height:0 !important; }
    th.sorting_asc, th.sorting_desc { background:#333 !important; font-weight:bold; color:#fff;}
    th { display: table-cell;vertical-align: initial; }
    th { padding:5px !important; }
    .description-cell { display:block; width:100%; }
    table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before, table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before { height: 20px; width: 20px; display: block; color: white; border: 2px solid white; position:static !important; border-radius: 16px; text-align: center; line-height: 20.5px; box-shadow: 0 0 3px #444; box-sizing: content-box; content: '+'; float: left; font-weight: bold; margin-right: 5px; background-color: #31b131; font-size: 18px; }
    td.child::before { display:none !important; }
    .p-break { margin:25px;}

    #facebookbtn-link-m:hover, #twitterbtn-link-m:hover, .comments:hover { cursor:pointer; }

    .nvtooltip { position: absolute; background-color: rgba(255,255,255,1); padding: 10px; border: 1px solid #000; z-index: 10000; width:auto; font-family: "Benton Sans",Helvetica,Arial,sans-serif; font-size: 16px; transition: opacity 200ms linear; -moz-transition: opacity 200ms linear; -webkit-transition: opacity 200ms linear; transition-delay: 200ms; -moz-transition-delay: 200ms; -webkit-transition-delay: 200ms; -moz-border-radius: 0; pointer-events: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
    .nvtooltip h3 { margin: 0; padding: 5px; text-align: center; font-weight:900; background:white !important; font-size:14px; }
    .nvtooltip p { margin: 0; padding: 0; text-align: center; }
    .nvtooltip span { display: inline-block; margin: 2px 0; }
    .nvtooltip-pending-removal { position: absolute; pointer-events: none; }

    #navigate { width:15%; min-width:150px; padding:2px;max-width:160px; /*border: 1px solid black;*/ text-align:center; background:white; float:right; margin-top:18px; }
    .f-nav{ position: fixed; top: 50px;  }
    .myButton2 { background-color: #61bd1a; border: 0; border-radius: 0; color: #ffffff; cursor: pointer; display:block; font-family: "Benton Sans",Helvetica,Arial,sans-serif; font-size: 16px; font-weight: 900; moz-border-radius: 16px; padding: 13px; text-decoration: none; webkit-border-radius: 16px; width: 95%; margin:5px;}
    .myButton2:hover { background-color: #378f00 !important; }
    .myButton2:active { background-color: #378f00; }
    button:focus { outline: 0 !important; }
    p { font-family: "Poynter Serif RE",Georgia,Times,serif; font-size: 15px; line-height: 140%; margin-bottom: 14px; letter-spacing: -0.3px; }
    .action { text-align:center; }
    .article-author-hcard__email { font-size:14px; }
    .credit_block p {margin:0;}
    .credit_block h5 { font-size:14px; margin: 10px 0 10px 0; }

    .leaflet-control-mapbox-geocoder, .leaflet-control-mapbox-geocoder-wrap { position:absolute; border-radius: 0 !important; top:422px; width:100%; margin:0 !important; z-index:900;}
    .leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input[type=text], .leaflet-control-mapbox-geocoder-form  { background: 0 0; border: 0; width: 100% !important; padding: 0 0 0 10px; height: 26px; outline: 0; }
    .leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input[type=text], .leaflet-control-mapbox-geocoder-form { background: 0 0; border: 0; width: 1200px; padding: 0 0 0 10px; height: 26px; font-size: 20px; outline: 0; }
    .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-wrap { width: 1200px; opacity: 1; }
    #image { width:150px; }
    #map2IMG { text-align:center; }

    .dtr-data { font-size: 1.05em; line-height: 120%; }
  </style>

  <style type="text/css"> 
/*page template styles*/
    .specialContentWrapper{ width:100% !important; }
    .l-container { text-align:left !important; width:970px; margin-left:auto; margin-right:auto; }
    .nav-section-mod.col-2 li { text-align:center !important; }
    .nav-shortcuts-inner { text-align:center !important; }
    .l-container:nth-child(2) { width:100%; }
    .l-navigation-shortnav-container { width:100%; min-width:100%; }
    .l-section-right { display:none; }
    .l-section-inner { width:95%; border-right:0;}
    .l-footer-inner, .l-section-container { width:90% !important; }
    .nav-branding-mod, .nav-shortcuts-mod { width:100% !important;  }
    .nav-utility-mod {  width: 100%; margin: 0 auto; max-width: 100% !important; min-width: 100% !important; }
    #zone-none-block-1-leaderboard iframe { width:100% !important; }
    #zone-none-block-1-leaderboard, #zone-none-block-3-leaderboard { display: none !important; }
    #zone-none-block-3-leaderboard div iframe { width:100% !important; }
    .navbar-fixed-top { display:none !important; }
    .site-footer { display:none !important; }
    .nav-menu .menu-left, .nav-menu .menu-right { visibility:hidden !important; display:none !important; }
    .l-section-inner { padding-right: 0; width:100%; } 
    a { color: #333; text-decoration: none; }
    a:hover { text-decoration:none !important; color:inherit !important; }
    .article-share { position:relative !important; float:left !important; margin-left:0 !important; }
    .fyre .fyre-comment-head .fyre-comment-username { cursor: default !important; font-size: 12px !important; line-height: 25px !important; text-decoration: none !important; color: #000 !important; }
    .fyre-post-button { border-radius:0 !important; }
    .fyre { background-color:#fff !important; }
    .fyre .fyre-comment-article .fyre-comment-wrapper section p, .fyre .fyre-comment-stream .fyre-comment-wrapper section p { font-size:1em !important; }
    .fyre .fyre-comment-article .fyre-comment-head {  margin-top:0 !important; }
    .fyre .fyre-auth { margin:0px 0 0 0 !important; }
    .fyre .fyre-auth .fyre-login-bar, .fyre .fyre-auth .fyre-user-loggedout { color:#61bf1a !important; text-decoration:none !important; }
     #mobileMenu { display:none !important; }

    @media only screen and (min-width:650px) {
      .git:hover { background-color:#378f00 !important; }
      .sort-link-mid:hover, .sort-link:hover { background-color:#eee !important; cursor:pointer; }
    }

    @media (max-width: 970px) {
      .l-container { text-align:left !important; width:100% !important; margin:0; }
      .footer-navigation-mod { display:block !important; margin-top:30px; }
    }

    @media (max-width: 933px) {
      #mobileMenu, .site-footer { display:none !important; }
      #articleHeader {margin-top:40px;}
      .nav-shortcuts-inner { display:none !important; }
      .nav-utility-btn:before { width:30px; height:30px; }
      .nav-utility-mod { height:50px; }
      .nav-utility-inner-right { float: right !important;  width:auto !important}
      .nav-utility-inner-center { float:right !important; text-align: right; width:auto !important; margin-top:10px !important; }
      .nav-utility-mod { width:100% !important; min-width:auto !important; max-width:auto!important; float:left !important; border-bottom: 1px solid #000; }
      .nav-branding-mod {/* margin-top:0 !important;*/ display:none !important; }
      .nav-utility-inner { width:auto; }
      .nav-utility-inner .btn-subscribe { display:none !important; }
      .btn-eedition { display:none !important; }
      .js-nav-subscriptions-dropdown { display:none !important; }
      .dpp, .navigation-shortnav-ad { display:none !important; }
      .show-divider { border-left:0 !important; }
      .nav-logo-link { height: 38px !important; width: 260px !important; }
      .nav-utility-btn.show-divider:after { display:none; }
      #wrapper { padding:0; }
      /*.nav-utility-btn { text-indent:-5000px; }
      .nav-utility-btn::before { text-indent:2px; }*/
      .nav-weather-mod, .nav-section-mod { margin-top:40px !important; }
      .logInBtn { display:none !important; }
      .navbar-fixed-top { display:block !important; }
      .site-footer { display:block !important; }
      .global-nav-mod { display:none !important; } 
      #specialContentWrapper { margin-top:50px !important; width:100%; }
      .l-section-container { width:100% !important; }
      .l-section-inner { padding-right: 0; width:100%; } 
      .grid, .nav-menu .menu-left { visibility:visible !important; display:block !important; }
    }

        @media (max-width: 850px) {
      #navigate { display:none; }
      #wrapper{ width:98%; }
      .social_share_m { display:block; width:100%; }
    }
    
    @media (max-width: 740px) {
        .article-share { display:none; }
        #testDiv { width:100%; }
    }

       @media (max-width: 799px) {
      .footer-navigation-links.col-1, .footer-navigation-links.col-2 { float:none !important; width:100%; }
      .footer-navigation-col { width:31% !important; }
      .footer-social-links-label  { display:none; }
      .footer-branding-mod { margin-bottom:20px; }
      .footer-social-links a { width:50px; height:50px; }
    }

    @media (max-width: 742px) {
      .nav-weather-mod, .nav-section-mod { margin-top:40px !important; }
      .logInBtn { display:none !important; }
    }

    @media (max-width: 720px) {
      .footer-navigation-col, .footer-top-mod { float:none !important; min-width:300px !important; clear:both !important; margin-top:10px !important; }
      .footer-navigation-links li  a { font-size:20px; }
      .footer-group-h { font-size:24px; }
      #dataSidebar{ display:none !important;}
      #sorting_mobile { display:block !important; }
      #leftPane, #articlePane, #infobox { width:100% !important; }
      .footer-social-links a { width:95px; height:95px; }
      .footer-social-mod { margin-bottom: 20px;  float:none !important; width:100% !important; clear:both !important; }
      .footer-social-links { text-align: left; margin-top:20px; }
      #links_m { display:block; }
      .search-branding-mod{ display:none; }
    }
   </style>

<!-- HEADER SCRIPTS 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>-->

    <!-- Optimizely -->
    <script src="//cdn.optimizely.com/js/3084170745.js"></script>
    <!-- End Optimizely --> 

    <!-- START Amazon Match Buy (header) -->
    <script type='text/javascript' src='http://c.amazon-adsystem.com/aax2/amzn_ads.js'></script><script type='text/javascript'>
    try {
        amznads.getAds('3151');
    } catch(e) { /*ignore*/}
    </script>
    <!-- END Amazon Match Buy (header) -->        
   
    <script>document.domain = window.location.host.replace(/:\d+/, '').split('.')[window.location.host.replace(/:\d+/, '').split('.').length - 2] + '.' + window.location.host.replace(/:\d+/, '').split('.')[window.location.host.replace(/:\d+/, '').split('.').length - 1];</script>
    <script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/libs/modernizr.js?d=1441050019"></script>
    <script type="text/javascript">var _sf_startpt = (new Date()).getTime()</script>
    <script>window.jQuery || document.write( '<script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/libs/jquery.min.js?d=1441050019"><\/script>' )</script>
    <script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/libs/jquery.onAppear.min.js?d=1441050019"></script>
    
    <!-- Google DFP ad library -->
    <script type='text/javascript'>
    (function() {
    var useSSL = 'https:' == document.location.protocol;
    var src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt_mobile.js';
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    })();
    </script>

    <!-- START Amazon Match Buy (targeting) -->
    <script type='text/javascript'>
    var key = 'amznslots';
    if (typeof amznads !== 'undefined') { var values = amznads.getTokens(); }  
    </script>
    <script type='text/javascript'>
    try { amznads.setTargetingForGPTAsync('amznslots'); } catch(e) { /*ignore*/}
    </script>
    <!-- END Amazon Match Buy (targeting) -->    
    
                
    <!-- BEGIN Krux Control Tag -->
    <script class="kxct" data-id="JmCjGa6h" data-timing="async" data-version="1.9" type="text/javascript">
      window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);
      (function(){
        var k=document.createElement('script');k.type='text/javascript';k.async=true;
        var m,src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
        k.src = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
          (location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid=JmCjGa6h";
        var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
      }());
    </script>
    <!-- END Krux control tag -->

    <!-- BEGIN Krux interchange tag -->
    <script>
    window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);
    (function(){
      function retrieve(n){
        var m, k='kx'+n;
        if (window.localStorage) {
            return window.localStorage[k] || "";
        } else if (navigator.cookieEnabled) {
            m = document.cookie.match(k+'=([^;]*)');
            return (m && unescape(m[1])) || "";
        } else {
            return '';
        }
      }
      Krux.user = retrieve('user');
    })();
    </script>
    <!-- END Krux interchange tag -->

    <script type="text/javascript">
    var gptadslots = [];
    googletag.cmd.push( function() { gptadslots[0] = googletag.defineSlot('/7932/mobile/mob_startribune.com/mob_homepage', [[162,30]],'div-gpt-ad-localAdsPageLink').setTargeting('pos', '1').addService(googletag.pubads()); });
    </script>

    <script type="text/javascript">
        var dartSlotString = '/7932/mobile/mob_startribune.com/mob_homepage';
        var adType = 'home';

        if ( jQuery( window ).width() <= 320 && jQuery( window ).height() <= 459 ) {
            var instreamAdSizes = [ [ 1, 3 ], [ 234, 60 ], [ 320, 50 ] ];
        }
        else {
            var instreamAdSizes = [ [ 1, 3 ], [ 234, 60 ], [ 320, 50 ], [ 300, 250 ] ];
        }
        googletag.cmd.push( function () {
            googletag.pubads().disableInitialLoad();
            googletag.pubads().enableAsyncRendering();
            googletag.pubads().collapseEmptyDivs( true );
            googletag.enableServices();
        } );
    </script>
      
    <!-- Grunticon script -->
    <script>
        window.grunticon = function ( e ) {
            if ( e && 3 === e.length ) {
                var t = window, n = !!t.document.createElementNS && !!t.document.createElementNS( "http://www.w3.org/2000/svg", "svg" ).createSVGRect && !!document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" ), A = function ( A ) {
                    var o = t.document.createElement( "link" ), r = t.document.getElementsByTagName( "script" )[ 0 ];
                    o.rel = "stylesheet", o.href = e[ A && n ? 0 : A ? 1 : 2 ], r.parentNode.insertBefore( o, r )
                }, o = new t.Image;
                o.onerror = function () {
                    A( !1 )
                }, o.onload = function () {
                    A( 1 === o.width && 1 === o.height )
                }, o.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            }
        };
        grunticon( [ "http://m.startribune.com/packages/star-tribune/www-startribune-com/css/icons.data.svg.css?d=1441049953", "http://m.startribune.com/packages/star-tribune/www-startribune-com/css/icons.data.png.css?d=1441049953", "http://m.startribune.com/packages/star-tribune/www-startribune-com/css/icons.fallback.css?d=1441049953" ] );</script>
    <noscript>
        <link href="http://m.startribune.com/packages/star-tribune/www-startribune-com/css/icons.fallback.css?d=1441049953" rel="stylesheet">
    </noscript>
    <!-- End Grunticon script -->

    <script>
      var domain = "http\x3A\x2F\x2Fm.startribune.com";
      var zipCode = 55488;
      var articleId = '324180431';
    </script>
 
    <script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/libs/AppMeasurement.js?d=1441050019" type="text/javascript"></script>

    <script>
        dataLayer = [];
        dataLayer.push( { 'login2': '' } );
        dataLayer.push( { 'contentType': 'section\x20front' } );
        dataLayer.push( { 'pageName': 'm.startribune.com\x20Front' } );
        dataLayer.push( { 'ch': 'mobile\x20homepage' } );
        dataLayer.push( { 'subsection': 'StarTribune.com' } );
    </script>
<!-- </head>
<body> -->
<header class="site-header navbar navbar-default navbar-fixed-top sb-slide">
  <div class="nav-btn-left icon-button icon-nav-button"></div>
  <div class="nav-btn-right icon-button icon-nav-user"></div>
  <a id="header-logo" class="icon-startribune-logo" href="http://m.startribune.com"></a>
</header> 

<div id="specialContentWrapper">
<!-- mark me bro -->

<div id="articleHeader">
<div id="articleHeadline" class="article-headline">Is Minnesota prepared for an oil train disaster?</div>
<div class="article-byline-mod">
<div id="bylines" class="article-byline"><strong>By <a href="http://www.startribune.com/dan-browning/10644516/">Dan Browning</a>, <a href="http://www.startribune.com/maryjo-webster/303594441/">MaryJo Webster</a>, <a href="http://www.startribune.com/jeff-hargarten/274254381/">Jeff Hargarten</a></strong></div> 
<div class="article-dateline">June 12, 2015 - 10:45AM</div>
</div>
<p>Minnesota serves as a crossroads for trains carrying volatile crude oil from North Dakota’s Bakken shale formations. How prepared is the state for an oil train disaster? The following slides explore the safety precautions and concerns surrounding Bakken oil trains using data analysis, charts and maps.</p>
</div>

<div id="navigate">
<a href="#intro"><button id="introB" class="myButton2">Intro</button></a>
<a href="#evacuation"><button id="evacuationB" class="myButton2">Evacuation</button></a>
<a href="#population"><button id="populationsB" class="myButton2">Population</button></a>
<a href="#accidents"><button id="accidentsB" class="myButton2">Accidents</button></a>
<a href="#training"><button id="trainingB" class="myButton2">Training</button></a>
<a href="#derailmentsS"><button id="derailmentsB" class="myButton2">Derailments</button></a>
<a href="#faq"><button id="faqB" class="myButton2">FAQ</button></a>
<a href="#creditsS"><button id="creditsB" class="myButton2">Credits</button></a>
<div class="social_share">
<!-- SHARE BUTTONS -->

<aside class="article-share">
<!--   <div class="share__textsize">
    <a id="js-textsize-btn" data-linkname="Text size" data-linktype="text-resize" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-share">
      <div class="share-icon"></div>
      <div class="share-label">
        <span>Text size</span>
      </div>
    </a>
      </div> -->
  
  <div class="share__comments clickQS">
      <a href="#comments" data-linkname="Comment on this story" data-linktype="share-comment" data-modulename="Article" data-moduletype="zone1-content" data-position="0-2-share">
        <div class="share-icon"></div>
        <div class="share-label">
          <span class="share-txt">comment</span><span class="share-count">0</span>
        </div>
      </a>
            </div>
      
  <div class="share__facebook clickQS">
      <a class="st-share-link" data-st-share-count-selector=".share-count-facebook" data-st-share-service="facebook" data-st-share-url="<? echo $shareURL; ?>" target="_blank" data-linkname="Share on Facebook" data-linktype="share-facebook" data-modulename="Article" data-moduletype="zone1-content" data-position="0-2-share" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $shareURL; ?>">
      <div class="share-icon"></div>
      <div class="share-label">
        <span class="share-txt">share</span><span class="share-count-facebook">0</span>
      </div>
    </a>
      </div>
  <div class="share__twitter clickQS">
      <a class="st-share-link" data-st-share-count-selector=".share-count-twitter" data-st-share-image="<? echo $shareImage; ?>" data-st-share-service="twitter" data-st-share-url="<? echo $shareURL; ?>" data-st-count-url="<? echo $shareURL; ?>" target="_blank" data-linkname="Share on Twitter" data-linktype="share-twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-3-share" href="<? echo $shareURL; ?>">
      <div class="share-icon"></div>
      <div class="share-label">
        <span class="share-txt">tweet</span><span class="share-count-twitter">0</span>
      </div>
    </a>
      </div>
  
      <div class="share__email clickQS">
      <a href="http://scripts.startribune.com/email_article/?section=%2F<?php echo $shareSection; ?>&amp;story_id=<?php echo $clickabilityID; ?>&amp;headline=<?php echo $shareTitle; ?>"id="js-email-share-btn" data-id="<? echo $clickabilityID; ?>" data-linkname="Email" data-linktype="share-email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share">
        <div class="share-icon"></div>
        <div class="share-label">
          <span>email</span>
        </div>
      </a>
          </div>
    
      <div class="share__print clickQS">
      <a id="js-print-btn" data-linkname="Print" data-linktype="share-comment" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share" href="#" onclick="window.print();return false;">
        <div class="share-icon"></div>
        <div class="share-label">
          <span>Print</span>
        </div>
      </a>
          </div>
  
      <div class="share-more">
      <div class="share-label">more</div>
      <div class="share-more-popover">
        <div class="share-more-group">
          <span class="share-more-label">Share on:</span>
          <a class="st-share-link linkedin-pw-placeholder" data-st-share-service="linkedin" data-st-share-url="<?php echo $shareURL; ?>" data-st-share-title="<?php echo $shareTitle; ?>" data-st-share-summary="<?php $shareDescription; ?>" data-st-share-source="Star Tribune" target="_blank" data-linkname="Share on LinkedIn" data-linktype="share-linkedin" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $shareURL ?>&amp;title=<?php echo $shareTitle ?>summary=<?php echo $shareDescription; ?>&amp;source=Star+Tribune"><span class="share-more-icon share__linkedin">Share on LinkedIn</span></a>
                    <a class="st-share-link googleplus-pw-placeholder" data-st-share-service="googleplus" data-st-share-url="<?php echo $shareURL; ?>" target="_blank" data-linkname="Share on Google+" data-linktype="share-linkedin" data-modulename="Article" data-moduletype="zone1-content" data-position="0-5-share" href="https://plus.google.com/share?url=<?php echo $shareURL; ?>"><span class="share-more-icon share__googleplus">Share on Google+</span></a>
                    <a class="st-share-link pinterest-pw-placeholder" data-st-share-service="pinterest" data-st-share-image="<?php echo $shareImage; ?>" data-st-share-description="<?php echo $shareDescription; ?>" data-st-share-url="<?php echo $shareTitle; ?>" target="_blank" data-linkname="Share on Pinterest" data-linktype="share-pinterest" data-modulename="Article" data-moduletype="zone1-content" data-position="0-6-share" href="http://www.pinterest.com/pin/create/button/?url=<?php echo $shareURL; ?>&amp;media=<?php echo $shareImage; ?>&amp;description=<?php echo $shareDescription; ?>"><span class="share-more-icon share__pinterest">Share on Pinterest</span></a>
                  </div>
        <div class="share-more-group">
          <span class="share-more-label">Copy shortlink:</span>
          <input class="share-more-link-input" id="MoreShortlink" type="text" value="<?php echo $shareURL; ?>">
        </div>
        <div class="share-more-group">
          <span class="share-more-label">Purchase:</span>
                   <a href="http://reprints.ygsgroup.com/m/startribune/" target="_blank" class="share-more-tool tool__orderreprint" data-linkname="Order Reprint" data-linktype="share-reprint" data-modulename="Article" data-moduletype="zone1-content" data-position="0-7-share">Order Reprint</a>
                  </div>
      </div>
    </div>
  
</aside>
</div>
</div>

<div id="wrapper">

<div id='intro' class="anchor"></div>
<ul class="bxslider">
  <li>

<div class="title">Bakken oil trains and public safety</div>

<img id="intro_photo" src="img/AX184_1807_9.JPG"/>

<div class="source">An oil train moves through St Paul, Min July 25, 2014. Connor Lake.</div>
<div class="chatter">
<p class="p-break"></p>
<p>It’s been 25 years since a death involving crude oil transportation by rail has occurred in the United States, and hazardous materials incidents on railroads have decreased by more than 90 percent since 1980. But oil train traffic is increasing, and recent accidents and resulting evacuations have underscored the risks.</p>
<p class="p-break"></p>
<p>Those hazards became clear in July 2013 in the town of Lac-Mégantic, in the Canadian province of Quebec, where an untended freight train carrying Bakken crude oil rolled down a hill, derailed and burst into flames, killing 47 people.</p>
<p class="p-break"></p>
<p>The U.S. Department of Transportation predicts trains hauling crude oil or ethanol will derail 10 times a year, on average, over the next two decades, causing more than $4 billion in damage and killing perhaps hundreds of people if the incidents occur in densely populated corridors, the Associated Press reported in February.</p>
<p class="p-break"></p>
<p>The Star Tribune took a closer look at rail incidents and the emergency preparedness improvements the state of Minnesota launched in 2014 in case such an incident occurred here.</p>
</div>
  </li>

<div id='evacuation' class="anchor"></div>
  <li>
  
  <div class="title">Is your home or work in a potential evacuation zone?</div>

<div class="mapperWrapper">

<div id='legend' style='display:none;'>
<div id="legendInner">
  <nav class='legend2 clearfix'>
    <span style='background:#900;'></span>
    <span style='background:#333;'></span>
    <span style='background:#fff;'>Buffer Zone</span>
    <span style='background:#fff;'>Rail Line</span>
    </nav>
    </div>
</div>
  <div id='map'></div>
  </div>
<div class="source">Source: Minnesota Department of Transportation </div>
<div class="chatter">
<div class="action">Type your address in the “Search” box, in the lower left, to zoom the map to your location.</div>
<p class="p-break"></p>
<p>On average, seven trains a day roll through Minnesota carrying 3.3 million gallons of crude oil. This map shows the lines that carry the Bakken crude and the half-mile-wide corridors on either side. That’s the area designated by public safety officials as the evacuation zone in the event of a significant leak or fire. Some 326,000 people live within those corridors.</p>
<p class="p-break"></p>
<p>Officials would order an evacuation if a leak posed a major health threat or a fire broke out, said Kevin Reed, operations branch director for Minnesota’s Homeland Security and Emergency Management division. “It’s not automatic,” he said.</p>

</div>
  </li>

<div id='population' class="anchor"></div>
  <li>
  
<div class="title">Population centers along the rail lines </div>

<div id='map3'><svg width="100%" height="400" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid"></svg></div>

<div class="breaker"></div>
<div class="source">Source: Star Tribune analysis</div>
<div class="chatter">
<p>A Star Tribune analysis of the evacuation corridors found that an incident in rural Minnesota might result in fewer than 10 people being evacuated, while one in northeast Minneapolis might result in the evacuation of as many as 8,000.</p>
<p class="p-break"></p>
<p>This map shows some of the population centers along the rail and the number of people who live within a half-mile. The default evacuation zone for a train carrying crude oil is a half-mile radius around the wreckage. If an explosion occurs or is likely, the zone would be extended to a mile.</p>
<p class="p-break"></p>
<p>Reed, the state emergency management official, noted that crude oil incidents have resulted in “fire balls” rather than explosions, however. Explosions, he said, produce shrapnel, which has the potential to travel farther. Photos taken after crude oil train fires near Charleston, W. Va., and Casselton, N.D., show that the tanker cars burned but were otherwise left virtually intact, he said.</p>
<p class="p-break"></p>
<p>Reed said the last rail incident he could recall that resulted in an evacuation in Minnesota took place in 2012. A semitrailer truck struck a train near Plummer, killing the driver and puncturing a 30,000-gallon rail tanker that was filled with a flammable, aromatic petroleum-based concentrate. Residents around Plummer, population 292, were evacuated for about two hours.</p>
</div>
  </li>

<div id='accidents' class="anchor"></div>
  <li>
  
<div class="title">Minnesota train accidents have been declining</div>

<div id='chart1'><svg></svg></div>
<div class="source">Source: Federal Railroad Administration</div>
<div class="chatter">
<p>Despite the recent incidents involving oil trains, the number of derailments or highway-crossing accidents, both nationally and in Minnesota, has generally declined.</p>
<p class="p-break"></p>
<p>From 2000 to 2014, there were 1,203 railway incidents of all types in Minnesota, according to a Star Tribune analysis. Derailments were the most common type, accounting for nearly two out of three incidents. But they are trending downward, ranging from a high of 65 in 2001 to a low of 39 in 2012 before rebounding to 47 in 2013 and 2014.</p>
<p class="p-break"></p>
<p>The railroad mishaps killed 16 people and injured 79. Four out of five incidents resulting in injuries were attributed to vehicles at rail crossings.</p>
<p class="p-break"></p>
<p>That’s compared with 10 injuries, and no deaths, associated with freight train derailments and other accidents that did not involve collisions with highway vehicles.</p>
<p class="p-break"></p>
<p>This year, the Legislature allocated $5 million for rail projects, less than one-sixth of what Gov. Mark Dayton called for spending. Most of that money will be applied toward 38 rail grade crossing projects, which are projected to cost MnDOT $8.8 million, a spokesman said.</p>
</div>
<div class="breaker"></div>
  </li>
<div id='training' class="anchor"></div>
  <li>
  
  <div class="title">State beefing up training for first responders</div>

  <div id='map2IMG'><img src="img/mntraining.png" /></svg></div>
<div class='legend' id="evac">
  <nav class='legend clearfix'>
    <span style='background:#fff;'>1</span>
    <span style='background:#C6A29E;'></span>
    <span style='background:#A45958;'></span>
    <span style='background:#9B161F'></span>
    <span style='background:#210507'></span>
    <span style='background:#fff;'>25</span>
</div>

<div class="source">Source: Minnesota Department of Public Safety</div>
<div class="breaker"></div>
<div class="chatter">
<p>Legislation that took effect in July 2014 tightened public oversight of Minnesota railroads, increased safety inspections and added specialized training for the 343 fire departments along the oil shipment routes.</p>
<p class="p-break"></p>
<p>Public safety officials say the training sessions are on schedule, and expect to have 110 departments through the program by the end of July 2015. As of mid-May, 2,382 first-responders had gone through the training in 96 sessions.</p>
<p class="p-break"></p>
<p>Click on any county in the map to see the number of departments that have been trained, as of mid-May 2015.
</p>

</div>
  </li>

<div id='derailmentsS' class="anchor"></div>
  <li>
  
<div class="title">Recent oil train derailments in United States and Canada</div>

<div id='map4IMG'><img src="img/usa_derailments.png" /></svg></div>
<div class="source">Source: Congressional Research Service report and media reports</div>
<div class="breaker"></div>

<div class="table-responsive">
<table id ="derailments" class="display" width="100%">
  <thead>
    <tr>
      <th class="date-cell">date</th>
      <th class="city-cell">city</th>
      <th class="location-cell">location</th>
      <th class="description-cell">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="firstRow">
      <td class="date-cell">3/27/13</td>
      <td class="city-cell">Parkers Prairie</td>
      <td class="location-cell">Minnesota</td>
      <td class="description-cell">A mile-long train hauling oil from Canada derailed, spilling 15,000 gallons of crude. There were no injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">5/21/13</td>
      <td class="city-cell">Jansen</td>
      <td class="location-cell">Saskatchewan</td>
      <td class="description-cell">A freight train jumped the tracks in southeastern Saskatchewan and spilled more than 91,000 litres of oil. Canadian Pacific Rail said five cars derailed, but only one leaked its contents.</td>
    </tr>
    <tr>
      <td class="date-cell">7/5/13</td>
      <td class="city-cell">Lac Megantic</td>
      <td class="location-cell">Quebec</td>
      <td class="description-cell">A train with 72 loaded tank cars of crude oil from North Dakota moving from Montreal, Quebec, to St. John, New Brunswick, stopped at Nantes, Quebec, at 11 p.m. The operator and sole railroad employee aboard the train secured it and departed, leaving the train on shortline track with a descending grade of about 1.2%. At about 1 a.m., it appears the train began rolling down the descending grade toward the town of Lac-Magantic, about 30 miles from the U.S. border. Near the center of town, 63 tank cars derailed, resulting in multiple explosions and subsequent fires. There were 47 fatalities and extensive damage to the town. 2,000 people were evacuated. The initial determination was that the braking force applied to the train was insufficient to hold it on the 1.2% grade and that the crude oil released was more volatile than expected.</td>
    </tr>
    <tr>
      <td class="date-cell">10/19/13</td>
      <td class="city-cell">Gainford</td>
      <td class="location-cell">Alberta</td>
      <td class="description-cell">Nine tank cars of propane and four tank cars of crude oil from Canada derailed as a Canadian National train was entering a siding at 22 miles per hour. About 100 residents were evacuated. Three of the propane cars burned, but the tank cars carrying oil were pushed away and did not burn. No one was injured or killed.</td>
    </tr>
    <tr>
      <td class="date-cell">11/7/13</td>
      <td class="city-cell">Aliceville</td>
      <td class="location-cell">Alabama</td>
      <td class="description-cell">A train hauling 90 cars of crude oil from North Dakota to a refinery near Mobile, Ala., derailed on a section of track through a wetland near Aliceville, AL. Thirty tank cars derailed and some dozen of these burned. No one was injured or killed. The derailment occurred on a shortline railroadÕs track that had been inspected a few days earlier. The train was travelling under the speed limit for this track. </td>
    </tr>
    <tr>
      <td class="date-cell">12/10/13</td>
      <td class="city-cell">Cheektowaga</td>
      <td class="location-cell">New York</td>
      <td class="description-cell">Several tank cars carrying crude oil derailed on a train traveling from Chicago to Philadelphia. There were no leaks or injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">12/30/13</td>
      <td class="city-cell">Cassleton</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">An eastbound BNSF Railway train hauling 106 tank cars of crude oil struck a westbound train carrying grain that shortly before had derailed onto the eastbound track. Some 34 cars from both trains derailed, including 20 cars carrying crude, which exploded and burned for over 24 hours. About 1,400 residents of Casselton were evacuated but no injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">1/7/14</td>
      <td class="city-cell">Plaster Rock</td>
      <td class="location-cell">New Brunswick</td>
      <td class="description-cell">Seventeen cars of a mixed train hauling crude oil, propane, and other goods derailed likely due to a sudden wheel or axle failure. Five tank cars carrying crude oil caught fire and exploded. The train reportedly was delivering crude from Manitoba and Alberta to the Irving Oil refinery in Saint John, New Brunswick. About 45 homes were evacuated but no injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">1/20/14</td>
      <td class="city-cell">Philadelphia</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">Seven cars of a 101-car CSX train, including 6 carrying crude oil, derailed on a bridge over the Schuylkill River. No injuries and no leakage were reported, but press photographs showed two cars, one a tanker, leaning over the river.</td>
    </tr>
    <tr>
      <td class="date-cell">1/31/14</td>
      <td class="city-cell">New Augusta</td>
      <td class="location-cell">Mississippi</td>
      <td class="description-cell">About 50 people were evacuated in this southeast Mississippi community after 18 cars of an 85-car train carrying chemicals derailed. No one was hurt in the accident. An ethanol-based product spilled, which led to the precautionary evacuation.</td>
    </tr>
    <tr>
      <td class="date-cell">2/13/14</td>
      <td class="city-cell">Vandergrift</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">Twenty-one tank cars of a 120-car train derailed outside Pittsburgh. Nineteen of the derailed cars were carrying crude oil from western Canada, and four of them released. There was no fire or injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">4/30/14</td>
      <td class="city-cell">Lynchburg</td>
      <td class="location-cell">Virginia</td>
      <td class="description-cell">Fifteen cars in a crude oil train derailed in the downtown area of this city. Three cars caught fire, and some cars derailed into a river along the tracks. The immediate area surrounding the derailment was evacuated. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">5/9/14</td>
      <td class="city-cell">LaSalle</td>
      <td class="location-cell">Colorado</td>
      <td class="description-cell">Six cars of a 100-car Union Pacific crude oil train derailed, spilling a small amount of oil from one tank car into a nearby ditch. No one was injured. </td>
    </tr>
    <tr>
      <td class="date-cell">11/13/14</td>
      <td class="city-cell">Casselton</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">A train carrying lumber and other products derailed, striking a passing empty oil train traveling in the other direction. No one was hurt. </td>
    </tr>
    <tr>
      <td class="date-cell">12/1/14</td>
      <td class="city-cell">Bluffton</td>
      <td class="location-cell">Minnesota</td>
      <td class="description-cell">More than 30 train cars derailed a half-mile east of Bluffton. The tank cars on the BNSF train were empty. Other rail cars were carrying sugar, corn meal, lumber and other non-hazardous materials. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">2/2/15</td>
      <td class="city-cell">Philadelphia</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">An 111-car freight train carrying crude oil partially derailed. No injuries or spills were reported. The cars remained upright.</td>
    </tr>
    <tr>
      <td class="date-cell">2/4/15</td>
      <td class="city-cell">Dubuque</td>
      <td class="location-cell">Iowa</td>
      <td class="description-cell">A Canadian Pacific train carrying ethanol derailed along the Upper Mississippi. The Environmental Protection Agency estimated that about 55,000 gallons spilled, some of which burned and some of which was recovered from the river.</td>
    </tr>
    <tr>
      <td class="date-cell">2/14/15</td>
      <td class="city-cell">Timmins</td>
      <td class="location-cell"> Ontario</td>
      <td class="description-cell">Twenty-nine of 100 cars went off the track near Timmins, Ontario, spilling oil and causing a fire.</td>
    </tr>
    <tr>
      <td class="date-cell">2/16/15</td>
      <td class="city-cell">Mount Carbon</td>
      <td class="location-cell">West Virginia</td>
      <td class="description-cell">A train carrying more than 100 tankers of crude oil derailed, sending at least one into the Kanawha River, igniting at least 14 tankers and sparking a house fire. One person was treated for potential inhalation issues, but no other injuries were reported. Nearby residents were evacuated.</td>
    </tr>
    <tr>
      <td class="date-cell">3/1/15</td>
      <td class="city-cell">New Orleans</td>
      <td class="location-cell">Louisiana</td>
      <td class="description-cell">Two railroad tank cars carrying crude oil derailed in eastern New Orleans. There were no reported spills or injuries.The accident occurred while the train was traveling at </td>
    </tr>
    <tr>
      <td class="date-cell">3/5/15</td>
      <td class="city-cell">Galena</td>
      <td class="location-cell">Illinois</td>
      <td class="description-cell">A BNSF train derailed in a rural area. Twenty-one of the 105 cars, containing Bakken formation crude oil, left the track and caught fire. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">3/7/15</td>
      <td class="city-cell">Gogama</td>
      <td class="location-cell"> Ontario</td>
      <td class="description-cell">A fireball erupted among oil tank cars, and 38 cars broke free of the train. At least one rolled into the Makami River. A number of cars spilled oil, igniting a large pool fire which destoyed the steel rail bridge over the river. About 700 feet of track was destoyed.</td>
    </tr>
    <tr class="lastRow">
      <td class="date-cell">5/6/15</td>
      <td class="city-cell">Heimdal</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">Residents of Heimdal were evacuated for about one day, after a train carrying crude oil derailed, caught fire and exploded. The six cars that caught fire were carrying about 180,000 gallons of oil, according to BNSF. The six cars were a model slated to be phased out or retrofitted by 2020 under a recently announced federal rule.</td>
    </tr>
  </tbody>
</table>
</div>
  </li>

 <div id='faq' class="anchor"></div>
 <li>

  <div class="title">Frequently-asked questions about Bakken oil trains</div>
<p class="p-break"></p>
<div id='facts'>
<div class="question"><strong>Which railroad companies carry crude shipments in Minnesota?</strong>
<p>The BNSF Railway and Canadian Pacific Railway originate almost all crude oil shipments from North Dakota's Bakken oil field. The Fort Worth, Texas-based BNSF (Burlington Northern Santa Fe) railroad transports 75 percent of all North Dakota-produced oil.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="question"><strong>What is Bakken oil? What are its qualities? Do local Minnesota refineries process this oil?</strong>
<p>Oil from the Bakken field is characterized as a "sweet, light" crude, with the same consistency as diesel or jet fuel. The oil comes from deep beds of shale and is extracted through the application of new technology, including directional drilling and hydraulic fracturing. Bakken oil contains a high percentage of natural gas liquids, which increases its flammability. Minnesota refineries normally do not process Bakken crude, since they are designed to refine heavy sour crude oils such as Canadian tar sand oil.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="question"><strong>How much crude travels through Minnesota, including the Twin Cities, by rail each day?</strong>
<p>On average, seven oil-carrying trains pass through Minnesota daily, with as many as six through the Twin Cities. Each train carries 3.3 million gallons of oil among 110 loaded cars.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="question"><strong>Where are these shipments going?</strong>
<p>The majority of the Bakken oil is shipped from oil fields in North Dakota through Minnesota to various refineries in the Midwest and Eastern seaboard.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="question"><strong>What steps are railroads taking to prevent future accidents?</strong>
<p>Railroad companies have voluntarily agreed to slow down oil trains in 45 "high-threat urban areas," including the Twin Cities. As of March 1, 2014, US DOT and the railroads have agreed to limit speeds in urban areas to 40 mph. Previous speeds were 50 mph. or more. Further steps include more frequent track and car inspections, stricter operating rules and better hazmat documentation. BNSF in particular is taking steps to build new cars with thicker walls and more quickly retiring older cars. Railroads are cooperating on training upgrades for local responders to meet current needs.</p></div>

</div>
<div class="source"><a href="http://www.dot.state.mn.us/ofrw/crude-by-rail/crude_faqs.html#four" target="new_">Source: Minnesota Department of Transportation</a></div>
  </li>

<div id='creditsS' class="anchor"></div>
  <li>
<div style="clear:both"></div>
<div id="nerdbox">
  <h3>Data Sources</h3>
  
  <div class="source_links">
  <p class='source_row'><div class="source_link"><a href="http://www.fra.dot.gov/Page/P0001" target="new_">Federal Railroad Administration</a></div></p>
  <p class='source_row'><div class="source_link"><a href="https://dps.mn.gov/Pages/default.aspx" target="new_">Minnesota Department of Public Safety</a></div></p>
  <p class='source_row'><div class="source_link"><a href="http://www.dot.state.mn.us/" target="new_">Minnesota Department of Transportation</a></div></p>
  <p class='source_row'><div class="source_link"><a href="http://www.census.gov/" target="new_">U.S. Census Bureau</a></div> </p>

  </div>

</div>

<div class="download_links">
  <div class="download"><a href="https://github.com/striblab/startribune_dataviz/tree/master/20150610-bakken/data/oiltraindata.zip?raw=true" target="new_"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
</div>

<div id="credits">
    <h3>Credits</h3>

  <div class="credit_block">
  <h5>Reporting</h5>
  <p>Dan Browning</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Dan.Browning@startribune.com?subject=Bakken Oil Trains" data-linkname="Matt.DeLong@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Dan.Browning@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4493" data-linkname="612-673-4493" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4493</a> <a class="article-author-hcard__twitter" href="http://twitter.com/browningstrib" target="_blank" data-linkname="browningstrib" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">browningstrib</a></p>
  </div>

  <div class="credit_block">
  <h5>Reporting</h5>
  <p>MaryJo Webster</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:MaryJo.Webster@startribune.com?subject=Bakken Oil Trains" data-linkname="MaryJo.Webster@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">MaryJo.Webster@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-1789" data-linkname="612-673-1789" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-1789</a> <a class="article-author-hcard__twitter" href="http://twitter.com/maryjowebster" target="_blank" data-linkname="maryjowebster" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">maryjowebster</a></p>
  </div>

     <div class="credit_block">
  <h5>Data Visualization and Presentation</h5>
  <p>Jeff Hargarten</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Jeff.Hargarten@startribune.com?subject=Bakken Oil Trains" data-linkname="Jeff.Hargarten@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Jeff.Hargarten@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4642" data-linkname="612-673-4642" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4642</a> <a class="article-author-hcard__twitter" href="http://twitter.com/jeffhargarten" target="_blank" data-linkname="jeffhargarten" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">jeffhargarten</a></p>
  </div>

  <div class="social_share_m"> </div>
  </li>
</ul>

</div>

</div>
<!--close specialContentWrapper-->

<div id="killSticky"></div>

<script src="http://i.po.st/share/script/post-widget.js#publisherKey=56d2hkmk6d6lmd6llqb2" type="text/javascript"></script>

<p style="clear:both"></p>

<!-- COMMENTS -->

<section class="comments-section" id="comments">
    <script type="text/javascript">
        if (typeof commentQueryStrings === 'undefined') {
            var commentQueryStrings = {};
        }
    </script>
    
    <script type="text/javascript">
        commentQueryStrings[window.location.pathname] = JSON.parse('{"pageName":"pageName=Medtronic%20buys%20name%20rights%20to%20plaza%20in%20front%20of%20new%20stadium","channel":"channel=business","server":"server=startribune.com","prop1":"c1=D%3Dg","prop2":"c2=V20150914","prop3":"c3=story","prop5":"c5=","prop7":"c7=comments","prop16":"c16="}');
    </script>

    <div class="comments">
        <a href="#" class="js-comments-show comments-count-link">
            <div class="comments-count"></div>
            <span class="comments-show js-comments-show-txt" data-analytics-url="http://metrics.startribune.com/b/ss/nmminneapolis/1/JS-1.4.2/46900">View Comments</span>
        </a>
    </div>

    <script src='http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre.js'></script>
    <script type="text/javascript">
        var networkConfig = {"network": "startribune.fyre.co"}
        networkConfig.authDelegate = new fyre.conv.RemoteAuthDelegate();

        var convConfig = {"siteId":"356396","articleId":<? echo "" + $clickabilityID + ""; ?>,"el":"livefyre","collectionMeta":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aXRsZSI6Ik1lZHRyb25pYyBidXlzIG5hbWUgcmlnaHRzIHRvIHBsYXphIGluIGZyb250IG9mIG5ldyBWaWtpbmdzIHN0YWRpdW0iLCJ1cmwiOiJodHRwOlwvXC93d3cuc3RhcnRyaWJ1bmUuY29tXC9idXNpbmVzc1wvMzI3NDMwMzMxLmh0bWwiLCJ0YWdzIjoiXC9idXNpbmVzcyIsImNoZWNrc3VtIjoiMjk3YjIxYjg3ZTc2N2M2NDYwNWYwZmVhZDJkODU0Y2UiLCJhcnRpY2xlSWQiOiIzMjc0MzAzMzEifQ.Om6J9gsfho3unG8iLoU9tE9UPoyLfjmhgVfPriV0h20","datetimeFormat":{"minutesUntilAbsoluteTime":1,"absoluteFormat":"MMM. d, yy<br>h:mm a"}};
        var commentLoginText = "Log in/register to comment";
        var commentEmailOnly = 0;
        var commentPage = {};
        commentPage.userToken = null;
        commentPage.userAuth = false;
        commentPage.registerUsername = false;

        networkConfig.authDelegate.login = function (handlers) {
            window.location.href = 'http://' + document.domain + '/login?commentRedirect=true&path=' + encodeURIComponent( document.URL );
        };

        commentPage.onCommentCountUpdated = function (number) {
            commentCount.checkLivefyreLoaded(number);
        };

        var checkUserToken = function (cb) {
            if (jQuery.cookie('st_usr_livefyre_token')) {
                commentPage.userAuth = true;
                commentPage.userToken = jQuery.cookie('st_usr_livefyre_token');
            }
            cb();
        };

        if (jQuery.cookie('register_st_user_name')) {
            commentPage.registerUsername = true;
        }
        if (jQuery.cookie('register_st_user_name') && jQuery.cookie('st_usr_livefyre_token')) {
            jQuery.removeCookie('register_st_user_name');
            commentPage.registerUsername = false;
        }

        if (commentPage.registerUsername) {
            commentLoginText = "Please create a username for your account.";
            actionUrl = "http://users.startribune.com/";
            networkConfig.authDelegate.login = function (handlers) {
                window.location.href = 'http://users.startribune.com';
            }
        }

        var customStrings = {
            signIn: commentLoginText,
            postButton: "Post your comment",
            postReplyButton: "Post your comment",
            flagButton: "Report as inappropriate"
        };

        networkConfig["strings"] = customStrings;

        fyre.conv.load(networkConfig, [convConfig], function (sdk) {
            checkUserToken(
                    function () {
                        if (commentPage.userToken) {
                            fyre.conv.login(commentPage.userToken);
                        }
                    }
            );
            sdk.on('commentCountUpdated', commentPage.onCommentCountUpdated);
            sdk.on('initialRenderComplete', function () {
                jQuery('.fyre-comment a').contents().unwrap();
                commentCount.checkLivefyreLoaded(false, false);
            });
        });
    </script>
    <div id='livefyre-cont'>
        <div id='livefyre'>
            <div class="comment-standards-mod">
                <a href="#" class="comment-standards-btn js-show-comment-standards">Read our comment standards</a>
                <div class="comment-standards-txt">
                    <p>StarTribune.com welcomes and encourages readers to comment and engage in substantive, mutually
                        respectful exchanges over news topics. Commenters must follow our <a
                                href="http://www.startribune.com/terms/">Terms of Use</a>.</p>
                    <ol>
                        <li>Keep it civil and stay on topic.</li>
                        <li>No profanity, vulgarity, racial slurs or personal attacks.</li>
                        <li>Comments with web links are not permitted.</li>
                        <li>Comments that violate the above will be removed. Repeat violators may lose their commenting
                            privileges on StarTribune.com.
                        </li>
                    </ol>
                    <p>Comments will be reviewed before being published.</p>
                </div>
                <!--eo comment-standards-txt-->
            </div>
            <!--eo comments-standards-mod-->
                        <!--LiveFyre gets injected here-->
        </div>
        <div id="powered_by_livefyre_new"><a href="http://livefyre.com/" target="_blank">Powered by Livefyre</a></div>
        <img class="comments-image-tracking" style="height: 0px;" alt=""
             src="http://apps.startribune.com/circulars/images/blank.gif"/>
        <script type="text/javascript">
        <!--if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')//-->
        </script>
        <noscript>
                        <img src="http://metrics.startribune.com/b/ss/nmminneapolis/1/JS-1.4.2--NS/92466?pageName=Medtronic%20buys%20name%20rights%20to%20plaza%20in%20front%20of%20new%20stadium&channel=business&server=startribune.com&c1=D%3Dg&c2=V20150914&c3=story&c5=noscript&c7=comments&c16="
                 height="1" width="1" border="0" alt=""/>
            }
        </noscript>
        <!--/DO NOT REMOVE/-->
    </div>
</section>

<div id="mobileMenu">
<!-- MENUS -->
<div class="nav-menu menu-left">
<!-- Your left Slidebar content. -->
<div class="grid"><!-- Weather Module -->
<div class="grid__item one-whole">
<div class="weather-loading islet" style="display:block;"><div class="spinner"></div></div>

<div class="weather-container islet" style="display:none;">
<a href="http://m.startribune.com/weather" class="link-complex">
<div id="weather-location" class="weather-location flexbox__item five-twelfths">
<div class="milli">Currently in <strong class="weather-location-name">.</strong> <span class="link-complex__target go">More weather</span></div>
</div>
<div id="weather-info" class="weather seven-twelfths media"><div class="weather-icon weather-icon--medium media__img"></div>
<p class="weather-temp temp media__body"></p>
</div>
</a> 
</div>
</div>

<!-- Search Module -->
<div class="grid__item one-whole">
<div class="search-container">
<form method="get" action="http://m.startribune.com/search" class="search islet">
<input type="search" name="q" value="" class="search-input" placeholder="Search…">
</form>
</div>
</div>
<!-- Sections Menus Module -->

<div class="grid__item">
<div class="grid">
<nav class="sections-menu-container islet">
<h5 class="grid__item one-whole">News</h5>
<div class="grid__item one-half">
<ul class="block-list">
<li data-item="1">
<a href="http://m.startribune.com/local/" title="Local">Local</a>
</li>
<li data-item="2">
<a href="http://m.startribune.com/sports/" title="Sports">Sports</a>
</li>
<li data-item="3">
<a href="http://m.startribune.com/business/" title="Business">Business</a>
</li>
<li data-item="4">
<a href="http://m.startribune.com/opinion/" title="Opinion">Opinion</a>
</li>
<li data-item="5">
<a href="http://m.startribune.com/variety/" title="Variety">Variety</a>
</li>
<li data-item="6">
<a href="http://m.startribune.com/politics/" title="Politics">Politics</a>
</li>
</ul>
</div>
<div class="grid__item one-half">
<ul class="block-list">
<li data-item="7">
<a href="http://m.startribune.com/obituaries/" title="Obituaries">Obituaries</a>
</li>
<li data-item="8">
<a href="http://weeklyads.startribune.com/" title="Weekly Ads">Weekly Ads</a>
</li>
<li data-item="9">
<a href="http://m.Homes.Startribune.Com/" title="Homes">Homes</a>
</li>
<li data-item="10">
<a href="http://m.Homes.Startribune.Com/eng/rentals/search" title="Rentals">Rentals</a>
</li>
<li data-item="11">
<a href="http://jobs.Startribune.Com/" title="Jobs">Jobs</a>
</li>
</ul>
</div>
<h5 class="grid__item one-whole">Featured</h5>
<div class="grid__item one-half">
<ul class="block-list">
<li><a href="http://m.startribune.com/nation" title="Nation">Nation</a></li>
<li><a href="http://m.startribune.com/world" title="World">World</a></li>
<li><a href="http://m.startribune.com/science" title="Science">Science</a></li>
<li><a href="http://m.startribune.com/variety/bestofmn2015/302782981.html" title="Best of MN">Best of MN</a></li>
<li><a href="http://m.startribune.com/jobs/topworkplaces" title="Top Workplaces">Top Workplaces</a></li>
</ul>
</div>
<div class="grid__item one-half">
<ul class="block-list">
<li><a href="http://m.startribune.com/sports/twins" title="Twins">Twins</a></li>
<li><a href="http://m.startribune.com/sports/wild" title="Wild">Wild</a></li>
<li><a href="http://m.startribune.com/sports/scoreboard" title="Scoreboard">Scoreboard</a></li>
<li><a href="http://m.startribune.com/sports/vikings" title="Vikings">Vikings</a></li>
<li><a href="http://m.startribune.com/sports/wolves" title="Wolves">Wolves</a></li>
</ul>
</div>
</nav>
</div>
</div>
        
<!-- Connect Menu Module -->
<div class="grid__item one-whole">
<div class="nav-connect-container islet">
<h5>Connect</h5>
<ul class="nav nav--fit">
<li>
<a id="facebook" href="https://www.facebook.com/startribune" title="Facebook"><i class="social-icon icon-facebook-light"></i></a>
</li>
<li>
<a id="twitter" href="http://twitter.com/startribune" title="Twitter"><i class="social-icon icon-twitter-light"></i></a>
</li>
<li>
<a id="pinterest" href="http://www.pinterest.com/startribune/" title="Pinterest"><i class="social-icon icon-pinterest-light"></i></a>
</li>
<li>
<a id="googleplus" href="http://plus.google.com/+startribune/" title="Googleplus"><i class="social-icon icon-googleplus-light"></i></a>
</li>
<li>
<a id="instagram" href="http://instagram.com/startribune" title="Instagram"><i class="social-icon icon-instagram-light"></i></a>
</li>
</ul>
</div>
</div>

<!-- Additional Links Menu Module -->
<div class="grid__item one-whole">
<div class="additional-links-container islet">
<ul class="block-list">
<li><a href="http://m.startribune.com/help" title="Help Page">Help</a></li>
<li><a href="http://www.startribune.com/eedition" title="eEdition">eEdition</a></li>
<li><a href="http://apps.startribune.com/news/mobile-products/" title="Mobile and Tablet Appss">Mobile and Tablet Apps</a></li>
<li><a href="http://steals.startribune.com/" title="Daily Deals">Daily Deals</a></li>
<li><a href="http://www.startribunecompany.com" title="About the Star Tribune">About the Star
Tribune</a></li>
</ul>
</div>
</div>
<!-- Info Module -->
</div>
<!-- Close Grid -->
</div>

<div class="nav-menu menu-right">
<div class="grid">
<div class="grid__item one--whole">
<div class="islet user-state">

<!-- Your right Slidebar content. -->
<div id="signed-out">
<div>
<a href="https://m.startribune.com/signin?path=http%3A%2F%2Fm.startribune.com%2F" class="signin btn btn--primary btn--full" title="Sign In">Sign In</a>
</div>
<div class="additional-links-container">
  <ul class="block-list">
<li>
  <a href="http://www.startribune.com/subscriptionservices" class="manage" id="manage-subscription">Manage Subscription</a>
</li>
  </ul>
</div>
</div>

<div id="signed-in" style="display: none;">
<h5>Welcome, <span id="the_username"></span></h5>
<div id="user-options">
<div>
<a href="https://m.startribune.com/signout?path=http%3A%2F%2Fm.startribune.com%2F" class="signout btn btn--primary btn--full" title="Sign Out">Sign Out</a>
</div>
</div>

<div class="additional-links-container">
<ul class="block-list">
<li>
  <a href="http://www.startribune.com/subscriptionservices" class="manage" id="manage-subscription">Manage Subscription</a>
</li>
</ul>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>

<!-- FOOTER SCRIPTS -->
<script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/main.min.js?d=1441050019"></script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"f550207221","applicationID":"7749207","transactionName":"M1JaYBQAVhVYW0cPWwoYeVcSCFcIFlVSD1o=","queueTime":0,"applicationTime":2036,"atts":"HxVZFlwaRRs=","errorBeacon":"bam.nr-data.net","agent":"js-agent.newrelic.com\/nr-686.min.js"}</script></body>

<!-- <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
<script src='//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js'></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js" type="text/javascript"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.js'></script>
<script src='https://cartodb-libs.global.ssl.fastly.net/torque.full.js'></script>
<script src="js/nvd3-master/lib/d3.v3.js"></script>
<script src="js/nvd3-master/nv.d3.js"></script>
<script src="js/nvd3-master/src/utils.js"></script>
<script src="js/nvd3-master/src/tooltip.js"></script>
<script src="js/nvd3-master/src/models/legend.js"></script>
<script src="js/nvd3-master/src/models/axis.js"></script>
<script src="js/nvd3-master/examples/stream_layers.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.7.0/mapbox-gl.js'></script>
<script src='//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js'></script>
<script src="js/waypoints/lib/noframework.waypoints.min.js"></script>
<script src="//cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.js"></script>
<script type='text/javascript' src="http://www.startribune.com/includes/jquery-scrolltofixed-min.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1nUZ3tkpty2ajdD-mupvV6YsE6NvZKn2cmQWPi-ET1MA&sheet=derailments
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1nUZ3tkpty2ajdD-mupvV6YsE6NvZKn2cmQWPi-ET1MA&sheet=training

<?php

$jsonDataDerail = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=7FiV1WIDPylRhjRVIECOLCwsG115wPQD_4I_DenpPHgAypcVdpYy0Y0kV-LSQfe0TSBcty7-xghPinvlY-Y_G99qLCNvL0rKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKTbGHL4ioZEu6nrxPYCC1ICW-hYx5mBibKeIHWhHC4zxjrNXO1u51yWLy3XoDg7I3dzJzZTV7GiCQy4AKTOxvrkn56t7w9_u&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataTraining = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=aPu85kPeUOKnIwCbWqXKjumPviDG3JOtWEmjV6-bxKCBCQ7FURzBgq5GUMKA3DyonWYYhYVYs-xPinvlY-Y_G9j1NLHPnmiDOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKTbGHL4ioZEu6nrxPYCC1ICW-hYx5mBibKeIHWhHC4zxjrNXO1u51yWLy3XoDg7IvHGwpxn9NdEHLB89kGnDMg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataDerailLoad = <?php echo $jsonDataDerail; ?>
var dataTrainingLoad = <?php echo $jsonDataTraining; ?>

// var dataDerail = dataDerailLoad.derailments;
// var dataTraining = dataTrainingLoad.training;
</script>

<script type='text/javascript'>
$(window).load(function(){
$(document).ready(function() {
   $('#navigate').scrollToFixed({
       limit: $('#wrapper').offset().top - $('#navigate').outerHeight() - 5,
       marginTop: function() {
           var marginTop = $(window).height() - $('#navigate').outerHeight(true) - 30;
           if (marginTop >= 0) return 40;
           return marginTop;
       }
   });

});  

});  

$(window).scroll(function() {

   // if($(window).scrollTop() + $(window).height() == $(document).height()) {
     if($(window).scrollTop() > 7500) {
        // console.log($(document).height());
       $('.myButton2, aside').hide();
   }
   else { $('.myButton2, aside').show(); }
});

$(window).on('resize', function(event){
    var windowWidth = $(window).width();
if(windowWidth < 933){
    $(".nav-utility-btn").text("");
}
});

$(document).ready(function() {
    var windowWidth = $(window).width();
if(windowWidth < 933){
    $(".nav-utility-btn").text("");
}
});

</script>


<script>
// $( document ).ready(function() {
//   slider = $('.bxslider').bxSlider();
//   var current = slider.getCurrentSlide();
// });


jQuery("document").ready(function($){

$("#introB").css("background-color","#333");

  $( ".myButton2" ).click(function() {
  $(".myButton2").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  }); 

var waypoint1 = new Waypoint({
  element: document.getElementById('intro'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#introB").css("background-color","#333");
  }
})
var waypoint2 = new Waypoint({
  element: document.getElementById('evacuation'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#evacuationB").css("background-color","#333");
  }
})
var waypoint3 = new Waypoint({
  element: document.getElementById('population'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#populationsB").css("background-color","#333");
  }
})
var waypoint4 = new Waypoint({
  element: document.getElementById('accidents'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#accidentsB").css("background-color","#333");
  }
})
var waypoint5 = new Waypoint({
  element: document.getElementById('training'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#trainingB").css("background-color","#333");
  }
})
var waypoint6 = new Waypoint({
  element: document.getElementById('derailmentsS'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#derailmentsB").css("background-color","#333");
  }
})
var waypoint7 = new Waypoint({
  element: document.getElementById('faq'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#faqB").css("background-color","#333");
  }
})
var waypoint8 = new Waypoint({
  element: document.getElementById('creditsS'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#creditsB").css("background-color","#333");
  }
})

});
</script>

<script>
var aspect = 800 / 400, chart = $("#map4 svg"), chart2 = $("#map2 svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();
  var targetWidth2 = chart2.parent().width();  
  var targetHeight = chart.parent().height();
  var targetHeight2 = chart2.parent().height();  
  chart.attr("width", targetWidth);   
  chart.attr("height", targetHeight);
  chart2.attr("width", targetWidth);   
  chart2.attr("height", targetHeight2);
});
</script>

<script type="text/javascript" charset="utf-8">

$(document).ready(function() {
    var table = $('#derailments').DataTable( {
        paging: false
    } );
 
    new $.fn.dataTable.Responsive( table );
} );

    </script>

<script>

var southWest = L.latLng(40.78054, -80.22217),
northEast = L.latLng(49.56798, -110.76416),
bounds = L.latLngBounds(southWest, northEast);

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var map = L.mapbox.map('map', 'mapbox.light', {minZoom: 6, maxBounds: bounds, legendControl: { position: 'topright' }})
    .setView([46.543750,-94.493408], 6);

map.scrollWheelZoom.disable();
map.touchZoom.disable();
if (map.tap) map.tap.disable();

map.legendControl.addLegend(document.getElementById('legend').innerHTML);

var geocoderControl = L.mapbox.geocoderControl('mapbox.places', {
        keepOpen: true
    });
geocoderControl.addTo(map);

geocoderControl.on('found', function(res) {
   // console.log(res.results.features[0])

var here = "";

if (here != "") { map.removeLayer(here); }

   here = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: res.results.features[0].geometry.coordinates
    },
    properties: {
        title: 'Approximate address location',
        description: res.results.features[0].place_name,
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#900'
    }
})
   map.addLayer(here);

   map.setView([res.results.features[0].geometry.coordinates[1],res.results.features[0].geometry.coordinates[0]],9);

  $('.leaflet-control-mapbox-geocoder-results a').on('click', function() {

    if (here != "") { map.removeLayer(here); }

             here = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: res.results.features[0].geometry.coordinates
    },
    properties: {
        title: 'Approximate address location',
        description: res.results.features[0].place_name,
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#900'
    }
})
   map.addLayer(here);

   map.setZoom(9);

   map.setView([res.results.features[0].geometry.coordinates[1],res.results.features[0].geometry.coordinates[0]],9);
    });

});

    $(document).ready(function() {
  $.getJSON('data/buffer.json', function(data) {
    var buffer = L.geoJson(data, {
      'style': {fillColor: '#f00', strokeColor: '#f00', fillOpacity: 0, opacity: 1, weight: 1, color: '#f00'},
      'onEachFeature': null
    });
    map.addLayer(buffer);
})
    $.getJSON('data/rail.json', function(data) {
     var rail = L.geoJson(data, {
      'style': {fillColor: '#333', strokeColor: '#333', fillOpacity: 0, opacity: 1, weight: 1, color: '#333'},
      'onEachFeature': null
    });
    map.addLayer(rail);
})

});

</script>

<script>
// var map2 = L.mapbox.map('map2', 'examples.map-20v6611k')
//     .setView([44.9647979,-93.2272339], 10);

//     $(document).ready(function() {
//   $.getJSON('buffer.json', function(data) {
//     var buffer = L.geoJson(data, {
//       'style': {fillColor: '#f00', strokeColor: '#f00', fillOpacity: 0, opacity: 1, weight: 1, color: '#f00'},
//       'onEachFeature': null
//     });
//     map2.addLayer(buffer);
// })
//     $.getJSON('rail.json', function(data) {
//     var rail = L.geoJson(data, {
//       'style': {fillColor: '#333', strokeColor: '#333', fillOpacity: 0, opacity: 1, weight: 1, color: '#333'},
//       'onEachFeature': null
//     });
//     map2.addLayer(rail);
// })

//          $.getJSON('counties.json', function(data) {
//      statesLayer = L.geoJson(data, {
//       style: getStyle,
//       onEachFeature: onEachFeature
//     });
//     map2.addLayer(statesLayer);

//     var popup = new L.Popup({ autoPan: false });


//  function getStyle(feature) {
//       return {
//           weight: 2,
//           opacity: 0.1,
//           color: 'black',
//           fillOpacity: 0.7,
//           fillColor: getColor(feature.properties.density)
//       };
//   }

//     function getColor(d) {
//       return d > 1000 ? '#8c2d04' :
//           d > 500  ? '#cc4c02' :
//           d > 200  ? '#ec7014' :
//           d > 100  ? '#fe9929' :
//           d > 50   ? '#fec44f' :
//           d > 20   ? '#fee391' :
//           d > 10   ? '#fff7bc' :
//           '#ffffe5';
//   }

//   function onEachFeature(feature, layer) {
//       layer.on({
//           mousemove: mousemove,
//           mouseout: mouseout,
//           click: zoomToFeature
//       });
//   }

//   var closeTooltip;

//   function mousemove(e) {
//       var layer = e.target;

//       popup.setLatLng(e.latlng);
//       popup.setContent('<div class="marker-title">' + layer.feature.properties.name + '</div>' +
//           layer.feature.properties.density + ' people per square mile');

//       if (!popup._map) popup.openOn(map);
//       window.clearTimeout(closeTooltip);

//       // highlight feature
//       layer.setStyle({
//           weight: 3,
//           opacity: 0.3,
//           fillOpacity: 0.9
//       });

//       if (!L.Browser.ie && !L.Browser.opera) {
//           layer.bringToFront();
//       }
//   }

//   function mouseout(e) {
//       statesLayer.resetStyle(e.target);
//       closeTooltip = window.setTimeout(function() {
//           map.closePopup();
//       }, 100);
//   }

//   function zoomToFeature(e) {
//       map.fitBounds(e.target.getBounds());
//   }
// })  

// });

d3.csv("data/counties_data.csv", function(error, evacData) {
    evacData.forEach(function(d) {
  d.county = d.county;
  d.count = +d.count;
    });

var width = $("#map2").width(),
    height = 500,
    centered;

// var projection1 = d3.geo.albers()
//     .scale(3837)
//     .translate([100, 770]);

var projection1 = d3.geo.mercator().scale([2500]).center([-92.9931050,45.5102130]);

var path1 = d3.geo.path()
    .projection(projection1);

var svg1 = d3.select("#map2 svg")
    .attr("width", width)
    .attr("height", height);

svg1.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg1.append("g");

var none = "#ddd";
var q1 = "#C6A29E";
var q2 = "#A45958";
var q3 = "#C6A29E";
var q4 = "#210507";


d3.json("data/counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path1)
      .style("fill", function(d, j){
        for (j = 0; j < 87; j++){
          // console.log(evacData[j].county + " " + j);
          if (d.properties.COUNTYNAME == evacData[j].county){ 
            if (evacData[j].count >= 20) { return q4; }
            if (evacData[j].count >= 5) { return q3; }
            if (evacData[j].count >= 3) { return q2; }
            if (evacData[j].count > 0) { return q1; }
            else { return none; }
         }
         }
        })

      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == evacData[j].county){ 
            return "<div class='countyName'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>" + evacData[j].count + " trained departments</div>";
          }
         }
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path1);
});

// d3.json("rail.json", function(error, us) {

//   g.append("g")
//       .attr("id", "states2")
//     .selectAll("path")
//       .data(us.geomtries)
//     .enter().append("path")
//       .attr("d", path1)
//       .style("fill", "#000")
//       .style("stroke-width", "1.5px")
//       .style("stroke", "#000")
//       .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + " County</b>";}));

//   g.append("path")
//       //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
//       .attr("id", "state-borders2")
//       .attr("d", path1);
// });

});

</script>

<script>
jQuery("document").ready(function($){
var map3 = L.mapbox.map('map3', 'mapbox.light', {legendControl: { position: 'bottomleft' }})
    .setView([45.011783,-93.270407], 11, {minZoom: 6, maxBounds: bounds});

map3.scrollWheelZoom.disable();
map3.touchZoom.disable();
if (map3.tap) map3.tap.disable();

map3.legendControl.addLegend("<strong>Maximum population</strong><br /><img id='image' />");


$(document).ready(function() {

  document.getElementById('image').src = 'img/legend.png'

    $.getJSON('data/blocks.json', function(data) {
    var blocks = L.geoJson(data, {
      'style': {fillColor: '#500', strokeColor: '#333', fillOpacity: 0.5, opacity: 1, weight: 1, color: '#333'},
      'onEachFeature': null
    });

    var densityLayer = L.geoJson(null, { pointToLayer: scaledPoint });

function pointRadius(feature) {
    return (feature.properties.Sum_POP10 - 4) / 300;
}

function scaledPoint(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: pointRadius(feature),
        fillColor: "#a00",
        fillOpacity: 0.7,
        weight: 0.5,
        color: '#fff'
    }).bindPopup('<strong>Population:  ' + feature.properties.Sum_POP10 + '</strong>');
}

d3.json('data/scenarios.json', function(err, data) {
    densityLayer.addData(data);
});

    map3.addLayer(blocks);

    map3.addLayer(densityLayer);
})
    $.getJSON('data/rail.json', function(data) {
     var rail = L.geoJson(data, {
      'style': {fillColor: '#900', strokeColor: '#900', fillOpacity: 1, opacity: 1, weight: 4, color: '#333'},
      'onEachFeature': null
    });
    map3.addLayer(rail);
})

});
});

</script>

<script>
var chart1;
nv.addGraph(function() {
    chart1 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(true)
      .groupSpacing(0.1)    //Distance between each group of bars.
      .margin({top: 30, right: 5, bottom: 80, left: 40})
      .tooltip(function(key, x, y, e, graph) { return '<h3>' + key + '</h3>' +'<p>' +  y + ' in ' + x + '</p>';});

    chart1.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart1 svg')
        .datum(derailmentData)
        .call(chart1);

     var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');

    xTicks
      .selectAll('text')
      .attr('transform', function(d,i,j) { return 'translate (-30, 42) rotate(-50 0,0)' }) ;

    nv.utils.windowResize(chart1.update);

    return chart1;
});

var derailmentData = [
  {
    "key": "Derailments",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2000" ,
        "value" : 38
      },
      { 
        "label" : "2001" ,
        "value" : 48
      },
      { 
        "label" : "2002" ,
        "value" : 34
      },
      { 
        "label" : "2003" ,
        "value" : 30
      },
      { 
        "label" : "2004" ,
        "value" : 40
      },
      { 
        "label" : "2005" ,
        "value" : 31
      },
      { 
        "label" : "2006" ,
        "value" : 28
      },
      { 
        "label" : "2007" ,
        "value" : 35
      },
      { 
        "label" : "2008" ,
        "value" : 25
      },
      { 
        "label" : "2009" ,
        "value" : 22
      },
      { 
        "label" : "2010" ,
        "value" : 15
      },
      { 
        "label" : "2011" ,
        "value" : 32
      },
      { 
        "label" : "2012" ,
        "value" : 16
      },
      { 
        "label" : "2013" ,
        "value" : 26
      },
      { 
        "label" : "2014" ,
        "value" : 24
      }
    ]
  },
  {
    "key": "Highway-Rail Crossing",
    "color": "#333333",
    "values": [
      { 
        "label" : "2000" ,
        "value" : 5
      },
      { 
        "label" : "2001" ,
        "value" : 3
      },
      { 
        "label" : "2002" ,
        "value" : 5
      },
      { 
        "label" : "2003" ,
        "value" : 2
      },
      { 
        "label" : "2004" ,
        "value" : 10
      },
      { 
        "label" : "2005" ,
        "value" : 6
      },
      { 
        "label" : "2006" ,
        "value" : 2
      },
      { 
        "label" : "2007" ,
        "value" : 7
      },
      { 
        "label" : "2008" ,
        "value" : 1
      },
      { 
        "label" : "2009" ,
        "value" : 2
      },
      { 
        "label" : "2010" ,
        "value" : 2
      },
      { 
        "label" : "2011" ,
        "value" : 2
      },
      { 
        "label" : "2012" ,
        "value" : 4
      },
      { 
        "label" : "2013" ,
        "value" : 4
      },
      { 
        "label" : "2014" ,
        "value" : 3
      }
    ]
  }
]
</script>

<script>

d3.csv("derailments.csv", function(error, csvData) {
    csvData.forEach(function(d) {
  d.city = d.city;
  d.date = d.date;
  d.description = d.description;
    });


var width = $("#map4").width(),
    height = 400;

var formatNumber = d3.format(",.0f");

var projection = d3.geo.albersUsa().scale(800).translate([380, 190]);

var path = d3.geo.path()
    .projection(projection);

var radius = d3.scale.sqrt()
    .domain([0, 1e6])
    .range([0, 15]);

var svg = d3.select("#map4 svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/states_gov.json", function(error, json) {
    svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 1.5)
           .style("stroke", "white")
           .style("fill","#ddd");


var circles = svg.append("svg:g")
    .attr("id", "circles");

 circles.append("g")
     .attr("id", "markers")
    .selectAll("circle")
      .data(csvData)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr('r', '5')
      .attr("transform", function(d) { 
        return "translate(" + projection([d.longitude,d.latitude]) + ")"; 
      })
      .call(d3.helper.tooltip(
        function(d, i){
          return "<div><strong>" + d.city + ", " + d.location + "</strong></div>";
        }
        ));

      });

});

</script>

<script>
d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};
</script>

<?php
readfile('http://www.startribune.com/partner/footer/294420061/');
?>

<footer class="site-footer milli cf">
<ul class="nav nav--fit footer-menu">
<li>&copy; <?php echo date("Y"); ?> Star Tribune</li>
<li><a class="btn btn--info btn--link open-nav">Menu</a></li>
<li><a class="btn btn--info btn--link" id="star-tribune-desktop-url"
   href="http://www.startribune.com/templates/full_site_redirect?rurl=http%3A%2F%2Fwww.startribune.com%2F">View desktop site</a></li>
</ul>
</footer>
</body>
