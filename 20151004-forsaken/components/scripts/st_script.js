d3.json("./data/waitlist.json", function(error, dataLoad) {

var popData = dataLoad.waitlist;

var aspect = 350 / 350, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

var width = 350,
    height = 350,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5037)
    .translate([50, 970]);

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
var q0 = "#b36e74"; //red
var q1 = "#f7bd9c";//light
var q2 = "#dea98b";//
var q3 = "#c4967c";//
var q4 = "#ab836c";
var q5 = "#916f5c";//dark

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
          // districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='boxLeft'><div class='stat'>Region: " + popData[i].name + "</div><div class='stat'>Waiting List: " + popData[i].waiting + "</div></div><div class='boxRight'><div class='stat'>Allocated: " + d3.format("$,")(popData[i].allocated) + "</div><div class='stat'>Percent Unspent: <span style='color:" + swatch + ";font-weight:900;'>" + d3.format(".0")(popData[i].pct_unspent) + "%</span></div>";

          districtInfo.innerHTML = "<div class='chatter'><h2>" + d.properties.COUNTYNAME + " County</h2><div class='boxLeft'><div class='stat'>Region: <b>" + popData[i].name + "</b></div><div class='stat'>Waiting List: <b>" + popData[i].waiting + "</b></div></div><div class='boxRight'><div class='stat'>Allocated: <b>" + d3.format("$,")(popData[i].allocated) + "</b></div><div class='stat'>Percent Unspent: <b>" + d3.format(".0")(popData[i].pct_unspent) + "%</b></div></div>";
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
  districtInfo.innerHTML = "<div class='chatter'>Minnesota counties vary widely in spending state &ldquo;waiver&rdquo; money for people with disabilities.</div>"
});


function clicked(d) {
  var x, y, k;

  // if (d && centered !== d) {
  //   var centroid = path.centroid(d);
  //   x = centroid[0];
  //   y = centroid[1];
  //   k = 4;
  //   centered = d;
  // } else {
  //   x = width / 2;
  //   y = height / 2;
  //   k = 1;
  //   centered = null;
  // }

  g.selectAll("path")
      .classed("faded", false)
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