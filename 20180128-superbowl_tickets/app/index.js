/**
 * Main JS file for project.
 */

// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({ });

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

//CHARTS
  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
          		x: 'x',
                columns: [
                	['x',"2017-12-17","2017-12-18","2017-12-19","2017-12-20","2017-12-21","2017-12-22","2017-12-23","2017-12-24","2017-12-25","2017-12-26","2018-01-01","2018-01-02","2018-01-03","2018-01-04","2018-01-05","2018-01-08","2018-01-09","2018-01-10","2018-01-11","2018-01-15","2018-01-18","2018-01-19","2018-01-20","2018-01-21","2018-01-22"],
                  ['AVG',8018,8138,8173,8433,7890,7655,7655,8005,8005,8098,7615,7609,7868,7861,7778,8352,8329,8442,7960,9027,8760,8050,8023,8605,10011],
                  ['MIN',3349,3349,3300,3300,3295,3242,3242,3242,3242,3250,3200,3200,3200,3200,3200,3200,3200,3144,3729,4255,4375,4305,4350,4450,5000]
                ],
            type: 'area',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#333',"#bbb"]
                },
            axis: {
                  // rotated: true,
                  y: {
                  		max: 15000,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,5000,10000,15000],
                         format: d3.format('$,')
                        }
                    },
                x: {
                    type: 'timeseries',
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        // values: [1993,1997,2001,2005,2009,2013,2017],
                        multiline: false,
                        format: '%Y-%m-%d'
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: "2018-01-14", text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

chartTrend();



d3.json("./data/nilf.json", function(error, json) {

var data = json.counties;

var aspect = 800 / 500, chart = $("#country svg");

$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

function mapColor(d, subject, dataCompare){
  for (var i=0; i < dataCompare.length; i++){
    if (Number(d.properties.GEOID) == Number(dataCompare[i].Id2)){
      var points = dataCompare[i].Bucket;
      var color_scale = d3.scale.linear().domain([4,3,2,1]).range(['#D1E6E1','#67B4C2','#3580A3','#0D4673']);
      return color_scale(points);
    }
  }
    return "#fff";
}

function mapTips(d, subject, dataCompare){
  for (var i=0; i < data.length; i++){
    if (Number(d.properties.GEOID) == Number(dataCompare[i].Id2)){
      var points = dataCompare[i].Bucket;
      var pct = dataCompare[i].PctNILF;
      var color_scale = d3.scale.linear().domain([4,3,2,1]).range(['#D1E6E1','#67B4C2','#3580A3','#0D4673']);
      return "<div class='countyName'>" + dataCompare[i].Geography + "</div><div class='number'><span class='legendary' style='background-color:" + color_scale(points) + ";'>" + d3.format("%")(pct) + "</span> of middle-aged men not in labor force</div>"
    }
  }
}

function mapBuild(container, boxContainer, chartContainer, shape, race, geo, dataCompare, index, visible) {

if (geo=="country") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(1000).translate([400, 260]); }
else if (geo=="us") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(2000).translate([330, 430]); }
else if (geo=="mn") { var width = 350, height = 500, centered; var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var width = 350, height = 350, centered; var projection = d3.geo.mercator().scale([16500]).center([-92.403259,44.988113]); }

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

d3.json("shapefiles/" + shape, function(error, us) {
d3.json("shapefiles/us_states_topo.json", function(error, st) {

  var marks = [{long:-93.266667, lat:44.983333, name:"Minneapolis"},{long:-74.0059, lat:40.7127, name:"New York"},{long: -122.416667, lat: 37.783333, name:"San Francisco"},{long: -87.955833, lat: 43.052222, name:"Milwaukee"},{long: -87.684722, lat: 41.836944, name:"Chicago"},{long: -93.620833, lat: 41.590833, name:"Des Moines"},{long: -83.045833, lat: 42.331389, name:"Detroit"},{long: -86.15, lat: 39.766667, name:"Indiana"},{long: -96.731667, lat: 43.536389, name:"Sioux Falls"},{long: -118.25, lat: 34.05, name:"Los Angeles"},{long: -80.208889, lat: 25.775278, name:"Miami"},{long: -95.383056, lat: 29.762778, name:"Houston"},{long: -96.796667, lat: 32.775833, name:"Dallas"},{long: -71.063611, lat: 42.358056, name:"Boston"}];

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      .attr("id", function(d) { var str = d.properties.NAME + "" + d.properties.GEOID + "_" + geo; return str.replace(new RegExp(" ", "g"),"-"); })
      .style("fill", function(d){
         return mapColor(d, race, dataCompare);
      })
      .on("mousedown", function(d, i){

      })
      .style("stroke-width", ".5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

  // svg.selectAll("circle")
  //   .data(marks)
  //   .enter()
  //   .append("circle")
  //   .attr('class','mark')
  //   .attr('width', 10)
  //   .attr('height', 10)
  //   .attr("r", "1.3px")
  //   .attr("fill", "#333")
  //   .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";});

    // svg.insert("path", ".graticule")
    //   .datum(topojson.mesh(st, st.objects.us_states, function(a, b) { return a !== b; }))
    //   .attr("class", "state-boundary")
    //   .style("stroke-width", "1.2px")
    //   .attr("d", path);

  // svg.selectAll("text")
  //   .data(marks)
  //   .enter()
  //   .append("text")
  //   .attr('class','city-label')
  //   .attr("transform", function(d) {return "translate(" + projection([d.long+.23,d.lat-.09]) + ")";})
  //   .text(function(d) { return " " + d.name; });



});
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

$(".zoom").click(function() {
  clicked2();
  $('#filter input').val("");
  $("#districtName").html("Midwest");
  $(".district").removeClass("selected");
  $('.card, .card div').show();
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
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

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
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

  mapBuild("#country", "#districtName", "#chart", "us_counties.json", "labor", "country", data, 2, 1);

  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);

});