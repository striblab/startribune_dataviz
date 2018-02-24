$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected == "all"){
$(".slide").show();
}
else if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

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

  if (d.IndexScore >= 300) { color = "#118241"; }
  else if (d.IndexScore >= 240) { color = "#299e3d"; }
  else if (d.IndexScore >= 180) { color = "#5bbf48"; }
  else if (d.IndexScore >= 120) { color = "#9ee384"; }
  else if (d.IndexScore >= 0) { color = "#c7e5b5"; }

  return color;

  })
  .style('color',function(d) { 

    var color = "#000000";

  if (d.IndexScore >= 300) { color = "#ffffff"; }

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

    // if (checked){
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    // $('.row').each(function(){
    //    if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
    //        $(this).hide();
    //    }
    //  });
    // } 
    // else {
    // var txt = $('#filter_box').val();
    // $('.row').each(function(){
    //    if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) && ($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1)){
    //        $(this).show();
    //    }
    // });     
    // }
});

$(".th2").click(function() {
  $(".th2").removeClass("selected3");
  $(this).addClass("selected3");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected3")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#cities",null,data,$(this).attr("data"),sorted);
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
    map.jumpTo({ center: [-93.202515, 44.969656], zoom: 11.5, pitch:0, bearing:0 });
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

$(".zoom").click(function() {
  map.jumpTo({ center: [-93.28469849, 45.01832962], zoom: 7.8, pitch:0, bearing:0 });
  $('#cities').animate({scrollTop : 0},800);
  $(".row").removeClass("selected");
  $(".row:contains('Richfield')").addClass("selected");
  metricLoad("Richfield");
  popup.remove();
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
                [50, "#c7e5b5"],
                [120, "#9ee384"],
                [180, "#5bbf48"],
                [240, "#299e3d"],
                [300, "#118241"]
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
                [50, "#c7e5b5"],
                [120, "#9ee384"],
                [180, "#5bbf48"],
                [240, "#299e3d"],
                [300, "#118241"]            
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
                [50, "#c7e5b5"],
                [120, "#9ee384"],
                [180, "#5bbf48"],
                [240, "#299e3d"],
                [300, "#118241"]
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
                [50, "#c7e5b5"],
                [120, "#9ee384"],
                [180, "#5bbf48"],
                [240, "#299e3d"],
                [300, "#118241"]
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

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

$(".row").on("mousedown click", function(e) {
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
  if ($(this).find(".name").text().indexOf("(MPLS)") != -1 || $(this).find(".name").text().indexOf("(STP)") != -1) { map.jumpTo({ center: [longitude, latitude], zoom: 13.5, pitch: pitch, bearing: bearing }); }
  else { map.jumpTo({ center: [longitude, latitude], zoom: 10, pitch: pitch, bearing: bearing }); }
  metricLoad($(this).find(".name").text());

  popup.remove();
        var features = map.queryRenderedFeatures(e.point, { layers: ['mncities-layer'] });
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
        .setHTML("&nbsp;")
        .addTo(map);
});


});

function reset(){
  map.jumpTo({ center: [-93.28469849, 45.01832962], zoom: 7.8, pitch:0, bearing:0 });
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
    else if (cityData[0].IndexScore >= 50) { color = "#fee391"; }

    
    // $("#districtName").css('background-color',color);
    // $("#indexRow").css('border',"3px solid " + color);
    
    $("#days").html(cityData[0].DaysMarket);
    $("#daysC").html(cityData[0].diff);
    $("#change").html(d3.format("+%")(cityData[0].PctChgfromAvg));
    $("#distressed").html(d3.format("%")(cityData[0].PctDistressed));
    $("#ppsf").html(d3.format("%")(cityData[0].PctOrigPrice));

    // $("#income").html(d3.format("$,.0f")(cityData[0].MedianHHincome));
    // $("#homes").html(d3.format("%")(cityData[0].PctSingleFamilyUnits));
    // $("#apartments").html(d3.format("%")(cityData[0].PctLargeApartmentBldgs));
    // $("#kids").html(d3.format("%")(cityData[0].PctKids));
    // $("#renters").html(d3.format("%")(cityData[0].PctRenters));

    chart.load({
                columns: [
                    ['x', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01'],
                    ['PPSF', cityData[0].PPSF2003, cityData[0].PPSF2004, cityData[0].PPSF2005, cityData[0].PPSF2006, cityData[0].PPSF2007, cityData[0].PPSF2008, cityData[0].PPSF2009, cityData[0].PPSF2010, cityData[0].PPSF2011, cityData[0].PPSF2012, cityData[0].PPSF2013, cityData[0].PPSF2014, cityData[0].PPSF2015, cityData[0].PPSF2016, cityData[0].PPSF2017],
                ]
    })

}


function chartHighlights(){

  $("#chartHead").html('<div class="cell stretch th" data="name">Community</div> \
      <div class="cell th selected" data="index">Housing market index score</div> \
      <div class="cell th" data="market">average days on market</div> \
      <div class="cell th" data="change">% change price per sq. ft.*</div> \
      <div class="cell th" data="distressed">% distressed properties</div> \
      <div class="cell th" data="price">change in market days</div> \
      <div class="cell th hideme" data="family">% single family</div> \
      <div class="cell th hideme" data="renters">% renters</div> \
      <div class="cell th hideme" data="kids">% kids</div> \
      <div class="cell th hideme" data="income">median income</div>');

  d3.select("#chartHighlights").selectAll(".listrow")
    .data(data.filter(function(d){ return d.IndexScore >= 250; }).sort(function(a,b) { return b.IndexScore - a.IndexScore; })).enter().append("div")
    .attr("class",function(d) { return "listrow "; })
    .style('background-color',function(d) { 

    //   var color = "#888888";

    // if (d.IndexScore >= 300) { color = "#993404"; }
    // else if (d.IndexScore >= 240) { color = "#d95f0e"; }
    // else if (d.IndexScore >= 180) { color = "#fe9929"; }
    // else if (d.IndexScore >= 120) { color = "#fec44f"; }
    // else if (d.IndexScore >= 0) { color = "#fee391"; }

    // return color;

    })
    .html(function(d,i){ 

      var class1 = "";
      var class2 = "";
      var class3 = "";
      var class4 = "";
      var class5 = "";
      var class6 = "";
      var class7 = "";
      var class8 = "";
      var class9 = "";

      if (d.IndexScore >= 300) { class1 = "orange5"; }
      else if (d.IndexScore >= 240) { class1 = "orange4"; }
      else if (d.IndexScore >= 180) { class1 = "orange3"; }
      else if (d.IndexScore >= 120) { class1 = "orange2"; }
      else if (d.IndexScore >= 0) { class1 = "orange1"; }

      if (d.DaysMarket >= 120) { class2 = "orange1"; }
      else if (d.DaysMarket >= 90) { class2 = "orange2"; }
      else if (d.DaysMarket >= 60) { class2 = "orange3"; }
      else if (d.DaysMarket >= 30) { class2 = "orange4"; }
      else if (d.DaysMarket >= 0) { class2 = "orange5"; }

      if (d.PctChgfromAvg >= 0.20) { class3 = "orange5"; }
      else if (d.PctChgfromAvg >= 0.15) { class3 = "orange4"; }
      else if (d.PctChgfromAvg >= 0.10) { class3 = "orange3"; }
      else if (d.PctChgfromAvg >= 0.05) { class3 = "orange2"; }
      else if (d.PctChgfromAvg >= 0) { class3 = "orange1"; }

      if (d.PctDistressed >= 0.08) { class4 = "orange5"; }
      else if (d.PctDistressed >= 0.06) { class4 = "orange4"; }
      else if (d.PctDistressed >= 0.04) { class4 = "orange3"; }
      else if (d.PctDistressed >= 0.02) { class4 = "orange2"; }
      else if (d.PctDistressed >= 0) { class4 = "orange1"; }

      if (d.diff >= 20) { class5 = "orange1"; }
      else if (d.diff >= 10) { class5 = "orange2"; }
      else if (d.diff >= 0) { class5 = "orange3"; }
      else if (d.diff <= -10) { class5 = "orange5"; }
      else if (d.diff <= 0) { class5 = "orange4"; }

      if (d.PctSingleFamilyUnits >= 0.9) { class6 = "orange5"; }
      else if (d.PctSingleFamilyUnits >= 0.7) { class6 = "orange4"; }
      else if (d.PctSingleFamilyUnits >= 0.5) { class6 = "orange3"; }
      else if (d.PctSingleFamilyUnits >= 0.3) { class6 = "orange2"; }
      else if (d.PctSingleFamilyUnits >= 0) { class6 = "orange1"; }

      if (d.PctRenters >= 0.4) { class7 = "orange5"; }
      else if (d.PctRenters >= 0.3) { class7 = "orange4"; }
      else if (d.PctRenters >= 0.2) { class7 = "orange3"; }
      else if (d.PctRenters >= 0.1) { class7 = "orange2"; }
      else if (d.PctRenters >= 0) { class7 = "orange1"; }

      if (d.PctKids >= 0.4) { class8 = "orange5"; }
      else if (d.PctKids >= 0.3) { class8 = "orange4"; }
      else if (d.PctKids >= 0.2) { class8 = "orange3"; }
      else if (d.PctKids >= 0.1) { class8 = "orange2"; }
      else if (d.PctKids >= 0) { class8 = "orange1"; }

      if (d.MedianHHincome >= 110000) { class9 = "orange5"; }
      else if (d.MedianHHincome >= 90000) { class9 = "orange4"; }
      else if (d.MedianHHincome >= 70000) { class9 = "orange3"; }
      else if (d.MedianHHincome >= 50000) { class9 = "orange2"; }
      else if (d.MedianHHincome >= 30000) { class9 = "orange1"; }

      return '<div class="cell stretch">' + d.name + '</div> \
      <div class="cell ' + class1 + ' index"><span class="value index">' + d.IndexScore + '</span></div> \
      <div class="cell ' + class2 + ' "><span class="value">' + d.DaysMarket + '</span></div> \
      <div class="cell ' + class3 + '"><span class="value">' + d3.format("+%")(d.PctChgfromAvg) + '</span></div> \
      <div class="cell ' + class4 + '"><span class="value">' + d3.format("+%.0f")(d.PctDistressed) + '</span></div> \
      <div class="cell ' + class5 + '"><span class="value">' + d3.format("+.0f")(d.diff) + '</span></div> \
      <div class="cell ' + class6 + ' hideme"><span class="value">' + d3.format("%.0f")(d.PctSingleFamilyUnits) + '</span></div> \
      <div class="cell ' + class7 + ' hideme"><span class="value">' + d3.format("%.0f")(d.PctRenters) + '</span></div> \
      <div class="cell ' + class8 + ' hideme"><span class="value">' + d3.format("%.0f")(d.PctKids) + '</span></div> \
      <div class="cell ' + class9 + ' hideme"><span class="value">' + d3.format("$,")(d.MedianHHincome) + '</span></div>';
    });

    $(".th").click(function() {
      $(".th").removeClass("selected");
      $(this).addClass("selected");
      if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
      else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
      tableSort2("#chartHighlights",data,$(this).attr("data"),sorted);
    });

    // $(".cell").mouseover(function() {
    //   $(".value").hide();
    //   $(this).find(".value").show();
    // });

    $(".stretch").mouseover(function() {
      $(".value").hide();
      $(this).parent().find(".value").show();
    });


}

chartHighlights();

function tableSort2(container,data,column,sorted){
   
  d3.select(container).selectAll(".listrow").sort(function(a, b) {
          if (column == "name") { 
        if (sorted == "descend") { return d3.descending(a.name, b.name); }
        if (sorted == "ascend") { return d3.ascending(a.name, b.name); }
     }

          if (column == "index") { 
        if (sorted == "descend") { return d3.descending(a.IndexScore, b.IndexScore); }
        if (sorted == "ascend") { return d3.ascending(a.IndexScore, b.IndexScore); }
     }

          if (column == "market") { 
        if (sorted == "descend") { return d3.descending(a.DaysMarket, b.DaysMarket); }
        if (sorted == "ascend") { return d3.ascending(a.DaysMarket, b.DaysMarket); }
     }
          if (column == "change") { 
        if (sorted == "descend") { return d3.descending(a.PctChgfromAvg, b.PctChgfromAvg); }
        if (sorted == "ascend") { return d3.ascending(a.PctChgfromAvg, b.PctChgfromAvg); }
     }
          if (column == "distressed") { 
        if (sorted == "descend") { return d3.descending(a.PctDistressed, b.PctDistressed); }
        if (sorted == "ascend") { return d3.ascending(a.PctDistressed, b.PctDistressed); }
     }
          if (column == "price") { 
        if (sorted == "descend") { return d3.descending(a.diff, b.diff); }
        if (sorted == "ascend") { return d3.ascending(a.diff, b.diff); }
     }
          if (column == "family") { 
        if (sorted == "descend") { return d3.descending(a.PctSingleFamilyUnits, b.PctSingleFamilyUnits); }
        if (sorted == "ascend") { return d3.ascending(a.PctSingleFamilyUnits, b.PctSingleFamilyUnits); }
     }
          if (column == "renters") { 
        if (sorted == "descend") { return d3.descending(a.PctRenters, b.PctRenters); }
        if (sorted == "ascend") { return d3.ascending(a.PctRenters, b.PctRenters); }
     }
          if (column == "kids") { 
        if (sorted == "descend") { return d3.descending(a.PctKids, b.PctKids); }
        if (sorted == "ascend") { return d3.ascending(a.PctKids, b.PctKids); }
     }
          if (column == "income") { 
        if (sorted == "descend") { return d3.descending(a.MedianHHincome, b.MedianHHincome); }
        if (sorted == "ascend") { return d3.ascending(a.MedianHHincome, b.MedianHHincome); }
     }
    }).transition().duration(500);
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
                    ['x', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01'],
                    ['PPSF', cityData[0].PPSF2003, cityData[0].PPSF2004, cityData[0].PPSF2005, cityData[0].PPSF2006, cityData[0].PPSF2007, cityData[0].PPSF2008, cityData[0].PPSF2009, cityData[0].PPSF2010, cityData[0].PPSF2011, cityData[0].PPSF2012, cityData[0].PPSF2013, cityData[0].PPSF2014, cityData[0].PPSF2015, cityData[0].PPSF2016, cityData[0].PPSF2016],
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
                    padding: {right: 0, left: 0},
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


//charts

function chartMarket(){

      var  padding = {
            top: 40,
            right: 20,
            bottom: 30,
            left: 60,
        };

var cities = ["Richfield","Mounds View","Champlin","Brooklyn Center","Fridley","Robbinsdale","New Brighton","Columbia Heights","Dayton","Crystal","Albertville","New Hope","Coon Rapids","Carver","St. Anthony","Minneapolis","Savage","Apple Valley","Cottage Grove","Circle Pines","Bloomington","Ramsey","St. Louis Park","Roseville","Big Lake","Eagan","North St. Paul","Isanti","Brooklyn Park","Inver Grove Heights","Otsego","Little Canada","St. Michael","Monticello","South St. Paul","Shoreview","Somerset","Hugo","Farmington","Jordan","Elk River","Rosemount","Golden Valley","Montrose","Blaine","Waconia","Maplewood","Maple Grove","Wyoming","Oakdale","White Bear Lake","Shakopee","Wayzata","St. Francis","St. Paul","Vadnais Heights","West St. Paul","Lindstrom","Andover","Woodbury","Burnsville","New Richmond","Delano","Anoka","Lakeville","Cambridge","Chaska","Zimmerman","Chanhassen","North Branch","Hopkins","Mahtomedi","Belle Plaine","Buffalo","River Falls","Hudson","East Bethel","Rogers","Minnetonka","Annandale","Forest Lake","Victoria","Plymouth","Lake Elmo","Oak Grove","Stillwater","Mound","Lino Lakes","Prior Lake","Hastings","Eden Prairie","Shorewood","Edina","North Oaks","Princeton","Mendota Heights","Becker","Elko New Market","Medina","Chisago City","Ham Lake","Orono","Minnetrista"]

var chart = c3.generate({
    bindto: '#chartMarket',
    padding: padding,
    data: {
        xs: {
          DaysMarket15: 'cities3',
          DaysMarket16: 'cities',
          DaysMarket17: 'cities2'  
        },
        // iris data from R
        columns: [
            // ["cities3",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            // ["DaysMarket15",28,36.5,34.5,34,36,43,41,39.5,56,40,38,34,33,50.5,29,35,42,36,38,37,34,41,38,38,39,30,34,37,34.5,43,30,55,45,42,43,40,54,41,39,68,40,41,47,45,33,48,47,40,38,34,34,36,79.5,41.5,42,44,38,57,36.5,39.5,35,70,27.5,32,40.5,48,43,48,44,41,38,63,41.5,47,63,60,41.5,46,46,89.5,56,47.5,40,56,50,55,63,36,51.5,47,50,63,55.5,67,63,49.5,49,46,72.5,40,53,119,87.5],
            ["cities",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            ["DaysMarket16",40,49,48,47,48,58,52,53,81,46,56,48,46,58,60,54,53,50,51,51,52,55,48,63,59,52,54,56,51,55,50,79,65,55,51,53,87,62,51,81,60,56,71,55,56,64,62,61,70,48,50,59,137,63,63,57,62,93,52,57,61,112,77,54,60,61,68,67,75,56,51,71,81,66,119,96,75,58,78,104,82,111,69,69,85,86,96,69,73,65,74,124,89,158,91,74,75,89,119,72,70,128,137],
            ["cities2",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            ["DaysMarket17",29,37,43,35,37,37,37,37,65,36,42,42,36,50,45,43,47,41,39,36,41,45,38,43,49,41,39,72,49,44,46,55,52,45,43,45,82,51,50,56,51,46,63,49,50,53,49,46,47,43,43,47,144,56,52,52,46,76,61,54,44,89,74,49,59,62,55,59,55,61,41,76,58,56,94,88,70,56,59,94,70,87,60,88,75,74,77,63,62,52,68,110,93,135,61,78,64,73,138,100,73,134,120]
        ],
        type: 'scatter',
        colors: {
            'DaysMarket15': '#857AAA',
            'DaysMarket16': '#271D42',
            'DaysMarket17': '#299e3d'
        },
    },
            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
    axis: {
        x: {
            // label: 'Sepal.Width',
            show: false,
            
            tick: {
                fit: false
            },
                height:60
        },
      y: {
            max: 160,
            min: 0,
            padding: {bottom: 0, top: 0, right: 0, left: 0},
            label: {
                text: '⬅ Average days on market',
                position: 'outer-center'
            },
            // tick: {
            //  format: function (d) {
            //         return cities[d];
            //     },
            //   values: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            // }
        }
    }
});
}

chartMarket();

