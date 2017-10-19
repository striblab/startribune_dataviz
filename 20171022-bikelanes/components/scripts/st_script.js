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


d3.json('./shapefiles/2001_mpls_dedicated.json', function(error, mpls2001a) {
d3.json('./shapefiles/2001_mpls_offstreet.json', function(error, mpls2001b) {
d3.json('./shapefiles/2001_mpls_shared.json', function(error, mpls2001c) {
d3.json('./shapefiles/2011_mpls_dedicated.json', function(error, mpls2011a) {
d3.json('./shapefiles/2011_mpls_offstreet.json', function(error, mpls2011b) {
d3.json('./shapefiles/2011_mpls_shared.json', function(error, mpls2011c) {
d3.json('./shapefiles/2017_mpls_dedicated.json', function(error, mpls2017a) {
d3.json('./shapefiles/2017_mpls_offstreet.json', function(error, mpls2017b) {
d3.json('./shapefiles/2017_mpls_shared.json', function(error, mpls2017c) {
d3.json('./shapefiles/stp_bike_lanes.json', function(error, stp) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

//MPLS MAP
var map = new mapboxgl.Map({
    container: 'mapMPLS',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.265011, 44.977753],
    zoom: 9.9,
    minZoom: 2
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

//2017
    map.addSource("mpls2017a", {
        type: "geojson",
        data: mpls2017a
    });

      map.addLayer({
       'id': 'mpls2017a-layer',
       'interactive': true,
       'source': 'mpls2017a',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#C22A22',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2017b", {
        type: "geojson",
        data: mpls2017b
    });

      map.addLayer({
       'id': 'mpls2017b-layer',
       'interactive': true,
       'source': 'mpls2017b',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#C22A22',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2017c", {
        type: "geojson",
        data: mpls2017c
    });

      map.addLayer({
       'id': 'mpls2017c-layer',
       'interactive': true,
       'source': 'mpls2017c',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#C22A22',
           'line-width': 2
            }
   }, 'place-neighbourhood');


//2011
    map.addSource("mpls2011a", {
        type: "geojson",
        data: mpls2011a
    });

      map.addLayer({
       'id': 'mpls2011a-layer',
       'interactive': true,
       'source': 'mpls2011a',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#299E3D',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2011b", {
        type: "geojson",
        data: mpls2011b
    });

      map.addLayer({
       'id': 'mpls2011b-layer',
       'interactive': true,
       'source': 'mpls2011b',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#299E3D',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2011c", {
        type: "geojson",
        data: mpls2011c
    });

      map.addLayer({
       'id': 'mpls2011c-layer',
       'interactive': true,
       'source': 'mpls2011c',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#299E3D',
           'line-width': 2
            }
   }, 'place-neighbourhood');

//2001
    map.addSource("mpls2001a", {
        type: "geojson",
        data: mpls2001a
    });

     map.addLayer({
       'id': 'mpls2001a-layer',
       'interactive': true,
       'source': 'mpls2001a',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#636363',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2001b", {
        type: "geojson",
        data: mpls2001b
    });

      map.addLayer({
       'id': 'mpls2001b-layer',
       'interactive': true,
       'source': 'mpls2001b',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#636363',
           'line-width': 2
            }
   }, 'place-neighbourhood');

    map.addSource("mpls2001c", {
        type: "geojson",
        data: mpls2001c
    });

      map.addLayer({
       'id': 'mpls2001c-layer',
       'interactive': true,
       'source': 'mpls2001c',
       'layout': {},
       'type': 'line',
          'paint': {
           'line-color': '#636363',
           'line-width': 2
            }
   }, 'place-neighbourhood');

});

//STP MAP
var map2 = new mapboxgl.Map({
    container: 'mapSTP',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.089958, 44.953703],
    zoom: 9.9,
    minZoom: 2
});

map2.addControl(new mapboxgl.NavigationControl());

map2.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

// geocoder2.on('result', function(ev) {
//   map2.flyTo({ center: ev.result.geometry.coordinates, zoom: 14 });
//     });

   //  map.addSource("contours", {
   //      type: "geojson",
   //      data: contours
   //  });

   //    map.addLayer({
   //     'id': 'contours-layer',
   //     'interactive': true,
   //     'source': 'contours',
   //     'layout': {},
   //     'type': 'line',
   //        'paint': {
   //         'line-color': '#E07242',

   //         'line-width': 2
   //          }
   // }, 'place-neighbourhood');

});

//populate charts
  function chartChange(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };

    var chartChange = c3.generate({
          bindto: "#chartChange",
          padding: padding,
          data: {
                // x: 'x',
                columns: [
                  // ['x',2001, 2011, 2017],
                  ["On-street shared lanes",1,18,37],
                  ["On-street dedicated lanes",28,65,108],
                  ["Off-street bikeways",71,92,104]
                ],
            type: 'bar',
            groups: [['On-street shared lanes','On-street dedicated lanes','Off-street bikeways']]
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#3580A3','#C6D1D9','#E07242']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 6,
                         values: [0,50,100,150,200,250],
                        format: d3.format(',')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['2001','2011','2017'],
                    padding: {right: 0, left: 0},
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartChange();

});
});
});
});
});
});
});
});
});
});