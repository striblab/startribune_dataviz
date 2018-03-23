/**
 * Main JS file for project.
 */
// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({});

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

if (selected == "all") {
    $(".slide").show();
} else if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
}

d3.json("./shapefiles/bloomington-neighborhoods.geojson", function(error, bloomington) {
    d3.json("./shapefiles/mn_places.json", function(error, mncities) {

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
            center: [-93.300168, 44.822465],
            zoom: 10.6,
            minZoom: 2,
            interactive: true
        });

        // map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.disable();
        map.dragRotate.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disableRotation();

        map.on('load', function() {

            map.addSource('mncities', {
                type: 'geojson',
                data: mncities
            });

            map.addSource('bloomington', {
                type: 'geojson',
                data: bloomington
            });

            map.addLayer({
                'id': 'mncities-layer',
                'interactive': true,
                'source': 'mncities',
                'layout': {},
                'type': 'fill',
                'paint': {
                    'fill-antialias': true,
                    'fill-opacity': 0.1,
                    //    'fill-color': {
                    //     "property": "index_IndexScore",
                    //     "type": "interval",
                    //     "stops": [
                    //         [0, "#888888"],
                    //         [50, "#fee391"],
                    //         [120, "#fec44f"],
                    //         [180, "#fe9929"],
                    //         [240, "#d95f0e"],
                    //         [300, "#993404"]
                    //     ]
                    // },
                    'fill-outline-color': 'rgba(0, 0, 0, 1)'
                },
                "filter": [
                    "==",
                    "NAME",
                    "Bloomington"
                ]
            }, 'place-neighbourhood');


            map.addLayer({
                'id': 'bloomington-layer',
                'interactive': true,
                'source': 'bloomington',
                'layout': {},
                'type': 'fill',
                'paint': {
                    'fill-antialias': true,
                    'fill-opacity': 1,
                    'fill-color': '#5BBF48',
                    'fill-outline-color': 'rgba(0, 0, 0, 1)'
                }
                // "filter": [
                // "==",
                // "NAME",
                // "Bloomington"]
            }, 'place-neighbourhood');

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on('mousemove', function(e) {
                var features = map.queryRenderedFeatures(e.point, {
                    layers: ['bloomington-layer']
                });
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
                    .setHTML(feature.properties.Name)
                    .addTo(map);
            });

        });
    });
});