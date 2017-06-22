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

d3.json('./data/charters.geojson', function(error, charters) {

var bounds = [
    [-168.046875, 23.150462],// Southwest coordinates
    [-51.328125, 52.849230] // Northeast coordinates
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-95.954590,46.489884], 
    zoom: 6,
    minZoom: 2,
    // maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

$("#state").click(function() { 
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  map.flyTo({ center: [-95.954590,46.489884], zoom:6 });
});

$("#metro").click(function() { 
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  map.flyTo({ center: [-93.265011, 44.977753], zoom:10 });
});

  map.addSource('charters', {
   type: 'geojson',
   data: charters
 });

function plopMarker(year,rgb,index){

     cap = year;

     var framesPerSecond = 15; 
     var initialOpacity = 1
     var opacity = initialOpacity;
     var initialRadius = 5;
     var radius = initialRadius;
     var maxRadius = 18;

      map.addLayer({
                  "id": "charter-layer-" + year,
                  "type": "circle",
                  "source": "charters",
                  "paint": {
    			           "circle-radius": initialRadius,
    			           "circle-radius-transition": {duration: 0},
    			           "circle-opacity-transition": {duration: 0},
    			           "circle-color": 'rgba(' + rgb + ', 0.45)'
                  },
                  "filter": [
                  "==",
                  "firstyr",
                  year]
                  // "filter":[ 
                  // "==",
                  // "Name",
                  // species]
      });

      map.addLayer({
                  "id": "charter-layer1-" + year,
                  "type": "circle",
                  "source": "charters",
                  "paint": {
                     "circle-radius": initialRadius,
                     "circle-radius-transition": {duration: 0},
                     "circle-opacity-transition": {duration: 0},
                     "circle-color": 'rgba(204, 0, 0, 0.45)'
                  },
                  "filter": [
                  "==",
                  "lastyr",
                  year]
      });


    map.setLayoutProperty('charter-layer1-' + year, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + year, 'visibility', 'none');

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['charter-layer-' + year, 'charter-layer1-' + year] });
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
}

function hideMarkers(index){
    map.setLayoutProperty('charter-layer1-' + index, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + index, 'visibility', 'none');
}

function showMarkers(index){
    map.setLayoutProperty('charter-layer1-' + index, 'visibility', 'visible');
    map.setLayoutProperty('charter-layer-' + index, 'visibility', 'visible');
}

function loadMarkers(){
  for (var i=1995; i <= 2017; i++){
    plopMarker(i,'51,204,255',i);
  }
}

function unloadMarkers(start, cap){
  for (var i=start; i <= cap; i++){
    map.setLayoutProperty('charter-layer1-' + i, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + i, 'visibility', 'none');
  }
}

loadMarkers();
unloadMarkers(1995, 2017);

var timer = [];

timer[0] = setTimeout(function(){ showMarkers(1995); }, 1000);
timer[1] = setTimeout(function(){ showMarkers(1996); }, 1400);
timer[2] = setTimeout(function(){ showMarkers(1997);  }, 1800);
timer[3] = setTimeout(function(){ showMarkers(1998);  }, 2200);
timer[4] = setTimeout(function(){ showMarkers(1999);  }, 2600);
timer[5] = setTimeout(function(){ showMarkers(2000);  }, 3200);
timer[6] = setTimeout(function(){ showMarkers(2001);  }, 3800);
timer[7] = setTimeout(function(){ showMarkers(2002);  }, 4400);
timer[8] = setTimeout(function(){ showMarkers(2003);  }, 5000);
timer[9] = setTimeout(function(){ showMarkers(2004);  }, 5600);
timer[10] = setTimeout(function(){ showMarkers(2005);  }, 7200);
timer[11] = setTimeout(function(){ showMarkers(2006);  }, 7800);
timer[12] = setTimeout(function(){ showMarkers(2007);  }, 8200);
timer[13] = setTimeout(function(){ showMarkers(2008);  }, 8600);
timer[14] = setTimeout(function(){ showMarkers(2009);  }, 9000);
timer[15] = setTimeout(function(){ showMarkers(2010);  }, 9400);
timer[16] = setTimeout(function(){ showMarkers(2011);  }, 9800);
timer[17] = setTimeout(function(){ showMarkers(2012);  }, 10200);
timer[18] = setTimeout(function(){ showMarkers(2013);  }, 10600);
timer[19] = setTimeout(function(){ showMarkers(2014);  }, 11000);
timer[20] = setTimeout(function(){ showMarkers(2015);  }, 11400);
timer[21] = setTimeout(function(){ showMarkers(2016);  }, 11800);
timer[22] = setTimeout(function(){ showMarkers(2016);  }, 12200);

$("#reload").click(function() { 
  unloadMarkers(1995, 2017);

  for (var i = 0; i < timer.length; i++) {
    clearTimeout(timer[i]);
  }

  timer[0] = setTimeout(function(){ showMarkers(1995); }, 1000);
  timer[1] = setTimeout(function(){ showMarkers(1996); }, 1400);
  timer[2] = setTimeout(function(){ showMarkers(1997);  }, 1800);
  timer[3] = setTimeout(function(){ showMarkers(1998);  }, 2200);
  timer[4] = setTimeout(function(){ showMarkers(1999);  }, 2600);
  timer[5] = setTimeout(function(){ showMarkers(2000);  }, 3200);
  timer[6] = setTimeout(function(){ showMarkers(2001);  }, 3800);
  timer[7] = setTimeout(function(){ showMarkers(2002);  }, 4400);
  timer[8] = setTimeout(function(){ showMarkers(2003);  }, 5000);
  timer[9] = setTimeout(function(){ showMarkers(2004);  }, 5600);
  timer[10] = setTimeout(function(){ showMarkers(2005);  }, 7200);
  timer[11] = setTimeout(function(){ showMarkers(2006);  }, 7800);
  timer[12] = setTimeout(function(){ showMarkers(2007);  }, 8200);
  timer[13] = setTimeout(function(){ showMarkers(2008);  }, 8600);
  timer[14] = setTimeout(function(){ showMarkers(2009);  }, 9000);
  timer[15] = setTimeout(function(){ showMarkers(2010);  }, 9400);
  timer[16] = setTimeout(function(){ showMarkers(2011);  }, 9800);
  timer[17] = setTimeout(function(){ showMarkers(2012);  }, 10200);
  timer[18] = setTimeout(function(){ showMarkers(2013);  }, 10600);
  timer[19] = setTimeout(function(){ showMarkers(2014);  }, 11000);
  timer[20] = setTimeout(function(){ showMarkers(2015);  }, 11400);
  timer[21] = setTimeout(function(){ showMarkers(2016);  }, 11800);
  timer[22] = setTimeout(function(){ showMarkers(2016);  }, 12200);
});


});
});
},{}]},{},[1])