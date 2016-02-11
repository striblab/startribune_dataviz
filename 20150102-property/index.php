<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minneapolis Neighborhood Property Values</title>
  <meta name="description" content="Minneapolis Neighborhood Property Values">
  <meta name="author" content="Frey Hargarten - StarTribune">

  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
   <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' />

<style>
    body { margin: 0; padding: 0; }
    #map { bottom: 0; position: absolute; top: 40px; width: 100%; }
    .leaflet-control-zoom { display: none; visibility: hidden; }
    .leaflet-control-attribution { display: none !important; }
    path:hover { fill-opacity: 0.8 !important; stroke-color: #000 !important; fill:#333 !important; }
    .countyName { font-weight:900; }
    .legend label,
    .legend span { color: #808080; display: block; float: left; font-size: 13px; height: 15px; text-align: center; width: 30px; }
</style>

  </head>

<body>
<p></p>
<div class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>-2%</span>
    <span style='background:#A45958;'></span>
    <span style='background:#b2e2e2;'></span>
    <span style='background:#66c2a4;'></span>
    <span style='background:#2ca25f;'></span>
    <span style='background:#006d2c;'></span>
    <span style='background:#005824;'></span>
    <span style='background:#fff;'>+20%</span>
</div>

<div id='map'></div>
</body>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=18diow7hznyPQIhSgpz1J27vbgUagrnwE7fnHgUvju3M&sheet=values_JunSep2015

<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=aX5Ar9PXYVLoNBpAcKisWOhnuDkNczDqNvirNMqYZEfvdnnZuFYeAeqBCcuyoo9-COZz38QTpwfxQZ-7mhaTl5LXBemG6QVnOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TLfvdojA4DAiImwXgWbqDJ4lCVJpoYsW4u6mmdbDe-nJKBt1GJbWHivpTib5TEX_qEc_ICSNr2JYUbAeVTusKNItgU6cJmFUe&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataLoad = <?php echo $jsonData; ?>

var dataV = dataLoad.values_JunSep2015;

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var map = L.mapbox.map('map', "mapbox.light").setView([44.9654,-93.2691], 11);

//SHAPEFILES
$(document).ready(function() {
  $.getJSON('shapefiles/minneapolis_n.json', function(data) {
    merps = L.geoJson(data, {
      'style': styleNeighborhood,
      'onEachFeature': function (feature, layer) {
        // layer.bindPopup("<b>" + feature.properties.Name + "</b><br />" + feature.properties.change + "%");
        layer.on({
           mousemove: mousemove,
           mouseout: mouseout
           //click: zoomToFeature
       });
      }
    }).addTo(map);

var popup = new L.Popup({ autoPan: false });

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

function mousemove(e) {
       var layer = e.target;

       var pct = 0;

      popup.setLatLng(e.latlng);
        for (var i=0; i < dataV.length; i++){
  if (layer.feature.properties.Name == dataV[i].neighborhood){
      if (dataV[i].wow <= -.50) { var fillColor = '#A45958'; }
  else if (dataV[i].wow <= -.15) { var fillColor = '#b2e2e2'; }
  else if (dataV[i].wow <= -.01) { var fillColor = '#66c2a4'; }
  else if (dataV[i].wow >= .01) { var fillColor = '#2ca25f'; }
  else if (dataV[i].wow >= .15) { var fillColor = '#006d2c'; }
  else if (dataV[i].wow >= .50) { var fillColor = '#005824'; }

      if (dataV[i].wow != 0) { pct = "<div style='font-weight:900;'>" + d3.format("%")(dataV[i].wow) + "</div>"; }
      break;
    }
  }

  popup.setContent("<div class='countyName'>" + layer.feature.properties.Name + "</div>" + pct);

      if (!popup._map) popup.openOn(map);
      // window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          weight: 3,
          opacity: 0.3,
          fillOpacity: 0.9
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout(e) {
      merps.resetStyle(e.target);
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }

  function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
  }
})  

});

//SHAPEFILE STYLING
function styleNeighborhood(d) {
  var fillColor = '#ccc';
  for (var i=0; i < dataV.length; i++){
  if (d.properties.Name == dataV[i].neighborhood){
    var increase = Number(dataV[i].wow);
  if (increase >= -.50) { fillColor = '#A45958'; }
  if (increase >= -.15) { fillColor = '#b2e2e2'; }
  if (increase >= -.01) { fillColor = '#66c2a4'; }
  if (increase >= .01) { fillColor = '#2ca25f'; }
  if (increase >= .15) { fillColor = '#006d2c'; }
  if (increase >= .50) { fillColor = '#005824'; }
 }
}

         return {
    fillColor: fillColor,
    fillOpacity: 0.7,
    opacity: 0.7,
    weight: 1,
    color: '#fff'
  }
}

</script>
</html>
