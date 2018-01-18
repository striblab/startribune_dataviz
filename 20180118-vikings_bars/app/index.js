/**
 * Main JS file for project.
 */

'use strict';
import utilsFn from './utils.js';


utilsFn({ });

d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1PzsxrXT6YjRJlHH64m26HcfJMlfrOOLVIyKT_SMnIuw&sheet=bars", function(error, dataLoad) {

var data = dataLoad.bars;

  jQuery.ui.autocomplete.prototype._resizeMenu = function () {
    var ul = this.menu.element;
    ul.outerWidth(this.element.outerWidth());
  }

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-109.160156, 42.916206],
    zoom: 2,
    minZoom: 2,
    interactive: false
});

// map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function () {

function spillBars(){

  var thisState = "Alaska";

  $("#switches").append("<li class='thisSwitch'>" + thisState + "</li>");

	d3.select("#listing").selectAll(".card")
  .data(data.sort(function(x, y){ return d3.ascending(x.STATE, y.STATE); })).enter().append("div")
  .attr("class",function(d) { return "card "; })
  .attr("longitude",function(d) { return d.LONG; })
  .attr("latitude",function(d) { return d.LAT; })
  .attr("placeName",function(d) { return d.NAME; })
  .attr("pitch",function(d) { return d.pitch; })
  .attr("bearing",function(d) { return d.bearing; })
  .on("mousedown", function(d, i){ 

    $("#name, .pname").html(d.NAME);
    $("#address, .paddress").html("<div>" + d.NAME + "</div><div>" + d.DISPLAY_ADDRESS + "</div><div>" + d.CITY + ", " + d.AB + "</div>");
    $("#phone, .pphone").html(d.PHONE);
    $("#website, .pwebsite").html("<a href='" + d.WEBSITE + "' target='new_'>Website</a> | <a href='https://maps.google.com?daddr=" + d.ADDRESS + "' target='new_'>Directions</a>");
  })
  .html(function(d){ 

        var newState = "";

        if (thisState != d.STATE) {
          thisState = d.STATE;
          newState = "<li class='thisSwitch'>" + thisState + "</li>";
        }

       $("#switches").append(newState);

        map.addLayer({
            "id": "dots-" + d.INDEX,
            "type": "circle",
            "paint": {
                        "circle-color": 'rgba(79, 38, 131, 0.5)',
                        "circle-radius": 5
                    },
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [d.LONG, d.LAT]
                        },
                        "properties": {
                            "title": d.NAME,
                            "icon": "monument"
                        }
                    }]
                }
            }
        });

   //      var popup = new mapboxgl.Popup({
   //      closeButton: false,
   //      closeOnClick: false
   //  });

  	// map.on('mousemove', function(e) {
  	//     var features = map.queryRenderedFeatures(e.point, { layers: ['dots-' + d.INDEX] });
  	//     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

  	//     if (!features.length) {
  	//         popup.remove();
  	//         return;
  	//     }

  	//     var feature = features[0];

  	//     popup.setLngLat(e.lngLat)
  	//         .setHTML(feature.properties.title)
  	//         .addTo(map);

  	// });

  	// $(".card").click(function(e) {
  	//     var features = map.queryRenderedFeatures(e.point, { layers: ['dots-' + d.INDEX] });

  	//     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

  	//     if (!features.length) {
  	//         popup.remove();
  	//         return;
  	//     }

  	//     var feature = features[0];
  	//     var placeName = ""; 

  	//     popup.setLngLat([$(this).attr("longitude"), $(this).attr("latitude")])
  	//         .setHTML($(this).attr("placeName"))
  	//         .addTo(map);
  	// });

  	$(".zoom").click(function() {
  		    popup.remove();
  	});

   //  var $input = $('#filter_box');

   //  $input.autocomplete({
   //  minLength: 3,
   //   source: data.map(function(d) {
   //     return {
   //       value: d.INDEX,
   //       label: "<div class='col'>" + d.NAME + "</div><div class='col places'>" + d.CITY + "</div><div class='col places'>" + d.STATE + "</div>"
   //     }
   //   }),
   //   select: function(e, ui) {
   //     e.preventDefault();
   //     $input.val(ui.item.label);
   //     if (ui.item.value) {
   //             var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
   //              var pitch = $(this).attr("pitch") / random;
   //              var bearing = $(this).attr("bearing") / random;
   //              map.jumpTo({ center: [d.LAT, d.LONG], zoom: 14, pitch: pitch, bearing: bearing });
   //     }
   //   }
   // });

    return "<div class='col'>" + d.NAME + "</div><div class='col places'>" + d.CITY + "</div><div class='col places hideme'>" + d.STATE + "</div><div class='col places'>" + d.AB + "</div><div class='col'>" + d.PHONE + "</div>";
  });

     $('.thisSwitch').click(function(i){
        $("#map").hide();
        $("#listing").show();
        $('.card').hide();
        var txt = $(this).text();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

    $(".card").click(function() { 
        $("#map").show();
        $("#listing").hide();
        var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        var pitch = $(this).attr("pitch") / random;
        var bearing = $(this).attr("bearing") / random;
        $("#infobox").show();
        map.jumpTo({ center: [$(this).attr("longitude"), $(this).attr("latitude")], zoom: 14, pitch: pitch, bearing: bearing });
        $(".card").removeClass("selected");
        $(this).addClass("selected"); 
    });

         function DropDown(el)  { 
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype =  { 
        initEvents : function()  { 
          var obj = this;

          obj.dd.on('click', function(event) { 
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function() { 
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function()  { 
          return this.val;
        },
        getIndex : function()  { 
          return this.index;
        }
      }

      $(function()  { 

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function()  { 
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });
}

spillBars();



});

$( document ).ready(function() {
    if ($("#wrapper").width() < 520) { map.jumpTo({ center: [-95.712891, 37.090240], zoom: 2, pitch: 0, bearing: 0 }); }
    else { map.jumpTo({ center: [-109.160156, 42.916206], zoom: 2, pitch: 0, bearing: 0 }); }
    $(window).resize(function() {
    if ($("#wrapper").width() < 520) { map.jumpTo({ center: [-95.712891, 37.090240], zoom: 2, pitch: 0, bearing: 0 }); }
    else { map.jumpTo({ center: [-109.160156, 42.916206], zoom: 2, pitch: 0, bearing: 0 }); }
    });

});

    $(".zoom, .mapify").click(function() {
          map.jumpTo({ center: [-109.160156, 42.916206], zoom: 2, pitch: 0, bearing: 0 });
          $(".stat").html("");
          $(".card").removeClass("selected");
          $("#filter_box").val("");
          $(".card").show();
          $("#infobox").hide();
          $("#map").show();
          $("#listing").hide();
          $("#selectText").html('Select a state');
    });

    $(".return").click(function() {
        $("#map").hide();
        $("#listing").show();
        $(".card").show();
    });

});
