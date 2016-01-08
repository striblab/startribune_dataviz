<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>MNPOLL</title>
  	<meta name="description" content="MNPOLL">
 	<meta name="author" content="Jeff Hargarten - StarTribune">
	<meta name="generator" content="BBEdit 10.5" />

	<link href="http://apps.startribune.com/js/nvd3-master/src/nv.d3.css" rel="stylesheet" type="text/css">

<style>
	.articleHeader .headingIntro { border-top:none; font-size:1.33em; line-height:22px; margin:0px 0 10px; padding-top:10px; }
	.scroll-to-fixed-fixed { box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.5); moz-box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.5); webkit-box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.5); }
	.pw-button-googleplus,.ra1-pw-icon-linkedin,.ra1-pw-icon-reddit,.stumbleUponIcon { display:none !important; }
	svg { margin:0 !important; }
	#box_wrapper { background:#EDEDF3; font-family:"Arial" sans-serif; font-size:16px !important; height:auto; max-width:100%; overflow:auto; overflow-y:hidden; width:100%; }
	#result_bar { border:none; margin-top:0px; max-width:100%; width:100%; }
	#result_bar p { font-size:18px !important; font-weight:medium !important; }
	#cat { font-family:"Arial" !important; font-size:14px !important; font-weight:bold !important; margin-left:4.8%; padding:10px !important; }
	#question { background:#EDEDF3; float:left; height:100%; height:200px; max-width:730px !important; overflow-y:hidden; padding:20px; width:90%; }
	#open_close { background:#EDEDF3; cursor:pointer; float:right; height:40px; overflow:hidden !important; vertical-align:middle; width:10%; }
	.open:hover, .closeme:hover { color:#92B28D; }
	.open { box-sizing:border-box; color:#000; display:inline; font-size:2em; font-weight:bold; height:40px; overflow-y:hidden; padding-left:20px; padding-right:20px; vertical-align:middle; width:100%; }
	.closeme { box-sizing:border-box; color:#000; display:none; font-size:2em; font-weight:bold; height:40px; overflow-y:hidden; padding-left:20px; padding-right:20px; vertical-align:middle; width:100%; }
	.tracking { width:100% !important; }
	.cat { font-family:"Arial" sans-serif !important; font-size:14px !important; }
	.nvtooltip { border:1px solid 999; border-radius:5px; box-shadow:1px 1px 3px 0px rgba(50, 50, 50, 0.75); display:block !important; font-size:16px !important; font-weight:bold !important; margin-left:auto !important; margin-right:auto !important; moz-border-radius:5px; moz-box-shadow:1px 1px 3px 0px rgba(50, 50, 50, 0.75); padding:10px !important; webkit-border-radius:5px; webkit-box-shadow:1px 1px 3px 0px rgba(50, 50, 50, 0.75); width:auto !important; }
	.nv-axisMaxMin text { font-weight:normal !important; }
	rect:hover { stroke:#000 !important; stroke-opacity:1 !important; }
	.nv-slice:hover { stroke:#000 !important; stroke-opacity:1 !important; }
	.nvd3 .nv-wrap .nv-multiBarHorizontalChart { width:100% !important; }
	.nvd3 .nv-wrap .nv-multiBarHorizontalChart g { width:100% !important; }
	#pane { float:left; height:auto; width:70%; }
	td:hover { background-color:#ccc; cursor:pointer; }
	.tab-content.active { display:block; }
	.tab-content.hide { display:none; }
	#tracker0 { background-color:white; }
	.pie { background-color:white; color:black; }
	.nv-series.disabled path { fill-opacity:0; }
	#highlight { left:396px; position:absolute; text-align:center; top:116px; }
	#highlight h1 { font-family:popular-bold; font-size:4em; }
	#bigNum { font-family:"Arial"; font-size:2.292em; font-weight:bold; }
	g .nv-slice:hover { stroke:black !important; }
	.nv-legendWrap { left:0 !important; position:absolute !important; top:0 !important; }
	#legend { float:left; margin-top:38px; width:275px; }
	.legend label { display:table-cell; font-weight:normal !important; line-height:80%; margin-top:0; padding:2px 0 0 0; }
	.legend span { color:#808080; display:table-cell; float:left; font-size:3.5em !important; height:15px; left:0; line-height:-3.5em !important; padding:0; position:absolute; width:15px; }
	.leg { padding:0 0 0 18px !important; }
	td { width:12.5% !important; }
	.nav-tabs { border-bottom:none !important; }
	.nav-tabs td.active { background:#000; }
	.nav-tabs td.active a { color:#efefef; font-weight:bold; }
	#legend h4,section h5 { font-family:popular-bold; }
	#legend h4 { font-size:1.25em; margin-bottom:18px; }
	#bigPie { min-height:400px; }
	section h5 { font-size:1.10em; }
	#pie1 { position:absolute; right:-24px; top:0; }
	.tracking { margin:9px 0 18px 0; }
	#pies { float:right; margin-right:-50px; margin-top:-200px; position:relative; width:420px; }
	#demo1,#demo2,#demo3,#demo4,#demo5 { height:25px; margin:0 auto 0 auto; text-align:center; width:150px; }
	.myButton4 { background-color:#2ca25f; border:0; border-radius:3px; color:#ffffff; cursor:pointer; display:inline-block; font-family:arial; font-size:13px; font-weight:900; moz-border-radius:16px; padding:13px 26px; text-decoration:none; webkit-border-radius:16px; width:16%; }
	.myButton4:hover { background-color:#5cbf2a !important; }
	.myButton4:active { background-color:#5cbf2a; }
  </style>
</head>
<body>

<div class="clearfix"></div>
<div id="menu">
<button id="all" class="myButton4" onclick="redrawGraph(voteData,favorableData,approvalData,voteData,voteData,voteData,voteData,favorableData2,7);setVisibility('bigPie', 'block');setVisibility('pies', 'none');">All</button>
<button id="party" class="myButton4" onclick="redrawGraph(favorableDataParty,favorableDataParty,approvalDataParty,voteDataParty01,voteDataParty02,voteDataParty03,voteDataParty04,favorableDataParty2,0);setVisibility('bigPie', 'none');setVisibility('pies', 'block');">Party</button>
<button id="income" class="myButton4" onclick="redrawGraph(favorableDataParty,favorableDataIncome,approvalDataIncome,voteDataIncome01,voteDataIncome02,voteDataIncome03,voteDataIncome04,favorableDataIncome2,1);setVisibility('bigPie', 'none');setVisibility('pies', 'block');">Income</button>
<button id="income" class="myButton4" onclick="redrawGraph(favorableDataParty,favorableDataRegion,approvalDataRegion,voteDataRegion01,voteDataRegion02,voteDataRegion03,voteDataRegion04,favorableDataRegion2,2);setVisibility('bigPie', 'none');setVisibility('pies', 'block');">Region</button>
<button id="income" class="myButton4" onclick="redrawGraph(favorableDataParty,favorableDataGender,approvalDataGender,voteDataGender01,voteDataGender02,voteDataGender03,voteDataGender04,favorableDataGender2,3);setVisibility('bigPie', 'none');setVisibility('pies', 'block');"">Gender</button>
<button id="income" class="myButton4" onclick="redrawGraph(favorableDataParty,favorableDataAge,approvalDataAge,voteDataAge01,voteDataAge02,voteDataAge03,voteDataAge04,favorableDataAge2,4);setVisibility('bigPie', 'none');setVisibility('pies', 'block');">Age</button>


<div style="position:relative;">
	<div id="result_bar">

<div id='legend'>
<h4>Would you say that MNsure, the state health insurance exchange that is part of the federal Affordable Care Act, has been mostly a success or mostly a failure?</h4>
  <nav class='legend clearfix'>
    <div class="leg"><span style='color:#49803F;font-size:52px;line-height:35%;'>&#8226;</span> <label>&nbsp;Success</label></div>
<p></p>
    <div class="leg"><span style='color:#6D9966;font-size:52px;line-height:35%;'>&#8226;</span> <label>&nbsp;Failure</label></div>
<p></p>
    <div class="leg"><span style='color:#92B28D;font-size:52px;line-height:35%;'>&#8226;</span> <label>&nbsp;Not Sure</label></div>
</nav>
</div>

<section id="tab1" class="tab-content">
<div id="bigPie">
	
	<div id="highlight"><h1 id="bigNum">44%</h1><span id="whatWhat" style="color:#666">said a failure</span>
			<h1 id="bigNum" style="margin-top:6px;">33%</h1><span id="whatWhat" style="color:#666">said a success</span></div>
<div id="pie1"><svg style="height:400px;width:400px;"></svg></div>
</div>

<div id="pies" style="display:none;">
<div class="quadpie">
<div id="pie2" style="float:left;"><div id="demo1">Demo1</div><svg style="height:200px;width:200px;"></svg></div><div id="pie3" style="float:left;"><div id="demo2">Demo2</div><svg 

style="height:200px;width:200px;"></svg></div>
</div>
<div class="quadpie">
<div id="pie4" style="float:left;"><div id="demo3">Demo3</div><svg style="height:200px;width:200px;"></svg></div><div id="pie5" style="float:left;"><div id="demo4">Demo4</div><svg 

style="height:200px;width:200px;"></svg></div>
</div>
</div>
<div class="clearfix"></div>
<div id="bars">
<span id="q4"><h5>Do you think Minnesota should approve or reject the application from PolyMet for a new copper and nickel mine on the Iron Range?</h5></span>
<div id="tracker" class="tracking"><svg style="height:130px;width:100%"></svg></div>
<span id="q3"><h5>When it comes to mining minerals, is it more important to protect the environment or provide jobs?</h5></span>
<div id="tracker3" class="tracking"><svg style="height:130px;width:100%"></svg></div>	
</div>
</div>
</section>
</div>
</body>
       
         <!--SCRIPTS-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.9/d3.min.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/lib/d3.v3.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/nv.d3.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/utils.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/tooltip.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/models/legend.js?123"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/models/axis.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/models/multiBarHorizontal.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/src/models/multiBarHorizontalChart.js"></script>
<script src="http://apps.startribune.com/js/nvd3-master/examples/stream_layers.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script type='text/javascript'>//<![CDATA[ 
$(window).load(function(){
$(document).ready(function() {
    $('#menu').scrollToFixed({
        limit: $('.articleBottomNav').offset().top - $('#menu').outerHeight() - 10,
        marginTop: function() {
            var marginTop = $(window).height() - $('#menu').outerHeight(true) - 20;
            if (marginTop >= 0) return 0;
            return marginTop;
        }
    });
});

});//]]>  
</script>
<script type='text/javascript' src="http://www.startribune.com/includes/jquery-scrolltofixed-min.js"></script>

<script>
function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}
</script>
<script>
$( document ).ready(function() {
  $("#all").css("background-color","#333");  
$( ".myButton4" ).click(function() {
  $(".myButton4").css("background-color","#2ca25f");
  $(this).css("background-color","#333");
  }); 
});
</script>
<script>

//PIE CHART RESULTS
var chart0
nv.addGraph(function() {
  chart0 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.65)     //Configure how big you want the donut hole size to be.
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      ;

    d3.select("#pie1 svg")
        .datum(voteData)
        .transition().duration(350)
        .call(chart0);

chart0.valueFormat(d3.format('%'));

 var shapes = ['square','square','square','square','square','square','square'];
d3.selectAll('.nv-series')[0].forEach(function(d,i) {
    var group = d3.select(d),
        circle = group.select('circle');
    var color = circle.style('fill');
    circle.remove();
    group.append('path')
        .attr('d', d3.svg.symbol().type(shapes[i]))
        .style('fill', color)
        .attr('width', '20px')
        .attr('height', '20px')
        .style('stroke', color)
        .attr('r', '0').append('br');
});

nv.utils.windowResize(chart0.update)

  return chart0;
});

var chart01
nv.addGraph(function() {
  chart01 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.4)     //Configure how big you want the donut hole size to be.
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      ;

    d3.select("#pie2 svg")
        .datum(voteData)
        .transition().duration(350)
        .call(chart01);

chart01.valueFormat(d3.format('%'));

 var shapes = ['square','square','square','square','square','square','square'];
d3.selectAll('.nv-series')[0].forEach(function(d,i) {
    var group = d3.select(d),
        circle = group.select('circle');
    var color = circle.style('fill');
    circle.remove();
    group.append('path')
        .attr('d', d3.svg.symbol().type(shapes[i]))
        .style('fill', color)
        .attr('width', '20px')
        .attr('height', '20px')
        .style('stroke', color)
        .attr('r', '0').append('br');
});

nv.utils.windowResize(chart01.update)

  return chart01;
});

var chart02
nv.addGraph(function() {
  chart02 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.4)     //Configure how big you want the donut hole size to be.
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      ;

    d3.select("#pie3 svg")
        .datum(voteData)
        .transition().duration(350)
        .call(chart02);

chart02.valueFormat(d3.format('%'));

 var shapes = ['square','square','square','square','square','square','square'];
d3.selectAll('.nv-series')[0].forEach(function(d,i) {
    var group = d3.select(d),
        circle = group.select('circle');
    var color = circle.style('fill');
    circle.remove();
    group.append('path')
        .attr('d', d3.svg.symbol().type(shapes[i]))
        .style('fill', color)
        .attr('width', '20px')
        .attr('height', '20px')
        .style('stroke', color)
        .attr('r', '0').append('br');
});

nv.utils.windowResize(chart02.update)

  return chart02;
});

var chart03
nv.addGraph(function() {
  chart03 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.4)     //Configure how big you want the donut hole size to be.
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      ;

    d3.select("#pie4 svg")
        .datum(voteData)
        .transition().duration(350)
        .call(chart03);

chart03.valueFormat(d3.format('%'));

 var shapes = ['square','square','square','square','square','square','square'];
d3.selectAll('.nv-series')[0].forEach(function(d,i) {
    var group = d3.select(d),
        circle = group.select('circle');
    var color = circle.style('fill');
    circle.remove();
    group.append('path')
        .attr('d', d3.svg.symbol().type(shapes[i]))
        .style('fill', color)
        .attr('width', '20px')
        .attr('height', '20px')
        .style('stroke', color)
        .attr('r', '0').append('br');
});

nv.utils.windowResize(chart03.update)

  return chart03;
});

var chart04
nv.addGraph(function() {
  chart04 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.4)     //Configure how big you want the donut hole size to be.
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      ;

    d3.select("#pie5 svg")
        .datum(voteData)
        .transition().duration(350)
        .call(chart04);

chart04.valueFormat(d3.format('%'));

 var shapes = ['square','square','square','square','square','square','square'];
d3.selectAll('.nv-series')[0].forEach(function(d,i) {
    var group = d3.select(d),
        circle = group.select('circle');
    var color = circle.style('fill');
    circle.remove();
    group.append('path')
        .attr('d', d3.svg.symbol().type(shapes[i]))
        .style('fill', color)
        .attr('width', '20px')
        .attr('height', '20px')
        .style('stroke', color)
        .attr('r', '0').append('br');
});

nv.utils.windowResize(chart04.update)

  return chart04;
});
</script>

<script>
var chart1;
//OVERleft: 110})ALL RESULTS
nv.addGraph(function() {

  chart1 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 110})
      //.showValues(true)
      .tooltips(true)
      //.showLegend(false)
     // .barColor(#006d2c,#31a354,#74c476,#bae4b3,#edf8e9)
      .transitionDuration(250)
      .stacked(true)
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      .showControls(false);

  chart1.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker svg')
      .datum(favorableData)
      .call(chart1);

  nv.utils.windowResize(chart1.update);

  chart1.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart1.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});


  return chart1;

});
var chart2;
//BREAKDOWN RESULTS
nv.addGraph(function() {

  chart2 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 110})
      //.showValues(true)
      .tooltips(true)
      //.showLegend(false)
      //.barColor(#006d2c,#31a354,#74c476,#bae4b3,#edf8e9)
      .transitionDuration(250)
      .stacked(true)
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      .showControls(false);

  chart2.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker2 svg')
      .datum(approvalData)
      .call(chart2);

  nv.utils.windowResize(chart2.update);

  chart2.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart2.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart2;

});

var chart3;
//BREAKDOWN RESULTS
nv.addGraph(function() {

  chart3 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 30, left: 110})
      //.showValues(true)
      .tooltips(true)
      //.showLegend(false)
      //.barColor(#006d2c,#31a354,#74c476,#bae4b3,#edf8e9)
      .transitionDuration(250)
      .stacked(true)
      .color(['#49803F', '#6D9966', '#92B28D', '#B5CCB2', '#edf8e9'])
      .showControls(false);

  chart3.yAxis
      .tickFormat(d3.format(',.00%'));

  d3.select('#tracker3 svg')
      .datum(favorableData2)
      .call(chart3);

  nv.utils.windowResize(chart3.update);

  chart3.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

chart3.tooltip(function(key, x, y, e, graph) {
    return x + ' Voters: ' +  y + ' ' + key;
});

  return chart3;

});

</script>

<script>
redrawGraph = function(data1, data2, data3, data4, data5, data6, data7, data8, theline) {

    d3.select('#pie1 svg').datum(data1).transition().duration(500).call(chart0);
    nv.utils.windowResize(chart0.update);
    d3.select('#pie2 svg').datum(data4).transition().duration(500).call(chart01);
    nv.utils.windowResize(chart01.update);
    d3.select('#pie3 svg').datum(data5).transition().duration(500).call(chart02);
    nv.utils.windowResize(chart02.update);
    d3.select('#pie4 svg').datum(data6).transition().duration(500).call(chart03);
    nv.utils.windowResize(chart03.update);
    d3.select('#pie5 svg').datum(data7).transition().duration(500).call(chart04);
    nv.utils.windowResize(chart04.update);
    d3.select('#tracker svg').datum(data2).transition().duration(500).call(chart1);
    nv.utils.windowResize(chart1.update);
    d3.select('#tracker2 svg').datum(data3).transition().duration(500).call(chart2);
    nv.utils.windowResize(chart2.update);
    d3.select('#tracker3 svg').datum(data8).transition().duration(500).call(chart3);
    nv.utils.windowResize(chart3.update);

    var d1Text= [
     'What DFLers/Democrats said',
     'What voters making less than $50,000 said',
     'What voters living in Hennepin/Ramsey counties said',
     'What men said',
     'What 18-34 year-olds said',
     'No data'
    ];

    $("#demo1").text(d1Text[theline]);

    var d2Text= [
     "What Republicans said",
      "What voters making more than $50,000 said",
      "What voters living in the rest of the metro area said",
     "What women said",
     "What 35-49 year-olds said",
     " "
    ];

    $("#demo2").text(d2Text[theline]);

    var d3Text= [
     "What Independents said",
     " ",
     "What voters living in the rest of State said",
     " ",
     "What 50-64 year-olds said",
     " "
    ];

    $("#demo3").text(d3Text[theline]);

    var d4Text= [
     " ",
     " ",
     " ",
     " ",
     "What 65-year-olds and older said",
     " "
    ];

  $("#demo4").text(d4Text[theline]);

  var bigNumText= [
   "44%",
   "44%",
   "44%",
   "44%",
   "44%",
   "44%",
   "44%",
   "44%"
  ];

  $("#bigNum").text(bigNumText[theline]);


};
</script>

<script>
//ALL
voteData = [ 
      { 
        "label": "Success",
        "value" : .33
      } , 
      { 
        "label": "Failure",
        "value" : .44
      } , 
      { 
        "label": "Not Sure",
        "value" : .23
      }
    ];

favorableData = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "Total" ,
        "value" : .40
      }
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "Total" ,
        "value" : .23
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Total" ,
        "value" : .37
      }
    ]
  }
];

favorableData2 = [ 
  {
    key: 'Environment',
    values: [ 
      { 
        "label" : "Total" ,
        "value" : .48
      } 
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "Total" ,
        "value" : .32
      }
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "Total" ,
        "value" : .20
      }
    ]
  }
];

approvalData = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "Total" ,
        "value" : .12
      }
    ]
  },
  {
    key: 'Not',
    values: [
      { 
        "label" : "Total" ,
        "value" : .20
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Total" ,
        "value" : .68
      }
    ]
  }
];

//PARTY
voteDataParty = [ 
      { 
        "label": "Success",
        "value" : .93
      } , 
      { 
        "label": "Failure",
        "value" : .02
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

voteDataParty01 = [ 
      { 
        "label": "Success",
        "value" : .64
      } , 
      { 
        "label": "Failure",
        "value" : .13
      } , 
      { 
        "label": "Not Sure",
        "value" : .23
      }
    ];

voteDataParty02 = [ 
      { 
        "label": "Success",
        "value" : .02
      } , 
      { 
        "label": "Failure",
        "value" : .80
      } , 
      { 
        "label": "Not Sure",
        "value" : .18
      }
    ];

voteDataParty03 = [ 
      { 
        "label": "Success",
        "value" : .25
      } , 
      { 
        "label": "Failure",
        "value" : .44
      } , 
      { 
        "label": "Not Sure",
        "value" : .31
      }
    ];

voteDataParty04 = [ 
      { 
        "label": "Yes",
        "value" : 0
      } , 
      { 
        "label": "No",
        "value" : 0
      } , 
      { 
        "label": "Refused",
        "value" : 0
      }
    ];

favorableDataParty = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .27
      } , 
      { 
        "label" : "Republican" ,
        "value" : .66
      } , 
      { 
        "label" : "Independent" ,
        "value" : .29
      }  
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .30
      } , 
      { 
        "label" : "Republican" ,
        "value" : .03
      } , 
      { 
        "label" : "Independent" ,
        "value" : .35
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .43
      } , 
      { 
        "label" : "Republican" ,
        "value" : .31
      } , 
      { 
        "label" : "Independent" ,
        "value" : .36
      } 
    ]
  }
];

favorableDataParty2 = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .65
      } , 
      { 
        "label" : "Republican" ,
        "value" : .23
      } , 
      { 
        "label" : "Independent" ,
        "value" : .53
      }  
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .17
      } , 
      { 
        "label" : "Republican" ,
        "value" : .56
      } , 
      { 
        "label" : "Independent" ,
        "value" : .27
      } 
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .18
      } , 
      { 
        "label" : "Republican" ,
        "value" : .21
      } , 
      { 
        "label" : "Independent" ,
        "value" : .20
      } 
    ]
  }
];

approvalDataParty = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .08
      },      
      { 
        "label" : "Republican" ,
        "value" : .20
      },      
      { 
        "label" : "Independent" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .35
      },      
      { 
        "label" : "Republican" ,
        "value" : .09
      },      
      { 
        "label" : "Independent" ,
        "value" : .11
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "DFL/Democrat" ,
        "value" : .57
      },      
      { 
        "label" : "Republican" ,
        "value" : .71
      },      
      { 
        "label" : "Independent" ,
        "value" : .79
      }
    ]
  }
];

//INCOME
voteDataIncome = [ 
      { 
        "label": "Al Franken",
        "value" : .57
      } , 
      { 
        "label": "Mike McFadden",
        "value" : .33
      } , 
      { 
        "label": "Steve Carlson",
        "value" : .01
      } , 
      { 
        "label": "Other",
        "value" : .01
      }, 
      { 
        "label": "Undecided",
        "value" : .08
      }
    ];

voteDataIncome01 = [ 
      { 
        "label": "Success",
        "value" : .42
      } , 
      { 
        "label": "Failure",
        "value" : .42
      } , 
      { 
        "label": "Not Sure",
        "value" : .16
      }
    ];

voteDataIncome02 = [ 
      { 
        "label": "Success",
        "value" : .31
      } , 
      { 
        "label": "Failure",
        "value" : .44
      } , 
      { 
        "label": "Not Sure",
        "value" : .25
      }
    ];

voteDataIncome03 = [ 
      { 
        "label": "Democrats",
        "value" : 0
      } , 
      { 
        "label": "Republicans",
        "value" : 0
      } , 
      { 
        "label": "Neither",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

voteDataIncome04 = [ 
      { 
        "label": "Democrats",
        "value" : 0
      } , 
      { 
        "label": "Republicans",
        "value" : 0
      } , 
      { 
        "label": "Neither",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

favorableDataIncome = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .41
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .44
      } 
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .20
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .22
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .39
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .34
      } 
    ]
  }
];

favorableDataIncome2 = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .45
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .52
      } 
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .40
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .29
      } 
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .15
      } , 
      { 
        "label" : "$50,000 +" ,
        "value" : .19
      } 
    ]
  }
];

approvalDataIncome = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .13
      },      
      { 
        "label" : "$50,000 +" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .17
      },      
      { 
        "label" : "$50,000 +" ,
        "value" : .21
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "< $50,000" ,
        "value" : .70
      },      
      { 
        "label" : "$50,000 +" ,
        "value" : .69
      }
    ]
  }
];

//REGION
voteDataRegion = [ 
      { 
        "label": "Al Franken",
        "value" : .66
      } , 
      { 
        "label": "Mike McFadden",
        "value" : .20
      } , 
      { 
        "label": "Steve Carlson",
        "value" : .01
      } , 
      { 
        "label": "Other",
        "value" : .01
      }, 
      { 
        "label": "Undecided",
        "value" : .12
      }
    ];

voteDataRegion01 = [ 
      { 
        "label": "Success",
        "value" : .50
      } , 
      { 
        "label": "Failure",
        "value" : .29
      } , 
      { 
        "label": "Not Sure",
        "value" : .21
      }
    ];

voteDataRegion02 = [ 
      { 
        "label": "Success",
        "value" : .20
      } , 
      { 
        "label": "Failure",
        "value" : .49
      } , 
      { 
        "label": "Not Sure",
        "value" : .31
      }
    ];

voteDataRegion03 = [ 
      { 
        "label": "Success",
        "value" : .29
      } , 
      { 
        "label": "Failure",
        "value" : .51
      } , 
      { 
        "label": "Not Sure",
        "value" : .20
      }
    ];

voteDataRegion04 = [ 
      { 
        "label": "Support",
        "value" : 0
      } , 
      { 
        "label": "Oppose",
        "value" : 0
      } , 
      { 
        "label": "Undecided",
        "value" : 0
      }
    ];

favorableDataRegion = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .30
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .54
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .24
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .52
      }
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .34
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .16
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .30
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .10
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .36
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .30
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .46
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .38
      }
    ]
  }
];

favorableDataRegion2 = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .50
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .40
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .61
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .43
      }
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .25
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .40
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .22
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .43
      }
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .25
      } , 
      { 
        "label" : "Metro Suburbs" ,
        "value" : .20
      }  , 
      { 
        "label" : "S Minnesota" ,
        "value" : .17
      }  , 
      { 
        "label" : "N Minnesota" ,
        "value" : .14
      }
    ]
  }
];

approvalDataRegion = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .05
      },      
      { 
        "label" : "Metro Suburbs" ,
        "value" : .20
      },      
      { 
        "label" : "Rest of State" ,
        "value" : .13
      }
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .38
      },      
      { 
        "label" : "Metro Suburbs" ,
        "value" : .07
      },      
      { 
        "label" : "Rest of State" ,
        "value" : .15
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Hennepin/Ramsey" ,
        "value" : .57
      },      
      { 
        "label" : "Metro Suburbs" ,
        "value" : .73
      },      
      { 
        "label" : "Rest of State" ,
        "value" : .72
      }
    ]
  }
];


//GENDER
voteDataGender = [ 
      { 
        "label": "Al Franken",
        "value" : .45
      } , 
      { 
        "label": "Mike McFadden",
        "value" : .33
      } , 
      { 
        "label": "Steve Carlson",
        "value" : .01
      } , 
      { 
        "label": "Other",
        "value" : .01
      }, 
      { 
        "label": "Undecided",
        "value" : .20
      }
    ];

voteDataGender01 = [ 
      { 
        "label": "Success",
        "value" : .22
      } , 
      { 
        "label": "Failure",
        "value" : .57
      } , 
      { 
        "label": "Not Sure",
        "value" : .21
      }
    ];

voteDataGender02 = [ 
      { 
        "label": "Success",
        "value" : .43
      } , 
      { 
        "label": "Failure",
        "value" : .31
      } , 
      { 
        "label": "Not Sure",
        "value" : .26
      }
    ];

voteDataGender03 = [ 
      { 
        "label": "Support",
        "value" : 0
      } , 
      { 
        "label": "Oppose",
        "value" : 0
      } , 
      { 
        "label": "Undecided",
        "value" : 0
      }
    ];

voteDataGender04 = [ 
      { 
        "label": "Democrats",
        "value" : 0
      } , 
      { 
        "label": "Republicans",
        "value" : 0
      } , 
      { 
        "label": "Neither",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

favorableDataGender = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "Men" ,
        "value" : .48
      } , 
      { 
        "label" : "Women" ,
        "value" : .33
      } 
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "Men" ,
        "value" : .17
      } , 
      { 
        "label" : "Women" ,
        "value" : .29
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Men" ,
        "value" : .35
      } , 
      { 
        "label" : "Women" ,
        "value" : .38
      } 
    ]
  }
];

favorableDataGender2 = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "Men" ,
        "value" : .40
      } , 
      { 
        "label" : "Women" ,
        "value" : .55
      } 
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "Men" ,
        "value" : .38
      } , 
      { 
        "label" : "Women" ,
        "value" : .27
      } 
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "Men" ,
        "value" : .22
      } , 
      { 
        "label" : "Women" ,
        "value" : .18
      } 
    ]
  }
];

approvalDataGender = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "Men" ,
        "value" : .12
      },      
      { 
        "label" : "Women" ,
        "value" : .12
      }
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "Men" ,
        "value" : .12
      },      
      { 
        "label" : "Women" ,
        "value" : .27
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "Men" ,
        "value" : .76
      },      
      { 
        "label" : "Women" ,
        "value" : .61
      }
    ]
  }
];


//AGE
voteDataAge = [ 
      { 
        "label": "Democrat",
        "value" : .39
      } , 
      { 
        "label": "Republican",
        "value" : .33
      } , 
      { 
        "label": "Neither",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : .01
      }
    ];

voteDataAge01 = [ 
      { 
        "label": "Success",
        "value" : .36
      } , 
      { 
        "label": "Failure",
        "value" : .45
      } , 
      { 
        "label": "Not Sure",
        "value" : .19
      }
    ];

voteDataAge02 = [ 
      { 
        "label": "Success",
        "value" : .30
      } , 
      { 
        "label": "Failure",
        "value" : .47
      } , 
      { 
        "label": "Not Sure",
        "value" : .23
      }
    ];

voteDataAge03 = [ 
      { 
        "label": "Success",
        "value" : .33
      } , 
      { 
        "label": "Failure",
        "value" : .46
      } , 
      { 
        "label": "Not Sure",
        "value" : .21
      }
    ];

voteDataAge04 = [ 
      { 
        "label": "Success",
        "value" : .34
      } , 
      { 
        "label": "Failure",
        "value" : .42
      } , 
      { 
        "label": "Not Sure",
        "value" : .24
      }
    ];


favorableDataAge = [ 
  {
    key: 'Approve',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .29
      } , 
      { 
        "label" : "35-49" ,
        "value" : .44
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .39
      }  , 
      { 
        "label" : "65+" ,
        "value" : .44
      } 
    ]
  },
  {
    key: 'Reject',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .27
      } , 
      { 
        "label" : "35-49" ,
        "value" : .21
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .26
      }  , 
      { 
        "label" : "65+" ,
        "value" : .18
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .44
      } , 
      { 
        "label" : "35-49" ,
        "value" : .35
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .35
      }  , 
      { 
        "label" : "65+" ,
        "value" : .38
      } 
    ]
  }
];

favorableDataAge2 = [ 
  {
    key: 'Environment',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .51
      } , 
      { 
        "label" : "35-49" ,
        "value" : .51
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .47
      }  , 
      { 
        "label" : "65+" ,
        "value" : .41
      } 
    ]
  },
  {
    key: 'Jobs',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .21
      } , 
      { 
        "label" : "35-49" ,
        "value" : .37
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .31
      }  , 
      { 
        "label" : "65+" ,
        "value" : .35
      } 
    ]
  },
  {
    key: 'Equally/Not Sure',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .28
      } , 
      { 
        "label" : "35-49" ,
        "value" : .12
      }  , 
      { 
        "label" : "50-64" ,
        "value" : .22
      }  , 
      { 
        "label" : "65+" ,
        "value" : .24
      } 
    ]
  }
];

approvalDataAge = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .09
      },      
      { 
        "label" : "35-49" ,
        "value" : .13
      },      
      { 
        "label" : "50-64" ,
        "value" : .14
      },      
      { 
        "label" : "65+" ,
        "value" : .11
      }
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .21
      },      
      { 
        "label" : "35-49" ,
        "value" : .16
      },      
      { 
        "label" : "50-64" ,
        "value" : .20
      },      
      { 
        "label" : "65+" ,
        "value" : .24
      }
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "18-34" ,
        "value" : .70
      },      
      { 
        "label" : "35-49" ,
        "value" : .71
      },      
      { 
        "label" : "50-64" ,
        "value" : .66
      },      
      { 
        "label" : "65+" ,
        "value" : .65
      }
    ]
  }
];

//RACE
voteDataRace = [ 
      { 
        "label": "Democrat",
        "value" : .39
      } , 
      { 
        "label": "Republican",
        "value" : .33
      } , 
      { 
        "label": "Neither",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : .01
      }
    ];

voteDataRace01 = [ 
      { 
        "label": "Should",
        "value" : 0
      } , 
      { 
        "label": "Should Not",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

voteDataRace02 = [ 
      { 
        "label": "Should",
        "value" : 0
      } , 
      { 
        "label": "Should Not",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

voteDataRace03 = [ 
      { 
        "label": "Should",
        "value" : 0
      } , 
      { 
        "label": "Should Not",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];

voteDataRace04 = [ 
      { 
        "label": "Should",
        "value" : 0
      } , 
      { 
        "label": "Should Not",
        "value" : 0
      } , 
      { 
        "label": "Not Sure",
        "value" : 0
      }
    ];


favorableDataRace = [ 
  {
    key: 'Good',
    values: [
      { 
        "label" : "White" ,
        "value" : .51
      } , 
      { 
        "label" : "Black" ,
        "value" : .50
      } 
    ]
  },
  {
    key: 'Bad',
    values: [
      { 
        "label" : "White" ,
        "value" : .36
      } , 
      { 
        "label" : "Black" ,
        "value" : .30
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "White" ,
        "value" : .13
      } , 
      { 
        "label" : "Black" ,
        "value" : .20
      } 
    ]
  }
];

favorableDataRace2 = [ 
  {
    key: 'Better',
    values: [
      { 
        "label" : "White" ,
        "value" : .05
      } , 
      { 
        "label" : "Black" ,
        "value" : .23
      } 
    ]
  },
  {
    key: 'Worse',
    values: [
      { 
        "label" : "White" ,
        "value" : .29
      } , 
      { 
        "label" : "Black" ,
        "value" : .14
      }  
    ]
  },
  {
    key: 'Same',
    values: [
      { 
        "label" : "White" ,
        "value" : .65
      } , 
      { 
        "label" : "Black" ,
        "value" : .63
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "White" ,
        "value" : .01
      } , 
      { 
        "label" : "Black" ,
        "value" : 0
      } 
    ]
  }
];

approvalDataRace = [ 
  {
    key: 'Justified',
    values: [
      { 
        "label" : "White" ,
        "value" : .14
      } , 
      { 
        "label" : "Black" ,
        "value" : 0
      } 
    ]
  },
  {
    key: 'Not Justified',
    values: [
      { 
        "label" : "White" ,
        "value" : .17
      } , 
      { 
        "label" : "Black" ,
        "value" : .59
      } 
    ]
  },
  {
    key: 'Not Sure',
    values: [
      { 
        "label" : "White" ,
        "value" : .69
      } , 
      { 
        "label" : "Black" ,
        "value" : .41
      } 
    ]
  }
];
//var data = <?php echo $jsonData ?>
</script>