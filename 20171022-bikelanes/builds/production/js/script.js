!function e(o,a,n){function t(l,r){if(!a[l]){if(!o[l]){var s="function"==typeof require&&require;if(!r&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+l+"'")}var d=a[l]={exports:{}};o[l][0].call(d.exports,function(e){var a=o[l][1][e];return t(a||e)},d,d.exports,e,o,a,n)}return a[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)t(n[l]);return t}({1:[function(e,o,a){$.urlParam=function(e){var o=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=o?o[1]||0:null};var n=$.urlParam("chart");null!=n&&($(".slide").hide(),$("#"+n).show()),d3.json("./shapefiles/2001_mpls_dedicated.json",function(e,o){d3.json("./shapefiles/2001_mpls_offstreet.json",function(e,a){d3.json("./shapefiles/2001_mpls_shared.json",function(e,n){d3.json("./shapefiles/2011_mpls_dedicated.json",function(e,t){d3.json("./shapefiles/2011_mpls_offstreet.json",function(e,i){d3.json("./shapefiles/2011_mpls_shared.json",function(e,l){d3.json("./shapefiles/2017_mpls_dedicated.json",function(e,r){d3.json("./shapefiles/2017_mpls_offstreet.json",function(e,s){d3.json("./shapefiles/2017_mpls_shared.json",function(e,d){d3.json("./shapefiles/stp_bike_lanes.json",function(e,p){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var c=new mapboxgl.Map({container:"mapMPLS",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.265011,44.977753],zoom:9.9,minZoom:2});c.addControl(new mapboxgl.NavigationControl),c.scrollZoom.disable(),c.on("load",function(){c.addSource("mpls2017a",{type:"geojson",data:r}),c.addLayer({id:"mpls2017a-layer",interactive:!0,source:"mpls2017a",layout:{},type:"line",paint:{"line-color":"#C22A22","line-width":2}},"place-neighbourhood"),c.addSource("mpls2017b",{type:"geojson",data:s}),c.addLayer({id:"mpls2017b-layer",interactive:!0,source:"mpls2017b",layout:{},type:"line",paint:{"line-color":"#C22A22","line-width":2}},"place-neighbourhood"),c.addSource("mpls2017c",{type:"geojson",data:d}),c.addLayer({id:"mpls2017c-layer",interactive:!0,source:"mpls2017c",layout:{},type:"line",paint:{"line-color":"#C22A22","line-width":2}},"place-neighbourhood"),c.addSource("mpls2011a",{type:"geojson",data:t}),c.addLayer({id:"mpls2011a-layer",interactive:!0,source:"mpls2011a",layout:{},type:"line",paint:{"line-color":"#299E3D","line-width":2}},"place-neighbourhood"),c.addSource("mpls2011b",{type:"geojson",data:i}),c.addLayer({id:"mpls2011b-layer",interactive:!0,source:"mpls2011b",layout:{},type:"line",paint:{"line-color":"#299E3D","line-width":2}},"place-neighbourhood"),c.addSource("mpls2011c",{type:"geojson",data:l}),c.addLayer({id:"mpls2011c-layer",interactive:!0,source:"mpls2011c",layout:{},type:"line",paint:{"line-color":"#299E3D","line-width":2}},"place-neighbourhood"),c.addSource("mpls2001a",{type:"geojson",data:o}),c.addLayer({id:"mpls2001a-layer",interactive:!0,source:"mpls2001a",layout:{},type:"line",paint:{"line-color":"#636363","line-width":2}},"place-neighbourhood"),c.addSource("mpls2001b",{type:"geojson",data:a}),c.addLayer({id:"mpls2001b-layer",interactive:!0,source:"mpls2001b",layout:{},type:"line",paint:{"line-color":"#636363","line-width":2}},"place-neighbourhood"),c.addSource("mpls2001c",{type:"geojson",data:n}),c.addLayer({id:"mpls2001c-layer",interactive:!0,source:"mpls2001c",layout:{},type:"line",paint:{"line-color":"#636363","line-width":2}},"place-neighbourhood")});var u=new mapboxgl.Map({container:"mapSTP",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.089958,44.953703],zoom:9.9,minZoom:2});u.addControl(new mapboxgl.NavigationControl),u.scrollZoom.disable(),u.on("load",function(){$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address"),u.addSource("stp",{type:"geojson",data:p}),u.addLayer({id:"stp-layer",interactive:!0,source:"stp",layout:{},type:"line",paint:{"line-color":{property:"year",type:"interval",stops:[[2005,"#636363"],[2013,"#299E3D"],[2017,"#C22A22"]]},"line-width":2}},"place-neighbourhood")}),function(){var e={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartChange",padding:e,data:{columns:[["On-street shared lanes",1,18,37],["On-street dedicated lanes",28,65,108],["Off-street bikeways",71,92,104]],type:"bar",groups:[["On-street shared lanes","On-street dedicated lanes","Off-street bikeways"]]},legend:{show:!1},point:{show:!1},color:{pattern:["#3580A3","#C6D1D9","#E07242"]},axis:{y:{min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,50,100,150,200,250],format:d3.format(",")}},x:{type:"category",categories:["2001","2011","2017"],padding:{right:0,left:0},tick:{multiline:!1}}}})}()})})})})})})})})})})},{}]},{},[1]);