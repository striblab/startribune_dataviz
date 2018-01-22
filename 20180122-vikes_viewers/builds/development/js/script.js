(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected == "all"){
$(".slide").show();
} else if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chart",
          padding: padding,
          data: {
              x: 'x',
              xFormat: '%Y-%m-%d %H:%M:%S',
                columns: [
                  ['x',"2018-07-22 5:30:00","2018-07-22 5:45:00","2018-07-22 6:00:00","2018-07-22 6:15:00","2018-07-22 6:30:00","2018-07-22 6:45:00","2018-07-22 7:00:00","2018-07-22 7:15:00","2018-07-22 7:30:00","2018-07-22 7:45:00","2018-07-22 8:00:00","2018-07-22 8:15:00","2018-07-22 8:30:00","2018-07-22 8:45:00"],
                  ['Viewers',842704,969024,1029588,1033048,1017475,1022666,1007092,960372,970754,925764,744072,794254,721577,228413],
                ],
            type: 'line',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#4F2683']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1250000,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 7,
                         values: [0,250000,500000,750000,1000000,1250000],
                         format: d3.format(',')
                        }
                    },
                x: {
                    type: 'timeseries',
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        values: ['2018-07-22 5:30:00','2018-07-22 6:00:00','2018-07-22 6:30:00','2018-07-22 7:00:00','2018-07-22 7:30:00','2018-07-22 8:00:00','2018-07-22 8:30:00'],
                        multiline: false,
                        format: d3.time.format("%-H:%M pm")
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: '2018-07-22 5:49:00', text: 'Vikings take 7-0 lead', position: 'start', class:'powerline'},
                    {value: '2018-07-22 6:08:00', text: 'Eagles score on INT', position: 'start', class:'powerline'},
                    {value: '2018-07-22 6:26:00', text: 'Eagles lead 14-7', position: 'start', class:'powerline'},
                    {value: '2018-07-22 6:49:00', text: 'Eagles TD off Keenum fumble', position: 'start', class:'powerline'},
                    {value: '2018-07-22 7:07:00', text: 'FG puts Eagles up 24-7', position: 'start', class:'powerline'},
                    {value: '2018-07-22 7:41:00', text: 'Eagles score to open second half', position: 'start', class:'powerline'},
                    {value: '2018-07-22 7:57:00', text: 'Eagles take 38-7 lead', position: 'start', class:'powerline'},
                    {value: '2018-07-22 8:25:00', text: 'Keenum INT', position: 'start', class:'powerline'}

              ]
              }
          }

    });
}

chartTrend();
},{}]},{},[1])