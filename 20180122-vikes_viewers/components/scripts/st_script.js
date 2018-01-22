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

  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chart",
          padding: padding,
          data: {
              x: 'x',
              xFormat: '%Y-%m-%d %H:%M:%S',
                columns: [
                  ['x',"2018-07-22 17:30:00","2018-07-22 17:45:00","2018-07-22 18:00:00","2018-07-22 18:15:00","2018-07-22 18:30:00","2018-07-22 18:45:00","2018-07-22 19:00:00","2018-07-22 19:15:00","2018-07-22 19:30:00","2018-07-22 19:45:00","2018-07-22 20:00:00","2018-07-22 20:15:00","2018-07-22 20:30:00","2018-07-22 20:45:00"],
                  ['Viewers',842704,969024,1029588,1033048,1017475,1022666,1007092,960372,970754,925764,744072,794254,721577,228413],
                ],
            type: 'line',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#4F2683']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1250000,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 7,
                         values: [0,250000,500000,750000,1000000,1250000],
                         format: d3.format(',')
                        }
                    },
                x: {
                    type: 'timeseries',
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        values: ['2018-07-22 17:30:00','2018-07-22 18:00:00','2018-07-22 18:30:00','2018-07-22 19:00:00','2018-07-22 19:30:00','2018-07-22 20:00:00','2018-07-22 20:30:00'],
                        multiline: false,
                        format: d3.time.format("%H:%M")
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: '2018-07-22 17:49:00', text: 'Vikings take 7-0 lead', position: 'start', class:'powerline'},
                    {value: '2018-07-22 18:08:00', text: 'Eagles score on INT', position: 'start', class:'powerline'},
                    {value: '2018-07-22 18:26:00', text: 'Eagles lead 14-7', position: 'start', class:'powerline'},
                    {value: '2018-07-22 18:49:00', text: 'Eagles TD off Keenum fumble', position: 'start', class:'powerline'},
                    {value: '2018-07-22 19:07:00', text: 'FG puts Eagles up 24-7', position: 'start', class:'powerline'},
                    {value: '2018-07-22 19:41:00', text: 'Eagles score to open second half', position: 'start', class:'powerline'},
                    {value: '2018-07-22 19:57:00', text: 'Eagles take 38-7 lead', position: 'start', class:'powerline'},
                    {value: '2018-07-22 20:25:00', text: 'Keenum INT', position: 'start', class:'powerline'}

              ]
              }
          }

    });
}

chartTrend();