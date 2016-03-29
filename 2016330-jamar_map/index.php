<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <title>Jamar Clarke Reaction Map</title>
    <meta name="description" content="Jamar Clarke Reaction Map">
    <meta name="author" content="Frey Hargarten - StarTribune">

    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.16.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" /> 
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

<style>
    .map-overlay-container { position: absolute; width: 25%; top: 0; left: 0; padding: 10px; z-index: 1; }
    .map-overlay { font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif; background-color: #fff; border-radius: 3px; padding: 10px; box-shadow:0 1px 2px rgba(0,0,0,0.20); }
    .map-overlay h2, .map-overlay p { margin: 0 0 10px; }
    .mapboxgl-ctrl-attrib { display:none; }
    .play { background-color:#fff !important; color:#000; }
    .pause { background-color:#333 !important; color:#fff; }
    #diverse { color:#299129; }
 
    #toggle { margin:0; padding:0; width:80px; height:23px; font-size:1em; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; font-weight:900; margin-left:auto; margin-right:auto; display:block; }
    #toggle:hover { background-color:#333 !important; color:#fff; cursor:pointer; }
    .navButtons { display:block; text-align:center; background-color:#fff !important; width:40px; font-size:1em; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; font-weight:900; }
    .navButtons:hover { background-color:#333 !important; color:#fff; cursor:pointer; }
    .previous { float:left; }
    .next { float:right; }
</style>

<div id='map'></div>

<div class='map-overlay-container'>
  <div class='map-overlay'>
    <h2 id='location-title'></h2>
    <p id='timestamp'></p>
    <p id='location-description'></p>
    <p id='photo'></p>
    <div>
<button class="previous navButtons"><<</button><button class="next navButtons">>></button><button class="play myButton2" id="toggle">&#9658;</button>
    </div>
  </div>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.16.0/mapbox-gl.js'></script>
<script>

<?php
$json = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=wHQQVJTPNqSo-g2oS-WTXE_J_vhA_rJd-zNBajQIamNwirkTNZqSVaMsNgm0a-cFD8KwWFZeFgg7GTtcKh6o4QgdzaSB7odaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-rGw4-uQPhtbXMEb_L25zTuTw3-CSg1dB2Ol9vDs5w5TzSnLXrnciyoBjnjDDrq1GFMHuQvceYyp1w9teQfukQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
?>

var dataLoad = <?php echo $json; ?>;

// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=wHQQVJTPNqSo-g2oS-WTXE_J_vhA_rJd-zNBajQIamNwirkTNZqSVaMsNgm0a-cFD8KwWFZeFgg7GTtcKh6o4QgdzaSB7odaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-rGw4-uQPhtbXMEb_L25zTuTw3-CSg1dB2Ol9vDs5w5TzSnLXrnciyoBjnjDDrq1GFMHuQvceYyp1w9teQfukQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, dataLoad) {
  //http://bl.ocks.org/hrecht/82b6440ed3b982a6f594

var data = dataLoad.events;

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.266667, 44.983333],
    zoom: 10.2,
    minZoom: 10,
    maxBounds: llb,
    pitch: 50
});

  var markers = {
    "type": "FeatureCollection",
    "features":[{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [data[0].longitude, data[0].latitude]
    },
      "properties": {
      "title": data[0].title,
      "description": data[0].description,
      "timestamp": data[0].date + " " + data[0].time,
      "location": data[0].location
    }
  }]
};

for (var i = 0; i < data.length; i++){
  if (data[i].longitude != "null"){
  var geojson = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [data[i].longitude, data[i].latitude]
    },
      "properties": {
      "title": data[i].title,
      "description": data[i].description,
      "timestamp": data[i].date + " " + data[i].time,
      "location": data[i].location
    }
  };

  markers.features[i+1] = geojson;
}
}

var sourceObj = new mapboxgl.GeoJSONSource({
   data: markers
});

var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var timer;

function playback(index,stream) {
    title.textContent = data[index].title;
    description.textContent = data[index].description;
    $("#timestamp").html(data[index].date + " @ " + data[index].time);
    if (data[index].photo != "#") { $("#photo").html("<img src='" + data[index].photo + "' />"); }

    // highlightBorough(data[index].id ? data[index].id : '');

    // Animate the map position based on camera properties
    map.flyTo({center:[data[index].longitude,data[index].latitude],zoom:data[index].zoom,bearing:data[index].bearing});

    // map.once('moveend', function() {

    // });
}

function play(j,timeout){
 timer = window.setTimeout(function() { playback(j); }, timeout); 
}

function stop(){
  clearTimeout(timer);
}

// Display the last title/description first
title.textContent = data[data.length - 1].title;
description.textContent = data[data.length - 1].description;

map.on('load', function() {

    map.addSource("events", {
        type: "geojson",
        data: markers
    });

    map.addLayer({
                "id": "event-layer",
                "type": "circle",
                "source": "events",
                "paint": {
                    "circle-color": 'rgba(168,54,54, 0.45)',
                    "circle-radius": 6
                }
    });

playback(data.length-1);

var index = 0;
$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             for (var j=0; j<data.length; j++){ play(j,j*2000); index++; }
         }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$(".previous").click(function() {
  if (index > 0) {
  index--;
  stop();
  playback(index);
}
  });

$(".next").click(function() {
  if (index < data.length) {
  stop();
  index++;
  playback(index);
}
  });

    // Start the playback animation for each borough
    
});
// });
</script>

</body>
</html>