d3.json("./data/values_JunSep2015.json", function(error, dataLoad) {

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
});