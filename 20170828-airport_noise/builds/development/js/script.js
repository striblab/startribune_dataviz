(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json('./shapefiles/contours2016.json', function(error, contours) {

//MAPPAGE BLOCKS
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map_blocks',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.222285, 44.884755],
    zoom: 9.9,
    minZoom: 2
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
// $(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

// geocoder2.on('result', function(ev) {
//   map2.flyTo({ center: ev.result.geometry.coordinates, zoom: 14 });
//     });

    map.addSource("contours", {
        type: "geojson",
        data: contours
    });

      map.addLayer({
       'id': 'contours-layer',
       'interactive': true,
       'source': 'contours',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': {
                property: 'Contour',
                type: 'categorical',
                stops: [
                    [55, '#F2D2A4'],
                    [60, '#E07242'],
                    [65, '#C2421F'],
                    [70, '#822010']]
            },

           'line-width': 2
            }
   }, 'place-neighbourhood');



});

});

},{}]},{},[1])