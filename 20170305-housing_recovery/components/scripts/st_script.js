d3.json("./shapefiles/mn_places.json", function(error, mncities) {
d3.json("./shapefiles/wi_places.json", function(error, wicities) {
d3.json("./shapefiles/mpls_nb.json", function(error, mplsnb) {
d3.json("./shapefiles/stp_nb.json", function(error, stpnb) {
d3.json('./data/cities.json', function(error, dataLoad) {

var data = dataLoad.cities;

d3.select("#cities").selectAll(".row")
  .data(data.sort(function(a,b) { return b.IndexScore - a.IndexScore; })).enter().append("div")
  .attr("class",function(d) { if (d.name == "Richfield") { return "row selected" } else { return "row "; } })
  .style('background-color',function(d) { 

  	var color = "#888888";

	if (d.IndexScore >= 300) { color = "#bd0026"; }
	else if	(d.IndexScore >= 240) { color = "#f03b20"; }
	else if	(d.IndexScore >= 180) { color = "#fd8d3c"; }
	else if	(d.IndexScore >= 120) { color = "#fecc5c"; }
	else if	(d.IndexScore >= 60) { color = "#ffffb2"; }

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


$(".zoom").click(function() {
	  reset();
    $('#cities').animate({scrollTop : 0},800);
    return false;
});

$('#filter_box').on('keyup search', function(e){
    $('.row').hide();
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    var count = $('.row:visible').length;
    $('#results').html(count);
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
	var longitude = Number($(this).attr("longitude"));
	var latitude = Number($(this).attr("latitude"));
  if ($(this).find(".name").text().indexOf("(MPLS)") != -1 || $(this).find(".name").text().indexOf("(STP)") != -1) { map.flyTo({ center: [longitude, latitude], zoom: 13.5 }); }
	else { map.flyTo({ center: [longitude, latitude], zoom: 11.5 }); }
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

// map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

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
		            [60, "#ffffb2"],
		            [120, "#fecc5c"],
		            [180, "#fd8d3c"],
		            [240, "#f03b20"],
		            [300, "#bd0026"]
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
		            [60, "#ffffb2"],
		            [120, "#fecc5c"],
		            [180, "#fd8d3c"],
		            [240, "#f03b20"],
		            [300, "#bd0026"]
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
                [60, "#ffffb2"],
                [120, "#fecc5c"],
                [180, "#fd8d3c"],
                [240, "#f03b20"],
                [300, "#bd0026"]
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
                [60, "#ffffb2"],
                [120, "#fecc5c"],
                [180, "#fd8d3c"],
                [240, "#f03b20"],
                [300, "#bd0026"]
            ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.4)'
     }
   }, 'place-neighbourhood');

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
	map.flyTo({ center: [-93.28469849, 45.01832962], zoom: 7.8 });
	$('#filter_box').val("");
	$('.row').show();
}

function metricLoad(city){			

    var cityData = data.filter(function(d){ return d.name == city; })

    if (String(city).indexOf("(MPLS)") != -1) { $("#districtName").html(cityData[0].CityState + ", Minneapolis, MN"); }
    else if (String(city).indexOf("(STP)") != -1) { $("#districtName").html(cityData[0].CityState + ", St. Paul, MN"); }
    else { $("#districtName").html(cityData[0].CityState); }

    var color = "#888888";

    if (cityData[0].IndexScore >= 300) { color = "#bd0026"; }
    else if (cityData[0].IndexScore >= 240) { color = "#f03b20"; }
    else if (cityData[0].IndexScore>= 180) { color = "#fd8d3c"; }
    else if (cityData[0].IndexScore >= 120) { color = "#fecc5c"; }
    else if (cityData[0].IndexScore >= 60) { color = "#ffffb2"; }

    
    $("#districtName").css('background-color',color);
    
    $("#days").html(cityData[0].DaysMarket);
	  $("#change").html(d3.format("+%")(cityData[0].PctChgfromAvg));
    $("#distressed").html(d3.format("%")(cityData[0].PctDistressed));
    $("#ppsf").html(d3.format("$,.0f")(cityData[0].PPSF2016));

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
                  'PPSF':'Price per sqft'
                },
                colors: { 'PPSF': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    max: 330,
                    min: 0,
                    padding: {bottom: 0, top: 0},
                    tick: {
                        count: 4,
                        format: d3.format('$.0f')
                    }
                },
                x: {
                    type: 'timeseries',
                    label: 'Price per square foot over time',
                    tick: {
                        format: '%Y'
                    }
                }
            }
        });
// }

// loadChart("Richfield");
metricLoad("Richfield");

});
});
});
});
});