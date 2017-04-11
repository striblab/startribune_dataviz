d3.json("./data/mncounty_internet2014.json", function(error, dataLoad) {

var data = dataLoad.mncounty_internet2014;

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

});