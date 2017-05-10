(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('map');

if (selected != null){
$(".map").hide();
$("#" + selected).show();
} else { $(".slide").show(); }

d3.json("./data/locations.json", function(error, locations) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'central', // container id
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.247128, 45.013828], 
    zoom: 13,
    minZoom: 3
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

 map.addSource('locations', {
   type: 'geojson',
   data: locations
 });

    map.addLayer({
                "id": "dots-layer-central",
                "type": "circle",
                "source": "locations",
                "filter": ["==", "street", "central"],
                "paint": {
                    "circle-color": 'rgb(22, 110, 118)',
                    "circle-radius": 5.5
                }
    });

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-central'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML(feature.properties.name)
        .addTo(map);

});

});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map2 = new mapboxgl.Map({
    container: 'university', // container id
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.131066, 44.956108], 
    zoom: 12,
    minZoom: 3
});

map2.addControl(new mapboxgl.NavigationControl());
map2.scrollZoom.disable();

map2.on('load', function() {

 map2.addSource('locations', {
   type: 'geojson',
   data: locations
 });

    map2.addLayer({
                "id": "dots-layer-university",
                "type": "circle",
                "source": "locations",
                "filter": ["==", "street", "university"],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });


var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map2.on('mousemove', function(e) {
    var features = map2.queryRenderedFeatures(e.point, { layers: ['dots-layer-university'] });
    // Change the cursor style as a UI indicator.
    map2.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML(feature.properties.name)
        .addTo(map2);

});

});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map3 = new mapboxgl.Map({
    container: 'nicollet', // container id
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.277625, 44.953899], 
    zoom: 15,
    minZoom: 3
});

map3.addControl(new mapboxgl.NavigationControl());
map3.scrollZoom.disable();

map3.on('load', function() {

 map3.addSource('locations', {
   type: 'geojson',
   data: locations
 });

    map3.addLayer({
                "id": "dots-layer-nicollet",
                "type": "circle",
                "source": "locations",
                "filter": ["==", "street", "nicollet"],
                "paint": {
                    "circle-color": 'rgb(26, 150, 41)',
                    "circle-radius": 5.5
                }
    });


var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map3.on('mousemove', function(e) {
    var features = map3.queryRenderedFeatures(e.point, { layers: ['dots-layer-nicollet'] });
    // Change the cursor style as a UI indicator.
    map3.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML(feature.properties.name)
        .addTo(map3);

});

});

});
},{}]},{},[1])