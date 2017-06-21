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
                      "circle-color": 'rgba(' + rgb + ', 0.8)'
                  },
                  "filter": [
                  "==",
                  "firstyr",
                  year]
      });

function animateMarker(timestamp) {
            setTimeout(function(){
            requestAnimationFrame(animateMarker);

            radius += (maxRadius - radius) / framesPerSecond;
            opacity -= ( .9 / framesPerSecond );

            if (opacity >= 0) {
            map.setPaintProperty('charter-layer-' + year, 'circle-radius', radius);
            map.setPaintProperty('charter-layer-' + year, 'circle-opacity', opacity);
            }

            if (opacity <= 0) {
                radius = initialRadius;
                opacity = initialOpacity;
            } 

        }, 2000 / framesPerSecond);
    }

      // animateMarker(0);
        
    map.setLayoutProperty('charter-layer1-' + year, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + year, 'visibility', 'none');
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
    map.setLayoutProperty('invasion-layer1-' + i, 'visibility', 'none');
    map.setLayoutProperty('invasion-layer-' + i, 'visibility', 'none');
  }
}

loadMarkers();
unloadMarkers(1995, 2017);

setTimeout(function(){ showMarkers(1995); }, 1000);
setTimeout(function(){ showMarkers(1996); }, 1400);
setTimeout(function(){ showMarkers(1997);  }, 1800);
setTimeout(function(){ showMarkers(1998);  }, 2200);
setTimeout(function(){ showMarkers(1999);  }, 2600);
setTimeout(function(){ showMarkers(2000);  }, 3200);
setTimeout(function(){ showMarkers(2001);  }, 3800);
setTimeout(function(){ showMarkers(2002);  }, 4400);
setTimeout(function(){ showMarkers(2003);  }, 5000);
setTimeout(function(){ showMarkers(2004);  }, 5600);
setTimeout(function(){ showMarkers(2005);  }, 7200);
setTimeout(function(){ showMarkers(2006);  }, 7800);
setTimeout(function(){ showMarkers(2007);  }, 8200);
setTimeout(function(){ showMarkers(2008);  }, 8600);
setTimeout(function(){ showMarkers(2009);  }, 9000);
setTimeout(function(){ showMarkers(2010);  }, 9400);
setTimeout(function(){ showMarkers(2011);  }, 9800);
setTimeout(function(){ showMarkers(2012);  }, 10200);
setTimeout(function(){ showMarkers(2013);  }, 10600);
setTimeout(function(){ showMarkers(2014);  }, 11000);
setTimeout(function(){ showMarkers(2015);  }, 11400);
setTimeout(function(){ showMarkers(2016);  }, 11800);
setTimeout(function(){ showMarkers(2016);  }, 12200);

});
});
},{}]},{},[1])