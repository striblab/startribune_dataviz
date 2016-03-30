<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>State Comparisons</title>
  <meta name="description" content="State Comparisons">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" />
  <link rel="stylesheet" href="../_common_resources/startribune_dataviz_styles.css" />

<style>
    .bar { width:28%; display:inline-block; }
    .tooltip { border:1px solid black; background-color:#fff; font-family:"Benton"; font-weight:900; padding:10px; }
    rect:hover { fill:#333 !important; }
    #wrapper { width:100%; }
</style>

</head>

<body> 

<div id="wrapper">

<div class="bar"><canvas class="chart" height="2300" width="1000" id="chart1"></canvas></div>
<div class="bar"><canvas class="chart" height="2300" width="1000" id="chart2"></canvas></div>
<div class="bar"><canvas class="chart" height="2300" width="1000" id="chart3"></canvas></div>

</div>

</body>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/ChartNew.js-master/ChartNew.js"></script>

  <script>

//CUSTOMIZABLE CHART OPTIONS
var options = {
    annotateDisplay : true,
    annotateLabel : "<%=v2+ '  ' + v3%>%",
    annotateClassName : "tooltip",
    scaleFontFamily : "'Arial'",
    scaleFontSize : 12,
    scaleFontStyle : "normal",
    scaleGridLinesStep : 1,
    scaleGridLineStyle : "solid",
    scaleGridLineWidth : 1,
    scaleLabel : "<%=value%>",
    scaleLineColor : "#fff",
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    scaleShowGridLines : false,
    showYLabels : false,
    showXLabels : true,
    showTooltips: true,
    responsive: true,
    barShowStroke: false,
    barValueSpacing : 1,
    barDatasetSpacing : 1,
    drawXScaleLine: [{position:"bottom",lineWidth:1,lineColor:"black"}],
    scaleTickSizeLeft : 0,
    scaleTickSizeBottom : 0
  }

//CHART1 - Percent disabled in integrated employment, 2013
      var barChartData1 = {
        labels : ["AR","ID","MS","NE","ND","HI","AL","IL","TX","NJ","CA","DC","MO","MT","GA","KS","MN","NY","FL","IN","IA","KY","NV","PA","SD","WY","TN","AZ","OH","WI","NC","MI","UT","VA","AK","CO","ME","DE","MA","SC","LA","NM","OR","RI","NH","VT","MD","WV","CT","OK","WA"],
        datasets : [
          {
            fillColor : ["#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#f98047","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd"],
            strokeColor : "rgba(220,220,220,0.8)",
            data : [0,0,0,0,0,2,4,6,8,11,12,12,12,12,13,13,13,13,14,15,17,18,18,18,18,18,19,21,21,21,22,23,23,24,26,27,28,29,29,29,31,33,33,33,38,38,40,41,49,62,86]
          }
        ]

      };

        var ctx1 = document.getElementById("chart1").getContext("2d");

        var chart1 = new Chart(ctx1).HorizontalBar(barChartData1, options);

//CHART2 - Percent of disabled in facility-based work
      var barChartData2 = {
        labels : ["AK","AR","CO","DC","FL","GA","ID","KY","ME","MD","MS","MO","MT","NE","NH","NM","ND","TN","UT","VT","HI","IL","TX","WV","AL","CT","VA","WA","WY","AZ","CA","NY","RI","NC","MA","NJ","DE","OR","IA","MI","LA","PA","IN","SC","NV","WI","KS","MN","OH","OK","SD"],
        datasets : [
          {
            fillColor : ["#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#f98047","#ddd","#ddd","#ddd"],
            strokeColor : "rgba(220,220,220,0.8)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,4,4,8,9,12,13,14,14,19,20,22,24,24,25,25,29,33,34,38,44,44,50,53,54,55,67]
          }
        ]

      };

        var ctx2 = document.getElementById("chart2").getContext("2d");

        var chart2 = new Chart(ctx2).HorizontalBar(barChartData2, options);
      

//CHART3 - PERCENT OF STATE EXPENDITURES FOR FACILITY-BASED EMPLOYMENT, 2013
      var barChartData3 = {
        labels : ["ID","AK","CO","DC","FL","GA","HI","KS","KY","MD","MO","MT","NH","NM","TN","TX","UT","VT","IL","AR","MS","RI","AL","WY","CT","NJ","NE","AZ","CA","WA","VA","MA","DE","OH","PA","NC","NY","IN","LA","OK","OR","MI","WI","IA","SC","NV","SD","MN","ME","ND","WV"],
        datasets : [
          {
            fillColor : ["#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#ddd","#f98047","#ddd","#ddd","#ddd"],
            strokeColor : "rgba(220,220,220,0.8)",
            data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,0.8,1,1.1,1.7,1.8,3.2,3.6,4.1,5.3,6.4,8.2,9.9,11.9,18.2,18.6,19.6,20.7,21.1,22.4,23.6,25.8,26.1,27.9,31.6,33,33.2,34.7,49.7,69.9]
          }
        ]

      };

        var ctx3 = document.getElementById("chart3").getContext("2d");

        var chart3 = new Chart(ctx3).HorizontalBar(barChartData3, options);

        // chart3.datasets[0].bars[40].fillColor = "green";
  </script>

</html>