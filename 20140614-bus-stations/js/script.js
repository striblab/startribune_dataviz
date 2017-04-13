(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Set the map boundaries
var southWest = L.latLng(-94.2957,44.5239),
    northEast = L.latLng(-92.5488,45.7177),
    bounds = L.latLngBounds(southWest, northEast);

//Make the map object
var map = L.mapbox.map('map', {
      attributionControl: false,
      infoControl: 'Jeff Hargarten, Metro Transit',
        maxBounds: bounds,
gridControl: false // Disable default gridControl interactivity.
    });

map.setView([44.9755,-93.2533], 11);
map.addControl(L.mapbox.geocoderControl('examples.map-i875kd35'));

var i;
var allMap = new Array(905);

var grid = L.mapbox.tileLayer('grid.tilejson');
var centers = L.mapbox.tileLayer('centers.tilejson');
var none = L.mapbox.tileLayer('none.tilejson');
var shelters = L.mapbox.tileLayer('shelters.tilejson');

for (i = 2; i < 12; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 12; i < 30; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 30; i < 40; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 40; i < 50; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}


var derpTiles = L.mapbox.tileLayer('10.tilejson');
//Pull interactive, data-infused vector layers from the .mbtiles hosted on the server
var dataTiles = L.mapbox.tileLayer('transit.tilejson');
var dataGrid = L.mapbox.gridLayer('transit.tilejson').addTo(map);
var dataControl = L.mapbox.gridControl(dataGrid).addTo(map);

for (i = 50; i < 60; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 60; i < 70; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 70; i < 80; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 80; i < 90; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 90; i < 100; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

for (i = 100; i < 904; i++) {
allMap[i] = L.mapbox.tileLayer('' + i + '.tilejson');
}

L.mapbox.tileLayer('shadowflare.ighigbaa').addTo(map);

dataTiles.addTo(map);
//allMap[10].addTo(map);

//Add the legend to the map
map.legendControl.addLegend(document.getElementById('legend').innerHTML);

//Add fullscreen button to the map
L.control.fullscreen().addTo(map);

//Make the tooltip follow the mouse
dataControl.options.follow = true;

function addLayer(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(allMap[layer]); }
if (box.checked) { allMap[layer].addTo(map); }

}

function killStops(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(dataTiles); }
if (box.checked) { dataTiles.addTo(map); }

}

function killGrid(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(grid); }
if (box.checked) { grid.addTo(map); }

}

function killCenters(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(centers); }
if (box.checked) { centers.addTo(map); }

}

function killNone(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(none); }
if (box.checked) { none.addTo(map);}

}

function killShelters(layer) {
box = document.getElementById(layer);

if (!box.checked){ map.removeLayer(shelters); }
if (box.checked) { shelters.addTo(map); }

}

// This uses the HTML5 geolocation API, which is available on
// most mobile browsers and modern browsers, but not in Internet Explorer
//
// See this chart of compatibility for details:
// http://caniuse.com/#feat=geolocation
if (!navigator.geolocation) {
    geolocate.innerHTML = 'Geolocation is not available';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate();
    };
}

// Once we've got a position, zoom and center the map
// on it, and add a single marker.
map.on('locationfound', function(e) {
    map.fitBounds(e.bounds);

    myLayer.setGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'title': ' ',
            'marker-color': '#ff8888',
            'marker-symbol': 'star'
        }
    });

    // And hide the geolocation button
    geolocate.parentNode.removeChild(geolocate);
});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = 'Position could not be found';
});
},{}]},{},[1])