
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minneapolis Teardowns</title>
  <meta name="description" content="Minneapolis Teardowns">
  <meta name="author" content="Frey Hargarten - StarTribune">

  <link href="js/nvd3-master/build/nv.d3.css" rel="stylesheet" type="text/css">
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' />
  <link rel="stylesheet" href="js/d3.slider-master/d3.slider.css" /> 
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<style>
  body { margin:0; padding:0; overflow-x:hidden; }
  #map { height:780px; width:50%; display:inline-block; float:left !important; }
  .mapbox-logo, .leaflet-control-attribution{ display:none !important; }
  .map-legend .swatch { width:20px; height:20px; float:left; margin-right:10px; }
  .leaflet-popup-close-button { display: none; }
  .leaflet-popup-content-wrapper { pointer-events: none; }

  #wrapper { width:98%; }
  #right_rail { width:400px; height:auto; float:right; display:inline-block }
  .zoom{ text-decoration:none; font-weight:bold; color:steelblue; float:right; }

  button:focus { outline:0 !important; }
  .btn-group { margin-left: 0; width:100%; text-align:center; }
  .btn-primary { width: 130px; text-align: center; background-color: #333; border: 0; border-radius:0; color: #ffffff; cursor: pointer; display: inline-block; font-family: arial; font-size:.7em; font-weight: 900; moz-border-radius:0; padding: 13px 26px; text-decoration: none; webkit-border-radius:0; }
  .btn-primary input[type=checkbox] { border:none; display:none !important; }
  .btn-primary:hover { background-color: #aaa !important; }
  #demo_toggle.active { background-color:#AD1625; }
  #rebuild_toggle.active { background-color:#777; }
  #parcels_toggle.active { background-color:#801515; }
  #nb_toggle.active { background-color:#801515; }
  #tornado_toggle.active { background-color:#B35817; }
  #build_toggle.active { background-color:#ddd; }
  #build_toggle { width:10px; height:10px; padding:10px; }
  #buildButton { width:100%; text-align:right; vertical-align:middle; }

  #nerdbox { min-height:200px; display:block; }
  #nb_title { font-weight:900; font-size:1em; float:left; font-family:"Poynter Serif RE"; }
  .num { text-align:center; width:32.5%; display:inline-block; font-size:2.4em; font-weight:900; font-family:"Popular";}
  #teardownsNum, .teardown { color:#801515; font-weight:900; }
  #rebuildsNum, .rebuild { /*color:#2A9513;*/ font-weight:900; color:#777;  }
  #parcelPct, .parcel { /*color:#0E7063;*/ color:#801515; font-weight:900;  }
  #tornadoNum, .tornado { color:#B35817; font-weight:900;  }
  .breaker { clear:both; margin:5px; padding:10px; }

  #legendContainer { width:100%; }
  .legend label, .legend span { display:block; float:left; height:15px; width:35px; text-align:center; font-size:11px; color:#808080; }
  #quantize{ padding:5px; text-align:center; }
  .legend_title { font-family:"Benton Sans",Helvetica,Arial,sans-serif; text-align:center; }

  .d3-slider-handle { position: absolute; width: 1.2em; height: 1.2em; border: 1px solid #333; border-radius:0; background: #eee; background: #333; z-index: 3; }
  .d3-slider-handle:hover { background: #5cbf2a; cursor:pointer; }
  #sliderDiv { height:20px; padding:15px; }

  #thisYear { float:right; font-weight:900; font-size:1em; font-family:"Poynter Serif RE"; }
  #total { text-align:center; }

  #chart { width:100%; height:300px }
  .teardownsBar { background-color:#AD1625; height:20px; display:inline-block;  }
  .rebuildsBar { background-color:#777; height:20px; display:inline-block; margin-top:5px; margin-left:5px; }
  .yearBar { height:20px; margin:5px; line-height:120%; }
  #parcelPct { display:none !important; }
  #parcels_toggle { width:48%; }
  #nb_toggle { width:48%; }
  #tornadoOn { font-size:14px; }
  .stat { display:none; }

  .breaker { padding:2px; }
  #sliderDiv { margin:18px; }

  #back { float:left; font-size:1.7em; font-weight:bold; font-family:"Popular"; }
  #forward { float:right; font-size:1.7em; font-weight:bold; font-family:"Popular"; }
  #back:hover, #forward:hover { cursor:pointer; }
</style>
  
<style>
  @media (max-width:845px) {
      #map { display:block; width:100%; height:390px; }
      #right_rail { display:block; width:100%; }
      #wrapper { width:100%; }
      .btn-primary { width: 32% !important; }
      .num { width:32.5%; }
      #parcels_toggle { width:100% !important; }
      #nb_toggle { width:100% !important; }
  }
</style>
</head>

<body>

<div id="wrapper">

<div class="breaker"></div>

<div id="sliderDiv"><div id="slider"></div></div>
<div class="breaker"></div>
<div id="back"><< prev year</div><div id="forward">next year >></div>

  <div class="breaker"></div>

<div id='map'></div>

<div id="right_rail">
<div id="nerdbox">
  <div id='nb_title'>Minneapolis</div> <div id="thisYear">2002-2015</div>

   <div class="breaker"></div>

<div class="legend_title">Teardowns</div>
<div id="total" class="bigNum">0</div>

   <div class="breaker"></div>

    <div class="legend_title">Toggle map displays</div>
     <div class="breaker"></div>

      <div class="btn-group" id="menu_main" data-toggle="buttons">
      <label class="btn btn-primary" id="demo_toggle" >
        <input type="checkbox" name="options" id="state1" checked>Not Rebuilt
      </label>
      <label class="btn btn-primary" id="rebuild_toggle">
        <input type="checkbox" name="options" id="state2" checked>Rebuilt
      </label>
      <label class="btn btn-primary" id="tornado_toggle">
        <input type="checkbox" name="options" id="state3">Tornado
      </label>
    </div>

  <div class="breaker"></div>

  <div id="teardownsNum" class="num">0</div>
  <div id="rebuildsNum" class="num">0</div>
  <div id="tornadoOn" class="num">2011 tornado damage off</div>
  <div id='parcelPct' class="num">0%</div>
  
 <div class="breaker"></div>

 <div class="legend_title">Teardowns <span class="rebuild">rebuilt</span> and <span class="teardown">not rebuilt</span> by year</div>
 <div id="chart"><svg></svg></div>


</div>

<div class="breaker"></div>

<div class="legend_title">Accumulated teardowns <span class="teardown">not rebuilt</span> by region</div>
<div class="breaker"></div>

<div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active" id="parcels_toggle">
        <input type="checkbox" name="options" id="state4">Communities
      </label>
     <label class="btn btn-primary" id="nb_toggle">
        <input type="checkbox" name="options" id="state4">Neighborhoods
      </label>
</div>

<div class="breaker"></div>

<div id="legendContainer">
<div id="quantize">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Less</span>
    <span style='background:#E65B68;'></span>
    <span style='background:#AD1624;'></span>
    <span style='background:#8D020F;'></span>
    <span style='background:#64000A;'></span>
    <span style='background:#fff;'>More</span>
  </nav>
</span>
</div>

<a href='javascript:void(0);' class='zoom'>Reset View</a>
</div>

<div class="breaker"></div>

<a href='https://docs.google.com/spreadsheets/d/1Ie_rGF9NjC7v-4Xk6AjapqawSSV9GCcD4bg5Ta7NrlQ/pub?output=xlsx' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>
</div>

</body>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="js/d3.slider-master/d3.slider.js"></script>
<script src="js/nvd3-master/build/nv.d3.js"></script>
<script src="js/nvd3-master/src/utils.js"></script>
<script src="js/nvd3-master/src/tooltip.js"></script>
<script src="js/nvd3-master/src/models/legend.js"></script>
<script src="js/nvd3-master/src/models/axis.js"></script>
<script src="js/nvd3-master/test/stream_layers.js"></script>
<script type="text/javascript" src="http://static.startribune.com/js/pym/pym.min.js"></script>
<script>
var pymChild = new pym.Child();
</script>

<script>
//LIVE JSON MAGIC
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1Ie_rGF9NjC7v-4Xk6AjapqawSSV9GCcD4bg5Ta7NrlQ&sheet=minneapolis
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1Ie_rGF9NjC7v-4Xk6AjapqawSSV9GCcD4bg5Ta7NrlQ&sheet=minneapolisParcels

<?php
$jsonDataTeardowns = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=9VKeGAmPZj_9XeUYV34rbrGLdnhnpVd9f-EP5Qalsw6HPSArUsn_wg55tWWmeknVpHxIm6HZBsn0vx8D_nO2EKexLx7yUrqNOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKT0XypQ53EL7IeizIpPSlbwZKZErRZu3grvwA3jhdCB8rBOMfkuHrr6ocnMDbLZR35iDyrfKhrpBtcwx7r9-pYtdjieda6Sn&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataParcels = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=rrAoB_wZMecV3cLY65bgAOReFqnPI5XOaf9rlf8OFVTMcQRs3x3vZmVEfCFKV4M3W5kKrqK_VX30vx8D_nO2EBPKsrdt7rEJOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKT0XypQ53EL7IeizIpPSlbwZKZErRZu3grvwA3jhdCB8rBOMfkuHrr6ocnMDbLZR35iDyrfKhrpBtcwx7r9-pSb-3rH5zIQpyBAf43AAwP8&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataTeardownsLoad = <?php echo $jsonDataTeardowns; ?>;
var dataParcelsLoad = <?php echo $jsonDataParcels; ?>;

var dataTeardowns = dataTeardownsLoad.minneapolis;
var dataParcels = dataParcelsLoad.minneapolisParcels;

// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=9VKeGAmPZj_9XeUYV34rbrGLdnhnpVd9f-EP5Qalsw6HPSArUsn_wg55tWWmeknVpHxIm6HZBsn0vx8D_nO2EKexLx7yUrqNOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKT0XypQ53EL7IeizIpPSlbwZKZErRZu3grvwA3jhdCB8rBOMfkuHrr6ocnMDbLZR35iDyrfKhrpBtcwx7r9-pYtdjieda6Sn&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataTeardownsLoad) {

// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=rrAoB_wZMecV3cLY65bgAOReFqnPI5XOaf9rlf8OFVTMcQRs3x3vZmVEfCFKV4M3W5kKrqK_VX30vx8D_nO2EBPKsrdt7rEJOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TKT0XypQ53EL7IeizIpPSlbwZKZErRZu3grvwA3jhdCB8rBOMfkuHrr6ocnMDbLZR35iDyrfKhrpBtcwx7r9-pSb-3rH5zIQpyBAf43AAwP8&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataParcelsLoad) {

$("#back").css('visibility', 'hidden');

var zoomification;

if ($(window).width() <= 845) { zoomification = 11; }
else { zoomification = 12; }

$(window).on('load resize', function(){
var width = $(window).width();

if (width <= 845) { zoomification = 11; }
else { zoomification = 12; }

map.setView([44.983333,-93.266667], zoomification);
});

// var dataTeardownsLoad = <?php echo $jsonDataTeardowns; ?>;
// var dataParcelsLoad = <?php echo $jsonDataParcels; ?>;

//INITIALIZE MAP
var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light', { maxZoom: 17, minZoom: 11, bounds: mapBounds})
    .setView([44.983333,-93.266667], zoomification);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

$(document).ready(function() {

//LOAD MINNEAPOLIS NEIGHBORHOODS
$.getJSON('shapefiles/minneapolis_communities.json', function(data3) {
  $.getJSON('shapefiles/tornado.json', function(data2) {
  $.getJSON('shapefiles/mpls.json', function(data) {

$(".zoom").click(function() {
  redrawChart("Minneapolis",false);
  map.setView([44.983333,-93.266667], zoomification);
  $("#nb_title").html("Minneapolis");
  countRecords(slider.value(),null,false);
});

$("#back").click(function() {
  if ((slider.value()-1) > 2000){
  slider.value(slider.value()-1);
  shifting(slider.value());
}
if (slider.value() == 2001) { $("#back").css('visibility', 'hidden'); }
});
$("#forward").click(function() {
  $("#back").css("visibility","visible");
  if ((slider.value()+1)< 2016){
  slider.value(slider.value()+1);
  shifting(slider.value());
}
});

//INITIALIZE KEY VALUES
var statesLayer;
// var accumulate = true;

//YEAR SLIDER
if ($(window).width() < 550){
var tickLength = 7;
}
else { 
var tickLength = 15; 
}

var slide_spot=2001;
var slider = d3.slider().axis(true);

d3.select('#slider').call(slider.min(2001).max(2015).value(slide_spot).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(tickLength)).step(1).on("slide", function(evt, value) {
    shifting(value);
    if (value == 2001) { $("#back").css('visibility', 'hidden'); }
  }));

function shifting(value){
  redrawChart("Minneapolis",false);
  if (value == 2001) { $("#thisYear").html("2002-2015"); }
  else  { $("#thisYear").html("" + value + ""); }
  $("#nb_title").html("Minneapolis");
  countRecords("" + value + "",null,false);
  highlightTeardown(demos,"" + value + "");
  highlightTeardown(rebuilds,"" + value + "");
  map.setView([44.983333,-93.266667], zoomification);
  communityLayer.eachLayer(function (layer) {    
        layer.setStyle({          
          fillColor: getColor3(layer.feature.properties.CommName,slider.value())
        });  
      }); 
      statesLayer.eachLayer(function (layer) {    
        layer.setStyle({          
          fillColor: getColor(layer.feature.properties.Name,slider.value())
        });  
      }); 
}
 
 d3.select("text").text("All");

//PULL DATA AND DO MATH  
function countRecords(year,neighborhood,community){
   var teardownsTotal = 0;
   var rebuildsTotal = 0;
   var parcelTotal = 0;
   var parcelTotal2 = 0;

     d3.selectAll("text").style("font-weight","normal");
  var selectionYear = d3.selectAll("text").each(function(d) { 
    if (d3.select(this).html() == year) { 
    d3.select(this).style("font-weight","900");
  } 
  });

if (year == "2001") {
  if (neighborhood == null) {
   for (var i=0; i < dataTeardowns.length; i++){
     if (dataTeardowns[i].rebuild == true){ rebuildsTotal++; }
     else { teardownsTotal++; }
   }
    for (var i=0; i < dataParcels.length; i++){
        if (dataParcels[i].neighborhood == neighborhood) {
     parcelTotal = dataParcels[i].demos;
     parcelTotal2 = dataParcels[i].rebuilds;
   }
  }
  }
  else {
       for (var i=0; i < dataTeardowns.length; i++){
        if (dataTeardowns[i].neighborhood == neighborhood) {
     if (dataTeardowns[i].rebuild == true){ rebuildsTotal++; }
     else { teardownsTotal++; }
   }
 }
         for (var i=0; i < dataParcels.length; i++){
        if (dataParcels[i].neighborhood == neighborhood) {
     parcelTotal = dataParcels[i].demos;
     parcelTotal2 = dataParcels[i].rebuilds;
   }
  }
 }
}
else {
  if (neighborhood == null) {
   for (var i=0; i < dataTeardowns.length; i++){
    if (dataTeardowns[i].year == year) {
     if (dataTeardowns[i].rebuild == true){ rebuildsTotal++; }
     else { teardownsTotal++; }
    }
   }
           for (var i=0; i < dataParcels.length; i++){
        if (dataParcels[i].neighborhood == neighborhood) {
     parcelTotal = dataParcels[i].demos;
     parcelTotal2 = dataParcels[i].rebuilds;
   }
  }
  }
  else {
       for (var i=0; i < dataTeardowns.length; i++){
        if (dataTeardowns[i].neighborhood == neighborhood) {
    if (dataTeardowns[i].year == year) {
     if (dataTeardowns[i].rebuild == true){ rebuildsTotal++; }
     else { teardownsTotal++; }
    }
   }
 }
        for (var i=0; i < dataParcels.length; i++){
        if (dataParcels[i].neighborhood == neighborhood) {
     parcelTotal = dataParcels[i].demos;
     parcelTotal2 = dataParcels[i].rebuilds;
   }
  }
 }
}

if (community == false){
    $("#teardownsNum").html(teardownsTotal);
    $("#rebuildsNum").html(rebuildsTotal);
    $("#total").html(Number($("#teardownsNum").text()) + Number($("#rebuildsNum").text()));
  } else if  (community == true)  {
    $("#teardownsNum").html(parcelTotal);
    $("#rebuildsNum").html(parcelTotal2);
    $("#total").html(Number($("#teardownsNum").text()) + Number($("#rebuildsNum").text()));
  }
}

countRecords("2001",null,false);

//MARKER HIGHLIGHTING
function highlightTeardown(markers,year){
 markers.eachLayer(function (layer) { 
  if (year=="2001"){ layer.setStyle({"fillOpacity":0.3});  }
  else {
    if(layer.feature.properties.year == year) {    
        layer.setStyle({"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillOpacity":0}); 
      }
    }
    });
}

function resetMarkers(markers){
 markers.eachLayer(function (layer) { 
   layer.setStyle({"fillOpacity":0.3}); 
    });
}

var demos = L.geoJson(null, { pointToLayer: scaledPoint });
var rebuilds = L.geoJson(null, { pointToLayer: scaledPoint2 });

function scaledPoint(feature, latlon) {
        switch (feature.properties.rebuild) {
            case true: return L.circleMarker(latlon, {radius: .05, color:"#fff", weight:1, opacity:0, fillOpacity:0});
            case false:  return L.circleMarker(latlon, {radius: 5, color:"#AD1625", weight:1});
        }
      }

function scaledPoint2(feature, latlon) {
        switch (feature.properties.rebuild) {
            case true: return L.circleMarker(latlon, {radius: 5, color:"#777", weight:1, opacity:1});
            case false:  return L.circleMarker(latlon, {radius: .05, color:"#fff", weight:1, opacity:0, fillOpacity:0});
        }
      }

for (var i = 0; i < dataTeardowns.length; i++){

  if (dataTeardowns[i].longitude != "null"){
  var geojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [dataTeardowns[i].longitude, dataTeardowns[i].latitude]
    },
    "properties": {
      "neighborhood": dataTeardowns[i].neighborhood,
      "rebuild": dataTeardowns[i].rebuild,
      "year": dataTeardowns[i].year,
      "fulladdres": dataTeardowns[i].fulladdres
    }
  }
];

  demos.addData(geojson);
  rebuilds.addData(geojson);
}
}


//LOAD TEARDOWN MARKERS
// var demos = L.geoJson(dataTeardowns,  {
//       onEachFeature: onEachFeature,
//       pointToLayer: function(feature, latlon) {
//         switch (feature.properties.rebuild) {
//             case "TRUE": return L.circleMarker(latlon, {radius: .5, color:"#fff", weight:1, opacity:0, fillOpacity:0});
//             case "FALSE":  return L.circleMarker(latlon, {radius: 5, color:"#AD1625", weight:1, fillOpacity:0.3, opacity:1});
//         }
//     }
//   }).addTo(map);

// var rebuilds = L.geoJson(dataTeardowns,  {
//       onEachFeature: onEachFeature,
//       pointToLayer: function(feature, latlon) {
//         switch (feature.properties.rebuild) {
//             case "TRUE": return L.circleMarker(latlon, {radius: 5, color:"#2A9513", weight:1, opacity:1});
//             case "FALSE":  return L.circleMarker(latlon, {radius: .5, color:"#fff", weight:1, opacity:0, fillOpacity:0});
//         }
//     }
//   }).addTo(map);

$('#demo_toggle input').on('change', function () {
    if (this.checked) {
       map.addLayer(demos);
       map.addLayer(statesLayer);
       statesLayer.setStyle({"fillOpacity":0}); 
       map.removeLayer(communityLayer);
       $("#parcels_toggle, #nb_toggle").removeClass('active');
    } else {
       statesLayer.setStyle({"fillOpacity":0}); 
       map.removeLayer(demos);
    }
});
$('#rebuild_toggle input').on('change', function () {
    if (this.checked) {
        map.addLayer(rebuilds);
        map.addLayer(statesLayer);
        map.removeLayer(communityLayer);
        statesLayer.setStyle({"fillOpacity":0}); 
        $("#parcels_toggle, #nb_toggle").removeClass('active');
    } else {
        statesLayer.setStyle({"fillOpacity":0}); 
        map.removeLayer(rebuilds);
    }
});
$('#tornado_toggle input').on('change', function () {
    if (this.checked) {
        map.addLayer(tornadoLayer);
        tornadoLayer.setStyle({"fillOpacity":0}); 
        $("#parcels_toggle").removeClass('active');
        $("#tornadoOn").addClass('tornado');
        $("#tornadoOn").html("2011 tornado damage on");
        statesLayer.setStyle({"fillOpacity":0}); 
    } else {
        map.removeLayer(tornadoLayer);
        $("#tornadoOn").removeClass('tornado');
        $("#tornadoOn").html("2011 tornado damage off");
    }
});
$('#parcels_toggle input').on('change', function () {
    if (this.checked) {
         $("#nb_toggle, #rebuild_toggle, #demo_toggle, #tornado_toggle").removeClass('active');
         map.removeLayer(demos);
         map.removeLayer(rebuilds);
         map.removeLayer(tornadoLayer);
         map.removeLayer(statesLayer);
         map.addLayer(communityLayer);
        map.removeLayer(demos);
        map.removeLayer(rebuilds);
    } else {
      $("#rebuild_toggle, #demo_toggle").addClass('active');
          map.addLayer(rebuilds);
          map.addLayer(demos);
        map.removeLayer(communityLayer);
        map.addLayer(statesLayer);
    }
});

$('#nb_toggle input').on('change', function () {
    if (this.checked) {
         $("#parcels_toggle, #rebuild_toggle, #demo_toggle, #tornado_toggle").removeClass('active');
         map.removeLayer(demos);
         map.removeLayer(rebuilds);
         map.removeLayer(tornadoLayer);
         map.removeLayer(communityLayer);
         map.addLayer(statesLayer);
          statesLayer.eachLayer(function (layer) {    
        layer.setStyle({          
          weight: 2,
          opacity: 1,
          color: '#333',
          fillOpacity: 1,
          fillColor: getColor(layer.feature.properties.Name,slider.value())
        });  
    });
        map.removeLayer(demos);
        map.removeLayer(rebuilds);
    } else {
      $("#rebuild_toggle,#demo_toggle").addClass('active');
        map.addLayer(rebuilds);
        map.addLayer(demos);
        statesLayer.setStyle({"fillOpacity":0}); 
        map.removeLayer(communityLayer);
        map.addLayer(statesLayer);
    }
});

//MAP STYLES
  var popup = new L.Popup({ autoPan: false });

   statesLayer = L.geoJson(data,  {
      style: getStyle,
      onEachFeature: onEachFeature
  }).addTo(map);

   tornadoLayer = L.geoJson(data2,  {
      style: getStyle2,
      onEachFeature: onEachFeature2
  });

  communityLayer = L.geoJson(data3,  {
      style: getStyle3,
      onEachFeature: onEachFeature3
  }).addTo(map);


  function getStyle(feature) {
      return {
          weight: 2,
          opacity: 1,
          color: '#333',
          fillOpacity: 0,
          fillColor: getColor(feature.properties.Name,slider.value())
      };
  }

  function getStyle2(feature) {
      return {
          weight: 2,
          opacity: 1,
          color: '#B35817',
          fillOpacity: 0,
          fillColor: getColor(feature.properties.Name,slider.value())
      };
  }

  function getStyle3(feature) {
      return {
          weight: 2,
          opacity: 1,
          color: '#333',
          fillOpacity: 1,
          fillColor: getColor3(feature.properties.CommName,slider.value())
      };
  }

  // get color depending on population density value
  function getColor(d,year) {
          return timeNeighborhoods(year,false,d) >= 100  ? '#550000' :
          timeNeighborhoods(year,false,d) >= 50  ? '#801515' :
          timeNeighborhoods(year,false,d) >= 20  ? '#AA3939' :
          timeNeighborhoods(year,false,d) >= 0  ? '#FFAAAA' :
          '#ddd';
  }

  function getColor3(d,year) {
      // var wrecked = aggregateCommunities(slider.value(),false,d);
      // var rebuilt = aggregateCommunities(slider.value(),true,d);
      // var pct = wrecked / (wrecked + rebuilt);

      //  return pct >= .80  ? '#550000' :
      //     pct >= .60  ? '#801515' :
      //     pct >= .20  ? '#AA3939' :
      //     pct >= 0  ? '#FFAAAA' :
      //     '#ddd';

         return timeCommunities(year,false,d) >= 200  ? '#550000' :
          timeCommunities(year,false,d) >= 100  ? '#801515' :
          timeCommunities(year,false,d) >= 50  ? '#AA3939' :
          timeCommunities(year,false,d) >= 0  ? '#FFAAAA' :
          '#ddd';
   }


//MAP INTERACTIONS
  function onEachFeature(feature, layer) {
      layer.on({
          mousemove: mousemove,
          mouseout: mouseout,
          click: zoomToFeature
      });
  }

  function onEachFeature2(feature, layer) {
      layer.on({
          click: zoomToFeature
      });
  }

  var closeTooltip;

  function mousemove(e) {
      var layer = e.target;

      popup.setLatLng(e.latlng);

      var wrecked = aggregateNeighborhoods(slider.value(),false,layer.feature.properties.Name);
      var rebuilt = aggregateNeighborhoods(slider.value(),true,layer.feature.properties.Name);
      var totals = wrecked + rebuilt;
      
      if (slider.value() == 2001) { var year = "Total"; }
      else { var year = slider.value(); }

      popup.setContent('<div class="marker-title">' + layer.feature.properties.Name + '</div><div class="teardown">Accumulated Not Rebuilt: ' + timeNeighborhoods(slider.value(),false,layer.feature.properties.Name) + '</div><div>Teardowns ' + year + ': ' + totals + '</div><div class="teardown">Not Rebuilt ' + year + ': ' + wrecked + ' (' + d3.format('%')(wrecked / totals) + ')</div><div class="rebuild">Rebuilt: ' + year + ': ' + rebuilt + ' (' +  d3.format('%')(rebuilt / totals) + ')</div>');


      if (!popup._map) popup.openOn(map);
      window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          color: '#f00'
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout(e) {
      var layer = e.target;
       layer.setStyle({
           color: "#333"
       });
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }

  function zoomToFeature(e) {
    var layer = e.target;
      redrawChart(layer.feature.properties.Name,false);
      map.fitBounds(layer.getBounds());
      $('#nb_title').html(layer.feature.properties.Name);
      countRecords(slider.value(),layer.feature.properties.Name,false);
      $("#total").html(Number($("#teardownsNum").text()) + Number($("#rebuildsNum").text()));
  }

 function onEachFeature3(feature, layer) {
      layer.on({
          mousemove: mousemove3,
          mouseout: mouseout3,
          click: zoomToFeature3
      });
  }

   function mousemove3(e) {
      var layer = e.target;

      popup.setLatLng(e.latlng);
      
      var wrecked = aggregateCommunities(slider.value(),false,layer.feature.properties.CommName);
      var rebuilt = aggregateCommunities(slider.value(),true,layer.feature.properties.CommName);
      var totals = wrecked + rebuilt;

      if (slider.value() == 2001) { var year = "Total"; }
      else { var year = slider.value(); }

      popup.setContent('<div class="marker-title">' + layer.feature.properties.CommName + '</div><div class="teardown">Accumulated Not Rebuilt: ' + timeCommunities(slider.value(),false,layer.feature.properties.CommName) + '</div><div>Teardowns ' + year + ': ' + totals + '</div><div class="teardown">Not Rebuilt ' + year + ': ' + wrecked + ' (' + d3.format('%')(wrecked / totals) + ')</div><div class="rebuild">Rebuilt: ' + year + ': ' + rebuilt + ' (' +  d3.format('%')(rebuilt / totals) + ')</div>');
      

      if (!popup._map) popup.openOn(map);
      window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          color: '#f00'
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout3(e) {
      var layer = e.target;
       layer.setStyle({
           color: "#333"
       });
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }

  function zoomToFeature3(e) {
    var layer = e.target;
      redrawChart(layer.feature.properties.CommName,true);
      map.fitBounds(layer.getBounds());
      $('#nb_title').html(layer.feature.properties.CommName);
      // countRecords(slider.value(),layer.feature.properties.CommName,true);
      $("#teardownsNum").html(aggregateCommunities(slider.value(),false,layer.feature.properties.CommName));
      $("#rebuildsNum").html(aggregateCommunities(slider.value(),true,layer.feature.properties.CommName));
      $("#total").html(Number($("#teardownsNum").text()) + Number($("#rebuildsNum").text()));
  }

});
});
});

var chart;
nv.addGraph(function() {
  chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 20, left: 40})
      .showValues(false)
      .tooltips(true)
      .stacked(true)
      .showLegend(false)
      .showControls(false);

  chart.yAxis
      .tickFormat(d3.format(','));

  d3.select('#chart svg')
      .datum(fetchData("Minneapolis",false))
    .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

function aggregateDemos(year,status,region){
  if (region == "Minneapolis"){
    var count = d3.nest()
    .key(function(d) { return d.year == year && d.rebuild == status; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  } else {
    var count = d3.nest()
    .key(function(d) { return d.year == year && d.rebuild == status && d.neighborhood == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  }
}

function aggregateCommunities(year,status,region){
  if (year == 2001){
    var count = d3.nest()
    .key(function(d) { return d.rebuild == status && d.CommName == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  } else {
    var count = d3.nest()
    .key(function(d) { return d.year == year && d.rebuild == status && d.CommName == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  }

}

function timeCommunities(year,status,region){
  if (year == 2001){
    var count = d3.nest()
    .key(function(d) { return d.rebuild == status && d.CommName == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  } else {
    var count = d3.nest()
    .key(function(d) { return d.year <= year && d.rebuild == status && d.CommName == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  }

}

function timeNeighborhoods(year,status,region){
  if (year == 2001){
    var count = d3.nest()
    .key(function(d) { return d.rebuild == status && d.neighborhood == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  } else {
    var count = d3.nest()
    .key(function(d) { return d.year <= year && d.rebuild == status && d.neighborhood == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  }

}

function aggregateNeighborhoods(year,status,region){
  if (year == 2001){
    var count = d3.nest()
    .key(function(d) { return d.rebuild == status && d.neighborhood == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  } else {
    var count = d3.nest()
    .key(function(d) { return d.year == year && d.rebuild == status && d.neighborhood == region; })
    .rollup(function(v) { return v.length; })
    .entries(dataTeardowns);
    if (count.length > 1 && count[1].values > 2000) { return count[0].values; }
    else if (count.length > 1 && count[1].values < 2000) { return count[1].values; }
    else { return 0; }
  }

}

function redrawChart(region,community){
    d3.select('#chart svg').datum(fetchData(region,community)).transition().duration(300).call(chart);
    nv.utils.windowResize(chart.update);
}

function fetchData(region,community){

  if (community == false) {
return [
  {
    "key": "Teardowns",
    "color": "#801515",
    "values": [
      { 
        "label" : "2002" ,
        "value" : aggregateDemos(2002,false,region)
      } , 
      { 
        "label" : "2003" ,
        "value" : aggregateDemos(2003,false,region)
      } , 
      { 
        "label" : "2004" ,
        "value" : aggregateDemos(2004,false,region)
      } ,  
      { 
        "label" : "2005" ,
        "value" : aggregateDemos(2005,false,region)
      } , 
      { 
        "label" : "2006" ,
        "value" : aggregateDemos(2006,false,region)
      } , 
      {
        "label" : "2007" ,
        "value" : aggregateDemos(2007,false,region)
      } , 
      { 
        "label" : "2008" ,
        "value" : aggregateDemos(2008,false,region)
      } , 
      { 
        "label" : "2009" ,
        "value" : aggregateDemos(2009,false,region)
      } , 
      { 
        "label" : "2010" ,
        "value" : aggregateDemos(2010,false,region)
      } , 
      { 
        "label" : "2011" ,
        "value" : aggregateDemos(2011,false,region)
      }
       , 
      { 
        "label" : "2012" ,
        "value" : aggregateDemos(2012,false,region)
      }
       , 
      { 
        "label" : "2013" ,
        "value" : aggregateDemos(2013,false,region)
      }
       , 
      { 
        "label" : "2014" ,
        "value" : aggregateDemos(2014,false,region)
      }
       , 
      { 
        "label" : "2015" ,
        "value" : aggregateDemos(2015,false,region)
      }
    ]
  },
  {
    "key": "Rebuilds",
    "color": "#777",
    "values": [
      { 
        "label" : "2002" ,
        "value" : aggregateDemos(2002,true,region)
      } , 
      { 
        "label" : "2003" ,
        "value" : aggregateDemos(2003,true,region)
      } , 
      {
        "label" : "2004" ,
        "value" : aggregateDemos(2004,true,region)
      } , 
      { 
        "label" : "2005" ,
        "value" : aggregateDemos(2005,true,region)
      } , 
      { 
        "label" : "2006" ,
        "value" : aggregateDemos(2006,true,region)
      } , 
      {
        "label" : "2007" ,
        "value" : aggregateDemos(2007,true,region)
      } , 
      { 
        "label" : "2008" ,
        "value" : aggregateDemos(2008,true,region)
      } , 
      { 
        "label" : "2009" ,
        "value" : aggregateDemos(2009,true,region)
      } , 
      { 
        "label" : "2010" ,
        "value" : aggregateDemos(2010,true,region)
      } , 
      { 
        "label" : "2011" ,
        "value" : aggregateDemos(2011,true,region)
      }
       , 
      { 
        "label" : "2012" ,
        "value" : aggregateDemos(2012,true,region)
      }
       , 
      { 
        "label" : "2013" ,
        "value" : aggregateDemos(2013,true,region)
      }
       , 
      { 
        "label" : "2014" ,
        "value" : aggregateDemos(2014,true,region)
      }
       , 
      { 
        "label" : "2015" ,
        "value" : aggregateDemos(2015,true,region)
      }
    ]
  }
]
} else if (community == true){

return [
  {
    "key": "Teardowns",
    "color": "#801515",
    "values": [
      { 
        "label" : "2002" ,
        "value" : aggregateCommunities(2002,false,region)
      } , 
      { 
        "label" : "2003" ,
        "value" : aggregateCommunities(2003,false,region)
      } , 
      { 
        "label" : "2004" ,
        "value" : aggregateCommunities(2004,false,region)
      } ,  
      { 
        "label" : "2005" ,
        "value" : aggregateCommunities(2005,false,region)
      } , 
      { 
        "label" : "2006" ,
        "value" : aggregateCommunities(2006,false,region)
      } , 
      {
        "label" : "2007" ,
        "value" : aggregateCommunities(2007,false,region)
      } , 
      { 
        "label" : "2008" ,
        "value" : aggregateCommunities(2008,false,region)
      } , 
      { 
        "label" : "2009" ,
        "value" : aggregateCommunities(2009,false,region)
      } , 
      { 
        "label" : "2010" ,
        "value" : aggregateCommunities(2010,false,region)
      } , 
      { 
        "label" : "2011" ,
        "value" : aggregateCommunities(2011,false,region)
      }
       , 
      { 
        "label" : "2012" ,
        "value" : aggregateCommunities(2012,false,region)
      }
       , 
      { 
        "label" : "2013" ,
        "value" : aggregateCommunities(2013,false,region)
      }
       , 
      { 
        "label" : "2014" ,
        "value" : aggregateCommunities(2014,false,region)
      }
       , 
      { 
        "label" : "2015" ,
        "value" : aggregateCommunities(2015,false,region)
      }
    ]
  },
  {
    "key": "Rebuilds",
    "color": "#777",
    "values": [
      { 
        "label" : "2002" ,
        "value" : aggregateCommunities(2002,true,region)
      } , 
      { 
        "label" : "2003" ,
        "value" : aggregateCommunities(2003,true,region)
      } , 
      {
        "label" : "2004" ,
        "value" : aggregateCommunities(2004,true,region)
      } , 
      { 
        "label" : "2005" ,
        "value" : aggregateCommunities(2005,true,region)
      } , 
      { 
        "label" : "2006" ,
        "value" : aggregateCommunities(2006,true,region)
      } , 
      {
        "label" : "2007" ,
        "value" : aggregateCommunities(2007,true,region)
      } , 
      { 
        "label" : "2008" ,
        "value" : aggregateCommunities(2008,true,region)
      } , 
      { 
        "label" : "2009" ,
        "value" : aggregateCommunities(2009,true,region)
      } , 
      { 
        "label" : "2010" ,
        "value" : aggregateCommunities(2010,true,region)
      } , 
      { 
        "label" : "2011" ,
        "value" : aggregateCommunities(2011,true,region)
      }
       , 
      { 
        "label" : "2012" ,
        "value" : aggregateCommunities(2012,true,region)
      }
       , 
      { 
        "label" : "2013" ,
        "value" : aggregateCommunities(2013,true,region)
      }
       , 
      { 
        "label" : "2014" ,
        "value" : aggregateCommunities(2014,true,region)
      }
       , 
      { 
        "label" : "2015" ,
        "value" : aggregateCommunities(2015,true,region)
      }
    ]
  }
]  
}
}


});
// });
// });
</script>
</html>