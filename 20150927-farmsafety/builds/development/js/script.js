(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/deaths.json", function(error, data) {

//DEFINE COLOR SWATCHES
allSwatch = "#999999";
atvSwatch = "#76909f";
siloSwatch = "#a17a94";
landscapeSwatch = "#6f9a7c";
livestockSwatch = "#ca7a68";
skidSwatch = "#b1ae68";
truckSwatch = "#9c8f68";
tractorSwatch = "#b96569";
otherSwatch = "#cf995a";

//OVERALL VIEW
  d3.select("#eachDeath")
  .selectAll("button")
  .data(data.Sheet1)
  .enter()
  .append("button")
  .sort(function(a, b) {
       var nameA = a.death_icon.toLowerCase(), nameB = b.death_icon.toLowerCase();
       if (nameA < nameB) { return -1; } 
       if (nameA > nameB) { return 1; }
       return 0
    })
  .attr("id",function(d){ return d.death_icon + "_" + d.record_no; })
  .attr("year",function(d){ return d.death_year; })
  .attr("age",function(d){ return d.victim_age; })
  .attr("class",function(d){ 
    if (d.death_icon == "ATV") { return "death_box atvSwatch"; }
    if (d.death_icon == "grain bin/silo") { return "death_box siloSwatch"; }
    if (d.death_icon == "environmental" || d.death_icon == "falling tree") { return "death_box landscapeSwatch"; }
    if (d.death_icon == "livestock") { return "death_box livestockSwatch"; }
    if (d.death_icon == "skid loader") { return "death_box skidSwatch"; }
    if (d.death_icon == "tractor") { return "death_box tractorSwatch"; }
    if (d.death_icon == "truck") { return "death_box truckSwatch"; }
    if (d.death_icon == "other"  || d.death_icon == "Other farm machine") { return "death_box otherSwatch"; }
  })
  .style("background-color",function(d){ 
    if (d.death_icon == "ATV") { return atvSwatch; }
    if (d.death_icon == "grain bin/silo") { return siloSwatch; }
    if (d.death_icon == "environmental" || d.death_icon == "falling tree") { return landscapeSwatch; }
    if (d.death_icon == "livestock") { return livestockSwatch; }
    if (d.death_icon == "skid loader") { return skidSwatch; }
    if (d.death_icon == "tractor") { return tractorSwatch; }
    if (d.death_icon == "truck") { return truckSwatch; }
    if (d.death_icon == "other"  || d.death_icon == "Other farm machine") { return otherSwatch; }
  })
  .text(function (d){ return " "; });

//DEATHS MAP
var southWest = L.latLng(40.78054, -80.22217),
northEast = L.latLng(49.56798, -110.76416),
bounds = L.latLngBounds(southWest, northEast);

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = L.mapbox.map('map', 'mapbox.light', {minZoom: 5, maxBounds: bounds, legendControl: { position: 'topright' }}).setView([46.483265,-93.592529], 5);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();

//MARKERS
  var deathsLayer = L.geoJson(null, { pointToLayer: scaledPoint }).addTo(map);

for (var i = 0; i < data.Sheet1.length; i++){
  var geojson = [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [data.Sheet1[i].longitude, data.Sheet1[i].latitude]
    },
    "properties": {
      "name": data.Sheet1[i].victim_name,
      "age": data.Sheet1[i].victim_age,
      "city": data.Sheet1[i].injury_city,
      "icon": data.Sheet1[i].death_icon,
      "year": data.Sheet1[i].death_year
    }
  }
];

  deathsLayer.addData(geojson);
}


function pointColor(feature) {
  var q1 = "#333";
  var q2 = "#333";
  var q3 = "#333";
  var q4 = "#333";
  var q5 = "#333";
  var q6 = "#333";

  if (feature.properties.icon == "truck") { return q6; }
  if (feature.properties.icon == "tractor") { return q5; }
  if (feature.properties.icon == "skid loader") { return q4; }
  if (feature.properties.icon == "grain bin/silo") { return q3; }
  if (feature.properties.icon == "environmental") { return q3; }
  if (feature.properties.icon == "livestock") { return q2; }
  if (feature.properties.icon == "ATV") { return q2; }
  if (feature.properties.icon == "grain bin/silo") { return q2; }
  else { return q1; }
}

function pointRadius(feature) {
  return 5;
  // if (feature.properties.Ons >= 700) { return 12; }
  // if (feature.properties.Ons >= 500) { return 10; }
  // if (feature.properties.Ons >= 300) { return 8; }
  // if (feature.properties.Ons >= 100) { return 6; }
  // if (feature.properties.Ons >= 50) { return 4; }
  // else { return 2; }
}

function scaledPoint(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: pointRadius(feature),
        fillColor: pointColor(feature),
        strokeColor: "#de2d26",
        strokeWidth: "2",
        fillOpacity: 1,
        weight: .3,
        color: '#fff'
    })
    // .bindPopup(
    //     '<h1>' + feature.properties.name + ' - ' + feature.properties.age + '</h1><div>' + feature.properties.city + ' - ' + feature.properties.year + '</div>Died in ' + feature.properties.icon + ' accident');
}

function clearMarkers(markers,icon,year){
    markers.eachLayer(function (layer) { 
    if (icon == "ATV") { var filled = atvSwatch;}
    else if (icon == "grain bin/silo") { var filled = siloSwatch; }
    else if (icon == "environmental" || icon == "falling tree") { var filled = landscapeSwatch; }
    else if (icon == "livestock") { var filled = livestockSwatch; }
    else if (icon == "skid loader") { var filled = skidSwatch; }
    else if (icon == "tractor") { var filled = tractorSwatch; }
    else if (icon == "truck") { var filled = truckSwatch; }
    else if (icon == "other"  || icon == "Other farm machine") { var filled = otherSwatch; }
    else if (icon == "all") { var filled = "#999999"; }

     if (icon == "" || icon == "all"){
    if(layer.feature.properties.year == year) {    
        layer.setStyle({"fillColor":filled,"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#ddd","fillOpacity":.1}); 
      }
    }
    else if (year == "" || year == "2003"){
    if(layer.feature.properties.icon == icon) {    
        layer.setStyle({"fillColor":filled,"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#ddd","fillOpacity":.1}); 
      }
    }
    else {
    if(layer.feature.properties.year == year && layer.feature.properties.icon == icon) {    
        layer.setStyle({"fillColor":filled,"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillColor":"#ddd","fillOpacity":.1}); 
      }

         if ((year == "2003") && icon == "all"){
       layer.setStyle({"fillColor":"#999999","fillOpacity":1}); 
    }
    } 
    });
}

function restoreMarkers(markers,year){
    markers.eachLayer(function (layer) { 
    if(year != "" && year != "2003"){
       if (layer.feature.properties.year == year) { 
        layer.setStyle({"fillColor":"#999999","fillOpacity":1}); 
      }    
      else {    
        layer.setStyle({"fillColor":"#ddd","fillOpacity":.1}); 
      }
    }
    else { layer.setStyle({"fillColor":"#999999","fillOpacity":1}); }
  });
}

function highlightDeath(markers,name){
 markers.eachLayer(function (layer) { 
    if(layer.feature.properties.name == name) {    
        layer.setStyle({"fillOpacity":1}); 
      }
    else {    
        layer.setStyle({"fillOpacity":.1}); 
      }
    });
}

//SEARCH FILTER
$( document ).ready(function() {
     $('#filter_box').keyup(function(i){
        $('.victimCard').hide();
        i = 1;
        clearMarkers(deathsLayer,"all","2003");
        var txt = $('#filter_box').val();
        $('.victimCard').each(function(){
          var records = document.getElementById('recordsReturned');
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
            records.innerHTML = i++;
               $(this).show();
           }
        });
    });
});

shiftchart("");
$( ".death_box" ).css("opacity","1");

//this line
$(document).bind('DOMNodeInserted', function(event) {
$( "#cboxClose" ).click(function() {
     $.colorbox.close()
  });
});

function shiftchart(year) {

  var records = document.getElementById('recordsReturned');

  $( ".death_box" ).css("opacity",".2");
  $( ".death_box" ).css("border","1px solid #fff");
  $( "[year='" + year + "']" ).css("border","1px solid rgba(0, 0, 0, 1)");
  $( "[year='" + year + "']" ).css("opacity","1");

  if (year == 2003) { $( ".death_box" ).css("opacity","1"); $( ".death_box" ).css("border","1px solid #fff"); }

  $( ".barDiv_b" ).click(function() {
   $(".barDiv_b").css("background-color","transparent");
   $(this).css("background-color","#ddd");
   $('#filter_box').val('');
  });
  $( ".allB" ).click(function() {
    // console.log(year);
    if (year == 2003) { restoreMarkers(deathsLayer,""); }
    else { clearMarkers(deathsLayer,"all",Number(year)); }
    drawCards(year,"all");
    records.innerHTML = $('#recordsAll').text();
  });
  $( ".atvB" ).click(function() {
    clearMarkers(deathsLayer,"ATV",year);
    drawCards(year,"ATV");
    records.innerHTML = $('#recordsATV').text();
  });
  $( ".siloB" ).click(function() {
    clearMarkers(deathsLayer,"grain bin/silo",year);
    drawCards(year,"grain bin/silo");
    records.innerHTML = $('#recordsSilo').text();
  });
  $( ".landscapeB" ).click(function() {
    clearMarkers(deathsLayer,"environmental",year);
    drawCards(year,"environmental");
    records.innerHTML = $('#recordsEnvironmental').text();
  });
  $( ".livestockB" ).click(function() {
    clearMarkers(deathsLayer,"livestock",year);
    drawCards(year,"livestock");
    records.innerHTML = $('#recordsLivestock').text();
  });
  $( ".skidB" ).click(function() {
    clearMarkers(deathsLayer,"skid loader",year);
    drawCards(year,"skid loader");
    records.innerHTML = $('#recordsSkid').text();
  });
  $( ".truckB" ).click(function() {
    clearMarkers(deathsLayer,"truck",year);
    drawCards(year,"truck");
    records.innerHTML = $('#recordsTruck').text();
  });
  $( ".tractorB" ).click(function() {
    clearMarkers(deathsLayer,"tractor",year);
    drawCards(year,"tractor");
    records.innerHTML = $('#recordsTractor').text();
  });
  $( ".otherB" ).click(function() {
    clearMarkers(deathsLayer,"other",year);
    drawCards(year,"other");
    records.innerHTML = $('#recordsOther').text();
  });
}

//YEAR SLIDER
var slide_spot=1990;
var slider = d3.slider().axis(true);

if ($(window).width() < 450){
var tickLength = 7;
}
else { 
var tickLength = 12; 
}

d3.select('#slider').call(slider.min(2003).max(2014).value(2003).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(tickLength)).step(1).on("slide", function(evt, value) {

  $(".iconLegend").css("background-color","#fff");
  $(".allB").css("background-color","#ddd");
  $(".death_box").css("opacity","1");
  $("#map").show();
  $(".types").hide();
  $("#minnesotaDeaths").show();
  $(".chatter").show();
  $(".mainFact").show();

  shiftchart("" + value + "");
  $('#filter_box').val('');
  $(".victims_nerdbox").html("Select victim name for more details");

  $(".barDiv_b").css("background-color","transparent");
  d3.selectAll(".victimCard").style("background-color","#ddd");
  drawChart("" + value + "");
  drawCards("" + value + "","");
  if (value == 2003) { $(".thisYear").html("From 2004 to 2014"); }
    else { $(".thisYear").html("In " +  value) }
  clearMarkers(deathsLayer,"","" + value + "");

  $("#recordsAll").html($("#recordsReturned").html());
  }));

d3.select("text").text("All");

//FILTER BUTTONS
$( document ).ready(function() {  
$(".types").hide();
$("#minnesotaDeaths").show();
$("[rel=2003]").addClass("yearSelected");

slider.value("2003");

$(".yearIcon").click(function() {
  $(".yearIcon").removeClass("yearSelected");
  $(this).addClass("yearSelected");
  slider.value(Number($(this).attr("rel")));

  $(".death_box").css("opacity","1");
  $(".chatter").show();
  $(".mainFact").show();

  shiftchart(Number($(this).attr("rel")));
  $('#filter_box').val('');
  $(".victims_nerdbox").html("Select victim name for more details");

  d3.selectAll(".victimCard").style("background-color","#ddd");
  drawChart("" + Number($(this).attr("rel")) + "");
  drawCards("" + Number($(this).attr("rel")) + "",$(".iconLegend").not(".desaturate").attr("icon"));
  //this line
  if (Number($(this).attr("rel")) == 2003 && !$(".allB").hasClass("desaturate")) { 
    $(".thisYear").html("From 2004 to 2014"); 
    restoreMarkers(deathsLayer,""); 

  }
    else { 
      $(".thisYear").html("In " +  Number($(this).attr("rel"))) 
      clearMarkers(deathsLayer,$(".iconLegend").not(".desaturate").attr("icon"),"" + Number($(this).attr("rel")) + "");
  }
  

    $(".recordsAll").html(Number($("#recordsTractor").text()) + Number($("#recordsATV").text()) + Number($("#recordsEnvironmental").text()) + Number($("#recordsTruck").text()) + Number($("#recordsSilo").text()) + Number($("#recordsOther").text()) + Number($("#recordsLivestock").text()) + Number($("#recordsSkid").text()));


});

  
$(".iconLegend").addClass("desaturate"); //KILL THIS TO MAKE THINGS GOOD
$(".allB").removeClass("desaturate");
$(".iconLegend").click(function() {
  $(".iconLegend").each(function(){
      $(this).removeClass($(this).attr("rel"));
    });
  $(".iconLegend").addClass("desaturate");
  $(this).removeClass("desaturate");
  $(this).addClass($(this).attr("rel"));
  $(".types").hide();
  $(".victims_nerdbox").html("Select victim name for more details");
  $(".chatter").show();
  $(".mainFact").show();
});
$(".allB").click(function() {
  // $(".iconLegend").removeClass("desaturate");
  // $(".iconLegend").each(function(){
  //     $(this).addClass($(this).attr("rel"));
  //   });
  $(".death_box").css("opacity","1");
  $(".types").hide();
  $("#minnesotaDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#999999");
});
$(".atvB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.atvSwatch").css("opacity","1");
  $("#atvDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#76909f");
});
$(".tractorB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.tractorSwatch").css("opacity","1");
  $(".types").hide();
  $("#tractorDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#b96569");
});
$(".siloB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.siloSwatch").css("opacity","1");
  $(".types").hide();
  $("#siloDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#a17a94");
});
$(".skidB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.skidSwatch").css("opacity","1");
  $(".types").hide();
  $("#skidDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#b1ae68");
});
$(".landscapeB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.landscapeSwatch").css("opacity","1");
  $(".types").hide();
  $("#landscapeDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#6f9a7c");
});
$(".livestockB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.livestockSwatch").css("opacity","1");
  $(".types").hide();
  $("#livestockDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#ca7a68");
});
$(".truckB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.truckSwatch").css("opacity","1");
  $(".types").hide();
  $("#truckDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#9c8f68");
});
$(".otherB").click(function() {
  $(".death_box").css("opacity",".2");
  $(".death_box.otherSwatch").css("opacity","1");
  $(".types").hide();
  $("#otherDeaths").show();
  $("#map").show();
  $(".obitzLink").css("color","#cf995a");
});
});

//RESET BUTTON
$(".zoom").click(function() {
$('#filter_box').val('');
$(".barDiv_b").css("background-color","transparent");
$(".victims_nerdbox").html("Select victim name for more details");
drawChart("");
drawCards("","");
clearMarkers(deathsLayer,"all","2003");
slider.value("2003");
  var chatter = document.getElementById('chatterBox');
  chatter.innerHTML = "Select state to see numbers";

    d3.selectAll("rect").attr('class', function(d) {
         return d.color;
      });
});

//INITIALIZE
drawChart("");
drawCards("","all");
restoreMarkers(deathsLayer,"");

//DEATHS CHART
function drawChart(year){
  d3.selectAll(".barDiv").html("");
  var recordsATV = document.getElementById('recordsATV');
  var recordsEnvironmental = document.getElementById('recordsEnvironmental');
  var recordsSilo = document.getElementById('recordsSilo');
  var recordsLivestock = document.getElementById('recordsLivestock');
  var recordsSkid = document.getElementById('recordsSkid');
  var recordsTruck = document.getElementById('recordsTruck');
  var recordsTractor = document.getElementById('recordsTractor');
  var records = document.getElementById('recordsReturned');

  if (year == "" || year == "2003") {
  d3.select("#atv .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsATV.innerHTML = 0; return d.death_icon == "ATV"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsATV').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#environmental .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsEnvironmental.innerHTML = 0; return d.death_icon == "environmental"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsEnvironmental').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#silo .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsSilo.innerHTML = 0; return d.death_icon == "grain bin/silo"; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsSilo').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#livestock .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsLivestock.innerHTML = 0; return d.death_icon == "livestock"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsLivestock').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#skid .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsSkid.innerHTML = 0; return d.death_icon == "skid loader"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsSkid').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#truck .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsTruck.innerHTML = 0; return d.death_icon == "truck"; }))
  .enter().append("button").attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsTruck').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#tractor .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsTractor.innerHTML = 0; return d.death_icon == "tractor"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsTractor').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#other .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsOther.innerHTML = 0; return d.death_icon == "other" ||  d.death_icon == "Other farm machine"; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsOther').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });
}

  else {
  d3.select("#atv .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ recordsATV.innerHTML = 0; return d.death_icon == "ATV" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsATV').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#environmental .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsEnvironmental.innerHTML = 0; return d.death_icon == "environmental" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsEnvironmental').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#silo .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsSilo.innerHTML = 0; return d.death_icon == "grain bin/silo" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsSilo').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#livestock .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsLivestock.innerHTML = 0; return d.death_icon == "livestock" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsLivestock').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#skid .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsSkid.innerHTML = 0; return d.death_icon == "skid loader" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsSkid').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#truck .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsTruck.innerHTML = 0; return d.death_icon == "truck" && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsTruck').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#tractor .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsTractor.innerHTML = 0; return d.death_icon == "tractor" && d.death_year == year; }))
  .enter()
  .append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsTractor').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  d3.select("#other .barDiv")
  .selectAll("button")
  .data(data.Sheet1.filter(function(d){ records.innerHTML = i + 1; recordsOther.innerHTML = 0; return (d.death_icon == "other" ||  d.death_icon == "Other farm machine") && d.death_year == year; }))
  .enter().append("button")
  .attr("class","dude_box")
  .attr("id", function (d,i){ records.innerHTML = i + 1; $('.recordsOther').html(i + 1); return d.death_county + "_" + d.record_no;} )
  .text(function (d){return " "; });

  }
}

//VICTIMS LIST
function drawCards(year,type){
  d3.selectAll("#victims").html("");
  var records = document.getElementById('recordsReturned');

  var detailsBox = d3.select("#victims").append("div")
  .attr("x",60)
  .attr("y",60)
  .attr("class","victims_nerdbox")
  .style("display","none")
  .html("")
  .on("mousedown", function(d, i){
    d3.select(this).style("display","none");
});

if (type == "all"){

  if (year == "" || year == "2003") {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1)
  .enter()
  .append("div")
  .attr("class","victimCard inline")
  .attr("href","#victims_nerbox")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#aaa");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       $('#victims_nerdbox, #cboxContent').html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div><div class='obitzLink' style='color:" + d.color + " !important;'><a href='" +  d.obituary + "' target='new_'>Read obituary</div>");
       $(".inline").colorbox({inline:true, width:"70%", height:"500px"});
})
  .html(function (d,i){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
    records.innerHTML = i + 1;
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<div class='victimContent'><span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathDate'>Died: " + dateString + " in " + d.injury_city + "</div><div class='ender " + icon + "'></div></div>"; });
}
  else {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_year == year; }))
  .enter()
  .append("div")
  .attr("class","victimCard inline")
  .attr("href","#victims_nerbox")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#aaa");
       // d3.selectAll(".victimCard").style("display","none");
     //  detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       $('#victims_nerdbox, #cboxContent').html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>" + "</div><div class='obitzLink' style='color:" + d.color + " !important;'><a href='" +  d.obituary + "' target='new_'>Read obituary</div>");
       $(".inline").colorbox({inline:true, width:"70%", height:"500px"});
     })
  .html(function (d,i){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
    records.innerHTML = i + 1;
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<div class='victimContent'><span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathDate'>Died: " + dateString + " in " + d.injury_city + "</div><div class='ender " + icon + "'></div>"; });
  }

}
else {

  if (year == "" || year == "2003") {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_icon == type; }))
  .enter()
  .append("div")
  .attr("class","victimCard inline")
  .attr("href","#victims_nerbox")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","transparent");
       d3.select(this).style("background-color","#aaa");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
     //  detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       $('#victims_nerdbox, #cboxContent').html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>" + "</div><div class='obitzLink' style='color:" + d.color + " !important;'><a href='" +  d.obituary + "' target='new_'>Read obituary</div>");
       $(".inline").colorbox({inline:true, width:"70%", height:"500px"});
     })
  .html(function (d){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<div class='victimContent'><span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathDate'>Died: " + dateString + " in " + d.injury_city + "</div><div class='ender " + icon + "'></div>"; });
}
  else {
  d3.select("#victims").selectAll("button")
  .data(data.Sheet1.filter(function(d){ return d.death_icon == type && d.death_year == year; }))
  .enter()
  .append("div")
  .attr("class","victimCard inline")
  .attr("href","#victims_nerbox")
  .attr("id", function (d){return d.death_county + "_" + d.record_no;} )
  .on("mousedown", function(d, i){
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "<img src='img/atv.png' />"; }
       if (d.death_icon == "grain bin/silo") { icon = "<img src='img/silo.png' />"; }
       if (d.death_icon == "skid loader") { icon = "<img src='img/skid.png' />"; }
       if (d.death_icon == "livestock") { icon = "<img src='img/livestock.png' />"; }
       if (d.death_icon == "environmental") { icon = "<img src='img/environmental.png' />"; }
       if (d.death_icon == "truck") { icon = "<img src='img/truck.png' />"; }
       if (d.death_icon == "tractor") { icon = "<img src='img/tractor.png' />"; }
       if (d.death_icon == "other") { icon = "<img src='img/other.png' />"; }
       d3.selectAll(".victimCard").style("background-color","#ddd");
       highlightDeath(deathsLayer,"" + d.victim_name + "");
       $(".barDiv_b").css("background-color","#transparent");
       d3.select(this).style("background-color","#aaa");
       // d3.selectAll(".victimCard").style("display","none");
      // detailsBox.style("display","block");
      // detailsBox.html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='deathIcon'>" + icon + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>")
       $('#victims_nerdbox, #cboxContent').html("<span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathMode'>Killed in " + d.death_icon + " accident</div><div class='deathDate'>Died on " + dateString + "</div><div class='howDied'>Died from " + d.cause_of_death + "</div><div class='details'>" + d.incident_description + "</div>" + "</div><div class='obitzLink' style='color:" + d.color + " !important;'><a href='#link' target='new_'>Read obituary</div>");
       $(".inline").colorbox({inline:true, width:"70%", height:"500px"});
     })
  .html(function (d){
       var icon = "<img src='img/other.png' />";
       if (d.death_icon == "ATV") { icon = "atvSwatch"; }
       if (d.death_icon == "grain bin/silo") { icon = "siloSwatch"; }
       if (d.death_icon == "skid loader") { icon = "skidSwatch"; }
       if (d.death_icon == "livestock") { icon = "livestockSwatch"; }
       if (d.death_icon == "environmental") { icon = "landscapeSwatch"; }
       if (d.death_icon == "truck") { icon = "truckSwatch"; }
       if (d.death_icon == "tractor") { icon = "tractorSwatch"; }
       if (d.death_icon == "other") { icon = "otherSwatch"; }
    var dateString = (new Date(d.date_of_death).getMonth() + 1) + "/" + (new Date(d.date_of_death).getDay() + 1) + "/" + new Date(d.date_of_death).getFullYear();
    return "<div class='victimContent'><span class='victimName'>" + d.victim_name + "</span> - <span class='victimAge'>" + d.victim_age + "</span><div class='deathDate'>Died: " + dateString + " in " + d.injury_city + "</div><div class='ender " + icon + "'></div>"; });
  }

}

}

//RESPONSIVE SVG
var aspect = 500 / 300, carto1 = $("#carto1 svg"), carto2 = $("#carto2 svg");
$(document).ready(function() { 
  var targetWidth = carto1.parent().width();  
  var targetHeight = carto1.parent().height();
  carto1.attr("width", targetWidth);   
  carto1.attr("height", targetHeight);  
  carto2.attr("width", targetWidth);   
  carto2.attr("height", targetHeight);
});
$(window).on("resize", function() {   
  var targetWidth = carto1.parent().width();  
  var targetHeight = carto1.parent().height();
  carto1.attr("width", targetWidth);   
  carto1.attr("height", targetHeight);  
  carto2.attr("width", targetWidth);   
  carto2.attr("height", targetHeight);
});

var cartogram1 = {
    margin: {
        top: 40,
        right: 160,
        bottom: 0,
        left: 10
    },

    selector: '#carto1 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = $("#carto1 svg").width() - self.margin.left - self.margin.right;
        self.height = $("#carto1 svg").height() - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .on('click', function(d) { 
              d3.selectAll("rect").attr('class', function(d) {
                return "faded " + d.color;
            }); 
              d3.select(this).attr('class', function(d) {
                return "selected " + d.color;
            }); 
              var chatter = document.getElementById('chatterBox');
              chatter.innerHTML = "<h2>" + d.state_full + "</h2><div><span class='stateData'>1992-2002 total farm deaths</span> : <span class='stateStat'>" + d.state_total_old + "</span></div><div><span class='stateData'>2003-2013 total farm deaths</span> : <span class='stateStat'>" + d.state_total_new + "</span></div><div><span class='stateData'>Percent change</span> : <span class='stateStat t" + d.color + "'>" + d.state_change + "</span></div>";
            });

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .on('click', function(d) { 
            d3.selectAll("rect").attr('class', function(d) {
                return "faded " + d.color;
            }); 
              d3.select(this.parentNode).select("rect").attr('class', function(d) {
                return "selected " + d.color;
            });
              var chatter = document.getElementById('chatterBox');
              chatter.innerHTML = "<h2>" + d.state_full + "</h2><div><span class='stateData'>1992-2002 total farm deaths</span> : <span class='stateStat'>" + d.state_total_old + "</span></div><div><span class='stateData'>2003-2013 total farm deaths</span> : <span class='stateStat'>" + d.state_total_new + "</span></div><div><span class='stateData'>Percent change</span> : <span class='stateStat t" + d.color + "'>" + d.state_change + "</span></div>";
             })
            .text(function(d) {
                return d.state_postal;
            });
    },

      state_pos_co: [{'state_full':'Michigan','state_postal':'MI','row':0,'column':0,'state_total_old':'102','state_total_new':'177','state_change':'+74%','color':'dq8'},
      {'state_full':'New Jersey','state_postal':'NJ','row':0,'column':1,'state_total_old':'8','state_total_new':'12','state_change':'+50%','color':'dq8'},
      {'state_full':'South Carolina','state_postal':'SC','row':0,'column':2,'state_total_old':'16','state_total_new':'22','state_change':'+38%','color':'dq7'},
      {'state_full':'Minnesota','state_postal':'MN','row':0,'column':3,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'dq7'},
      {'state_full':'Arizona','state_postal':'AZ','row':0,'column':4,'state_total_old':'14','state_total_new':'19','state_change':'+36%','color':'dq7'},
      {'state_full':'North Dakota','state_postal':'ND','row':0,'column':5,'state_total_old':'84','state_total_new':'114','state_change':'+36%','color':'dq7'},
      {'state_full':'Iowa','state_postal':'IA','row':0,'column':6,'state_total_old':'228','state_total_new':'293','state_change':'+29%','color':'dq6'},
      {'state_full':'Oregon','state_postal':'OR','row':0,'column':7,'state_total_old':'40','state_total_new':'48','state_change':'+20%','color':'dq6'},
      {'state_full':'South Dakota','state_postal':'SD','row':0,'column':8,'state_total_old':'88','state_total_new':'103','state_change':'+17%','color':'dq5'},
      {'state_full':'Missouri','state_postal':'MO','row':0,'column':9,'state_total_old':'264','state_total_new':'276','state_change':'+5%','color':'dq5'},
      {'state_full':'West Virginia','state_postal':'WV','row':0,'column':10,'state_total_old':'9','state_total_new':'9','state_change':'0%','color':'mid'},
      {'state_full':'Indiana','state_postal':'IN','row':1,'column':0,'state_total_old':'216','state_total_new':'215','state_change':'0%','color':'mid'},
      {'state_full':'Kansas','state_postal':'KS','row':1,'column':1,'state_total_old':'215','state_total_new':'203','state_change':'-6%','color':'dq4'},
      {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'131','state_change':'-10%','color':'dq4'},
      {'state_full':'Virginia','state_postal':'VA','row':1,'column':3,'state_total_old':'130','state_total_new':'117','state_change':'-10%','color':'dq4'},
      {'state_full':'Nebraska','state_postal':'NE','row':1,'column':4,'state_total_old':'199','state_total_new':'177','state_change':'-11%','color':'dq4'},
      {'state_full':'Illinois','state_postal':'IL','row':1,'column':5,'state_total_old':'251','state_total_new':'217','state_change':'-11%','color':'dq4'},
      {'state_full':'Florida','state_postal':'FL','row':1,'column':6,'state_total_old':'150','state_total_new':'129','state_change':'-14%','color':'dq4'},
      {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':7,'state_total_old':'279','state_total_new':'238','state_change':'-15%','color':'dq4'},
      {'state_full':'Ohio','state_postal':'OH','row':1,'column':8,'state_total_old':'258','state_total_new':'211','state_change':'-18%','color':'dq4'},
      {'state_full':'Idaho','state_postal':'ID','row':1,'column':9,'state_total_old':'71','state_total_new':'56','state_change':'-21%','color':'dq3'},
      {'state_full':'Wyoming','state_postal':'WY','row':1,'column':10,'state_total_old':'33','state_total_new':'26','state_change':'-21%','color':'dq3'},
      {'state_full':'California','state_postal':'CA','row':2,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-28%','color':'dq3'},
      {'state_full':'Texas','state_postal':'TX','row':2,'column':1,'state_total_old':'223','state_total_new':'158','state_change':'-29%','color':'dq3'},
      {'state_full':'Oklahoma','state_postal':'OK','row':2,'column':2,'state_total_old':'46','state_total_new':'32','state_change':'-30%','color':'dq3'},
      {'state_full':'Colorado','state_postal':'CO','row':2,'column':3,'state_total_old':'124','state_total_new':'83','state_change':'-33%','color':'dq3'},
      {'state_full':'Arkansas','state_postal':'AR','row':2,'column':4,'state_total_old':'36','state_total_new':'24','state_change':'-33%','color':'dq3'},
      {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':5,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'dq3'},
      {'state_full':'North Carolina','state_postal':'NC','row':2,'column':6,'state_total_old':'156','state_total_new':'101','state_change':'-35%','color':'dq3'},
      {'state_full':'Georgia','state_postal':'GA','row':2,'column':7,'state_total_old':'77','state_total_new':'48','state_change':'-38%','color':'dq3'},
      {'state_full':'New York','state_postal':'NY','row':2,'column':8,'state_total_old':'203','state_total_new':'125','state_change':'-38%','color':'dq3'},
      {'state_full':'Washington','state_postal':'WA','row':2,'column':9,'state_total_old':'88','state_total_new':'54','state_change':'-39%','color':'dq3'},
      {'state_full':'Tennessee','state_postal':'TN','row':2,'column':10,'state_total_old':'244','state_total_new':'142','state_change':'-42%','color':'dq2'},
      {'state_full':'Maryland','state_postal':'MD','row':3,'column':0,'state_total_old':'26','state_total_new':'14','state_change':'-46%','color':'dq2'},
      {'state_full':'Kentucky','state_postal':'KY','row':3,'column':1,'state_total_old':'308','state_total_new':'158','state_change':'-49%','color':'dq2'},
      {'state_full':'Louisiana','state_postal':'LA','row':3,'column':2,'state_total_old':'30','state_total_new':'14','state_change':'-53%','color':'dq1'},
      {'state_full':'Mississippi','state_postal':'MS','row':3,'column':3,'state_total_old':'65','state_total_new':'28','state_change':'-57%','color':'dq1'},
      {'state_full':'Vermont','state_postal':'VT','row':3,'column':4,'state_total_old':'7','state_total_new':'3','state_change':'-57%','color':'dq1'},
      {'state_full':'Alabama','state_postal':'AL','row':3,'column':5,'state_total_old':'32','state_total_new':'12','state_change':'-63%','color':'dq1'},
      {'state_full':'Utah','state_postal':'UT','row':3,'column':6,'state_total_old':'24','state_total_new':'8','state_change':'-67%','color':'dq1'},
      {'state_full':'Delaware','state_postal':'AL','row':3,'column':7,'state_total_old':'3','state_total_new':'0','state_change':'-100%','color':'dq1'},
      {'state_full':'New Mexico','state_postal':'NM','row':3,'column':8,'state_total_old':'24','state_total_new':'0','state_change':'-100%','color':'dq1'},
      {'state_full':'Connecticut','state_postal':'CT','row':3,'column':9,'state_total_old':'0','state_total_new':'2','state_change':'Insufficient data','color':'none'},
      {'state_full':'Hawaii','state_postal':'HI','row':3,'column':10,'state_total_old':'0','state_total_new':'1','state_change':'Insufficient data','color':'none'},
      {'state_full':'Maine','state_postal':'ME','row':4,'column':0,'state_total_old':'0','state_total_new':'7','state_change':'Insufficient data','color':'none'},
      {'state_full':'Massachusetts','state_postal':'MA','row':4,'column':1,'state_total_old':'0','state_total_new':'5','state_change':'Insufficient data','color':'none'},
      {'state_full':'Nevada','state_postal':'NV','row':4,'column':2,'state_total_old':'0','state_total_new':'3','state_change':'Insufficient data','color':'none'},
      {'state_full':'New Hampshire','state_postal':'NH','row':4,'column':3,'state_total_old':'0','state_total_new':'1','state_change':'Insufficient data','color':'none'},
      {'state_full':'Alaska','state_postal':'AK','row':4,'column':4,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
      {'state_full':'Rhode Island','state_postal':'RI','row':4,'column':5,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
      {'state_full':'D.C.','state_postal':'DC','row':4,'column':6,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'}]

      };

var cartogram2 = {
    margin: {
        top: 40,
        right: 140,
        bottom: 0,
        left: 60
    },

    selector: '#carto2 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = $("#carto2 svg").width() - self.margin.left - self.margin.right;
        self.height = $("#carto2 svg").height() - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .on('click', function(d) {
              d3.selectAll("rect").attr('class', function(d) {
                return "faded " + d.color;
            }); 
              d3.select(this).attr('class', function(d) {
                return "selected " + d.color;
            });
              var chatter = document.getElementById('chatterBox');
              chatter.innerHTML = "<h2>" + d.state_full + "</h2><div><span class='stateData'>1992-2002 total farm deaths</span> : <span class='stateStat'>" + d.state_total_old + "</span></div><div><span class='stateData'>2003-2013 total farm deaths</span> : <span class='stateStat'>" + d.state_total_new + "</span></div><div><span class='stateData'>Percent change</span> : <span class='stateStat t" + d.color + "'>" + d.state_change + "</span></div>";
             });

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .on('click', function(d) { 
             d3.selectAll("rect").attr('class', function(d) {
                return "faded " + d.color;
            }); 
              d3.select(this.parentNode).select("rect").attr('class', function(d) {
                return "selected " + d.color;
            });
              var chatter = document.getElementById('chatterBox');
              chatter.innerHTML = "<h2>" + d.state_full + "</h2><div><span class='stateData'>1992-2002 total farm deaths</span> : <span class='stateStat'>" + d.state_total_old + "</span></div><div><span class='stateData'>2003-2013 total farm deaths</span> : <span class='stateStat'>" + d.state_total_new + "</span></div><div><span class='stateData'>Percent change</span> : <span class='stateStat t" + d.color + "'>" + d.state_change + "</span></div>";
             })
            .text(function(d) {
                return d.state_postal;
            });
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total_old':'32','state_total_new':'12','state_change':'-63%','color':'dq1'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total_old':'14','state_total_new':'19','state_change':'+36%','color':'dq7'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total_old':'36','state_total_new':'24','state_change':'-33%','color':'dq3'},
        {'state_full':'California','state_postal':'CA','row':3,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-25%','color':'dq3'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total_old':'124','state_total_new':'83','state_change':'-33%','color':'dq3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total_old':'0','state_total_new':'2','state_change':'Insufficient data','color':'none'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total_old':'3','state_total_new':'3','state_change':'-100%','color':'dq1'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total_old':'150','state_total_new':'129','state_change':'-14%','color':'dq4'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total_old':'77','state_total_new':'48','state_change':'-38%','color':'dq3'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total_old':'0','state_total_new':'1','state_change':'Insufficient data','color':'none'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total_old':'71','state_total_new':'56','state_change':'-21%','color':'dq3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total_old':'251','state_total_new':'217','state_change':'-14%','color':'dq4'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total_old':'216','state_total_new':'215','state_change':'0%','color':'mid'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total_old':'228','state_total_new':'293','state_change':'+29%','color':'dq6'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total_old':'215','state_total_new':'203','state_change':'-6%','color':'dq4'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total_old':'308','state_total_new':'158','state_change':'-49%','color':'dq2'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total_old':'30','state_total_new':'14','state_change':'-53%','color':'dq1'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total_old':'0','state_total_new':'7','state_change':'Insufficient data','color':'none'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total_old':'26','state_total_new':'14','state_change':'-46%','color':'dq2'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total_old':'0','state_total_new':'5','state_change':'Insufficient data','color':'none'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total_old':'102','state_total_new':'177','state_change':'+74%','color':'dq8'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'dq7'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total_old':'65','state_total_new':'28','state_change':'-57%','color':'dq1'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total_old':'264','state_total_new':'276','state_change':'+5%','color':'dq5'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'131','state_change':'-10%','color':'dq4'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total_old':'199','state_total_new':'177','state_change':'-11%','color':'dq4'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total_old':'0','state_total_new':'3','state_change':'Insufficient data','color':'none'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total_old':'0','state_total_new':'1','state_change':'Insufficient data','color':'none'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total_old':'8','state_total_new':'12','state_change':'+50%','color':'dq8'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total_old':'24','state_total_new':'0','state_change':'-100%','color':'dq1'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total_old':'203','state_total_new':'125','state_change':'-38%','color':'dq3'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total_old':'156','state_total_new':'101','state_change':'-35%','color':'dq3'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total_old':'84','state_total_new':'114','state_change':'+36%','color':'dq7'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total_old':'258','state_total_new':'211','state_change':'-18%','color':'dq4'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total_old':'46','state_total_new':'32','state_change':'-30%','color':'dq3'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total_old':'40','state_total_new':'48','state_change':'+20%','color':'dq6'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'dq3'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'none'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total_old':'16','state_total_new':'22','state_change':'+38%','color':'dq7'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total_old':'88','state_total_new':'103','state_change':'+17%','color':'dq6'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total_old':'244','state_total_new':'142','state_change':'-42%','color':'dq2'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total_old':'223','state_total_new':'158','state_change':'+29%','color':'dq3'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total_old':'24','state_total_new':'8','state_change':'-67%','color':'dq1'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total_old':'7','state_total_new':'3','state_change':'-57%','color':'dq1'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total_old':'130','state_total_new':'117','state_change':'-10%','color':'dq4'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total_old':'88','state_total_new':'54','state_change':'-39%','color':'dq3'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total_old':'9','state_total_new':'9','state_change':'0%','color':'mid'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total_old':'279','state_total_new':'238','state_change':'-15%','color':'dq4'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total_old':'33','state_total_new':'26','state_change':'-21%','color':'dq3'}]

};

//STATE RANKING CARTOGRAMS
$("#carto1").hide();

$(document).ready(function() {
  $("#cartoMap").css("background-color","#333");
  $("#cartoMap").css("color","#fff");

  $( ".cartoButton" ).click(function() {
  $(".cartoButton").css("background-color","#ddd");
  $(".cartoButton").css("color","#000");
  $(this).css("background-color","#333");
  $(this).css("color","#fff");
  var chatter = document.getElementById('chatterBox');
  chatter.innerHTML = "Select state to see numbers";
  });   
$( "#cartoMap" ).click(function() {
  $("#carto1").hide();
  $("#carto2").show();
    d3.selectAll("rect").attr('class', function(d) {
         return d.color;
      }); 
  });
$( "#cartoRank" ).click(function() {
  $("#carto2").hide();
  $("#carto1").show();
      d3.selectAll("rect").attr('class', function(d) {
         return d.color;
      });
  });

    cartogram1.init();
    cartogram2.init();
});
});
},{}]},{},[1])