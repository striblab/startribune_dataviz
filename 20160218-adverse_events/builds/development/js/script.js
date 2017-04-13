(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/events.json", function(error, json) {
d3.json("./data/summary.json", function(error, json2) {

var data = json.events;
var dataChart = json2.sum;

// CHART
var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 270,
    };

var chartDecade = c3.generate({
        bindto: '#chart',
        size: { height: 600 },
        padding: padding,
        data: {
            json: dataChart,
            keys: {
                x: 'hospital',
                value: ['count']
            },
            names: {
              'count': 'Number of Adverse Events'
            },
            types: {
            'count': 'bar'
            }
        },
       bar: {
        width: {
            ratio: 0.5
        }
      },
        axis: {
          rotated: true,
          y: {
            tick: {
             values: ['0', '15', '30'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'category',
            tick: {
                // format: '%Y',
                multiline: false
            }
          }
        },
      subchart: { show: false },
        color: { pattern: ['#CCC'] },
    });

function tableSpill() {

d3.select("#events").selectAll(".card")
  .data(data.sort(function(a,b) {return b.year-a.year;})).enter().append("div")
  .attr("class",function(d) { return "card"; })
  .attr("id",function(d) { return "s" + d.id; })
  .on("click",function(d){

  })
  .html(function(d){ 
    return "<div class='cell num year'>" + d.year + "</div><div class='cell hospital'>" + d.hospital + "</div><div class='cell kill city'>" + d.city + "</div><div class='cell kill category'>" + d.category + "</div><div class='cell num'>" + d.number + "</div><div class='cell kill num'>" + d.death + "</div><div class='cell kill num'>" + d.injury + "</div><div class='cell kill type'>" + d.cattype + "</div>";
  });

}

tableSpill();

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
          if (candidate == "year") { 
        if (sorted == "descend") { return d3.descending(a.year, b.year); }
        if (sorted == "ascend") { return d3.ascending(a.year, b.year); }
     }
          if (candidate == "hospital") { 
        if (sorted == "descend") { return d3.descending(a.hospital, b.hospital); }
        if (sorted == "ascend") { return d3.ascending(a.hospital, b.hospital); }
     }
           if (candidate == "city") { 
        if (sorted == "descend") { return d3.descending(a.city, b.city); }
        if (sorted == "ascend") { return d3.ascending(a.city, b.city); }
     }
           if (candidate == "event") { 
        if (sorted == "descend") { return d3.ascending(a.category, b.category); }
        if (sorted == "ascend") { return d3.descending(a.category, b.category); }
     }
           if (candidate == "incidents") { 
        if (sorted == "descend") { return d3.ascending(a.number, b.number); }
        if (sorted == "ascend") { return d3.descending(a.number, b.number); }
     }
           if (candidate == "deaths") { 
        if (sorted == "descend") { return d3.ascending(a.death, b.death); }
        if (sorted == "ascend") { return d3.descending(a.death, b.death); }
     }
           if (candidate == "injuries") { 
        if (sorted == "descend") { return d3.ascending(a.injury, b.injury); }
        if (sorted == "ascend") { return d3.descending(a.injury, b.injury); }
     }
           if (candidate == "type") { 
        if (sorted == "descend") { return d3.ascending(a.cattype, b.cattype); }
        if (sorted == "ascend") { return d3.descending(a.cattype, b.cattype); }
     }
    })
    .transition().duration(500);
}

$( document ).ready(function() {
$('#filter_box').on('keyup search', function(e){
   $('.card').hide();
   var txt = $('#filter_box').val();
   $('.card').each(function(){
      if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
          $(this).show();
      }
   });
   var count = $('.card:visible').length;
   $('#results').html(d3.format(",")(count));
});

$('.scrollToTop').click(function(){
    $('#events').animate({scrollTop : 0},800);
    return false;
  });

$(".th").click(function() {
  $(".th").removeClass("sortSelect");
  $(this).addClass("sortSelect");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("sortSelect")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#events",null,data,$(this).attr("data"),sorted);
});
});

});
});
},{}]},{},[1])