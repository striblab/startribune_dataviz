var aspect = 800 / 350, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

$("#property").css("background-color","#333");

$( ".myButton" ).click(function() {
  $(".myButton").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  });

d3.json("./data/greenline_ridership.json", function(error, data) {

var boardData = data.greenline_ridership;

var width = $("#map").width(),
    height = 350,
    centered;

var projection = d3.geo.albersUsa()
.scale(184537)
    .translate([-10700, 23050]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");


var q1 = "#fcae91"; 
var q2 = "#fb6a4a"; 
var q3 = "#de2d26"; 
var q4 = "#a50f15"; 


d3.json("shapefiles/landmarks.geo.json", function(error, landmarks) {

  g.append("g")
      .attr("id", "landmarks")
    .selectAll("path")
      .data(landmarks.features)
    .enter().append("path")
      .attr("d", path)
      //.on("click", clicked)
      .style("fill", "#fff")
      .style("fill-opacity", "0")
      .style("stroke-width", "1.5px")
      .style("stroke", "#ddd");

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "landmark-borders")
      .attr("d", path);
});


d3.json("shapefiles/census-tracts.geo.json", function(error, tracts) {

      d3.json("shapefiles/metrotransit-green-line.geo.json", function(error, line) {

  g.append("g")
      .attr("id", "greenline")
    .selectAll("path")
      .data(line.features)
    .enter().append("path")
      .attr("d", path)
      //.on("click", clicked)
      .style("fill", "#fff")
      .style("fill-opacity", "0")
      .style("stroke", "#333")
      .style("stroke-width", "1.5px");


  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "greenline-borders")
      .attr("d", path);
});

d3.json("shapefiles/metrotransit-green-line-stops.geo.json", function(error, stops) {

  g.append("g")
      .attr("id", "stops")
    .selectAll("path")
      .data(stops.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d) { 
        for (var j = 0; j < 24; j++){
          if (d.properties.Station == boardData[j].station){ 
            
            var avg = (Number(boardData[j].Total14Avg) + Number(boardData[j].Total15Avg)) / 2;
            if (avg >= 3000){ return q4; }
            if (avg >= 2000){ return q3; }
            if (avg >= 1000){ return q2; }
            if (avg >= 600){ return q1; }
            else { return "#ddd"; }
            }
         }
      })
      .style("fill-opacity", "1")
      .style("stroke-width", "3.5px")
      .style("stroke", function(d) { 
        for (var j = 0; j < 24; j++){
          if (d.properties.Station == boardData[j].station){ 
            
            var avg = (Number(boardData[j].Total14Avg) + Number(boardData[j].Total15Avg)) / 2;
            if (avg >= 3000){ return q4; }
            if (avg >= 2000){ return q3; }
            if (avg >= 1000){ return q2; }
            if (avg >= 600){ return q1; }
            else { return "#ddd"; }
            }
         }
      })
      .on("mousedown", function(d, i){
        for (var j = 0; j < 24; j++){
          if (d.properties.Station == boardData[j].station){ 
            
            var stationData = [
  {
    "key": "Average Daily Boardings",
    "values": [
      { 
        "label" : "June '14" ,
        "value" : boardData[j].Jun14Avg
      }
      ,
      { 
        "label" : "July '14" ,
        "value" : boardData[j].Jul14Avg
      }
      ,
      { 
        "label" : "August '14" ,
        "value" : boardData[j].Aug14Avg
      }
      ,
      { 
        "label" : "September '14" ,
        "value" : boardData[j].Sep14Avg
      }
      ,
      { 
        "label" : "October '14" ,
        "value" : boardData[j].Oct14Avg
      }
      ,
      { 
        "label" : "November '14" ,
        "value" : boardData[j].Nov14Avg
      }
      ,
      { 
        "label" : "December '14" ,
        "value" : boardData[j].Dec14Avg
      }
      ,
      { 
        "label" : "January '15" ,
        "value" : boardData[j].Jan15Avg
      }
      ,
      { 
        "label" : "February '15" ,
        "value" : boardData[j].Feb15Avg
      },
      { 
        "label" : "March '15" ,
        "value" : boardData[j].Mar15Avg
      },
      { 
        "label" : "April '15" ,
        "value" : boardData[j].April15Avg
      },
      { 
        "label" : "May '15" ,
        "value" : boardData[j].May15Avg
      }

    ]
  }
]
     var stationName = document.getElementById('stationName');
     stationName.innerHTML = d.properties.Station;
     redrawChart(stationData);  
 }
}
        })
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.Station + "</b>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "stops-borders")
      .attr("d", path);
});

// });

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
  var stationName = document.getElementById('stationName');
  stationName.innerHTML = "Green Line Stations";
  redrawChart(allData);
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

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 3.3 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
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
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}


var chart;
nv.addGraph(function() {
  var width = $('#chart').width, height = 170;
    chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      //.rotateLabels(45)      //Angle to rotate x-axis labels.
      //.showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      //.showLegend(false)
      //.showXAxis(false)
      //.groupSpacing(0.1)    //Distance between each group of bars.
      .color(['#31a354'])
      //.tooltip(function(key, x, y, e, graph) { return "<h3>" + x + "</h3>" + "<span class='pos_change'>" +  y + "</span> <span>" + key + "</span>";})
      .width(width-20).height(height-10);

    chart.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart svg')
        .datum(allData)
        .call(chart);

        var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
xTicks
  .selectAll('text')
  .attr('transform', function(d,i,j) { return 'translate (-30, 42) rotate(-50 0,0)' }) ;

    nv.utils.windowResize(chart.update);


    return chart;
});


function redrawChart(data){

    d3.select('#chart svg').datum(data).transition().duration(300).call(chart);
    nv.utils.windowResize(chart.update);
}

var allData = [
  {
    "key": "Average Daily Boardings",
    "values": [
      { 
        "label" : "June '14" ,
        "value" : boardData[23].Jun14Avg
      }
      ,
      { 
        "label" : "July '14" ,
        "value" : boardData[23].Jul14Avg
      }
      ,
      { 
        "label" : "August '14" ,
        "value" : boardData[23].Aug14Avg
      }
      ,
      { 
        "label" : "September '14" ,
        "value" : boardData[23].Sep14Avg
      }
      ,
      { 
        "label" : "October '14" ,
        "value" : boardData[23].Oct14Avg
      }
      ,
      { 
        "label" : "November '14" ,
        "value" : boardData[23].Nov14Avg
      }
      ,
      { 
        "label" : "December '14" ,
        "value" : boardData[23].Dec14Avg
      }
      ,
      { 
        "label" : "January '15" ,
        "value" : boardData[23].Jan15Avg
      }
      ,
      { 
        "label" : "February '15" ,
        "value" : boardData[23].Feb15Avg
      },
      { 
        "label" : "March '15" ,
        "value" : boardData[23].Mar15Avg
      },
      { 
        "label" : "April '15" ,
        "value" : boardData[23].April15Avg
      },
      { 
        "label" : "May '15" ,
        "value" : boardData[23].May15Avg
      }

    ]
  }
]

});

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

});