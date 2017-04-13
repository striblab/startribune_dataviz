(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/rixmannLobby.json", function(error, dataLobby) {
d3.json("./data/paydayLoans.json", function(error, dataLoans) {
d3.json("./data/paydayAvg.json", function(error, dataAvg) {
d3.json("./data/paydayRegion.json", function(error, dataRegion) {

//TIMELINE SLIDERS
var slider = d3.slider().axis(true);

if ($(window).width() < 450){
var tickLength = 7;
}
else { 
var tickLength = 13; 
}

d3.select('#slider').call(slider.min(2002).max(2014).value(2014).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(tickLength)).step(1).on("slide", function(evt, value) {
  $("#yearChatter").html(yearChatter[value]);
  dataCrunch(value);
  slider2.value(value);
  donationTable.search(value).draw();
  $( "td" ).each(function( ) {
  if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
  if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
});
  $( "span" ).each(function( ) {
  if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
  if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
});
  }));


var slider2 = d3.slider().axis(true);

  d3.select('#slider2').call(slider2.min(2002).max(2014).value(2014).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(tickLength)).step(1).on("slide", function(evt, value) {
    dataCrunch(value);
    slider.value(value);
    donationTable.search(value).draw();
      $( "td" ).each(function( ) {
   if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
   if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
 });
   $( "span" ).each(function( ) {
   if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
   if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
 });
    }));

 $(document).ready(function() {
            donationTable = $('#donations').DataTable( {
              responsive: {
        details: {
            type: 'row'
        }
    },
                "bServerSide":false,
                "bProcessing":true,
                "scrollY":        "300px",
                "scrollCollapse": false,
                "paging":         false,
                "sAjaxDataProp": "feed.entry",
                "oLanguage": {"sSearch": ""},
                "sAjaxSource": "https://spreadsheets.google.com/feeds/list/18hUwmsYrcVGJkFM7dGYNyfUzvCX6QBk0HkWIZnLF_d4/od6/public/values?&alt=json",
                "aoColumns": [
            null,
            { "fnRender": function ( oObj ) {
                return oObj.aData[0] +' '+ "hPa";
            } }
        ],
                "aoColumns": [                 
                    { "mDataProp": "gsx$date.$t" },
                    { "mDataProp": "gsx$recipientcommittee.$t" },
                    { "mDataProp": "gsx$party.$t" },
                    { "mDataProp": "gsx$amount.$t" },
                            ],
               "fnDrawCallback": function( oSettings ) {
        $( "td" ).each(function( ) {
  if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
  if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
});
  $( "span" ).each(function( ) {
  if ($( this ).text() == 'R'){ $( this ).addClass('gopSwatch'); }
  if ($( this ).text() == 'DFL'){ $( this ).addClass('dflSwatch'); }
});
    }

            } );

  //INITIALIZE TO 2014

slider.value(2014);
dataCrunch("2014");
$("#yearChatter").html(yearChatter[2014]);
        } );

//YEARLY CHATTER
yearChatter = [];
yearChatter[2002] = 'No data';
yearChatter[2003] = 'No data';
yearChatter[2004] = 'No data';
yearChatter[2005] = 'No data';
yearChatter[2006] = '<span class="pdaSwatch">Brad Rixmann</span> was a registered lobbyist for the Minnesota Pawnbrokers Association from Dec. 2005 to Sept. 2008.';
yearChatter[2007] = '<span class="pdaSwatch">Brad Rixmann</span> was a registered lobbyist for the Minnesota Pawnbrokers Association from Dec. 2005 to Sept. 2008.';
yearChatter[2008] = '<span class="pdaSwatch">Brad Rixmann</span> was a registered lobbyist for the Minnesota Pawnbrokers Association from Dec. 2005 to Sept. 2008.';
yearChatter[2009] = 'In 2009, <span class="dflSwatch">Sen. Chuck Wiger, DFL-Maplewood</span>, <a href="https://www.revisor.mn.gov/bills/bill.php?b=Senate&f=SF0628&ssn=0&y=2009" target="new_">sponsored a payday lending reform bill</a>. There was no House companion to this bill.';
yearChatter[2010] = 'In 2010, <span class="dflSwatch">Rep. Jim Davnie, DFL-Minneapolis</span>, <a href="https://www.revisor.mn.gov/bills/bill.php?b=House&f=HF3170&ssn=0&y=2010" target="new_">sponsored a payday lending reform bill</a>. There was no Senate companion to this bill.';
yearChatter[2011] = 'In 2011, the Minnesota attorney general <a href="http://www.startribune.com/minnesota-sues-payday-lenders/129304698/" target="_new">sued <span class="paydaySwatch">five online payday lenders</span></a>.';
yearChatter[2012] = 'In 2012, an online payday lender agreed to stop lending in Minnesota and <a href="http://www.startribune.com/payday-lender-settles-with-state/184141051/" target="new_">pay about <span class="paydaySwatch">$760,000</span> in damages to more than 900 Minnesotans who were charged interest rates as high as <span class="paydaySwatch">1,564 percent</span></a>.';
yearChatter[2013] = 'In 2013, <a href="http://www.startribune.com/minnesota-judge-orders-online-payday-lender-to-pay-nearly-8-million/209750911/" target="new_">a Minnesota judge ordered an online payday lender to pay nearly <span class="paydaySwatch">$8 million</span></a> for operating without a license.';
yearChatter[2014] = 'In 2014, <span class="dflSwatch">Rep. Joe Atkins, DFL-South St. Paul</span>, and <span class="dflSwatch">Sen. Jeff Hayden, DFL-Minneapolis</span>, <a href="https://www.revisor.mn.gov/bills/bill.php?b=House&f=HF2293&ssn=0&y=2014" target="new_">sponsored a payday lending reform bill</a>, which was defeated. That year, <span class="pdaSwatch">Brad and Melanie Rixmann</span> were the third largest non-lobbyist contributors to the <span class="dflSwatch">DFL Senate Caucus</span>. <span class="pdaSwatch">Brad Rixmann</span> also contributed to the <span class="gopSwatch">Minnesota House Republican Campaign Committee</span> and the <span class="gopSwatch">Senate Victory Fund</span>.';


//CRUNCH NUMBERS
function dataCrunch(year) {

  $("#gopBar").height("0");
  $("#dflBar").height("0");

  $(".thisYear").html(year);
  d3.selectAll("text").style("font-weight","normal");
  var selectionYear = d3.selectAll("text").each(function(d) { 
    if (d3.select(this).html() == year) { 
    d3.select(this).style("font-weight","900");
  } 
  });

//POLITICAL CONTRIBUTIONS
    var gopTotal = 0;
    var dflTotal = 0;
  var gopDonations = 0;
  var dflDonations = 0;
  var gopPct = 0;
  var dflPct = 0;
  var gopListing = [];
  var dflListing = [];
  var gopTotalPct = 0;
  var dflTotalPct = 0;

    for (var i=0; i < dataLobby.rixmannLobby.length; i++){
        if (dataLobby.rixmannLobby[i].year == year && dataLobby.rixmannLobby[i].party == "R") { gopDonations++; gopTotal = gopTotal + dataLobby.rixmannLobby[i].amount; }
        else if (dataLobby.rixmannLobby[i].year == year && dataLobby.rixmannLobby[i].party == "DFL") { dflDonations++; dflTotal = dflTotal + dataLobby.rixmannLobby[i].amount; }
    }

  var gopLoad = document.getElementById('gopTotal');
  var dflLoad = document.getElementById('dflTotal');
  var totalLoad = document.getElementById('total');
  gopLoad.innerHTML = d3.format('$,')(d3.round(gopTotal));
  dflLoad.innerHTML = d3.format('$,')(d3.round(dflTotal));
  totalLoad.innerHTML = d3.format('$,')(d3.round(dflTotal) + d3.round(gopTotal));
  gopPct = (gopTotal / (dflTotal + gopTotal));
  dflPct = (dflTotal / (dflTotal + gopTotal));
  if (!isNaN(gopPct) || !isNaN(dflPct)){
  $("#gopPct").html(d3.format('%')(gopPct));
  $("#dflPct").html(d3.format('%')(dflPct));
  }
  else {
  $("#gopPct").html("0%");
  $("#dflPct").html("0%");
  }
  $("#gopContributions").html(gopDonations);
  $("#dflContributions").html(dflDonations);
  // $("#gopTotalPct").html(d3.round((100 * gopDonations / (gopDonations + dflDonations)),1));
  // $("#dflTotalPct").html(d3.round((100 * dflDonations / (gopDonations + dflDonations)),1));
  $("#gopBar").height((350 * gopPct) + "px");
  $("#dflBar").height((350 * dflPct) + "px");

//LOAN AVERAGES
  var avg = 0;
  var pda_avg = 0;

    for (var i=0; i < dataAvg.paydayAvg.length; i++){
     if (dataAvg.paydayAvg[i].year == year) { 
      avg = dataAvg.paydayAvg[i].all_lenders_avg; 
      pda_avg = dataAvg.paydayAvg[i].payday_avg_loan; 
    }
  }

  $("#loanAvg").html("$" + avg);
  $("#pdaAvg").html("$" + pda_avg);

//LOAN TOTALS
  var loanTotal = 0;
  var pdaTotal = 0;

  for (var i=0; i < dataLoans.paydayLoans.length; i++){
    if (dataLoans.paydayLoans[i].year == year) { 
    loanTotal = dataLoans.paydayLoans[i].all_lenders_loans; 
    pdaTotal = dataLoans.paydayLoans[i].payday_loans; 
    }
  }

  $("#loanTotal").html(d3.format(',')(loanTotal));
  $("#pdaPct").html(d3.round(100 * (pdaTotal / loanTotal),0));
}

//LOAN TOTAL GRAPH
var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      // .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .stacked(false)
      .color(['#D09361','#4DA64D'])
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(''));

    chart.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart svg')
        .datum(paydayLoanData())
        .call(chart);

  var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
  xTicks
  .selectAll('text')
  .attr('transform', function(d,i,j) { return 'translate (-10, 22) rotate(-50 0,0)' }) ;

  d3.selectAll("text").each(function(d) { 
    if (d3.select(this).html() == "2014") { 
    d3.select(this).style("font-weight","900");
  } 
  });

    nv.utils.windowResize(chart.update);

    return chart;
});

//Generate some nice data.
function paydayLoanData() {
    return [
  {
    "key": "Total Payday Loans",
    "values": [
       { 
        "label" : "2000" ,
        "value" : Number(dataLoans.paydayLoans[0].all_lenders_loans)
      },
      {
        "label" : "2001" ,
        "value" : Number(dataLoans.paydayLoans[1].all_lenders_loans)
      },
      { 
        "label" : "2002" ,
        "value" : Number(dataLoans.paydayLoans[2].all_lenders_loans)
      },
      { 
        "label" : "2003" ,
        "value" : Number(dataLoans.paydayLoans[3].all_lenders_loans)
      }
      ,
      { 
        "label" : "2004" ,
        "value" : Number(dataLoans.paydayLoans[4].all_lenders_loans)
      }
      ,
      { 
        "label" : "2005" ,
        "value" : Number(dataLoans.paydayLoans[5].all_lenders_loans)
      }
      ,
      { 
        "label" : "2006" ,
        "value" : Number(dataLoans.paydayLoans[6].all_lenders_loans)
      }
      ,
      { 
        "label" : "2007" ,
        "value" : Number(dataLoans.paydayLoans[7].all_lenders_loans)
      }
      ,
      { 
        "label" : "2008" ,
        "value" : Number(dataLoans.paydayLoans[8].all_lenders_loans)
      }
      ,
      { 
        "label" : "2009" ,
        "value" : Number(dataLoans.paydayLoans[9].all_lenders_loans)
      }
      ,
      { 
        "label" : "2010" ,
        "value" : Number(dataLoans.paydayLoans[10].all_lenders_loans)
      }
      ,
      { 
        "label" : "2011" ,
        "value" : Number(dataLoans.paydayLoans[11].all_lenders_loans)
      }
      ,
      { 
        "label" : "2012" ,
        "value" : Number(dataLoans.paydayLoans[12].all_lenders_loans)
      }
      ,
      { 
        "label" : "2013" ,
        "value" : Number(dataLoans.paydayLoans[13].all_lenders_loans)
      }
      ,
      { 
        "label" : "2014" ,
        "value" : Number(dataLoans.paydayLoans[14].all_lenders_loans)
      }
    ]
  },
  {
    "key": "Payday America Loans",
    "values": [
       { 
        "label" : "2000" ,
        "value" : Number(dataLoans.paydayLoans[0].payday_loans)
      },
      {
        "label" : "2001" ,
        "value" : Number(dataLoans.paydayLoans[1].payday_loans)
      },
      { 
        "label" : "2002" ,
        "value" : Number(dataLoans.paydayLoans[2].payday_loans)
      },
      { 
        "label" : "2003" ,
        "value" : Number(dataLoans.paydayLoans[3].payday_loans)
      }
      ,
      { 
        "label" : "2004" ,
        "value" : Number(dataLoans.paydayLoans[4].payday_loans)
      }
      ,
      { 
        "label" : "2005" ,
        "value" : Number(dataLoans.paydayLoans[5].payday_loans)
      }
      ,
      { 
        "label" : "2006" ,
        "value" : Number(dataLoans.paydayLoans[6].payday_loans)
      }
      ,
      { 
        "label" : "2007" ,
        "value" : Number(dataLoans.paydayLoans[7].payday_loans)
      }
      ,
      { 
        "label" : "2008" ,
        "value" : Number(dataLoans.paydayLoans[8].payday_loans)
      }
      ,
      { 
        "label" : "2009" ,
        "value" : Number(dataLoans.paydayLoans[9].payday_loans)
      }
      ,
      { 
        "label" : "2010" ,
        "value" : Number(dataLoans.paydayLoans[10].payday_loans)
      }
      ,
      { 
        "label" : "2011" ,
        "value" : Number(dataLoans.paydayLoans[11].payday_loans)
      }
      ,
      { 
        "label" : "2012" ,
        "value" : Number(dataLoans.paydayLoans[12].payday_loans)
      }
      ,
      { 
        "label" : "2013" ,
        "value" : Number(dataLoans.paydayLoans[13].payday_loans)
      }
      ,
      { 
        "label" : "2014" ,
        "value" : Number(dataLoans.paydayLoans[14].payday_loans)
      }
    ]
  }
]
    };

//TIMELINE GRAPH
var chart2;
nv.addGraph(function() {
    chart2 = nv.models.multiBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      // .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .stacked(false)
      .color(['#D09361','#4DA64D'])
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart2.xAxis
        .tickFormat(d3.format(''));

    chart2.yAxis
        .tickFormat(d3.format('$'));

    d3.select('#chart2 svg')
        .datum(paydayAvgData())
        .call(chart2);

  var xTicks = d3.selectAll('.nv-x.nv-axis > g').selectAll('g');
  xTicks
  .selectAll('text')
  .attr('transform', function(d,i,j) { return 'translate (-10, 22) rotate(-50 0,0)' }) ;

  d3.selectAll("text").each(function(d) { 
    if (d3.select(this).html() == "2014") { 
    d3.select(this).style("font-weight","900");
  } 
  });

    nv.utils.windowResize(chart2.update);

    return chart2;
});

function paydayAvgData() {
    return [
    {
    "key": "Average Payday Loan",
    "values": [
       { 
        "label" : "2000" ,
        "value" : Number(dataAvg.paydayAvg[0].all_lenders_avg)
      },
      {
        "label" : "2001" ,
        "value" : Number(dataAvg.paydayAvg[1].all_lenders_avg)
      },
      { 
        "label" : "2002" ,
        "value" : Number(dataAvg.paydayAvg[2].all_lenders_avg)
      },
      { 
        "label" : "2003" ,
        "value" : Number(dataAvg.paydayAvg[3].all_lenders_avg)
      }
      ,
      { 
        "label" : "2004" ,
        "value" : Number(dataAvg.paydayAvg[4].all_lenders_avg)
      }
      ,
      { 
        "label" : "2005" ,
        "value" : Number(dataAvg.paydayAvg[5].all_lenders_avg)
      }
      ,
      { 
        "label" : "2006" ,
        "value" : Number(dataAvg.paydayAvg[6].all_lenders_avg)
      }
      ,
      { 
        "label" : "2007" ,
        "value" : Number(dataAvg.paydayAvg[7].all_lenders_avg)
      }
      ,
      { 
        "label" : "2008" ,
        "value" : Number(dataAvg.paydayAvg[8].all_lenders_avg)
      }
      ,
      { 
        "label" : "2009" ,
        "value" : Number(dataAvg.paydayAvg[9].all_lenders_avg)
      }
      ,
      { 
        "label" : "2010" ,
        "value" : Number(dataAvg.paydayAvg[10].all_lenders_avg)
      }
      ,
      { 
        "label" : "2011" ,
        "value" : Number(dataAvg.paydayAvg[11].all_lenders_avg)
      }
      ,
      { 
        "label" : "2012" ,
        "value" : Number(dataAvg.paydayAvg[12].all_lenders_avg)
      }
      ,
      { 
        "label" : "2013" ,
        "value" : Number(dataAvg.paydayAvg[13].all_lenders_avg)
      }
      ,
      { 
        "label" : "2014" ,
        "value" : Number(dataAvg.paydayAvg[14].all_lenders_avg)
      }
    ]
  },
  {
    "key": "Payday America Average Loan",
    "values": [
       { 
        "label" : "2000" ,
        "value" : Number(dataAvg.paydayAvg[0].payday_avg_loan)
      },
      {
        "label" : "2001" ,
        "value" : Number(dataAvg.paydayAvg[1].payday_avg_loan)
      },
      { 
        "label" : "2002" ,
        "value" : Number(dataAvg.paydayAvg[2].payday_avg_loan)
      },
      { 
        "label" : "2003" ,
        "value" : Number(dataAvg.paydayAvg[3].payday_avg_loan)
      }
      ,
      { 
        "label" : "2004" ,
        "value" : Number(dataAvg.paydayAvg[4].payday_avg_loan)
      }
      ,
      { 
        "label" : "2005" ,
        "value" : Number(dataAvg.paydayAvg[5].payday_avg_loan)
      }
      ,
      { 
        "label" : "2006" ,
        "value" : Number(dataAvg.paydayAvg[6].payday_avg_loan)
      }
      ,
      { 
        "label" : "2007" ,
        "value" : Number(dataAvg.paydayAvg[7].payday_avg_loan)
      }
      ,
      { 
        "label" : "2008" ,
        "value" : Number(dataAvg.paydayAvg[8].payday_avg_loan)
      }
      ,
      { 
        "label" : "2009" ,
        "value" : Number(dataAvg.paydayAvg[9].payday_avg_loan)
      }
      ,
      { 
        "label" : "2010" ,
        "value" : Number(dataAvg.paydayAvg[10].payday_avg_loan)
      }
      ,
      { 
        "label" : "2011" ,
        "value" : Number(dataAvg.paydayAvg[11].payday_avg_loan)
      }
      ,
      { 
        "label" : "2012" ,
        "value" : Number(dataAvg.paydayAvg[12].payday_avg_loan)
      }
      ,
      { 
        "label" : "2013" ,
        "value" : Number(dataAvg.paydayAvg[13].payday_avg_loan)
      }
      ,
      { 
        "label" : "2014" ,
        "value" : Number(dataAvg.paydayAvg[14].payday_avg_loan)
      }
    ]
  }
]
}

nv.addGraph(function() {
    chart3 = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showValues(true)           //Show bar value next to each bar.
        .stacked(true)
        .color(['#FBC9A0','#D09361','#7F4413','#A86935'])
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

    chart3.yAxis
        .tickFormat(d3.format('%,.1f'));

    d3.select('#chart3 svg')
        .datum(paydayRegionData())
        .call(chart3);

    nv.utils.windowResize(chart3.update);

    return chart3;
  });

function paydayRegionData() {
    return [
    {
    "key": "Internet",
    "values": [
       { 
        "label" : "2014" ,
        "value" : Number(dataRegion.paydayRegion[0].pct)
      }
    ]
  },
  {
    "key": "Twin Cities",
    "values": [
       { 
        "label" : "2014" ,
        "value" : Number(dataRegion.paydayRegion[1].pct)
      }
    ]
  },
  {
    "key": "Suburbs",
    "values": [
       { 
        "label" : "2014" ,
        "value" : Number(dataRegion.paydayRegion[2].pct)
      }
    ]
  },
  {
    "key": "Rural",
    "values": [
       { 
        "label" : "2014" ,
        "value" : Number(dataRegion.paydayRegion[3].pct)
      }
    ]
  }
]
}

$(window).load(function(){
  donationTable.search("2014").draw();
});
});
});
});
});
},{}]},{},[1])