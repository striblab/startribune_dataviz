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

d3.json("./data/locations.json", function(error, locationsAll) {
    d3.json("./data/locations.geojson", function(error, locationsMap) {
        d3.json("./shapefiles/minneapolis_zoning.geojson", function(error, zones) {
            d3.json("./shapefiles/nicollet_mall.geojson", function(error, nicmall) {
                d3.json("./shapefiles/rail.geojson", function(error, rail) {
                        // d3.json("./shapefiles/locations.geojson", function(error, locations) {

                        var locations = locationsAll.locations;

                        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
                        var map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
                            // style: 'mapbox://styles/shadowflare/cjf30xlkn2h1f2sqn8swyx29g',
                            center: [-93.276494, 44.977528],
                            zoom: 14.5,
                            minZoom: 2,
                            interactive: true
                        });

                        map.addControl(new mapboxgl.NavigationControl());
                        map.addControl(new mapboxgl.FullscreenControl());
                        map.dragRotate.disable();
                        map.touchZoomRotate.disableRotation();
                        // map.scrollZoom.disable();
                        // map.dragRotate.disable();
                        // map.doubleClickZoom.disable();
                        // map.touchZoomRotate.disableRotation();

                        map.on('load', function() {

                            var createGeoJSONCircle = function(center, radiusInKm, points) {
                                if (!points) points = 64;

                                var coords = {
                                    latitude: center[1],
                                    longitude: center[0]
                                };

                                var km = radiusInKm;

                                var ret = [];
                                var distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
                                var distanceY = km / 110.574;

                                var theta, x, y;
                                for (var i = 0; i < points; i++) {
                                    theta = (i / points) * (2 * Math.PI);
                                    x = distanceX * Math.cos(theta);
                                    y = distanceY * Math.sin(theta);

                                    ret.push([coords.longitude + x, coords.latitude + y]);
                                }
                                ret.push(ret[0]);

                                return {
                                    "type": "geojson",
                                    "data": {
                                        "type": "FeatureCollection",
                                        "features": [{
                                            "type": "Feature",
                                            "geometry": {
                                                "type": "Polygon",
                                                "coordinates": [ret]
                                            }
                                        }]
                                    }
                                };
                            };

                            // map.addLayer({
                            //     'id': 'parcels-layer',
                            //     'interactive': true,
                            //     'source': 'parcels',
                            //     'layout': {},
                            //     'type': 'fill',
                            //     'paint': {
                            //         'fill-antialias': true,
                            //         'fill-opacity': 0.4,
                            //         //    'fill-color': {
                            //         //     "property": "index_IndexScore",
                            //         //     "type": "interval",
                            //         //     "stops": [
                            //         //         [0, "#888888"],
                            //         //         [50, "#fee391"],
                            //         //         [120, "#fec44f"],
                            //         //         [180, "#fe9929"],
                            //         //         [240, "#d95f0e"],
                            //         //         [300, "#993404"]
                            //         //     ]
                            //         // },
                            //         'fill-outline-color': 'rgba(0, 0, 0, 1)'
                            //     }
                            //     // "filter": [
                            //     //     "==",
                            //     //     "NAME",
                            //     //     "Bloomington"
                            //     // ]
                            // }, 'place-neighbourhood');


                            map.addSource('zones', {
                                type: 'geojson',
                                data: zones
                            });

                            map.addLayer({
                                'id': 'zones-layer',
                                'interactive': true,
                                'source': 'zones',
                                'layout': {},
                                'type': 'fill',
                                'paint': {
                                    'fill-antialias': true,
                                    'fill-opacity': 0.3,
                                    // 'fill-color': {
                                    //     "property": "ZONE_CODE",
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
                                    "!=",
                                    "ALLOWED",
                                    "Y"
                                ]
                            }, 'building');

                            map.addLayer({
                                'id': 'zones-layer2',
                                'interactive': true,
                                'source': 'zones',
                                'layout': {},
                                'type': 'fill',
                                'paint': {
                                    'fill-antialias': true,
                                    'fill-opacity': 0.5,
                                    'fill-color': '#9C0004',
                                    'fill-outline-color': 'rgba(0, 0, 0, 1)'
                                },
                                "filter": [
                                    "==",
                                    "ALLOWED",
                                    "Y"
                                ]
                            }, 'building');


                            // map.addLayer({
                            //     'id': 'zones-layer3',
                            //     'interactive': true,
                            //     'source': 'zones',
                            //     'layout': {},
                            //     'type': 'fill',
                            //     'paint': {
                            //         'fill-antialias': true,
                            //         'fill-opacity': 1,
                            //         'fill-color': '#9C0004',
                            //         'fill-outline-color': 'rgba(0, 0, 0, 1)'
                            //     },
                            //     "filter": [
                            //         "==",
                            //         "ALLOWED",
                            //         "M"
                            //     ]
                            // }, 'building');


                            map.addSource('nicmall', {
                                type: 'geojson',
                                data: nicmall
                            });

                            map.addLayer({
                                'id': 'nic-layer',
                                'interactive': true,
                                'source': 'nicmall',
                                'layout': {},
                                'type': 'fill',
                                'paint': {
                                    'fill-antialias': true,
                                    'fill-opacity': 1,
                                    'fill-color': "#aaaaaa",
                                    'fill-outline-color': '#aaaaaa'
                                }
                            }, 'building');


                            map.addSource('rail', {
                                type: 'geojson',
                                data: rail
                            });


                            map.addLayer({
                                'id': 'rail-layer2',
                                'interactive': true,
                                'source': 'rail',
                                'layout': {},
                                'type': 'line',
                                'paint': {
                                    'line-color': "#aaaaaa",
                                    'line-width': 20,
                                },
                                "filter": [
                                    "==",
                                    "RR_ABBR",
                                    "BNSF"
                                ]
                            }, 'building');

                            for (var i = 0; i < locations.length; i++) {
                                if (locations[i].type != "stripclub" && locations[i].type != "sexshop" && locations[i].type != "club") {
                                    map.addSource("polygon" + i, createGeoJSONCircle([locations[i].longitude, locations[i].latitude], 0.1525));

                                    map.addLayer({
                                        "id": "polygon-layer" + i,
                                        "type": "fill",
                                        "source": "polygon" + i,
                                        "layout": {},
                                        "paint": {
                                            "fill-color": "#aaaaaa",
                                            "fill-opacity": 1
                                        }
                                    }, 'building'); //road-street
                                }
                            }


                            map.addSource("west", createGeoJSONCircle([-93.279934, 44.986930], 0.4048));

                                    map.addLayer({
                                        "id": "west-layer",
                                        "type": "fill",
                                        "source": "west",
                                        "layout": {},
                                        "paint": {
                                            "fill-color": "#aaaaaa",
                                            "fill-opacity": 1
                                        }
                                    }, 'building'); //road-street


                            map.addSource('locationsMap', {
                                type: 'geojson',
                                data: locationsMap
                            });


                            map.addLayer({
                                "id": "locations-layer",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#C22A22',
                                    "circle-stroke-color": "#9C0004",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "type",
                                    "stripclub"
                                ]
                            });

                            map.addLayer({
                                "id": "locations-layer2",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#F2AC93',
                                    "circle-stroke-color": "#9C0004",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "type",
                                    "sexshop"
                                ]
                            });

                            map.addLayer({
                                "id": "locations-layer3",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#ffffff',
                                    "circle-stroke-color": "#9C0004",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "type",
                                    "club"
                                ]
                            });

                            map.addLayer({
                                "id": "church-layer",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#252525',
                                    "circle-stroke-color": "#000000",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "icon",
                                    "church"
                                ]
                            });

                            map.addLayer({
                                "id": "kids-layer",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#969696',
                                    "circle-stroke-color": "#000000",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "icon",
                                    "child"
                                ]
                            });

                            map.addLayer({
                                "id": "school-layer",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#cccccc',
                                    "circle-stroke-color": "#000000",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "icon",
                                    "school"
                                ]
                            });

                            map.addLayer({
                                "id": "library-layer",
                                "type": "circle",
                                "source": "locationsMap",
                                "paint": {
                                    "circle-radius": 4,
                                    "circle-color": '#f7f7f7',
                                    "circle-stroke-color": "#000000",
                                    "circle-stroke-width": 2,
                                },
                                "filter": [
                                    "==",
                                    "icon",
                                    "library"
                                ]
                            });

                            $(document).ready(function() {
                                if ($("#wrapper").width() < 920) {
                                    map.flyTo({
                                        center: [-93.269656, 44.977368],
                                        zoom: 13,
                                        pitch: 0,
                                        bearing: 0
                                    });
                                } else {
                                    map.flyTo({
                                        center: [-93.276494, 44.977528],
                                        zoom: 14.7
                                    });
                                }
                                $(window).resize(function() {
                                    if ($("#wrapper").width() < 920) {
                                        map.flyTo({
                                            center: [-93.269656, 44.977368],
                                            zoom: 13,
                                            pitch: 0,
                                            bearing: 0
                                        });
                                    } else {
                                        map.flyTo({
                                            center: [-93.276494, 44.977528],
                                            zoom: 14.7
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
                                    layers: ['locations-layer', 'locations-layer2', 'locations-layer3','church-layer', 'kids-layer', 'school-layer', 'library-layer']
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
                                    .setHTML(feature.properties.name)
                                    .addTo(map);
                            });

                        });
                    });
                });
            });
        });
});