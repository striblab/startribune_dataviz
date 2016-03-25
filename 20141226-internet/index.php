<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minnesota Broadband Availability</title>
  <meta name="description" content="Minnesota Broadband Available">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
<style>
    .tooltip { background-color: rgba(255,255,255,1); border: 1px solid black; border-radius: 0; font-size: 14px; height: auto; margin: 10px; moz-border-radius: 10px; padding-left: 10px !important; padding-right: 10px !important; padding-top: 10px !important; webkit-border-radius: 10px; width: 230px; }
    .state { font-size: 14px; font-weight: bold; }
    .percentage { font-size: 18px; font-weight: 900; }
    #number1, #number2 { color: #666; font-family: popular-bold,sans-serif; font-size: 24px; font-style: normal; font-weight: 900; font-weight: bold; }
    .legend label, .legend span { color: #808080; display: block; float: left; font-size: 12px; height: 15px; text-align: center; width: 30px; }
    .percentage { float: right; }
    .broadband { float: left; }
    hr { background-color: #000; color: #fff; height: 1px; }
    #wrapper { width: 100%; }
    #years { margin: 15px; }
    .myButton { background-color:#fff; ont-family:"Benton Sans",Helvetica,Arial,sans-serif !important; border:0; border-radius:0; color:#000; cursor: pointer; display: inline-block; font-family: arial; font-size: 1.2em; font-weight: 900; moz-border-radius:0; padding: 13px; text-decoration: none; webkit-border-radius:0; width: 48%; }
    .myButton:active { background-color: #333; }
    .myButton:hover { background-color: #333 !important; color:#fff; }
    button:focus { outline: 0 !important; }
    path:hover { fill: #333 !important; cursor:normal !important; }
</style>

</head>

<body>
<div id="wrapper" style="position:relative;">
<div id="map"><svg width="500" height="410"></svg></div>
<div id="map2"><svg width="500" height="410"></svg></div>

<div class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff; margin-right:8px;'><20%</span>
    <span style='background:#c0e2ca;'></span>
    <span style='background:#9ad3b5;'></span>
    <span style='background:#73c5a0;'></span>
    <span style='background:#4db68b;'></span>
    <span style='background:#26a876;'></span>
    <span style='background:#009961;'></span>
    <span style='background:#fff; margin-left:5px;'>75%</span>
</div>
<p style="clear:both;"></p>
<p style="clear:both;"></p>
<div class="source">Source: Connect Minnesota, <a href="http://mn.gov/deed/programs-services/broadband/task-force/" target="new_">Governor's Task Force on Broadband</a></div>
<div id="chatter">
<div id="years">
<button id="old" class="myButton">2012</button>
<button id="new" class="myButton">2014</button>
</div>


<p></p>
<span id="number1">71.04%</span><span id="number2">61.57%</span><span> of Minnesota households had access to non-mobile broadband.</span>
<p>High-speed, in this case, is defined as at least 10mbps download and 6mbps upload speeds.</p>
<p>The map depicts percentage of households with available high-speed broadband service by county.</p>
</div>
<a href="https://docs.google.com/spreadsheets/d/19UbRO-CAFgsvU9rnipW6v_5cQxqTrhJPHMiXvlIBm5M/pub?output=csv" target="new_"><button class="downloadButton">&#9660; Download Data</button></a>

</div>
</body>

<!--SCRIPTS-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.min.js"></script>
<script src="//cdn.jsdelivr.net/underscorejs/1.6.0/underscore-min.map"></script>
<script src="//cdn.jsdelivr.net/underscorejs/1.6.0/underscore-min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js" type="text/javascript"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="http://datamaps.github.com/scripts/datamaps-all.js"></script>
<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19UbRO-CAFgsvU9rnipW6v_5cQxqTrhJPHMiXvlIBm5M&sheet=mncounty_internet2014

<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=NFPh63W67VZMgRlGOzR2jMAyMx9XyW1JRoP6zuqPpr8FQC4TsK4LNnuN3spHH3Ee5LMSp8DPXeCLZJRVU9Ho8yN-BaHd6SvUOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TWqLFHFX8hLuo23BslZYE0XJD1yQTLpmvc4A4mu0_fDdPulE6XFXPB7WIIUegsI7a35iDyrfKhroQtn3ImUoawuSiiCLAyTfHNIjuh_ICuRU&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataLoad = <?php echo $jsonData; ?>

var data = dataLoad.mncounty_internet2014;

// var aspect = 500 / 410,
//     chart = $("#map svg"),
//     chart2 = $("#map2 svg");
// $(window).on("resize", function() {
//     var targetWidth = chart.parent().width();
//     chart.attr("width", targetWidth);
//     chart.attr("height", targetWidth / aspect);
//     chart2.attr("width", targetWidth);
//     chart2.attr("height", targetWidth / aspect);
// });

$(document).ready(function(){
    $("#map2").hide();
    $("#number2").hide();
    $("#new").css("background-color","#333");
    $("#new").css("color","#fff");
  $("#old").click(function(){
    $("#map").hide();
    $("#map2").show();
    $("#number1").hide();
    $("#number2").show();
  });
  $("#new").click(function(){
    $("#map2").hide();
    $("#map").show();
    $("#number2").hide();
    $("#number1").show();
  });
  $( ".myButton" ).click(function() {
  $(".myButton").css("background-color","#fff");
  $(".myButton").css("color","#000");
  $(this).css("background-color","#333");
  $(this).css("color","#fff");
  });  
});

var q1 = "#c0e2ca";
var q2 = "#9ad3b5";
var q3 = "#73c5a0";
var q4 = "#4db68b";
var q5 = "#26a876";
var q6 = "#009961";

//MN BROADBAND MAP 2014
var projection7 = d3.geo.mercator().scale([14000]).center([-85.451660,45.521744]);
var path7 = d3.geo.path()
                 .projection(projection7);

var svg7 = d3.select("#map svg");

d3.json("shapefiles/counties.json", function(json) {
        svg7.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path7)
           .attr("stroke-width", 3)
           .style("stroke", "white")
           .style("fill", function(d) {

            for (var i=0; i < data.length; i++){
                  var j = Number(data[i].y2014);
                if (d.properties.COUNTYNAME == data[i].county) {
                    if (j > 75) { return q6; }
                    else if (j > 50) { return q5; }
                    else if (j > 40) { return q4; }
                    else if (j > 30) { return q3; }
                    else if (j > 20) { return q2; }
                    else if (j <= 20) { return q1; }
                        }
                      }
                   })
           .call(d3.helper.tooltip(
        function(d){
          for (var i=0; i < data.length; i++){
            var j = Number(data[i].y2014);
            var color;
                if (d.properties.COUNTYNAME == data[i].county) {
                    if (j > 75) { color = q6; }
                    else if (j > 50) { color = q5; }
                    else if (j > 40) { color = q4; }
                    else if (j > 30) { color = q3; }
                    else if (j > 20) { color = q2; }
                    else if (j <= 20) { color = q1; }

          return "<div class='state'>" + d.properties.COUNTYNAME + "</div>" + "<hr><div class='broadband'>Broadband availability</div><div class='percentage' style='color:" + color + "'>" + data[i].y2014 + "%</div>";
                      }
                    }
                  }
        ));
 });

//MN BROADBAND MAP 2012
var projection = d3.geo.mercator().scale([14000]).center([-85.451660,45.521744]);
var path = d3.geo.path()
                 .projection(projection);

var svg = d3.select("#map2 svg");

d3.json("shapefiles/counties.json", function(json) {
        svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 3)
           .style("stroke", "white")
           .style("fill", function(d) {

            for (var i=0; i < data.length; i++){
                  var j = Number(data[i].y2012);
                if (d.properties.COUNTYNAME == data[i].county) {
                    if (j > 75) { return q6; }
                    else if (j > 50) { return q5; }
                    else if (j > 40) { return q4; }
                    else if (j > 30) { return q3; }
                    else if (j > 20) { return q2; }
                    else if (j <= 20) { return q1; }
                        }
                      }
                   })
           .call(d3.helper.tooltip(
        function(d){
          for (var i=0; i < data.length; i++){
            var j = Number(data[i].y2014);
            var color;
                if (d.properties.COUNTYNAME == data[i].county) {
                    if (j > 75) { color = q6; }
                    else if (j > 50) { color = q5; }
                    else if (j > 40) { color = q4; }
                    else if (j > 30) { color = q3; }
                    else if (j > 20) { color = q2; }
                    else if (j <= 20) { color = q1; }

          return "<div class='state'>" + d.properties.COUNTYNAME + "</div>" + "<hr><div class='broadband'>Broadband availability</div><div class='percentage' style='color:" + color + "'>" + data[i].y2012 + "%</div>";
                      }
                    }
                  }
        ));
 });

//TOOLTIP STUFF
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
                .style('top', (absoluteMousePos[1] - 15)+'px')
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });
    };
};

function update(stuff){
 
var factor3 = stuff;

return factor3;
                               
}
</script>
</html>