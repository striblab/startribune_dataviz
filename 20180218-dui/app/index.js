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

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected == "all"){
  $(".slide").show();
} else if (selected != null){
  $(".slide").hide();
  $("#" + selected).show();
}

  function chartRank(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 120,
        };

    var chartRank = c3.generate({
          bindto: "#chartRank",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  // ["x","Edina PD","Fridley PD","Olmsted SO","Winona PD","Coon Rapids PD","Inver Grove Heights PD","Bloomington PD","Richfield PD","Moorhead PD","St. Cloud PD","Beltrami SO","Stearns SO","St Louis Park PD","Eden Prairie PD","Prior Lake PD","Apple Valley PD","Duluth PD","Shakopee PD","Minnetonka PD","Anoka SO","Woodbury PD","Otter Tail SO","Carver SO","Brooklyn Center PD","Washington SO","Oakdale PD","Savage PD","Owatonna PD","Sherburne SO","Blaine PD","Maplewood PD","Pine SO","Maple Grove PD","Itasca SO","Cottage Grove PD","Chisago SO","St. Louis SO (Hibbing)","Wright SO","Crow Wing SO","Ramsey PD","Ramsey SO","Plymouth PD","Lakeville PD","Eagan PD","Rochester PD","Burnsville PD","Brooklyn Park PD","St Paul PD","Minneapolis PD","Roseville PD"],
                  // ["DWI Arrest Rate",94.1139253,52.85678329,51.31070921,50.36850487,48.25264508,47.36226426,45.6767737,45.04257072,42.11071118,41.87642001,41.81620625,41.43368599,41.41890506,39.19608976,37.25695657,35.81939281,34.84725287,34.54742868,33.61828835,32.17293858,32.15899873,32.01442904,30.1301623,30.10390703,29.81025771,29.77561944,28.60080982,27.5621118,26.62127957,26.61807811,26.29592657,25.60110707,25.077741,24.8939378,24.88662759,24.8765455,23.21624783,22.91095396,22.10781345,21.69527652,21.29416927,20.6504234,20.46085643,19.04105071,18.44562512,17.01865569,16.04010025,15.26717557,13.67723173,10.01279413]

                  ["x","Edina PD","Fridley PD","Olmsted SO","Winona PD","Coon Rapids PD","Inver Grove Heights PD","Bloomington PD","Richfield PD","Moorhead PD","St. Cloud PD","Beltrami SO","Stearns SO","St Louis Park PD","Eden Prairie PD","Prior Lake PD","Apple Valley PD","Duluth PD","Shakopee PD","Minnetonka PD","Anoka SO","Woodbury PD","Otter Tail SO","Carver SO","Brooklyn Center PD","Washington SO"],
                  ["DWI Arrest Rate",94.1139253,52.85678329,51.31070921,50.36850487,48.25264508,47.36226426,45.6767737,45.04257072,42.11071118,41.87642001,41.81620625,41.43368599,41.41890506,39.19608976,37.25695657,35.81939281,34.84725287,34.54742868,33.61828835,32.17293858,32.15899873,32.01442904,30.1301623,30.10390703,29.81025771]
              ],
              type: 'bar'
          },
            legend: {
                show: false
            },
            color: {
                  pattern: ['#3580A3']
                },
            tooltip: {
            	// show: false
            },
          axis: {
              rotated: true,
                y: {
                        max: 100,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 3,
                         values: [0,20,40,60,80,100],
                         format: d3.format('.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick: {
                  	multiline:false
                  }
              }
          }
    });
}

chartRank();


function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x','2013','2014','2015','2016','2017'],
                  ['DWI Arrests',157,187,327,387,476]
              ],
              type: 'bar',
            labels: {
                format: {
                    'DWI Arrests': d3.format('.0f')
              }
            }
          },

            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
            color: {
                  pattern: ['#3580A3']
                },
          axis: {
              // rotated: true,
                y: {
                      max: 600,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 5,
                         values: [0,100,200,300,400,500,600],
                         format: d3.format('.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick:{
                    multiline:false
                  }
              }
          },
          grid: {
              x: {
              lines: [
                    {value: '2015', text: 'DWI grant begins', position: 'end', class:'powerline'},
              ]
              }
          }
    });
}

chartTrend();

  function chartSize(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 120,
        };

    var chartSize = c3.generate({
          bindto: "#chartSize",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ["x","Minneapolis PD","St Paul PD","Rochester PD","Ramsey SO","Wright SO","St. Louis SO (Hibbing)","Anoka SO","Duluth PD","St. Cloud PD","Bloomington PD","Edina PD"],
                  ["DWI Arrest Rate",13.67723173,15.26717557,18.44562512,21.29416927,22.91095396,23.21624783,32.17293858,34.84725287,41.87642001,45.6767737,94.1139253]
              ],
              type: 'bar'
          },
            legend: {
                show: false
            },
            color: {
                  pattern: ['#3580A3']
                },
            tooltip: {
              // show: false
            },
          axis: {
              rotated: true,
                y: {
                        max: 100,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 3,
                         values: [0,20,40,60,80,100],
                         format: d3.format('.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick: {
                    multiline:false
                  }
              }
          }
    });
}

chartSize();

d3.json("./shapefiles/mn_places.json", function(error, mncities) {
d3.json("./data/stops.geojson", function(error, stops) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.349949, 44.889687],
    zoom: 11,
    minZoom: 2,
    interactive: false
});

// map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function () {

 map.addSource('mncities', {
   type: 'geojson',
   data: mncities
 });

 map.addLayer({
       'id': 'mncities-layer',
       'interactive': true,
       'source': 'mncities',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
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
            "Edina"]
   }, 'place-neighbourhood');

  map.addSource('stops', {
   type: 'geojson',
   data: stops
 });

      map.addLayer({
                  "id": "stops-layer",
                  "type": "circle",
                  "source": "stops",
                  "paint": {
                     "circle-radius": {
                      property: "stops",
                      type: "interval",
                      stops: [
                          // ["YES", 10],
                          // ["NO", 5]
                          // [1, 5],
                          [1, 2],
                          [5, 5],
                          [20, 15],
                          [100, 20]
                      ]
                   },
                     "circle-color": 'rgba(53,128,163, .6)',
                     "circle-stroke-color": "#000000",
                     "circle-stroke-width": 0.5,
                  }
      });

});
});
});