(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// d3.json("http://googlescript.startribune.com/?macro=AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu&id=19bO4c54kCdh0I0sk2NBxtsddueWheTsV_YqtbcVaz1w&sheet=groups", function(error, dataLoad) {
d3.json("./data/groups.json", function(error, dataLoad) {
d3.json("./shapefiles/metro_cities.json", function(error, cities) {

var data = dataLoad.groups;

var cityList = [];

d3.select("#groupsList").selectAll(".row")
  .data(data).enter().append("div")
  .attr("class",function(d) { return "row"; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 
    cityList[i] = d.city;
    return "<div class='col name'>" + d.name + "</div><div class='col city'>" + d.city + "</div><div class='col members'>" + d3.format(",")(d.members) + "</div><div class='col privacy'>" + d.privacy + "</div><div class='col created'>" + d.created + "</div>";
  });

$( document ).ready(function() {
     $('#filter_box').keyup(function(i){
        $('.row').hide();
        var txt = $('#filter_box').val();
        $('.row').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.row:visible').length;
    });
    $(".hSort").click(function() {
      $(".hSort").removeClass("selected");
      $(this).addClass("selected");
      if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
      else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
      tableSort("#groupsList",$(this).attr("data"),sorted);
    });
});

function tableSort(container,column,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (column == "group") { 
        if (sorted == "descend") { return d3.descending(a.name, b.name); }
        if (sorted == "ascend") { return d3.ascending(a.name, b.name); }
     }
          if (column == "city") { 
        if (sorted == "descend") { return d3.descending(a.city, b.city); }
        if (sorted == "ascend") { return d3.ascending(a.city, b.city); }
     }
           if (column == "members") { 
        if (sorted == "descend") { return d3.descending(a.members, b.members); }
        if (sorted == "ascend") { return d3.ascending(a.members, b.members); }
     }
           if (column == "privacy") { 
        if (sorted == "descend") { return d3.ascending(a.privacy, b.privacy); }
        if (sorted == "ascend") { return d3.descending(a.privacy, b.privacy); }
     }
           if (column == "created") { 
        if (sorted == "descend") { return d3.ascending(a.created, b.created); }
        if (sorted == "ascend") { return d3.descending(a.created, b.created); }
     }
    })
    .transition().duration(500);
}

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.2231, 44.9405],
    zoom: 7,
    // minZoom: 7.5
});

map.scrollZoom.disable();

// map.addControl(new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken
// }));

// map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {

  map.addSource('cities', {
    type: 'geojson',
    data: cities
  });

  map.addLayer({
        'id': 'cities-layer',
        'interactive': true,
        'source': 'cities',
        'layout': {},
        'type': 'fill',
             'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': "#888",
            'fill-outline-color': 'rgba(255, 255, 255, 1)'
      }
    });

cityList.forEach(function(layer, i) {
   map.addLayer({
        'id': 'cities-layer' + i,
        'interactive': true,
        'type': 'fill',
        'source': 'cities',
        'layout': {},
        "filter": [
        "==",
        "CTU_NAME",
        cityList[i]
        ],
        'paint': {
            // 'fill-antialias' : true,
            'fill-opacity': 0.8,
            'fill-color': "#0000ff",
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });
   });

    $(".row").click(function() { 
      map.flyTo({ center: [Number($(this).attr("longitude")), Number($(this).attr("latitude"))], zoom: 10 });
      $(".row").removeClass("rowSelect");
      $(this).addClass("rowSelect");
    });
    $(".zoom").click(function() { 
      $(".row").removeClass("rowSelect");
      map.flyTo({ center: [-93.2231, 44.9405], zoom: 7 }); 
    });

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['cities-layer'] });
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
        .setHTML(feature.properties.CTU_NAME)
        .addTo(map);
});

  });
});
});
},{}]},{},[1])