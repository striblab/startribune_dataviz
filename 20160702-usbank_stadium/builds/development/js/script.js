(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.csv("./data/labor_hours.csv", function(d) {
  return {
    Total: +d.Total,
    Time: d.Date,
    Roofer: +d.Roofer,
    Plumber: +d.Plumber,
    Painter: +d.Painter,
    Other: +d.Other,
    MachineOps: +d.MachineOps,
    Laborer: +d.Laborer,
    Ironworker: +d.Ironworker,
    Electrician: +d.Electrician,
    Bricklayer: +d.Bricklayer,
    Carpenter: +d.Carpenter
  };
}, function(error, rows) {


var data = rows;

var x = [];
var roofers = [];
var plumber = [];
var painter = [];
var other = [];
var machineops = [];
var laborer = [];
var ironworker = [];
var electrician = [];
var bricklayer = [];
var carpenter = [];

x[0] = "x";
roofers[0] = "Roofers";
plumber[0] = "Plumbers";
painter[0] = "Painters";
other[0] = "Other";
machineops[0] = "Machine Ops";
laborer[0] = "Laborers";
ironworker[0] = "Ironworkers";
electrician[0] = "Electricians";
bricklayer[0] = "Bricklayers";
carpenter[0] = "Carpenters";

for (var i=0; i < data.length; i++){
x[i+1] = data[i].Time;
roofers[i+1] = data[i].Roofer;
plumber[i+1] = data[i].Plumber;
painter[i+1] = data[i].Painter;
other[i+1] = data[i].Other;
machineops[i+1] = data[i].MachineOps;
laborer[i+1] = data[i].Laborer;
ironworker[i+1] = data[i].Ironworker;
electrician[i+1] = data[i].Electrician;
bricklayer[i+1] = data[i].Bricklayer;
carpenter[i+1] = data[i].Carpenter;
}

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 30,
    };

var chartD = c3.generate({
        bindto: '#chart',
        size: { height: 400 },
        padding: padding,
        data: {
            x: 'x',
            // xFormat : '%m-%d-%Y',
            columns: [
            x,
            carpenter,
            laborer,
            electrician,
            ironworker,
            plumber,
            machineops,
            bricklayer,
            painter,
            roofers,
            other    
        ],
        type: 'area',
        order: 'desc',         
        groups: [["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"]],
        // order: false,
        axes: { 
          "Carpenters": "y2",
          "Bricklayers": "y2",
          "Electricians": "y2",
          "Ironworkers": "y2",
          "Laborers": "y2",
          "Machine Ops": "y2",
          "Other": "y2",
          "Painters": "y2",
          "Plumbers": "y2",
          "Roofers": "y2"
        }
        },
        legend: {
        show: false
        },
        point: {
            show: false
        },
        color: {
          pattern: ['#DEE7EB','#D8E5E8','#BCD1DC','#B7C9D1','#A7BCC8','#B6C4D5','#B2BAC6','#A8ACB9','#D4D0CE','#C5C1BF']
          // pattern: ['#333333']
        },
        axis: {
          y: {
            show: false
          },
          y2: {
            show: true,
            min: 0,
            max: 250000,
            padding: {bottom: 0, top: 0, right:0, left:0},
            tick: {
             count: 6,
             values: [0,25000,75000,125000,175000,225000],
             format: d3.format(',.0f')
            }
        },
        x: {
            type: 'categories',
            padding: {bottom: 0, top: 0, right:0, left:0},
            tick: {
                // format: "%m-%d-%Y",
                count: 4,
                multiline: false
            }
          }
        },
      subchart: { show: false },
      tooltip: {
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          var $$ = this, config = $$.config,
              titleFormat = config.tooltip_format_title || defaultTitleFormat,
              nameFormat = config.tooltip_format_name || function (name) { return name; },
              valueFormat = config.tooltip_format_value || defaultValueFormat,
              text, i, title, value, name, bgcolor;
              // var totalHours;
          for (i = 0; i < d.length; i++) {
              if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

              name = nameFormat(d[i].name);
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

              if (! text) {

                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;

                  for (var k=0; k < rows.length; k++){
                    if (String(rows[k].Time) == String(title)){
                      var totalHours = d3.format(",")(rows[k].Total);
                      
                      break;
                    }
                  }

                  text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + " - " + totalHours + " hours</th></tr>" : "");
              }

              text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + d[i].id + "</td>";
              text += "<td class='value'>" + value + "</td>";
              text += "</tr>";
              
          }
          return text + "</table>";
      }
    }
    });

var chartM = c3.generate({
        bindto: '#chart_m',
        size: { height: 400 },
        padding: padding,
        data: {
            x: 'x',
            // xFormat : '%m-%d-%Y',
            columns: [
            x,
            carpenter,
            laborer,
            electrician,
            ironworker,
            plumber,
            machineops,
            bricklayer,
            painter,
            roofers,
            other    
        ],
        type: 'bar',
        order: 'desc',
        groups: [["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"]],
        // order: false,
        axes: { 
          "Carpenters": "y2",
          "Bricklayers": "y2",
          "Electricians": "y2",
          "Ironworkers": "y2",
          "Laborers": "y2",
          "Machine Ops": "y2",
          "Other": "y2",
          "Painters": "y2",
          "Plumbers": "y2",
          "Roofers": "y2"
        }
        },
        legend: {
        show: false
        },
        point: {
            show: false
        },
        bar: {
        width: {
            ratio: 0.9
        }
      },
        color: {
          pattern: ['#DEE7EB','#D8E5E8','#BCD1DC','#B7C9D1','#A7BCC8','#B6C4D5','#B2BAC6','#A8ACB9','#D4D0CE','#C5C1BF']
          // pattern: ['#333333']
        },
    tooltip: {
        show: false
    },
        axis: {
          y: {
            show: false
          },
          y2: {
            show: true,
            min: 0,
            max: 250000,
            padding: {bottom: 0, top: 0, right:0, left:0},
            tick: {
             // count: 6,
             // format: "%m-%d-%Y",
             values: [0,25000,75000,125000,175000,225000],
             format: d3.format(',.0f')
            }
        },
        x: {
            type: 'categories',
            padding: {bottom: 0, top: 0, right:0, left:0},
            tick: {
                count: 4,
                multiline: false
            }
          }
        },
      subchart: { show: false }
    //   tooltip: {
    //   contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
    //       var $$ = this, config = $$.config,
    //           titleFormat = config.tooltip_format_title || defaultTitleFormat,
    //           nameFormat = config.tooltip_format_name || function (name) { return name; },
    //           valueFormat = config.tooltip_format_value || defaultValueFormat,
    //           text, i, title, value, name, bgcolor;
    //           // var totalHours;
    //       for (i = 0; i < d.length; i++) {
    //           if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

    //           name = nameFormat(d[i].name);
    //           value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
    //           bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

    //           if (! text) {

    //               title = titleFormat ? titleFormat(d[i].x) : d[i].x;

    //               for (var k=0; k < rows.length; k++){
    //                 if (String(rows[k].Time) == String(title)){
    //                   var totalHours = d3.format(",")(rows[k].Total);
                      
    //                   break;
    //                 }
    //               }

    //               text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + " - " + totalHours + " hours</th></tr>" : "");
    //           }

    //           text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
    //           text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + d[i].id + "</td>";
    //           text += "<td class='value'>" + value + "</td>";
    //           text += "</tr>";
              
    //       }
    //       return text + "</table>";
    //   }
    // }
    });

$("#all").click(function() {
    chartD.revert();
    chartM.revert();
    $("#total").html("3,497,834");
});

function spitLegend() {
d3.select('.legendChart').selectAll('div')
    .data(["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"])
    .enter().append('div')
    .attr('data-id', function (id) { return id; })
    .attr("class","clickyButton")
    .html(function (id) { return id; })
    .each(function (id) {
        d3.select(this).style('background-color', chartD.color(id));
    })
    .on('mouseover', function (id) {
        // chartD.focus(id);
        // chartM.focus(id);
    })
    .on('mouseout', function (id) {
        // chartD.revert();
        // chartM.revert();
    })
    .on('click', function (id) {
        // chartD.toggle(id);
        // chartM.toggle(id);
        chartD.focus(id);
        chartM.focus(id);

        console.log(id);

        var totalHours = 0;

        for (var k=0; k < rows.length; k++){
          if (id == "Carpenters") { totalHours += rows[k].Carpenter; }
          else if (id == "Roofers") { totalHours += rows[k].Roofer; }
          else if (id == "Plumbers") { totalHours += rows[k].Plumber; }
          else if (id == "Painters") { totalHours += rows[k].Painter; }
          else if (id == "Other") { totalHours += rows[k].Other; }
          else if (id == "Machine Ops") { totalHours += rows[k].MachineOps; }
          else if (id == "Laborers") { totalHours += rows[k].Laborer; }
          else if (id == "Ironworkers") { totalHours += rows[k].Ironworker; }
          else if (id == "Electricians") { totalHours += rows[k].Electrician; } 
          else if (id == "Bricklayers") { totalHours += rows[k].Bricklayer; } 
          }
        $("#total").html(d3.format(",.0f")(totalHours));
    });

$(".clickyButton").click(function() {
    $(".clickyButton").removeClass("selected2");
    $(this).addClass("selected2");
  });
}

spitLegend();

});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });
},{}]},{},[1])