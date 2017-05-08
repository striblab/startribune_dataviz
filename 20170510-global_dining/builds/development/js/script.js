(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/locations.json", function(error, locations) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.224546, 44.976525], 
    zoom: 11,
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

    map.addLayer({
                "id": "dots-layer-university",
                "type": "circle",
                "source": "locations",
                "filter": ["==", "street", "university"],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
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

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-central','dots-layer-nicollet','dots-layer-university'] });
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

});
},{}]},{},[1])