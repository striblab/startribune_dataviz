$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

d3.json('./data/bridges.geojson', function(error, bridges) {
d3.json('./data/bridges2006.geojson', function(error, bridges2006) {
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var bounds = [
    [-101.590576, 42.806988], // Southwest coordinates
    [-85.924072, 49.335414]  // Northeast coordinates
];

var beforeMap = new mapboxgl.Map({
    container: 'before', // container id
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    // center: [-93.28469849, 45.01832962], 
    // zoom: 9,
    center: [-94.685900, 46.729553], 
    zoom: 5,
    minZoom: 5,
    hash: false
    // maxBounds: bounds
});

var map = new mapboxgl.Map({
    container: 'after', // container id
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    // center: [-93.28469849, 45.01832962], 
    // zoom: 9,
    center: [-94.685900, 46.729553], 
    zoom: 5,
    minZoom: 5,
    hash: false
    // maxBounds: bounds
});

var mapBoth = new mapboxgl.Compare(map, beforeMap, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});

map.addControl(new mapboxgl.NavigationControl());
beforeMap.addControl(new mapboxgl.NavigationControl());

map.scrollZoom.disable();
beforeMap.scrollZoom.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

beforeMap.on('load', function() {

 beforeMap.addSource('bridges2006', {
   type: 'geojson',
   data: bridges2006
 });

        beforeMap.addLayer({
                  "id": "bridges2006-fine",
                  "type": "circle",
                  "source": "bridges2006",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(150, 150, 150, 0.8)'
                  },
                  "filter": [
                  "!=",
                  "STAT",
                  "1"]
        });

        beforeMap.addLayer({
                  "id": "bridges2006",
                  "type": "circle",
                  "source": "bridges2006",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(0,191,255, 1)'
                  },
                  "filter": [
                  "==",
                  "STAT",
                  "1"]
        });

        beforeMap.addLayer({
                  "id": "bridges2006-fo",
                  "type": "circle",
                  "source": "bridges2006",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(66, 134, 244, 0)'
                  },
                  "filter": [
                  "==",
                  "STAT",
                  "2"]
        });

});

map.on('load', function() {

 map.addSource('bridges', {
   type: 'geojson',
   data: bridges
 });

        map.addLayer({
                  "id": "bridges-fine",
                  "type": "circle",
                  "source": "bridges",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(150, 150, 150, 0.8)'
                  },
                  "filter": [
                  "!=",
                  "nbi_rating",
                  "1"]
        });

        map.addLayer({
                  "id": "bridges",
                  "type": "circle",
                  "source": "bridges",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(0,191,255, 1)'
                  },
                  "filter": [
                  "==",
                  "nbi_rating",
                  "1"]
        });

        map.addLayer({
                  "id": "bridges-fo",
                  "type": "circle",
                  "source": "bridges",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(66, 134, 244, 0)'
                  },
                  "filter": [
                  "==",
                  "nbi_rating",
                  "2"]
        });

});
});
});

  function trafficChart(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartPopD = c3.generate({
          bindto: "#trafficChart",
          padding: padding,
          data: {
                columns: [
                    ['2006', 0.11,0.09,0.08,0.04,0.05,0.05,0.07,0.08],
                    ['2017', 0.06,0.07,0.05,0.03,0.04,0.02,0.01,0]
                ],
            type: 'bar',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#aaa','#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 0.12,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format('%')
                        },
                        label: "% of bridges"
                    },
                x: {
                    type: 'category',
                    tick: {
                        rotate: -60,
                        multiline: false
                    },
                    categories: ['<100','100-499','500-999','1k-4k','5k-9k','10k-49k','50k-99k','100k+'],
                    height: 40
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

  function lengthChart(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartPopD = c3.generate({
          bindto: "#lengthChart",
          padding: padding,
          data: {
                columns: [
                    ['% 2006', 0.09,0.11,0.08,0.07,0.03,0.06],
                    ['% 2017', 0.06,0.09,0.06,0.03,0.02,0.03]
                ],
            type: 'bar',
            labels: {
                format: {
                    // '% 2006': d3.format('%'),
                    // '% 2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#aaa','#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 0.12,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format('%')
                        },
                        label: "% of bridges"
                    },
                x: {
                    type: 'category',
                    tick: {
                        rotate: -60,
                        multiline: false
                    },
                    categories: ['20-49ft','50-74ft','75-99ft','100-199ft','200-499ft','500ft+'],
                    height: 40
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

  function bigChart(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartPopD = c3.generate({
          bindto: "#bigChart",
          padding: padding,
          data: {
                columns: [
                    ['% deficient', 0.05,0.03],
                    ['% F.O.', 0.08,0.07],
                    ['% fracture critical', 0.10,0.06]
                ],
            type: 'bar',
            labels: {
                format: {
                    '% deficient': d3.format('%'),
                    '% F.O.': d3.format('%'),
                    '% fracture critical': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#085388','#8F120B','#d34A44']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 0.12,
                        min: 0,
                        padding: {bottom: 0, top:0},
                        tick: {
                         count: 4,
                         values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format('%')
                        },
                        label: "% of bridges"
                    },
                x: {
                    type: 'category',
                    categories: ['2006','2017']
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

  function decadeChart(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartPopD = c3.generate({
          bindto: "#decadeChart",
          padding: padding,
          data: {
                columns: [
                    ["2006",915,736,505,1090,1984,2457,2188,2081,1370,0],
                    ["2017",513,520,319,650,1593,2307,2147,2066,2086,1195]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#aaa','#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 3000,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,1000,2000,3000]
                         // format: d3.format('%')
                        },
                        label: "# of bridges"
                    },
                x: {
                    type: 'category',
                    tick: {
                        rotate: -60,
                        multiline: false
                    },
                    categories: ['Pre 1930','1930','1940','1950','1960','1970','1980','1990','2000','2010'],
                    height: 40
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

trafficChart();
lengthChart();
bigChart();
decadeChart();