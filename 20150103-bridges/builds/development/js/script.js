(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/highway_bridges.json", function(error, json) {
d3.json("shapefiles/counties.json", function(error, us) {

var data = json;

var csvData = data.highway_bridges;

var aspect = 630 / 600, chart = $("#counties svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);
});


$(document).ready(function(){

var ramsey = 8;
var hennepin = 6;
var st_louis = 6;
var carlton = 3;
var nicollet = 3;
var beltrami = 2;
var chippewa = 2;
var itasca = 2;
var douglas = 2;
var wilkin = 2;
var pine = 2;
var polk = 2;
var lake = 2;
var mower = 2;
var redwood = 1;
var rock = 1;
var sherburne = 1;
var kittson = 1;
var steele = 1;
var washington = 1;
var winona = 1;
var aitkin = 1;
var blue_earth = 1;
var brown = 1;

var none = "#ddd";
var q1 = "#edf8e9";
var q2 = "#c7e9c0";
var q3 = "#a1d99b";
var q4 = "#74c476";
var q5 = "#31a354";
var q6 = "#006d2c";

var width = 630,
    height = 600,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5070)
    .translate([100, 970]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#counties svg")
    .attr("width", width)
    .attr("height", height);

var svg2 = d3.select("#roads").append("svg")
    .attr("width", width)
    .attr("height", height);


var projection2 = d3.geo.albersUsa()
    .scale(5070)
    .translate([100, 970]);

var path2 = d3.geo.path()
    .projection(projection2);


// svg.append("rect")
//     .attr("class", "background")
//     .attr("width", width)
//     .attr("height", height)
//     .on("click", clicked2);

// svg2.append("rect")
//     .attr("class", "background")
//     .attr("width", width)
//     .attr("height", height)
//     .on("click", clicked2);

var g = svg.append("g");
var b = svg.append("g");
var c = svg.append("g");

 c.append("g")
     .attr("id", "markers")
    .selectAll("circle")
      .data(csvData)
      .enter()
      .append("circle")
      .attr("class", "mark")
      .style("fill", "#333")
      .attr('r', function(d) {if (Number(d.rating) == 2.8) {return 10;} else {return 1 / (Number(d.rating) / 100);}})
      //.attr("cx", function (d,i) { console.log(d.long); return projection(d.long); })
      //.attr("cy", function (d,i) { return projection(d.lat); });
      .attr("transform", function(d) { 
        return "translate(" + projection([d.long,d.lat]) + ")"; 
      });
      // .call(d3.helper.tooltip(
      //   function(d, i){
      //     return  "<div class='county'>" + d.county + " COUNTY</div><hr /><div class='road'>" +  d.facility + " and " + d.intersection + "</div><div class='rating'>Sufficiency Rating</div><div class='rating_num'>" + d.rating + "</div><br /><div class='rating'>Year Built</div><div class='rating_num'>" + d.year + "</div><br /><div class='rating'>Road Carried</div><div class='rating_num'>" + d.facility + "</div>";
      //   }
      //   ));

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

d3.helper.tooltip2 = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip2').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip2');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', '500px')
                .style('top', '250px')
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
            tooltipDiv.style('left', '500px')
                .style('top', '250px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            //tooltipDiv.remove();
        });

    };
};



d3.json("shapefiles/roads.json", function(error, mn) {
  b.append("g")
      .attr("id", "roads")
    .selectAll("path")
      .data(mn.features)
    .enter().append("path")
      .attr("d", path2)
      .style("fill", "#50d922")
      .style("fill-opacity", ".04")
      .style("stroke-opacity", ".04")
      .style("stroke-width", ".5px")
      .style("stroke", "#333");


  b.append("path")
      .datum(topojson.mesh(mn, mn.features, function(a, b) { return a !== b; }))
      .attr("id", "roadways")
      .attr("d", path2);
});

$(document).ready(function() {

    //        var eventsTable = $('#table_view').DataTable( {
    //             responsive: {
    //     details: {
    //         type: 'row'
    //     }
    // },
    //             "bServerSide":false,
    //             "bProcessing":true,
    //             "sAjaxDataProp": "feed.entry",
    //             "order": [[ 3, "desc" ]],
    //             "oLanguage": {"sSearch": ""},
    //             "sAjaxSource": "https://spreadsheets.google.com/feeds/list/1Fplv-r-SL1F1L8RrjEp5F1pq00NWKjBq9ZZi4tRQ6WI/od6/public/values?&alt=json",
    //             "aoColumns": [                 
    //                 { "mDataProp": "gsx$county.$t" },
    //                 { "mDataProp": "gsx$facility.$t" },
    //                 { "mDataProp": "gsx$intersection.$t" },
    //                 { "mDataProp": "gsx$year.$t" },
    //                 { "mDataProp": "gsx$rating.$t" },
    //                 { "mDataProp": "gsx$status.$t" },
    //                 { "mDataProp": "gsx$inspected.$t" },
    //                         ]
    //         } );

// $('.dataTables_filter input').attr("placeholder", "Enter an employee's name or county and click their last name for further information");


// oTable = $('#table_view').dataTable({'iDisplayLength': 5, "oLanguage": {"sSearch": ""}});

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)    
      .attr("title", function(d, i){return d.properties.COUNTYNAME;})  
      .attr("id", "polys")    
      .on("click", clicked)
      // .on("mousedown", function(d, i){console.log("derp");eventsTable.fnFilter(d.properties.COUNTYNAME + ' ');})   
      .style("stroke-width", "2px")
      .style("stroke", "#fff")
      .style("fill", function(d, i){
          if (d.properties.COUNTYNAME == "Hennepin"){ return q4; }
          if (d.properties.COUNTYNAME == "Itasca"){ return q2; }
          if (d.properties.COUNTYNAME == "Carlton"){ return  q3; }
          if (d.properties.COUNTYNAME == "Blue Earth"){ return  q1; }
          if (d.properties.COUNTYNAME == "Ramsey"){ return q5; }
          if (d.properties.COUNTYNAME == "Aitkin"){ return  q1; }
          if (d.properties.COUNTYNAME == "Chippewa"){ return  q2; }
          if (d.properties.COUNTYNAME == "Brown"){ return  q1; }
          if (d.properties.COUNTYNAME == "Beltrami"){ return q2; }
          if (d.properties.COUNTYNAME == "Nicollet"){ return  q3; }
          if (d.properties.COUNTYNAME == "Pine"){ return q2; }
          if (d.properties.COUNTYNAME == "Kittson"){ return q1; }
          if (d.properties.COUNTYNAME == "Lake"){ return q2; }
          if (d.properties.COUNTYNAME == "Mower"){ return q2; }
          if (d.properties.COUNTYNAME == "Douglas"){ return q2; }
          if (d.properties.COUNTYNAME == "Redwood"){ return q1; }
          if (d.properties.COUNTYNAME == "Rock"){ return q1; }
          if (d.properties.COUNTYNAME == "Polk"){ return q2; }
          if (d.properties.COUNTYNAME == "Red Lake"){ return q1; }
          if (d.properties.COUNTYNAME == "Sherburne"){ return q1; }
          if (d.properties.COUNTYNAME == "St. Louis"){ return q4; }
          if (d.properties.COUNTYNAME == "Steele"){ return q1; }
          if (d.properties.COUNTYNAME == "Washington"){ return q1; }
          if (d.properties.COUNTYNAME == "Wilkin"){ return q2; }
          else { return none; }
        });



  g.append("path")
      .datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);




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
  oTable.fnFilter('');
  //zoom.translate([0,0]).scale(1);
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

  c.selectAll("circle")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  c.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");

  b.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  b.transition()
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
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");

  c.selectAll("circle")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  c.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");

  b.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  b.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}
});



  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);
        } );



});
});
},{}]},{},[1])