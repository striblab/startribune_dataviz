d3.json("./data/scores.json", function(error, dataLoad) {

  $(document).ready(function(){
      $('#stuff').dataTable({"iDisplayLength": 9, "oLanguage": {"sSearch": ""}, "scrollY": "425px", "scrollCollapse": true, "paging": false, columnDefs: [{ type: 'formatted-num', targets: 2 }]});

  });

var school = "Academia Cesar Chavez";
var metric = "./data/mmr.json";

$( document ).ready(function() {
    $("#chart").hide();
    $("#overview").show();
    $(".start-cell").addClass("clickified");
$( "#mmr" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(this).css("background-color","#333");
    metric = "data/mmr.json";
    redrawGraph(school, metric);
    $("#chart").show();
    $("#overview").hide();
});
$( "#math" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(this).css("background-color","#333");
    metric = "data/math.json";
    redrawGraph(school, metric);
    $("#chart").show();
    $("#overview").hide();
});
$( "#reading" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(this).css("background-color","#333");
    metric = "data/reading.json";
    redrawGraph(school, metric);
    $("#chart").show();
    $("#overview").hide();
});
$( "#demos" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(this).css("background-color","#333");
    metric = "data/demos.json";
    redrawGraph(school, metric);
    $("#chart").show();
    $("#overview").hide();
});
$( "td.School-cell" ).click(function() {
    $("td.School-cell").removeClass("clickified");
    $(this).addClass("clickified");
    school = $(this).text();
    redrawGraph(school, metric);
    $("#chart").show();
    $("#overview").hide();
});
$( "#overview_link" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $("#chart").hide();
    $("#overview").show();
});

});


var chart;
d3.json("data/reading.json",function(data) {
nv.addGraph(function() {
var width = 960, height = 450;
    chart = nv.models.multiBarChart()
      .transitionDuration(350)
      //.y(function(d) { if (d.SchoolShort == school) { return d.value } }).x(function(d) { if (d.SchoolShort == school) { return d.SchoolShort } })
      .x(function(d) { return d.SchoolShort })
      .y(function(d) { return d.value })
      .reduceXTicks(false)
      .showControls(false)
      .groupSpacing(0.1)
      .showLegend(true)
      .stacked(false)
      .tooltip(function(key, x, y, e, graph) {
            var d = e.series.values[e.pointIndex]; 
            if (key == "Local District"){var namez=d.CompareShortName;}else{var namez=d.SchoolShort;}
            if (metric == "data/math.json"){var name_type="Math Score";}
            else if (metric == "data/reading.json"){var name_type="Reading Score";}
            else if ((metric == "data/mmr.json") && (key == "MMR")){var name_type="2014 MMR Score";}
            else if ((metric == "data/mmr.json") && (key == "Graduation")){var name_type="2014 Graduation Rate";}
            else if ((metric == "data/mmr.json") && (key == "Growth")){var name_type="2014 Growth Rate";}
            else if ((metric == "data/mmr.json") && (key == "Gap Reduction")){var name_type="2014 Gap Reduction Rate";}
            else if ((metric == "data/mmr.json") && (key == "Proficiency")){var name_type="2014 Proficiency Rating";}
            else if ((metric == "data/demos.json") && (key == "Poverty")){var name_type="Students in Poverty";}
            else if ((metric == "data/demos.json") && (key == "ESL")){var name_type="Students with English as Second Language";}
            else if ((metric == "data/demos.json") && (key == "Minorities")){var name_type="Minority Students";}
            else if ((metric == "data/demos.json") && (key == "From Local")){var name_type="Students from Local District";}


	if ((metric == "data/mmr.json") && (key == "Graduation") && (y != null) && (y != 0)){return "<h3>" + namez + "</h3>" + "<p class='cat'>" + name_type + "</p><p class='num'>" + y + "%</p>" + "<hr><p class='cat'>2013 Graduation Rate</p><p class='num'>" + d.grad13 + "%</p>" + "<hr><p class='cat'>2012 Graduation Rate</p><p class='num'>" + d.grad12 + "%</p>" + "<hr><p class='cat'>2011 Graduation Rate</p><p class='num'>" + d.grad11 + "%</p>";}
	else if ((metric == "data/mmr.json") && (key == "Growth") && (y != null) && (y != 0)){return "<h3>" + namez + "</h3>" + "<p class='cat'>" + name_type + "</p><p class='num'>" + y + "%</p>" + "<hr><p class='cat'>2013 Growth Rate</p><p class='num'>" + d.growth13 + "%</p>" + "<hr><p class='cat'>2012 Growth Rate</p><p class='num'>" + d.growth12 + "%</p>" + "<hr><p class='cat'>2011 Growth Rate</p><p class='num'>" + d.growth11 + "%</p>";}
        else if ((metric == "data/mmr.json") && (key == "Gap Reduction") && (y != null) && (y != 0)){return "<h3>" + namez + "</h3>" + "<p class='cat'>" + name_type + "</p><p class='num'>" + y + "%</p>" + "<hr><p class='cat'>2013 Gap Reduction Rate</p><p class='num'>" + d.gap13 + "%</p>" + "<hr><p class='cat'>2012 Gap Reduction Rate</p><p class='num'>" + d.gap12 + "%</p>" + "<hr><p class='cat'>2011 Gap Reduction Rate</p><p class='num'>" + d.gap11 + "%</p>";}
        else if ((metric == "data/mmr.json") && (key == "Proficiency") && (y != null) && (y != 0)){return "<h3>" + namez + "</h3>" + "<p class='cat'>" + name_type + "</p><p class='num'>" + y + "%</p>" + "<hr><p class='cat'>2013 Proficiency Rating</p><p class='num'>" + d.gap13 + "%</p>" + "<hr><p class='cat'>2012 Proficiency Rating</p><p class='num'>" + d.gap12 + "%</p>" + "<hr><p class='cat'>2011 Proficiency Rating</p><p class='num'>" + d.gap11 + "%</p>";}
	else {
    return "<h3>" + namez + "</h3>" +
           "<p class='cat'>" + name_type + "</p><p class='num'>" + y + "%</p>";
	}
        })
      .color(['#97D38D', '#0A4600', '#3C8D2F', '#1E6912', '#64B058']);
//      .width(width-40).height(height-40);
     
    chart.yAxis
        .tickFormat(d3.format(',.1f'));

   // chart.xAxis.rotateLabels(45);

     chart.forceY([0, 100]);

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

nv.utils.windowResize(chart.update);

    return chart;
});

});

 var chart2;
nv.addGraph(function() {
var width = 960, height = 400;
  chart2 = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(false)
    .tooltips(false)
    .color(['#97D38D', '#0A4600'])
    .showValues(true);
    // .width(width-40).height(height-70);

    chart2.valueFormat(d3.format('d'));

    chart2.yAxis
        .tickFormat(d3.format(','));

       if (($(window).width() < 600  )) { chart2.xAxis.rotateLabels(-45); }

  d3.select('#chart2 svg')
    .datum(overview_data)
    .transition().duration(500)
    .call(chart2)
    ;

  nv.utils.windowResize(chart2.update);

  return chart2;
});

var overview_data = [
  {
    key: "Higher Scores",
    values: [
      { 
        "label" : "Charter outperforming - Math" ,
        "value" : 58
      } , 
      { 
        "label" : "District outperforming - Math" , 
        "value" : 63
      }, 
      { 
        "label" : "Charter outperforming - Reading" , 
        "value" : 52
      } , 
      { 
        "label" : "District outperforming - Reading" , 
        "value" : 72
      }
    ]
  }
]



redrawGraph = function(school,metric) {
d3.json(metric,function(data) {
    d3.select('#chart svg').datum(data).transition().duration(300).call(chart.y(function(d) { if (d.SchoolShort == school) { return d.value } }).x(function(d) { if (d.SchoolShort == school) { return d.SchoolShort } }));
    nv.utils.windowResize(chart.update);
});
}

});