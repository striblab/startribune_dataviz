(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./shapefiles/mn_places.json", function(error, mncities) {
d3.json("./shapefiles/wi_places.json", function(error, wicities) {
d3.json("./shapefiles/mpls_nb.json", function(error, mplsnb) {
d3.json("./shapefiles/stp_nb.json", function(error, stpnb) {
d3.json('./data/cities.json', function(error, dataLoad) {

var data = dataLoad.cities;
var checked = false;

d3.select("#cities").selectAll(".row")
  .data(data.sort(function(a,b) { return b.EffectiveNegEqRate - a.EffectiveNegEqRate; })).enter().append("div")
  .attr("class",function(d) { if (d.name == "St. Francis") { return "row selected" } else { return "row "; } })
  .style('background-color',function(d) { 

  	var color = "#888888";

  if (d.EffectiveNegEqRate >= .27) { color = "#6a51a3"; }
  else if (d.EffectiveNegEqRate >= .23) { color = "#807dba"; }
  else if (d.EffectiveNegEqRate >= .17) { color = "#9e9ac8"; }
  else if (d.EffectiveNegEqRate >= .12) { color = "#bcbddc"; }
  else if  (d.EffectiveNegEqRate >= 0) { color = "#dadaeb"; }

	return color;

  })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 


    return "<div class='col name'>" + d.name + "</div><div class='col score'>" + d3.format("%")(d.EffectiveNegEqRate) + "</div>";
  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "name") { 
        if (sorted == "descend") { return d3.descending(a.name, b.name); }
        if (sorted == "ascend") { return d3.ascending(a.name, b.name); }
     }
          if (candidate == "index") { 
        if (sorted == "descend") { return d3.descending(a.EffectiveNegEqRate, b.EffectiveNegEqRate); }
        if (sorted == "ascend") { return d3.ascending(a.EffectiveNegEqRate, b.EffectiveNegEqRate); }
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

    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    
    // if (checked){
    // var txt = $('#filter_box').val();
    // $('.row').each(function(){
    //    if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
    //        $(this).show();
    //    }
    // });
    // $('.row').each(function(){
    //    if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
    //        $(this).hide();
    //    }
    //  });
    // } else {
    // var txt = $('#filter_box').val();
    // $('.row').each(function(){
    //    if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) && ($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1)){
    //        $(this).show();
    //    }
    // });     
    // }
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
    metricLoad("Minneapolis");

    $(".row").removeClass("selected");
    $(".row:contains('St. Francis')").addClass("selected");

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

$(".zoom").on("click", function(){
  reset();
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
		        "property": "index_EffectiveNegEqRate",
		        "type": "interval",
		        "stops": [
              [0, "#888888"],
              [.01, "#dadaeb"],
              [.12, "#bcbddc"],
              [.17, "#9e9ac8"],
              [.23, "#807dba"],
              [.27, "#6a51a3"]
           ]
		    },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

});

function reset(){
	map.flyTo({ center: [-93.28469849, 45.01832962], zoom: 7.8, pitch:0, bearing:0 });
	$('#filter_box').val("");
	$('.row').show();
  $(".row").removeClass("selected");
  $('#cities').animate({scrollTop : 0},800);
  metricLoad("St. Francis");
  $(".row:contains('St. Francis')").addClass("selected");
}

function metricLoad(city){			

    var cityData = data.filter(function(d){ return d.name == city; })

    if (String(city).indexOf("(MPLS)") != -1) { $("#districtName").html(cityData[0].CityState + ", Minneapolis, MN"); }
    else if (String(city).indexOf("(STP)") != -1) { $("#districtName").html(cityData[0].CityState + ", St. Paul, MN"); }
    else { $("#districtName").html(cityData[0].CityState); }

    var color = "#888888";

    if (cityData[0].EffectiveNegEqRate >= .27) { color = "#6a51a3"; }
    else if (cityData[0].EffectiveNegEqRate >= .23) { color = "#807dba"; }
    else if (cityData[0].EffectiveNegEqRate >= .17) { color = "#9e9ac8"; }
    else if (cityData[0].EffectiveNegEqRate >= .12) { color = "#bcbddc"; }
    else if  (cityData[0].EffectiveNegEqRate >= 0) { color = "#dadaeb"; }

    $("#districtName").css('background-color',color);
    $("#indexRow").css('border',"0 solid " + color);
    
    $("#days").html(cityData[0].starter2017);
    $("#distressed").html(cityData[0].tradeup2017);
    $("#ppsf").html(cityData[0].premium2017);
    $("#change").html(d3.format("+%")(cityData[0].percentchange));

    $("#income").html(d3.format("$,.0f")(cityData[0].MedianHHincome));
    $("#homes").html(d3.format("%")(cityData[0].PctSingleFamilyUnits));
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

  var cityData = data.filter(function(d){ return d.name == "Minneapolis"; })

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
            point: {
                show: false
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
                        values: [100,250,400],
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
metricLoad("St. Francis");

});
});
});
});
});
},{}]},{},[1])