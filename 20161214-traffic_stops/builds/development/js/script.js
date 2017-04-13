(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json('./shapefiles/minneapolis_shape.json', function(error, shape) {
d3.json('./shapefiles/st_nb_disparities.json', function(error, nb) {
d3.json('./shapefiles/stops_grid.json', function(error, grid) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.093611, 44.944167],
    zoom: 10,
    minZoom: 2
});

map.on('load', function() {
    map.scrollZoom.disable();

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
  $(".slide, #cssmenu, #viewSwitch").hide();
  $("#" + selected).show();
  $("#wrapper, #content").css("width","100%");
  $("#wrapper").css("opacity","1");
  switchSlide($("#" + selected).attr("data"));
} else {
  $(".slide").hide();
  $("#mapbox").show();
  $("#wrapper").css("opacity","1");
}


  map.addSource('stpnb', {
    type: 'geojson',
    data: nb
  });

  map.addLayer({
        'id': 'shape-layer',
        'interactive': true,
        'type': 'fill',
        'source': 'stpnb',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': {
                      property: 'disparity',
                      // type: 'categorical',
                      stops: [
                      [0, "#CCCCCC"],
                      [5, "#969696"],
                      [8, "#636363"],
                      [10, "#252525"],
                      [12, "#000000"]]
                    },
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });

    // map.addSource('grid', {
    //   type: 'geojson',
    //   data: grid
    // });

    // map.addLayer({
    //             "id": "grid",
    //             "type": "circle",
    //             "source": "grid",
    //             "paint": {
    //                 "circle-color": {
    //                   'base': 1,
    //                   property: 'PctBlack',
    //                   // type: 'categorical',
    //                   stops: [
    //                   [0, "#CCCCCC"],
    //                   [0.20, "#969696"],
    //                   [0.30, "#636363"],
    //                   [0.40, "#252525"]]
    //                 },
    //                 "circle-radius": {
    //                   'base': 1.5,
    //                   property: 'TotalStops',
    //                   // type: 'categorical',
    //                   stops: [
    //                   [0, 1.5],
    //                   [1000, 2],
    //                   [3000, 2.5],
    //                   [5000, 3],
    //                   [7000, 3.5],
    //                   [9000, 4]]
    //                 }
    //             }
    // });

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['shape-layer'] });
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        if (!features.length) {
            popup.remove();
            return;
        }

        var feature = features[0];

        popup.setLngLat(e.lngLat)
            .setHTML("<div class='tips'>" + feature.properties.NAME + "</div><div class='tips'>" + feature.properties.disparity + "% disparity</div><div class='tips'>" + d3.format("%")(feature.properties.PctBlkStop) + " of stopped drivers were black</div><div class='tips'>" + d3.format("%")(feature.properties.BlackPop) + " black population</div>")
            .addTo(map);
    });

      function switchSlide(index){
        console.log(index);

        if (index == 0){ 
          $(".slide").hide();
          $("#mapbox").show();
          map.flyTo({ center:[-93.093611, 44.944167], zoom: 10 });
          $("#chatter").html("Many St. Paul neighborhoods saw a higher percentage of black drivers pulled over compared to their percentage of the population.");
        }
        if (index == 1){ 
          $(".slide").hide();
          $("#population").show();
          $("#chatter").html("Traffic stops between 2001 and 2016 by race of driver, compared to that racial group’s share of the city population.");
        }
        if (index == 2){ 
          $(".slide").hide();
          $("#time").show();
          $("#chatter").html("While white drivers are more likely to be stopped by police during the day, minorities are more likely pulled over at night.");
        }
        if (index == 3){ 
          $(".slide").hide();
          $("#trend").show();
          $("#chatter").html("Whites were less likely than drivers of other races to get a citation during a traffic stop.");
        }
        if (index == 4){ 
          $(".slide").hide();
          $("#search").show();
          $("#chatter").html("Black drivers were more likely than those of other races to be frisked or have their vehicles searched.");
        }
        if (index == 5){ 
          $(".slide").hide();
          $("#gender").show();
          $("#chatter").html("The percentage of stops where the driver was a black male was significantly higher than their share of the city population.");
        }
      //  path = d3.selectAll(".chart path");

      //  var totalLength = path.node().getTotalLength();

      //  path
      // .attr("stroke-dasharray", totalLength + " " + totalLength)
      // .attr("stroke-dashoffset", totalLength)
      // .transition()
      //   .duration(3000)
      //   .ease("linear")
      //   .attr("stroke-dashoffset", 0);

      }

      $(".menuSwitch").click(function() {
        $(".menuSwitch").removeClass("selectThis");
        $(this).addClass("selectThis");
        switchSlide($(this).attr("data"));
      });

      $(".zoom").click(function() {
        map.flyTo({ center:[-93.093611, 44.944167], zoom: 10 }); 
      });

});

});
});
});

function popChart(){

      var  padding = {
              top: 20,
              right: 60,
              bottom: 20,
              left: 60,
          };

      var chart = c3.generate({
              bindto: '#population',
              padding: padding,
          data: {
              columns: [
                  ['Population',0.59,0.13,0.15,0.08],
                  ['Stops',0.36,0.27,0.08,0.07]
              ],
              type: 'bar'
          },
          color:  {  pattern: ["#636363","#7F98AA"] },
          axis: {
            y: {
                  max: 1,
                  min: 0,
                  padding: {bottom: 0, top:0},
                  tick: {
                   count: 4,
                   format: d3.format('%')
                  }
              },
              x: {
                  type: 'category',
                  categories: ['White', 'Black', 'Asian', 'Hispanic']
              }
            }
      });



      $(".menuSwitch").click(function(event) { chart.show(); });

}

popChart();

function timeChart(){

      var  padding = {
              top: 20,
              right: 60,
              bottom: 20,
              left: 60,
          };

      var chart = c3.generate({
              bindto: '#time',
              padding: padding,
          data: {
              columns: [
                  ["White",0.33,0.25,0.20,0.33,0.22],
                  ["Black",0.15,0.16,0.18,0.36,0.30],
                  ["Asian",0.20,0.18,0.19,0.35,0.27],
                  ["Native",0.12,0.14,0.19,0.39,0.28],
                  ["Hispanic",0.18,0.19,0.21,0.35,0.26]
              ],
              type: 'bar'
          },
          color:  {  pattern: ["#636363","#299E3D","#3580A3","#7F98AA","#C22A22"] },
          axis: {
            y: {
                  max: 0.4,
                  min: 0,
                  padding: {bottom: 0, top:0},
                  tick: {
                   count: 4,
                   format: d3.format('%')
                  }
              },
              x: {
                  type: 'category',
                  categories: ['Morning', 'Aftnoon', 'Evening', 'Early Night', 'Overnite']
              }
            }
      });



      $(".menuSwitch").click(function(event) { chart.show(); });

}

timeChart();

function citationChart(){

      var  padding = {
              top: 20,
              right: 60,
              bottom: 20,
              left: 60,
          };

      var chart = c3.generate({
              bindto: '#trend',
              padding: padding,
          data: {
              columns: [
                  ['Cited',0.09,0.18,0.13,0.18,0.15]
              ],
              type: 'bar'
          },
          color:  {  pattern: ["#636363","#7F98AA","#556E7F"] },
          axis: {
            y: {
                  max: 1,
                  min: 0,
                  padding: {bottom: 0, top:0},
                  tick: {
                   count: 4,
                   format: d3.format('%')
                  }
              },
              x: {
                  type: 'category',
                  categories: ['White', 'Black', 'Asian', 'Native', 'Hispanic']
              }
            }
      });



      $(".menuSwitch").click(function(event) { chart.show(); });

}

citationChart();

function searchChart(){

      var  padding = {
              top: 20,
              right: 60,
              bottom: 20,
              left: 60,
          };

      var chart = c3.generate({
              bindto: '#search',
              padding: padding,
          data: {
              columns: [
                  ['Searched',0.32,0.49,0.07,0.11],
                  ['Frisked',0.33,0.48,0.07,0.11],
              ],
              type: 'bar'
          },
          color:  {  pattern: ["#7F98AA","#556E7F"] },
          axis: {
            y: {
                  max: 1,
                  min: 0,
                  padding: {bottom: 0, top:0},
                  tick: {
                   count: 4,
                   format: d3.format('%')
                  }
              },
              x: {
                  type: 'category',
                  categories: ['White', 'Black', 'Asian', 'Hispanic']
              }
            }
      });



      $(".menuSwitch").click(function(event) { chart.show(); });

}

searchChart();

function genderChart(){

      var  padding = {
              top: 20,
              right: 60,
              bottom: 20,
              left: 60,
          };

      var chart = c3.generate({
              bindto: '#gender',
              padding: padding,
          data: {
              columns: [
                  ['Population',0.28,0.31,0.07,0.07],
                  ['Stops',0.23,0.13,0.19,0.07]
              ],
              type: 'bar'
          },
          color:  {  pattern: ["#636363","#7F98AA"] },
          axis: {
            y: {
                  max: 1,
                  min: 0,
                  padding: {bottom: 0, top:0},
                  tick: {
                   count: 4,
                   format: d3.format('%')
                  }
              },
              x: {
                  type: 'category',
                  categories: ['White Males', 'White Females', 'Black Males', 'Black Females']
              }
            }
      });



      $(".menuSwitch").click(function(event) { chart.show(); });

}

genderChart();
      
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