(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}


if (selected == "lookup"){
//lookup stuff
$("#districtSelect").click(function() { 
  $("#listedSchools, #filter").slideToggle();
  $(".directions").toggle();
});


$('#filter input').on("keyup search",function(i){
   $('.district').hide();
   var txt = $('#filter input').val();
   
   $('.district').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       } 
   });
});

d3.json('./data/districts.json', function(error, dataLoad) {

var data = dataLoad.districts;

d3.select("#listedSchools").selectAll(".district")
  .data(data.sort(function(a,b) { return d3.ascending(a.HomeDistName, b.HomeDistName); }).filter(function(d) { return d.datayear == "2016" && d.HomeDistName != "Statewide"; })).enter().append("li")
  .attr("class",function(d) { return "district"; })
  .on("click",function(d){
    $("#county").html(grabData(d.HomeDistName,"base"));
  })
  .html(function(d){ 
    return d.HomeDistName;
  });

$("li.district").click(function() { 
  $("li.district").removeClass("selected");
  $(this).addClass("selected");
  $("#listedSchools, #filter").slideToggle();
  $("#thisDistrict").html($(this).text());
  $(".directions").toggle();
  
  //chart reloads
      chartLeaving.load({
                columns: [
                    grabData($(this).text(),"axis"),
                    grabData($(this).text(),"leavingCharter"),
                    grabData($(this).text(),"leavingOpen")
                ]
      });

      raceChart.load({
                columns: [
                    ["Leaving District", grabData($(this).text(),"whiteleave"), grabData($(this).text(),"blackleave"), grabData($(this).text(),"asianleave"), grabData($(this).text(),"nativeleave"), grabData($(this).text(),"hispanicleave")],
                    ["Residents", grabData($(this).text(),"whiteres"), grabData($(this).text(),"blackres"), grabData($(this).text(),"asianres"), grabData($(this).text(),"nativeres"), grabData($(this).text(),"hispanicres")]
                ]
      });

      incomingChart.load({
                columns: [
                    grabData($(this).text(),"axis"),
                    grabData($(this).text(),"incoming")
                ]
      });

      enrollmentChart.load({
                columns: [
                    grabData($(this).text(),"axis"),
                    grabData($(this).text(),"enrolled"),
                    grabData($(this).text(),"residents")
                ]
      });
});

function grabData(district,subject) {

  var dataSort = data.sort(function(a,b) { return d3.ascending(a.datayear, b.datayear); })

  var index = 1;

  if (subject == "base"){
    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        return dataSort[i].county + " County (" + dataSort[i].location + ")";
      }
    }
  }

  if (subject == "axis"){

    var axis = [];
    axis[0] = "x";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        axis[index] = dataSort[i].datayear;
        index++;
      }
    }

    return axis;
  }

  if (subject == "incoming"){

    var incoming =  [];
    incoming[0] = "Incoming";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        incoming[index] = dataSort[i].PctComingIn;
        index++;
      }
    }

    return incoming;
  }

  if (subject == "leavingCharter"){

    var charters =  [];
    charters[0] = "Charters";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        charters[index] = dataSort[i].PctLeavingToCharter;
        index++;
      }
    }

    return charters;
  }

  if (subject == "leavingOpen"){

    var open =  [];
    open[0] = "Open Enrollment";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        open[index] = dataSort[i].PctLeavingOpenEnroll;
        index++;
      }
    }

    return open;
  }

  if (subject == "enrolled"){

    var enrolled =  [];
    enrolled[0] = "Enrolled";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        enrolled[index] = dataSort[i].totalenroll;
        index++;
      }
    }

    return enrolled;
  }

  if (subject == "residents"){

    var residents =  [];
    residents[0] = "Residents";

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName) {
        residents[index] = dataSort[i].residents;
        index++;
      }
    }

    return residents;
  }

  if (subject == "whiteleave"){

    var wleave = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        wleave = data[i].WhtLeaving / (data[i].WhtLeaving + data[i].AmIndLeaving + data[i].BlkLeaving + data[i].AsnLeaving + data[i].HispLeaving);
      }
    }

    return wleave;

  }

  if (subject == "whiteres"){

    var wres = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        wres = data[i].WhtResidents / data[i].residents;
      }
    }

    return wres;

  }

  if (subject == "blackleave"){

    var bleave = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        bleave = data[i].BlkLeaving / (data[i].WhtLeaving + data[i].AmIndLeaving + data[i].BlkLeaving + data[i].AsnLeaving + data[i].HispLeaving);
      }
    }

    return bleave;
  }

  if (subject == "blackres"){

    var bres = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        bres = data[i].BlkResidents / data[i].residents;
      }
    }

    return bres;

  }

  if (subject == "nativeleave"){

    var nleave = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        nleave = data[i].AmIndLeaving / (data[i].WhtLeaving + data[i].AmIndLeaving + data[i].BlkLeaving + data[i].AsnLeaving + data[i].HispLeaving);
      }
    }

    return nleave;
  }

  if (subject == "nativeres"){

    var nres = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        nres = data[i].AmIndResidents / data[i].residents;
      }
    }

    return nres;

  }

  if (subject == "asianleave"){

    var aleave = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        aleave = data[i].AsnLeaving / (data[i].WhtLeaving + data[i].AmIndLeaving + data[i].BlkLeaving + data[i].AsnLeaving + data[i].HispLeaving);
      }
    }

    return aleave;
  }

  if (subject == "asianres"){

    var ares = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        ares = data[i].AsnResidents / data[i].residents;
        
      }
    }

    

    return ares;

  }

  if (subject == "hispanicleave"){

    var hleave = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        hleave = data[i].HispLeaving / (data[i].WhtLeaving + data[i].AmIndLeaving + data[i].BlkLeaving + data[i].AsnLeaving + data[i].HispLeaving);
      }
    }

    return hleave;

  }


  if (subject == "hispanicres"){

    var hres = 0;

    for (var i=0; i < dataSort.length; i++){
      if (district == dataSort[i].HomeDistName && dataSort[i].datayear == 2017) {
        hres = data[i].HispResidents / data[i].residents;
      }
    }

    return hres;

  }

}

//chart builders
// function switchChart(district){

var district = "Minneapolis Public School District";

    var  padding = {
            top: 20,
            right: 45,
            bottom: 20,
            left: 45,
        };

var mainaxis = grabData(district,"axis");

//leaving chart
    var chartLeaving = c3.generate({
          bindto: "#leavingChart",
          padding: padding,
          
          data: {
                x: 'x',
                columns: [
                    mainaxis,
                    grabData(district,"leavingCharter"),
                    grabData(district,"leavingOpen")
                ],
            type: 'area',
            groups: [
                ['Charters', 'Open Enrollment']
            ],
            labels: {
                // format: {
                //     '18-34': d3.format('%'),
                //     '35-49': d3.format('%'),
                //     '50-64': d3.format('%'),
                //     '65+': d3.format('%')
                // }
            }},            
            bar: {
                width: {
                    ratio: 0.2
                }
            },
            transition: {
                duration: 1300
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#b2cba2','#a5c3d2']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%')
                        }
                    },
                  x: {
                          padding: {bottom: 0, top: 0, right: 0, left: 0},
                          tick: {
                           count: 4,
                           values: [mainaxis[1],2006,2012,mainaxis[mainaxis.length-1]]
                          }
                  }
            },
          grid: {
              // y: {
              // lines: [
              //       {value: 0.5, text: '', position: 'start', class:'powerline'}
              // ]
              // }
          }

    });

//race chart
    var raceChart = c3.generate({
          bindto: "#raceChart",
          padding: padding,
          data: {
                columns: [
                    ["Leaving District", grabData(district,"whiteleave"), grabData(district,"blackleave"), grabData(district,"asianleave"), grabData(district,"nativeleave"), grabData(district,"hispanicleave")],
                    ["Residents", grabData(district,"whiteres"), grabData(district,"blackres"), grabData(district,"asianres"), grabData(district,"nativeres"), grabData(district,"hispanicres")]
                ],
            type: 'bar',
            labels: {
                // format: {
                //     '18-34': d3.format('%'),
                //     '35-49': d3.format('%'),
                //     '50-64': d3.format('%'),
                //     '65+': d3.format('%')
                // }
            }},
            legend: {
                show: false
            },
            transition: {
                duration: 1300
            },
                color: {
                  pattern: ['#b2cba2','#a5c3d2']
                },
            point: {
                show: false
            },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%.0f')
                        }
                    },
                  x: {
                          type: "category",
                          categories: ["White","Black","Asian","Native","Hisp."],
                          padding: {bottom: 0, top: 0, right: 0, left: 0},
                          tick: {
                            rotate: -75,
                            multiline: false
                        },
            height: 30
                  }
            },
          grid: {
              // y: {
              // lines: [
              //       {value: 0.5, text: '', position: 'start', class:'powerline'}
              // ]
              // }
          }

    });

//incoming chart
    var incomingChart = c3.generate({
          bindto: "#incomingChart",
          padding: padding,
          data: {
                x: 'x',
                columns: [
                    grabData(district,"axis"),
                    grabData(district,"incoming")
                ],
            type: 'area',
            labels: {
                // format: {
                //     '18-34': d3.format('%'),
                //     '35-49': d3.format('%'),
                //     '50-64': d3.format('%'),
                //     '65+': d3.format('%')
                // }
            }},
            legend: {
                show: false
            }, 
            transition: {
                duration: 1300
            },           
            point: {
                show: false
            },
                color: {
                  pattern: ['#b2cba2']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%')
                        }
                    },
                  x: {
                          padding: {bottom: 0, top: 0, right: 0, left: 0},
                          tick: {
                           count: 4,
                           values: [mainaxis[1],2006,2012,mainaxis[mainaxis.length-1]]
                          }
                  }
            },
          grid: {
              // y: {
              // lines: [
              //       {value: 0.5, text: '', position: 'start', class:'powerline'}
              // ]
              // }
          }

    });

    var enrollmentChart = c3.generate({
          bindto: "#enrollmentChart",
          padding: padding,
          data: {
                x: 'x',
                columns: [
                    mainaxis,
                    grabData(district,"enrolled"),
                    grabData(district,"residents")
                ],
            type: 'line',
            labels: {
                // format: {
                //     '18-34': d3.format('%'),
                //     '35-49': d3.format('%'),
                //     '50-64': d3.format('%'),
                //     '65+': d3.format('%')
                // }
            }},
            legend: {
                show: false
            },
            transition: {
                duration: 1300
            },
                color: {
                  pattern: ['#7c9979','#7c94a0']
                },
            point: {
                show: false
            },
            axis: {
                  // rotated: true,
                  y: {
                        // max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.25,0.50,0.75,1],
                         format: d3.format(',.0f')
                        }
                    },
                  x: {
                          padding: {bottom: 0, top: 0, right: 0, left: 0},
                          tick: {
                           count: 4,
                           values: [mainaxis[1],2006,2012,mainaxis[mainaxis.length-1]]
                          }
                  }
              },
          grid: {
              // y: {
              // lines: [
              //       {value: 0.5, text: '', position: 'start', class:'powerline'}
              // ]
              // }
          }

    });
// }

$('.switch').first().addClass("selected");

});

}

else if (selected == "charter"){

//map stuff
d3.json('./data/charters.geojson', function(error, charters) {

var bounds = [
    [-168.046875, 23.150462],// Southwest coordinates
    [-51.328125, 52.849230] // Northeast coordinates
];

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-94.685900, 46.729553], 
    zoom: 5,
    minZoom: 2,
    // maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {

$("#state").click(function() { 
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  map.flyTo({ center: [-94.685900, 46.729553], zoom:5 });
});

$("#metro").click(function() { 
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  map.flyTo({ center: [-93.265011, 44.977753], zoom:10 });
});

  map.addSource('charters', {
   type: 'geojson',
   data: charters
 });

function plopMarker(year,rgb,index){

     cap = year;

     var framesPerSecond = 15; 
     var initialOpacity = 1
     var opacity = initialOpacity;
     var initialRadius = 5;
     var radius = initialRadius;
     var maxRadius = 18;

      map.addLayer({
                  "id": "charter-layer-" + year,
                  "type": "circle",
                  "source": "charters",
                  "paint": {
    			           "circle-radius": initialRadius,
    			           "circle-radius-transition": {duration: 0},
    			           "circle-opacity-transition": {duration: 0},
    			           "circle-color": 'rgba(' + rgb + ', 0.45)'
                  },
                  "filter": [
                  "==",
                  "firstyr",
                  year]
                  // "filter":[ 
                  // "==",
                  // "Name",
                  // species]
      });

      map.addLayer({
                  "id": "charter-layer1-" + year,
                  "type": "circle",
                  "source": "charters",
                  "paint": {
                     "circle-radius": initialRadius,
                     "circle-radius-transition": {duration: 0},
                     "circle-opacity-transition": {duration: 0},
                     "circle-color": 'rgba(204, 0, 0, 0.45)'
                  },
                  "filter": [
                  "==",
                  "lastyr",
                  year]
      });


    map.setLayoutProperty('charter-layer1-' + year, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + year, 'visibility', 'none');

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['charter-layer-' + year,'charter-layer-1' + year] });
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        if (!features.length) {
            popup.remove();
            return;
        }

        var feature = features[0];

        // Populate the popup and set its coordinates
        // based on the feature found.
        // popup.setLngLat(e.lngLat)
        //     .setHTML(feature.properties.name)
        //     .addTo(map);
    });
}

function hideMarkers(index){
    map.setLayoutProperty('charter-layer1-' + index, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + index, 'visibility', 'none');
}

function showMarkers(index){
    map.setLayoutProperty('charter-layer1-' + index, 'visibility', 'visible');
    map.setLayoutProperty('charter-layer-' + index, 'visibility', 'visible');
}

function loadMarkers(){
  for (var i=1995; i <= 2017; i++){
    plopMarker(i,'51,204,255',i);
  }
}

function unloadMarkers(start, cap){
  for (var i=start; i <= cap; i++){
    map.setLayoutProperty('charter-layer1-' + i, 'visibility', 'none');
    map.setLayoutProperty('charter-layer-' + i, 'visibility', 'none');
  }
}

loadMarkers();
unloadMarkers(1995, 2017);

var timer = [];

timer[0] = setTimeout(function(){ showMarkers(1995); }, 1000);
timer[1] = setTimeout(function(){ showMarkers(1996); }, 1400);
timer[2] = setTimeout(function(){ showMarkers(1997);  }, 1800);
timer[3] = setTimeout(function(){ showMarkers(1998);  }, 2200);
timer[4] = setTimeout(function(){ showMarkers(1999);  }, 2600);
timer[5] = setTimeout(function(){ showMarkers(2000);  }, 3200);
timer[6] = setTimeout(function(){ showMarkers(2001);  }, 3800);
timer[7] = setTimeout(function(){ showMarkers(2002);  }, 4400);
timer[8] = setTimeout(function(){ showMarkers(2003);  }, 5000);
timer[9] = setTimeout(function(){ showMarkers(2004);  }, 5600);
timer[10] = setTimeout(function(){ showMarkers(2005);  }, 7200);
timer[11] = setTimeout(function(){ showMarkers(2006);  }, 7800);
timer[12] = setTimeout(function(){ showMarkers(2007);  }, 8200);
timer[13] = setTimeout(function(){ showMarkers(2008);  }, 8600);
timer[14] = setTimeout(function(){ showMarkers(2009);  }, 9000);
timer[15] = setTimeout(function(){ showMarkers(2010);  }, 9400);
timer[16] = setTimeout(function(){ showMarkers(2011);  }, 9800);
timer[17] = setTimeout(function(){ showMarkers(2012);  }, 10200);
timer[18] = setTimeout(function(){ showMarkers(2013);  }, 10600);
timer[19] = setTimeout(function(){ showMarkers(2014);  }, 11000);
timer[20] = setTimeout(function(){ showMarkers(2015);  }, 11400);
timer[21] = setTimeout(function(){ showMarkers(2016);  }, 11800);
timer[22] = setTimeout(function(){ showMarkers(2016);  }, 12200);

$("#reload").click(function() { 
  unloadMarkers(1995, 2017);

  for (var i = 0; i < timer.length; i++) {
    clearTimeout(timer[i]);
  }

  timer[0] = setTimeout(function(){ showMarkers(1995); }, 1000);
  timer[1] = setTimeout(function(){ showMarkers(1996); }, 1400);
  timer[2] = setTimeout(function(){ showMarkers(1997);  }, 1800);
  timer[3] = setTimeout(function(){ showMarkers(1998);  }, 2200);
  timer[4] = setTimeout(function(){ showMarkers(1999);  }, 2600);
  timer[5] = setTimeout(function(){ showMarkers(2000);  }, 3200);
  timer[6] = setTimeout(function(){ showMarkers(2001);  }, 3800);
  timer[7] = setTimeout(function(){ showMarkers(2002);  }, 4400);
  timer[8] = setTimeout(function(){ showMarkers(2003);  }, 5000);
  timer[9] = setTimeout(function(){ showMarkers(2004);  }, 5600);
  timer[10] = setTimeout(function(){ showMarkers(2005);  }, 7200);
  timer[11] = setTimeout(function(){ showMarkers(2006);  }, 7800);
  timer[12] = setTimeout(function(){ showMarkers(2007);  }, 8200);
  timer[13] = setTimeout(function(){ showMarkers(2008);  }, 8600);
  timer[14] = setTimeout(function(){ showMarkers(2009);  }, 9000);
  timer[15] = setTimeout(function(){ showMarkers(2010);  }, 9400);
  timer[16] = setTimeout(function(){ showMarkers(2011);  }, 9800);
  timer[17] = setTimeout(function(){ showMarkers(2012);  }, 10200);
  timer[18] = setTimeout(function(){ showMarkers(2013);  }, 10600);
  timer[19] = setTimeout(function(){ showMarkers(2014);  }, 11000);
  timer[20] = setTimeout(function(){ showMarkers(2015);  }, 11400);
  timer[21] = setTimeout(function(){ showMarkers(2016);  }, 11800);
  timer[22] = setTimeout(function(){ showMarkers(2016);  }, 12200);
});


});
});
}
},{}]},{},[1])