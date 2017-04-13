(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/mncountySmoking.json", function(dataLoad) {

var data = dataLoad.mncountySmoking;

var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light')
    .setView([46.358056, -94.200833], 7);

map.setView([45.9703, -94.1748], 6);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();

//Pull interactive, data-infused vector layers from the .mbtiles hosted on the server
var dataTiles = L.mapbox.tileLayer('http://apps.startribune.com/news/tileserver/smoking.tilejson').addTo(map);
var dataGrid = L.mapbox.gridLayer('http://apps.startribune.com/news/tileserver/smoking.tilejson').addTo(map);
var dataControl = L.mapbox.gridControl(dataGrid).addTo(map);

//Add the legend to the map
map.legendControl.addLegend(document.getElementById('legend').innerHTML);
dataControl.options.follow = true;

var aspect = 800 / 750,
    chart = $("#chart svg");
$(window).on("resize", function() {
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
});

var margin = {top: 20, right: 220, bottom: 30, left: 50},
    width = 800 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom;


var format = d3.time.format("%Y");

var start = format.parse("1996");
var end = format.parse("2012");
var range = d3.time.months(start,end);

var x = d3.time.scale()
    .range([0,width])
    .domain([start,end]);

var y = d3.scale.linear()
    .range([height, 14]);

var color = function(i) {
  return d3.hcl(48*i,95,45).toString();
};

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .defined(function(d) { return d != null; })
    .x(function(d,i) { return x(range[i]); })
    .y(function(d) { return y(d); });

var svg = d3.select("#chart svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/minnesota_smoking2.csv", function(raw) {
  var data = [];
  var goods = _(raw).pluck("name");

  _(raw).each(function(series) {
    var value = {};
    data.push({
      id: series["id"],
      name: series["name"],
      values: _(range).map(function(year) {
                return parseFloat(series[format(year)]) || null;
              })
    });
  });

  var values = _(data).chain().pluck('values').flatten().value();

  y.domain([
    15,
    d3.max(values)
  ]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0,0)")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 10)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("font-weight", "bold")
      .text("Population Percentage");

  var series = svg.selectAll(".series")
      .data(data)
    .enter().append("g")
      .attr("class", "series");

  series.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d,i) { return color(i); });

  series.append("path")
      .attr("class", "invisible hover")
      .attr("d", function(d) { return line(d.values); });

  series.append("text")
      .attr("class", "label hover")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(end) + "," + y(d.value) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .style("fill", function(d,i) { return color(i); })
      .style("opacity", 0)
      .text(function(d) { return d.name; });

  series.selectAll(".hover")
      .on("mouseover", function(d,i) {
        d3.selectAll(".line")
          .style("opacity", 0.12)
          .filter(function(p) { return p.name == d.name; })
          .style("opacity", 1)
          .style("stroke-width", 2.5);
        d3.selectAll(".series text")
          .style("opacity", 0)
          .filter(function(p) { return p.name == d.name; })
          .style("opacity", 1);
      })
      .on("mouseout", function(d,i) {
        d3.selectAll(".line")
          .style("opacity", 1)
          .style("stroke-width", null);
        d3.selectAll(".series text")
          .style("opacity", 0);
      });
});

    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);

});
},{}]},{},[1])