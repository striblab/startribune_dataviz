d3.json("./data/drugsMPLS.json", function(error, dataMPLSdrugsLoad) {
d3.json("./data/drugsStCloud.json", function(error, dataSTCdrugsLoad) {
d3.json("./data/drugsFargo.json", function(error, dataFRGdrugsLoad) {
d3.json("./data/patients.json", function(error, dataPatientsLoad) {
d3.json("./data/percentage_combined.json", function(error, dataPCTLoad) {
d3.json("./data/painMPLS.json", function(error, dataMPLSpainLoad) {
d3.json("./data/painStCloud.json", function(error, dataStCloudpainLoad) {
d3.json("./data/painFargo.json", function(error, dataFRGpainLoad) {

$( document ).ready(function() {
  $("#meds").css("background-color","#333");
$( ".myButton2" ).click(function() {
  $(".myButton2").css("background-color","#d7d6c5");
  $(this).css("background-color","#333");
  });   
$( "#meds" ).click(function() {
  redrawChart(medsData, "num");
  });
$( "#patients" ).click(function() {
  redrawChart(patientData, "num");
  });
$( "#pct" ).click(function() {
  redrawChart(pctData, "percent");
  });
$( "#hospitals" ).click(function() {
  redrawChart(hospitalData, "num");
  });
$( "#prescriptions" ).click(function() {
  redrawChart(prescriptionsData, "num");
  });
$( "#mpls" ).click(function() {
  redrawChart(mplsData, "num");
  });
$( "#stc" ).click(function() {
  redrawChart(stcData, "num");
  });
$( "#fargo" ).click(function() {
  redrawChart(fargoData, "num");
  });
});

function redrawChart(data, type){
	if (type == "percent") { d3.select('#chart svg').datum(data).transition().duration(500).call(chart); }
	else { d3.select('#chart svg').datum(data).transition().duration(500).call(chart); }
    nv.utils.windowResize(chart.update);
}

var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      //.rotateLabels(45)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      //.showLegend(false)
      //.showXAxis(false)
      .stacked(true)
      .reduceXTicks(false)
      //.groupSpacing(0.1)    //Distance between each group of bars.
      .color(['#B6CAAE', '#F0EAD8', '#266E42', '#D8E1CE', '#75A27C'])
      .tooltip(function(key, x, y, e, graph) {  
      	if ((key == "St. Cloud") || (key == "Minneapolis") || (key == "Fargo")) { return "<h3>" + key + "</h3>" + "<span class='pos_change'>" +  y + " </span> in " + x; }
      	else { return "<h3>" + key + " Prescriptions</h3>" + "<span class='pos_change'>" +  y + " </span> in " + x; }
  })
      .margin({top: 30, right: 20, bottom: 50, left: 60});

    chart.yAxis
        .tickFormat(function(d) { return d3.format(',')(d) });

        chart.legend.margin({top: 5, right:0, left:0, bottom: 10});

    d3.select('#chart svg')
        .datum(medsData)
        .call(chart);

        var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
xTicks
  .selectAll('text')
  .attr('transform', function(d,i,j) { return 'translate (-10, 22) rotate(-50 0,0)' }) ;

    nv.utils.windowResize(chart.update);


    return chart;
});



var medsData = [
{
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 10478
      },
      { 
        "label" : "2002" ,
        "value" : 10768
      },
      { 
        "label" : "2003" ,
        "value" : 11988
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 13262
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 13117
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 12811
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 13044
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 13851
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 16626
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 16967
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 16960
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 16019
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 14881
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 12859
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 309
      },
      { 
        "label" : "2002" ,
        "value" : 311
      },
      { 
        "label" : "2003" ,
        "value" : 427
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 626
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 685
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 688
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 827
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 923
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1503
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1541
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1769
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1630
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1670
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1473
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 3183
      },
      { 
        "label" : "2002" ,
        "value" : 4071
      },
      { 
        "label" : "2003" ,
        "value" : 5154
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 7243
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 7810
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 8279
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 9305
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 10441
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 8958
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 11331
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 13363
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 13141
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 11209
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 10891
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 5063
      },
      { 
        "label" : "2002" ,
        "value" : 5765
      },
      { 
        "label" : "2003" ,
        "value" : 5154
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 7243
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 10388
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 10637
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 11968
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 12861
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 14568
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 14957
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 16035
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 17181
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 17374
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 14604
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 780
      },
      { 
        "label" : "2002" ,
        "value" : 806
      },
      { 
        "label" : "2003" ,
        "value" : 1222
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1511
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 2566
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 4183
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 4909
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 5457
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 5865
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 6141
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 5986
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 5344
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 4999
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 3822
      }

    ]
  }
]

var patientData = [
{
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 10.79
      },
      { 
        "label" : "2002" ,
        "value" : 10.05
      },
      { 
        "label" : "2003" ,
        "value" : 10.15
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 10.50
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 10.47
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 9.89
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 9.59
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 9.85
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 11.36
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 10.99
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 10.68
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 9.96
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 9.18
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 7.54
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 0.32
      },
      { 
        "label" : "2002" ,
        "value" : 0.29
      },
      { 
        "label" : "2003" ,
        "value" : 0.36
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 0.50
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 0.55
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 0.53
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 0.61
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 0.66
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1.03
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1.00
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1.11
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1.01
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1.03
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 0.86
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 3.28
      },
      { 
        "label" : "2002" ,
        "value" : 3.80
      },
      { 
        "label" : "2003" ,
        "value" : 4.36
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 5.73
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 6.24
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 6.39
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 6.84
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 7.42
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 6.12
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 7.34
      }     
      ,
      { 
        "label" : "2011" ,
        "value" : 8.42
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 8.17
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 6.92
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 6.39
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 5.21
      },
      { 
        "label" : "2002" ,
        "value" : 5.38
      },
      { 
        "label" : "2003" ,
        "value" : 6.18
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 7.57
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 8.29
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 8.21
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 8.80
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 9.14
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 9.95
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 9.68
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 10.10
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 10.69
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 10.72
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 8.57
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 0.80
      },
      { 
        "label" : "2002" ,
        "value" : 0.75
      },
      { 
        "label" : "2003" ,
        "value" : 1.03
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1.20
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 2.05
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 3.23
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 3.61
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 3.88
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 4.01
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 3.98
      }
       ,
      { 
        "label" : "2011" ,
        "value" : 3.77
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 3.32
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 3.09
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 2.24
      }

    ]
  } 
]

var pctData = [
{
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 2.09
      },
      { 
        "label" : "2002" ,
        "value" : 2.08
      },
      { 
        "label" : "2003" ,
        "value" : 2.35
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 2.28
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 2.10
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1.91
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1.84
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1.80
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 2.03
      }      
      ,
      { 
        "label" : "2010" ,
        "value" : 1.96
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 2.32
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1.72
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1.55
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1.47
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 0.06
      },
      { 
        "label" : "2002" ,
        "value" : 0.06
      },
      { 
        "label" : "2003" ,
        "value" : 0.08
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 0.11
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 0.11
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 0.10
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 0.12
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 0.12
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 0.18
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 0.18
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 0.24
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 0.17
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 0.17
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 0.17
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 0.64
      },
      { 
        "label" : "2002" ,
        "value" : 0.79
      },
      { 
        "label" : "2003" ,
        "value" : 1.01
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1.24
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1.25
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1.24
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1.31
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1.36
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1.09
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1.31
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1.83
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1.41
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1.17
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1.24
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 1.01
      },
      { 
        "label" : "2002" ,
        "value" : 1.11
      },
      { 
        "label" : "2003" ,
        "value" : 1.43
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1.64
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1.66
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1.59
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1.69
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1.67
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1.78
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1.72
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 2.19
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1.84
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1.81
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1.67
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 0.16
      },
      { 
        "label" : "2002" ,
        "value" : 0.16
      },
      { 
        "label" : "2003" ,
        "value" : 0.24
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 0.26
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 0.41
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 0.62
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 0.69
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 0.71
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 0.72
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 0.71
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 0.82
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 0.57
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 0.52
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 0.44
      }

    ]
  } 
]

var hospitalData = [
  {
    "key": "Minneapolis",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 57679
      },
      { 
        "label" : "2002" ,
        "value" : 63028
      },
      { 
        "label" : "2003" ,
        "value" : 67189
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 71835
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 69566
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 72262
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 76934
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 79281
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 82481
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 82481
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 86768
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 91007
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 93073
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 100000
      }

    ]
  },
      {
    "key": "Fargo",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 21894
      },
      { 
        "label" : "2002" ,
        "value" : 23607
      },
      { 
        "label" : "2003" ,
        "value" : 26042
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 26268
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 27061
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 27031
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 27663
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 28984
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 29921
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 31112
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 31335
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 31575
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 32012
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 32678
      }

    ]
  },
    {
    "key": "St. Cloud",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 17525
      },
      { 
        "label" : "2002" ,
        "value" : 20493
      },
      { 
        "label" : "2003" ,
        "value" : 24857
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 28195
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 28610
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 30210
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 31375
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 32382
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 33958
      } 
      ,
      { 
        "label" : "2010" ,
        "value" : 37027
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 37027
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 38178
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 36949
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 37773
      }

    ]
  }
]

var prescriptionsData = [
  {
    "key": "Minneapolis",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 14646
      },
      { 
        "label" : "2002" ,
        "value" : 15170
      },
      { 
        "label" : "2003" ,
        "value" : 18209
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 22791
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 24117
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 26157
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 29194
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 32089
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 34802
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 37077
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 39491
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 38282
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 35317
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 30031
      }

    ]
  },
      {
    "key": "Fargo",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 3749
      },
      { 
        "label" : "2002" ,
        "value" : 4949
      },
      { 
        "label" : "2003" ,
        "value" : 5610
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 6480
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 6737
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 6589
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 6615
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 6686
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 7641
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 8545
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 8971
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 8995
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 8906
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 8319
      }

    ]
  },
    {
    "key": "St. Cloud",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 1418
      },
      { 
        "label" : "2002" ,
        "value" : 1602
      },
      { 
        "label" : "2003" ,
        "value" : 2275
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 2926
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 3712
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 3852
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 4244
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 4758
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 5077
      } 
      ,
      { 
        "label" : "2010" ,
        "value" : 5315
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 5615
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 6038
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 5910
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 5289
      }

    ]
  }
]

//hospital data
var mplsData = [
  {
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 7645
      },
      { 
        "label" : "2002" ,
        "value" : 7562
      },
      { 
        "label" : "2003" ,
        "value" : 8344
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 9103
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 8854
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 9040
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 9441
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 10147
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 12526
      }      
      ,
      { 
        "label" : "2010" ,
        "value" : 12837
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 13027
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 12112
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 11089
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 9352
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 275
      },
      { 
        "label" : "2002" ,
        "value" : 263
      },
      { 
        "label" : "2003" ,
        "value" : 377
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 539
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 580
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 554
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 632
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 700
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1283
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1321
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1394
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1257
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1182
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1043
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 1952
      },
      { 
        "label" : "2002" ,
        "value" : 2070
      },
      { 
        "label" : "2003" ,
        "value" : 2969
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 4987
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 5535
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 6570
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 7759
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 8736
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 7066
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 8908
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 10521
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 9937
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 8067
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 8067
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 4021
      },
      { 
        "label" : "2002" ,
        "value" : 4569
      },
      { 
        "label" : "2003" ,
        "value" : 5553
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 6984
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 7356
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 7360
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 8256
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 8979
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 10218
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 10328
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 11097
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 11909
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 12125
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 9858
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 753
      },
      { 
        "label" : "2002" ,
        "value" : 706
      },
      { 
        "label" : "2003" ,
        "value" : 966
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1178
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1792
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 2633
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 3106
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 3527
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 3709
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 3683
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 3452
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 3067
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 2854
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1901
      }

    ]
  } 
]

var stcData = [
  {
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 881
      },
      { 
        "label" : "2002" ,
        "value" : 915
      },
      { 
        "label" : "2003" ,
        "value" : 1123
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1365
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1569
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1461
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1548
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1851
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1992
      }      
      ,
      { 
        "label" : "2010" ,
        "value" : 2040
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1985
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 2188
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 2092
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1959
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 2
      },
      { 
        "label" : "2002" ,
        "value" : 5
      },
      { 
        "label" : "2003" ,
        "value" : 12
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 32
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 29
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 52
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 72
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 89
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 97
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 74
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 93
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 101
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 162
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 162
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 236
      },
      { 
        "label" : "2002" ,
        "value" : 288
      },
      { 
        "label" : "2003" ,
        "value" : 334
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 373
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 525
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 615
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 606
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 693
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 824
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1042
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1246
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1316
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1231
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1126
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 279
      },
      { 
        "label" : "2002" ,
        "value" : 371
      },
      { 
        "label" : "2003" ,
        "value" : 719
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1031
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1282
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1272
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1495
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1495
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1558
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1598
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1693
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1863
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1930
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1674
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 20
      },
      { 
        "label" : "2002" ,
        "value" : 23
      },
      { 
        "label" : "2003" ,
        "value" : 87
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 125
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 307
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 452
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 523
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 630
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 606
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 561
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 634
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 570
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 496
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 426
      }

    ]
  } 
]

var fargoData = [
  {
    "key": "Acetaminophen",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 1952
      },
      { 
        "label" : "2002" ,
        "value" : 2291
      },
      { 
        "label" : "2003" ,
        "value" : 2521
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 2794
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 2694
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 2310
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 2055
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1853
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 2108
      }      
      ,
      { 
        "label" : "2010" ,
        "value" : 2090
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1948
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1719
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1700
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1548
      }

    ]
  },
  {
    "key": "Hydromorphone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 32
      },
      { 
        "label" : "2002" ,
        "value" : 43
      },
      { 
        "label" : "2003" ,
        "value" : 38
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 55
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 76
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 82
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 123
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 134
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 123
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 146
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 282
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 272
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 326
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 316
      }

    ]
  },
      {
    "key": "Oxycodone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 995
      },
      { 
        "label" : "2002" ,
        "value" : 1713
      },
      { 
        "label" : "2003" ,
        "value" : 1851
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1883
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1750
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1094
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 940
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 1012
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 1068
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 1381
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 1596
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 1888
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 1911
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 1888
      }

    ]
  },
    {
    "key": "Morphine",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 763
      },
      { 
        "label" : "2002" ,
        "value" : 825
      },
      { 
        "label" : "2003" ,
        "value" : 1031
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 1540
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 1750
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 2005
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 2217
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 2387
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 2792
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 3031
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 3245
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 3409
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 3319
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 3072
      }

    ]
  },
    {
    "key": "Methadone",
    "values": [
          { 
        "label" : "2001" ,
        "value" : 7
      },
      { 
        "label" : "2002" ,
        "value" : 77
      },
      { 
        "label" : "2003" ,
        "value" : 169
      }
      ,
      { 
        "label" : "2004" ,
        "value" : 208
      }
      ,
      { 
        "label" : "2005" ,
        "value" : 467
      }
      ,
      { 
        "label" : "2006" ,
        "value" : 1098
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 1280
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 2387
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 2792
      }
      ,      
      { 
        "label" : "2010" ,
        "value" : 3031
      }
      ,
      { 
        "label" : "2011" ,
        "value" :3245
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 3409
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 3319
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 3072
      }

    ]
  } 
]
});
});
});
});
});
});
});
});