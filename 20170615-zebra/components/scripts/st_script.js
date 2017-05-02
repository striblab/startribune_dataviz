d3.json('./data/invasion.geojson', function(error, invasion) {
d3.json('./shapefiles/mn_infested_waters.json', function(error, waters) {

var bounds = [
    [-168.046875, 23.150462],// Southwest coordinates
    [-51.328125, 52.849230] // Northeast coordinates
     
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    center: [-93.28469849, 45.01832962], 
    zoom: 4,
    minZoom: 3,
    maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

  map.addSource('waters', {
   type: 'geojson',
   data: waters
 });

 //  map.addSource('observations', {
 //   type: 'geojson',
 //   data: observations
 // });

  map.addSource('invasion', {
   type: 'geojson',
   data: invasion
 });

index = 0;

function playScript(step){

  $(".trackDot").removeClass("selected");
  $("#d" + step).addClass("selected");

  index = step;

  if (step == 0){
    unloadMarkers(1987, 2017);
    mapFlight(-82.441406,41.827619,8,0,0);
    showMarkers(1986);
  }
  if (step == 1){
    unloadMarkers(1991, 2017);
    mapFlight(-82.441406,41.827619,7,0,0);
    showMarkers(1987);

    mapFlight(-82.441406,41.827619,6,0,0);
    setTimeout(function(){ showMarkers(1988); }, 1000);

    mapFlight(-82.441406,41.827619,5,0,0);
    setTimeout(function(){ showMarkers(1989); }, 1500);
    setTimeout(function(){ showMarkers(1990); }, 2000);
  }
  if (step == 2){
    mapFlight(-91.790771, 41.481576,6,0,0); 
    unloadMarkers(1992, 2017);
    showMarkers(1991)
  }
  if (step == 3){
    unloadMarkers(1994, 2017);
    plopLayer('waters','#333333');
    showMarkers(1992)
    setTimeout(function(){ showMarkers(1993); }, 1500);
    mapFlight(-90.000000,47.212106,6,0,0); 
    
  }
  if (step == 4){
    unloadMarkers(1994, 2017);
    mapFlight(-92.312303,44.536276,8,0,0); 

  }
  if (step == 5){
    unloadMarkers(1996, 2017);
    mapFlight(-94.203347,46.628522,8,0,0); 
    showMarkers(1994);
    setTimeout(function(){ showMarkers(1995); }, 1500);
  }
  if (step == 6){
      mapFlight(-93.660534, 46.252983,6,0,0);
    showMarkers(1996);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 7){
     mapFlight(-93.660534, 46.252983,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 8){
    mapFlight(-90.432176, 48.098151,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 9){
    mapFlight(-90.432176, 48.098151,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 10){
    mapFlight(-94.420746, 47.148660,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 11){
    mapFlight(-94.331379, 46.458510,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 12){
    mapFlight(-94.420746, 47.148660,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 13){
    mapFlight(-93.634447, 44.907342,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 14){
    mapFlight(-92.408665, 45.502494,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 15){
    mapFlight(-92.338842, 47.848619,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 16){
    mapFlight(-94.941142, 47.186053,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 17){
    mapFlight(-94.215540, 47.410950,9,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 18){
    mapFlight(-113.422852, 48.128518,4,0,0);
    setTimeout(function(){ showMarkers(1996); }, 500);
    setTimeout(function(){ showMarkers(1997);  }, 1000);
    setTimeout(function(){ showMarkers(1998);  }, 1200);
    setTimeout(function(){ showMarkers(1999);  }, 1400);
    setTimeout(function(){ showMarkers(2000);  }, 1600);
    setTimeout(function(){ showMarkers(2001);  }, 1800);
    setTimeout(function(){ showMarkers(2002);  }, 2000);
    setTimeout(function(){ showMarkers(2003);  }, 2200);
    setTimeout(function(){ showMarkers(2004);  }, 2400);
    setTimeout(function(){ showMarkers(2005);  }, 2600);
    setTimeout(function(){ showMarkers(2006);  }, 2800);
    setTimeout(function(){ showMarkers(2007);  }, 3000);
    setTimeout(function(){ showMarkers(2008);  }, 3200);
    setTimeout(function(){ showMarkers(2009);  }, 3400);
    setTimeout(function(){ showMarkers(2010);  }, 3600);
    setTimeout(function(){ showMarkers(2011);  }, 3800);
    setTimeout(function(){ showMarkers(2012);  }, 4000);
    setTimeout(function(){ showMarkers(2013);  }, 4200);
    setTimeout(function(){ showMarkers(2014);  }, 4400);
    setTimeout(function(){ showMarkers(2015);  }, 4600);
    setTimeout(function(){ showMarkers(2016);  }, 4800);
  }
  if (step == 19){
    mapFlight(-99.081678, 40.699330,3,0,0);
    unloadMarkers(1986, 2017);

    var interval = 800;

    for (var i=1986; i < 2017; i++){
        setTimeout(function(){ showMarkers(i); }, interval);
        interval += 200;
    }
  }

}

function loadChatter(headline,text){
  $("#headline").html(headline);
  $("#story").html(text);
}

function plopLayer(data,color){
   map.addLayer({
       'id': data + '-layer',
       'interactive': true,
       'source': data,
       'layout': {},
       'type': 'fill',
       'paint': {
           'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': 'rgba("194,42,34", 1)',
           'fill-outline-color': 'rgba("194,42,34", 1)' 
     },
                  "filter": [
                  "==",
                  "commonname",
                  "zebra mussel"]
   }, 'place-neighbourhood');
}

function hideLayer(data){
    map.setLayoutProperty(data + '-layer', 'visibility', 'none');
}

function showLayer(data){
    map.setLayoutProperty(data + '-layer', 'visibility', 'visible');
}

function plopMarker(year,rgb,index){

     cap = year;

     var framesPerSecond = 15; 
     var initialOpacity = 1
     var opacity = initialOpacity;
     var initialRadius = 5;
     var radius = initialRadius;
     var maxRadius = 18;

      map.addLayer({
                  "id": "invasion-layer-" + year,
                  "type": "circle",
                  "source": "invasion",
                  "paint": {
    			           "circle-radius": initialRadius,
    			           "circle-radius-transition": {duration: 0},
    			           "circle-opacity-transition": {duration: 0},
    			           "circle-color": 'rgba(' + rgb + ', 0.45)'
                  },
                  "filter": [
                  "==",
                  "collectionYear",
                  year]
                  // "filter":[ 
                  // "==",
                  // "Name",
                  // species]
      });

            map.addLayer({
                  "id": "invasion-layer1-" + year,
                  "type": "circle",
                  "source": "invasion",
                  "paint": {
                      "circle-radius": initialRadius,
                      "circle-color": 'rgba(' + rgb + ', 0.8)'
                  },
                  "filter": [
                  "==",
                  "collectionYear",
                  year]
                  // "filter":[ 
                  // "==",
                  // "Name",
                  // species]
      });

function animateMarker(timestamp) {
            setTimeout(function(){
            requestAnimationFrame(animateMarker);

            radius += (maxRadius - radius) / framesPerSecond;
            opacity -= ( .9 / framesPerSecond );

            if (opacity >= 0) {
            map.setPaintProperty('invasion-layer-' + year, 'circle-radius', radius);
            map.setPaintProperty('invasion-layer-' + year, 'circle-opacity', opacity);
            }

            if (opacity <= 0) {
                radius = initialRadius;
                opacity = initialOpacity;
            } 

        }, 2000 / framesPerSecond);
    }

      animateMarker(0);
        
    map.setLayoutProperty('invasion-layer1-' + year, 'visibility', 'none');
    map.setLayoutProperty('invasion-layer-' + year, 'visibility', 'none');
}

function hideMarkers(index){
    map.setLayoutProperty('invasion-layer1-' + index, 'visibility', 'none');
    map.setLayoutProperty('invasion-layer-' + index, 'visibility', 'none');
    // map.removeLayer('invasion-layer1-' + index);
    // map.removeLayer('invasion-layer-' + index);

}

function showMarkers(index){
    map.setLayoutProperty('invasion-layer1-' + index, 'visibility', 'visible');
    map.setLayoutProperty('invasion-layer-' + index, 'visibility', 'visible');
}

function loadMarkers(){
  for (var i=1986; i < 2017; i++){
    // plopMarker(i,'194,42,34',i);
    plopMarker(i,'0,191,255',i);
  }
}

loadMarkers();

function unloadMarkers(start, cap){
  for (var i=start; i < cap; i++){
    map.setLayoutProperty('invasion-layer1-' + i, 'visibility', 'none');
    map.setLayoutProperty('invasion-layer-' + i, 'visibility', 'none');
  }
}

function plopPopup(long,lat,text){

var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([long,lat])
    .setHTML(text)
    .addTo(map);
}

function mapFlight(long,lat,zoom,pitch,bearing){
  map.flyTo({ center: [long, lat], zoom:zoom, pitch:pitch, bearing:bearing });
}

// mapFlight(-96, 37.8,15,-100,20);

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'],
    sectionsColor: ['#999999', '#999999', '#999999','#999999', '#999999', '#999999','#999999', '#999999', '#999999','#999999', '#999999', '#999999','#999999', '#999999', '#999999','#999999', '#999999', '#999999', '#999999', '#999999'],
    navigation: true,
    navigationPosition: 'right',

    afterLoad: function(anchorLink, index){
    var loadedSection = $(this);

    $(".chatter, .chartTitle").hide();

    $(this).find(".chatter, .chartTitle").show();

      Typed.new(".chatter", {
        strings: [$(this).text()],
        typeSpeed: 0
      });

    playScript(index-1)
    }
  });
});

   $("#fullpage").show();
});

var toggleableLayerIds = [ 'contours', 'museums' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };
}


});
});