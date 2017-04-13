(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var aspect = 630 / 600,   chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width(); 
  chart.attr("width", targetWidth); 
  chart.attr("height", targetWidth / aspect);
});


var metric = "all";

var none = "#eeeeee";
var q1 = "#c7e9c0";
var q2 = "#74c476";
var q3 = "#006d2c";
var q4 = "#002911";


d3.csv("data/counts.csv", function(error, bustData) {
    bustData.forEach(function(d) {
        d.offense = d.offense;
        d.zip = d.zip;
        d.count = +d.count;
    });


    var width = 630,
        height = 600,
        centered;

    var projection = d3.geo.albersUsa().scale(24500).translate([-700, 3000]);

    var path = d3.geo.path().projection(projection);

    var projection2 = d3.geo.albersUsa().scale(24500).translate([-750, 3100]);

    var path2 = d3.geo.path().projection(projection);

    var svg = d3.select("#map svg").attr("width", width).attr("height", height);

    svg.append("rect").attr("class", "background").attr("width", width) //.on("click", clicked2)   .attr("height", height);

    var g = svg.append("g");

    var districtInfo = document.getElementById('infobox');
    districtInfo.innerHTML = "Most of those arrested for drug possession in North Minneapolis don't live there and come from zip codes spanning the Metro Area.";


    d3.json("shapefiles/zips.json", function(error, us) {
        g.append("g").attr("id", "states").selectAll("path").data(us.features).enter().append("path").attr("d", path2).attr("class", function(d, i) {
            return "z" + d.properties.ZIP5;
        }).on("click", clicked).style("fill", function(d, i) {
            for (var i = 0; i < bustData.length; i++) {
                if ((bustData[i].offense == metric) && (d.properties.ZIP5 == bustData[i].zip)) {
                    if (bustData[i].count >= 300) {
                        return q4;
                    }
                    if (bustData[i].count >= 75) {
                        return q3;
                    }
                    if (bustData[i].count >= 15) {
                        return q2;
                    }
                    if (bustData[i].count > 0) {
                        return q1;
                    }

                }
            }
            return '#ddd';
        }).on("mousedown", function(d, i) {

            if (d.properties.NAME4 != null) {
                var city_name = d.properties.NAME4 + " - " + d.properties.NAME2;
            } else if (d.properties.NAME3 != null) {
                var city_name = d.properties.NAME3 + " - " + d.properties.PREFNAME;
            } else if (d.properties.NAME2 != null) {
                var city_name = d.properties.NAME2;
            } else {
                var city_name = d.properties.PREFNAME;
            }


            districtInfo.innerHTML = "<div class='county_name'>" + d.properties.ZIP5 + " - " + city_name + "</div><div class='prevalence'>no data</div>";
            for (var i = 0; i < bustData.length; i++) {
                if ((bustData[i].offense == metric) && (d.properties.ZIP5 == bustData[i].zip)) {
                    districtInfo.innerHTML = "<div class='county_name'>" + d.properties.ZIP5 + " - " + city_name + "</div><div class='prevalence'>" + bustData[i].count + "</div> drug arrests in North Minneapolis";
                }
            }
        }).style("stroke-width", "1px").style("stroke", "#fff").call(d3.helper.tooltip(function(d, i) {

            if (d.properties.NAME4 != null) {
                var city_name = d.properties.NAME4 + " - " + d.properties.NAME2;
            } else if (d.properties.NAME3 != null) {
                var city_name = d.properties.NAME3 + " - " + d.properties.PREFNAME;
            } else if (d.properties.NAME2 != null) {
                var city_name = d.properties.NAME2;
            } else {
                var city_name = d.properties.PREFNAME;
            }

            return "<b>" + d.properties.ZIP5 + "</b> - " + city_name;

        }));
        g.append("path") //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))     .attr("id", "state-borders")     .attr("d", path);

function redrawMap(metric2) {

    var districtInfo = document.getElementById('infobox');

    d3.csv("data/counts.csv", function(error, bustData) {
        bustData.forEach(function(d) {
            d.offense = d.offense;
            d.zip = d.zip;
            d.count = +d.count;
        });

        d3.select('#map svg').selectAll("path").on("mousedown", function(d, i) {

            if (d.properties.NAME4 != null) {
                var city_name = d.properties.NAME4 + " - " + d.properties.NAME2;
            } else if (d.properties.NAME3 != null) {
                var city_name = d.properties.NAME3 + " - " + d.properties.PREFNAME;
            } else if (d.properties.NAME2 != null) {
                var city_name = d.properties.NAME2;
            } else {
                var city_name = d.properties.PREFNAME;
            }

            districtInfo.innerHTML = "<div class='county_name'>" + d.properties.ZIP5 + " - " + city_name + "</div><div class='prevalence'>no data</div>";


            if (metric2 == 'median') {
                for (var i = 0; i < bustData.length; i++) {
                    if ((bustData[i].offense == metric2) && (d.properties.ZIP5 == bustData[i].zip)) {
                        console.log(metric2);
                        districtInfo.innerHTML = "<div class='county_name'>" + d.properties.ZIP5 + " - " + city_name + "</div><div class='prevalence'>$" + d3.format(",.2f")(bustData[i].count) + "</div> median income";
                    }
                }
            } else {
                for (var i = 0; i < bustData.length; i++) {
                    if ((bustData[i].offense == metric2) && (d.properties.ZIP5 == bustData[i].zip)) {
                        console.log(metric2);
                        districtInfo.innerHTML = "<div class='county_name'>" + d.properties.ZIP5 + " - " + city_name + "</div><div class='prevalence'>" + bustData[i].count + "</div> drug arrests in North Minneapolis";
                    }
                }
            }
        }).style("fill", function(d, i) {
            if (metric2 == 'median') {
                for (var i = 0; i < bustData.length; i++) {
                    if ((bustData[i].offense == metric2) && (d.properties.ZIP5 == bustData[i].zip)) {
                        if (bustData[i].count >= 100000) {
                            return q4;
                        }
                        if (bustData[i].count >= 50000) {
                            return q3;
                        }
                        if (bustData[i].count >= 30000) {
                            return q2;
                        }
                        if (bustData[i].count > 14000) {
                            return q1;
                        }
                    }
                }

            } else {
                for (var i = 0; i < bustData.length; i++) {
                    if ((bustData[i].offense == metric2) && (d.properties.ZIP5 == bustData[i].zip)) {
                        if (bustData[i].count >= 300) {
                            return q4;
                        }
                        if (bustData[i].count >= 75) {
                            return q3;
                        }
                        if (bustData[i].count >= 15) {
                            return q2;
                        }
                        if (bustData[i].count > 0) {
                            return q1;
                        }
                    }
                }

            }
            return '#ddd';
        });
    });
}

$("#all").css("background-color","#333");
$( ".myButton2" ).click(function() { $(".myButton2").css("background-color","#61bd1a"); $(this).css("background-color","#333"); });   
$( "#all" ).click(function() { redrawChart(allData); redrawMap('all'); });
$( "#narc" ).click(function() { redrawChart(narcData); redrawMap('NARC'); });
$( "#mj" ).click(function() { redrawChart(mjData); redrawMap('MJINMV'); });
$( "#median" ).click(function() { redrawChart(mjData); redrawMap('median'); });

    });


    // zoom and pan
    var zoom = d3.behavior.zoom().on("zoom", function() {
        g.attr("transform", "translate(" + d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
        g.selectAll("circle").attr("d", path.projection(projection));
        g.selectAll("path").attr("d", path.projection(projection));
    });

    //svg.call(zoom);

    $(".zoom").click(function() {
        clicked2();
    });
    $(".myButton2").mousedown(function() {
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
        g.selectAll("path").classed("faded", true).classed("active", centered && function(d) {
            return d === centered;
        });
        g.transition().duration(750).attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")").style("stroke-width", 1.5 / k + "px");
    }

    function clicked2(d) {
        var x, y, k;
        var districtInfo = document.getElementById('infobox');
        districtInfo.innerHTML = "Many of those arrested for drug possession in North Minneapolis don't live there and come from zip codes spanning the Metro Area.";

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
        g.selectAll("path").classed("faded", false).classed("active", centered && function(d) {
            return d === centered;
        });
        g.transition().duration(750)
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")").style("stroke-width", 1.5 / k + "px");
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

var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart().x(function(d) {
            return d.label
        }).y(function(d) {
            return d.value
        }).transitionDuration(350).reduceXTicks(true) //If 'false', every single x-axis tick label will be rendered.     .rotateLabels(0)      //Angle to rotate x-axis labels.    //Allow user to switch between 'Grouped' and 'Stacked' mode.          //.showXAxis(false)     .groupSpacing(0.1)    //Distance between each group of bars.     .color(['#31a354'])     
        .color(['#31a354'])
        .showLegend(false)
        .showControls(false)
        .tooltip(function(key, x, y, e, graph) {
            return "<h3>" + x + "</h3>" + "<span class='pos_change'>" + y + "</span> <span>" + key + "</span>";
        });

    chart.yAxis.tickFormat(d3.format(',%'));
    d3.select('#chart svg').datum(allData).call(chart);
    nv.utils.windowResize(chart.update);
    return chart;
});

function redrawChart(data) {
    d3.select('#chart svg').datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
}

var allData = [{
    "key": "of all drug arrests",
    "values": [{
        "label": "North Minneapolis",
        "value": .4436
    }, {
        "label": "Surrounding Area",
        "value": .5563
    }]
}]

var narcData = [{
    "key": "of narcotic arrests",
    "values": [{
        "label": "North Minneapolis",
        "value": .45
    }, {
        "label": "Surrounding Area",
        "value": .55
    }]
}]

var mjData = [{
    "key": "of marijuana arrests",
    "values": [{
        "label": "North Minneapolis",
        "value": .4326
    }, {
        "label": "Surrounding Area",
        "value": .5673
    }]
}]
});
},{}]},{},[1])