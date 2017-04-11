d3.json("./data/districts.json", function(error, dataLoad) {

var data = dataLoad.districts;

$(".switch").click(function() {
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
});

//INITIALIZE MAP
var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light')
    .setView([46.358056, -94.200833], 7);

// map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

$(document).ready(function() {

$("#metro").click(function() {
  map.setView([44.983333, -93.266667], 10);
  resetMarkers();
  $(".districtLabel").css("background-color","#fff");
});
$("#state").click(function() {
  map.setView([46.358056, -94.200833], 7);
  resetMarkers();
  $(".districtLabel").css("background-color","#fff");
});
$(".districtLabel").click(function() {
  $(".districtLabel").css("background-color","#fff");
  $(this).css("background-color","#ddd");
  highlightDistrict($(this).text());
});

//MARKER HIGHLIGHTING
function highlightDistrict(district){
 districts.eachLayer(function (layer) { 
    if(layer.feature.properties.district == district) {    
        layer.setStyle({"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillOpacity":0}); 
      }
    });
}

function resetMarkers(){
 districts.eachLayer(function (layer) { 
   layer.setStyle({"fillOpacity":0.3}); 
    });
}

var customLayer = L.geoJson(null, {
    pointToLayer: function(feature, latlon) {
      if (feature.properties.district == "9 - West"){
        return L.circleMarker(latlon, {radius: 7, color:"#4C0A17", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "9 - South") {
        return L.circleMarker(latlon, {radius: 7, color:"#8C101C", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "9 - North") {
        return L.circleMarker(latlon, {radius: 7, color:"#E71D32", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "South Central") {
        return L.circleMarker(latlon, {radius: 7, color:"#3A0B2E", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "North Central") {
        return L.circleMarker(latlon, {radius: 7, color:"#7C1C58", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "East Central") {
        return L.circleMarker(latlon, {radius: 7, color:"#FF3CA0", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Northwest") {
        return L.circleMarker(latlon, {radius: 7, color:"#311A41", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Northeast") {
        return L.circleMarker(latlon, {radius: 7, color:"#9855D4", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Midwest") {
        return L.circleMarker(latlon, {radius: 7, color:"#005448", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Mid State") {
        return L.circleMarker(latlon, {radius: 7, color:"#41D6C3", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Big Southeast") {
        return L.circleMarker(latlon, {radius: 7, color:"#B4E051", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Mid Southeast") {
        return L.circleMarker(latlon, {radius: 7, color:"#4B8400", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Southeast") {
        return L.circleMarker(latlon, {radius: 7, color:"#144D14", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Southwest") {
        return L.circleMarker(latlon, {radius: 7, color:"#0A3C02", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Suburban") {
        return L.circleMarker(latlon, {radius: 7, color:"#152935", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "Twin City") {
        return L.circleMarker(latlon, {radius: 7, color:"#264A60", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "East Metro") {
        return L.circleMarker(latlon, {radius: 7, color:"#4178BE", weight:1,fillOpacity:0.3});
      }
      else if (feature.properties.district == "West Metro") {
        return L.circleMarker(latlon, {radius: 7, color:"#7CC7FF", weight:1,fillOpacity:0.3});
      }
    }
});

var districts = omnivore.csv('./data/FootballData.csv',null,customLayer)
// var districts = omnivore.csv('https://docs.google.com/spreadsheets/d/1TFaDqK7Q_YZ1ucWCdB8snFQrlGiRtA4hOpcDBW0KrGg/export?format=csv&id=1TFaDqK7Q_YZ1ucWCdB8snFQrlGiRtA4hOpcDBW0KrGg&gid=0',null,customLayer)
    .on('click', function(layer) {
        this.eachLayer(function(marker) {
           marker.bindPopup("<div><strong>" + marker.feature.properties.team + "</strong></div><div>District: " + marker.feature.properties.district + "</div><div>Class: " + marker.feature.properties.className + "</div><div>Subdistrict: " + marker.feature.properties.subdistrict + "</div><div>Enrollment: " + marker.feature.properties.enrollment + "</div>");
        });
    }).addTo(map);

});
});