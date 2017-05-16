d3.json('./data/invasion.geojson', function(error, invasion) {
d3.json('./data/invasion.json', function(error, invasionList) {
d3.json('./shapefiles/waters.json', function(error, waters) {
d3.json('./shapefiles/extent.json', function(error, extent) {

var dataAll = invasionList.waters;

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
    unloadMarkers(1986, 2016);

    var id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }

    showLayer('extent');
    plopPopup(50.668945,41.934977,"<h3>The Caspian Sea</h3><div>Zebra mussels come from here!</div>");
    mapFlight(-53.964844, 35.380093,2,0,0);
  }
  if (step == 1){
    hideLayer("extent");
    hideLayer("waters");
    unloadMarkers(1991, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    plopPopup(-82.691543,42.435650,"<h3>Lake Saint Claire</h3><div>Help! Zebra mussles first appear in America!</div>");

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
    unloadMarkers(1992, 2016);

    showMarkers(1991)
    mapFlight(-95.954590,46.489884,6,0,0); 
  }
  if (step == 3){
    hideLayer("extent");
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
    // unloadMarkers(1994, 2016);

    // var id = window.setTimeout(function() {}, 0);
    // while (id--) {
    //     window.clearTimeout(id);
    // }

    showLayer('waters');
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
           'fill-color': '#b24e49',
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

plopLayer('extent','#333333');
plopLayer('waters','#333333');

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

d3.select("#listing").selectAll(".row")
  .data(dataAll.filter(function(d){ return d.State == "MN"; })).enter().append("div")
  .attr("class",function(d) { return "row"; })
  .attr("latitude",function(d) { return d.Lat; })
  .attr("longitude",function(d) { return d.Lon; })
  .on("mousedown",function(d) {
    map.flyTo({ center: [d.Lon, d.Lat], zoom:9 });
  })
  .html(function(d,i){ 
    return "<div class='col name'>" + d.Locality + "</div><div class='col county'>" + d.County + "</div>";
  });

});
});
});
});