<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Group Home County Waiting List</title>
  <meta name="description" content="Group Home Couty Waiting List">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<style>
    body{ font-family:Arial;}
    .background { fill: none; pointer-events: all; }
    #states { fill: #aaa; }
    #state-borders { fill: none; stroke: #fff; stroke-width: 2px; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
    .tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-size:13px; font-family:"Popular"; }
    #states .active { fill: #333 !important; fill-opacity: 1 !important; }
    .faded { fill-opacity: 0.5 !important; }
    #map { float:left; width:525px; }
    h4 { font-family: "Benton Sans",Helvetica,Arial,sans-serif; }
    #infobox h4 {  margin-top: 1.83em; margin-bottom: 1em; margin-left: 0; margin-right: 0; font-weight: 900; }
    #infobox{ width:100%; height:150px; padding:10px; float:right; font-family: "Benton Sans",Helvetica,Arial,sans-serif; }
    .downloadButton { background-color:#61bd1a; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:3px; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:13px; padding:13px; text-decoration:none; font-weight:900; margin:5px; width:200px; }
    .downloadButton:active { background-color:#378f00; }
    #wrapper{ width:96.5%;}
    .county_name{font-size:20px; font-family:"Popular"; font-weight:900;}
    .legend label, .legend span { display:block; float:left; height:15px; width:35px; text-align:center; font-size:14px; color:#808080; }
    #quantize{ padding:5px; text-align:center; float:left; }
    .prevalence{ float:left; font-weight: bold; }
    .prevalence a{ text-decoration:none;f ont-weight:bold; color:steelblue; }
    .num{ float:right; font-size: 1.5em; font-weight: 900; color: #2ca25f; }
    .bigNum{ font-size: 3.5em; font-weight: 900; color: #2ca25f; }
    hr{ border:0; border-bottom:1px solid #ccc; background:#999; clear:both; margin-top:5px;}
    path:hover{ fill:#378f00 !important; cursor:pointer; }
    #states .active:hover { fill:#333 !important; }
   .downloadButton { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; font-size:.9em; text-align:center; margin-top:15px; margin-left:1%; width: 99%; background-color:#fff; color:#333; border-top: 1px solid #ccc; background-image: url('img/downloadDoc.svg'); background-size: 20px 20px; background-repeat: no-repeat; background-position: 2% 50%; }
   .downloadButton:hover {background-color:#fff !important; opacity:.5;}
   .downloadButton:active {background-color:#fff !important;}
   .breaker { clear:both; padding:5px; }
   .swatch { color:#49ab4b; font-weight:900; }
   .zoom{ float:right !important;}

    @media only screen and (max-width:530px) {
      #map { float:none; width:100%; }
    }
    @media only screen and (max-width:950px) {
      #infobox{ width:100% !important; float:none; }
      #map { float:none; }
    }
</style>


</head>

<body> 

<div id="wrapper">

<h4>Percent of allocated money unspent by county</h4>
<div id="map"><svg width="525" height="500" viewBox="0 0 630 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="breaker"></div>

<a href='javascript:void(0);' class='zoom'>Reset View</a>

<div id="quantize">
<span class='legend' id="aidQ">
  <nav class='legend clearfix'>
    <span style='background:#fff;'>-</span>
    <span style='background:#AD1625;'></span>
    <span style='background:#74C476;'></span>
    <span style='background:#49ab4b;'></span>
    <span style='background:#347c36;'></span>
    <span style='background:#204c21'></span>
    <span style='background:#163417'></span>
    <span style='background:#fff;'>+</span>
    </nav>
</span>
</div>

<div class="breaker"></div>

<div id="infobox">
<div class='chatter'>More than <span class='swatch'>$120 million</span> in county aid for group homes remains unspent in Minnesota.</div> 
</div>

</div>

<a href='https://docs.google.com/spreadsheets/d/1ckBZQQ6hK9w_wWKWDhsZB21u0CGFIYt4scuE3R9ALIU/pub?gid=799222312&single=true&output=csv' target='new_'><button class='downloadButton'>&#9660; Download Data</button></a>

</body>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1ckBZQQ6hK9w_wWKWDhsZB21u0CGFIYt4scuE3R9ALIU&sheet=waitlist

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=lvligOlsAoP_76RtXpYsNdZJvl-g9RpWnScd7Tk3OJODGM3yzPbPWJSHYaUYhy95bycmBDbC6A7uML4kG4_mMIKHPVjGWXkSOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TkNKVDlkUzzGatjCbv0vUXYPAgPhZjax1Fp-df68fLfJ2WmKtJJhkHixcCzrIV0nbGetL3GQdFGud9WSYqyzEtw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoad = <?php echo $jsonData; ?>;

var popData = dataLoad.waitlist;


</script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>

<script>
var aspect = 525 / 550, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});
</script>

<script>

var width = 525,
    height = 500,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5037)
    .translate([100, 970]);

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

var districtInfo = document.getElementById('infobox');
var none = "#ddd";
var q0 = "#AD1625";
var q1 = "#74C476";
var q2 = "#49ab4b";
var q3 = "#347c36";
var q4 = "#204c21";
var q5 = "#163417";

d3.json("shapefiles/counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d){
         for (var i = 0; i < 87; i++){
            if (d.properties.COUNTYNAME == popData[i].county) { 
              if ((popData[i].pct_unspent) > 30) { return q5; }
              else if ((popData[i].pct_unspent) > 20) { return q4; }
              else if ((popData[i].pct_unspent) > 15) { return q3; }
              else if ((popData[i].pct_unspent) > 10) { return q2; }
              else if ((popData[i].pct_unspent) > 0) { return q1; }
              else if ((popData[i].pct_unspent) < 0) { return q0; }
              else { return none; }
            }
        }
        })
       .on("mousedown", function(d, i){
       for (var i = 0; i < 87; i++){
        if (d.properties.COUNTYNAME == popData[i].county) {
              if ((popData[i].pct_unspent) > 30) { var swatch = q5; }
              else if ((popData[i].pct_unspent) > 20) { var swatch =  q4; }
              else if ((popData[i].pct_unspent) > 15) { var swatch =  q3; }
              else if ((popData[i].pct_unspent) > 10) { var swatch =  q2; }
              else if ((popData[i].pct_unspent) > 0) { var swatch =  q1; }
              else if ((popData[i].pct_unspent) < 0) { var swatch =  q0; }

          districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='stat'>Region: " + popData[i].name + "</div><div class='stat'>Allocated: " + d3.format("$,")(popData[i].allocated) + "</div><div class='stat'>Percent Unspent: <span style='color:" + swatch + ";font-weight:900;'>" + d3.format(".0")(popData[i].pct_unspent) + "%</span></div><div class='stat'>Waiting List: " + popData[i].waiting + "</div>" ;
        }
      }
})
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + " County</b>";}));

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


$(".zoom").click(function() {
  clicked2();
  var districtInfo = document.getElementById('infobox');
  districtInfo.innerHTML = "<div class='chatter'>More than <span class='swatch'>$120 million</span> in county aid for group homes remains unspent in Minnesota.</div>"
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