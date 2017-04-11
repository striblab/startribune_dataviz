// d3.json("./data/stp_shootings.json", function(error, dataSTPLoad) {

//MENU STUFF
function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}
  $(document).ready(function() {
    $('.nav-tabs > td').click(function(event){
    event.preventDefault();//stop browser to take action for clicked anchor

    $('.nav-tabs > td').removeClass('selected');
    $(this).addClass('selected');

    //get displaying tab content jQuery selector
    var active_tab_selector = $('.nav-tabs > td').attr('href');          
 
    //find actived navigation and remove 'active' css
    var actived_nav = $('.nav-tabs > td.active');
    actived_nav.removeClass('active');
 
    //add 'active' css into clicked navigation
    $(this).parents('td').addClass('active');
 
    //hide displaying tab content
    $(".tab-content").removeClass('active');
    $(".tab-content").addClass('hide');
 
    //show target tab content
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
       });
    });

//TOOLTIP STUFF
$(document).ready(function() {

$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></span>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

var map = L.mapbox.map('map', 'mapbox.light')
    .setView([44.9690,-93.0784], 12);

var shooting1 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0941170,
          44.9579080
        ]
    },
    properties: {
        description: '261 East University Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting2 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0877790,
          44.9373780
        ]
    },
    properties: {
        description: 'Plato Boulevard and Wabasha Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting3 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1186710,
          44.9629700
        ]
    },
    properties: {
        description: 'Minnehaha Avenue and Arundel Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting4 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0753010,
          44.9681770
        ]
    },
    properties: {
        description: '594 York Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting5 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1297640,
          44.9548030
        ]
    },
    properties: {
        description: '700 Aurora Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting6 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1525120,
          44.9392480
        ]
    },
    properties: {
        description: 'Grand Ave and Ayd Mill Road',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting7 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0736050,
          44.9630000
        ]
    },
    properties: {
        description: 'Payne Ave and Minnehaha Ave',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting8 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1127660,
          44.9744320
        ]
    },
    properties: {
        description: '300 Jessamine Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting9 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0268030,
          44.9531540
        ]
    },
    properties: {
        description: '1739 Old Hudson Road',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting10 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0405560,
          44.9811700
        ]
    },
    properties: {
        description: 'Ivy Avenue and Birmingham Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting11 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0354370,
          44.9892690
        ]
    },
    properties: {
        description: '1500 East Iowa Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting12 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0322820,
          44.9784240
        ]
    },
    properties: {
        description: '1619 East Maryland Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting13 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0354370,
          44.9892690
        ]
    },
    properties: {
        description: '1500 East Iowa Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting14 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1078510,
          44.9535770
        ]
    },
    properties: {
        description: '425 Rice Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);
var shooting15 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.025666,
          44.953829
        ]
    },
    properties: {
        description: '411 White Bear Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);


var chart2;
  nv.addGraph(function() {
    chart2 = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 5, bottom: 50, left: 5})
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .transitionDuration(350)
  .color(['#BCBCBC', '#808080', '#515151', '#2B2B2B', '#121212'])
      .tooltip(function(key, x, y, e, graph) {
    return '<p>' + key + ': ' +  d3.round(y, 0);  + '</p>';
        })
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

   chart2.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart svg')
        .datum(raceData)
        .call(chart2);

    nv.utils.windowResize(chart2.update);

    return chart2;
  });

var raceData = [
    {
    "key": "White",
    "values": [
      { 
        "label" : "" ,
        "value" : 4
      }
    ]
  },
  {
    "key": "Black",
    "values": [
      { 
        "label" : "" ,
        "value" : 7
      }
    ]
  },
  {
    "key": "Hispanic",
    "values": [
      { 
        "label" : "" ,
        "value" : 1
      }
    ]
  },
  {
    "key": "Asian",
    "values": [
      { 
        "label" : "" ,
        "value" : 2
      }
    ]
  }

]

var dummyData2 = [
  {
    "key": "Black",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "Hispanic",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "Asian",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "White",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  }
]

var dummyData =  [
      { 
        "label": "One",
        "value" : 0
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 0
      } , 
      { 
        "label": "Four",
        "value" : 0
      } , 
      { 
        "label": "Five",
        "value" : 0
      } , 
      { 
        "label": "Six",
        "value" : 0
      } , 
      { 
        "label": "Seven",
        "value" : 0
      } , 
      { 
        "label": "Eight",
        "value" : 0
      }
    ]

function redrawChart(data2){

    d3.select('#chart svg').datum(data2).transition().duration(500).call(chart2);
    nv.utils.windowResize(chart2.update);
}

// });