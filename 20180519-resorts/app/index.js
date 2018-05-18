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
utilsFn({ });

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
} else {
    $(".slide").show();
}


d3.json("./data/resorts.geojson", function(error, resorts) {
// d3.json("./shapefiles/counties.json", function(error, counties) {

        var bounds = [
            [-103.804552, 41.114588], // Southwest coordinates
            [-82.227404, 51.164747]  // Northeast coordinates
        ];

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
        var map = new mapboxgl.Map({
            container: 'map',
            // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
            style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
            center: [-94.310360, 46.472504],
            zoom: 6,
            minZoom: 2,
            maxBounds: bounds,
            interactive: true
        });

        map.addControl(new mapboxgl.NavigationControl());
        // map.scrollZoom.disable();
        // map.dragRotate.disable();
        // map.doubleClickZoom.disable();
        // map.touchZoomRotate.disableRotation();

        map.on('load', function() {

            map.addSource('resorts', {
                type: 'geojson',
                data: resorts
            });

            map.addLayer({
                "id": "resorts-layer",
                "type": "circle",
                "source": "resorts",
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#f26357",
                    "circle-stroke-color": "#333333",
                    "circle-stroke-width": 1
                },
                "filter": [
                    "==",
                    "Icon Color",
                    "large_red"
                ]
            });

            map.addLayer({
                "id": "resorts-layer2",
                "type": "circle",
                "source": "resorts",
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#54b947",
                    "circle-stroke-color": "#333333",
                    "circle-stroke-width": 1
                },
                "filter": [
                    "==",
                    "Icon Color",
                    "large_green"
                ]
            });

            map.addLayer({
                "id": "resorts-layer3",
                "type": "circle",
                "source": "resorts",
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#fae15d",
                    "circle-stroke-color": "#333333",
                    "circle-stroke-width": 1
                },
                "filter": [
                    "==",
                    "Icon Color",
                    "large_yellow"
                ]
            });

            // map.addSource('counties', {
            //     type: 'geojson',
            //     data: counties
            // });

            // map.addLayer({
            //     'id': 'counties-layer',
            //     'interactive': true,
            //     'source': 'counties',
            //     'layout': {},
            //     'type': 'fill',
            //     'paint': {
            //         'fill-antialias': true,
            //         'fill-opacity': 1,
            //            'fill-color': "#bbbbbb",
            //         'fill-outline-color': 'rgba(255, 255, 255, 1)'
            //     }
            // }, 'parks');

            $(document).ready(function() {
                if ($("#wrapper").width() < 800) {
                    map.flyTo({
                        center: [-94.310360, 46.472504],
                        zoom: 5,
                        pitch: 0,
                        bearing: 0
                    });
                } else {
                    map.flyTo({
                        center: [-94.310360, 46.472504],
                        zoom: 6
                    });
                }
                $(window).resize(function() {
                    if ($("#wrapper").width() < 800) {
                        map.flyTo({
                            center: [-94.310360, 46.472504],
                            zoom: 5,
                            pitch: 0,
                            bearing: 0
                        });
                    } else {
                        map.flyTo({
                            center: [-94.310360, 46.472504],
                            zoom: 6
                        });
                    }
                });
            });

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on('mousemove', function(e) {
                var features = map.queryRenderedFeatures(e.point, {
                    layers: ['resorts-layer','resorts-layer2','resorts-layer3']
                });
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

                if (!features.length) {
                    popup.remove();
                    $("#infobox").html("");
                    return;
                }

                var feature = features[0];

                $("#infobox").html("<div class='tipField'><div class='county'>" + feature.properties.Name + "</div><div>" + feature.properties.Address + "</div><div>" + feature.properties.Phone + "</div><div><a href='" + feature.properties.Website + "' target='new_'>" + feature.properties.Website + "</a></div><div>" + feature.properties.Details + "</div><div>" + feature.properties.Review + "</div><div>Contributed by " + feature.properties.Contributor + "</div></div>");

                // Populate the popup and set its coordinates
                // based on the feature found.
                // popup.setLngLat(e.lngLat)
                //     .setHTML()
                //     .addTo(map);
            });

        });
// });
});