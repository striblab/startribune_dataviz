(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/cities2014.json", function(error, dataLoad) {

// var dataLoad = <?php echo $jsonData; ?>

var data = dataLoad.cities2014;

var aspect = 525 / 600, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});


var width = 525,
    height = 600,
    centered;

var projection = d3.geo.albersUsa()
    .scale(29037)
    .translate([-930, 3480]);

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
districtInfo.innerHTML = "Click a city for census data";

var q1 = "#006d2c"; //40 and 129
var q2 = "#31a354"; //20
var q3 = "#74c476"; //10
var q4 = "#bae4b3"; //1
var none = "#e0e0e0"; //0
var q5 = "#fcae91"; //less than 0
var q6 = "#fb6a4a"; //less than 2
var q7 = "#de2d26"; //less than 4
var q8 = "#a50f15"; //less than 6

d3.json("shapefiles/metro.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d){
      	      if (d.properties.PctChg10 > .15) { return q1; }
              if (d.properties.PctChg10 > .10) { return q2; }
              if (d.properties.PctChg10 > .05) { return q3; }
              if (d.properties.PctChg10 > 0) { return q4; }
              if (d.properties.PctChg10 == 0 ) { return none; }
              if (d.properties.PctChg10 < 0) { return q8; }
        })
      .on("mousedown", function(d, i){ 

      	if (d.properties.PctChg10 > 0) { var pctchange = "<span class='pos'>+" + (d.properties.PctChg10 * 100).toFixed(1) + "%</span>"; }
      	else if (d.properties.PctChg10 < 0) { var pctchange = "<span class='neg'>" + (d.properties.PctChg10 * 100).toFixed(1) + "%</span>"; }
      	else { var pctchange = "<span class='norm'>" + (d.properties.PctChg10 * 100).toFixed(1) + " %</span>"; }

      	districtInfo.innerHTML = "<h1>" + d.properties.NAME + "</h1><hr><div class='metric'>Percent Change</div><div class='bigNum'>" + pctchange + "</div><hr><div class='metric'>Population 2010</div><div class='bigNum'>" + d3.format(',')(d.properties.POPESTIMAT) + "</div><hr><div class='metric'>Population 2014</div><div class='bigNum'>" + d3.format(',')(d.properties.POPESTIM_4) + "</div>" 
      })
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.NAME + "</b>";}));

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
 districtInfo.innerHTML = "Click a city for census data";
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
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
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
},{}]},{},[1])