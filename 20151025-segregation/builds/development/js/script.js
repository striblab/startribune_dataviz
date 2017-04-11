(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/chart_breakdowns.json", function(error, dataChartLoad) {
d3.json("./data/white_breakdowns.json", function(error, dataChartLoadW) {
d3.json("./data/minority_breakdowns.json", function(error, dataChartLoadM) {

var dataChart = dataChartLoad.chart_breakdowns;
var dataChartW = dataChartLoadW.white_breakdowns;
var dataChartM = dataChartLoadM.minority_breakdowns;

var  padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };

var chart_segregated = c3.generate({
        bindto: '#chart_segregated',
        padding: padding,
        data: {
            json: dataChart,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"]
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },  
        color: { pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 2, bottom: 0} 
        }
       }
    });

var chart_white = c3.generate({
        bindto: '#chart_white',
        padding: padding,
        data: {
            json: dataChartW,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"],
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },
        color: {
            pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC']
        },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 1, bottom: 0}
        }
       }
    });

var chart_minority = c3.generate({
        bindto: '#chart_minority',
        padding: padding,
        data: {
            json: dataChartM,
            keys: {
                x: 'school_year', // it's possible to specify 'x' when category axis
                value: ['Minneapolis',"St._Paul","Inner_Suburbs","Outer_Suburbs"],
            },
            names: {
              data1: 'Minneapolis',
              data2: 'St. Paul',
              data3: 'Inner Suburbs',
              data4: 'Outer Suburbs'
            }
        },
        color: {
            pattern: ['#251202', '#98775B', '#1D305B', '#7E8CAC']
        },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1993', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 43, bottom: 0}
        }
       }
    });

$( document ).ready(function() {
   $('.c3-legend-item-MinneapolisWhite text, .c3-legend-item-MinneapolisMinority text, .c3-legend-item-STPMinority text').text("Minneapolis");
   $('.c3-legend-item-St--Paul text, .c3-legend-item-STPWhite text, .c3-legend-item-STPMinority text').text("St. Paul");
   $('.c3-legend-item-InSubMinority text, .c3-legend-item-InSubWhite text, .c3-legend-item-Inner-Suburbs text').text("Inner Suburbs");
   $('.c3-legend-item-OutSubWhite text, .c3-legend-item-OutSubMinority text, .c3-legend-item-Outer-Suburbs text').text("Outer Suburbs");
});

$(".c3-legend-item").click(function() {   
   $('.c3-legend-item-MinneapolisWhite text, .c3-legend-item-MinneapolisMinority text, .c3-legend-item-STPMinority text').text("Minneapolis");
   $('.c3-legend-item-St--Paul text, .c3-legend-item-STPWhite text, .c3-legend-item-STPMinority text').text("St. Paul");
   $('.c3-legend-item-InSubMinority text, .c3-legend-item-InSubWhite text, .c3-legend-item-Inner-Suburbs text').text("Inner Suburbs");
   $('.c3-legend-item-OutSubWhite text, .c3-legend-item-OutSubMinority text, .c3-legend-item-Outer-Suburbs text').text("Outer Suburbs");
});

// $(document).bind('DOMNodeInserted', function(event) {
//    $(".name").text( function(i, oldtext){ return oldtext.replace("_"," "); });
//   });

// $(".name").initialize( function(){
//     oldhtml = $(this).html();
//     $(this).html( function(i, oldhtml){ return oldhtml.replace("_"," "); });
// });

// $(".tips").initialize( function(){
//     $('.tips').bind("click", function() {
//         $(this).hide();
//     });
// });

$('.yearChatter').hide();
$('#year1993').show();

  $.getJSON('shapefiles/counties.json', function(counties) {
    $.getJSON('shapefiles/data_93.json', function(data_93) {
    $.getJSON('shapefiles/data_99.json', function(data_99) {
    $.getJSON('shapefiles/data_03.json', function(data_03) {
    $.getJSON('shapefiles/data_08.json', function(data_08) {
    $.getJSON('shapefiles/data_15.json', function(data_15) {

var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light', { maxZoom: 8, minZoom: 8, bounds: mapBounds})
    .setView([44.983333,-93.266667], 8);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

$(".myButton2").css("background-color","#fff");

$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             play();
           }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$("#all").css("background-color","#bbb");

$("#all").click(function() {
  $(".myButton2").css("background-color","#fff");
  $("#seg").css("color","#D6935D");
  $("#diverse").css("color","#299129");
  $(this).css("background-color","#bbb");
  map.setView([44.983333,-93.266667], 8);
  resetMarkers(markerLayer_93);
  resetMarkers(markerLayer_99);
  resetMarkers(markerLayer_03);
  resetMarkers(markerLayer_08);
  resetMarkers(markerLayer_15);
});

//NAVIGATION

var dateRange = [1993,1999,2003,2008,2015];
var index = 0;

$(".previous").click(function() {
  if (index > 0) {
  index--;
  var slideBack = index;
  if (slideBack >= 0) { 
    slider.value(dateRange[slideBack]);
   shiftMap(slider.value());
   slider2.value(slider.value());
 }
}
  });

$(".next").click(function() {
  if (index < 4) {
  index++;
  var slideForward = index;
  if (slideForward < 5) { 
    slider.value(dateRange[slideForward]);
   shiftMap(slider.value());
   slider2.value(slider.value());
 }
}
  });

$("#seg").click(function() {
  $(".myButton2").css("background-color","#fff");
  $(this).css("background-color","#D6935D");
  $("#diverse").css("color","#299129");
  $(this).css("color","#000");
  highlightFlag(markerLayer_93,"SEGREGATED");
  highlightFlag(markerLayer_99,"SEGREGATED");
  highlightFlag(markerLayer_03,"SEGREGATED");
  highlightFlag(markerLayer_08,"SEGREGATED");
  highlightFlag(markerLayer_15,"SEGREGATED");
  });

$("#diverse").click(function() {
  $(".myButton2").css("background-color","#fff");
  $("#seg").css("color","#D6935D");
  $(this).css("background-color","#299129");
  $(this).css("color","#000");
  highlightFlag(markerLayer_93,"DIVERSE");
  highlightFlag(markerLayer_99,"DIVERSE");
  highlightFlag(markerLayer_03,"DIVERSE");
  highlightFlag(markerLayer_08,"DIVERSE");
  highlightFlag(markerLayer_15,"DIVERSE");
});

//YEAR SLIDER
var slider = d3.slider().axis(true);

var steps = 6;

d3.select('#slider').call(slider.min(1993).max(2015).value(1993).axis(d3.svg.axis().tickValues([1993,1999,2003,2008,2015]).tickFormat(d3.format("")).orient("top").ticks(5)).step(1).on("slide", function(evt, value) {
 slider2.value(value);
 shiftMap(value);
  }));

var slider2 = d3.slider().axis(true);

  d3.select('#slider2').call(slider2.min(1993).max(2015).value(1993).axis(d3.svg.axis().tickValues([1993,1999,2003,2008,2015]).tickFormat(d3.format("")).orient("bottom").ticks(5)).step(1).on("slide", function(evt, value) {
 slider.value(value);
 shiftMap(value);
    }));

var timer1, timer2, timer3, timer4;

function play(){
   
  slider.value(1993);
   shiftMap(slider.value());
   slider2.value(slider.value());
   index = 0;

timer1 = setTimeout(function () {
    slider.value(1999);
    shiftMap(slider.value());
    slider2.value(slider.value());
    index++;
        }, 2000)

timer2 =setTimeout(function () {
  slider.value(2003);
   shiftMap(slider.value());
   slider2.value(slider.value());
   index++;
    }, 4000)

timer3 = setTimeout(function () {
  slider.value(2008);
    shiftMap(slider.value());
    slider2.value(slider.value());
    index++;
    }, 6000)

timer4 = setTimeout(function () {
  slider.value(2015);
    shiftMap(slider.value());
    slider2.value(slider.value());
    $("#toggle").attr("class", "play myButton2");
    $("#toggle").html("&#9658;");
    index++;
    }, 8000)

}

function stop(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  clearTimeout(timer4);
  slider.value(1993);
  slider2.value(1993);
  shiftMap(1993);
}

function shiftMap(value){

   
    d3.selectAll("tspan, text").style("font-weight","normal");
  var selectionYear = d3.selectAll("tspan, text").each(function(d) { 
    if (d3.select(this).html() == "" + value + "") { 
    d3.select(this).style("font-weight","900");
  } 
  });


  if (value == 1993) { 
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_93);
    $('.yearChatter').hide();
    $('#year1993').show();
  }
  else if (value == 1999){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_99);
   $('.yearChatter').hide();
    $('#year1999').show();
  }
  else if (value == 2003){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_03);
    $('.yearChatter').hide();
    $('#year2003').show();
  }
  else if (value == 2008){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_08);
    $('.yearChatter').hide();
    $('#year2008').show();
  }
  else if (value == 2015){
    map.removeLayer(markerLayer_93);
    map.removeLayer(markerLayer_99);
    map.removeLayer(markerLayer_03);
    map.removeLayer(markerLayer_08);
    map.removeLayer(markerLayer_15);
    map.addLayer(markerLayer_15);
    $('.yearChatter').hide();
    $('#year2015').show();
  }
}

//MAP LAYERS
  var popup = new L.Popup({ autoPan: false });

  // statesData comes from the 'us-states.js' script included above
  var statesLayer = L.geoJson(counties,  {
      style: {color:"#333", weight:1, fillOpacity:0}
      // onEachFeature: onEachFeature
  }).addTo(map);

  var markerLayer_93 = L.geoJson(data_93,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  }).addTo(map);

  var markerLayer_99 = L.geoJson(data_99,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_03 = L.geoJson(data_03,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_08 = L.geoJson(data_08,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

  var markerLayer_15 = L.geoJson(data_15,  {
      // onEachFeature: onEachFeature,
      pointToLayer: function(feature, latlon) {
        switch (feature.properties.SegFlag) {
            case "SEGREGATED": return L.circleMarker(latlon, {radius: 3, color:"#D6935D", weight:1, fillOpacity:0.5});
            case "DIVERSE":  return L.circleMarker(latlon, {radius: 3, color:"#299129", weight:1, fillOpacity:0.5});
        }
    }
  });

function highlightFlag(markers,flag){
 markers.eachLayer(function (layer) { 
    if(layer.feature.properties.SegFlag == flag) {    
        layer.setStyle({"fillOpacity":0.5});
      }
    else {    
        layer.setStyle({"fillOpacity":0});
      }
    });
}

function resetMarkers(markers){
 markers.eachLayer(function (layer) { 
      layer.setStyle({"fillOpacity":0.5});
    });
}

  function getStyle(feature) {
      return {
          weight: 1,
          opacity: 0.1,
          // color: 'black',
          fillOpacity: 0.5
          // fillColor: getColor(feature.properties.density)
      };
  }

  // get color depending on population density value
  function getColor(d) {
      return d > 1000 ? '#8c2d04' :
          d > 500  ? '#cc4c02' :
          d > 200  ? '#ec7014' :
          d > 100  ? '#fe9929' :
          d > 50   ? '#fec44f' :
          d > 20   ? '#fee391' :
          d > 10   ? '#fff7bc' :
          '#ffffe5';
  }

  function onEachFeature(feature, layer) {
      layer.on({
          mousemove: mousemove,
          mouseout: mouseout,
          click: zoomToFeature
      });
  }

  var closeTooltip;

  function mousemove(e) {
      var layer = e.target;

      popup.setLatLng(e.latlng);
      popup.setContent(layer.feature.properties.schoolName + '<div>' + layer.feature.properties.districtNa + ' SCHOOL DISTRICT</div>');

      if (!popup._map) popup.openOn(map);
      window.clearTimeout(closeTooltip);

      // highlight feature
      layer.setStyle({
          weight: 1,
          opacity: 0.3,
          fillOpacity: 0.3
      });

      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }

  function mouseout(e) {
      markerLayer_93.resetStyle(e.target);
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }

  function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
  }

  });
  });
  });
  });
  });
  });
  });
  });
});
},{}]},{},[1])