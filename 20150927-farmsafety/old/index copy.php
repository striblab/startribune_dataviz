<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minnesota Farm Deaths</title>
  <meta name="description" content="Minnesota Farm Deaths">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="js/d3.slider-master/d3.slider.css" /> 
  <link rel="stylesheet" href="http://apps.startribune.com/news/dataviz-css-master/startribune_dataviz_styles.css" /> 


<style>
  @import url("https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css");

  body { font-family:"Poynter Serif RE"; }
  h4, h5, h6 { font-family:"Whitman OSF"; }
  h1, h2, h3 { font-family:"Popular"; }

	#wrapper { width:95%; }
	.module { height:auto; width:100%; margin:7px; }

  #rightside { float:right; width:50%; height:auto; }
	#map { height:190px !important;  width:100%; }
	.leaflet-control-attribution{ display:none !important; }
	.mapbox-logo{ display:none !important; }

  .barDiv_b { display:inline-block; margin:2px; padding-left:7px; width:100px; float:left; font-size:12px; }
  .barDiv { display:inline-block; margin:5px; padding-left:7px; width:70%; height:20px; text-align:left; float:right; border-left:1px solid #000;}
  .barLine:hover{ cursor:pointer; }
  .breaker { clear:both; }
  .records { font-weight:900; font-family:"Popular Bold"; margin-right:3px; font-size:1.6em; color:#de2d26; display: inline-block; width:25px; }

  .dude_box { background-color:#de2d26; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:11px; padding:1px; text-decoration:none; font-weight:900; width:3px; height:20px; margin-left:1px; }
  .dude_box:active { background-color:#333; }
  .dude_box:hover { cursor:pointer; background-color:#333; }

	.downloadButton:hover { background-color:#ad645e !important; }
  .downloadButton { background-color:#8B2219; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family: "Benton Sans",Helvetica,Arial,sans-serif; font-size:16px; padding:10px 13px; text-decoration:none; font-weight:900; margin:5px; width:100%; }
  .downloadButton:active { background-color:#ad645e; }

  button:focus {outline:0 !important;}

  .d3-slider-handle { position: absolute; width: 1.2em; height: 1.2em; border: 1px solid #de2d26; border-radius: 4px; background: #eee; background: #de2d26; z-index: 3; }
  .d3-slider-handle:hover { background: #ad645e; cursor:pointer; }
  #sliderDiv { height:20px; padding:15px; }

  .mn{ fill:#44c767; pointer-events: all; } 
  .state-groups:hover{ opacity:.5 !important; cursor:pointer; }
  .state-groups text{ font-size: 9px !important; fill:#fff !important; }
  .state-groups text:hover{ cursor:pointer; pointer-events: all; }
  text { font-family: sans-serif; font-size: 9px; font-color:#fff !important; fill:#000 !important; cursor:default; }
  .cartoButton:hover { background-color:#ad645e !important; }
  .cartoButton { background-color:#8B2219; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family: "Benton Sans",Helvetica,Arial,sans-serif; font-size:16px; padding:10px 13px; text-decoration:none; font-weight:900; margin:2px; width:100%; }
  .cartoButton:active { background-color:#ad645e; }

  .states text{ color:white !important; font-size: 10px !important; pointer-events: all; }
  .dq1{ fill:#040506; color:white !important; pointer-events: all; }
  .dq2{ fill:#22282c; color:white !important; pointer-events: all; }
  .dq3{ fill:#404b52; color:white !important; pointer-events: all; }
  .dq4{ fill:#6c7f8c; color:white !important; pointer-events: all; }
  .mid{ fill:#ccc; }
  .dq5{ fill:#fcae91; color:white !important; pointer-events: all; }
  .dq6{ fill:#fb6a4a; color:white !important; pointer-events: all; }
  .dq7{ fill:#de2d26; color:white !important; pointer-events: all; }
  .dq8{ fill:#a50f15; color:white !important; pointer-events: all; }
  .none{ fill:#fff; pointer-events: all; }
  .selected { stroke-width:2px; stroke:#333 !important; }
  .faded { opacity:.2 !important; }
  text.none { fill:#000 !important; color:#000 !important; pointer-events: all; }

  #cartoMapChatter { height:125px; }
  .tdq1{ color:#040506; font-weight:900; }
  .tdq2{ color:#22282c; font-weight:900; }
  .tdq3{ color:#404b52; font-weight:900; }
  .tdq4{ color:#6c7f8c; font-weight:900; }
  .tmid{ color:#ccc; font-weight:900; }
  .tdq5{ color:#fcae91; font-weight:900; }
  .tdq6{ color:#fb6a4a; font-weight:900; }
  .tdq7{ color:#de2d26; font-weight:900; }
  .tdq8{ color:#a50f15; font-weight:900; }
  .tnone{ color:#000; font-weight:900; }

  #sliderDiv { background:#fff; z-index:9999 !important; }
  #mapbox { width:100%; display:inline-block; }
  #rankbox { width:100%; display:inline-block; }

  #bigChart { width:45%; height:auto; float:left; }
  #deathsMap { width:90%; }

  #buttonBox { float:right; width:100%; }
  .legend label, .legend span { display:block; float:left; height:15px; width:9%; text-align:center; font-size:11px; color:#808080; }

  #victims_nerdbox { width:100%; height:300px; padding:10px; }
  #victims_nerdbox div { margin:10px; }
  .victims_nerdbox { width:100%; min-height:300px; background:#ddd; display:inline-block; margin:5px; padding:10px; }
  .victims_nerdbox:hover { cursor:pointer; }
  .victimCard { width:30%; height:auto; background:#ddd; display:inline-block; margin:5px; padding:10px; }
  .victimCard:hover { cursor:pointer; opacity:.5; }
  #victimsHeader { font-size: 1.8em; float: left; clear: left; }
  #recordsReturned { float:right; font-size: 1.6em; font-weight: 600; }
  .victimName { font-size:1.1em; font-family:"Whitman-Bold-OSF"; font-weight:900; }
  .victimAge { font-size:1.3em; font-family:"Whitman-Bold-OSF"; font-weight:normal; }
  .details { margin-top:10px; }

  .zoom{ text-decoration:none;font-weight:bold;color:steelblue; float:left !important;}
  #headerDiv { background:white; }

  .deathIcon img { width:150px; height:100px; }

  #filter input:focus { box-shadow: 0 0 5px #61bd1a; padding: 3px 0px 3px 3px; border: 1px solid #61bd1a; }
  #filter input { margin:0; width:100%; height:30px; line-height:120%; font-size: 1em; -webkit-appearance: none;
    -webkit-border-radius:0; border-radius:0; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); color: rgba(0,0,0,0.75);   -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; background-color: #fff !important; font-family: inherit; border: 1px solid #ddd !important; }
  input:focus {outline:0 !important;}

   @media (max-width: 970px) {
      .victimCard { width:45%; }
      #map { width:100%; }
      #rightside { width:100%; }
      #bigChart { width:100%; }
      body { overflow-x:hidden; }
    }
   @media (max-width: 710px) {
      #buttonBox { width:100%; }
      #carto1, #carto2 { height:auto; width:100%;}
    }
   @media (max-width: 650px) {
      .victimCard { width:94%; }
    }
</style>


</head>

<body>

<div id="wrapper">

<div class="breaker"></div>

<div id="headerDiv">
<div id="sliderDiv"><div id="slider"></div></div>

<div class="breaker"></div>

<div class="module" id="bigChart">
<h3>Minnesota farm deaths by type</h3>
<div id="chart">

  <div id="atv" class="barLine">
  <div class="barDiv_b"><span id="recordsATV" class="records"></span> <span class="chartLabel">ATV</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="silo" class="barLine">
  <div class="barDiv_b"><span id="recordsSilo" class="records"></span> <span class="chartLabel">Silo</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="environmental" class="barLine">
  <div class="barDiv_b"><span id="recordsEnvironmental" class="records"></span> <span class="chartLabel">Landscape</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="livestock" class="barLine">
  <div class="barDiv_b"><span id="recordsLivestock" class="records"></span> <span class="chartLabel">Livestock</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="skid" class="barLine">
  <div class="barDiv_b"><span id="recordsSkid" class="records"></span> <span class="chartLabel">Skid</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="truck" class="barLine">
  <div class="barDiv_b"><span id="recordsTruck" class="records"></span> <span class="chartLabel">Truck</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="tractor" class="barLine">
  <div class="barDiv_b"><span id="recordsTractor" class="records"></span> <span class="chartLabel">Tractor</span></div>
  <div class="barDiv"></div>
  </div>

<div class="breaker"></div>

  <div id="other" class="barLine">
  <div class="barDiv_b"><span id="recordsOther" class="records"></span> <span class="chartLabel">Other</span></div>
  <div class="barDiv"></div>
  </div>
</div>

<div id="map"></div>
</div>

<div id="rightside">
<div id="victims_nerdbox">Select victim name for more details</div>
</div>

<div class="breaker"></div>

<a href='javascript:void(0);' class='zoom'>Reset View</a>

<div id="victimsHeader">Accident Victims</div>
<div id="recordsReturned"></div>
<div id="filter"><input type="search" id="filter_box" placeholder="Enter a victim's name or a keyword"></input></div>
</div>

<div class="breaker"></div>

<div class="module" id="victimCards">
<div id="victims"></div>
</div>


<a href="https://github.com/jhargarten/dataviz-projects/blob/master/strib/20150927-farmsafety/data/farmdeaths.zip?raw=true" target="new_"><button class="downloadButton">&#9660; Download Data</button></a>
</div>
  
</body>

<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js" type="text/javascript"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.js'></script>
<script src="js/d3.slider-master/d3.slider.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/jquery.sticky.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1eGWgtyT4ouwi6DKZF8rE8eTlOjTeBrk3KozImcCFNyA&sheet=Sheet1

<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=oR8e3j3xA7Z3sA8DdxEopk_dwa1OmXkaD2j3nHT7JajVgFrIcex9YgeWpim9c2Nn8kpF7V9Jmm7R5GhjYPiojNc7nz-Tnze4OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TLmt2PNm_0LkIyvgo3_FyFlMqvjY5AMuWPb-SbbO92YRo-6y4IMKOTzS4f-N1wum-5y7FLqOV0Tk27B8Rh4QJTQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var data = <?php echo $jsonData; ?>
</script>

<script>
//RESET BUTTON
$(".zoom").click(function() {
$('#filter_box').val('');
$(".barDiv_b").css("background-color","transparent");
$("#victims_nerdbox").html("Select victim name for more details");
drawChart("");
drawCards("","");
clearMarkers(deathsLayer,"all","");
slider.value("2003");
  var chatter = document.getElementById('cartoMapChatter');
  chatter.innerHTML = "Minnesota has the most farm-related deaths in the American Midwest and ranks highly in fatal farm accidents nationally. While fatal farm accidents decreased in most states between the last two decades, in Minnesota they actually increased by 37 percent.";

    d3.selectAll("rect").attr('class', function(d) {
         return d.color;
      });
});

//DEATHS MAP
var southWest = L.latLng(40.78054, -80.22217),
northEast = L.latLng(49.56798, -110.76416),
bounds = L.latLngBounds(southWest, northEast);

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = L.mapbox.map('map', 'mapbox.light', {minZoom: 5, maxBounds: bounds, legendControl: { position: 'topright' }}).setView([46.543750,-94.493408], 5);

map.scrollWheelZoom.disable();
// map.touchZoom.disable();
if (map.tap) map.tap.disable();

//MARKERS
  var deathsLayer = L.geoJson(null, { pointToLayer: scaledPoint }).addTo(map);

for (var i = 0; i < data.Sheet1.length; i++){
  var geojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [data.Sheet1[i].longitude, data.Sheet1[i].latitude]
    },
    "properties": {
      "name": data.Sheet1[i].victim_name,
      "age": data.Sheet1[i].victim_age,
      "city": data.Sheet1[i].injury_city,
      "icon": data.Sheet1[i].death_icon,
      "year": data.Sheet1[i].death_year
    }
  }
];

  deathsLayer.addData(geojson);
}


function pointColor(feature) {
  var q1 = "#333";
  var q2 = "#333";
  var q3 = "#333";
  var q4 = "#333";
  var q5 = "#333";
  var q6 = "#333";

  if (feature.properties.icon == "truck") { return q6; }
  if (feature.properties.icon == "tractor") { return q5; }
  if (feature.properties.icon == "skid loader") { return q4; }
  if (feature.properties.icon == "grain bin/silo") { return q3; }
  if (feature.properties.icon == "environmental") { return q3; }
  if (feature.properties.icon == "livestock") { return q2; }
  if (feature.properties.icon == "ATV") { return q2; }
  if (feature.properties.icon == "grain bin/silo") { return q2; }
  else { return q1; }
}

function pointRadius(feature) {
  return 5;
  // if (feature.properties.Ons >= 700) { return 12; }
  // if (feature.properties.Ons >= 500) { return 10; }
  // if (feature.properties.Ons >= 300) { return 8; }
  // if (feature.properties.Ons >= 100) { return 6; }
  // if (feature.properties.Ons >= 50) { return 4; }
  // else { return 2; }
}

function scaledPoint(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: pointRadius(feature),
        fillColor: pointColor(feature),
        strokeColor: "#de2d26",
        strokeWidth: "2",
        fillOpacity: .3,
        weight: .3,
        color: '#fff'
    }).bindPopup(
        '<h1>' + feature.properties.name + ' - ' + feature.properties.age + '</h1><div>' + feature.properties.city + ' - ' + feature.properties.year + '</div>Died in ' + feature.properties.icon + ' accident');
}

function clearMarkers(markers,icon,year){
    markers.eachLayer(function (layer) { 
     if (icon == "" || icon == "all"){
    if(layer.feature.properties.year == year) {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":.2}); 
      }
    }
    else if (year == "" || year == "2003"){
    if(layer.feature.properties.icon == icon) {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":.2}); 
      }
    }
    else {
    if(layer.feature.properties.year == year && layer.feature.properties.icon == icon) {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":.2}); 
      }
    } 
    });
}

function highlightDeath(markers,name){
 markers.eachLayer(function (layer) { 
    if(layer.feature.properties.name == name) {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#de2d26","fillOpacity":.2}); 
      }
    });
}

</script>

<script>
//SCROLLING ELEMENTS
// $("#headerDiv").sticky({topSpacing:1});

//SEARCH FILTER
$( document ).ready(function() {
     $('#filter_box').keyup(function(i){
        $('.victimCard').hide();
        i = 1;
        clearMarkers(deathsLayer,"all","");
        var txt = $('#filter_box').val();
        $('.victimCard').each(function(){
          var records = document.getElementById('recordsReturned');
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
            records.innerHTML = i++;
               $(this).show();
           }
        });
    });
});

shiftchart("");

function shiftchart(year) {

  var records = document.getElementById('recordsReturned');

  console.log("year");

  $( ".barDiv_b" ).click(function() {
   $(".barDiv_b").css("background-color","transparent");
   $(this).css("background-color","#ddd");
   $('#filter_box').val('');
  });
  $( "#atv" ).click(function() {
    clearMarkers(deathsLayer,"ATV",year);
    drawCards(year,"ATV");
    records.innerHTML = $('#recordsATV').text();
  });
  $( "#silo" ).click(function() {
    clearMarkers(deathsLayer,"grain bin/silo",year);
    drawCards(year,"grain bin/silo");
    records.innerHTML = $('#recordsSilo').text();
  });
  $( "#environmental" ).click(function() {
    clearMarkers(deathsLayer,"environmental",year);
    drawCards(year,"environmental");
    records.innerHTML = $('#recordsEnvironmental').text();
  });
  $( "#livestock" ).click(function() {
    clearMarkers(deathsLayer,"livestock",year);
    drawCards(year,"livestock");
    records.innerHTML = $('#recordsLivestock').text();
  });
  $( "#skid" ).click(function() {
    clearMarkers(deathsLayer,"skid loader",year);
    drawCards(year,"skid loader");
    records.innerHTML = $('#recordsSkid').text();
  });
  $( "#truck" ).click(function() {
    clearMarkers(deathsLayer,"truck",year);
    drawCards(year,"truck");
    records.innerHTML = $('#recordsTruck').text();
  });
  $( "#tractor" ).click(function() {
    clearMarkers(deathsLayer,"tractor",year);
    drawCards(year,"tractor");
    records.innerHTML = $('#recordsTractor').text();
  });
  $( "#other" ).click(function() {
    clearMarkers(deathsLayer,"other",year);
    drawCards(year,"other");
    records.innerHTML = $('#recordsOther').text();
  });
}

//YEAR SLIDER
var slide_spot=1990;
var slider = d3.slider().axis(true);

d3.select('#slider').call(slider.min(2003).max(2014).value(2003).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(12)).step(1).on("slide", function(evt, value) {

  shiftchart("" + value + "");
  $('#filter_box').val('');
  $("#victims_nerdbox").html("Select victim name for more details");

  $(".barDiv_b").css("background-color","transparent");
  d3.selectAll(".victimCard").style("background-color","#ddd");
  drawChart("" + value + "");
  drawCards("" + value + "","");
  clearMarkers(deathsLayer,"","" + value + "");
  }));

d3.select("text").text("All");
</script>

<script>
//INITIALIZE
drawChart("");
drawCards("","");
clearMarkers(deathsLayer,"all","");


//DEATHS CHART
function drawChart(year){
  d3.selectAll(".barDiv").html("");
  var recordsATV = document.getElementById('recordsATV');
  var recordsEnvironmental = document.getElementById('recordsEnvironmental');
  var recordsSilo = document.getElementById('recordsSilo');
  var recordsLivestock = document.getElementById('recordsLivestock');
  var recordsSkid = document.getElementById('recordsSkid');
  var recordsTruck = document.getElementById('recordsTruck');
  var recordsTractor = document.getElementById('recordsTractor');
  var records = document.getElementById('recordsReturned');

  if (year == "" || year == "2003") {
  d3.select("#atv .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsATV.innerHTML = 0; return d.death_icon == "ATV"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsATV.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#environmental .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsEnvironmental.innerHTML = 0; return d.death_icon == "environmental"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsEnvironmental.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#silo .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsSilo.innerHTML = 0; return d.death_icon == "grain bin/silo"; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsSilo.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#livestock .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsLivestock.innerHTML = 0; return d.death_icon == "livestock"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsLivestock.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#skid .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsSkid.innerHTML = 0; return d.death_icon == "skid loader"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsSkid.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#truck .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsTruck.innerHTML = 0; return d.death_icon == "truck"; }))
  .enter().append("button").attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsTruck.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#tractor .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsTractor.innerHTML = 0; return d.death_icon == "tractor"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsTractor.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#other .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsOther.innerHTML = 0; return d.death_icon == "other" ||  d.death_icon == "Other farm machine"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsOther.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });
}

  else {
  d3.select("#atv .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsATV.innerHTML = 0; return d.death_icon == "ATV" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsATV.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#environmental .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsEnvironmental.innerHTML = 0; return d.death_icon == "environmental" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsEnvironmental.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#silo .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsSilo.innerHTML = 0; return d.death_icon == "grain bin/silo" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsSilo.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#livestock .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsLivestock.innerHTML = 0; return d.death_icon == "livestock" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsLivestock.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#skid .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsSkid.innerHTML = 0; return d.death_icon == "skid loader" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsSkid.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#truck .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsTruck.innerHTML = 0; return d.death_icon == "truck" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsTruck.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#tractor .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsTractor.innerHTML = 0; return d.death_icon == "tractor" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsTractor.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#other .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsOther.innerHTML = 0; return (d.death_icon == "other" ||  d.death_icon == "Other farm machine") && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; recordsOther.innerHTML = i + 1; return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  }
}

//VICTIMS LIST
function drawCards(year,type){
  d3.selectAll("#victims").html("");
  var victimBox = document.getElementById('victims_nerdbox');
  var records = document.getElementById('recordsReturned');

  var detailsBox = d3.select("#victims").append("div")
  .attr("x",60)
  .attr("y",60)
  .attr("class","victims_nerdbox")
  .style("display","none")
  .html("")
  .on("mousedown", function(d, i){
    d3.select(this).style("display","none");
});

if (type == ""){

  if (year == "" || year == "2003") {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1)
  .enter()
  .append("div")
  .attr("class","victimCard")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#d4131b");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       victimBox.innerHTML = "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>";
})
  .html(function (d,i){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
    records.innerHTML = i + 1;
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div>"; });
}
  else {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_year == year; }))
  .enter()
  .append("div")
  .attr("class","victimCard")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#d4131b");
       // d3.selectAll(".victimCard").style("display","none");
     //  detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       victimBox.innerHTML = "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>";
     })
  .html(function (d,i){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
    records.innerHTML = i + 1;
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div>"; });
  }

}
else {

  if (year == "" || year == "2003") {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_icon == type; }))
  .enter()
  .append("div")
  .attr("class","victimCard")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#d4131b");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
     //  detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       victimBox.innerHTML = "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>";
     })
  .html(function (d){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div>"; });
}
  else {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_icon == type && d.death_year == year; }))
  .enter()
  .append("div")
  .attr("class","victimCard")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","#transparent");
       d3.select(this).style("background-color","#d4131b");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       victimBox.innerHTML = "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>";
     })
  .html(function (d){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div>"; });
  }

}

}
</script>


<script>
//RESPONSIVE SVG
var aspect = 440 / 300, carto1 = $("#carto1 svg"), carto2 = $("#carto2 svg");
$(document).ready(function() { 
  var targetWidth = carto1.parent().width();  
  var targetHeight = carto1.parent().height();
  carto1.attr("width", targetWidth);   
  carto1.attr("height", targetHeight);  
  carto2.attr("width", targetWidth);   
  carto2.attr("height", targetHeight);
});
$(window).on("resize", function() {   
  var targetWidth = carto1.parent().width();  
  var targetHeight = carto1.parent().height();
  carto1.attr("width", targetWidth);   
  carto1.attr("height", targetHeight);  
  carto2.attr("width", targetWidth);   
  carto2.attr("height", targetHeight);
});
</script>

</html>