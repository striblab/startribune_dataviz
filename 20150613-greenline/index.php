<!doctype html>

<html lang="en">
<head>
  <title>LRT Green Line Transformations</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="LRT Green Line Transformations">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link href="js/nvd3-master/src/nv.d3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
<style>
  h1 { font-family: Popular;}

	body{ font-family:Arial;  }
  	.background { fill: none; pointer-events: all; }
  	#states { fill: #aaa; }
  	#state-borders { fill: none; stroke: #fff; stroke-width: 2px; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
  	.tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-size:13px; font-family:Arial; }
  	#states .active { fill: #333 !important; fill-opacity: 1 !important; }
  	.faded { fill-opacity: 0.5 !important; }
  	#menu { margin-top:10px; }
    .myButton { background-color:#61bd1a; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:3px; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:13px; padding:6px; text-decoration:none; font-weight:900; margin:2px; width:100%; }
    .myButton:active { background-color:#378f00; }
        .filter { display:inline-block; width:24%; text-align:center; }
    button:focus {outline:0 !important;}
    #map { width:100%; float:left; border: 1px solid black; padding:2px; margin:5px; text-align:center;}
    #wrapper { width:97%;}
    .county_name{font-size:20px; font-family: "Popular"; font-weight:900;}
    .legend label, .legend span { display:block; float:left; height:15px; width:35px; text-align:center; font-size:11px; color:#808080; }
    #quantize{ width:100%; padding:5px; text-align:center; }
    .prevalence{ float:left; font-weight: bold; }
    .prevalence a{ text-decoration:none;f ont-weight:bold; color:steelblue; }
    .num{ float:right; font-size: 1.5em; font-weight: 900; color: #2ca25f; }
    .bigNum{ font-size: 2.2em; font-weight: 900; color: #2ca25f; float:right; }
    .metric { font-size: 2.2em; font-weight:bold; color:#333; float:left; }
    .pos { color:#2ca25f; }
    .neg { color:#b2182b !important; }
    .norm { color:#333; }
    #infobox h1 { color:#333 !important; font-weight:900 !important; margin-top:0 !important;}
    hr{ border:0; border-bottom:1px solid #ccc; background:#999; clear:both; margin-top:5px;}
    h3 { font-family:Popular !important; }

    #chart { width:100%; }
    .zoom{ text-decoration:none;font-weight:bold;color:steelblue; float:right !important;}
    .faded { fill-opacity: 0.5 !important; }
    #stops .active { fill: #333 !important; fill-opacity: 1 !important; stroke: #333 !important; }

    .nvtooltip { position: absolute; background-color: rgba(255,255,255,1); padding: 10px; border: 1px solid #ddd; z-index: 10000; width:auto; font-family: Arial;font-size: 16px; transition: opacity 200ms linear; -moz-transition: opacity 200ms linear; -webkit-transition: opacity 200ms linear; transition-delay: 200ms; -moz-transition-delay: 200ms; -webkit-transition-delay: 200ms; -moz-border-radius: 5px; border-radius: 5px; pointer-events: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
  	.nvtooltip h3 { margin: 0; padding: 5px; text-align: center; font-weight:900; background:white !important; font-size:14px; }
  	.nvtooltip p { margin: 0; padding: 0; text-align: center; }
  	.nvtooltip span { display: inline-block; margin: 2px 0; }
  	.nvtooltip-pending-removal { position: absolute; pointer-events: none; }

    #blueLRT { float:left; text-align:center; width:40%; }
    #greenLRT { float:right; text-align:center; width:40%; }
    #percent { text-align:center; width:18%; float:left; }
    .greenNum { color:#61bd1a; font-size:2.5em; line-height:100%;  font-weight:900; }
    .blueNum { color:steelblue; font-size:2.5em; line-height:100%; font-weight:900; }

     @media only screen and (min-width:650px) {
    .downloadButton:hover { background-color:#378f00 !important; }
    }

    #blueLRT h3, #greenLRT h3 { font-family:Arial, Helvetica, sans-serif !important; font-weight:400 !important; }

    /*@media only screen and (min-width:650px) {*/
    #stops path:hover{ fill:#333 !important; stroke: #333 !important; cursor:pointer !important; }
    .downloadButton:hover { background-color:#378f00 !important; }
    .myButton:hover { background-color:#378f00 !important; }
    /*}*/
</style>
</head>

<body>

<div id="wrapper">

<h3>Approximate Total Boardings January-June 2015</h3>
<p></p>
<div id="blueLRT">
<h3>Blue Line</h3>
<p></p>
<p class="blueNum">5,000,000</p>
</div>

<div id="greenLRT">
<h3>Green Line</h3>
<p></p>
<p class="greenNum">5,600,000</p>
</div>

<p style="clear:both"></p>

<h3>Average Daily Boardings by Stop June 2014-May 2015</h3>
<p></p>
<div id="map"><svg width="100%" height="350" viewBox="0 0 600 350" preserveAspectRatio="xMidYMid"></svg></div>

<div class='legend' id="board">
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Less</span>
    <span style='background:#fcae91;'></span>
    <span style='background:#fb6a4a;'></span>
    <span style='background:#de2d26;'></span>
    <span style='background:#a50f15;'></span>
    <span style='background:#fff;'>More</span>
</div>

<a href='javascript:void(0);' class='zoom'>Reset View</a>

<div style="clear:both"></div>
<h3>Average Daily Boardings by Month - <span id="stationName">Green Line Stations</span></h3>
<p></p>
<div id="chart"><svg width="100%" height="195"></svg></div>

<a href='https://github.com/jhargarten/dataviz-projects/blob/master/strib/20150613-greenline/data/lrt_rides.zip?raw=true' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>
</div>
  
</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="js/nvd3-master/lib/d3.v3.js"></script>
<script src="js/nvd3-master/nv.d3.js"></script>
<script src="js/nvd3-master/src/utils.js"></script>
<script src="js/nvd3-master/src/tooltip.js"></script>
<script src="js/nvd3-master/src/models/legend.js"></script>
<script src="js/nvd3-master/src/models/axis.js"></script>
<script src="js/nvd3-master/examples/stream_layers.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1X9fPQ-FUegTf8E4HWtXeySCKzM9qtKbJs56tD2R6KRE&sheet=greenline_ridership

<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=YFQKBYw4L84kl7adaq1TYJXBNN4Uzz_NKklH2ZtncZkqqH-ts8gOTQ7snzDUksQV0lkDpXHLadBLgFhOtyK2wfJcgupDbMfoOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6Tfv0G49k1zY7acJXCedsJ5llqxXBMPUct2GGl0aTEOo3-5hZiyrwzA-hjpkEftHNgbpduxq8FudgLSSmnsv9CwmE7j-oM2zeHYm4lCyG2i8Y&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var data = <?php echo $jsonData; ?>;

var boardData = data.greenline_ridership;
</script>

<script>
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
</script>

<script>

// d3.csv("data/boardings_avg.csv", function(error, boardData) {
//     boardData.forEach(function(d) {
//   d.station = d.Station;
//   d.Jun14Avg = +d.Jun14Avg;
//   d.Jul14Avg = +d.Jul14Avg;
//   d.Aug14Avg = +d.Aug14Avg;
//   d.Sep14Avg = +d.Sep14Avg;
//   d.Oct14Avg = +d.Oct14Avg;
//   d.Nov14Avg = +d.Nov14Avg;
//   d.Dec14Avg = +d.Dec14Avg;
//   d.Total14Avg = +d.Total14Avg;
//   d.Jan15Avg = +d.Jan15Avg;
//   d.Feb15Avg = +d.Feb15Avg;
//   d.Mar15Avg = +d.Mar15Avg;
//   d.April15Avg = +d.April15Avg;
//   d.May15Avg = +d.May15Avg;
//   d.Total15Avg = +d.Total15Avg;
//     });

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

// d3.json("shapefiles/neighborhoods.json", function(error, us) {

//   g.append("g")
//       .attr("id", "mpls")
//     .selectAll("path")
//       .data(us.features)
//     .enter().append("path")
//       .attr("d", path)
//       //.on("click", clicked)
//       .style("fill", "#ddd")
//       .style("stroke-width", "1.5px")
//       .style("stroke", "#fff")
//       .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.NAME + "</b>";}));

//   g.append("path")
//       //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
//       .attr("id", "mpls-borders")
//       .attr("d", path);
// });

// d3.json("shapefiles/stpaul.json", function(error, us) {

//   g.append("g")
//       .attr("id", "stpaul")
//     .selectAll("path")
//       .data(us.features)
//     .enter().append("path")
//       .attr("d", path)
//       //.on("click", clicked)
//       .style("fill", "#ddd")
//       .style("stroke-width", "1.5px")
//       .style("stroke", "#fff")
//       .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.NAME + "</b>";}));

//   g.append("path")
//       //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
//       .attr("id", "stpaul-borders")
//       .attr("d", path);
// });

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

  // g.append("g")
  //     .attr("id", "tracts")
  //   .selectAll("path")
  //     .data(tracts.features)
  //   .enter().append("path")
  //     .attr("d", path)
  //     //.on("click", clicked)
  //     .style("fill", "#ddd")
  //     .style("fill-opacity", 0)
  //     .style("stroke-width", "1.5px")
  //     .style("stroke-opacity", 0)
  //     .style("stroke", "#fff");

  // g.append("path")
  //     //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
  //     .attr("id", "tract-borders")
  //     .attr("d", path);

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

</script>
<script>
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
</script>


</html>