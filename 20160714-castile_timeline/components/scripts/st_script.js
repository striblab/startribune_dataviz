d3.csv("./data/citations.csv", function(d) {
  return {
    filed: d3.time.format("%x")(new Date(d.OffenseDateraw)),
    level: d.StatLevel,
    charge: d.StatDescr,
    disposition: d.DispCode,
    type: d.type,
    year: d.year,
    fine: +d.fine
  };
}, function(error, rows) {

var data = rows;

var chart;

var axis = [];
var allNum = [];
var insuranceNum = [];
var licenseNum = [];
var speedingNum = [];
var otherNum = [];
var parkingNum = [];
var seatbeltNum = [];
var mjNum = [];
var fineNum = [];

axis[0] = 'axis';
allNum[0] = 'Everything',
insuranceNum[0] = 'Insurance';
licenseNum[0] = 'License';
speedingNum[0] = 'Speeding';
otherNum[0] = 'Other';
parkingNum[0] = 'Parking';
mjNum[0] = 'Marijuana';
seatbeltNum[0] = 'Seatbelt';
fineNum[0] = 'Fine';

var allCount = 0;
var insuranceCount = 0;
var licenseCount = 0;
var speedingCount = 0;
var otherCount = 0;
var parkingCount = 0;
var seatbeltCount = 0;
var mjCount = 0;

for (var i=0; i < data.length; i++){
  axis[i+1] = d3.time.format("%m-%d-%Y")(new Date(data[i].filed));
  allNum[i+1] = null;
  insuranceNum[i+1] = null;
  licenseNum[i+1] = null;
  speedingNum[i+1] = null;
  otherNum[i+1] = null;
  parkingNum[i+1] = null;
  seatbeltNum[i+1] = null;
  mjNum[i+1] = null;
  fineNum[i+1] = null;

  if (data[i].type != "reinstatement" && data[i].type != "suspended"){ allCount++; }

  console.log(data[i].fine);

  if (data[i].fine != 0) { fineNum[i+1] = data[i].fine; }

  if (data[i].type == "insurance"){
    insuranceCount++;
    if (data[i].disposition == "DISMISS") { insuranceNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { insuranceNum[i+1] = 10; }
  }
  if (data[i].type == "license"){
    licenseCount++;
    if (data[i].disposition == "DISMISS") { licenseNum[i+1] = 30; }
    else if (data[i].disposition == "CONV" || data[i].disposition == "FTA")  { licenseNum[i+1] = 10; }
  }
  if (data[i].type == "speeding"){
    speedingCount++;
    if (data[i].disposition == "DISMISS") { speedingNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { speedingNum[i+1] = 10; }
  }
  if (data[i].type == "other"){
    otherCount++;
    if (data[i].disposition == "DISMISS") { otherNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { otherNum[i+1] = 10; }
  }
  if (data[i].type == "parking"){
    parkingCount++;
    if (data[i].disposition == "DISMISS") { parkingNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { parkingNum[i+1] = 10; }
  }
  if (data[i].type == "seatbelt"){
    seatbeltCount++;
    if (data[i].disposition == "DISMISS") { seatbeltNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { seatbeltNum[i+1] = 10; }
  }
  if (data[i].type == "marijuana"){
    mjCount++;
    if (data[i].disposition == "DISMISS") { mjNum[i+1] = 30; }
    else if (data[i].disposition == "CONV")  { mjNum[i+1] = 10; }
  }
}

var  padding = {
        top: 20,
        right: 80,
        bottom: 20,
        left: 80,
    };

chart = c3.generate({
      bindto: "#chart",
      padding: padding,
      point: {
        r: 4
    },
    data: {
        xs: {
            'Everything': 'axis',
            'Insurance': 'axis',
            'License': 'axis',
            'Speeding': 'axis',
            'Other': 'axis',
            'Parking': 'axis',
            'Marijuana': 'axis',
            'Seatbelt': 'axis'
        },
        columns: [
            axis,
            allNum,
            insuranceNum,
            licenseNum,
            speedingNum,
            otherNum,
            seatbeltNum,
            parkingNum,
            mjNum
        ],
        type: 'scatter'
        // types: {
        //     'Trump': 'line',
        //     'Clinton': 'line'
        // }
    },
     color:  { 
          pattern: ['#000', '#ca7a68', '#76909f', '#b1ae68', '#a17a94', '#6f9a7c', '#cf995a', '#9c8f68']
          // pattern: ['#000', '#ffaaaa', '#e69190', '#cd7976', '#b5625e', '#9d4a45', '#84332f', '#6c1c1a']
        },
      legend: {
        show: false
        },
    grid: {
        x: {
            lines: [
                {value: '04-04-2003', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '06-13-2003', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '03-11-2004', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '03-01-2003', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '05-19-2006', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '05-09-2007', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '09-30-2013', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '01-28-2008', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '08-26-2008', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '10-07-2008', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '11-05-2008', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '03-20-2009', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '06-08-2009', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '11-06-2009', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '02-11-2010', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '02-05-2003', text: '', position: 'start', class: 'reinstate', opacity:0.5 },
                {value: '02-19-2003', text: '', position: 'start', class: 'reinstate', opacity:0.5 },

                {value: '12-24-2002', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '01-02-2003', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '06-12-2003', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-02-2003', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '11-23-2005', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '07-14-2006', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '08-22-2006', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '09-14-2006', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '06-13-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '08-24-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '09-04-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '09-13-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '11-19-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-18-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-19-2007', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '04-06-2011', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '04-04-2011', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '10-10-2011', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-09-2011', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '02-17-2012', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '05-03-2012', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '06-01-2012', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '07-26-2012', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '09-23-2013', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '01-25-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '03-03-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '05-07-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '08-05-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '10-03-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '11-03-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-03-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-08-2008', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '06-04-2009', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '11-05-2009', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '02-10-2010', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '11-04-2010', text: '', position: 'start', class: 'suspend', opacity:0.5 },
                {value: '12-30-2010', text: '', position: 'start', class: 'suspend', opacity:0.5 }
            ]
        }
    },
    axis: {
      y: {
            min: 0,
            padding: {bottom: 0},
            tick: {
             format: function (d) {
                    switch (d) {
                        case 30:
                            return "Dismissed"
                        case 10:
                            return "Convicted"
                    }
                },
              values: [10,30],
            }
        },
        x: {
            type: 'categories',
            categories: ['12-02-2002','03-21-2006','02-13-2008','08-10-2011'],
            tick: {
                count: 4,
                multiline: false
            }
          }
        },
        tooltip: {
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          var $$ = this, config = $$.config,
              titleFormat = config.tooltip_format_title || defaultTitleFormat,
              nameFormat = config.tooltip_format_name || function (name) { return name; },
              valueFormat = config.tooltip_format_value || defaultValueFormat,
              text, i, title, value, name, bgcolor;
          for (i = 0; i < d.length; i++) {
              if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

              if (! text) {
                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                  text = "<table class='" + $$.CLASS.tooltip + " fixtip'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
              }

              var description = "";

              name = nameFormat(d[i].name);
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

              // console.log(title);

              for (var k=0; k < data.length; k++){
                if (d3.time.format("%m-%d-%Y")(new Date(data[k].filed)) == title && String(name).toLowerCase() == String(data[k].type).toLowerCase()){
                  description = data[k].charge;
                  break;
                }
              }

              text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
              text += "<td class='value'>" + value + "</td>";
              text += "</tr><tr>";
              text += "<tr class='value'><td style='width:100%' colspan='2'>" + description + "</td></tr>";
              
          }
          return text + "</table>";
      }
    }
});

chartF = c3.generate({
      bindto: "#chartF",
      padding: padding,
      point: {
        r: 4
    },
    data: {
        xs: {
            'Fine': 'axis'
        },
        columns: [
            axis,
            fineNum
        ],
        type: 'scatter'
    },
     color:  { 
          pattern: ['#000']
        },
      legend: {
        show: false
        },
    axis: {
      y: {
            min: 0,
            padding: {bottom: 0},
            tick: {
             count: 4,
             format: d3.format("$"),
             values: [100,250,400]
            }
        },
        x: {
            type: 'categories',
            categories: ['12-02-2002','03-21-2006','02-13-2008','08-10-2011'],
            tick: {
                count: 4,
                multiline: false
            }
          }
        },
        tooltip: {
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          var $$ = this, config = $$.config,
              titleFormat = config.tooltip_format_title || defaultTitleFormat,
              nameFormat = config.tooltip_format_name || function (name) { return name; },
              valueFormat = config.tooltip_format_value || defaultValueFormat,
              text, i, title, value, name, bgcolor;
          for (i = 0; i < d.length; i++) {
              if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

              if (! text) {
                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                  text = "<table class='" + $$.CLASS.tooltip + " fixtip'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
              }

              var description = "";

              name = nameFormat(d[i].name);
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

              // console.log(title);

              // for (var k=0; k < data.length; k++){
              //   if (d3.time.format("%m-%d-%Y")(new Date(data[k].filed)) == title && String(name).toLowerCase() == String(data[k].type).toLowerCase()){
              //     description = data[k].charge;
              //     break;
              //   }
              // }

              text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
              text += "<td class='value'>" + value + "</td>";
              text += "</tr><tr>";
              text += "<tr class='value'><td style='width:100%' colspan='2'>" + description + "</td></tr>";
              
          }
          return text + "</table>";
      }
    }
});

function spitLegend() {
d3.select('#pct').selectAll('.stat')
    .data(["All","Insurance","License","Speeding","Other","Seatbelt","Parking","Marijuana"])
    .enter().append('div')
    .attr('data-id', function (id) { return id; })
    .attr("class",function (id) { if (id == "All") { return 'stat clicked' } else { return 'stat'; }; })
    .html(function (id) {
      if (id == "All") { var counted = allCount; }
      if (id == "Insurance") { var counted = insuranceCount; }
      if (id == "License") { var counted = licenseCount; }
      if (id == "Speeding") { var counted = speedingCount; }
      if (id == "Other") { var counted = otherCount; }
      if (id == "Seatbelt") { var counted = seatbeltCount; }
      if (id == "Parking") { var counted = parkingCount; }
      if (id == "Marijuana") { var counted = mjCount; }

     return "<div class='bigNum'>" + counted + "</div><div class='label'>" + id + "</div>"; })
    .each(function (id) {
        d3.select(this).style('color', chart.color(id));
    })
    .on('mouseover', function (id) {
        // chartD.focus(id);
        // chartM.focus(id);
    })
    .on('mouseout', function (id) {
        // chartD.revert();
        // chartM.revert();
    })
    .on('click', function (id) {
      if (id == "All") { chart.revert(); }
      else { chart.focus(id); }
    });

$(".stat").click(function() {
  $(".stat").removeClass("clicked");
  $(this).addClass("clicked");
});
}

spitLegend();

});