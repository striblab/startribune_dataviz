//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1JpW0sgMM4grkFjkj1UI6JF8ajmMCAwUsNzshTAp_EQk&sheet=mn_counties

d3.json("./data/birdflu.json", function(error, data) {

var popData = data.mn_counties;


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
              if ((popData[i].birds + popData[i].chickens) > 500000) { return q5; }
              if ((popData[i].birds + popData[i].chickens) > 300000) { return q4; }
              if ((popData[i].birds + popData[i].chickens) > 100000) { return q3; }
              if ((popData[i].birds + popData[i].chickens) > 50000) { return q2; }
              if ((popData[i].birds + popData[i].chickens) > 0) { return q1; }
              else { return none; }
            }
   		  }
        })
       .on("mousedown", function(d, i){
       for (var i = 0; i < 87; i++){
        if (d.properties.COUNTYNAME == popData[i].county) {
          if ((popData[i].birds +  popData[i].chickens) > 0) {
       		districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><hr><div class='prevalence'>Total affected turkeys</div><div class='num'>" + d3.format(",")(popData[i].birds) + " </div>" + "</div><hr><div class='prevalence'>Total affected chickens</div><div class='num'>" + d3.format(",")(popData[i].chickens) + " </div>" + "</div><hr><div class='prevalence'>Affected sites</div><div class='num'>" + d3.format(",")(popData[i].sites) + " </div>" + "</div>";
         }
         else { districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><hr><div class='prevalence'>No reported infections</div>" }
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
  districtInfo.innerHTML = "<div class='turkey'><div class='bigNum'>8,871,432*</div><div>poultry birds have been affected by HPAI in Minnesota</div><p></p><div>Total number of farms affected: 108</div><p></p><div>Total number of counties: 23</div></div> "
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

// });

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