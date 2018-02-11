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
  else if (d.IndexScore >= 240) { color = "#d95f0e"; }
  else if (d.IndexScore >= 180) { color = "#fe9929"; }
  else if (d.IndexScore >= 120) { color = "#fec44f"; }
  else if (d.IndexScore >= 0) { color = "#fee391"; }

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
  if ($(this).find(".name").text().indexOf("(MPLS)") != -1 || $(this).find(".name").text().indexOf("(STP)") != -1) { map.jumpTo({ center: [longitude, latitude], zoom: 13.5, pitch: pitch, bearing: bearing }); }
  else { map.jumpTo({ center: [longitude, latitude], zoom: 10, pitch: pitch, bearing: bearing }); }
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
                [50, "#fee391"],
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
                [50, "#fee391"],
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
                [50, "#fee391"],
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
                [50, "#fee391"],
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


function chartHighlights(city){

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
    
    // $("#days").html(cityData[0].DaysMarket);
    // $("#change").html(d3.format("+%")(cityData[0].PctChgfromAvg));
    // $("#distressed").html(d3.format("%")(cityData[0].PctDistressed));
    // $("#ppsf").html(d3.format("%")(cityData[0].PctOrigPrice));

    $(".income").html(d3.format("$,.0f")(cityData[0].MedianHHincome));
    $(".homes").html(d3.format("%")(cityData[0].PctSingleFamilyUnits));
    $(".apartments").html(d3.format("%")(cityData[0].PctLargeApartmentBldgs));
    $(".kids").html(d3.format("%")(cityData[0].PctKids));
    $(".renters").html(d3.format("%")(cityData[0].PctRenters));

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
            right: 0,
            bottom: 30,
            left: 0,
        };

var cities = ["Richfield","Mounds View","Champlin","Brooklyn Center","Fridley","Robbinsdale","New Brighton","Columbia Heights","Dayton","Crystal","Albertville","New Hope","Coon Rapids","Carver","St. Anthony","Minneapolis","Savage","Apple Valley","Cottage Grove","Circle Pines","Bloomington","Ramsey","St. Louis Park","Roseville","Big Lake","Eagan","North St. Paul","Isanti","Brooklyn Park","Inver Grove Heights","Otsego","Little Canada","St. Michael","Monticello","South St. Paul","Shoreview","Somerset","Hugo","Farmington","Jordan","Elk River","Rosemount","Golden Valley","Montrose","Blaine","Waconia","Maplewood","Maple Grove","Wyoming","Oakdale","White Bear Lake","Shakopee","Wayzata","St. Francis","St. Paul","Vadnais Heights","West St. Paul","Lindstrom","Andover","Woodbury","Burnsville","New Richmond","Delano","Anoka","Lakeville","Cambridge","Chaska","Zimmerman","Chanhassen","North Branch","Hopkins","Mahtomedi","Belle Plaine","Buffalo","River Falls","Hudson","East Bethel","Rogers","Minnetonka","Annandale","Forest Lake","Victoria","Plymouth","Lake Elmo","Oak Grove","Stillwater","Mound","Lino Lakes","Prior Lake","Hastings","Eden Prairie","Shorewood","Edina","North Oaks","Princeton","Mendota Heights","Becker","Elko New Market","Medina","Chisago City","Ham Lake","Orono","Minnetrista"]

var chart = c3.generate({
    bindto: '#chartMarket',
    padding: padding,
    data: {
        xs: {
            cities2: 'DaysMarket17',
            cities: 'DaysMarket16',
        },
        // iris data from R
        columns: [
            ["cities",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            ["DaysMarket16",40,49,48,47,48,58,52,53,81,46,56,48,46,58,60,54,53,50,51,51,52,55,48,63,59,52,54,56,51,55,50,79,65,55,51,53,87,62,51,81,60,56,71,55,56,64,62,61,70,48,50,59,137,63,63,57,62,93,52,57,61,112,77,54,60,61,68,67,75,56,51,71,81,66,119,96,75,58,78,104,82,111,69,69,85,86,96,69,73,65,74,124,89,158,91,74,75,89,119,72,70,128,137],
            ["cities2",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            ["DaysMarket17",29,37,43,35,37,37,37,37,65,36,42,42,36,50,45,43,47,41,39,36,41,45,38,43,49,41,39,72,49,44,46,55,52,45,43,45,82,51,50,56,51,46,63,49,50,53,49,46,47,43,43,47,144,56,52,52,46,76,61,54,44,89,74,49,59,62,55,59,55,61,41,76,58,56,94,88,70,56,59,94,70,87,60,88,75,74,77,63,62,52,68,110,93,135,61,78,64,73,138,100,73,134,120]
        ],
        type: 'scatter'
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
            padding: {right: 0, left: 0},
            label: {
                text: 'Average days on market',
                position: 'outer-center'
            },
            tick: {
                fit: false
            },
                height:60
        },
      y: {
            max: 160,
            min: -2,
            show: false,
            padding: {bottom: 0, top: 0},
            tick: {
             format: function (d) {
                    return cities[d];
                },
              values: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104],
            }
        }
    }
});
}

chartMarket();

