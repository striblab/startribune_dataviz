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


d3.json("./data/projects.geojson", function(error, projects) {
d3.json("./shapefiles/counties.json", function(error, counties) {

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

            map.addSource('projects', {
                type: 'geojson',
                data: projects
            });

            map.addLayer({
                "id": "projects-layer",
                "type": "circle",
                "source": "projects",
                "paint": {
                    "circle-radius": {
                          "property": "Budgeting",
                          "type": "interval",
                          "stops": [
                              // [2009, "#ffffb3"],
                              // [2010, "#8dd3c7"],
                              // [2011, "#bebada"],
                              // [2012, "#fb8072"],
                              // [2013, "#80b1d3"],
                              // [2014, "#fdb462"],
                              // [2015, "#b3de69"],
                              // [2016, "#fccde5"],
                              // [2017, "#d9d9d9"]
                              [0, 3],
                              [100000, 4],
                              [500000, 5],
                              [1000000, 6],
                              [5000000, 7],
                              [10000000, 8]
                          ]
                      },
                    "circle-color": {
                          "property": "Budgeting",
                          "type": "interval",
                          "stops": [
                              // [2009, "#ffffb3"],
                              // [2010, "#8dd3c7"],
                              // [2011, "#bebada"],
                              // [2012, "#fb8072"],
                              // [2013, "#80b1d3"],
                              // [2014, "#fdb462"],
                              // [2015, "#b3de69"],
                              // [2016, "#fccde5"],
                              // [2017, "#d9d9d9"]
                              [0, "#feedde"],
                              [100000, "#fdd0a2"],
                              [500000, "#fdae6b"],
                              [1000000, "#fd8d3c"],
                              [5000000, "#f16913"],
                              [10000000, "#d94801"]
                          ]
                      },
                    // "circle-stroke-color": "#9C0004",
                    "circle-stroke-width": 0
                }
                // "filter": [
                //     "==",
                //     "type",
                //     "stripclub"
                // ]
            });


            map.addSource('counties', {
                type: 'geojson',
                data: counties
            });

            map.addLayer({
                'id': 'counties-layer',
                'interactive': true,
                'source': 'counties',
                'layout': {},
                'type': 'fill',
                'paint': {
                    'fill-antialias': true,
                    'fill-opacity': 1,
                       'fill-color': "#bbbbbb",
                    'fill-outline-color': 'rgba(255, 255, 255, 1)'
                }
            }, 'parks');

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
                    layers: ['projects-layer']
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
                    .setHTML("<div class='tipField'><div class='county'>" + feature.properties.County + " County</div><div>" + feature.properties.Project_Na + "</div><div>" + d3.format("$,.0f")(feature.properties.Budgeting) + "</div></div>")
                    .addTo(map);
            });

        });
});
});