d3.json("./data/golfRevenue.json", function(error, dataGolfLoad) {
d3.json("./data/skiRevenue.json", function(error, dataSkiLoad) {
d3.json("./data/foodRevenue.json", function(error, dataFoodLoad) {
d3.json("./data/totalRevenue.json", function(error, dataTotalLoad) {

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
      .color(['#4eca74', '#de2d26'])
      .tooltip(function(key, x, y, e, graph) {  return "<h3>" + key + " " + x + "</h3>" + "<span class='pos_change'>" +  y + "</span>"; })
      .margin({top: 30, right: 20, bottom: 50, left: 85});

    chart.yAxis
        .tickFormat(function(d) { return "$" + d3.format(',')(d) });

    d3.select('#chart svg')
        .datum(revenueData)
        .call(chart);

        var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
xTicks
  .selectAll('text')
  .attr('transform', function(d,i,j) { return 'translate (-10, 22) rotate(-50 0,0)' }) ;

    nv.utils.windowResize(chart.update);


    return chart;
});


var revenueData = [
  {
    "key": "Revenue",
    "values": [
          { 
        "label" : "2004" ,
        "value" : 5621900
      },
      { 
        "label" : "2005" ,
        "value" : 4988255
      },
      { 
        "label" : "2006" ,
        "value" : 4635224
      }
      ,
      { 
        "label" : "2007" ,
        "value" : 4070365
      }
      ,
      { 
        "label" : "2008" ,
        "value" : 4220762
      }
      ,
      { 
        "label" : "2009" ,
        "value" : 4115989
      }
      ,
      { 
        "label" : "2010" ,
        "value" : 4057334
      }
      ,
      { 
        "label" : "2011" ,
        "value" : 3833900
      }
      ,
      { 
        "label" : "2012" ,
        "value" : 3858230
      }
      ,
      { 
        "label" : "2013" ,
        "value" : 4469293
      }
      ,
      { 
        "label" : "2014" ,
        "value" : 4198547
      }

    ]
  },
    {
    "key": "Expenses",
    "values": [
          { 
        "label" : "2004" ,
        "value" : -4879940
      },
      { 
        "label" : "2005" ,
        "value" : -5741211
      },
      { 
        "label" : "2006" ,
        "value" : -6911566
      }
      ,
      { 
        "label" : "2007" ,
        "value" : -6949718
      }
      ,
      { 
        "label" : "2008" ,
        "value" : -7365629
      }
      ,
      { 
        "label" : "2009" ,
        "value" : -9022966
      }
      ,
      { 
        "label" : "2010" ,
        "value" : -8154480
      }
      ,
      { 
        "label" : "2011" ,
        "value" : -16545433
      }
      ,
      { 
        "label" : "2012" ,
        "value" : -6476591
      }
      ,
      { 
        "label" : "2013" ,
        "value" : -7139939
      }
      ,
      { 
        "label" : "2014" ,
        "value" : -8503626
      }

    ]
  }
]

});
});
});
});