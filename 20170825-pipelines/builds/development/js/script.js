(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

d3.json('./shapefiles/pipelines.json', function(error, pipelines) {
d3.json('./shapefiles/enpipelines.json', function(error, enpipelines) {
d3.json('./shapefiles/spills.geojson', function(error, spills) {
d3.json('./shapefiles/enspills.geojson', function(error, enspills) {
d3.json('./shapefiles/petro_pipelines.geojson', function(error, petro) {
d3.json('./shapefiles/enpetro.json', function(error, enpetro) {
d3.json('./shapefiles/hgl_pipelines.geojson', function(error, hgl) {
d3.json('./shapefiles/natgas_pipelines.geojson', function(error, natgas) {
d3.json('./shapefiles/ennatgas.json', function(error, ennatgas) {

var bounds = [
    [-168.046875, 23.150462],// Southwest coordinates
    [-51.328125, 52.849230] // Northeast coordinates
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-94.685900, 46.729553], 
    zoom: 5,
    minZoom: 3,
    // maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

 map.addSource('pipelines', {
   type: 'geojson',
   data: pipelines
 });

 map.addSource('enpipelines', {
   type: 'geojson',
   data: enpipelines
 });


 map.addSource('spills', {
   type: 'geojson',
   data: spills
 });

 map.addSource('enspills', {
   type: 'geojson',
   data: enspills
 });

 map.addSource('petro', {
   type: 'geojson',
   data: petro
 });

 map.addSource('enpetro', {
   type: 'geojson',
   data: enpetro
 });

 map.addSource('hgl', {
   type: 'geojson',
   data: hgl
 });

 map.addSource('natgas', {
   type: 'geojson',
   data: natgas
 });

 map.addSource('ennatgas', {
   type: 'geojson',
   data: ennatgas
 });

  // map.addLayer({
  //      'id': 'pipelines-layer',
  //      'interactive': true,
  //      'source': 'pipelines',
  //      'layout': {},
  //      'type': 'line',
  //           'paint': {
  //          // 'fill-antialias' : true,
  //          // 'fill-opacity': 1,
  //          'line-color': 'rgba(51, 51, 51, 0.5)',
  //          'line-width': 2
  //          // 'fill-outline-color': 'rgba(255, 255, 255, 1)'
  //    },
  //           "filter": [
  //           "!=",
  //           "ENBRIDGE",
  //           "Opername"]
  //  }, 'place-neighbourhood');

  // map.addLayer({
  //      'id': 'petro-layer',
  //      'interactive': true,
  //      'source': 'petro',
  //      'layout': {},
  //      'type': 'line',
  //           'paint': {
  //          // 'fill-antialias' : true,
  //          // 'fill-opacity': 1,
  //          'line-color': 'rgba(51, 51, 51, 0.5)',
  //          'line-width': 2
  //          // 'fill-outline-color': 'rgba(255, 255, 255, 1)'
  //    },
  //           "filter": [
  //           "!=",
  //           "ENBRIDGE",
  //           "Opername"]
  //  }, 'place-neighbourhood');

  // map.addLayer({
  //      'id': 'hgl-layer',
  //      'interactive': true,
  //      'source': 'hgl',
  //      'layout': {},
  //      'type': 'line',
  //           'paint': {
  //          // 'fill-antialias' : true,
  //          // 'fill-opacity': 1,
  //          'line-color': 'rgba(51, 51, 51, 0.5)',
  //          'line-width': 2
  //          // 'fill-outline-color': 'rgba(255, 255, 255, 1)'
  //    },
  //           "filter": [
  //           "!=",
  //           "ENBRIDGE",
  //           "Opername"]
  //  }, 'place-neighbourhood');

  // map.addLayer({
  //      'id': 'natgas-layer',
  //      'interactive': true,
  //      'source': 'natgas',
  //      'layout': {},
  //      'type': 'line',
  //           'paint': {
  //          // 'fill-antialias' : true,
  //          // 'fill-opacity': 1,
  //          'line-color': 'rgba(51, 51, 51, 0)',
  //          'line-width': 2
  //          // 'fill-outline-color': 'rgba(255, 255, 255, 1)'
  //    },
  //           "filter": [
  //           "!=",
  //           "ENBRIDGE",
  //           "Opername"]
  //  }, 'place-neighbourhood');

  map.addLayer({
       'id': 'pipelines-layer-e',
       'interactive': true,
       'source': 'enpipelines',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': 'rgba(88, 88, 88, 1)',
           'line-width': 2
            }
   }, 'place-neighbourhood');

  map.addLayer({
       'id': 'natgas-layer-e',
       'interactive': true,
       'source': 'ennatgas',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': 'rgba(88, 88, 88, 1)',
           'line-width': 2
            }
   }, 'place-neighbourhood');

  map.addLayer({
       'id': 'petro-layer-e',
       'interactive': true,
       'source': 'enpetro',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': 'rgba(88, 88, 88, 1)',
           'line-width': 2
            }
   }, 'place-neighbourhood');

      // map.addLayer({
      //             "id": "spills-layer",
      //             "type": "circle",
      //             "source": "spills",
      //             "paint": {
      //                "circle-radius": 5,
      //                "circle-color": 'rgba(88, 88, 88, 0.45)'
      //             },
      //             "filter": [
      //             "==",
      //             "ENBRIDGE",
      //             "NO"]
      // });


      map.addLayer({
                  "id": "spills-layer-e",
                  "type": "circle",
                  "source": "enspills",
                  "paint": {
                     "circle-radius": 7,
                     "circle-color": 'rgba(183, 12, 12, 1)',
                     "circle-stroke-color": "#ffffff",
                     "circle-stroke-width": 1.5,
                  },
            "filter": [
            ">",
            "YEAR",
            1999]
      });

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['spills-layer-e'] });
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        if (!features.length) {
            popup.remove();
            return;
        }

        var feature = features[0];

        popup.setLngLat(e.lngLat)
            .setHTML("<div class='name'>" + String(feature.properties.NAME).toUpperCase() + "</div><div class='date'>" + feature.properties.DATE + "</div><div class=''>Spill</div>")
            .addTo(map);
    });


});

//trend chart
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
                columns: [
                  ['x',2010,2011,2012,2013,2014,2015,2016],
                  ['Spills',25,12,21,22,23,29,7]
                ],
            type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.2
                }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['rgba(183, 12, 12, 1)']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                        format: d3.format('.0f')
                        }
                    },
                x: {
                    tick: {
                        count: 4,
                        values: [2010,2012,2014,2016],
                        multiline: false,
                        format: d3.format('.0f')
                    }
                }
            }
    });
}

chartTrend();

  function chartMN(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartTrend = c3.generate({
          bindto: "#chartMN",
          padding: padding,
          data: {
              x: 'x',
                columns: [
                  ['x',2008,2009,2010,2011,2012,2013,2014,2015,2016],
                  ['Spills',13,37,14,5,5,4,5,11,3]
                ],
            type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.2
                }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['rgba(183, 12, 12, 1)']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                        format: d3.format('.0f')
                        }
                    },
                x: {
                    tick: {
                        count: 5,
                        values: [2008,2010,2012,2014,2016],
                        multiline: false,
                        format: d3.format('.0f')
                    }
                }
            }
    });
}

chartMN();

});
});
});
});
});
});
});
});
});
},{}]},{},[1])