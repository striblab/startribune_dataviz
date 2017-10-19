// var aspect = 550 / 550,
//     chart = $("#map svg");
// $(window).on("resize", function() {
//     var targetWidth = chart.parent().width();
//     chart.attr("width", targetWidth);
//     chart.attr("height", targetWidth / aspect);
// });

$( document ).ready(function() {
  $("#national").css("background-color","#333");
$( "#national" ).click(function() {
  $(".myButton").css("background-color","#888");
  $("#national").css("background-color","#333");
  redrawChart(usData);
  }); 
$( "#age" ).click(function() {
  $(".myButton").css("background-color","#888");
  $("#age").css("background-color","#333");
  redrawChart(ageData);
  });
$( "#other" ).click(function() {
  $(".myButton").css("background-color","#888");
  $("#other").css("background-color","#333");
  redrawChart(secondData);
  });  
$( "#second" ).click(function() {
  $(".myButton").css("background-color","#888");
  $("#second").css("background-color","#333");
  redrawChart(otherData);
  });  
});


var chart;
  nv.addGraph(function() {
    chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 100})
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .transitionDuration(350)
      .tooltip(function(key, x, y, e, graph) {
    return '<h3>' + x + '</h3>' +
           '<p>' +  y + ' in ' + key + '</p>';
        })
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

    chart.yAxis
        .tickFormat(d3.format(',.1%'));

    d3.select('#chart1 svg')
        .datum(usData)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });

var ageData = [
  {
    "key": "2010",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "Ages 18-24" ,
        "value" : .218
      } , 
      { 
        "label" : "Ages 25-44" ,
        "value" : .197
      } , 
      { 
        "label" : "Ages 45-64" ,
        "value" : .149
      } , 
      { 
        "label" : "Ages 65+" ,
        "value" : .054
      }
    ]
  },
  {
    "key": "2014",
    "color": "#2B2B2B",
    "values": [
      { 
        "label" : "Ages 18-24" ,
        "value" : .153
      } , 
      { 
        "label" : "Ages 25-44" ,
        "value" : .187
      } , 
      { 
        "label" : "Ages 45-64" ,
        "value" : .142
      } , 
      { 
        "label" : "Ages 65+" ,
        "value" : .054
      }
    ]
  }
]

var usData = [
  {
    "key": "U.S.",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "1999" ,
        "value" : .253
      } , 
      { 
        "label" : "2003" ,
        "value" : .215
      } , 
      { 
        "label" : "2007" ,
        "value" : .191
      } , 
      { 
        "label" : "2010" ,
        "value" : .17
      } , 
      { 
        "label" : "2014" ,
        "value" : .161
      }
    ]
  },
  {
    "key": "MN",
    "color": "#2B2B2B",
    "values": [
      { 
        "label" : "1999" ,
        "value" : .221
      } , 
      { 
        "label" : "2003" ,
        "value" : .191
      } , 
      { 
        "label" : "2007" ,
        "value" : .17
      } , 
      { 
        "label" : "2010" ,
        "value" : .161
      } , 
      { 
        "label" : "2014" ,
        "value" : .144
      }
    ]
  }
]

var otherData = [
  {
    "key": "2010",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "Cigar" ,
        "value" : .032
      } , 
      { 
        "label" : "Pipe" ,
        "value" : .006
      } , 
      { 
        "label" : "Waterpipe" ,
        "value" : .007
      } , 
      { 
        "label" : "Smokeless" ,
        "value" : .044
      } , 
      { 
        "label" : "E-cigarettes" ,
        "value" : .007
      }
    ]
  },
  {
    "key": "2014",
    "color": "#2B2B2B",
    "values": [
      { 
        "label" : "Cigar" ,
        "value" : .029
      } , 
      { 
        "label" : "Pipe" ,
        "value" : .007
      } , 
      { 
        "label" : "Waterpipe" ,
        "value" : .007
      } , 
      { 
        "label" : "Smokeless" ,
        "value" : .044
      } , 
      { 
        "label" : "E-cigarettes" ,
        "value" : .059
      }
    ]
  }
]

var secondData = [
  {
    "key": "2014",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "Building Entrance" ,
        "value" : .204
      } , 
      { 
        "label" : "Bar Patio" ,
        "value" : .128
      } , 
      { 
        "label" : "Parking Lot" ,
        "value" : .091
      } , 
      { 
        "label" : "Gambling Venue" ,
        "value" : .063
      } , 
      { 
        "label" : "Bus Stop" ,
        "value" : .031
      } , 
      { 
        "label" : "Park" ,
        "value" : .025
      }
    ]
  }
]

function redrawChart(data){
    d3.select('#chart1 svg').datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
}

var width = 450,
    height = 500,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5037)
    .translate([100, 990]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    //.on("click", clicked2)
    .attr("height", height);

var g = svg.append("g");

var none = "#f7f7f7";
var q1="#006d2c" //300%
var q2="#74c476" //100%
var q3="#c7e9c0" //10%
var q4 = "#002911";

var districtInfo = document.getElementById('infobox');

districtInfo.innerHTML = "<div class='county_name'>Minnesota</div><div class='prevalence'>14.4% smoke</div>";

d3.json("shapefiles/regions.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d, i){
	if (d.properties.PREV >=18) {
		return q4;
	}
	if (d.properties.PREV >=15) {
		return q1;
	}
	if (d.properties.PREV >=13) {
		return q2;
	}
	if (d.properties.PREV >=12) {
		return q3;
	}
        })
      .on("mousedown", function(d, i){

    districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " Region</div><div class='prevalence'>" + d.properties.PREV + "%  smoke</div>";

}) 
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + "</b>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});



// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

//svg.call(zoom);

$(".zoom").click(function() {
  clicked2();
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
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;
var districtInfo = document.getElementById('infobox');

    districtInfo.innerHTML = "<div class='county_name'>Minnesota</div><div class='prevalence'>14.4%  smoke</div>";


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
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
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