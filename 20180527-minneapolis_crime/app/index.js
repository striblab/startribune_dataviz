/**
 * Main JS file for project.
 */
// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({});

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
}


//CHARTS
function chartTrend() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartTrend = c3.generate({
        bindto: "#chartTrend",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                ['Rate', 1173.755547,1082.244291,1097.98798,1201.689795,1261.767782,1437.152931,1671.520994,1458.945415,1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,null,null],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2016) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 2000,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 6,
                    values: [0, 500, 1000, 1500, 2000],
                    format: d3.format(',.1f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2000, 2006, 2012, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
         regions: [
        {axis: 'x', start: 2011, end: 2016, class: 'hottest'},
      ],
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartTrend();


function smallChart(container,end,ceiling,data) {
    var padding = {
        top: 0,
        right: 10,
        bottom: 0,
        left: 0,
    };

    var chartTrend = c3.generate({
        bindto: container,
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                data,
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == end) { return 2.5;} else { return 0; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                show: false,
                max: ceiling,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 6,
                    values: [0, 500, 1000, 1500, 2000],
                    format: d3.format(',.1f')
                }
            },
            x: {
                // type: 'timeseries',
                show: false,
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2000, 2006, 2012, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      //    regions: [
      //   {axis: 'x', start: 2011, end: 2016, class: 'hottest'},
      // ],
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

smallChart("#overall",2016,2000,['Rate', 1173.755547,1082.244291,1097.98798,1201.689795,1261.767782,1437.152931,1671.520994,1458.945415,1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,null,null]);
smallChart("#arson",2016,100,['Rate', 70.04375121,67.98345387,69.50614058,65.39452517,63.80753138,57.51706813,63.40696446,49.48198546,40.49921693,35.94601374,31.10476818,36.09428859,30.62763083,30.67805995,28.69140449,28.12005323,20.71665333,null,null]);
smallChart("#mtv",2017,2000,['Rate', 1018.77068,1074.922996,917.951398,940.6348501,970.7112971,1017.252541,956.7750084,827.2769445,625.1746208,479.969795,492.7099833,463.0381594,488.4714456,396.8194584,378.5806508,421.8007985,478.1498838,568.6364156,null]);
smallChart("#homicide",2017,50,['Rate', 13.06786403,11.24341737,12.28116018,12.03259263,14.12133891,12.1224314,14.69185762,12.11277769,10.25296631,4.913483893,10.19399965,9.539204843,10.99453415,9.976604862,7.780719862,12.1207126,8.810530727,9.763020536,null]);
smallChart("#rape",2017,200,['Rate', 116.0426326,106.4202528,100.6009929,104.6312403,107.7405858,110.649427,122.9476506,122.4163703,101.2480423,107.3208324,134.874457,96.42331382,116.2279324,99.26721837,100.4199157,108.1167564,111.9175525,122.1568179,null]);
smallChart("#assault",2016,1000,['Rate', 526.6349205,452.8743927,508.7535929,503.7994219,541.3179916,637.3303827,739.7479187,664.656461,611.8457646,562.9818124,508.1316751,425.6547891,454.7025193,444.7071617,442.2852947,503.4944014,544.109803,null]);
smallChart("#burglary",2017,2000,['Rate', 1193.357343,1074.922996,1166.448916,1179.978812,1252.876569,1431.994449,1510.683816,1593.216844,1436.184256,1231.991435,1260.396573,1318.988432,1252.853343,1153.295522,1005.658042,864.4492227,817.474378,895.5785423,null]);
smallChart("#larceny",2017,4000,['Rate', 3898.143841,3812.564388,3856.545597,3231.797434,2810.40795,3361.524434,3397.169884,3415.54559,3287.613648,2946.0215,2987.103284,3195.375806,3351.238718,3315.724626,3303.401877,2940.000048,2905.57016,3132.977102,null]);
smallChart("#robbery",2017,1000,['Rate', 518.0101302,511.7062278,476.3522341,581.2265397,598.5878661,677.0506898,794.133567,659.7598062,529.8220341,441.4377371,409.8510631,414.0530534,454.4407447,467.1545226,458.3330294,461.0719073,439.812169,422.6673525,null]);