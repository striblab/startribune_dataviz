//USE SOUNDCITE: https://soundcite.knightlab.com/#create-new

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".dataviz").hide();
$("#" + selected).show();
}

d3.json('./shapefiles/blocks.json', function(error, blocks) {
d3.json('./shapefiles/noise.geojson', function(error, spots) {
d3.json('./shapefiles/blocks_ext.json', function(error, blocks_ext) {
d3.json('./shapefiles/contour2011.json', function(error, contours2011) {
d3.json('./shapefiles/contour2012.json', function(error, contours2012) {
d3.json('./shapefiles/contour2013.json', function(error, contours2013) {
d3.json('./shapefiles/contour2014.json', function(error, contours2014) {
d3.json('./shapefiles/contour2015.json', function(error, contours2015) {

//MAPPAGE
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.216667, 44.860278],
    zoom: 10,
    minZoom: 2
});

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();


map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

$(".zoom").click(function() {
map.flyTo({ center: [-93.216667, 44.860278], zoom: 10 });
});

// geocoder.on('result', function(ev) {
//   map.flyTo({ center: ev.result.geometry.coordinates, zoom: 12 });
//     });

    map.addSource("spots", {
        type: "geojson",
        data: spots
    });

    map.addLayer({
                "id": "spots-layer",
                "type": "circle",
                "source": "spots",
                "paint": {
                "circle-color": {
                property: 'time_over65',
                // type: 'categorical',
                stops: [
                    [-500000, '#2c7bb6'],
                    [-1, '#abd9e9'],
                    // [-1, '#ffffbf'],
                    // [1, '#ffffbf'],
                    [1, '#fdae61'],
                    [50000, '#d7191c']]
            },
                "circle-radius": {
                property: 'noise',
                // type: 'categorical',
                stops: [
                    [0, 3],
                    [100000, 5],
                    [300000, 7],
                    [500000, 9],
                    [1000000, 11]]
            }
                }
    });


});


var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['spots-layer'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'default' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];
    var reason = "";

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML("<div>" + feature.properties.city + "</div><div>" + feature.properties.address + "</div><div>" + d3.format(",+")(feature.properties.noise) + " milliseconds</div>")
        .addTo(map);
});


//MAPPAGE BLOCKS
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map2 = new mapboxgl.Map({
    container: 'map_blocks',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.28362465, 44.89747103],
    zoom: 12.4,
    minZoom: 2
});

map2.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map2.addControl(new mapboxgl.NavigationControl());

map2.scrollZoom.disable();


map2.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

// geocoder2.on('result', function(ev) {
//   map2.flyTo({ center: ev.result.geometry.coordinates, zoom: 14 });
//     });


    map2.addSource("blocks", {
        type: "geojson",
        data: blocks
    });

    map2.addSource("blocks_ext", {
        type: "geojson",
        data: blocks_ext
    });

    map2.addSource("contours2011", {
        type: "geojson",
        data: contours2011
    });

    map2.addSource("contours2012", {
        type: "geojson",
        data: contours2012
    });

    map2.addSource("contours2013", {
        type: "geojson",
        data: contours2013
    });

    map2.addSource("contours2014", {
        type: "geojson",
        data: contours2014
    });

    map2.addSource("contours2015", {
        type: "geojson",
        data: contours2015
    });

//2010
    map2.addLayer({
                "id": "blocks-layer2010",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2010',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2010",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2010',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

//2011
    map2.addLayer({
                "id": "blocks-layer2011",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2011',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2011",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2011',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "contour-layer2011",
                "type": "fill",
                "source": "contours2011",
                "paint": {
                "fill-antialias": true,
                "fill-color": 'rgba(0, 0, 0, 0)',
                // "fill-outline-opacity": 1,
                "fill-outline-color": "#000000"
                }
    });

//2012
    map2.addLayer({
                "id": "blocks-layer2012",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2012',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2012",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2012',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "contour-layer2012",
                "type": "fill",
                "source": "contours2012",
                "paint": {
                "fill-antialias": true,
                "fill-color": 'rgba(0, 0, 0, 0)',
                // "fill-outline-opacity": 1,
                "fill-outline-color": "#000000"
                }
    });

//2013
    map2.addLayer({
                "id": "blocks-layer2013",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2013',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2013",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2013',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "contour-layer2013",
                "type": "fill",
                "source": "contours2013",
                "paint": {
                "fill-antialias": true,
                "fill-color": 'rgba(0, 0, 0, 0)',
                // "fill-outline-opacity": 1,
                "fill-outline-color": "#000000"
                }
    });

//2014
    map2.addLayer({
                "id": "blocks-layer2014",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2014',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2014",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2014',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "contour-layer2014",
                "type": "fill",
                "source": "contours2014",
                "paint": {
                "fill-antialias": true,
                "fill-color": 'rgba(0, 0, 0, 0)',
                // "fill-outline-opacity": 1,
                "fill-outline-color": "#000000"
                }
    });

//2015
    map2.addLayer({
                "id": "blocks-layer2015",
                "type": "fill",
                "source": "blocks",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2015',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "blocks-layer-ext2015",
                "type": "fill",
                "source": "blocks_ext",
                "paint": {
                'fill-antialias' : true,
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(51, 51, 51, 1)',
                "fill-color": {
                property: 'A2015',
                // type: 'categorical',
                stops: [
                    [0, '#2c7bb6'],
                    [50, '#abd9e9'],
                    [55, '#ffffbf'],
                    [65, '#d7191c']]
            }
                }
    });

    map2.addLayer({
                "id": "contour-layer2015",
                "type": "fill",
                "source": "contours2015",
                "paint": {
                "fill-antialias": true,
                "fill-color": 'rgba(0, 0, 0, 0)',
                // "fill-outline-opacity": 1,
                "fill-outline-color": "#000000"
                }
    });

var timer = [];

function playback(index,stream) {

    $(".trackDot").removeClass("current");
    $("#d" + index).addClass("current");
    $("#year").html($("#d" + index).attr("year"));
    $(".chatter").show();

    // if (index == 0){
    // map2.setLayoutProperty('blocks-layer2010', 'visibility', 'visible');
    // map2.setLayoutProperty('blocks-layer2011', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer2012', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer2013', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer2014', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer2015', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'visible');
    // map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'none');
    // map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'none');
    // map2.setLayoutProperty('contour-layer2015', 'visibility', 'visible');
    // }
    if (index == 0){
    $("#thisYear").html("2011");
    map2.setLayoutProperty('blocks-layer2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2011', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2015', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2011', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'none');
    }
    if (index == 1){
    $("#thisYear").html("2012");
    map2.setLayoutProperty('blocks-layer2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2012', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2015', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2012', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'none');
    }
    else if (index == 2){
    $("#thisYear").html("2013");
    map2.setLayoutProperty('blocks-layer2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2013', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2015', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2013', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'none');
    }
    else if (index == 3){
    $("#thisYear").html("2014");
    map2.setLayoutProperty('blocks-layer2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2014', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer2015', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2014', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'none');
    }
    else if (index == 4){
    $("#thisYear").html("2015");
    map2.setLayoutProperty('blocks-layer2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer2015', 'visibility', 'visible');
    map2.setLayoutProperty('blocks-layer-ext2010', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2011', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2012', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2013', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2014', 'visibility', 'none');
    map2.setLayoutProperty('blocks-layer-ext2015', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'visible');
    map2.setLayoutProperty('contour-layer2011', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2012', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2013', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2014', 'visibility', 'none');
    map2.setLayoutProperty('contour-layer2015', 'visibility', 'visible');
    }

}

playback(0);

function play(j,timeout){
 timer[j] = window.setTimeout(function() { playback(j); }, timeout); 
}

function stop(){
  for (var i=0; i<6; i++){
     clearTimeout(timer[i]);
  }
}

$(".trackDot").click(function() {
  $("#toggle").attr("class", "play myButton2");
  $("#toggle").html("&#9658;");
  $(".trackDot").removeClass("current");
  $(this).addClass("current");
  stop();
  index = Number($(this).attr("index"));
  playback(Number($(this).attr("index")));
});

    if ($(window).width() <= 500) { map2.flyTo({ center: [-93.208694, 44.883485], zoom: 10.6 }); }
    else { map2.flyTo({ center: [-93.28362465, 44.89747103], zoom: 12.4 }); }
    $(window).resize(function() {
    if ($(window).width() <= 500) { map2.flyTo({ center: [-93.208694, 44.883485], zoom: 10.6 }); }
    else { map2.flyTo({ center: [-93.28362465, 44.89747103], zoom: 12.4 }); }
    });

$(".zoom").click(function() {
// map2.flyTo({ center: [-93.179770, 44.877039], zoom: 11.5 });
map2.flyTo({ center: [-93.28362465, 44.89747103], zoom: 12.4 });
});

var index = 0;
$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             for (var j=0; j<6; j++){ play(j,j*500); 
                if (index < 5) { index++; } 
                else { j=0; index=0; }
            }
         }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$(".previous").click(function() {
  if (index > 0) {
  index--;
  stop();
  playback(index);
}
  });

$(".next").click(function() {
  if (index < 4) {
  stop();
  index++;
  playback(index);
}
  });

});


//MAPPAGE NOISE
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map3 = new mapboxgl.Map({
    container: 'map_noise',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.28362465, 44.89747103],
    zoom: 12.4,
    minZoom: 2
});

map3.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map3.addControl(new mapboxgl.NavigationControl());

map3.scrollZoom.disable();

map3.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

    // map3.addSource("noise", {
    //     type: "geojson",
    //     data: blocks
    // });

    // map3.addLayer({
    //             "id": "noise_layer",
    //             "type": "fill",
    //             "source": "noise",
    //             "paint": {
    //             'fill-antialias' : true,
    //             'fill-opacity': 0.7,
    //             'fill-outline-color': 'rgba(51, 51, 51, 1)',
    //             "fill-color": {
    //             property: 'A2010',
    //             // type: 'categorical',
    //             stops: [
    //                 [0, '#2c7bb6'],
    //                 [50, '#abd9e9'],
    //                 [55, '#ffffbf'],
    //                 [65, '#d7191c']]
    //         }
    //             }
    // });

});

});
});
});
});
});
});
});
});