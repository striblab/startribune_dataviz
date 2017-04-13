(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('section');

if (selected != null){
$(".scroll").hide();
$("#" + selected).show();
}

d3.json("./data/totals.json", function(error, json) {

var dataTotals = json.totals;

var aChart;

var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 60,
    };

aChart = c3.generate({
        bindto: '#adeleChart',
        size: { height: 200 },
        padding: padding,
        data: {
        columns: [
            ['StubHub Tickets',96,1971,1939]
            ],
        type: 'bar',
        colors: {
            'StubHub Tickets': '#AFA8C9'
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['First Hour', 'Next Day', 'One Month']
        },
        y: {
          max: 7800,
          tick: { 
            format: d3.format(",.0f"),
            count: 4
             }
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

var bChart;

bChart = c3.generate({
        bindto: '#BeyoncéChart',
        size: { height: 200 },
        padding: padding,
        data: {
        columns: [
            ['StubHub Tickets',7574,7591,7095]
            ],
        type: 'bar',
        colors: {
            'StubHub Tickets': '#AFA8C9'
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['First Hour', 'Next Day', 'One Month']
        },
        y: {
          max: 7800,
          tick: { 
            format: d3.format(",.0f"),
            count: 4
             }
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

var aChartPrice;

aChartPrice = c3.generate({
        bindto: '#adeleChartPrice',
        size: { height: 200 },
        padding: padding,
        data: {
        columns: [
            ['Median Ticket Price',600,636,599]
            ],
        type: 'bar',
        colors: {
            'Median Ticket Price': '#AFA8C9'
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['First Hour', 'Next Day', 'One Month']
        },
        y: {
          max: 700,
          tick: { 
            format: d3.format("$,.0f"),
            count: 4
             }
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

var bChartPrice;

bChartPrice = c3.generate({
        bindto: '#BeyoncéChartPrice',
        size: { height: 200 },
        padding: padding,
        data: {
        columns: [
            ['Median Ticket Price',168,165,148]
            ],
        type: 'bar',
        colors: {
            'Median Ticket Price': '#AFA8C9'
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['First Hour', 'Next Day', 'One Month']
        },
        y: {
          max: 700,
          tick: { 
            format: d3.format("$,.0f"),
            count: 4
             }
        }
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

});
},{}]},{},[1])