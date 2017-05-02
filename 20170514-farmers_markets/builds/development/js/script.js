(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/markets.json", function(error, dataLoadD) {
d3.json('./data/markets.geojson', function(error, dotsD) {

//CHOOSE WHICH MAP
// $.urlParam = function(name){
//   var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
//   return results[1] || 0;
// }

// if ($.urlParam('location') != 0 ) { 
//   var location = $.urlParam('location');
//   if (location == 'duluth') { var data = dataLoadD.duluth; var dots = dotsD; var center = [-92.098194, 46.786939]; } 
// } else {
//   var data = dataLoadD.duluth;
//   var dots = dotsD;
//   var center = [-92.098194, 46.786939];
// }

var data = dataLoadD.markets; 
var dots = dotsD; 
var center = [-93.265011, 44.977753];

function spillSites(){
d3.select("#table").selectAll(".card")
  .data(data.sort(function(a,b){ return d3.ascending(a.name,b.name); })).enter().append("div")
  .attr("longitude",function(d) { return d.longitude; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("placeName",function(d) { return d.name; })
  .attr("pitch",function(d) { return d.pitch; })
  .attr("bearing",function(d) { return d.bearing; })
  .attr("class",function(d) { 
    var hourString = "";
    if (d.monday != null && d.monday != "") { hourString += "monday "; }
    if (d.tuesday != null && d.tuesday != "") { hourString += "tuesday "; }
    if (d.wednesday != null && d.wednesday != "") { hourString += "wednesday "; }
    if (d.thursday != null && d.thursday != "") { hourString += "thursday "; }
    if (d.friday != null && d.friday != "") { hourString += "friday "; }
    if (d.saturday != null && d.saturday != "") { hourString += "saturday "; }
    if (d.sunday != null && d.sunday != "") { hourString += "sunday "; }
    return "card " + hourString; 
  })
  .on("mousedown", function(d, i){ 

    $("#infobox #name, .pname").html(d.name);
    $("#infobox #address, .paddress").html(d.address + ", " + d.city + ", MN " + d.zip);
    $("#infobox #phone, .pphone").html(d.phone);
    $("#infobox #website, .pwebsite").html("<a href='" + d.website + "' target='new_'>Website</a>");
    $("#infobox #area, .parea").html(d.where);
    $("#infobox #monday").html(d.monday);
    $("#infobox #tuesday").html(d.tuesday);
    $("#infobox #wednesday").html(d.wednesday);
    $("#infobox #thursday").html(d.thursday);
    $("#infobox #friday").html(d.friday);
    $("#infobox #saturday").html(d.saturday);
    $("#infobox #sunday").html(d.sunday);
 
    $("#infobox #notes").html(d.notes);

  })
  .html(function(d){ 
    return d.name;
  });


        $('#filter_box').on('keyup search', function(e){
            $('.check').addClass("toggle, selected");
            $('.card').hide();
            var txt = $('#filter_box').val();
            $('.card').each(function(){
               if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)){
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
    style: 'mapbox://styles/mapbox/streets-v10',
    center: center,
    zoom: 4,
    minZoom: 3
    // maxBounds: llb
});

map.scrollZoom.disable();

map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address");

    map.addSource("dots", {
        type: "geojson",
        data: dots
        // cluster: true,
        // clusterMaxZoom: 14,
        // clusterRadius: 50
    });

//M
    map.addLayer({
                "id": "dots-layer-monday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "monday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//T
    map.addLayer({
                "id": "dots-layer-tuesday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "tuesday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//W
    map.addLayer({
                "id": "dots-layer-wednesday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "wednesday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//TH
    map.addLayer({
                "id": "dots-layer-thursday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "thursday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//F
    map.addLayer({
                "id": "dots-layer-friday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "friday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//ST
    map.addLayer({
                "id": "dots-layer-saturday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "saturday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

//SU
    map.addLayer({
                "id": "dots-layer-sunday",
                "type": "circle",
                "source": "dots",
                "filter": ["!=", "sunday", ""],
                "paint": {
                    "circle-color": 'rgba(194,42,34, 1)',
                    "circle-radius": 5.5
                }
    });

        $('.check').on('click', function(e){

            if ($(this).hasClass("toggle")) {  $(this).removeClass("toggle"); $(this).removeClass("selected"); }
            else  {  $(this).addClass("toggle"); $(this).addClass("selected"); }

            $('.card').hide();
            $("#filter_box").val("");
            map.setLayoutProperty('dots-layer-monday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-tuesday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-wednesday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-thursday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-friday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-saturday', 'visibility', 'none');
            map.setLayoutProperty('dots-layer-sunday', 'visibility', 'none');

            map.flyTo({ center: center, zoom: 7, pitch: 0, bearing: 0 });
            $(".card").removeClass("selected");

             $('.check.toggle').each(function() {
                var txt = $(this).attr("layer");
                console.log(txt);
                $('.card').each(function(){
                   if($(this).hasClass(txt)){
                       $(this).show();
                   }
                }); 

                map.setLayoutProperty('dots-layer-' + txt, 'visibility', 'visible');

              });

        });

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-monday','dots-layer-tuesday','dots-layer-wednesday','dots-layer-thursday','dots-layer-friday','dots-layer-saturday','dots-layer-sunday'] });
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
        var features = map.queryRenderedFeatures(e.point, { layers: ['dots-layer-monday','dots-layer-tuesday','dots-layer-wednesday','dots-layer-thursday','dots-layer-friday','dots-layer-saturday','dots-layer-sunday'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];
    var placeName = "";
  
    popup.setLngLat([$(this).attr("longitude"), $(this).attr("latitude")])
        .setHTML($(this).attr("placeName"))
        .addTo(map);
});

$('.check').on('click', function(e){ popup.remove(); });

var index = 0;

$( document ).ready(function() {
    if ($("#wrapper").width() < 920) { map.flyTo({ center: center, zoom: 8, pitch: 0, bearing: 0 }); }
    else { map.flyTo({ center: center, zoom: 7 }); }
    $(window).resize(function() {
    if ($("#wrapper").width() < 920) { map.flyTo({ center: center, zoom: 8, pitch: 0, bearing: 0 }); }
    else { map.flyTo({ center: center, zoom: 7 }); }
    });

    // addBoxes();
});

$(".zoom").click(function() {
    $('.check').addClass("toggle, selected");
    map.flyTo({ center: center, zoom: 7, pitch: 0, bearing: 0 });
    $(".stat").html("");
    $(".card").removeClass("selected");
    $(".card").show();
    $("#filter_box").val("");
    popup.remove();
    $("li").hide();
    map.setLayoutProperty('dots-layer-monday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-tuesday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-wednesday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-thursday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-friday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-saturday', 'visibility', 'visible');
    map.setLayoutProperty('dots-layer-sunday', 'visibility', 'visible');
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
},{}]},{},[1])