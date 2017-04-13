(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/duluth.json", function(error, dataLoadD) {
d3.json("./data/superior.json", function(error, dataLoadS) {
d3.json("./data/lake_pepin.json", function(error, dataLoadP) {
d3.json('./data/duluth.geojson', function(error, dotsD) {
d3.json('./data/pepin.geojson', function(error, dotsP) {
d3.json('./data/superior.geojson', function(error, dotsS) {

//CHOOSE WHICH MAP
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results[1] || 0;
}

if ($.urlParam('location') != 0 ) { 
  var location = $.urlParam('location');
  if (location == 'duluth') { var data = dataLoadD.duluth; var dots = dotsD; var center = [-92.098194, 46.786939]; } 
  else if (location == 'superior') { var data = dataLoadS.superior; var dots = dotsS; var center = [-90.814984, 46.811075]; } 
  else if (location == 'pepin') { var data = dataLoadP.lake_pepin; var dots = dotsP; var center = [-92.3013, 44.4982]; } 

} else {
  var data = dataLoadD.duluth;
  var dots = dotsD;
  var center = [-92.098194, 46.786939];
}

$("li").hide();

function spillSites(){
d3.select("#table").selectAll(".card")
  .data(data).enter().append("div")
  .attr("class",function(d) { return "card " + d.cheap + " " + d.family + " " + d.patio + " " + d.brunch + " " + d.late + " " + d.sweets + " " + d.beer + " " + d.cocktails; })
  .attr("longitude",function(d) { return d.longitude; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("placeName",function(d) { return d.name; })
  .attr("pitch",function(d) { return d.pitch; })
  .attr("bearing",function(d) { return d.bearing; })
  .on("mousedown", function(d, i){ 

    $("#infobox #name, .pname").html(d.name);
    $("#infobox #address, .paddress").html(d.address + ", " + d.city + ", " + d.state);
    $("#infobox #phone, .pphone").html(d.phone);
    $("#infobox #website, .pwebsite").html("<a href='" + d.website + "' target='new_'>Website</a>");
    $("#infobox #area, .parea").html(d.where);
    $("#infobox #hours, .phours").html(d.hours);
    $("li").hide();
    if (d.cheap != "#") { $("#infobox #cheap, .pcheap").html("Cheap"); $("#infobox #cheap, .pcheap").show(); } else { $("#infobox #cheap, .pcheap").html(""); }
    if (d.family != "#") { $("#infobox #family, .pfamily").html("Family Friendly"); $("#infobox #family, .pfamily").show(); } else { $("#infobox #family, .pfamily").html(""); }
    if (d.patio != "#") { $("#infobox #patio, .ppatio").html("Patio"); $("#infobox #patio, .ppatio").show(); } else { $("#infobox #patio, .ppatio").html(""); }
    if (d.brunch != "#") { $("#infobox #brunch, .pbrunch").html("Weekend Brunch"); $("#infobox #brunch, .pbrunch").show(); } else { $("#infobox #brunch, .pbrunch").html(""); }
    if (d.late != "#") { $("#infobox #late, .plate").html("Late Night"); $("#infobox #late, .plate").show(); } else { $("#infobox #late, .plate").html(""); }
    if (d.sweets != "#") { $("#infobox #sweets, .psweets").html("Sweets"); $("#infobox #sweets, .psweets").show(); } else { $("#infobox #sweets, .psweets").html(""); }
    if (d.beer != "#") { $("#infobox #beer, .pbeer").html("Beer"); $("#infobox #beer, .pbeer").show(); } else { $("#infobox #beer, .pbeer").html(""); }
    if (d.cocktails != "#") { $("#infobox #cocktails, .pcocktails").html("Cocktails"); $("#infobox #cocktails, .pcocktails").show() } else { $("#infobox #cocktails, .pcocktails").html(""); }
    $("#infobox #notes").html(d.notes);

  })
  .html(function(d){ 
    return d.name;
  });

     $('#filter_box').keyup(function(i){
        $('.card').hide();
        var txt = $('#filter_box').val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

    $(".card").click(function() { 
      var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      var pitch = $(this).attr("pitch") / random;
      var bearing = $(this).attr("bearing") / random;
      map.flyTo({ center: [$(this).attr("longitude"), $(this).attr("latitude")], zoom: 14, pitch: pitch, bearing: bearing });
      $(".card").removeClass("selected");
      $(this).addClass("selected"); 
    });


    $(".step").click(function() { 
      $(".card").hide();
      $("." + $(this).attr("data")).show(); 
      map.flyTo({ center: center, zoom: 10, pitch: 0, bearing: 0 });
      $(".stat").html("");
      $(".card").removeClass("selected");
    });
}

spillSites();

// var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
// var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
// var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: center,
    zoom: 8,
    minZoom: 6
    // maxBounds: llb
});

map.scrollZoom.disable();

map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address");

//CENSUS TRACTS
//   var shapeObj2 = new mapboxgl.GeoJSONSource({
//    data: dots
// });

//   map.addSource('dots', shapeObj2);

    map.addSource("dots", {
        type: "geojson",
        data: dots
        // cluster: true,
        // clusterMaxZoom: 14,
        // clusterRadius: 50
    });

    map.addLayer({
                "id": "dots-layer-cheap",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "cheap",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-family",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "family",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-sweets",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "sweets",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-patio",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "patio",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-late",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "late",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });


    map.addLayer({
                "id": "dots-layer-brunch",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "brunch",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-beer",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "beer",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-cocktails",
                "type": "circle",
                "source": "dots",
                "filter": [
                "!=",
                "cocktails",
                "#"
                ],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

    map.addLayer({
                "id": "dots-layer-all",
                "type": "circle",
                "source": "dots",
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-cheap','dots-layer-family','dots-layer-sweets','dots-layer-patio','dots-layer-late','dots-layer-brunch','dots-layer-beer','dots-layer-cocktails','dots-layer-all'] });
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

$(".card").click(function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-cheap','dots-layer-family','dots-layer-sweets','dots-layer-patio','dots-layer-late','dots-layer-brunch','dots-layer-beer','dots-layer-cocktails','dots-layer-all'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.

    var placeName = ""; //feature.properties.name
  
   // for (i=0; i < data.length; i++){
   //  console.log(data[i].latitude)
   //  if (data[i].latitude == $(this).attr("latitude") && data[i].longitude == $(this).attr("longitude")){
   //    placeName = data[i].name;
   //  }
   // }

    popup.setLngLat([$(this).attr("longitude"), $(this).attr("latitude")])
        .setHTML($(this).attr("placeName"))
        .addTo(map);
});

var index = 0;

$( document ).ready(function() {
    if ($("#wrapper").width() < 920) { map.flyTo({ center: center, zoom: 8, pitch: 0, bearing: 0 }); }
    else { map.flyTo({ center: center, zoom: 10 }); }
    $(window).resize(function() {
    if ($("#wrapper").width() < 920) { map.flyTo({ center: center, zoom: 8, pitch: 0, bearing: 0 }); }
    else { map.flyTo({ center: center, zoom: 9 }); }
    });

    // addBoxes();
});

$(".zoom").click(function() {
    map.flyTo({ center: center, zoom: 8, pitch: 0, bearing: 0 });
    $(".stat").html("");
    $(".card").removeClass("selected");
    popup.remove();
    $("li").hide();
});

map.setLayoutProperty('dots-layer-cheap', 'visibility', 'none');
map.setLayoutProperty('dots-layer-family', 'visibility', 'none');
map.setLayoutProperty('dots-layer-sweets', 'visibility', 'none');
map.setLayoutProperty('dots-layer-patio', 'visibility', 'none');
map.setLayoutProperty('dots-layer-late', 'visibility', 'none');
map.setLayoutProperty('dots-layer-brunch', 'visibility', 'none');
map.setLayoutProperty('dots-layer-beer', 'visibility', 'none');
map.setLayoutProperty('dots-layer-cocktails', 'visibility', 'none');
map.setLayoutProperty('dots-layer-all', 'visibility', 'visible');

$(".step").click(function() { 
if ($(this).attr("data") != "card"){
map.setLayoutProperty('dots-layer-cheap', 'visibility', 'none');
map.setLayoutProperty('dots-layer-family', 'visibility', 'none');
map.setLayoutProperty('dots-layer-sweets', 'visibility', 'none');
map.setLayoutProperty('dots-layer-patio', 'visibility', 'none');
map.setLayoutProperty('dots-layer-late', 'visibility', 'none');
map.setLayoutProperty('dots-layer-brunch', 'visibility', 'none');
map.setLayoutProperty('dots-layer-beer', 'visibility', 'none');
map.setLayoutProperty('dots-layer-cocktails', 'visibility', 'none');
map.setLayoutProperty('dots-layer-all', 'visibility', 'none');

map.setLayoutProperty('dots-layer-' + $(this).attr("data"), 'visibility', 'visible');
}
else {
map.setLayoutProperty('dots-layer-cheap', 'visibility', 'none');
map.setLayoutProperty('dots-layer-family', 'visibility', 'none');
map.setLayoutProperty('dots-layer-sweets', 'visibility', 'none');
map.setLayoutProperty('dots-layer-patio', 'visibility', 'none');
map.setLayoutProperty('dots-layer-late', 'visibility', 'none');
map.setLayoutProperty('dots-layer-brunch', 'visibility', 'none');
map.setLayoutProperty('dots-layer-beer', 'visibility', 'none');
map.setLayoutProperty('dots-layer-cocktails', 'visibility', 'none');
map.setLayoutProperty('dots-layer-all', 'visibility', 'visible');
}
});

});


});
});
});
});
});
});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });
},{}]},{},[1])