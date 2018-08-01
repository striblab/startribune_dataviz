/**
 * Main JS file for project.
 */
// Define globals that are added through the js.globals in
// the config.json file, here like this:
// /* global _ */
// Utility functions, such as Pym integration, number formatting,
// and device checking
import utilsFn from './utils.js';

utilsFn({});


// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Utilize templates on the client.  Get the main content template.
//import Content from '../templates/_index-content.svelte.html';
//
// Get the data parts that are needed.  For larger data points,
// utilize window.fetch.  Add the build = true option in the buildData
// options.
//import content from '../content.json';
// OR: let content = await (await window.fetch('./assets/data/content.json')).json();
//
// const app = new Content({
//   target: document.querySelector('.main-app-container'),
//   data: {
//     content
//   }
// });

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
}
if (selected == "all") {
    $(".slide").show();
}

//CHARTS
function chartTrend() {
    var padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 40,
    };

    var chartTrend = c3.generate({
        bindto: "#chartTrend",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
                ['Ash Removed', 1332, 1141, 1048, 1204, 1230, 1018, 986, 1255],
                ['Other Removed', 2144,1862,1280,1881,2708,2027,2773,2109],
                ['Planted', 2571,2955,2801,2714,2340,2409,2170,3530],
            ],
             types: {
                'Ash Removed': 'area-spline',
                'Other Removed': 'area-spline',
                'Planted': 'spline'
                },       
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            },
                groups: [['Ash Removed', 'Other Removed']]
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            // r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#F2614C', '#857AAA', '#67B4C2', '#5BBF48']
        },
        axis: {
            // rotated: true,
            y: {
                max: 4000,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 6,
                    values: [0, 1000, 2000, 3000, 4000],
                    format: d3.format(',.0f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
                    multiline: false,
                }
            }
        },
        grid: {
            focus: {
                show: false
            },
        },
        //    regions: [
        //   {axis: 'x', start: 2011, end: 2016, class: 'hottest'},
        // ],
        tooltip: {
            show: false
            // contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
            //     return '<div class="chart-tooltip gray3">' +
            //         '<span class="tooltip-label">' + d[0].x + '</span></div><div class="chart-tooltip red3">' +
            //         '<span class="tooltip-label">Ash Removed:</span>' +
            //         '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            //         '</div><div class="chart-tooltip purple3">' +
            //         '<span class="tooltip-label">Other Removed:</span>' +
            //         '<span class="tooltip-value">' + defaultValueFormat(d[1].value) + '</span>' +
            //         '</div><div class="chart-tooltip blue3">' +
            //         '<span class="tooltip-label">Planted:</span>' +
            //         '<span class="tooltip-value">' + defaultValueFormat(d[2].value) + '</span>' +
            //         '</div>';
            // }
        }
    });
}

chartTrend();


d3.json('./shapefiles/removed.geojson', function(error, removed) {
    d3.json('./shapefiles/planted.geojson', function(error, planted) {

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

        var center = [-93.089958, 44.953703];
        var zoom = 10.7;
        var centerM = [-93.089958, 44.953703];
        var zoomM = 10.3;

        //REMOVAL MAP
        var map = new mapboxgl.Map({
            container: 'mapRemove',
            style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
            // center: [-93.179770, 44.877039],
            center: center,
            zoom: zoom,
            minZoom: 2,
            scrollZoom: false,
            boxZoom: false,
            doubleClickZoom: false
        });

        //REPLACEMENT MAP
        var map2 = new mapboxgl.Map({
            container: 'mapReplace',
            style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
            // center: [-93.179770, 44.877039],
            center: center,
            zoom: zoom,
            minZoom: 2,
            scrollZoom: false,
            boxZoom: false,
            doubleClickZoom: false
        });


        //CREATE A BOUNDING BOX AROUND POINTS (ALSO USE FOR HEX GRID)
        var enveloped = turf.envelope(removed); //send point geojson to turf, creates an 'envelope' (bounding box) around points
        var result = { //put the resulting envelope in a geojson format FeatureCollection
            "type": "FeatureCollection",
            "features": [enveloped] //don't forget brackets
        };

        var enveloped2 = turf.envelope(planted); //send point geojson to turf, creates an 'envelope' (bounding box) around points
        var result2 = { //put the resulting envelope in a geojson format FeatureCollection
            "type": "FeatureCollection",
            "features": [enveloped2] //don't forget brackets
        };

        //CREATE A HEX GRID
        //must be in order: minX, minY, maxX, maxY ... you have to pick these out from your envelope that you created previously
        var bbox = [-93.00432, 44.992016, -93.207787, 44.887399];
        var hexgridUnits = 'miles' //units that will determine the width of the hex grid
        var cellWidth = 1 //in the units you defined above
        var hexgrid = turf.hexGrid(bbox, cellWidth, hexgridUnits); //makes the new geojson hexgrid features

        //COUNT THE NUMBER OF TREES IN EACH HEX BIN
        var hexRemoved = turf.count(hexgrid, removed, 'removedCount');
        var hexPlanted = turf.count(hexgrid, planted, 'plantedCount');

        //create jenks natural breaks - generates min, breaks, max ... remember for 5 categories, we only need 4 numbers
        var numberBreaks = 7
        var jenksbreaks = turf.jenks(hexRemoved, 'removedCount', numberBreaks);
        var colors = ['#F2AC93', '#F2AC93', '#F28670', '#F28670', '#F2614C', '#F2614C', '#C22A22', '#C22A22', '#9C0004']
        var transparency = [0, 1, 1, 1, 1, 1, 1, 1, 1]

        var numberBreaks2 = 7
        var jenksbreaks2 = turf.jenks(hexPlanted, 'plantedCount', numberBreaks2);
        var colors2 = ['#D1E6E1', '#D1E6E1', '#A7E6E3', '#A7E6E3', '#67B4C2', '#67B4C2', '#3580A3', '#3580A3', '#0D4673']
        var transparency2 = [0, 1, 1, 1, 1, 1, 1, 1, 1]

        jenksbreaks.forEach(function(element, i) {
            if (i > 0) {
                jenksbreaks[i] = [element, colors[i - 1], transparency[i - 1]];
            } else {
                jenksbreaks[i] = [element, null];
            }
        });

        jenksbreaks2.forEach(function(element, i) {
            if (i > 0) {
                jenksbreaks2[i] = [element, colors2[i - 1], transparency2[i - 1]];
            } else {
                jenksbreaks2[i] = [element, null];
            }
        });

        map.on('load', function() {

            //HEXGRIDS
            map.addSource('removedHexGrid', {
                "type": "geojson",
                "data": hexRemoved //this is the hexgrid we just created!
            });
            for (var i = 0; i < jenksbreaks.length; i++) {
                if (i > 0) {
                    map.addLayer({
                        "id": "removedHexGrid-" + (i - 1),
                        "type": "fill",
                        "source": "removedHexGrid",
                        "layout": {},
                        "paint": {
                            'fill-color': jenksbreaks[i][1],
                            'fill-opacity': jenksbreaks[i][2],
                        }
                    }, "road-label-medium");
                };
            };

            jenksbreaks.forEach(function(jenksbreak, i) {
                if (i > 0) {
                    var filters = ['all', ['<=', 'removedCount', jenksbreak[0]]];
                    if (i > 1) {
                        filters.push(['>', 'removedCount', jenksbreaks[i - 1][0]]);
                        map.setFilter('removedHexGrid-' + (i - 1), filters);
                    };

                };
            });

            //  map.addSource("removed", {
            //     type: "geojson",
            //     data: removed
            // });

            //  map.addLayer({
            //           "id": "removed-layer",
            //           "type": "circle",
            //           "source": "removed",
            //           "paint": {
            //              "circle-radius": 2,
            //              "circle-color": 'rgba(224,114,66, 0.3)'
            //           }
            // });

        });

        map2.on('load', function() {

            //HEXGRIDS
            map2.addSource('plantedHexGrid', {
                "type": "geojson",
                "data": hexPlanted //this is the hexgrid we just created!
            });
            for (var i = 0; i < jenksbreaks2.length; i++) {
                if (i > 0) {
                    map2.addLayer({
                        "id": "plantedHexGrid-" + (i - 1),
                        "type": "fill",
                        "source": "plantedHexGrid",
                        "layout": {},
                        "paint": {
                            'fill-color': jenksbreaks2[i][1],
                            'fill-opacity': jenksbreaks2[i][2],
                        }
                    }, "road-label-medium");
                };
            };

            jenksbreaks2.forEach(function(jenksbreak2, i) {
                if (i > 0) {
                    var filters = ['all', ['<=', 'plantedCount', jenksbreak2[0]]];
                    if (i > 1) {
                        filters.push(['>', 'plantedCount', jenksbreaks2[i - 1][0]]);
                        map2.setFilter('plantedHexGrid-' + (i - 1), filters);
                    };

                };
            });

            // map2.addSource("planted", {
            //     type: "geojson",
            //     data: planted
            // });
            
            //  map2.addLayer({
            //           "id": "planted-layer",
            //           "type": "circle",
            //           "source": "planted",
            //           "paint": {
            //              "circle-radius": 2,
            //              "circle-color": 'rgba(158,227,132, 0.3)'
            //           }
            // });

        });

        $(document).ready(function() {
            if ($("#wrapper").width() < 520) {
                map.flyTo({
                    center: centerM,
                    zoom: zoomM,
                    pitch: 0,
                    bearing: 0
                });
                map2.flyTo({
                    center: centerM,
                    zoom: zoomM,
                    pitch: 0,
                    bearing: 0
                });
            } else {
                map.flyTo({
                    center: center,
                    zoom: zoom
                });
                map2.flyTo({
                    center: center,
                    zoom: zoom
                });
            }
        $(window).resize(function() {
            if ($("#wrapper").width() < 520) {
                map.flyTo({
                    center: centerM,
                    zoom: zoomM,
                    pitch: 0,
                    bearing: 0
                });
                map2.flyTo({
                    center: centerM,
                    zoom: zoomM,
                    pitch: 0,
                    bearing: 0
                });
            } else {
                map.flyTo({
                    center: center,
                    zoom: zoom
                });
                map2.flyTo({
                    center: center,
                    zoom: zoom
                });
            }
            });
        });

    });
});