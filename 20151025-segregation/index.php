<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minnesota School Segregation</title>
  <meta name="description" content="Minnesota School Segregation">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="http://apps.startribune.com/news/dataviz-css-master/startribune_dataviz_styles.css" /> 
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' />
  <link rel="stylesheet" href="js/d3.slider-master/d3.slider.css" /> 
  <link href="js/c3-master/c3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" /> 

<style>
  #topChatter { width:100%; height:150px; background-color:tomato; }

  #map { width:100%; height:250px; }
  .mapbox-logo, .leaflet-control-attribution{ display:none !important; }
  .map-legend .swatch { width:20px; height:20px; float:left; margin-right:10px; }
  .leaflet-popup-close-button { display: none; }
  .leaflet-popup-content-wrapper { pointer-events: none; }

  .d3-slider-handle { position: absolute; width: 1.2em; height: 1.2em; border: 1px solid #ddd !important; border-radius:0; background: #ddd !important; z-index: 3; }
  .d3-slider-handle:hover { background: #333 !important; cursor:pointer; }

  .chart { width:100%; min-height:230px; height:auto; }
  .myButton2 { background-color:#fff; width:32.68%; margin-top:5px; }
  .myButton2:hover { background-color:#333 !important; color:#fff; }

  .zoom{ text-decoration:none; font-weight:bold; color:steelblue; }
  .breaker { clear:both; margin:5px; padding:10px; }

  .downloadButton { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; font-size:.9em; text-align:center; margin-top:15px; margin-left:1%; width: 99%; background-color:#fff; color:#333; border-top: 1px solid #ccc; background-image: url('img/downloadDoc.svg'); background-size: 20px 20px; background-repeat: no-repeat; background-position: 2% 50%; }
  .downloadButton:hover {background-color:#fff !important; opacity:.5;}
  .downloadButton:active {background-color:#fff !important;}

  .chartTitle { font-family:"Whitman OSF"; font-weight:900; margin-top:15px; font-size:1.2em; }
  .chatter { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-size:1em; margin-top:5px; }

  .yearChatter { font-family:"Benton Sans",Helvetica,Arial,sans-serif; height:80px; }

  .d_swatch { color:#1F6D6D; font-weight:900; }
  .s_swatch { color:#B53434; font-weight:900; }
  .o_swatch { color:#B56E34; font-weight:900; }
  .g_swatch { color:#299129; font-weight:900; }

  th, text { color:#000 !important; font-family:"Popular"; }
  .value { color:#000 !important; font-family:"Popular"; font-weight:900; } 
  .name { font-family:"Benton Sans",Helvetica,Arial,sans-serif; }

  #toggle { margin:0; padding:0; width:80px; height:23px; font-size:1em; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; font-weight:900; margin-left:auto; margin-right:auto; display:block; }
  #toggle:hover { background-color:#333 !important; color:#fff; cursor:pointer; }
  .play { background-color:#fff !important; color:#000; }
  .pause { background-color:#333 !important; color:#fff; }
  #seg { color:#D6935D; }
  #diverse { color:#299129; }
 
  .navButtons { display:block; text-align:center; background-color:#fff !important; width:40px; font-size:1em; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; font-weight:900; }
  .navButtons:hover { background-color:#333 !important; color:#fff; cursor:pointer; }
  .previous { float:left; }
  .next { float:right; }

  #slider2 { display:none; }

  @media only screen and (max-width:484px) {
   .myButton2, #toggle { width:49% !important; }
  }

  @media only screen and (max-width:300px) {
   .myButton2, #toggle { width:100% !important; }
  }

  .leaflet-tile-pane { opacity: .5; }
</style>
</head>

<body> 

<div id="wrapper">

<button class="mapToggle myButton2" id="all">All</button> <button class="mapToggle myButton2" id="seg">Segregated</button> <button class="mapToggle myButton2" id="diverse">Integrated</button> 

<div class="breaker"></div>

<div id="map"></div>

<div class="breaker"></div>

<div class='yearChatter' id="year1993">After reaching full integration, Minneapolis elementary schools begin to segregate. St. Paul schools will reach full integration in 1995.</div>

<div class='yearChatter' id="year1999">Elementary schools in inner ring suburbs begin to reflect the growing diversity, while Minneapolis and St. Paul schools become more segregated.</div>

<div class='yearChatter' id="year2003">The first year that  inner ring suburban elementary schools have a lower percentage of students in segregated schools than St. Paul and Minneapolis.</div>

<div class='yearChatter' id="year2008">The first year that outer ring suburban elementary schools have a lower percentage of students in segregated schools than St. Paul and Minneapolis.</div>

<div class='yearChatter' id="year2015">Minneapolis and St. Paul public elementary schools are more segregated than they have been in a generation, while suburban schools are more integrated than ever before.</div>

<button class="previous navButtons"><<</button><button class="next navButtons">>></button><button class="play myButton2" id="toggle">&#9658;</button>

<div class="breaker"></div>

<div id="sliderDiv"><div id="slider"></div></div>

<div class="breaker"></div>

<div class="chartTitle">Percent of students in segregated schools</div>
<div class="chatter">This chart shows the percentage of all students attending public elementary schools that were segregated. This chart does not include charter schools.</div>
<div class="chart" id="chart_segregated"></div>
<div class="chartTitle">Percent of white students in predominantly white schools</div>
<div class="chatter">This chart shows the percentage of white students attending elementary schools where 80 percent or more of the students are white. </div>
<div class="chart" id="chart_white"></div>
<div class="chartTitle">Percent of minority students in predominantly minority schools</div>
<div class="chatter">This chart shows the percentage of minority students attending elementary schools where 80 percent or more of the students are minorities. </div>
<div class="chart" id="chart_minority"></div>

<div class="breaker"></div>

<div class="sliderDiv" style="margin-left:18px;"><div id="slider2"></div></div>

<div class="breaker"></div>

<a class="downloadButton" href='https://docs.google.com/spreadsheets/d/14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M/pub?output=csv'>Download Data</button></a>

</div>

</body>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>
<script src="js/d3.slider-master/d3.slider.js"></script>
<script src="js/c3-master/c3.min.js"></script>
<script src="js/jquery.initialize.js"></script>


<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=segregation_status
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=chart_breakdowns
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=white_breakdowns
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=14YUw6tgOv3wo2B9XnagFbCsM9DHHqiC96NAZcJobH_M&sheet=minority_breakdowns
//https://drivenotepad.appspot.com/app?state=%7B%22ids%22:%5B%220B01GwdexvA5PVGhNUU5UMXdQTWc%22%5D,%22action%22:%22open%22%7D

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonChart = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=O7JGTiU9JX3wNMzOLJTEUWWm4sEPtiqWEp3ih-t6tlmxMvmu6KkcmOeBRpM6-121aC-R2XNl4ALkdkeiWJ9kf2G1c3MCxNm9OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFtTQmYRJSnvtduGLVKr9rYwjNh_sEyWjORYPdsBNrk6UOb9cKNfNz5Vl-itTxC18SLtDSB5x-usvR3ZB_eUI38hNQWStQvGwnIEB_jcADA_w&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonChartW = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=RtADPilWZofRQwuA0e1nD2M_u2ajVzpHZHBEQ2tJGWV_3YtBzI-hu-4grxrVY5Iv6HarTZzVa3NcwQxiBqBR7c6GamGECmVvOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFtTQmYRJSnvtduGLVKr9rYwjNh_sEyWjORYPdsBNrk6UOb9cKNfNz5Vl-itTxC18SLtDSB5x-ussyItN6smo0VhNQWStQvGwnIEB_jcADA_w&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonChartM = file_get_contents("https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=ZALlOdc2rOhozHneIdqNLSJsxy9OiIFPHUuwtzgmc2HAqK6Xj2GMx_EjefEnQ5JLysI7VAiHqjUF8korLEw59hGCikTuVAwdOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzI-mtKRf-8plGOUy-lJCxpF2DQLccfmsBGWAyiujVfWxmelbCou2EhfNg1xV69xW9102aPo2dzOFtTQmYRJSnvtduGLVKr9rYwjNh_sEyWjORYPdsBNrk6UOb9cKNfNz5Vl-itTxC18SLtDSB5x-usqGq3wgorTFF5Mim1nsZQ3SsfyYN-7SmVQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataChartLoad = <?php echo $jsonChart; ?>;
var dataChartLoadW = <?php echo $jsonChartW; ?>;
var dataChartLoadM = <?php echo $jsonChartM; ?>;

var dataChart = dataChartLoad.chart_breakdowns;
var dataChartW = dataChartLoadW.white_breakdowns;
var dataChartM = dataChartLoadM.minority_breakdowns;


var  padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };

var chart_segregated = c3.generate({
        bindto: '#chart_segregated',
        padding: padding,
        data: {
            json: dataChart,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"]
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },  
        color: { pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 2, bottom: 0} 
        }
       }
    });

var chart_white = c3.generate({
        bindto: '#chart_white',
        padding: padding,
        data: {
            json: dataChartW,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"],
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },
        color: {
            pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC']
        },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 1, bottom: 0}
        }
       }
    });

var chart_minority = c3.generate({
        bindto: '#chart_minority',
        padding: padding,
        data: {
            json: dataChartM,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"],
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },
        color: {
            pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC']
        },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 43, bottom: 0}
        }
       }
    });

$( document ).ready(function() {
   $('.c3-legend-item-MinneapolisWhite text, .c3-legend-item-MinneapolisMinority text, .c3-legend-item-STPMinority text').text("Minneapolis");
   $('.c3-legend-item-St--Paul text, .c3-legend-item-STPWhite text, .c3-legend-item-STPMinority text').text("St. Paul");
   $('.c3-legend-item-InSubMinority text, .c3-legend-item-InSubWhite text, .c3-legend-item-Inner-Suburbs text').text("Inner Suburbs");
   $('.c3-legend-item-OutSubWhite text, .c3-legend-item-OutSubMinority text, .c3-legend-item-Outer-Suburbs text').text("Outer Suburbs");
});

$(".c3-legend-item").click(function() {   
   $('.c3-legend-item-MinneapolisWhite text, .c3-legend-item-MinneapolisMinority text, .c3-legend-item-STPMinority text').text("Minneapolis");
   $('.c3-legend-item-St--Paul text, .c3-legend-item-STPWhite text, .c3-legend-item-STPMinority text').text("St. Paul");
   $('.c3-legend-item-InSubMinority text, .c3-legend-item-InSubWhite text, .c3-legend-item-Inner-Suburbs text').text("Inner Suburbs");
   $('.c3-legend-item-OutSubWhite text, .c3-legend-item-OutSubMinority text, .c3-legend-item-Outer-Suburbs text').text("Outer Suburbs");
});

// $(document).bind('DOMNodeInserted', function(event) {
//    $(".name").text( function(i, oldtext){ return oldtext.replace("_"," "); });
//   });

$(".name").initialize( function(){
    oldhtml = $(this).html();
    $(this).html( function(i, oldhtml){ return oldhtml.replace("_"," "); });
});

$(".tips").initialize( function(){
    $('.tips').bind("click", function() {
        $(this).hide();
    });
});

$('.yearChatter').hide();
$('#year1993').show();

</script>

<script>
  $.getJSON('shapefiles/counties.json', function(counties) {
    $.getJSON('shapefiles/data_93.json', function(data_93) {
    $.getJSON('shapefiles/data_99.json', function(data_99) {
    $.getJSON('shapefiles/data_03.json', function(data_03) {
    $.getJSON('shapefiles/data_08.json', function(data_08) {
    $.getJSON('shapefiles/data_15.json', function(data_15) {

var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light', { maxZoom: 8, minZoom: 8, bounds: mapBounds})
    .setView([44.983333,-93.266667], 8);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

$(".myButton2").css("background-color","#fff");

$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             play();
           }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$("#all").css("background-color","#bbb");

$("#all").click(function() {
  $(".myButton2").css("background-color","#fff");
  $("#seg").css("color","#D6935D");
  $("#diverse").css("color","#299129");
  $(this).css("background-color","#bbb");
  map.setView([44.983333,-93.266667], 8);
  resetMarkers(markerLayer_93);
  resetMarkers(markerLayer_99);
  resetMarkers(markerLayer_03);
  resetMarkers(markerLayer_08);
  resetMarkers(markerLayer_15);
});

//NAVIGATION

var dateRange = [1993,1999,2003,2008,2015];
var index = 0;

$(".previous").click(function() {
  if (index > 0) {
  index--;
  var slideBack = index;
  if (slideBack >= 0) { 
    slider.value(dateRange[slideBack]);
   shiftMap(slider.value());
   slider2.value(slider.value());
 }
}
  });

$(".next").click(function() {
  if (index < 4) {
  index++;
  var slideForward = index;
  if (slideForward < 5) { 
    slider.value(dateRange[slideForward]);
   shiftMap(slider.value());
   slider2.value(slider.value());
 }
}
  });

$("#seg").click(function() {
  $(".myButton2").css("background-color","#fff");
  $(this).css("background-color","#D6935D");
  $("#diverse").css("color","#299129");
  $(this).css("color","#000");
  highlightFlag(markerLayer_93,"SEGREGATED");
  highlightFlag(markerLayer_99,"SEGREGATED");
  highlightFlag(markerLayer_03,"SEGREGATED");
  highlightFlag(markerLayer_08,"SEGREGATED");
  highlightFlag(markerLayer_15,"SEGREGATED");
  });

$("#diverse").click(function() {
  $(".myButton2").css("background-color","#fff");
  $("#seg").css("color","#D6935D");
  $(this).css("background-color","#299129");
  $(this).css("color","#000");
  highlightFlag(markerLayer_93,"DIVERSE");
  highlightFlag(markerLayer_99,"DIVERSE");
  highlightFlag(markerLayer_03,"DIVERSE");
  highlightFlag(markerLayer_08,"DIVERSE");
  highlightFlag(markerLayer_15,"DIVERSE");
});

//YEAR SLIDER
var slider = d3.slider().axis(true);

var steps = 6;

d3.select('#slider').call(slider.min(1993).max(2015).value(1993).axis(d3.svg.axis().tickValues([1993,1999,2003,2008,2015]).tickFormat(d3.format("")).orient("top").ticks(5)).step(1).on("slide", function(evt, value) {
 slider2.value(value);
 shiftMap(value);
  }));

var slider2 = d3.slider().axis(true);

  d3.select('#slider2').call(slider2.min(1993).max(2015).value(1993).axis(d3.svg.axis().tickValues([1993,1999,2003,2008,2015]).tickFormat(d3.format("")).orient("bottom").ticks(5)).step(1).on("slide", function(evt, value) {
 slider.value(value);
 shiftMap(value);
    }));

var timer1, timer2, timer3, timer4;

function play(){
   
  slider.value(1993);
   shiftMap(slider.value());
   slider2.value(slider.value());
   index = 0;

timer1 = setTimeout(function () {
    slider.value(1999);
    shiftMap(slider.value());
    slider2.value(slider.value());
    index++;
        }, 2000)

timer2 =setTimeout(function () {
  slider.value(2003);
   shiftMap(slider.value());
   slider2.value(slider.value());
   index++;
    }, 4000)

timer3 = setTimeout(function () {
  slider.value(2008);
    shiftMap(slider.value());
    slider2.value(slider.value());
    index++;
    }, 6000)

timer4 = setTimeout(function () {
  slider.value(2015);
    shiftMap(slider.value());
    slider2.value(slider.value());
    $("#toggle").attr("class", "play myButton2");
    $("#toggle").html("&#9658;");
    index++;
    }, 8000)

}

function stop(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  clearTimeout(timer4);
  slider.value(1993);
  slider2.value(1993);
  shiftMap(1993);
}

function shiftMap(value){

   
    d3.selectAll("tspan, text").style("font-weight","normal");
  var selectionYear = d3.selectAll("tspan, text").each(function(d) { 
    if (d3.select(this).html() == "" + value + "") { 
    d3.select(this).style("font-weight","900");
  } 
  });


  if (value == 1993) { 
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_93);
    $('.yearChatter').hide();
    $('#year1993').show();
  }
  else if (value == 1999){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_99);
   $('.yearChatter').hide();
    $('#year1999').show();
  }
  else if (value == 2003){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_03);
    $('.yearChatter').hide();
    $('#year2003').show();
  }
  else if (value == 2008){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_08);
    $('.yearChatter').hide();
    $('#year2008').show();
  }
  else if (value == 2015){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_15);
    $('.yearChatter').hide();
    $('#year2015').show();
  }
}

//MAP LAYERS
  var popup = new L.Popup({ autoPan: false });

  // statesData comes from the 'us-states.js' script included above
  var statesLayer = L.geoJson(counties,  {
      style: {color:"#333", weight:1, fillOpacity:0}
      // onEachFeature: onEachFeature
  }).addTo(map);

  var markerLayer_93 = L.geoJson(data_93,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  }).addTo(map);

  var markerLayer_99 = L.geoJson(data_99,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_03 = L.geoJson(data_03,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_08 = L.geoJson(data_08,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_15 = L.geoJson(data_15,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

function highlightFlag(markers,flag){
 markers.eachLayer(function (layer) { 
    if(layer.feature.properties.SegFlag == flag) {    
        layer.setStyle({"fillOpacity":0.5});
      }
    else {    
        layer.setStyle({"fillOpacity":0});
      }
    });
}

function resetMarkers(markers){
 markers.eachLayer(function (layer) { 
      layer.setStyle({"fillOpacity":0.5});
    });
}

  function getStyle(feature) {
      return {
          weight: 1,
          opacity: 0.1,
          // color: 'black',
          fillOpacity: 0.5
          // fillColor: getColor(feature.properties.density)
      };
  }

  // get color depending on population density value
  function getColor(d) {
      return d > 1000 ? '#8c2d04' :
          d > 500  ? '#cc4c02' :
          d > 200  ? '#ec7014' :
          d > 100  ? '#fe9929' :
          d > 50   ? '#fec44f' :
          d > 20   ? '#fee391' :
          d > 10   ? '#fff7bc' :
          '#ffffe5';
  }

  function onEachFeature(feature, layer) {
      layer.on({
          mousemove: mousemove,
          mouseout: mouseout,
          click: zoomToFeature
      });
  }

  var closeTooltip;

  function mousemove(e) {
      var layer = e.target;

      popup.setLatLng(e.latlng);
      popup.setContent(layer.feature.properties.schoolName + '<div>' + layer.feature.properties.districtNa + ' SCHOOL DISTRICT</div>');

      if (!popup._map) popup.openOn(map);
      window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          weight: 1,
          opacity: 0.3,
          fillOpacity: 0.3
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout(e) {
      markerLayer_93.resetStyle(e.target);
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }

  function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
  }

  });
  });
  });
  });
  });
});
</script>

</html>