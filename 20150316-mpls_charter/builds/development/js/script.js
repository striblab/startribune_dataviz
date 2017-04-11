(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/enrollment.json", function(error, dataLoad) {

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

var map = L.mapbox.map('map', 'mapbox.light', { maxZoom: 17, minZoom: 10, bounds: mapBounds})
		.setView([44.9813,-93.252], 11)
                .addControl(L.mapbox.geocoderControl('mapbox.places'));


L.control.fullscreen().addTo(map);

var clusterGroup1;

var nb;


$(document).ready(function() {
  $.getJSON('shapefiles/mpls.json', function(data) {
    nb = L.geoJson(data, {
      'style': {fillColor: '#ddd', strokeColor: '#333', fillOpacity: 0, opacity: 1, weight: 1, color: '#fff'},
      'onEachFeature': null
    });
    map.addLayer(nb);
})
});

var publics = omnivore.csv('data/enroll_public.csv')
// var publics = omnivore.csv('https://docs.google.com/spreadsheets/d/18PDilsW9QF7KYr50TTwrqCgBBYmea4rfzqETLgnZ4U8/export?format=csv&id=18PDilsW9QF7KYr50TTwrqCgBBYmea4rfzqETLgnZ4U8&gid=50097582')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                // The argument to L.mapbox.marker.icon is based on the
                // simplestyle-spec: see that specification for a full
                // description of options.
var markerColor;

if (marker.toGeoJSON().properties.students >= 400){markerColor = '#003a17';}
else if (marker.toGeoJSON().properties.students >= 200){markerColor = '#006d2c';}
else if (marker.toGeoJSON().properties.students >= 100){markerColor = '#31a354';}
else if (marker.toGeoJSON().properties.students >= 50){markerColor = '#50b553';}
else if (marker.toGeoJSON().properties.students >= 0){markerColor = '#98d399';}


                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': markerColor,
                    'opacity': .5,
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup("<strong>" + marker.toGeoJSON().properties.school + "</strong><br />Public School<br /><br /><div class='stat'><div class='bigNum'>" + marker.toGeoJSON().properties.students + "</div>students from Minneapolis</div>");
        });
    });

map.addLayer(publics);

var charters = omnivore.csv('data/enroll_charter.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                // The argument to L.mapbox.marker.icon is based on the
                // simplestyle-spec: see that specification for a full
                // description of options.

var markerColor;
if (marker.toGeoJSON().properties.students >= 400){markerColor = '#003a17';}
else if (marker.toGeoJSON().properties.students >= 200){markerColor = '#006d2c';}
else if (marker.toGeoJSON().properties.students >= 100){markerColor = '#31a354';}
else if (marker.toGeoJSON().properties.students >= 50){markerColor = '#50b553';}
else if (marker.toGeoJSON().properties.students >= 0){markerColor = '#98d399';}

                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': markerColor,
                    'opacity': .5,
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup("<strong>" + marker.toGeoJSON().properties.school + "</strong><br />Charter School<br /><br /><div class='stat'><div class='bigNum'>" + marker.toGeoJSON().properties.students + "</div>students from Minneapolis</div>");
        });
    });

map.addLayer(charters);

var mpls = omnivore.csv('https://docs.google.com/spreadsheets/d/18PDilsW9QF7KYr50TTwrqCgBBYmea4rfzqETLgnZ4U8/export?format=csv&id=18PDilsW9QF7KYr50TTwrqCgBBYmea4rfzqETLgnZ4U8&gid=1754775514')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                // The argument to L.mapbox.marker.icon is based on the
                // simplestyle-spec: see that specification for a full
                // description of options.

var markerColor;
if (marker.toGeoJSON().properties.students >= 400){markerColor = '#003a17';}
else if (marker.toGeoJSON().properties.students >= 200){markerColor = '#006d2c';}
else if (marker.toGeoJSON().properties.students >= 100){markerColor = '#31a354';}
else if (marker.toGeoJSON().properties.students >= 50){markerColor = '#50b553';}
else if (marker.toGeoJSON().properties.students >= 0){markerColor = '#98d399';}

                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': markerColor,
                    'marker-fill-opacity': .5,
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup("<strong>" + marker.toGeoJSON().properties.school + "</strong><br />Public School<br /><br /><div class='stat'><div class='bigNum'>" + marker.toGeoJSON().properties.students + "</div>students from Minneapolis</div>");
        });
    });

//map.addLayer(mpls);


publics.on('mouseover', function(e) {
    e.layer.openPopup();
});
publics.on('mouseout', function(e) {
    e.layer.closePopup();
});

charters.on('mouseover', function(e) {
    e.layer.openPopup();
});
charters.on('mouseout', function(e) {
    e.layer.closePopup();
});

mpls.on('mouseover', function(e) {
    e.layer.openPopup();
});
mpls.on('mouseout', function(e) {
    e.layer.closePopup();
});


$('#publics input').on('change', function () {
    if (this.checked) {
       map.addLayer(publics);
    } else {
       map.removeLayer(publics);
    }
});
$('#charters input').on('change', function () {
    if (this.checked) {
        map.addLayer(charters);
    } else {
        map.removeLayer(charters);
    }
});

$('#mpls input').on('change', function () {
    if (this.checked) {
        map.addLayer(mpls);
    } else {
        map.removeLayer(mpls);
    }
});
});
},{}]},{},[1])