(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/passing.json", function(error, dataLoadP) {

var dataP = dataLoadP.passing;

function crunchPassing(week){

  $(".remove").removeClass("p1");
  $(".remove").removeClass("p2");
  $(".remove").removeClass("p3");
  $(".remove").removeClass("p4");
  $(".remove").removeClass("p5");
  $(".remove").removeClass("touchdown");
  $(".remove").removeClass("interception");
  $(".remove").removeClass("both");
  $(".remove").html("");

  var totalYards = 0;
  var qb = "QB";
  var td = 0;
  var interceptions = 0;
  var att = 0
  var com = 0;

  var behindLOSLeft = 0;
  var behindLOSRight = 0;
  var behindLOSMid = 0;
  var behindLOSLeftY = 0;
  var behindLOSRightY = 0;
  var behindLOSMidY = 0;
  var behindLOSAtt = 0;
  var behindLOSCom = 0;
  var behindLOSLeftAtt = 0;
  var behindLOSRightAtt = 0;
  var behindLOSMidAtt = 0;
  var behindLOSLeftCom = 0;
  var behindLOSRightCom = 0;
  var behindLOSMidCom = 0;
  var behindLOSLeftTD = 0;
  var behindLOSRightTD = 0;
  var behindLOSMidTD = 0;
  var behindLOSLeftINT = 0;
  var behindLOSRightINT = 0;
  var behindLOSMidINT = 0;

  var y09Left = 0;
  var y09Right = 0;
  var y09Mid = 0;
  var y09LeftY = 0;
  var y09RightY = 0;
  var y09MidY = 0;
  var y09Att = 0;
  var y09Com = 0;
  var y09LeftAtt = 0;
  var y09RightAtt = 0;
  var y09MidAtt = 0;
  var y09LeftCom = 0;
  var y09RightCom = 0;
  var y09MidCom = 0;
  var y09LeftTD = 0;
  var y09RightTD = 0;
  var y09MidTD = 0;
  var y09LeftINT = 0;
  var y09RightINT = 0;
  var y09MidINT = 0;

  var y1019Left = 0;
  var y1019Right = 0;
  var y1019Mid = 0;
  var y1019LeftY = 0;
  var y1019RightY = 0;
  var y1019MidY = 0;
  var y1019Att = 0;
  var y1019Com = 0;
  var y1019LeftAtt = 0;
  var y1019RightAtt = 0;
  var y1019MidAtt = 0;
  var y1019LeftCom = 0;
  var y1019RightCom = 0;
  var y1019MidCom = 0;
  var y1019LeftTD = 0;
  var y1019RightTD = 0;
  var y1019MidTD = 0;
  var y1019LeftINT = 0;
  var y1019RightINT = 0;
  var y1019MidINT = 0;

  var y20plusLeft = 0;
  var y20plusRight = 0;
  var y20plusMid = 0;
  var y20plusLeftY = 0;
  var y20plusRightY = 0;
  var y20plusMidY = 0;
  var y20plusAtt = 0;
  var y20plusCom = 0;
  var y20plusLeftAtt = 0;
  var y20plusRightAtt = 0;
  var y20plusMidAtt = 0;
  var y20plusLeftCom = 0;
  var y20plusRightCom = 0;
  var y20plusMidCom = 0;
  var y20plusLeftTD = 0;
  var y20plusRightTD = 0;
  var y20plusMidTD = 0;
  var y20plusLeftINT = 0;
  var y20plusRightINT = 0;
  var y20plusMidINT = 0;

if (week != 0){
  for (var i=0; i < dataP.length; i++){
    if (week == dataP[i].week){

      totalYards += dataP[i].left_yards + dataP[i].right_yards + dataP[i].middle_yards;

      if (dataP[i].where == "Behind LOS"){
        if (dataP[i].left_att != 0) { behindLOSLeft = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { behindLOSRight = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { behindLOSMid = dataP[i].middle_com / dataP[i].middle_att; }
        behindLOSLeftY += dataP[i].left_yards;
        behindLOSRightY += dataP[i].right_yards;
        behindLOSMidY += dataP[i].middle_yards;
        behindLOSAtt += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        behindLOSCom += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        behindLOSLeftAtt += dataP[i].left_att;
        behindLOSRightAtt += dataP[i].right_att;
        behindLOSMidAtt += dataP[i].middle_att;
        behindLOSLeftCom += dataP[i].left_com;
        behindLOSRightCom += dataP[i].right_com;
        behindLOSMidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        behindLOSLeftTD = dataP[i].left_td;
        behindLOSRightTD = dataP[i].right_td;
        behindLOSMidTD = dataP[i].mid_td;
        behindLOSLeftINT = dataP[i].left_int;
        behindLOSRightINT = dataP[i].right_int;
        behindLOSMidINT = dataP[i].mid_int;
      }
      if (dataP[i].where == "0-9 yards"){
        if (dataP[i].left_att != 0) { y09Left = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y09Right = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y09Mid = dataP[i].middle_com / dataP[i].middle_att;  }
        y09LeftY += dataP[i].left_yards;
        y09RightY += dataP[i].right_yards;
        y09MidY += dataP[i].middle_yards;
        y09Att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y09Com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y09LeftAtt += dataP[i].left_att;
        y09RightAtt += dataP[i].right_att
        y09MidAtt += dataP[i].middle_att;
        y09LeftCom += dataP[i].left_com;
        y09RightCom += dataP[i].right_com;
        y09MidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y09LeftTD = dataP[i].left_td;
        y09RightTD = dataP[i].right_td;
        y09MidTD = dataP[i].mid_td;
        y09LeftINT = dataP[i].left_int;
        y09RightINT = dataP[i].right_int;
        y09MidINT = dataP[i].mid_int;
      }
      if (dataP[i].where == "10-19 yards"){
        if (dataP[i].left_att != 0) { y1019Left = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y1019Right = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y1019Mid = dataP[i].middle_com / dataP[i].middle_att; }
        y1019LeftY += dataP[i].left_yards;
        y1019RightY += dataP[i].right_yards;
        y1019MidY += dataP[i].middle_yards;
        y1019Att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y1019Com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y1019LeftAtt += dataP[i].left_att;
        y1019RightAtt += dataP[i].right_att
        y1019MidAtt += dataP[i].middle_att;
        y1019LeftCom += dataP[i].left_com;
        y1019RightCom += dataP[i].right_com;
        y1019MidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y1019LeftTD = dataP[i].left_td;
        y1019RightTD = dataP[i].right_td;
        y1019MidTD = dataP[i].mid_td;
        y1019LeftINT = dataP[i].left_int;
        y1019RightINT = dataP[i].right_int;
        y1019MidINT = dataP[i].mid_int;
      }
      if (dataP[i].where == "20-plus"){
        if (dataP[i].left_att != 0) { y20plusLeft = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y20plusRight = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y20plusMid = dataP[i].middle_com / dataP[i].middle_att; }  
        y20plusLeftY = dataP[i].left_yards;
        y20plusRightY = dataP[i].right_yards;
        y20plusMidY = dataP[i].middle_yards;
        y20plusAtt = dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y20plusCom = dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y20plusLeftAtt = dataP[i].left_att;
        y20plusRightAtt = dataP[i].right_att
        y20plusMidAtt = dataP[i].middle_att;
        y20plusLeftCom = dataP[i].left_com;
        y20plusRightCom = dataP[i].right_com;
        y20plusMidCom = dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y20plusLeftTD = dataP[i].left_td;
        y20plusRightTD = dataP[i].right_td;
        y20plusMidTD = dataP[i].mid_td;
        y20plusLeftINT = dataP[i].left_int;
        y20plusRightINT = dataP[i].right_int;
        y20plusMidINT = dataP[i].mid_int;
      }

      qb = dataP[i].who;
    }
  }
} else {
  for (var i=0; i < dataP.length; i++){
    // if (week == dataP[i].week){

      totalYards += dataP[i].left_yards + dataP[i].right_yards + dataP[i].middle_yards;

      if (dataP[i].where == "Behind LOS"){
        if (dataP[i].left_att != 0) { behindLOSLeft = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { behindLOSRight = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { behindLOSMid = dataP[i].middle_com / dataP[i].middle_att; }
        behindLOSLeftY += dataP[i].left_yards;
        behindLOSRightY += dataP[i].right_yards;
        behindLOSMidY += dataP[i].middle_yards;
        behindLOSAtt += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        behindLOSCom += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        behindLOSLeftAtt += dataP[i].left_att;
        behindLOSRightAtt += dataP[i].right_att;
        behindLOSMidAtt += dataP[i].middle_att;
        behindLOSLeftCom += dataP[i].left_com;
        behindLOSRightCom += dataP[i].right_com;
        behindLOSMidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        behindLOSLeftTD += dataP[i].left_td;
        behindLOSRightTD += dataP[i].right_td;
        behindLOSMidTD += dataP[i].mid_td;
        behindLOSLeftINT += dataP[i].left_int;
        behindLOSRightINT += dataP[i].right_int;
        behindLOSMidINT += dataP[i].mid_int;
      }
      if (dataP[i].where == "0-9 yards"){
        if (dataP[i].left_att != 0) { y09Left = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y09Right = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y09Mid = dataP[i].middle_com / dataP[i].middle_att;  }
        y09LeftY += dataP[i].left_yards;
        y09RightY += dataP[i].right_yards;
        y09MidY += dataP[i].middle_yards;
        y09Att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y09Com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y09LeftAtt += dataP[i].left_att;
        y09RightAtt += dataP[i].right_att
        y09MidAtt += dataP[i].middle_att;
        y09LeftCom += dataP[i].left_com;
        y09RightCom += dataP[i].right_com;
        y09MidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y09LeftTD += dataP[i].left_td;
        y09RightTD += dataP[i].right_td;
        y09MidTD += dataP[i].mid_td;
        y09LeftINT += dataP[i].left_int;
        y09RightINT += dataP[i].right_int;
        y09MidINT += dataP[i].mid_int;
      }
      if (dataP[i].where == "10-19 yards"){
        if (dataP[i].left_att != 0) { y1019Left = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y1019Right = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y1019Mid = dataP[i].middle_com / dataP[i].middle_att; }
        y1019LeftY += dataP[i].left_yards;
        y1019RightY += dataP[i].right_yards;
        y1019MidY += dataP[i].middle_yards;
        y1019Att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y1019Com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y1019LeftAtt += dataP[i].left_att;
        y1019RightAtt += dataP[i].right_att
        y1019MidAtt += dataP[i].middle_att;
        y1019LeftCom += dataP[i].left_com;
        y1019RightCom += dataP[i].right_com;
        y1019MidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y1019LeftTD += dataP[i].left_td;
        y1019RightTD += dataP[i].right_td;
        y1019MidTD += dataP[i].mid_td;
        y1019LeftINT += dataP[i].left_int;
        y1019RightINT += dataP[i].right_int;
        y1019MidINT += dataP[i].mid_int;
      }
      if (dataP[i].where == "20-plus"){
        if (dataP[i].left_att != 0) { y20plusLeft = dataP[i].left_com / dataP[i].left_att; }
        if (dataP[i].right_att != 0) { y20plusRight = dataP[i].right_com / dataP[i].right_att; }
        if (dataP[i].middle_att != 0) { y20plusMid = dataP[i].middle_com / dataP[i].middle_att; }  
        y20plusLeftY += dataP[i].left_yards;
        y20plusRightY += dataP[i].right_yards;
        y20plusMidY += dataP[i].middle_yards;
        y20plusAtt += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        y20plusCom += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y20plusLeftAtt += dataP[i].left_att;
        y20plusRightAtt += dataP[i].right_att
        y20plusMidAtt += dataP[i].middle_att;
        y20plusLeftCom += dataP[i].left_com;
        y20plusRightCom += dataP[i].right_com;
        y20plusMidCom += dataP[i].middle_com;
        interceptions += dataP[i].left_int + dataP[i].right_int + dataP[i].mid_int;
        td += dataP[i].left_td + dataP[i].right_td + dataP[i].mid_td;
        att += dataP[i].left_att + dataP[i].right_att + dataP[i].middle_att;
        com += dataP[i].middle_com + dataP[i].right_com + dataP[i].left_com;
        y20plusLeftTD += dataP[i].left_td;
        y20plusRightTD += dataP[i].right_td;
        y20plusMidTD += dataP[i].mid_td;
        y20plusLeftINT += dataP[i].left_int;
        y20plusRightINT += dataP[i].right_int;
        y20plusMidINT += dataP[i].mid_int;
      }
    }
  // }
    qb = "Sam Bradford";
}

  if ((behindLOSLeftAtt / att) >= 0.20) { $("#behindlos .left").addClass('p5'); }
  else if ((behindLOSLeftAtt / att) >= 0.15) { $("#behindlos .left").addClass('p4'); }
  else if ((behindLOSLeftAtt / att) >= 0.10) { $("#behindlos .left").addClass('p3'); }
  else if ((behindLOSLeftAtt / att) >= 0.05) { $("#behindlos .left").addClass('p2'); }
  else if ((behindLOSLeftAtt / att) > 0) { $("#behindlos .left").addClass('p1'); }
  else { $("#behindlos .left").addClass('p0'); }

  if (behindLOSLeftAtt != 0) { $("#behindlos .left").html("<div class='highlight'>" + d3.format("%")(behindLOSLeftAtt / att) + "</div><div class='otherstats'>" + behindLOSLeftCom + "/" + behindLOSLeftAtt + "&nbsp;for&nbsp;" + behindLOSLeftY + " yards</div><div class='otherstats'><span class='td'>" + behindLOSLeftTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + behindLOSLeftINT + "</span> INT</div>"); }

  if ((behindLOSMidAtt / att) >= 0.20) { $("#behindlos .middle").addClass('p5'); }
  else if ((behindLOSMidAtt / att) >= 0.15) { $("#behindlos .middle").addClass('p4'); }
  else if ((behindLOSMidAtt / att) >= 0.10) { $("#behindlos .middle").addClass('p3'); }
  else if ((behindLOSMidAtt / att) >= 0.05) { $("#behindlos .middle").addClass('p2'); }
  else if ((behindLOSMidAtt / att) > 0) { $("#behindlos .middle").addClass('p1'); }
  else  { $("#behindlos .middle").addClass('p0'); }

  if (behindLOSMidAtt != 0) {$("#behindlos .middle").html("<div class='highlight'>" + d3.format("%")(behindLOSMidAtt / att) + "</div><div class='otherstats'>" + behindLOSMidCom + "/" + behindLOSMidAtt + "&nbsp;for&nbsp;" + behindLOSMidY + " yards</div><div class='otherstats'><span class='td'>" + behindLOSMidTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + behindLOSMidINT +  "</span> INT</div>&nbsp"); }

  if ((behindLOSRightAtt / att) >= 0.20) { $("#behindlos .right").addClass('p5'); }
  else if ((behindLOSRightAtt / att) >= 0.15) { $("#behindlos .right").addClass('p4'); }
  else if ((behindLOSRightAtt / att) >= 0.10) { $("#behindlos .right").addClass('p3'); }
  else if ((behindLOSRightAtt / att) >= 0.05) { $("#behindlos .right").addClass('p2'); }
  else if ((behindLOSRightAtt / att) > 0) { $("#behindlos .right").addClass('p1'); }
  else { $("#behindlos .right").addClass('p0'); }

  if (behindLOSRightAtt != 0) { $("#behindlos .right").html("<div class='highlight'>" + d3.format("%")(behindLOSRightAtt / att) + "</div><di class='otherstats'>" + behindLOSRightCom + "/" + behindLOSRightAtt + "&nbsp;for&nbsp;" + behindLOSRightY + " yards</div><div class='otherstats'><span class='td'>" + behindLOSRightTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + behindLOSRightINT + "</span> INT</div>"); }

  $("#avgbehindlos").html(d3.format("%")(behindLOSAtt / att));

  if ((y09LeftAtt / att) >= 0.20) { $("#y09 .left").addClass('p5'); }
  else if ((y09LeftAtt / att) >= 0.15) { $("#y09 .left").addClass('p4'); }
  else if ((y09LeftAtt / att) >= 0.10) { $("#y09 .left").addClass('p3'); }
  else if ((y09LeftAtt / att) >= 0.05) { $("#y09 .left").addClass('p2'); }
  else if ((y09LeftAtt / att) > 0) { $("#y09 .left").addClass('p1'); }
  else  { $("#y09 .left").addClass('p0'); }

  if (y09LeftAtt != 0) {$("#y09 .left").html("<div class='highlight'>" + d3.format("%")(y09LeftAtt / att) + "</div><div class='otherstats'>" + y09LeftCom + "/" + y09LeftAtt + "&nbsp;for&nbsp;" + y09LeftY + " yards</div><div class='otherstats'><span class='td'>" + y09LeftTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y09LeftINT + "</span> INT</div>&nbsp"); }

  if ((y09MidAtt / att) >= 0.20) { $("#y09 .middle").addClass('p5'); }
  else if ((y09MidAtt / att) >= 0.15) { $("#y09 .middle").addClass('p4'); }
  else if ((y09MidAtt / att) >= 0.10) { $("#y09 .middle").addClass('p3'); }
  else if ((y09MidAtt / att) >= 0.05) { $("#y09 .middle").addClass('p2'); }
  else if ((y09MidAtt / att) > 0) { $("#y09 .middle").addClass('p1'); }
  else  { $("#y09 .middle").addClass('p0'); }

  if (y09MidAtt != 0) {$("#y09 .middle").html("<div class='highlight'>" + d3.format("%")(y09MidAtt / att) + "</div><div class='otherstats'>" + y09MidCom + "/" + y09MidAtt + "&nbsp;for&nbsp;" + y09MidY + " yards</div><div class='otherstats'><span class='td'>" + y09MidTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y09MidINT + "</span> INT</div>&nbsp"); }

  if ((y09RightAtt / att) >= 0.20) { $("#y09 .right").addClass('p5'); }
  else if ((y09RightAtt / att) >= 0.15) { $("#y09 .right").addClass('p4'); }
  else if ((y09RightAtt / att) >= 0.10) { $("#y09 .right").addClass('p3'); }
  else if ((y09RightAtt / att) >= 0.05) { $("#y09 .right").addClass('p2'); }
  else if ((y09RightAtt / att) > 0) { $("#y09 .right").addClass('p1'); }
  else  { $("#y09 .right").addClass('p0'); }

  if (y09RightAtt != 0) {$("#y09 .right").html("<div class='highlight'>" + d3.format("%")(y09RightAtt / att) + "</div><div class='otherstats'>" + y09RightCom + "/" + y09RightAtt + "&nbsp;for&nbsp;" + y09RightY + " yards</div><div class='otherstats'><span class='td'>" + y09RightTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y09RightINT + "</span> INT</div>&nbsp"); }

  $("#avgy09").html(d3.format("%")(y09Att / att));

  if ((y1019LeftAtt / att) >= 0.20) { $("#y1019 .left").addClass('p5'); }
  else if ((y1019LeftAtt / att) >= 0.15) { $("#y1019 .left").addClass('p4'); }
  else if ((y1019LeftAtt / att) >= 0.10) { $("#y1019 .left").addClass('p3'); }
  else if ((y1019LeftAtt / att) >= 0.05) { $("#y1019 .left").addClass('p2'); }
  else if ((y1019LeftAtt / att) > 0) { $("#y1019 .left").addClass('p1'); }
  else  { $("#y1019 .left").addClass('p0'); }

  if (y1019LeftAtt != 0) {$("#y1019 .left").html("<div class='highlight'>" + d3.format("%")(y1019LeftAtt / att) + "</div><div class='otherstats'>" + y1019LeftCom + "/" + y1019LeftAtt + "&nbsp;for&nbsp;" + y1019LeftY+ " yards</div><div class='otherstats'><span class='td'>" + y1019LeftTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y1019LeftINT  + "</span> INT</div>&nbsp"); }

  if ((y1019MidAtt / att) >= 0.20) { $("#y1019 .middle").addClass('p5'); }
  else if ((y1019MidAtt / att) >= 0.15) { $("#y1019 .middle").addClass('p4'); }
  else if ((y1019MidAtt / att) >= 0.10) { $("#y1019 .middle").addClass('p3'); }
  else if ((y1019MidAtt / att) >= 0.05) { $("#y1019 .middle").addClass('p2'); }
  else if ((y1019MidAtt / att) > 0) { $("#y1019 .middle").addClass('p1'); }
  else  { $("#y1019 .middle").addClass('p0'); }

  if (y1019MidAtt != 0) {$("#y1019 .middle").html("<div class='highlight'>" + d3.format("%")(y1019MidAtt / att) + "</div><div class='otherstats'>" + y1019MidCom + "/" + y1019MidAtt + "&nbsp;for&nbsp;" + y1019MidY + " yards</div><div class='otherstats'><span class='td'>" + y1019MidTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y1019MidINT + "</span> INT</div>&nbsp"); }

  if ((y1019RightAtt / att) >= 0.20) { $("#y1019 .right").addClass('p5'); }
  else if ((y1019RightAtt / att) >= 0.15) { $("#y1019 .right").addClass('p4'); }
  else if ((y1019RightAtt / att) >= 0.10) { $("#y1019 .right").addClass('p3'); }
  else if ((y1019RightAtt / att) >= 0.05) { $("#y1019 .right").addClass('p2'); }
  else if ((y1019RightAtt / att) > 0) { $("#y1019 .right").addClass('p1'); }
  else  { $("#y1019 .right").addClass('p0'); }

  if (y1019RightAtt != 0) {$("#y1019 .right").html("<div class='highlight'>" + d3.format("%")(y1019RightAtt / att) + "</div><div class='otherstats'>" + y1019RightCom + "/" + y1019RightAtt + "&nbsp;for&nbsp;" + y1019RightY + " yards</div><div class='otherstats'><span class='td'>" + y1019RightTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y1019RightINT + "</span> INT</div>&nbsp"); }

  $("#avgy1019").html(d3.format("%")(y1019Att / att));

  if ((y20plusLeftAtt / att) >= 0.20) { $("#y20plus .left").addClass('p5'); }
  else if ((y20plusLeftAtt / att) >= 0.15) { $("#y20plus .left").addClass('p4'); }
  else if ((y20plusLeftAtt / att) >= 0.10) { $("#y20plus .left").addClass('p3'); }
  else if ((y20plusLeftAtt / att) >= 0.05) { $("#y20plus .left").addClass('p2'); }
  else if ((y20plusLeftAtt / att) > 0) { $("#y20plus .left").addClass('p1'); }
  else  { $("#y20plus .left").addClass('p0'); }

  if (y20plusLeftAtt != 0) {$("#y20plus .left").html("<div class='highlight'>" + d3.format("%")(y20plusLeftAtt / att) + "</div><div class='otherstats'>" + y20plusLeftCom + "/" + y20plusLeftAtt + "&nbsp;for&nbsp;" + y20plusLeftY + " yards</div><div class='otherstats'><span class='td'>" + y20plusLeftTD + "</span> <span class='int'>TD " + y20plusLeftINT + "</span> INT</div>&nbsp"); }

  if ((y20plusMidAtt / att) >= 0.20) { $("#y20plus .middle").addClass('p5'); }
  else if ((y20plusMidAtt / att) >= 0.15) { $("#y20plus .middle").addClass('p4'); }
  else if ((y20plusMidAtt / att) >= 0.10) { $("#y20plus .middle").addClass('p3'); }
  else if ((y20plusMidAtt / att) >= 0.05) { $("#y20plus .middle").addClass('p2'); }
  else if ((y20plusMidAtt / att) > 0) { $("#y20plus .middle").addClass('p1'); }
  else { $("#y20plus .middle").addClass('p0'); }

  if (y20plusMidAtt != 0) {$("#y20plus .middle").html("<div class='highlight'>" + d3.format("%")(y20plusMidAtt / att) + "</div><div class='otherstats'>" + y20plusMidCom + "/" + y20plusMidAtt + "&nbsp;for&nbsp;" + y20plusMidY + " yards</div><div class='otherstats'><span class='td'>" + y20plusMidTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y20plusMidINT + "</span> INT</div>&nbsp"); }

  if ((y20plusRightAtt / att) >= 0.20) { $("#y20plus .right").addClass('p5'); }
  else if ((y20plusRightAtt / att) >= 0.15) { $("#y20plus .right").addClass('p4'); }
  else if ((y20plusRightAtt / att) >= 0.10) { $("#y20plus .right").addClass('p3'); }
  else if ((y20plusRightAtt / att) >= 0.05) { $("#y20plus .right").addClass('p2'); }
  else if ((y20plusRightAtt / att) > 0) { $("#y20plus .right").addClass('p1'); }
  else { $("#y20plus .right").addClass('p0'); }

  if (y20plusRightAtt != 0) {$("#y20plus .right").html("<div class='highlight'>" + d3.format("%")(y20plusRightAtt / att) + "</div><div class='otherstats'>" + y20plusRightCom + "/" + y20plusRightAtt + "&nbsp;for&nbsp;" + y20plusRightY + " yards</div><div class='otherstats'><span class='td'>" + y20plusRightTD + "</span> TD&nbsp;&nbsp;<span class='int'>" + y20plusRightINT + "</span> INT</div>&nbsp"); }

  $("#avgy20plus").html(d3.format("%")(y20plusAtt/ att));


  $("#total").html(d3.format(",")(totalYards));
  if (qb == "Sam Bradford"){$("#qbPic").html("<img src='img/samBradford.png'>");}
  else if (qb == "Shaun Hill"){$("#qbPic").html("<img src='img/shaunHill.png'>");}
  else 
    {$("#qbPic").html("<img src='img/vikingsLogo.png'>");}
  
  $("#qbDude").html(qb);

  $("#td").html(td);
  $("#int").html(interceptions);
  $("#att").html(att);
  $("#com").html(com);

  $('.td').each(function(i, obj) {
    if ($(this).text() > 0) { $(this).parents(".bar").addClass("touchdown"); }
  });
  $('.int').each(function(i, obj) {
    if ($(this).text() > 0) { 
     if ($(this).parents(".bar").hasClass("touchdown")) { $(this).parents(".bar").removeClass("touchdown"); $(this).parents(".bar").addClass("both") }
     else { $(this).parents(".bar").addClass("interception"); }
    }
  });
}

function buildWeeks(){
  var thisweek = 0;
  for (var i=0; i < dataP.length; i++){
    if (dataP[i].week != thisweek){
    $("ul.dropdown").append("<li class='step' index='" + dataP[i].week + "'>Week " + dataP[i].week + " " + dataP[i].homeaway + " " + dataP[i].opponent + "&nbsp;for&nbsp;" + dataP[i].score + " " + dataP[i].winner + "</li>");
    thisweek = dataP[i].week;
    $("#topweek").html("Week " + dataP[i].week + " " + dataP[i].homeaway + " " + dataP[i].opponent + "&nbsp;for&nbsp;" + dataP[i].score + " " + dataP[i].winner);
    }
  }

  $(".step").click(function() {
  var week = Number($(this).attr("index"));
  crunchPassing(week);
  });

      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });

}

buildWeeks();

crunchPassing(dataP[dataP.length-1].week);

$(".bar").hover(function() {
  $(".otherstats").hide();
  $(this).find(".otherstats").show();
});

$(".bar").mouseleave(function() {
  $(".otherstats").hide();
});


});
},{}]},{},[1])