(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/religion.json", function(error, dataLoadReligion) {
d3.json("./data/medianIncome.json", function(error, dataLoadIncome) {
d3.json("./data/population.json", function(error, dataLoadPop) {
d3.json("./data/age.json", function(error, dataLoadAge) {
d3.json("./data/medianAge.json", function(error, dataLoadMAge) {
d3.json("./data/livingCosts.json", function(error, dataLoadLiving) {
d3.json("./data/education.json", function(error, dataLoadEducation) {
d3.json("./data/race.json", function(error, dataLoadRace) {
d3.json("./data/votes2012.json", function(error, dataLoadAmend) {

dataReligion = dataLoadReligion.religion;
dataIncome = dataLoadIncome.medianIncome;
dataPopulation = dataLoadPop.population;
dataAge = dataLoadAge.age;
dataMAge = dataLoadMAge.medianAge;
dataCosts = dataLoadLiving.livingCosts;
dataEducation = dataLoadEducation.education;
dataRace = dataLoadRace.race;
data2012 = dataLoadAmend.votes2012;

//BUTTONS
$(".myButton2").on('click',function(){
 $(".myButton2").removeClass("selected");
 $(this).addClass("selected");
 $(".section").hide();
 $("#" + $(this).attr("data")).show();
});

//CHARTS
chartBuild("#popChart","population",dataPopulation,"Minnesota",0);
chartBuild("#edChart","education",dataEducation,"Minnesota",1);
chartBuild("#religionChart","religion",dataReligion,"Minnesota",2);
chartBuild("#incomeChart","income",dataIncome,"Minnesota",3);
chartBuild("#costsChart","costs",dataCosts,"Minnesota",4);
chartBuild("#raceChart","race",dataRace,"Minnesota",5);
chartBuild("#ageChart","age",dataAge,"Minnesota",6);
chartBuild("#socialChart","social",data2012,"Minnesota",7);

 $(".section").hide();
 $("#populationB").addClass("selected");
 $("#population").show();

var chart = [];
// var chartCosts = chartBuild("#livingChart","costs",dataPopulation,"Minnesota");

function mapColor(d, subject, dataCompare){
  if (d == "Minnesota") { var where = "Minnesota"; }
  else { var where = d; }

  var above = "#121212";
  var mid = "#888888";
  var below = "#C7C7C7";

  if (subject == "population"){
  for (var i = 0; i < dataCompare.length; i++) {
  if (dataCompare[i].county == where){
    if (dataCompare[i].pctChange > .03) { return above; }
    else if (dataCompare[i].pctChange <= 0) { return below; }
    else if (dataCompare[i].pctChange <= .03) { return mid; } 
    }
  }
}
  if (subject == "education"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct < .40) { return below; }
    if (dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct >= .40) { return above; }
    }
  }
}
  if (subject == "income"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].income >= 55000) { return above; }
    if (dataCompare[i].income < 55000) { return below; }
    }
  }
}
  if (subject == "costs"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].YearlyCost >= 55000) { return above; }
    if (dataCompare[i].YearlyCost < 55000) { return below; }
    }
  }
}
  if (subject == "age"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].median_age >= 45) { return above; }
    else if (dataCompare[i].median_age >= 40) { return mid; }
    else if (dataCompare[i].median_age < 40) { return below; }
    }
  }
}
  if (subject == "religion"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].adherent_pct >= 60) { return above; }
    if (dataCompare[i].adherent_pct < 60) { return below; }
    }
  }
}
  if (subject == "race"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].poc_pct > .15) { return above; }
    else if (dataCompare[i].poc_pct <= .10) { return below; }
    else if (dataCompare[i].poc_pct <= .15) { return mid; }
    }
  }
}
  if (subject == "social"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].Yes_No == "No") { return above; }
    if (dataCompare[i].Yes_No == "Yes") { return below; }
    }
  }
}
}

function chartBuild(container,subject,data,county,index){
  if (subject == "population"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "education"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "religion"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "income"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "costs"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "age"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "race"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "social"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }

nv.addGraph(function() {
  chart[index] = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 40, bottom: 20, left: 95})
      .showValues(true)
      .tooltips(true)
      .stacked(true)
      .showLegend(false)
      .color(colorArray)
      .width($(container).width()).height($(container).height())
      .showControls(false);

  chart[index].yAxis
      .tickFormat(formatter);

  d3.select(container + ' svg')
      .datum(chartData(subject,data,county))
      .transition().duration(500)
      .call(chart[index]);

  nv.utils.windowResize(chart[index].update);

  return chart[index];
});

}

function redrawChart(chart,container,subject,data,county,index){
  if (subject == "population"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "education"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "religion"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "income"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "costs"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "age"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "race"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "social"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }

    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
     chart[index].yAxis
      .tickFormat(formatter);
    nv.utils.windowResize(chart[index].update);
}

function chartData(subject,data,county) {

if (subject == "population"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Population",
        "values": [
          { 
            "label" : "1950" ,
            "value" : data[i].pop1950
          } , 
          { 
            "label" : "1960" ,
            "value" : data[i].pop1960
          } , 
          { 
            "label" : "1970" ,
            "value" : data[i].pop1970
          } ,  
          { 
            "label" : "1980" ,
            "value" : data[i].pop1980
          } , 
          { 
            "label" : "1990" ,
            "value" : data[i].pop1990
          } , 
          {
            "label" : "2000" ,
            "value" : data[i].pop2000
          } , 
          { 
            "label" : "2010" ,
            "value" : data[i].pop2010
          } , 
          { 
            "label" : "2014" ,
            "value" : data[i].pop2014
          }
        ]
      }]
    }
  }
}

if (subject == "education"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "% of population",
        "values": [
          { 
            "label" : "Below 9th grade" ,
            "value" : data[i].less_nine_pct
          },
          { 
            "label" : "No HS Diploma" ,
            "value" : data[i].highschool_nodiploma_pct
          },
          { 
            "label" : "High School" ,
            "value" : data[i].highschool_pct
          },
          { 
            "label" : "Some College" ,
            "value" : data[i].some_college_nodegree_pct
          },
          { 
            "label" : "Associate's" ,
            "value" : data[i].associates_pct
          },
          { 
            "label" : "Bachelor's" ,
            "value" : data[i].bachelors_pct
          },
          { 
            "label" : "Graduate" ,
            "value" : data[i].grad_degree_pct
          }
        ]
      }]
    }
  }
}

if (subject == "religion"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "",
        "values": [ 
          { 
            "label" : "Evangelical" ,
            "value" : data[i].evangelical / data[i].population
          },
          { 
            "label" : "Mainline Prot." ,
            "value" : data[i].mainline_protestant / data[i].population
          },
          { 
            "label" : "Black Prot." ,
            "value" : data[i].black_protestant / data[i].population
          },
          { 
            "label" : "Catholic" ,
            "value" : data[i].catholic / data[i].population
          },
          { 
            "label" : "Orthodox" ,
            "value" : data[i].orthodox / data[i].population
          },
          { 
            "label" : "Judaism" ,
            "value" : data[i].judaism / data[i].population
          },
          { 
            "label" : "Islam" ,
            "value" : data[i].islam / data[i].population
          },
          { 
            "label" : "Other" ,
            "value" : data[i].other / data[i].population
          }
        ]
      }]
    }
  }
}

if (subject == "income"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Median Income (2010 dollars)",
        "values": [
          { 
            "label" : "1999" ,
            "value" : data[i].income_1999_today_dollars
          },{ 
            "label" : "2010" ,
            "value" : data[i].income
          }
        ]
      }]
    }
  }
}

if (subject == "costs"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Monthly Cost",
        "values": [
          { 
            "label" : "Children" ,
            "value" : data[i].ChildCare
          },
          { 
            "label" : "Food" ,
            "value" : data[i].Food
          },
          { 
            "label" : "Health" ,
            "value" : data[i].HealthCare
          },
          { 
            "label" : "Housing" ,
            "value" : data[i].Housing
          },
          { 
            "label" : "Transport" ,
            "value" : data[i].Transport
          },
          { 
            "label" : "Other" ,
            "value" : data[i].Other
          },
          { 
            "label" : "Taxes" ,
            "value" : data[i].Taxes
          }
        ]
      }]
    }
  }
}

if (subject == "age"){
  var female = [];
  var male = [];

  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      if (data[i].range == "0 to 4") { female[0] = data[i].female_2015; male[0] = data[i].male_2015;  }
      if (data[i].range == "5 to 9") { female[1] = data[i].female_2015; male[1] = data[i].male_2015;  }
      if (data[i].range == "10 to 14") { female[2] = data[i].female_2015; male[2] = data[i].male_2015;  }
      if (data[i].range == "15 to 19") { female[3] = data[i].female_2015; male[3] = data[i].male_2015;  }
      if (data[i].range == "20 to 24") { female[4] = data[i].female_2015; male[4] = data[i].male_2015;  }
      if (data[i].range == "25 to 29") { female[5] = data[i].female_2015; male[5] = data[i].male_2015;  }
      if (data[i].range == "30 to 34") { female[6] = data[i].female_2015; male[6] = data[i].male_2015;  }
      if (data[i].range == "35 to 39") { female[7] = data[i].female_2015; male[7] = data[i].male_2015;  }
      if (data[i].range == "40 to 44") { female[8] = data[i].female_2015; male[8] = data[i].male_2015;  }
      if (data[i].range == "45 to 49") { female[9] = data[i].female_2015; male[9] = data[i].male_2015;  }
      if (data[i].range == "50 to 54") { female[10] = data[i].female_2015; male[10] = data[i].male_2015;  }
      if (data[i].range == "55 to 59") { female[11] = data[i].female_2015; male[11] = data[i].male_2015;  }
      if (data[i].range == "60 to 64") { female[12] = data[i].female_2015; male[12] = data[i].male_2015;  }
      if (data[i].range == "65 to 69") { female[13] = data[i].female_2015; male[13] = data[i].male_2015;  }
      if (data[i].range == "70 to 74") { female[14] = data[i].female_2015; male[14] = data[i].male_2015;  }
      if (data[i].range == "75 to 79") { female[15] = data[i].female_2015; male[15] = data[i].male_2015;  }
      if (data[i].range == "80 to 84") { female[16] = data[i].female_2015; male[16] = data[i].male_2015;  }
      if (data[i].range == "85+") { female[17] = data[i].female_2015; male[17] = data[i].male_2015;  }
          }
  }
     
      return [{
        "key": "Females",
        "values": [
          { 
            "label" : "0 to 4" ,
            "value" : female[0]
          } , 
          { 
            "label" : "5 to 9" ,
            "value" : female[1]
          } , 
          { 
            "label" : "10 to 14" ,
            "value" : female[2]
          } ,  
          { 
            "label" : "15 to 19" ,
            "value" : female[3]
          } , 
          { 
            "label" : "20 to 24" ,
            "value" : female[4]
          } , 
          {
            "label" : "25 to 29" ,
            "value" : female[5]
          } , 
          { 
            "label" : "30 to 34" ,
            "value" : female[6]
          } , 
          { 
            "label" : "35 to 39" ,
            "value" : female[7]
          } , 
          { 
            "label" : "40 to 44" ,
            "value" : female[8]
          } , 
          { 
            "label" : "45 to 49" ,
            "value" : female[9]
          } , 
          { 
            "label" : "50 to 54" ,
            "value" : female[10]
          } , 
          { 
            "label" : "55 to 59" ,
            "value" : female[11]
          } , 
          { 
            "label" : "60 to 64" ,
            "value" : female[12]
          } , 
          { 
            "label" : "65 to 69" ,
            "value" : female[13]
          } , 
          { 
            "label" : "70 to 74" ,
            "value" : female[14]
          } , 
          { 
            "label" : "75 to 79" ,
            "value" : female[15]
          } , 
          { 
            "label" : "80 to 84" ,
            "value" : female[16]
          } , 
          { 
            "label" : "85+" ,
            "value" : female[17]
          }
        ]
      },{
        "key": "Males",
        "values": [
          { 
            "label" : "0 to 4" ,
            "value" : male[0]
          } , 
          { 
            "label" : "5 to 9" ,
            "value" : male[1]
          } , 
          { 
            "label" : "10 to 14" ,
            "value" : male[2]
          } ,  
          { 
            "label" : "15 to 19" ,
            "value" : male[3]
          } , 
          { 
            "label" : "20 to 24" ,
            "value" : male[4]
          } , 
          {
            "label" : "25 to 29" ,
            "value" : male[5]
          } , 
          { 
            "label" : "30 to 34" ,
            "value" : male[6]
          } , 
          { 
            "label" : "35 to 39" ,
            "value" : male[7]
          } , 
          { 
            "label" : "40 to 44" ,
            "value" : male[8]
          } , 
          { 
            "label" : "45 to 49" ,
            "value" : male[9]
          } , 
          { 
            "label" : "50 to 54" ,
            "value" : male[10]
          } , 
          { 
            "label" : "55 to 59" ,
            "value" : male[11]
          } , 
          { 
            "label" : "60 to 64" ,
            "value" : male[12]
          } , 
          { 
            "label" : "65 to 69" ,
            "value" : male[13]
          } , 
          { 
            "label" : "70 to 74" ,
            "value" : male[14]
          } , 
          { 
            "label" : "75 to 79" ,
            "value" : male[15]
          } , 
          { 
            "label" : "80 to 84" ,
            "value" : male[16]
          } , 
          { 
            "label" : "85+" ,
            "value" : male[17]
          }
        ]
      }]
  
}

if (subject == "race"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "% people of color",
        "values": [
          { 
            "label" : "2010" ,
            "value" : data[i].poc_pct
          }
        ]
      },{
        "key": "% white",
        "values": [
          { 
            "label" : "2010" ,
            "value" : data[i].white_pct
          }
        ]
      }]
    }
  }
}

if (subject == "social"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "No Votes",
        "values": [
          { 
            "label" : "2012" ,
            "value" : data[i].NO
          }
        ]
      },{
        "key": "Yes Votes",
        "values": [
          { 
            "label" : "2012" ,
            "value" : data[i].YES
          }
        ]
      }]
    }
  }
}

}

mapBuild("#popMap","#popInfo","#popChart","counties.json","population",dataPopulation,0);
mapBuild("#edMap","#edInfo","#edChart","counties.json","education",dataEducation,1);
mapBuild("#religionMap","#religionInfo","#religionChart","counties.json","religion",dataReligion,2);
mapBuild("#incomeMap","#incomeInfo","#incomeChart","counties.json","income",dataIncome,3);
mapBuild("#costsMap","#costsInfo","#costsChart","counties.json","costs",dataCosts,4);
mapBuild("#raceMap","#raceInfo","#raceChart","counties.json","race",dataRace,5);
mapBuild("#ageMap","#ageInfo","#ageChart","counties.json","age",dataMAge,6);
mapBuild("#socialMap","#socialInfo","#socialChart","counties.json","social",data2012,7);


function mapTips(d, subject, dataCompare){
  if (d == "Minnesota") { var where = "Minnesota"; }
  else { var where = d.properties.COUNTYNAME; }

  if (subject == "population"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%.0f")(dataCompare[i].pctChange) + " population growth 2010-2014"; 
      }
     }
    }
  if (subject == "education"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%.0f")(dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) + " with college degrees"; 
      }
     }
    }
  if (subject == "income"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("$,.00f")(dataCompare[i].income) + " median income"; 
      }
     }
    }
  if (subject == "costs"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("$,.00f")(dataCompare[i].YearlyCost) + " annual household costs"; 
      }
     }
    }
  if (subject == "age"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format(".0f")(dataCompare[i].median_age) + " median age"; 
      }
     }
    }
  if (subject == "religion"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format(".0f")(dataCompare[i].adherent_pct) + "% religious adherency"; 
      }
     }
    }
  if (subject == "race"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%")(dataCompare[i].poc_pct) + " people of color"; 
      }
     }
    }
   if (subject == "social"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return dataCompare[i].PctWin + "% voted No"; 
      }
     }
    }
}

function mapBuild(container, boxContainer, chartContainer, shape, subject, dataCompare, index) {

if (subject != "politics") { $(boxContainer).html("<div class='countyName'>Minnesota</div><div class='metric' style='color:" +  mapColor("Minnesota", subject, dataCompare) + "'>" + mapTips("Minnesota", subject, dataCompare) + "</div>"); }

var width = 350,
    height = 350,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5037)
    .translate([50, 970]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

var districtInfo = document.getElementById('infobox');
var none = "#ddd";
var q1 = "#74C476";
var q2 = "#49ab4b";
var q3 = "#347c36";
var q4 = "#204c21";
var q5 = "#163417";

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d){
         return mapColor(d.properties.COUNTYNAME, subject, dataCompare);
        })
       .on("mousedown", function(d, i){
          if (subject == "age") { var countyName = d.properties.COUNTYNAME + " County"; redrawChart(chart,chartContainer,subject,dataAge,d.properties.COUNTYNAME,index); }
          else { var countyName = d.properties.COUNTYNAME + " County"; redrawChart(chart,chartContainer,subject,dataCompare,d.properties.COUNTYNAME,index); }

          $(boxContainer).html("<div class='countyName'>" + countyName + "</div><div class='metric' style='color:" + mapColor(d.properties.COUNTYNAME, subject, dataCompare) + "'>" + mapTips(d, subject, dataCompare) + "</div>");
})
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
             if (subject == "politics") { var countyName = "District " + d.properties.DISTRICT; }
             else { var countyName = d.properties.COUNTYNAME + " County";  }
        return "<div class='countyName'>" + countyName + "</div><div style='color:" + mapColor(d.properties.COUNTYNAME, subject, dataCompare) + "'>" + mapTips(d, subject, dataCompare) + "</div>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .myButton2").click(function() {
  clicked2();
  if (subject == "age") { redrawChart(chart,chartContainer,subject,dataAge,"Minnesota",index); }
  else if (subject == "politics") { redrawChart(chart,chartContainer,subject,dataCompare,"Minnesota",index); }
  else { redrawChart(chart,chartContainer,subject,dataCompare,"Minnesota",index); }
  $(boxContainer).html("<div class='countyName'>Minnesota</div><div class='metric' style='color:" +  mapColor("Minnesota", subject, dataCompare) + "'>" + mapTips("Minnesota", subject, dataCompare) + "</div>");
});


function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  // g.transition()
  //     .duration(750)
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //     .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

//   g.transition()
//       .duration(750)
// .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
//       .style("stroke-width", 1.5 / k + "px");
}

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};
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