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
if (selected == "all"){
$(".slide").show();
}

d3.json("./data/agencies.json", function(error, dataLoadA) {
d3.json("./data/counts.json", function(error, dataLoadC) {

var dataA = dataLoadA.agencies;
var dataC = dataLoadC.counts;
// var aspect = 800 / 500, chart = $("#country svg");

// $(window).on("resize", function() {   
//   var targetWidth = chart.parent().width();   
//   chart.attr("width", targetWidth);   
//   chart.attr("height", targetWidth / aspect);
// });

var allPayments = 60791553;
var allCount = 934;

//DATA POPULATE
function listSpill(data){
  d3.select("#agenciesList").selectAll(".district")
    .data(dataA).enter().append("li")
    .attr("class",function(d) { return "district"; })
    .on("click",function(d, i){
      var pct = d3.format("%.2f")(d.total / allPayments);
      $("#thisDistrict").html(d.agency);
      $("#pct").html(d.count);
      $("#total").html(d3.format("$,.0f")(d.total));
      if (d.agency != "All Agencies") {
        $("#chartPortion .bar").css("height",d3.format("%.2f")((d.total / allPayments) + 0.10));
        $("#chartCounts .bar").css("height",d3.format("%.2f")((d.count / allCount) + 0.10));
      } else {
        $("#chartPortion .bar").css("height",d3.format("%.2f")((d.total / allPayments) - 0.10));
        $("#chartCounts .bar").css("height",d3.format("%.2f")((d.count / allCount) - 0.10));
      }

      chartYear.load({
                columns: [
                    ['Total',d.y2007,d.y2008,d.y2009,d.y2010,d.y2011,d.y2012,d.y2013,d.y2014,d.y2015,d.y2016,d.y2017]
                ]
      });

      for (var i=0; i < dataC.length; i++) {
        if (dataC[i].agency == d.agency) {
          chartTime.load({
                columns: [
                    ['Payments',dataC[i].y2007,dataC[i].y2008,dataC[i].y2009,dataC[i].y2010,dataC[i].y2011,dataC[i].y2012,dataC[i].y2013,dataC[i].y2014,dataC[i].y2015,dataC[i].y2016,dataC[i].y2017]
                ]
           });
              break;
          }
      }


    })
    .html(function(d, i){ 
      return i + ".) " + d.agency;
    });
}

listSpill(dataA);

//CLICKERTHINGERS
$("#districtSelect").click(function() { 
  $("#agenciesList, #filter").slideToggle();
  $(".directions").toggle();
});

$(".district").click(function() { 
  $("#agenciesList, #filter").slideToggle();
  $(".directions").toggle();
});

//SEARCH
$('#filter input').on("keyup search",function(i){
   $('.district').hide();
   var txt = $('#filter input').val();
   
   $('.district').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       } 
   });
});

//SMALL CHARTS
    var  padding = {
            top: 20,
            right: 0,
            bottom: 20,
            left: 40,
        };

    var chartYear = c3.generate({
          bindto: "#chartYear",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x',"2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],
                  ['Total',6518409.18, 1420910.08, 6768494.82, 2263038.36, 10803924.29, 5218351.25, 6164615.62, 4269012.44, 5853555.49, 3097124.18, 8414117.5]
              ],
              type: 'bar'
          },
            legend: {
                show: false
            },
            color: {
                  pattern: ['#3580A3']
                },
          axis: {
              rotated: true,
                y: {
                     show:false,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         values: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                         count: 11,
                         format: d3.format('$,.0f')
                        }
                    },
              x: {
                // show:false,
                  type: 'category',
                  tick: {
                    multiline: false
                  }
              }
          }
    });


    var chartTime = c3.generate({
          bindto: "#chartTime",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x',"2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],
                  ['Payments',48,59,84,81,74,110,81,76,112,9,109]
              ],
              type: 'bar',        
              labels: {
                  format: {
                      'Payments': d3.format(','),
                  }
              }
          },
            legend: {
                show: false
            },
            color: {
                  pattern: ['#3580A3']
                },
          axis: {
              rotated: true,
                y: {
                     show:false,
                        max: 120,
                        min: 0,
                        padding: {bottom: 0, top: 14},
                        tick: {
                         values: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                         count: 11,
                         format: d3.format(',')
                        }
                    },
              x: {
                // show:false,
                  type: 'category',
                  tick: {
                    multiline: false
                  }
              }
          }
    });


//MAPPAGE
function mapColor(d, subject, dataCompare){

    return "#dddddd";
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

function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index, visible) {

if (geo=="country") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(1000).translate([400, 260]); }
else if (geo=="us") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(2000).translate([330, 430]); }
else if (geo=="mn") { var width = $(container).width(), height = 300, centered; var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var width = $(container).width(), height = 350, centered; var projection = d3.geo.mercator().scale([16500]).center([-92.403259,44.988113]); }

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
// d3.json("shapefiles/us_states_topo.json", function(error, st) {

  g.append("g")
      .attr("class", "states noclicky")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      .attr("id", function(d) { var str = d.properties.NAME + "" + d.properties.GEOID + "_" + geo; return str.replace(new RegExp(" ", "g"),"-"); })
      .style("fill", function(d){
         return mapColor(d, subject, dataCompare);
      })
      .on("mousedown", function(d, i){

      })
      .style("stroke-width", ".5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        // return mapTips(d, race, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

      // if (subject == "national") { var marks = dataUS; var size = "2px"; }
      // if (subject == "state") { var marks = dataMN; var size = "5px"; }

  // svg.selectAll("circle")
  //   .data(marks)
  //   .enter()
  //   .append("circle")
  //   .attr('class','mark')
  //   .attr('width', 10)
  //   .attr('height', 10)
  //   .style("opacity",0.5)
  //   .attr("r", size)
  //   .attr("fill", "#333")
  //   .attr("transform", function(d) { if(d.longitude != null) { return "translate(" + projection([d.longitude,d.latitude]) + ")";}})
  //   .call(d3.helper.tooltip(function(d, i){
  //       return "<div>" + d3.time.format("%Y-%m-%d")(new Date(d.datetime)) + "</div><div>" + d.comments + "</div>";
  //     }));

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



// });
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

  // mapBuild("#country", "#districtName", "#chart", "us_states.json", "national", "country", dataMN, 2, 1);
  // mapBuild("#mapMN", "#districtName", "#chart", "counties.json", "state", "mn", null, 2, 1);

  // var targetWidth = chart.parent().width();   
  // chart.attr("width", targetWidth);
  // chart.attr("height", targetWidth / aspect);
});
});