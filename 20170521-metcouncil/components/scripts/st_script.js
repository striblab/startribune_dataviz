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

if (selected == "growth") {
d3.json("./shapefiles/metro_cities.json", function(error, metro) {
d3.json("./shapefiles/metro_tracts.json", function(error, population) {
d3.json("./shapefiles/metro_tracts_1970.json", function(error, population1970) {

d3.json('./data/metro_populations.json', function(error, dataLoad) {
d3.json("./data/metro_demographics.json", function(error, dataLoadDemo) {
d3.json("./data/metro_land_use.json", function(error, dataLoadLand) {

d3.json('./data/counties_populations.json', function(error, dataLoadCounties) {
d3.json("./data/counties_demographics.json", function(error, dataLoadCountiesDemo) {
d3.json("./data/counties_land_use.json", function(error, dataLoadCountiesLand) {

d3.json('./data/all_populations.json', function(error, dataLoadAll) {
d3.json("./data/all_demographics.json", function(error, dataLoadAllDemo) {
d3.json("./data/all_land_use.json", function(error, dataLoadAllLand) {

$("#districtSelect").click(function() { 
  $("#listing").slideToggle();
});

var data = dataLoad.populations;
var dataDemo = dataLoadDemo.demographics;
var dataLand = dataLoadLand.land;

var dataCounties = dataLoadCounties.populations;
var dataCountiesDemo = dataLoadCountiesDemo.demographics;
var dataCountiesLand = dataLoadCountiesLand.land;

var dataAll = dataLoadAll.populations;
var dataAllDemo = dataLoadAllDemo.demographics;
var dataAllLand = dataLoadAllLand.land;

var checked = false;

d3.select("#all").selectAll(".row")
  .data(dataAll.filter(function(d){ return d.YEAR == 2015; })).enter().append("div")
  .attr("class",function(d) { if (d.REGION_NAME == "Twin Cities Region (7-county)") { return "row selected" } else { return "row "; } })
  .attr("id",function(d) { if (d.REGION_NAME == "Twin Cities Region (7-county)") { return "first" } else { return null; } })
  .attr("type","all")
  .attr("zoom",9)
  .on("mousedown",function(d) {

    var pop = d3.format(",")(dataAll[18].POPULATION);
    var land = 0;
    var income;
    var minority;
    var poverty;
    var degrees;

    for (var i=0; i < dataAllDemo.length; i++){

      if (dataAllDemo[i].YEAR == 2015){
        if (dataAllDemo[i].SUBJECT_LEVEL == "MEDIANHHINC") { income = d3.format("$,")(dataAllDemo[i].MEASURE); }
        else if (dataAllDemo[i].SUBJECT_LEVEL == "WHITENH") { minority = d3.format("%")(1-(dataAllDemo[i].MEASURE / dataAllDemo[i].DENOMINATOR)); }
        else if (dataAllDemo[i].SUBJECT_LEVEL == "BACHELORS") { degrees = d3.format("%")(dataAllDemo[i].MEASURE / dataAllDemo[i].DENOMINATOR); }
        else if (dataAllDemo[i].SUBJECT_LEVEL == "POV100RATE") { poverty = d3.format("%")(dataAllDemo[i].MEASURE); }
      }
    }

    for (var i=0; i < dataAllLand.length; i++){
        if (dataAllLand[i].YEAR == 2010 && (dataAllLand[i].LAND_USE_DESCRIPTION == "Non-Urbanized" || dataAllLand[i].LAND_USE_DESCRIPTION == "Institutional and Recreation" || dataAllLand[i].LAND_USE_DESCRIPTION == "Open Water Bodies" || dataAllLand[i].LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || dataAllLand[i].LAND_USE_DESCRIPTION == "Vacant/Agricultural" || dataAllLand[i].LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || dataAllLand[i].LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || dataAllLand[i].LAND_USE_DESCRIPTION == "Agriculture" || dataAllLand[i].LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || dataAllLand[i].LAND_USE_DESCRIPTION == "Golf Course" || dataAllLand[i].LAND_USE_DESCRIPTION == "Undeveloped Land" || dataAllLand[i].LAND_USE_DESCRIPTION == "Open Water")) { land += dataAllLand[i].ACRES; }
    }

    $("#population").html(pop);
    $("#land").html(d3.format(",.0f")(land));
    $("#income").html(income);
    $("#minorities").html(minority);
    $("#poverty").html(poverty);
    $("#degrees").html(degrees);

  })
  .attr("latitude",function(d) { return 45.01832962; })
  .attr("longitude",function(d) { return -93.28469849; })
  .html(function(d,i){ 
    return "<div class='col name'>" + d.REGION_NAME + "</div>";
  });

d3.select("#counties").selectAll(".row")
  .data(dataCounties.filter(function(d){ return d.YEAR == 2015; })).enter().append("div")
  .attr("class",function(d) { return "row "; })
  // .attr("id",function(d) { if (d.CO_NAME == "Anoka County") { return "first" } else { return null; } })
  .attr("type","county")
  .attr("zoom",8)
  .on("mousedown",function(d) {

    var pop;
    var land = 0;
    var income;
    var minority;
    var poverty;
    var degrees;

    for (var i=0; i < dataCounties.length; i++){
      if (d.CO_NAME == dataCounties[i].CO_NAME && dataCounties[i].YEAR == 2015){
        pop = d3.format(",")(dataCounties[i].POPULATION);
      }
    }

    for (var i=0; i < dataCountiesDemo.length; i++){

      if (d.CO_NAME == dataCountiesDemo[i].CTU_NAME && dataCountiesDemo[i].YEAR == 2015){
        if (dataCountiesDemo[i].SUBJECT_LEVEL == "MEDIANHHINC") { income = d3.format("$,")(dataCountiesDemo[i].MEASURE); }
        else if (dataCountiesDemo[i].SUBJECT_LEVEL == "WHITENH") { minority = d3.format("%")(1-(dataCountiesDemo[i].MEASURE / dataCountiesDemo[i].DENOMINATOR)); }
        else if (dataCountiesDemo[i].SUBJECT_LEVEL == "BACHELORS") { degrees = d3.format("%")(dataCountiesDemo[i].MEASURE / dataCountiesDemo[i].DENOMINATOR); }
        else if (dataCountiesDemo[i].SUBJECT_LEVEL == "POV100RATE") { poverty = d3.format("%")(dataCountiesDemo[i].MEASURE); }
      }
    }

    for (var i=0; i < dataCountiesLand.length; i++){
      if (d.CO_NAME == dataCountiesLand[i].CO_NAME && dataCountiesLand[i].YEAR == 2010){
        if (dataCountiesLand[i].LAND_USE_DESCRIPTION == "Non-Urbanized" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Institutional and Recreation" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Open Water Bodies" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Vacant/Agricultural" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Agriculture" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Golf Course" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Undeveloped Land" || dataCountiesLand[i].LAND_USE_DESCRIPTION == "Open Water") { land += dataCountiesLand[i].ACRES; }
      }
    }

    $("#population").html(pop);
    $("#land").html(d3.format(",.0f")(land));
    $("#income").html(income);
    $("#minorities").html(minority);
    $("#poverty").html(poverty);
    $("#degrees").html(degrees);

  })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 
    return "<div class='col name'>" + d.CO_NAME + "</div>";
  });

d3.select("#towns").selectAll(".row")
  .data(data.filter(function(d){ return d.YEAR == 2015; })).enter().append("div")
  .attr("class",function(d) { return "row "; })
  // .attr("id",function(d) { if (d.CTU_NAME == "Afton") { return "first" } else { return null; } })
  .attr("type","city")
  .attr("zoom",11.5)
  .on("mousedown",function(d) {

    var pop = d3.format(",")(d.POPULATION);
    var land = 0;
    var income;
    var minority;
    var poverty;
    var degrees;

    for (var i=0; i < dataDemo.length; i++){

      if (Number(d.COCTU_ID) == Number(dataDemo[i].COCTU_ID) && (dataDemo[i].YEAR == 2015)){
        if (dataDemo[i].SUBJECT_LEVEL == "MEDIANHHINC") { income = d3.format("$,")(dataDemo[i].MEASURE); }
        else if (dataDemo[i].SUBJECT_LEVEL == "WHITENH") { minority = d3.format("%")(1-(dataDemo[i].MEASURE / dataDemo[i].DENOMINATOR)); }
        else if (dataDemo[i].SUBJECT_LEVEL == "BACHELORS") { degrees = d3.format("%")(dataDemo[i].MEASURE / dataDemo[i].DENOMINATOR); }
        else if (dataDemo[i].SUBJECT_LEVEL == "POV100RATE") { poverty = d3.format("%")(dataDemo[i].MEASURE); }
      }
    }

    for (var i=0; i < dataLand.length; i++){
      if (Number(d.COCTU_ID) == Number(dataLand[i].COCTU_ID) && dataLand[i].YEAR == 2010){
        if (dataLand[i].LAND_USE_DESCRIPTION == "Non-Urbanized" || dataLand[i].LAND_USE_DESCRIPTION == "Institutional and Recreation" || dataLand[i].LAND_USE_DESCRIPTION == "Open Water Bodies" || dataLand[i].LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || dataLand[i].LAND_USE_DESCRIPTION == "Vacant/Agricultural" || dataLand[i].LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || dataLand[i].LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || dataLand[i].LAND_USE_DESCRIPTION == "Agriculture" || dataLand[i].LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || dataLand[i].LAND_USE_DESCRIPTION == "Golf Course" || dataLand[i].LAND_USE_DESCRIPTION == "Undeveloped Land" || dataLand[i].LAND_USE_DESCRIPTION == "Open Water") { land += dataLand[i].ACRES; }
      }
    }

    $("#population").html(pop);
    $("#land").html(d3.format(",.0f")(land));
    $("#income").html(income);
    $("#minorities").html(minority);
    $("#poverty").html(poverty);
    $("#degrees").html(degrees);

  })

 //  .style('background-color',function(d) { 

 //  var color = "#888888";

	// return color;

 //  })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 


    return "<div class='col name'>" + d.CTU_NAME + "</div>";
  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "name") { 
        if (sorted == "descend") { return d3.descending(a.CTU_NAME, b.CTU_NAME); }
        if (sorted == "ascend") { return d3.ascending(a.CTU_NAME, b.CTU_NAME); }
     }
          if (candidate == "index") { 
        if (sorted == "descend") { return d3.descending(a.COMMUNITY_DESIGNATION, b.COMMUNITY_DESIGNATION); }
        if (sorted == "ascend") { return d3.ascending(a.COMMUNITY_DESIGNATION, b.COMMUNITY_DESIGNATION); }
     }
    })
    .transition().duration(500);
}

var chart;

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
       if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)){
           $(this).show();
       }
    }); 
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
  $("#listing").slideToggle();
  $("#thisDistrict").html($(this).find(".name").text());

  var pitch = 0;
  var bearing = 0;
	var longitude = Number($(this).attr("longitude"));
	var latitude = Number($(this).attr("latitude"));
  var zoom = Number($(this).attr("zoom"));

  //RELOAD POP
      chart.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","population",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"population","population",$(this).attr("type"))
                ]
      });

  //RELOAD INCOME
      chartIncome.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","income",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"income","income",$(this).attr("type"))
                ]
      });

  //RELOAD POVERTY
      chartPoverty.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","poverty",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"poverty","poverty",$(this).attr("type"))
                ]
      });

  //RELOAD DEGREES
      chartDegrees.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","degrees",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"degrees","degrees",$(this).attr("type"))
                ]
      });

  //RELOAD MINORITIES
      chartRace.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","race",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"race","race",$(this).attr("type"))
                ]
      });

  //RELOAD LAND
      chartLand.load({
                columns: [
                    redrawChart($(this).find(".name").text(),"years","land",$(this).attr("type")),
                    redrawChart($(this).find(".name").text(),"land","land",$(this).attr("type"))
                ]
      });

  map.flyTo({ center: [longitude, latitude], zoom: zoom, pitch: pitch, bearing: bearing });


});

// POPULATION CHART
 var cityData = dataAll.filter(function(d){ return d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015; });

  var populations = [];
  var years = [];

  populations[0] = "Population";
  years[0] = "x";

  for (var i=0; i < cityData.length; i++){
    populations[i+1] = cityData[i].POPULATION;
    years[i+1] = cityData[i].YEAR;
  }

      var  padding = {
            top: 40,
            right: 40,
            bottom: 30,
            left: 60,
        };

    chart = c3.generate({
            bindto: '#chartPop',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    years,
                    populations
                ],
                colors: { 'Population': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        count: 4,
                        format: d3.format(',.0f')
                    }
                },
                x: {
                    // type: 'timeseries',
                    // // label: {
                    // //   text: 'Price per square foot over time',
                    // //   position: 'inner-center'
                    // // },
                    tick: {
                        count: 6,
                        values: [1970,1980,1990,2000,2015],
                        format: d3.format('.0f')
                    }
                }
            }
        });
 
// LAND USE CHART
  var landDataNU = dataAllLand.filter(function(d){ return d.LAND_USE_DESCRIPTION == "Non-Urbanized" || d.LAND_USE_DESCRIPTION == "Institutional and Recreation" || d.LAND_USE_DESCRIPTION == "Open Water Bodies" || d.LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || d.LAND_USE_DESCRIPTION == "Vacant/Agricultural" || d.LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || d.LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || d.LAND_USE_DESCRIPTION == "Agriculture" || d.LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || d.LAND_USE_DESCRIPTION == "Golf Course" || d.LAND_USE_DESCRIPTION == "Undeveloped Land" || d.LAND_USE_DESCRIPTION == "Open Water";  })

  var landuseNU = ["Undeveloped Acres", 0,0,0,0,0];
  var landYears = ["x",1970,1980,1990,2000,2010];

  var indexThis = 1;
  var thisYear = 1970;

  for (var i=1970; i < 2020; i += 10){
    for (var j=0; j < landDataNU.length; j++){
    if (landDataNU[j].YEAR == i) { landuseNU[indexThis] += Number(landDataNU[j].ACRES); }
   }
   indexThis++;
  }

    chartLand = c3.generate({
            bindto: '#chartLand',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    landYears,
                    landuseNU
                ],
                colors: { 'Undeveloped Acres': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        count: 4,
                        format: d3.format(',.0f')
                    }
                },
                x: {
                    // type: 'timeseries',
                    // // label: {
                    // //   text: 'Price per square foot over time',
                    // //   position: 'inner-center'
                    // // },
                    tick: {
                        count: 5,
                        values: [1970,1980,1990,2000,2010],
                        format: d3.format('.0f')
                    }
                }
            }
        });

// INCOME CHART
 var incomeData = dataAllDemo.filter(function(d){ return d.SUBJECT_LEVEL == "MEDIANHHINC" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var income = [];
  var incomeYears = [];

  income[0] = "Income";
  incomeYears[0] = "x";

    for (var i=0; i < incomeData.length; i++){
          income[i+1] = incomeData[i].MEASURE;
          incomeYears[i+1] = incomeData[i].YEAR; 
    }

    chartIncome = c3.generate({
            bindto: '#chartIncome',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    incomeYears,
                    income
                ],
                colors: { 'Income': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        format: d3.format('$,.0f'),
                        count: 4
                    }
                },
                x: {
                    tick: {
                        count: 4,
                        values: [1990,2000,2010,2015],
                        format: d3.format('.0f')
                    }
                }
            }
        });

// POVERTY CHART
 var povData = dataAllDemo.filter(function(d){ return d.SUBJECT_LEVEL == "POV100RATE" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var poverty = [];
  var povYears = [];

  poverty[0] = "Poverty";
  povYears[0] = "x";

  for (var i=0; i < povData.length; i++){
    poverty[i+1] = povData[i].MEASURE;
    povYears[i+1] = povData[i].YEAR;
  }

    chartPoverty = c3.generate({
            bindto: '#chartPoverty',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    povYears,
                    poverty
                ],
                colors: { 'Poverty': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        count: 4,
                        format: d3.format('%')
                    }
                },
                x: {
                    tick: {
                        count: 4,
                        values: [1990,2000,2010,2015],
                        format: d3.format('.0f')
                    }
                }
            }
        });

// MINORITIES CHART
 var raceData = dataAllDemo.filter(function(d){ return d.SUBJECT_LEVEL == "WHITENH" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var minorities = [];
  var raceYears = [];

  minorities[0] = "Minorities";
  raceYears[0] = "x";

    for (var i=0; i < raceData.length; i++){
          minorities[i+1] = 1 - (raceData[i].MEASURE / raceData[i].DENOMINATOR);
          raceYears[i+1] = raceData[i].YEAR; 
    }

    chartRace = c3.generate({
            bindto: '#chartRace',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    raceYears,
                    minorities
                ],
                colors: { 'Minorities': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    max: 0.60,
                    min: 0,
                    padding: {bottom: 0, top: 0},
                    tick: {
                        count: 4,
                        format: d3.format('%')
                    }
                },
                x: {
                    // type: 'timeseries',
                    // // label: {
                    // //   text: 'Price per square foot over time',
                    // //   position: 'inner-center'
                    // // },
                    tick: {
                        count: 4,
                        values: [1990,2000,2010,2015],
                        format: d3.format('.0f')
                    }
                }
            }
        });

// DEGREES CHART
 var degreeData = dataAllDemo.filter(function(d){ return d.SUBJECT_LEVEL == "BACHELORS" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var degrees = [];
  var degreeYears = [];

  degrees[0] = "Degrees";
  degreeYears[0] = "x";

    for (var i=0; i < degreeData.length; i++){
          degrees[i+1] = degreeData[i].MEASURE / degreeData[i].DENOMINATOR;
          degreeYears[i+1] = degreeData[i].YEAR; 
    }

    chartDegrees = c3.generate({
            bindto: '#chartDegrees',
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    degreeYears,
                    degrees
                ],
                colors: { 'Degrees': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        count: 4,
                        format: d3.format('%')
                    }
                },
                x: {
                    // type: 'timeseries',
                    // // label: {
                    // //   text: 'Price per square foot over time',
                    // //   position: 'inner-center'
                    // // },
                    tick: {
                        count: 4,
                        values: [1990,2000,2010,2015],
                        format: d3.format('.0f')
                    }
                }
            }
        });

});


function redrawChart(city,values,dataType,type){
//CITIES
if (type == "city"){
if (dataType == "population"){
  var cityData = data.filter(function(d){ return d.CTU_NAME == city && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var populations = ["Population",0,0,0,0,0,0];
  var years = [];

  years[0] = "x";

  for (var i=0; i < cityData.length; i++){
    populations[i+1] = cityData[i].POPULATION;
    years[i+1] = cityData[i].YEAR;
  }

  var pctChange = ((populations[1] - populations[populations.length-1]) / populations[populations.length-1]);

  $("#populationChange").removeClass("pos");
  $("#populationChange").removeClass("neg");

  if (pctChange < 0) { $("#populationChange").addClass("neg"); }
  else if (pctChange > 0) { $("#populationChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#populationChange").html(d3.format("+%")(pctChange)); }
  else { $("#populationChange").html("--"); }

  if (values == "population") { return populations; }
  else if (values == "years") { return years; }
}

if (dataType == "income"){
 var incomeData = dataDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "MEDIANHHINC" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var income = ["Income",0,0,0,0];
  var incomeYears = [];

  incomeYears[0] = "x";

    for (var i=0; i < incomeData.length; i++){
          income[i+1] = incomeData[i].MEASURE;
          incomeYears[i+1] = incomeData[i].YEAR; 
    }

  var pctChange = ((income[income.length-2] - income[1]) / income[1]);

  $("#incomeChange").removeClass("pos");
  $("#incomeChange").removeClass("neg");

  if (pctChange < 0) { $("#incomeChange").addClass("neg"); }
  else if (pctChange > 0) { $("#incomeChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#incomeChange").html(d3.format("+%")(pctChange)); }
  else { $("#incomeChange").html("--"); }

  if (values == "income") { return income; }
  else if (values == "years") { return incomeYears; }
}

if (dataType == "poverty"){
 var povData = dataDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "POV100RATE" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var poverty = ["Poverty",0,0,0,0];
  var povYears = [];

  povYears[0] = "x";

    for (var i=0; i < povData.length; i++){
          poverty[i+1] = povData[i].MEASURE;
          povYears[i+1] = povData[i].YEAR; 
    }

  var pctChange = poverty[povData.length] - poverty[1];

  $("#povertyChange").removeClass("pos");
  $("#povertyChange").removeClass("neg");

  if (pctChange < 0) { $("#povertyChange").addClass("neg"); }
  else if (pctChange > 0) { $("#povertyChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#povertyChange").html(d3.format("+%")(pctChange)); }
  else { $("#povertyChange").html("--"); }

  if (values == "poverty") { return poverty; }
  else if (values == "years") { return povYears; }
}

if (dataType == "degrees"){
 var degreeData = dataDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "BACHELORS" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var degrees = ["Degrees",0,0,0,0];
  var degreeYears = [];

  degreeYears[0] = "x";

    for (var i=0; i < degreeData.length; i++){
          degrees[i+1] = degreeData[i].MEASURE / degreeData[i].DENOMINATOR;
          degreeYears[i+1] = degreeData[i].YEAR; 
    }

  var pctChange = degrees[degreeData.length] - degrees[1];

  $("#degreesChange").removeClass("pos");
  $("#degreesChange").removeClass("neg");

  if (pctChange < 0) { $("#degreesChange").addClass("neg"); }
  else if (pctChange > 0) { $("#degreesChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#degreesChange").html(d3.format("+%")(pctChange)); }
  else { $("#degreesChange").html("--"); }

  if (values == "degrees") { return degrees; }
  else if (values == "years") { return degreeYears; }
}

if (dataType == "race"){
 var raceData = dataDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "WHITENH" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var minorities = ["Minorities",0,0,0,0];
  var raceYears = [];

  raceYears[0] = "x";

    for (var i=0; i < raceData.length; i++){
          minorities[i+1] = 1 - (raceData[i].MEASURE / raceData[i].DENOMINATOR);
          raceYears[i+1] = raceData[i].YEAR; 
    }

  var pctChange = minorities[raceData.length] - minorities[1];

  $("#raceChange").removeClass("pos");
  $("#raceChange").removeClass("neg");

  if (pctChange < 0) { $("#raceChange").addClass("neg"); }
  else if (pctChange > 0) { $("#raceChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#raceChange").html(d3.format("+%")(pctChange)); }
  else { $("#raceChange").html("--"); }

  if (values == "race") { return minorities; }
  else if (values == "years") { return raceYears; }
}

if (dataType == "land"){
  var landData = dataLand.filter(function(d){ return d.CTU_NAME == city && (d.LAND_USE_DESCRIPTION == "Non-Urbanized" || d.LAND_USE_DESCRIPTION == "Institutional and Recreation" || d.LAND_USE_DESCRIPTION == "Open Water Bodies" || d.LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || d.LAND_USE_DESCRIPTION == "Vacant/Agricultural" || d.LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || d.LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || d.LAND_USE_DESCRIPTION == "Agriculture" || d.LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || d.LAND_USE_DESCRIPTION == "Golf Course" || d.LAND_USE_DESCRIPTION == "Undeveloped Land" || d.LAND_USE_DESCRIPTION == "Open Water");  })

  var landuse = ["Undeveloped Acres", 0,0,0,0,0];
  var landYears = ["x",1970,1980,1990,2000,2010];

  var indexThis = 1;
  var thisYear = 1970;

  for (var i=1970; i < 2020; i += 10){
    for (var j=0; j < landData.length; j++){
    if (landData[j].YEAR == i) { landuse[indexThis] += Number(landData[j].ACRES); }
   }
   indexThis++;
  }

  var pctChange = ((landuse[landuse.length-1] - landuse[1]) / landuse[1]);

  $("#landChange").removeClass("pos");
  $("#landChange").removeClass("neg");

  if (pctChange < 0) { $("#landChange").addClass("neg"); }
  else if (pctChange > 0) { $("#landChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#landChange").html(d3.format("+%")(pctChange)); }
  else { $("#landChange").html("--"); }

  if (values == "land") { return landuse; }
  else if (values == "years") { return landYears; }
}
}

//COUNTIES
else if (type == "county"){ 
if (dataType == "population"){
  var cityData = dataCounties.filter(function(d){ return d.CO_NAME == city && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var populations = [];
  var years = [];

  populations[0] = "Population";
  years[0] = "x";

  for (var i=0; i < cityData.length; i++){
    populations[i+1] = cityData[i].POPULATION;
    years[i+1] = cityData[i].YEAR;
  }

  var pctChange = ((populations[cityData.length] - populations[1]) / populations[1]);

  $("#populationChange").removeClass("pos");
  $("#populationChange").removeClass("neg");

  if (pctChange < 0) { $("#populationChange").addClass("neg"); }
  else if (pctChange > 0) { $("#populationChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#populationChange").html(d3.format("+%")(pctChange)); }
  else { $("#populationChange").html("--"); }

  if (values == "population") { return populations; }
  else if (values == "years") { return years; }
}

if (dataType == "income"){
 var incomeData = dataCountiesDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "MEDIANHHINC" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var income = [];
  var incomeYears = [];

  income[0] = "Income";
  incomeYears[0] = "x";

    for (var i=0; i < incomeData.length; i++){
          income[i+1] = incomeData[i].MEASURE;
          incomeYears[i+1] = incomeData[i].YEAR; 
    }

   console.log(income);

  var pctChange = ((income[incomeData.length] - income[1]) / income[1]);

  $("#incomeChange").removeClass("pos");
  $("#incomeChange").removeClass("neg");

  if (pctChange < 0) { $("#incomeChange").addClass("neg"); }
  else if (pctChange > 0) { $("#incomeChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#incomeChange").html(d3.format("+%")(pctChange)); }
  else { $("#incomeChange").html("--"); }

  if (values == "income") { return income; }
  else if (values == "years") { return incomeYears; }
}

if (dataType == "poverty"){
 var povData = dataCountiesDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "POV100RATE" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var poverty = [];
  var povYears = [];

  poverty[0] = "Poverty";
  povYears[0] = "x";

    for (var i=0; i < povData.length; i++){
          poverty[i+1] = povData[i].MEASURE;
          povYears[i+1] = povData[i].YEAR; 
    }

  var pctChange = poverty[povData.length] - poverty[1];

  $("#povertyChange").removeClass("pos");
  $("#povertyChange").removeClass("neg");

  if (pctChange < 0) { $("#povertyChange").addClass("neg"); }
  else if (pctChange > 0) { $("#povertyChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#povertyChange").html(d3.format("+%")(pctChange)); }
  else { $("#povertyChange").html("--"); }

  if (values == "poverty") { return poverty; }
  else if (values == "years") { return povYears; }
}

if (dataType == "degrees"){
 var degreeData = dataCountiesDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "BACHELORS" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var degrees = [];
  var degreeYears = [];

  degrees[0] = "Degrees";
  degreeYears[0] = "x";

    for (var i=0; i < degreeData.length; i++){
          degrees[i+1] = degreeData[i].MEASURE / degreeData[i].DENOMINATOR;
          degreeYears[i+1] = degreeData[i].YEAR; 
    }

  var pctChange = degrees[degreeData.length] - degrees[1];

  $("#degreesChange").removeClass("pos");
  $("#degreesChange").removeClass("neg");

  if (pctChange < 0) { $("#degreesChange").addClass("neg"); }
  else if (pctChange > 0) { $("#degreesChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#degreesChange").html(d3.format("+%")(pctChange)); }
  else { $("#degreesChange").html("--"); }

  if (values == "degrees") { return degrees; }
  else if (values == "years") { return degreeYears; }
}

if (dataType == "race"){
 var raceData = dataCountiesDemo.filter(function(d){ return d.CTU_NAME == city && d.SUBJECT_LEVEL == "WHITENH" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var minorities = [];
  var raceYears = [];

  minorities[0] = "Minorities";
  raceYears[0] = "x";

    for (var i=0; i < raceData.length; i++){
          minorities[i+1] = 1 - (raceData[i].MEASURE / raceData[i].DENOMINATOR);
          raceYears[i+1] = raceData[i].YEAR; 
    }

  var pctChange = minorities[raceData.length] - minorities[1];

  $("#raceChange").removeClass("pos");
  $("#raceChange").removeClass("neg");

  if (pctChange < 0) { $("#raceChange").addClass("neg"); }
  else if (pctChange > 0) { $("#raceChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#raceChange").html(d3.format("+%")(pctChange)); }
  else { $("#raceChange").html("--"); }

  if (values == "race") { return minorities; }
  else if (values == "years") { return raceYears; }
}

if (dataType == "land"){
  var landData = dataCountiesLand.filter(function(d){ return d.CO_NAME == city && (d.LAND_USE_DESCRIPTION == "Non-Urbanized" || d.LAND_USE_DESCRIPTION == "Institutional and Recreation" || d.LAND_USE_DESCRIPTION == "Open Water Bodies" || d.LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || d.LAND_USE_DESCRIPTION == "Vacant/Agricultural" || d.LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || d.LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || d.LAND_USE_DESCRIPTION == "Agriculture" || d.LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || d.LAND_USE_DESCRIPTION == "Golf Course" || d.LAND_USE_DESCRIPTION == "Undeveloped Land" || d.LAND_USE_DESCRIPTION == "Open Water");  })

  var landuse = ["Undeveloped Acres", 0,0,0,0,0];
  var landYears = ["x",1970,1980,1990,2000,2010];

  var indexThis = 1;
  var thisYear = 1970;

  for (var i=1970; i < 2020; i += 10){
    for (var j=0; j < landData.length; j++){
    if (landData[j].YEAR == i) { landuse[indexThis] += Number(landData[j].ACRES); }
   }
   indexThis++;
  }

  var pctChange = ((landuse[landuse.length-1] - landuse[1]) / landuse[1]);

  $("#landChange").removeClass("pos");
  $("#landChange").removeClass("neg");

  if (pctChange < 0) { $("#landChange").addClass("neg"); }
  else if (pctChange > 0) { $("#landChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#landChange").html(d3.format("+%")(pctChange)); }
  else { $("#landChange").html("--"); }

  if (values == "land") { return landuse; }
  else if (values == "years") { return landYears; }

}
}
//OVERALL
else if (type == "all") { 
if (dataType == "population"){
  var cityData = dataAll.filter(function(d){ return d.REGION_NAME == city && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var populations = [];
  var years = [];

  populations[0] = "Population";
  years[0] = "x";

  for (var i=0; i < cityData.length; i++){
    populations[i+1] = cityData[i].POPULATION;
    years[i+1] = cityData[i].YEAR;
  }

  var pctChange = ((populations[cityData.length] - populations[1]) / populations[1]);

  $("#populationChange").removeClass("pos");
  $("#populationChange").removeClass("neg");

  if (pctChange < 0) { $("#populationChange").addClass("neg"); }
  else if (pctChange > 0) { $("#populationChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#populationChange").html(d3.format("+%")(pctChange)); }
  else { $("#populationChange").html("--"); }

  if (values == "population") { return populations; }
  else if (values == "years") { return years; }
}

if (dataType == "income"){
 var incomeData = dataAllDemo.filter(function(d){ return d.REGION_NAME == city && d.SUBJECT_LEVEL == "MEDIANHHINC" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var income = [];
  var incomeYears = [];

  income[0] = "Income";
  incomeYears[0] = "x";

    for (var i=0; i < incomeData.length; i++){
          income[i+1] = incomeData[i].MEASURE;
          incomeYears[i+1] = incomeData[i].YEAR; 
    }


  var pctChange = ((income[incomeData.length] - income[1]) / income[1]);

  $("#incomeChange").removeClass("pos");
  $("#incomeChange").removeClass("neg");

  if (pctChange < 0) { $("#incomeChange").addClass("neg"); }
  else if (pctChange > 0) { $("#incomeChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#incomeChange").html(d3.format("+%")(pctChange)); }
  else { $("#incomeChange").html("--"); }

  if (values == "income") { return income; }
  else if (values == "years") { return incomeYears; }
}

if (dataType == "poverty"){
 var povData = dataAllDemo.filter(function(d){ return d.REGION_NAME == city && d.SUBJECT_LEVEL == "POV100RATE" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var poverty = [];
  var povYears = [];

  poverty[0] = "Poverty";
  povYears[0] = "x";

    for (var i=0; i < povData.length; i++){
          poverty[i+1] = povData[i].MEASURE;
          povYears[i+1] = povData[i].YEAR; 
    }

  var pctChange = poverty[povData.length] - poverty[1];

  $("#povertyChange").removeClass("pos");
  $("#povertyChange").removeClass("neg");

  if (pctChange < 0) { $("#povertyChange").addClass("neg"); }
  else if (pctChange > 0) { $("#povertyChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#povertyChange").html(d3.format("+%")(pctChange)); }
  else { $("#povertyChange").html("--"); }

  if (values == "poverty") { return poverty; }
  else if (values == "years") { return povYears; }
}

if (dataType == "degrees"){
 var degreeData = dataAllDemo.filter(function(d){ return d.REGION_NAME == city && d.SUBJECT_LEVEL == "BACHELORS" && d.DATASOURCE != "ACS 2008-2010" && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var degrees = [];
  var degreeYears = [];

  degrees[0] = "Degrees";
  degreeYears[0] = "x";

    for (var i=0; i < degreeData.length; i++){
          degrees[i+1] = degreeData[i].MEASURE / degreeData[i].DENOMINATOR;
          degreeYears[i+1] = degreeData[i].YEAR; 
    }

  var pctChange = degrees[degreeData.length] - degrees[1];

  $("#degreesChange").removeClass("pos");
  $("#degreesChange").removeClass("neg");

  if (pctChange < 0) { $("#degreesChange").addClass("neg"); }
  else if (pctChange > 0) { $("#degreesChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#degreesChange").html(d3.format("+%")(pctChange)); }
  else { $("#degreesChange").html("--"); }

  if (values == "degrees") { return degrees; }
  else if (values == "years") { return degreeYears; }
}

if (dataType == "race"){
 var raceData = dataAllDemo.filter(function(d){ return d.REGION_NAME == city && d.SUBJECT_LEVEL == "WHITENH" && (d.DATASOURCE == "ACS 2011-2015" || d.DATASOURCE == "Census 2010" || d.DATASOURCE == "Census 2000" || d.DATASOURCE == "Census 1990") && (d.YEAR == 1970 || d.YEAR == 1980 || d.YEAR == 1990 || d.YEAR == 2000 || d.YEAR == 2010 || d.YEAR == 2015); })

  var minorities = [];
  var raceYears = [];

  minorities[0] = "Minorities";
  raceYears[0] = "x";

    for (var i=0; i < raceData.length; i++){
          minorities[i+1] = 1 - (raceData[i].MEASURE / raceData[i].DENOMINATOR);
          raceYears[i+1] = raceData[i].YEAR; 
    }

  var pctChange = minorities[raceData.length] - minorities[1];

  $("#raceChange").removeClass("pos");
  $("#raceChange").removeClass("neg");

  if (pctChange < 0) { $("#raceChange").addClass("neg"); }
  else if (pctChange > 0) { $("#raceChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#raceChange").html(d3.format("+%")(pctChange)); }
  else { $("#raceChange").html("--"); }

  if (values == "race") { return minorities; }
  else if (values == "years") { return raceYears; }
}

if (dataType == "land"){
  var landData = dataAllLand.filter(function(d){ return d.REGION_NAME == city && (d.LAND_USE_DESCRIPTION == "Non-Urbanized" || d.LAND_USE_DESCRIPTION == "Institutional and Recreation" || d.LAND_USE_DESCRIPTION == "Open Water Bodies" || d.LAND_USE_DESCRIPTION == "Parks & Recreation Areas" || d.LAND_USE_DESCRIPTION == "Vacant/Agricultural" || d.LAND_USE_DESCRIPTION == "Industrial Parks not Developed" || d.LAND_USE_DESCRIPTION == "Public & Semi-Public Vacant" || d.LAND_USE_DESCRIPTION == "Agriculture" || d.LAND_USE_DESCRIPTION == "Park, Recreational or Preserve" || d.LAND_USE_DESCRIPTION == "Golf Course" || d.LAND_USE_DESCRIPTION == "Undeveloped Land" || d.LAND_USE_DESCRIPTION == "Open Water");  })

  var landuse = ["Undeveloped Acres", 0,0,0,0,0];
  var landYears = ["x",1970,1980,1990,2000,2010];

  var indexThis = 1;
  var thisYear = 1970;

  for (var i=1970; i < 2020; i += 10){
    for (var j=0; j < landData.length; j++){
    if (landData[j].YEAR == i) { landuse[indexThis] += Number(landData[j].ACRES); }
   }
   indexThis++;
  }

  var pctChange = ((landuse[landuse.length-1] - landuse[1]) / landuse[1]);

  $("#landChange").removeClass("pos");
  $("#landChange").removeClass("neg");

  if (pctChange < 0) { $("#landChange").addClass("neg"); }
  else if (pctChange > 0) { $("#landChange").addClass("pos"); }

  if (isFinite(pctChange)) { $("#landChange").html(d3.format("+%")(pctChange)); }
  else { $("#landChange").html("--"); }

  if (values == "land") { return landuse; }
  else if (values == "years") { return landYears; }

}

}
}
//mapbox://styles/mapbox/dark-v9

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

//'mapbox://styles/mapbox/satellite-v9'

var beforeMap = new mapboxgl.Map({
    container: 'before', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.28469849, 45.01832962], 
    zoom: 8,
    minZoom: 3,
    hash: false
});

beforeMap.addControl(new mapboxgl.NavigationControl());
beforeMap.scrollZoom.disable();

beforeMap.on('load', function() {

 beforeMap.addSource('metro1970', {
   type: 'geojson',
   data: population1970
 });

  beforeMap.addLayer({
       'id': 'old-layer',
       'interactive': true,
       'source': 'metro1970',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': {
            "property": "DENSITY",
            "stops": [
              [0, "#f1eef6"],
              [20, "#bdc9e1"],
              [40, "#74a9cf"],
              [80, "#0570b0"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

});

var map = new mapboxgl.Map({
    container: 'after', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.28469849, 45.01832962], 
    zoom: 8,
    minZoom: 3
});

var mapBoth = new mapboxgl.Compare(beforeMap, map, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();


//http://gis.uspatial.umn.edu/arcgis/rest/services/Libraries/MSPAerialMosaic_1966/MapServer
map.on('load', function() {

 map.addSource('metroToday', {
   type: 'geojson',
   data: population
 });

  map.addLayer({
       'id': 'new-layer',
       'interactive': true,
       'source': 'metroToday',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': {
            "property": "DENSITY",
            "stops": [
              [0, "#f1eef6"],
              [20, "#bdc9e1"],
              [40, "#74a9cf"],
              [80, "#0570b0"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');


   map.addSource('metro', {
     type: 'geojson',
     data: metro
   });

    map.addLayer({
         'id': 'metro-layer',
         'interactive': true,
         'source': 'metro',
         'layout': {},
         'type': 'fill',
              'paint': {
             'fill-antialias': true,
             'fill-opacity': 0,
             'fill-color': "#dddddd",
             'fill-outline-color': 'rgba(255, 255, 255, 1)'
       }
     }, 'place-neighbourhood');

});

    $("#first").trigger("mousedown");

    $("#population").html("3,005,419");
    $("#land").html("1,328,847");
    $("#income").html("$68,778");
    $("#minorities").html("11%");
    $("#poverty").html("25%");
    $("#degrees").html("27%");

    $("#populationChange").html("+60%");
    $("#landChange").html("-19%");
    $("#incomeChange").html("+88%");
    $("#raceChange").html("+16%");
    $("#povertyChange").html("+3%");
    $("#degreesChange").html("+7%");

});
});
});

});
});
});

});
});
});

});
});
});
} else if (selected == "satellite"){

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var mapStyle = {
    "version": 8,
    "name": "Dark",
    "sources": {
        "mapbox": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-streets-v6"
        },
        "overlay": {
            "type": "image",
            "url": "./data/metro1966.png",
            "coordinates": [
                [-93.35296721774532,45.12774071853477],
                [-92.97801967540039,45.12762157010823],
                [-92.97664527671149,44.85745467286256],
                [-93.35728758338274,44.85778181806326]
            ]
        }
    },
    "sprite": "mapbox://sprites/mapbox/streets-v9",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {"background-color": "#aaaaaa"}
        },
        {
            "id": "water",
            "source": "mapbox",
            "source-layer": "water",
            "type": "fill",
            "paint": {"fill-color": "#2c2c2c"}
        },
        {
            "id": "boundaries",
            "source": "mapbox",
            "source-layer": "admin",
            "type": "line",
            "paint": {"line-color": "#797979", "line-dasharray": [2, 2, 6, 2]},
            "filter": ["all", ["==", "maritime", 0]]
        },
        {
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": 1}
        },
        {
            "id": "cities",
            "source": "mapbox",
            "source-layer": "place_label",
            "type": "symbol",
            "layout": {
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-size": {"stops": [[4, 9], [6, 12]]}
            },
            "paint": {
                "text-opacity": 0,
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        },
        {
            "id": "states",
            "source": "mapbox",
            "source-layer": "state_label",
            "type": "symbol",
            "layout": {
                "text-transform": "uppercase",
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-size": {"stops": [[4, 10], [6, 14]]}
            },
            "filter": [">=", "area", 80000],
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        }
    ]
};

//'mapbox://styles/mapbox/satellite-v9'

var bounds = [
    [-93.35296721774532,45.12774071853477], // Southwest coordinates
    [-92.97664527671149,44.85745467286256]  // Northeast coordinates
];

var beforeMap = new mapboxgl.Map({
    container: 'old',
    style: mapStyle,
    center: [-93.170242, 45.012116], 
    zoom: 10,
    minZoom: 10,
    hash: false,
    // maxBounds: bounds
});

beforeMap.addControl(new mapboxgl.NavigationControl());
beforeMap.scrollZoom.disable();

var map = new mapboxgl.Map({
    container: 'current',
    style: 'mapbox://styles/mapbox/satellite-streets-v9',
    center: [-93.170242, 45.012116], 
    zoom: 10,
    minZoom: 10,
    hash:false,
    // maxBounds: bounds
});

map.on('load', function() {
    map.addLayer({
        'id': 'wms-test-layer',
        'type': 'raster',
        'source': {
            'type': 'raster',
            'tiles': [
              // 'http://gis.uspatial.umn.edu/arcgis/services/Libraries/MSPAerialMosaic_1966/MapServer/WmsServer?f=json'
                'https://tgis2.uspatial.umn.edu/arcgis/services/Libraries/MetroAerialMosaic_1966/MapServer/WMSServer?request=GetMap&service=WMS&bbox={bbox-epsg-4326}&format=image/png&version=1.3.0&srs=EPSG:4326&width=256&height=256&layers=0,1,2,3'
            ],
            'tileSize': 256
        },
        'paint': {}
    });
  });

var mapBoth = new mapboxgl.Compare(beforeMap, map, {

});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

}