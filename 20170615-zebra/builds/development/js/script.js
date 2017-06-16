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

d3.json('./data/invasion.geojson', function(error, invasion) {
d3.json('./data/invasion.json', function(error, invasionList) {
d3.json('./shapefiles/waters.json', function(error, waters) {
d3.json('./shapefiles/extent.json', function(error, extent) {
d3.json('./shapefiles/species.json', function(error, species) {
d3.json('./data/lookup.json', function(error, lookup) {

var dataAll = invasionList.waters;
var dataLookup = lookup.targets;

var bounds = [
    [-168.046875, 23.150462],// Southwest coordinates
    [-51.328125, 52.849230] // Northeast coordinates
     
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-53.964844, 35.380093], 
    zoom: 2,
    minZoom: 2,
    // maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

  map.addSource('waters', {
   type: 'geojson',
   data: waters
 });

  map.addSource('species', {
   type: 'geojson',
   data: species
 });

  map.addSource('extent', {
   type: 'geojson',
   data: extent
 });

  map.addSource('invasion', {
   type: 'geojson',
   data: invasion
 });

index = 0;

var yearSpan = ["A long time ago","1986-1992","1993-1998","1999-2016","1999-2016","1999-2016","1999-2016","1999-2016","1986-2016","1986-2016"];

loadMarkers();

function playScript(step){

  $(".trackDot").removeClass("selected");
  $("#d" + step).addClass("selected");

  $(".year").html(yearSpan[step]);

  index = step;

  if (step == 0){
    hideLayer("waters");
    hideLayer("species");
    unloadMarkers(1986, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('extent');
    // plopPopup(50.668945,41.934977,"<h3>The Caspian Sea</h3><div>Zebra mussels come from here!</div>");
    mapFlight(-53.964844, 35.380093,2,0,0);
  }
  if (step == 1){
    hideLayer("extent");
    hideLayer("waters");
    hideLayer("species");
    unloadMarkers(1991, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    // plopPopup(-82.691543,42.435650,"<h3>Lake Saint Claire</h3><div>Help! Zebra mussles first appear in America!</div>");

    mapFlight(-82.441406,41.827619,7,0,0);
    showMarkers(1986);
    showMarkers(1987);

    mapFlight(-82.441406,41.827619,6,0,0);
    setTimeout(function(){ showMarkers(1988); }, 1000);

    mapFlight(-82.441406,41.827619,5,0,0);
    setTimeout(function(){ showMarkers(1989); }, 1500);
    setTimeout(function(){ showMarkers(1990); }, 2000);
  }
  if (step == 2){
    hideLayer("extent");
    hideLayer("waters");
    hideLayer("species");
    unloadMarkers(1992, 2016);

    showMarkers(1991)
    mapFlight(-95.954590,46.489884,6,0,0); 
  }
  if (step == 3){
    hideLayer("extent");
    hideLayer("species");
    unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    mapFlight(-95.954590,46.489884,6,0,0); 
    showMarkers(1992)
    setTimeout(function(){ showMarkers(1992); }, 200);
    setTimeout(function(){ showMarkers(1993); }, 400);
    setTimeout(function(){ showMarkers(1994); }, 800);
    setTimeout(function(){ showMarkers(1995); }, 1000);
    setTimeout(function(){ showMarkers(1996); }, 1000);
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
    setTimeout(function(){ showLayer('waters');  }, 5000);
    
  }
  if (step == 4){
    hideLayer("extent");
    hideLayer("species");
    // unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('waters');
    showMarkers(1992)
    setTimeout(function(){ showMarkers(1992); }, 200);
    setTimeout(function(){ showMarkers(1993); }, 400);
    setTimeout(function(){ showMarkers(1994); }, 800);
    setTimeout(function(){ showMarkers(1995); }, 1000);
    setTimeout(function(){ showMarkers(1996); }, 1000);
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
    mapFlight(-93.660534, 46.252983,9,0,0);
  }
  if (step == 5){ 
    hideLayer("extent");
    hideLayer("species");
    // unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('waters');
    showMarkers(1992)
    setTimeout(function(){ showMarkers(1992); }, 200);
    setTimeout(function(){ showMarkers(1993); }, 400);
    setTimeout(function(){ showMarkers(1994); }, 800);
    setTimeout(function(){ showMarkers(1995); }, 1000);
    setTimeout(function(){ showMarkers(1996); }, 1000);
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
    mapFlight(-93.634447, 44.907342,8,0,0);
  }
  if (step == 6){
    hideLayer("extent");
    hideLayer("species");
    // unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('waters');

    showMarkers(1992)
    setTimeout(function(){ showMarkers(1992); }, 200);
    setTimeout(function(){ showMarkers(1993); }, 400);
    setTimeout(function(){ showMarkers(1994); }, 800);
    setTimeout(function(){ showMarkers(1995); }, 1000);
    setTimeout(function(){ showMarkers(1996); }, 1000);
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
    mapFlight(-94.215540, 47.410950,8,0,0);
  }
  if (step == 7){
    hideLayer("extent");
    hideLayer("waters");
    // unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('species');
    showMarkers(1992);
    setTimeout(function(){ showMarkers(1992); }, 200);
    setTimeout(function(){ showMarkers(1993); }, 400);
    setTimeout(function(){ showMarkers(1994); }, 800);
    setTimeout(function(){ showMarkers(1995); }, 1000);
    setTimeout(function(){ showMarkers(1996); }, 1000);
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
    mapFlight(-94.203347,46.628522,6,0,0); 
  }
  if (step == 8){
    
    unloadMarkers(1986, 2016);

    hideLayer("extent");
    hideLayer('waters');
    hideLayer('species');

    var interval = 800;

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    for (var i=1986; i <= 2016; i++){
        if (i != 2017) { setTimeout(function(){ showMarkers(i); }, interval); }
        interval += 200;
    }

    mapFlight(-104.941406, 40.371659,4,0,0);
  }
  if (step == 9){
    hideLayer("extent");
    showLayer('waters');

    mapFlight(-94.203347,46.628522,6,0,0); 

    var interval = 800;

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    for (var i=1986; i <= 2016; i++){
        if (i != 2017) { setTimeout(function(){ showMarkers(i); }, interval); }
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
           'fill-color': color,
           'fill-outline-color': '#333333' 
     },
                  // "filter": [
                  // "==",
                  // "commonname",
                  // "zebra mussel"]
   }, 'place-neighbourhood');
}

function hideLayer(data){
    map.setLayoutProperty(data + '-layer', 'visibility', 'none');
}

function showLayer(data){
    map.setLayoutProperty(data + '-layer', 'visibility', 'visible');
}

plopLayer('extent','#b24e49');
plopLayer('waters','#b24e49');
plopLayer('species','#333333');

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
  for (var i=1986; i <= 2016; i++){
    plopMarker(i,'178,78,73',i);
    // plopMarker(i,'0,191,255',i);
  }
}

plopMarker(i,'178,78,73',2016);

function unloadMarkers(start, cap){
  for (var i=start; i <= cap; i++){
    map.setLayoutProperty('invasion-layer1-' + i, 'visibility', 'none');
    map.setLayoutProperty('invasion-layer-' + i, 'visibility', 'none');
  }
}

var popup;

function plopPopup(long,lat,text){

    popup = new mapboxgl.Popup({closeOnClick: false})
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

      // Typed.new(".chatter", {
      //   strings: [$(this).text()],
      //   typeSpeed: 0
      // });

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

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map2 = new mapboxgl.Map({
    container: 'mapLookup', // container id
    // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-96.954590,46.489884], 
    zoom: 5.4,
    minZoom: 4,
    // maxBounds: bounds
});

map2.addControl(new mapboxgl.NavigationControl());
map2.scrollZoom.disable();

map2.on('load', function() {

  map2.addSource('waters', {
   type: 'geojson',
   data: waters
 });

  map2.addSource('species', {
   type: 'geojson',
   data: species
 });

  map2.addSource('extent', {
   type: 'geojson',
   data: extent
 });

  map2.addSource('invasion', {
   type: 'geojson',
   data: invasion
 });

var popup = new mapboxgl.Popup({closeOnClick: false});

 $( function() {

  $('#filter_box').on('keyup search', function(e){
    $('.row').hide();
    var txt = $('#filter_box').val();
    console.log(txt)
    $('.row').each(function(){
       if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)){
           $(this).show();
       }
    }); 
    popup.remove();
    zoom();
});

    var availableTags = [
      "Zumbro River",
      "Zumbro Lake",
      "White Bear Lake",
      "West Battle Lake",
      "Watab Lake",
      "Vadnais Lake",
      "Upper Prior Lake",
      "Upper Mississippi River National Wildlife and Fish Refuge",
      "Taylor Lake",
      "Sybill Lake",
      "Sucker Lake",
      "Sturgeon Lake",
      "St. Louis River",
      "St. Croix River",
      "Signalness Lake",
      "Sand Lake",
      "Sallie Lake",
      "Ruth Lake",
      "Rusch Lake",
      "Round Lake",
      "Rose Lake",
      "Rice Lake",
      "Red River",
      "Rebecca",
      "Prairie Lake",
      "Pocket Lake",
      "Pleasant Lake",
      "Pine River",
      "Pike Lake",
      "Pickerel Lake",
      "Pelican Lake",
      "Pelican Brook",
      "Paul Lake",
      "Otter Tail River",
      "Otter Tail Lake",
      "Ossawinnamakee Lake",
      "North Union",
      "North Long Lake",
      "Mississippi River",
      "Minnehaha Creek",
      "Mille Lacs Lake",
      "Maple Lake",
      "Lower Prior Lake",
      "Lower Hay Lake",
      "Lower Cullen Lake",
      "Little Sand Lake",
      "Little McDonald Lake",
      "Leech Lake",
      "Lake Winnibigoshish",
      "Lake Waconia",
      "Lake Virginia",
      "Lake Victoria",
      "Lake Sylvia",
      "Lake Superior",
      "Lake Stony",
      "Lake Stella",
      "Lake Osakis",
      "Lake Minnewaska",
      "Lake Minnewashta",
      "Lake Minnetonka",
      "Lake Miltona",
      "Lake Melissa",
      "Lake Maud",
      "Lake Mary",
      "Lake Lizzie",
      "Lake Le Homme Dieu in Alexandria",
      "Lake John",
      "Lake Irene",
      "Lake Ida",
      "Lake Hubert",
      "Lake Hiawatha",
      "Lake Geneva",
      "Lake Franklin",
      "Lake Florida",
      "Lake Eunice",
      "Lake Darling",
      "Lake Cowdrey",
      "Lake Carlos",
      "Lake Brophy",
      "Lake Andrew",
      "Lake Adley",
      "Lac Qui Parle",
      "Kimble Lake",
      "Kerbs Lake",
      "Gull Lake",
      "Green Lake",
      "Gilbert Pit Lake",
      "Gilbert Lake",
      "Forest Lake",
      "Fish Trap Lake",
      "East Spirit Lake",
      "Detroit Lake",
      "Cuyuna Country State Recreation Area",
      "Cross Lake",
      "Crooked Lake",
      "Clearwater Lake",
      "Christmas Lake",
      "Charley Lake",
      "Cass Lake",
      "Bryant Lake",
      "Big Cormorant Lake",
      "Big Birch Lake"
    ];

   $( "#filter_box" ).autocomplete({
     minLength: 2,
     source: availableTags,
     select: function(e, ui) {
       e.preventDefault();
       $(this).val(ui.item.label);
       zoomLake(ui.item.value);
     }
   });

  });

function zoomLake(lake){
  for (var i=0; i < dataLookup.length; i++){
    if (lake == dataLookup[i].target){
      map2.flyTo({ center: [dataLookup[i].longitude, dataLookup[i].latitude], zoom:12 });
      plopPopup(dataLookup[i].longitude,dataLookup[i].latitude,lake)
      return;
    }
  }
}

function plopPopup(long,lat,text){

    popup.setLngLat([long,lat])
    .setHTML(text)
    .addTo(map2);
}

function plopLayer(data,color){
   map2.addLayer({
       'id': data + '-layer',
       'interactive': true,
       'source': data,
       'layout': {},
       'type': 'fill',
       'paint': {
           'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': color,
           'fill-outline-color': '#333333' 
     },
                  // "filter": [
                  // "==",
                  // "commonname",
                  // "zebra mussel"]
   }, 'place-neighbourhood');
}

plopLayer('waters','#b24e49');

function plopMarker(year,rgb,index){

     cap = year;

     var framesPerSecond = 15; 
     var initialOpacity = 1
     var opacity = initialOpacity;
     var initialRadius = 5;
     var radius = initialRadius;
     var maxRadius = 18;

      map2.addLayer({
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

            map2.addLayer({
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
            map2.setPaintProperty('invasion-layer-' + year, 'circle-radius', radius);
            map2.setPaintProperty('invasion-layer-' + year, 'circle-opacity', opacity);
            }

            if (opacity <= 0) {
                radius = initialRadius;
                opacity = initialOpacity;
            } 

        }, 2000 / framesPerSecond);
    }

      animateMarker(0);
        
    map2.setLayoutProperty('invasion-layer1-' + year, 'visibility', 'none');
    map2.setLayoutProperty('invasion-layer-' + year, 'visibility', 'none');
}

function loadMarkers(){
  for (var i=1986; i <= 2016; i++){
    plopMarker(i,'178,78,73',i);
    // plopMarker(i,'0,191,255',i);
  }
}

loadMarkers();


function zoom(){
    if ($(window).width() <= 500) { map2.flyTo({ center: [-94,46], zoom: 4.5 }); }
    else { map2.flyTo({ center: [-96.954590,46.489884], zoom: 5.4 }); }
    $(window).resize(function() {
    if ($(window).width() <= 500) { map2.flyTo({ center: [-94,46], zoom: 4.5 }); }
    else { map2.flyTo({ center: [-96.954590,46.489884], zoom: 5.4 }); }
    });
    popup.remove();
}

zoom();

});

});
});
});
});
});
});
},{}]},{},[1])