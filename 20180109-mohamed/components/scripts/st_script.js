$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected == "all"){
$(".slide").show();
} else if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

  function namesChart(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chart = c3.generate({
          bindto: "#chart2",
          padding: padding,
          data: {
                columns: [
                    ['Henry', 143,null,null,null],
                    ['Maverick', null,35,null,null],
                    ['Mohamed', null,null,24,null],
                    ['Xavier',null,null,null,24]
                ],
            type: 'bar',
             labels: {
              format: function(v) {
                return v === 0 ? '' : v;
              }
            },
            groups: [
            ['Henry', 'Maverick', 'Mohamed','Xavier']
        ]
            },
            legend: {
                show: false
            },            
            bar: {
                  width: {
                      ratio: 0.6
                  }
              },            
            tooltip: {
                show: false
            },
                color: {
                  pattern: ['#BF603C','#969696',"#66AF50","#4C4C39"]
                },
            axis: {
                  // rotated: true,
                  y: {
                        label: 'Rate per 10k births',
                        max: 150,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 7,
                         values: [0,50,100,150],
                         format: d3.format(',')
                        }
                    },
                x: {
                    type: 'category',
                    categories: ['Henry','Maverick','Mohamed','Xavier'],
                    tick: {
                        rotate: -75,
                        multiline: false
                    },
                    height: 40
                }
            }
          // grid: {
          //     y: {
          //     lines: [
          //           {value: 0.5, text: '', position: 'start', class:'powerline'}
          //     ]
          //     }
          // }

    });

// d3.selectAll(".c3-target-Henry")
//     .selectAll(".c3-bar, .c3-texts")
//     .attr("transform", "translate(-10, 0)");

// d3.selectAll(".c3-target-Maverick")
//     .selectAll(".c3-bar, .c3-texts")
//     .attr("transform", "translate(-4, 0)");

// d3.selectAll(".c3-target-Mohamed")
//     .selectAll(".c3-bar, .c3-texts")
//     .attr("transform", "translate(4, 0)");

// d3.selectAll(".c3-target-Xavier")
//     .selectAll(".c3-bar, .c3-texts")
//     .attr("transform", "translate(10, 0)");

// d3.select("#chart2 svg").append("text")
//     .attr("x", 150 )
//     .attr("y", 30)
//     .style("text-anchor", "right")
//     .text("Rate per 10k births");

}

  namesChart();


d3.csv("./data/names.csv", function(d) {
  return {
    gender: d.GENDER,
    year: +d.YEAR,
    name: d.NAME,
    rate: +d.RatePer10k,
    births: +d.NUM_BIRTHS
  };
}, function(error, rows) {

var data = rows;

var axis = [];
var dataStream = [];
axis[0] = 'x';
var indexYear = 1;

for (var j=1980; j<2017; j++){
  axis[indexYear] = j;
  dataStream[indexYear] = 0;
  indexYear++;
}

function switchChart(name,gender,colors){

  var found = false;
  dataStream[0] = name;
  var index = 0;

  for (var i=0; i < data.length; i++){
    if (name == data[i].name && gender == data[i].gender){
      found = true;
      index = i;
      for (var k=1; k < dataStream.length; k++){
        if (data[index].name != name || data[index].gender != gender){ break; }
        if (axis[k] == data[index].year) { 
          dataStream[k] = data[index].rate; 
          $("#rate").html(data[index].rate);
          $("#year").html(data[index].year);
          index++; 
        }
      }
      // break;
    }
  }

if (found == true){

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

var share = "#B0BEC5";

var chart = c3.generate({
        bindto: '#chart',
        padding: padding,
    data: {
        x: 'x',
        columns: [
            axis,
            dataStream
        ],
        type: 'line'
    },
    color:  {  pattern: [colors] },
    legend: { show: false },
    axis: {
      y: {
            max: 30,
            min: 0,
            padding: {bottom: 0, top: 0},
            tick: {
             count: 4,
             values: [0,10,20,30],
             format: d3.format('.0f')
            }
        },
        x: {
            padding: {right: 0, left:0},
            tick: {
                values: ['1980', '1990', '2000', '2016'],
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
                  text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
              }

              var birthNum = 0;



              name = nameFormat(d[i].name);
              value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
              bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

              for (var k=0; k < rows.length; k++){
                if (rows[k].name == name && rows[k].year == Number(title) && rows[k].gender == gender){
                  birthNum = rows[k].births;
                  break;
                }
              }

              text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>Rate</td>";
              text += "<td class='value'>" + value + "</td>";
              text += "</tr><tr>";
              text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>Total Births</td>";
              text += "<td class='value'>" + birthNum + "</td>";
              text += "</tr>";
              
          }
          return text + "</table>";
      }
    }
});
}
else { $("#current").html("Name not found"); }

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1]; }
  else { return 0; }
}

if ($.urlParam('name') != 0 ) { 
  var name = toTitleCase($.urlParam('name')); 
  var gender = String($.urlParam('gender')).toUpperCase();
  var genderStatus = gender; 
  $("#" + gender).addClass("selected");
  if (gender == "M") { var colorMe = "#66AF50"; var sex = "boy"; var genderfull="male" }
  else  { var colorMe = "#AA6666";  var sex = "girl"; var genderfull = "female"; }
  $("#named, #named2").html(name);
  $("#gender").html(sex);
  $(".sex").html(genderfull);
  //$("#named, #rate, #named2, .sex").css("color",colorMe);
  switchChart(name,gender,colorMe);
} 

  $( document ).ready(function() {
    $(".switch").click(function()  { 
       genderStatus = $(this).attr("data");
       $(".switch").removeClass("selected");
       $(this).addClass("selected");
    });

   $('#filter_box').keyup(function(e){
        if(e.keyCode == 13)
        {
          window.location.href = './?name=' + $('#filter_box').val() + '&gender=' + genderStatus;
        }
    });
    
});   

});