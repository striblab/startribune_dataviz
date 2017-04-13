(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
      
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

d3.json("./data/weather2011.json", function(error, dataLoad2011) {

d3.json("./data/weather2012.json", function(error, dataLoad2012) {

d3.json("./data/weather2013.json", function(error, dataLoad2013) {

d3.json("./data/weather2014.json", function(error, dataLoad2014) {

d3.json("./data/weather2015.json", function(error, dataLoad2015) {

d3.json("./data/weather2016.json", function(error, dataLoad2016) {

d3.json("./data/avgTemp.json", function(error, dataLoadTmp) {

d3.json("./data/coolingDegree.json", function(error, dataLoadCool) {

d3.json("./data/over90.json", function(error, dataLoad90) {

d3.json("./data/dewpointHighs.json", function(error, dataLoadDew) {

d3.json("./data/heatingDegree.json", function(error, dataLoadHeat) {

d3.json("./data/hottestDecade.json", function(error, dataLoadDecade) {

d3.json("./data/annualPrecip.json", function(error, dataLoadPrecip) {

d3.json("./data/annualSnow.json", function(error, dataLoadSnow) {

data2011 = dataLoad2012.weather2011;
data2012 = dataLoad2012.weather2012;
data2013 = dataLoad2013.weather2013;
data2014 = dataLoad2014.weather2014;
data2015 = dataLoad2015.weather2015;
data2016 = dataLoad2016.weather2016;
dataTmp = dataLoadTmp.avgTemp;
dataCool = dataLoadCool.coolingDegree;
data90 = dataLoad90.over90;
dataDew = dataLoadDew.dewpointHighs;
dataHeat = dataLoadHeat.heatingDegree;
dataDecade = dataLoadDecade.hottestDecade;
dataPrecip = dataLoadPrecip.annualPrecip;
dataSnow = dataLoadSnow.annualSnow;


$(".years li").on('click',function(){
$(".thisYear").text($(this).attr('year'));

var whatYear = $(this).attr('year');

if (whatYear == '2011') { var newData = data2011; }
if (whatYear == '2012') { var newData = data2012; }
if (whatYear == '2013') { var newData = data2013; }
if (whatYear == '2014') { var newData = data2014; }
if (whatYear == '2015') { var newData = data2015; }
if (whatYear == '2016') { var newData = data2016; }

var maxTemp = Math.max.apply(Math,newData.map(function(o){return o.Tmax;}))
var minTemp = Math.min.apply(Math,newData.map(function(o){return o.Tmin;}))
$("#maxTemp").html(Math.round(maxTemp) + "&deg;");
$("#minTemp").html(Math.round(minTemp) + "&deg;");
var maxSnow = Math.max.apply(Math,newData.map(function(o){return o.SnowFall;}))
var minSnow = Math.min.apply(Math,newData.map(function(o){return o.SnowFall;}))
$("#maxSnow").html(Math.round(maxSnow) + "in");
$("#minSnow").html(Math.round(minSnow) + "in");
var maxPrecip = Math.max.apply(Math,newData.map(function(o){return o.PrecipTotal;}))
var minPrecip = Math.min.apply(Math,newData.map(function(o){return o.PrecipTotal;}))
$("#maxPrecip").html(Math.round(maxPrecip) + "in");
$("#minPrecip").html(Math.round(minPrecip) + "in");
var maxWind = Math.max.apply(Math,newData.map(function(o){return o.Max5Speed;}))
var minWind = Math.min.apply(Math,newData.map(function(o){return o.Max5Speed;}))
$("#maxWind").html(Math.round(maxWind) + "mph");
$("#minWind").html(Math.round(minWind) + "mph");


    chartTemps.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['Tmax','Tmin','Tavg','Avg30yearHigh','Avg30yearLow']
            },
          unload: ['Tmax','Tmin','Tavg','Avg30yearHigh','Avg30yearLow']
    });

    chartSnow.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['SnowFall']
            },
          unload: ['SnowFall']
    });

    chartPrecip.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['PrecipTotal']
            },
          unload: ['PrecipTotal']
    });

    chartWind.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['AvgSpeed',"Max5Speed"]
            },
          unload: ['AvgSpeed',"Max5Speed"]
    });

chartTemps.flush();
chartSnow.flush();
chartPrecip.flush();
chartWind.flush();

});

var maxTemp = Math.max.apply(Math,data2016.map(function(o){return o.Tmax;}))
var minTemp = Math.min.apply(Math,data2016.map(function(o){return o.Tmin;}))
var maxTempAll = Math.max.apply(Math,dataTmp.map(function(o){return o.avgTemp;}))
var minTempAll = Math.min.apply(Math,dataTmp.map(function(o){return o.avgTemp;}))
var max90 = Math.max.apply(Math,data90.map(function(o){return o.daysOver90;}))
var min90 = Math.min.apply(Math,data90.map(function(o){return o.daysOver90;}))

$("#maxTemp").html(Math.round(maxTemp) + "&deg;");
$("#minTemp").html(Math.round(minTemp) + "&deg;");
$("#maxTempAll").html(Math.round(maxTempAll) + "&deg;");
$("#minTempAll").html(Math.round(minTempAll) + "&deg;");
$("#max90").html(Math.round(max90));
$("#min90").html(Math.round(min90));

var maxSnow = Math.max.apply(Math,data2015.map(function(o){return o.SnowFall;}))
var minSnow = Math.min.apply(Math,data2015.map(function(o){return o.SnowFall;}))
var maxSnowAll = Math.max.apply(Math,dataSnow.map(function(o){return o.totalSnow;}))
var minSnowAll = Math.min.apply(Math,dataSnow.map(function(o){return o.totalSnow;}))

$("#maxSnow").html(Math.round(maxSnow) + "in");
$("#minSnow").html(Math.round(minSnow) + "in");
$("#maxSnowAll").html(Math.round(maxSnowAll) + "in");
$("#minSnowAll").html(Math.round(minSnowAll) + "in");

var maxPrecip = Math.max.apply(Math,data2015.map(function(o){return o.PrecipTotal;}))
var minPrecip = Math.min.apply(Math,data2015.map(function(o){return o.PrecipTotal;}))
var maxPrecipAll = Math.max.apply(Math,dataPrecip.map(function(o){return o.annualPrecip;}))
var minPrecipAll = Math.min.apply(Math,dataPrecip.map(function(o){return o.annualPrecip;}))
var maxDew = Math.max.apply(Math,dataDew.map(function(o){return o.junetoAugAvg;}))
var minDew = Math.min.apply(Math,dataDew.map(function(o){return o.junetoAugAvg;}))

$("#maxPrecip").html(Math.round(maxPrecip) + "in");
$("#minPrecip").html(Math.round(minPrecip) + "in");
$("#maxPrecipAll").html(Math.round(maxPrecipAll) + "in");
$("#minPrecipAll").html(Math.round(minPrecipAll) + "in");
$("#maxDew").html(Math.round(maxDew));
$("#minDew").html(Math.round(minDew));

var maxWind = Math.max.apply(Math,data2016.map(function(o){return o.Max5Speed;}))
var minWind = Math.min.apply(Math,data2016.map(function(o){return o.Max5Speed;}))

$("#maxWind").html(Math.round(maxWind) + "mph");
$("#minWind").html(Math.round(minWind) + "mph");

var  padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };


var chartTemps = c3.generate({
        bindto: '#tempsChart',
        padding: padding,
        data: {
            json: data2016,
            keys: {
                x: 'DATE1',
                value: ['Tmax','Tmin','Tavg','Avg30yearHigh','Avg30yearLow']
            },
            names: {
              'Tmax': 'Max Temp',
              'Tmin': 'Min Temp',
              'Tavg': 'Average Temp',
              'Avg30yearHigh': '30-Year High',
              'Avg30yearLow': '30-Year Low'
            },
            types: {
            'Tmax': 'line',
            'Tmin': 'line',
            'Tavg': 'line',
            'Avg30yearHigh': 'bar',
            'Avg30yearLow': 'bar'
            }
        },
    point: {
            show: false
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          y: {
            tick: {
             values: ['-23', '0', '20', '40', '60', '80'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
                count: 4,
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#801515', '#E7A9A9', '#333','#fbdfe7','#b8d3ea'] },
    });


var chartTempHistory = c3.generate({
        bindto: '#tempsHistory',
        padding: padding,
        data: {
            json: dataTmp,
            keys: {
                x: 'year',
                value: ['avgTemp']
            },
            names: {
              'avgTemp': 'Average Temperature'
            }
        },
    point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
           // type: 'categories',
            tick: {
                values: ['1895', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#333'] },
    });

var chartTempHot = c3.generate({
        bindto: '#over90History',
        padding: padding,
        data: {
            json: data90,
            keys: {
                x: 'year',
                value: ['daysOver90']
            },
            names: {
              'daysOver90': '90+ Degree Days'
            }
        },
      point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
           // type: 'categories',
            tick: {
                values: ['1873', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
         regions: [
        {axis: 'x', start: '1980', end: '1990', class: 'hottest'},
    ],
      // subchart: { show: true },
        color: { pattern: ['#801515'] },
    });



var chartSnow = c3.generate({
        bindto: '#snowChart',
        padding: padding,
        data: {
            json: data2016,
            keys: {
                x: 'DATE1',
                value: ['SnowFall']
            },
            names: {
              'SnowFall': 'Snowfall'
            }
        },
      point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '2', '4', '6', '8'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#96ADB0'] },
    });

var chartSnowHistory = c3.generate({
        bindto: '#snowHistory',
        padding: padding,
        data: {
            json: dataSnow,
            keys: {
                x: 'year',
                value: ['totalSnow']
            },
            names: {
              'totalSnow': 'Total Snow'
            }
        },
    point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40', '60', '80', '100'],
             format: d3.format('r')
            }
        },
        x: {
            tick: {
                values: ['1884', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#96ADB0'] },
    });


var chartPrecip = c3.generate({
        bindto: '#precipChart',
        padding: padding,
        data: {
            json: data2016,
            keys: {
                x: 'DATE1',
                value: ['PrecipTotal']
            },
            names: {
              'PrecipTotal': 'Precipitation'
            }
        },
    point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '2', '4'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartDewHistory = c3.generate({
        bindto: '#dewChart',
        padding: padding,
        data: {
            json: dataDew,
            keys: {
                x: 'year',
                value: ['junetoAugAvg']
            },
            names: {
              'junetoAugAvg': 'Dewpoint High June to August Average'
            }
        },
    point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['40', '50', '60'],
             format: d3.format('r')
            }
        },
        x: {
           // type: 'categories',
            tick: {
                values: [1903, 1924, 1953, 1982, 2011],
                multiline: false
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartPrecipHistory = c3.generate({
        bindto: '#precipHistory',
        padding: padding,
        data: {
            json: dataPrecip,
            keys: {
                x: 'year',
                value: ['annualPrecip']
            },
            names: {
              'annualPrecip': 'Total Precipitation'
            }
        },
    point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
            tick: {
                values: ['1891', '1924', '1953', '1982', '2016'],
                multiline: false
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartWind = c3.generate({
        bindto: '#windChart',
        padding: padding,
        data: {
            json: data2015,
            keys: {
                x: 'DATE1',
                value: ['AvgSpeed',"Max5Speed"]
            },
            names: {
              'AvgSpeed': 'Average Speed',
              'Max5Speed': 'Max Speed'
            }
        },
      point: {
            show: false
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40', '60'],
             format: d3.format('r')
            }
        },
        x: {
          type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      // subchart: { show: true },
        color: { pattern: ['#E7C6A9', '#AA6C38'] },
    });
});
});
});
});
});
});
});
});
});
});
});
});
});
});
},{}]},{},[1])