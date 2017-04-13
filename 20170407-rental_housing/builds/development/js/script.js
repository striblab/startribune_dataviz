(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/rental_housing.json", function(error, json) {
d3.json("./data/cost_burden.json", function(error, json2) {

var dataHousing = json.rentalHousing;
var dataBurden = json2.costBurden;

var aspect = 440 / 300, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

$(window).on("load", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

$(".rSort").click(function() {
  $(".rSort").removeClass("selected");
  $(this).addClass("selected");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#table","housing",dataHousing,$(this).attr("data"),sorted);
});

function tableSort(container,party,data,sortBy,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
      if (sortBy == "under50") { 
        if (sorted == "descend") { return d3.descending(a.under_50pct_change2014, b.under_50pct_change2014); }
        if (sorted == "ascend") { return d3.ascending(a.under_50pct_change2014, b.under_50pct_change2014); }
     }
      if (sortBy == "under80") { 
        if (sorted == "descend") { return d3.descending(a.under_80pct_change2014, b.under_80pct_change2014); }
        if (sorted == "ascend") { return d3.ascending(a.under_80pct_change2014, b.under_80pct_change2014); }
     }
      if (sortBy == "city") {
        if (sorted == "descend") { return d3.descending(a.Citytownship, b.Citytownship); }
        if (sorted == "ascend") { return d3.ascending(a.Citytownship, b.Citytownship); }
     }
    if (sortBy == "units") {
        if (sorted == "descend") { return d3.descending(a.Totalrental_2014, b.Totalrental_2014); }
        if (sorted == "ascend") { return d3.ascending(a.Totalrental_2014, b.Totalrental_2014); }
     }
    })
    .transition().duration(500);
}

function tableBuild(container,race,data,state,county,index){

if (race == "senate") { var select = "districtS"; }
if (race == "house") { var select = "districtH"; }

d3.select(container).selectAll(".card")
.data(data).enter().append("div")
.attr("class","card")
.html(function (d){ 
    return "<div class='tableCell city cityCell'>" + d.Citytownship + "</div><div class='tableCell units rents'>" + d3.format(",")(d.Totalrental_2014) + "</div><div class='tableCell change'>" + d.under_50pct_change2014 + "</div><div class='tableCell change'>" + d.under_80pct_change2014 + "</div>";
});

$(".city").click(function() {
 // $(".city").removeClass("selected");
 // $(this).addClass("selected");

  $("#infobox").html($(this).text());

  jQuery.fn.d3Click = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Down = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Up = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

    var findDistrict = $(this).text();
    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Click();
});


  $(".change").each(function() {
      var num = $(this).text();
      if (num >= .70) { $(this).addClass("posDark"); $(this).html(d3.format("+%")(num)); }
      else if (num >= .50) { $(this).addClass("posMid"); $(this).html(d3.format("+%")(num)); } 
      else if (num > 0) { $(this).addClass("posLight"); $(this).html(d3.format("+%")(num)); }
      else if (num < -.70) { $(this).addClass("negDark"); $(this).html(d3.format("+%")(num)); }
      else if (num < -.50) { $(this).addClass("negMid"); $(this).html(d3.format("+%")(num)); }
      else if (num < 0) { $(this).addClass("negLight"); $(this).html(d3.format("+%")(num)); }
      else if (num == 0) { $(this).addClass("neutral"); $(this).html(d3.format("+%")(num)); }
  });

}

$( document ).ready(function() {
     $('#filter input').keyup(function(i){
        $('.card').hide();
        var txt = $(this).val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

});

//CHART
var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 40,
    };

var chart = c3.generate({
        bindto: '#chart',
        size: { height: 200 },
        padding: padding,
        data: {
        x: 'x',
        columns: [
            ['x', "1990", "2000", "2005-2009", "2010-2014"],
            ['Metro', .26, .24, .35, .32]
        ]
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          y: {
            tick: {
             max: .45,
             min: 0,
             count: 3,
             format: d3.format('%')
            }
        },
        x: {
            type: 'category',
            tick: {
                // format: '%Y',
                count: 3,
                multiline: false
            }
          }
        },
      subchart: { show: false },
        color: { pattern: ['#666'] },
    });

var previous = "Metro";

function redrawChart(chart,county,dataCompare){

  var y1990, y2000, y2009, y2014 = 0;
  var found = false;

    for (var i=0; i<dataCompare.length; i++){
    if (county == dataCompare[i].city) {
      y1990 = dataCompare[i].y1990;
      y2000 = dataCompare[i].y2000;
      y2009 = dataCompare[i].y2005_2009;
      y2014 = dataCompare[i].y2010_2014;
      found = true;
      break;
    }
  }

if (found == true){
chart.load({
        columns: [
            [county, y1990, y2000, y2009, y2014]
        ],unload: [previous]
        });

previous = county;
}
else { chart.unload(); }

}

//MAPOCALYPSE
function mapStats(d, race, dataCompare){

}

function mapColor(d, race, dataCompare){
  for (var i=0; i<dataCompare.length; i++){
    if (d == dataCompare[i].Citytownship) {
      if (dataCompare[i].under_50pct_change2014_num > 1000) { return "posDark"; }
      else if (dataCompare[i].under_50pct_change2014_num > 400) { return "posMid"; }
      else if (dataCompare[i].under_50pct_change2014_num > 0) { return "posLight"; }
      else if (dataCompare[i].under_50pct_change2014_num < -1000) { return "negDark"; }
      else if (dataCompare[i].under_50pct_change2014_num < -100) { return "negMid"; }
      else if (dataCompare[i].under_50pct_change2014_num < 0) { return "negLight"; }
      else if (dataCompare[i].under_50pct_change2014_num == 0) { return "neutral"; }
    }
  }
}

function mapTips(d, subject, dataCompare){
    for (var i=0; i<dataCompare.length; i++){
    if (d.properties.COCTU_DESC == dataCompare[i].Citytownship) {
      return "<div><strong>" + d.properties.COCTU_DESC + "</strong></div>" + "<div class='" + mapColor(d.properties.COCTU_DESC, subject, dataCompare) + "'>" + d3.format("+,")(dataCompare[i].under_50pct_change2014_num) + " affordable rental units</div>";
  }
 }
  return "<div><strong>" + d.properties.COCTU_DESC + "</strong></div>";
}

function mapBuild(container, boxContainer, chartContainer, shape, race, geo, dataCompare, index) {

var width = 450,
    height = 350,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.367554,44.894796]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .attr("id", function(d) { var str = d.properties.COCTU_DESC; return str.replace(new RegExp(" ", "g"),"-"); })
      .attr("precinctName", function(d){ return d.properties.COCTU_DESC })
      .attr("class", function(d){
         return mapColor(d.properties.COCTU_DESC, race, dataCompare);
        })
       .on("mousedown", function(d, i){   
        $('#infobox').html(d.properties.COCTU_DESC);
            for (var i=0; i<dataCompare.length; i++){
    if (d.properties.COCTU_DESC == dataCompare[i].Citytownship) {
        $("#rentalChange").html("<div class='" + mapColor(d.properties.COCTU_DESC, race, dataCompare) + "'>" + d3.format("+,")(dataCompare[i].under_50pct_change2014_num) + " affordable rental units</div>")
      }
    }

        redrawChart(chart,d.properties.COCTU_DESC,dataBurden);

        $('.card').hide();
        var txt = d.properties.COCTU_DESC;
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });

       })
      .style("stroke-width", 1.5)
      // .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));

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
  $('#infobox').html("Metro Area");
  $(".card").show();
  // $(".city").removeClass("selected");
  $("#rentalHousing").html("<div class='negDark'>-8,874 affordable rental units</div>");
  redrawChart(chart,"Metro",dataBurden);
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
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

  // g.transition()
  //     .duration(750)
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //     .style("stroke-width", 1.5 / k + "px");
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

}

function mapReshade(container, shape, subject, race, dataCompare) {

d3.json("shapefiles/" + shape, function(error, us) {

d3.selectAll(container + " svg g path")
      .data(us.features)
      .attr("class", function(d){

        });

});

}

  mapBuild("#map", "#infoBox", "#chart", "metro_cities.json", "house", "metro", dataHousing, 0);
  tableBuild("#table","house",dataHousing,"Metro","Minneapolis",0);

});
});
},{}]},{},[1])