(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./shapefiles/mn_places.json", function(error, mncities) {
d3.json("./shapefiles/wi_places.json", function(error, wicities) {
d3.json("./shapefiles/mpls_nb.json", function(error, mplsnb) {
d3.json("./shapefiles/stp_nb.json", function(error, stpnb) {
d3.json('./data/cities.json', function(error, dataLoad) {

var data = dataLoad.cities;
var checked = false;

d3.select("#cities").selectAll(".row")
  .data(data.sort(function(a,b) { return b.IndexScore - a.IndexScore; })).enter().append("div")
  .attr("class",function(d) { if (d.name == "Richfield") { return "row selected" } else { return "row "; } })
  .style('background-color',function(d) { 

  	var color = "#888888";

	if (d.IndexScore >= 300) { color = "#993404"; }
	else if	(d.IndexScore >= 240) { color = "#d95f0e"; }
	else if	(d.IndexScore >= 180) { color = "#fe9929"; }
	else if	(d.IndexScore >= 120) { color = "#fec44f"; }
	else if	(d.IndexScore >= 60) { color = "#fee391"; }

	return color;

  })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 


    return "<div class='col name'>" + d.name + "</div><div class='col score'>" + d.IndexScore + "</div>";
  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "name") { 
        if (sorted == "descend") { return d3.descending(a.name, b.name); }
        if (sorted == "ascend") { return d3.ascending(a.name, b.name); }
     }
          if (candidate == "index") { 
        if (sorted == "descend") { return d3.descending(a.IndexScore, b.IndexScore); }
        if (sorted == "ascend") { return d3.ascending(a.IndexScore, b.IndexScore); }
     }
    })
    .transition().duration(500);
}

$( document ).ready(function() {

    $('.row').hide();
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
           $(this).hide();
       }
     });

$('#filter_box').on('keyup search', function(e){
    $('.row').hide();

    if (checked){
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
           $(this).hide();
       }
     });
    } else {
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) && ($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1)){
           $(this).show();
       }
    });     
    }
});

$(".th").click(function() {
  $(".th").removeClass("selected3");
  $(this).addClass("selected3");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected3")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#cities",null,data,$(this).attr("data"),sorted);
});

$(".row").click(function() {
	$(".row").removeClass("selected");
	$(this).addClass("selected");
  // var random = Math.floor(Math.random() * 4) + 1;
  // var span = Math.floor(Math.random() * 100) + -100;
  // var pitch = span / random;
  // var bearing = span / random;
  var pitch = 0;
  var bearing = 0;
	var longitude = $(this).attr("longitude");
	var latitude = $(this).attr("latitude");
  if ($(this).find(".name").text().indexOf("(MPLS)") != -1 || $(this).find(".name").text().indexOf("(STP)") != -1) { map.flyTo({ center: [longitude, latitude], zoom: 13.5, pitch: pitch, bearing: bearing }); }
	else { map.flyTo({ center: [longitude, latitude], zoom: 11.5, pitch: pitch, bearing: bearing }); }
	metricLoad($(this).find(".name").text());
});

});

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    center: [-93.28469849, 45.01832962], 
    zoom: 7.8,
    minZoom: 7.8
    // maxBounds: llb
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

$('.onoffswitch :checkbox').change(function() {  
    if (this.checked) {
      checked = true;
    map.setLayoutProperty('stpnb-layer', 'visibility', 'none');
    map.setLayoutProperty('mplsnb-layer', 'visibility', 'none');
    map.setLayoutProperty('mncities-layer', 'visibility', 'visible');
    map.setLayoutProperty('wicities-layer', 'visibility', 'visible');
    reset();
    metricLoad("Richfield");

    $(".row").removeClass("selected");
    $(".row:contains('Richfield')").addClass("selected");

      $('.row').show();
        $('.row').each(function(){
           if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
               $(this).hide();
           }
        });

      $('#cities').animate({scrollTop : 0},800);
    } else {
      checked = false;

    map.setLayoutProperty('stpnb-layer', 'visibility', 'visible');
    map.setLayoutProperty('mplsnb-layer', 'visibility', 'visible');
    map.setLayoutProperty('mncities-layer', 'visibility', 'none');
    map.setLayoutProperty('wicities-layer', 'visibility', 'none');
    map.flyTo({ center: [-93.202515, 44.969656], zoom: 9.8, pitch:0, bearing:0 });
    metricLoad("(MPLS) Bottineau");

    $(".row").removeClass("selected");
    $(".row:contains('(MPLS) Bottineau')").addClass("selected");

      $('.row').hide();
      $('.row').each(function(){
         if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
             $(this).show();
         }
      });

      $('#cities').animate({scrollTop : 0},800);
    }

    console.log(checked);
});


 map.addSource('mncities', {
   type: 'geojson',
   data: mncities
 });

 map.addLayer({
       'id': 'mncities-layer',
       'interactive': true,
       'source': 'mncities',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.8,
           'fill-color': {
		        "property": "index_IndexScore",
		        "type": "interval",
		        "stops": [
		            [0, "#888888"],
                [60, "#fee391"],
                [120, "#fec44f"],
                [180, "#fe9929"],
                [240, "#d95f0e"],
                [300, "#993404"]
		        ]
		    },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

 map.addSource('wicities', {
   type: 'geojson',
   data: wicities
 });

 map.addLayer({
       'id': 'wicities-layer',
       'interactive': true,
       'source': 'wicities',
       'layout': {},
       'type': 'fill',
          'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.8,
           'fill-color': {
		        "property": "index_IndexScore",
		        "type": "interval",
		        "stops": [
                [0, "#888888"],
                [60, "#fee391"],
                [120, "#fec44f"],
                [180, "#fe9929"],
                [240, "#d95f0e"],
                [300, "#993404"]
		        ]
		    },
           'fill-outline-color': 'rgba(255, 255, 255, 0)'
     }
   }, 'place-neighbourhood');

  map.addSource('mplsnb', {
   type: 'geojson',
   data: mplsnb
 });

 map.addLayer({
       'id': 'mplsnb-layer',
       'interactive': true,
       'source': 'mplsnb',
       'layout': {},
       'type': 'fill',
          'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.8,
           'fill-color': {
            "property": "nbindex_IndexScore",
            "type": "interval",
            "stops": [
                [0, "#888888"],
                [60, "#fee391"],
                [120, "#fec44f"],
                [180, "#fe9929"],
                [240, "#d95f0e"],
                [300, "#993404"]
            ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.4)'
     }
   }, 'place-neighbourhood');

  map.addSource('stpnb', {
   type: 'geojson',
   data: stpnb
 });

 map.addLayer({
       'id': 'stpnb-layer',
       'interactive': true,
       'source': 'stpnb',
       'layout': {},
       'type': 'fill',
          'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.8,
           'fill-color': {
            "property": "nbindex_IndexScore",
            "type": "interval",
            "stops": [
                [0, "#888888"],
                [60, "#fee391"],
                [120, "#fec44f"],
                [180, "#fe9929"],
                [240, "#d95f0e"],
                [300, "#993404"]
            ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.4)'
     }
   }, 'place-neighbourhood');

    map.setLayoutProperty('stpnb-layer', 'visibility', 'none');
    map.setLayoutProperty('mplsnb-layer', 'visibility', 'none');

// Create a popup, but don't add it to the map yet.
// var popup = new mapboxgl.Popup({
//     closeButton: false,
//     closeOnClick: false
// });

// map.on('mousemove', function(e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['mncities-layer','wicities-layer'] });
//     // Change the cursor style as a UI indicator.
//     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

//     if (!features.length) {
//         popup.remove();
//         return;
//     }

//     var feature = features[0];

//     // Populate the popup and set its coordinates
//     // based on the feature found.
//     popup.setLngLat(e.lngLat)
//         .setHTML(feature.properties.NAME)
//         .addTo(map);
// });

});

function reset(){
	map.flyTo({ center: [-93.28469849, 45.01832962], zoom: 7.8, pitch:0, bearing:0 });
	$('#filter_box').val("");
	$('.row').show();
}

function metricLoad(city){			

    var cityData = data.filter(function(d){ return d.name == city; })

    if (String(city).indexOf("(MPLS)") != -1) { $("#districtName").html(cityData[0].CityState + ", Minneapolis, MN"); }
    else if (String(city).indexOf("(STP)") != -1) { $("#districtName").html(cityData[0].CityState + ", St. Paul, MN"); }
    else { $("#districtName").html(cityData[0].CityState); }

    var color = "#888888";

    if (cityData[0].IndexScore >= 300) { color = "#993404"; }
    else if (cityData[0].IndexScore >= 240) { color = "#d95f0e"; }
    else if (cityData[0].IndexScore>= 180) { color = "#fe9929"; }
    else if (cityData[0].IndexScore >= 120) { color = "#fec44f"; }
    else if (cityData[0].IndexScore >= 60) { color = "#fee391"; }

    
    $("#districtName").css('background-color',color);
    $("#indexRow").css('border',"3px solid " + color);
    
    $("#days").html(cityData[0].DaysMarket);
	  $("#change").html(d3.format("+%")(cityData[0].PctChgfromAvg));
    $("#distressed").html(d3.format("%")(cityData[0].PctDistressed));
    $("#ppsf").html(d3.format("%")(cityData[0].PctOrigPrice));

    $("#income").html(d3.format("$,.0f")(cityData[0].MedianHHincome));
    $("#homes").html(d3.format("%")(cityData[0].PctSingleFamily));
    $("#apartments").html(d3.format("%")(cityData[0].PctLargeApartmentBldgs));
    $("#kids").html(d3.format("%")(cityData[0].PctKids));
    $("#renters").html(d3.format("%")(cityData[0].PctRenters));

    console.log(cityData[0].PPSF2016);

    chart.load({
                columns: [
                    ['x', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'],
                    ['PPSF', cityData[0].PPSF2003, cityData[0].PPSF2004, cityData[0].PPSF2005, cityData[0].PPSF2006, cityData[0].PPSF2007, cityData[0].PPSF2008, cityData[0].PPSF2009, cityData[0].PPSF2010, cityData[0].PPSF2011, cityData[0].PPSF2012, cityData[0].PPSF2013, cityData[0].PPSF2014, cityData[0].PPSF2015, cityData[0].PPSF2016],
                ]
    })

}

// function loadChart(city){

  var cityData = data.filter(function(d){ return d.name == "Richfield"; })

      var  padding = {
            top: 40,
            right: 40,
            bottom: 30,
            left: 40,
        };

    var chart = c3.generate({
            bindto: '#chart',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    ['x', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'],
                    ['PPSF', cityData[0].PPSF2003, cityData[0].PPSF2004, cityData[0].PPSF2005, cityData[0].PPSF2006, cityData[0].PPSF2007, cityData[0].PPSF2008, cityData[0].PPSF2009, cityData[0].PPSF2010, cityData[0].PPSF2011, cityData[0].PPSF2012, cityData[0].PPSF2013, cityData[0].PPSF2014, cityData[0].PPSF2015, cityData[0].PPSF2016],
                ],
                names: {
                  'PPSF':'Price per sq. ft.'
                },
                colors: { 'PPSF': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    max: 400,
                    min: 0,
                    padding: {bottom: 0, top: 0},
                    tick: {
                        count: 4,
                        format: d3.format('$.0f')
                    }
                },
                x: {
                    type: 'timeseries',
                    // label: {
                    //   text: 'Price per square foot over time',
                    //   position: 'inner-center'
                    // },
                    tick: {
                        format: '%Y'
                    }
                }
            }
        });

d3.select("#chart svg").append("text")
    .attr("x", 50 )
    .attr("y", 50)
    .style("text-anchor", "right")
    .text("Price per square foot over time");
// }

// loadChart("Richfield");
metricLoad("Richfield");

});
});
});
});
});
},{}]},{},[1])