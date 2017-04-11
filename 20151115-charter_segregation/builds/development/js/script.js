(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/charter_breakdown.json", function(error, dataLoadBreakdown) {
d3.json("./data/charter_demographics.json", function(error, dataLoadDemographics) {
d3.json("./data/charters_poverty_white.json", function(error, dataLoadPovertyWhite) {
d3.json("./data/charters_poverty_minority.json", function(error, dataLoadPovertyMinority) {
d3.json("./data/charters_poverty_integrated.json", function(error, dataLoadPovertyIntegrated) {
d3.json("./data/charters_proficiency_white.json", function(error, dataLoadProficiencyWhite) {
d3.json("./data/charters_proficiency_minority.json", function(error, dataLoadProficiencyMinority) {
d3.json("./data/charters_proficiency_integrated.json", function(error, dataLoadProficiencyIntegrated) {

dataBreakdown = dataLoadBreakdown.charter_breakdown;
dataDemographics = dataLoadDemographics.charter_demographics;
dataPovertyWhite = dataLoadPovertyWhite.charters_poverty_white;
dataPovertyMinority = dataLoadPovertyMinority.charters_poverty_minority;
dataPovertyIntegrated = dataLoadPovertyIntegrated.charters_poverty_integrated;
dataProficiencyWhite = dataLoadProficiencyWhite.charters_proficiency_white;
dataProficiencyMinority = dataLoadProficiencyMinority.charters_proficiency_minority;
dataProficiencyIntegrated = dataLoadProficiencyIntegrated.charters_proficiency_integrated;

var padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 60
    };

var padding_bars = {
        left: 80
    };

var chart_segregated = c3.generate({
        bindto: '#breakdown',
        padding: padding,
        data: {
            json: dataBreakdown,
            keys: {
                x: 'year', // it's possible to specify 'x' when category axis
                value: ["Charters","Minneapolis","St._Paul","Inner_Suburbs","Outer_Suburbs"]
            },
          types: {
              'Charters': 'line',
              'Minneapolis': 'line',
              'St._Paul': 'line',
              'Inner_Suburbs': 'line',
              'Outer_Suburbs': 'line'
          },
            names: {
              'Charters': 'Charters',
              'Minneapolis': 'Minneapolis',
              'St._Paul': 'St. Paul',
              'Inner_Suburbs': 'Inner Suburbs',
              'Outer_Suburbs': 'Outer Suburbs'
            }
        },  
        color: { pattern: ['#ad1625', '#3c4646', '#7d7373', '#959595', '#c7c7c7'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1995', '1999', '2003', '2008', '2015'] }
            },
            y : {
            tick: { format: d3.format("%"), count: 6 },
            padding: {top: 5, bottom: 0} 
        }
       }
    });

var chart_demographics = c3.generate({
        bindto: '#demographics',
        padding: padding,
        data: {
            json: dataDemographics,
            keys: {
                x: 'YEAR', // it's possible to specify 'x' when category axis
                value: ["minority_pct","white_pct","integrated_pct"]
            },
            type: 'bar',
            groups: [ ['minority_pct', 'white_pct', 'integrated_pct'] ],
            names: {
              'integrated_pct': 'Integrated',
              'minority_pct': 'Segregated Minority',
              'white_pct': 'Segregated White',
            }
        }, 
        bar: { width: { ratio: 0.2 } },  
        color: { pattern: ['#8C101C', '#E71D32', '#FFA5B4'] },
        axis: {
            x: {
               // type: 'category',
               tick: { fit: true, values: ['1995', '1999', '2003', '2008', '2015'] }
            },
            y : {
              tick: { format: d3.format("%"), count: 6 },
              padding: {top: 0, bottom: 0} 
        }
       }
    });

var chart_poverty_white = c3.generate({
                bindto: '#poverty_white',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyWhite,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#ad1625', '#c7c7c7'] }, 
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 1970, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_poverty_minority = c3.generate({
                bindto: '#poverty_minority',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyMinority,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#c7c7c7', '#3c4646', '#7d7373', '#ad1625'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#c7c7c7', '#3c4646', '#7d7373', '#ad1625'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 45, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_poverty_integrated = c3.generate({
                bindto: '#poverty_integrated',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataPovertyIntegrated,
                    keys: {
                      x: 'category',
                      value: ["poverty"]
                    },
                    names: { 'poverty': 'Students in poverty', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#ad1625', '#c7c7c7', '#7d7373', '#3c4646'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#ad1625', '#c7c7c7', '#7d7373', '#3c4646'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 515, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_white = c3.generate({
                bindto: '#proficiency_white',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyWhite,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#ad1625', '#c7c7c7', '#3c4646'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#ad1625', '#c7c7c7', '#3c4646'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 75, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_minority = c3.generate({
                bindto: '#proficiency_minority',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyMinority,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 720, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
            });

var chart_proficiency_integrated = c3.generate({
                bindto: '#proficiency_integrated',
                padding: padding_bars,
                size: { height: 150 },
                bar: { width: 40 },
                data: {
                    json: dataProficiencyIntegrated,
                    keys: {
                      x: 'category',
                      value: ["pct_proficient"]
                    },
                    names: { 'pct_proficient': 'Percent proficient', },
                    type: 'bar',
                    color: function(inColor, data) {
                        var colors = ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },
                bar: { width: { ratio: 0.5  } },  
                color: { pattern: ['#3c4646', '#7d7373', '#ad1625', '#c7c7c7'] },   
                axis: {
                    rotated: true,
                    x: { type: 'category', tick: { multiline:false } },
                    y: { tick: { format: d3.format("%"), count: 6 }, padding: {top: 210, bottom: 0}  }
                },
                tooltip: { grouped: false },
                legend: { show: false }
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