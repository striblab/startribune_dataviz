<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:title" content="Control of the Minnesota House"/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="http://jeffhargarten.com/interactives/mnleg/mnleg.png"/>
	<meta property="og:description" content="I predicted a <?php echo $results; ?> Minnesota House majority after the 2014 midterm elections. Take the quiz and make your prediction!"/>
	<link rel="image_src" href="mnleg.png" />
	<script async="" src="http://www.google-analytics.com/analytics.js"></script>
    <title>Polling Results</title>

<!--STYLESHEETS-->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link href='https://api.tiles.mapbox.com/mapbox.js/v1.6.3/mapbox.css' rel='stylesheet' />
<link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.2/leaflet.fullscreen.css' rel='stylesheet' />
<link href="nvd3-master/src/nv.d3.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
<link href='//cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css' rel='stylesheet' />

<style type="text/css">
@font-face {
       font-family: Popular;
     src: url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-2.eot?") format("embedded-opentype"),
             url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-3.woff") format("woff"),
             url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-1.ttf") format("truetype"),
          url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-4.svg#web") format("svg");
       font-style: normal;
       font-weight: normal;
}

@font-face {
   font-family: Popular-medium;
  src: url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-2.eot?") format("embedded-opentype"),
           url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-3.woff") format("woff"),
            url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-1.ttf") format("truetype"),
          url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-4.svg#web") format("svg");
        font-style: normal;
        font-weight: normal;
}

@font-face {
    font-family: Popular-bold;
     src: url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-2.eot?") format("embedded-opentype"),
       url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-3.woff") format("woff"),
 url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-1.ttf") format("truetype"),
        url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-4.svg#web") format("svg");
        font-style: normal;
        font-weight: bold;
}
</style>

<style type="text/css">
body{
margin:20px;
font-family: "Popular" serif !important;
font-size:20px !important;
color:#000 !important;
}

svg{
margin:0 !important;
}

h1, .h1, h2, .h2, h3, .h3 {
margin-top: 0 !important;
}

h1, h3, h5, h6 {
font-family: "Popular";
}

h4{
font-size:14px !important;
}

#box_wrapper{
background:#EDEDF3;
height:auto;
overflow: auto;
font-family: "Arial" sans-serif;
width:100%;
max-width: 100%; !important;
font-size: 16px !important;
overflow-y:hidden;
}

#result_bar{
margin-top:20px;
border-style: solid;
border-width: 1px;
border-color:#EDEDF3;
width:100%;
max-width: 100%; !important;

}

#result_bar p {
font-size: 18px !important;
font-weight:medium !important;
margin-left:1.3%;
}

#result_bar span{
font-family: "Arial" !important;
font-weight:bold !important;
font-size: 14px !important;
padding:10px !important;
margin-left:4.8%;
}

#question{
height:200px;
overflow-y:hidden;
float:left;
background:#EDEDF3;
height:100%;
width:90%;
padding:20px;
max-width: 730px !important;
}

#open_close{
float:right;
background:#EDEDF3;
width:10%;
height:40px;
vertical-align:middle;
cursor:pointer;
overflow:hidden !important;
}

.open:hover, .closeme:hover{
color:#92B28D;
}

.open{
color:#000;
padding-right:20px;
padding-left:20px;
font-size: 2em;
font-weight:bold;
height:40px;
width:100%;
vertical-align:middle;
width:100%;
display:inline;
overflow-y:hidden;
box-sizing: border-box;
}

.closeme{
color:#000;
padding-right:20px;
padding-left:20px;
font-size: 2em;
font-weight:bold;
height:40px;
overflow-y:hidden;
width:100%;
vertical-align:middle;
display:none;
box-sizing: border-box;
}

.tracking{
width:100% !important;
}

.cat{
font-family: "Arial" sans-serif !important;
font-size: 14px !important;
}

.nvtooltip{
font-size:16px !important;
font-weight:bold !important;
padding:10px !important;
display: block !important;
margin-left: auto !important;
margin-right: auto !important;
width:auto !important;
border: 1px solid black !important;
}

.nv-axisMaxMin text{
font-weight: normal !important;
}

rect:hover{
stroke-opacity: 1 !important;
stroke: #000 !important;
}

.nvd3 .nv-wrap .nv-multiBarHorizontalChart{
width:100% !important;
}

.nvd3 .nv-wrap .nv-multiBarHorizontalChart g{
width:100% !important;
}
  </style>

  </head>

  <body>

<p></p>

<div id="box_wrapper">
<div id="question"><h2>Dayton job approval</h2><span>
The Star Tribune Minnesota Poll surveyed 800 Minnesota adults Feb 10-12, 2014. Respondents were reached on both landlines and cell phones. The poll has a margin of sampling error of 3.5 percentage points, plus or minus.</div><div id="open_close"><center><span class="open">&#x25B2;</span><span class="closeme">&#x25BC;</span></center></div>
</div>
<div id="result_bar">
<p>Do you have a favorable, unfavorable or neutral opinion of Mark Dayton?</p>
<div id="tracker" class="tracking"><svg height="130px" width="100%"> </svg></div>
<p>Do you approve or disapprove of Mark Dayton's job performance as governor?</p>
<span class="cat">Registered voter?</span>
<div id="tracker2" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
<span class="cat">By region</span>
<div id="tracker3" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
<span class="cat">By income</span>
<div id="tracker4" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
<span class="cat">By party affiliation</span>
<div id="tracker5" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
<span class="cat">By gender</span>
<div id="tracker6" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
<span class="cat">By age</span>
<div id="tracker7" class="tracking"><svg style="height:130px;width:100%"> </svg></div>
</div>
</div>
</div>
</div>




<!--SCRIPTS-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.min.js"></script>
<script src="nvd3-master/lib/d3.v3.js"></script>
<script src="nvd3-master/nv.d3.js"></script>
<script src="nvd3-master/src/utils.js"></script>
<script src="nvd3-master/src/tooltip.js"></script>
<script src="nvd3-master/src/models/legend.js"></script>
<script src="nvd3-master/src/models/axis.js"></script>
<script src="nvd3-master/src/models/multiBarHorizontal.js"></script>
<script src="nvd3-master/src/models/multiBarHorizontalChart.js"></script>
<script src="nvd3-master/examples/stream_layers.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script> 
<script src="//cdn.datatables.net/1.10.2/js/jquery.dataTables.min.js"></script> 

<script language="JavaScript">

$('circle').attr('r',0);

function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}

$('#result_bar').slideUp();

    $('.open').click(function() {
        $('#result_bar').slideDown();
        $('.closeme').show();
        $('.open').hide();
        $("#results_bar").style('width','99%');
    });

    $('.closeme').click(function() {
        $('#result_bar').slideUp();
        $('.open').show();
        $('.closeme').hide();
    });

</script>

<script>
var chart;
nv.addGraph(function() {
  chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker svg')
      .datum(data)
      .call(chart);


  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart;
});

var chart2;
nv.addGraph(function() {
  chart2 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart2.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker2 svg')
      .datum(data2)
      .call(chart2);


  nv.utils.windowResize(chart2.update);

  chart2.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart2.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart2;
});

var chart3;
nv.addGraph(function() {
  chart3 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart3.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker3 svg')
      .datum(data3)
      .call(chart3);


  nv.utils.windowResize(chart3.update);

  chart3.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart3.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart3;
});

var chart4;
nv.addGraph(function() {
  chart4 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart4.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker4 svg')
      .datum(data4)
      .call(chart4);


  nv.utils.windowResize(chart4.update);

  chart4.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart4.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart4;
});

var chart5;
nv.addGraph(function() {
  chart5 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart5.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker5 svg')
      .datum(data5)
      .call(chart5);


  nv.utils.windowResize(chart5.update);

  chart5.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart5.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart5;
});

var chart6;
nv.addGraph(function() {
  chart6 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart6.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker6 svg')
      .datum(data6)
      .call(chart6);


  nv.utils.windowResize(chart6.update);

  chart6.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart6.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart6;
});

var chart7;
nv.addGraph(function() {
  chart7 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 50})
      //.showValues(true)
      .tooltips(true)
      //.barColor(#a7706b,#ff0000)
      .transitionDuration(250)
      .stacked(true)
      .showControls(false);

  chart7.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker7 svg')
      .datum(data7)
      .call(chart7);


  nv.utils.windowResize(chart7.update);

  chart7.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart7.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart7;
});

</script>

<script>
data = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "GOP" ,
        "value" : .20
      } , 
      { 
        "label" : "DFL" ,
        "value" : .20
      } ,
      { 
        "label" : "IND" ,
        "value" : .60
      } 
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "GOP" ,
        "value" : .60
      } , 
      { 
        "label" : "DFL" ,
        "value" : .20
      } ,
      { 
        "label" : "IND" ,
        "value" : .20
      } 
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "GOP" ,
        "value" : .20
      } , 
      { 
        "label" : "DFL" ,
        "value" : .60
      } ,
      { 
        "label" : "IND" ,
        "value" : .20
      } 
    ]
  }
];

data2 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .10
      } ,
      { 
        "label" : "No" ,
        "value" : .30
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .23
      } ,
      { 
        "label" : "No" ,
        "value" : .20
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .33
      } ,
      { 
        "label" : "No" ,
        "value" : .40
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .34
      } ,
      { 
        "label" : "No" ,
        "value" : .10
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .60
      }
    ]
  }
];

data3 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .10
      } ,
      { 
        "label" : "No" ,
        "value" : .30
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .23
      } ,
      { 
        "label" : "No" ,
        "value" : .20
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .33
      } ,
      { 
        "label" : "No" ,
        "value" : .40
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .34
      } ,
      { 
        "label" : "No" ,
        "value" : .10
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .60
      }
    ]
  }
];

data4 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .10
      } ,
      { 
        "label" : "No" ,
        "value" : .30
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .23
      } ,
      { 
        "label" : "No" ,
        "value" : .20
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .33
      } ,
      { 
        "label" : "No" ,
        "value" : .40
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .34
      } ,
      { 
        "label" : "No" ,
        "value" : .10
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .60
      }
    ]
  }
];

data5 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .10
      } ,
      { 
        "label" : "No" ,
        "value" : .30
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .23
      } ,
      { 
        "label" : "No" ,
        "value" : .20
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .33
      } ,
      { 
        "label" : "No" ,
        "value" : .40
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
        "label" : "Yes" ,
        "value" : .34
      } ,
      { 
        "label" : "No" ,
        "value" : .10
      } , 
      { 
        "label" : "Maybe" ,
        "value" : .60
      }
    ]
  }
];

data6 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "Male" ,
        "value" : .10
      } ,
      { 
        "label" : "Female" ,
        "value" : .30
      } , 
      { 
        "label" : "Other" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "Male" ,
        "value" : .23
      } ,
      { 
        "label" : "Female" ,
        "value" : .20
      } , 
      { 
        "label" : "Other" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "Male" ,
        "value" : .33
      } ,
      { 
        "label" : "Female" ,
        "value" : .40
      } , 
      { 
        "label" : "Other" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
       "label" : "Male" ,
        "value" : .34
      } ,
      { 
        "label" : "Female" ,
        "value" : .10
      } , 
      { 
        "label" : "Other" ,
        "value" : .60
      }
    ]
  }
];

data7 = [ 
  {
    key: 'Approve',
    color: '#49803F',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .10
      } ,
      { 
        "label" : "35-49" ,
        "value" : .30
      } , 
      { 
        "label" : "50-64" ,
        "value" : .10
      },
      { 
        "label" : "65+" ,
        "value" : .40
      }
    ]
  },
  {
    key: 'Disapprove',
    color: '#6D9966',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .23
      } ,
      { 
        "label" : "35-49" ,
        "value" : .20
      } , 
      { 
        "label" : "50-64" ,
        "value" : .20
      },
      { 
        "label" : "65+" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Undecided',
    color: '#92B28D',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .33
      } ,
      { 
        "label" : "35-49" ,
        "value" : .40
      } , 
      { 
        "label" : "50-64" ,
        "value" : .10
      },
      { 
        "label" : "65+" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Unrecognized',
    color: '#B5CCB2',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .34
      } ,
      { 
        "label" : "35-49" ,
        "value" : .10
      } , 
      { 
        "label" : "50-64" ,
        "value" : .60
      },
      { 
        "label" : "65+" ,
        "value" : .30
      }
    ]
  }
];
</script>
  </body>
</html>