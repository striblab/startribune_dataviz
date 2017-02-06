d3.json("./data/absentee_students.json", function(error, dataLoad) {
d3.json("./data/chatter.json", function(error, dataLoadC) {

var data = dataLoad.rates;
var dataChatter = dataLoadC.text;

$(".thisSwitch a").click(function() {


});

buildGrid("K");
buildGrid(1);
buildGrid(2);
buildGrid(3);
buildGrid(4);
buildGrid(5);
buildGrid(6);
buildGrid(7);
buildGrid(8);
buildGrid(9);
buildGrid(10);
buildGrid(11);
buildGrid(12);

$(document).tooltip();

function buildGrid(grade){

d3.select("#g" + grade).selectAll(".block")
.data(data.filter(function(d){ return d.grade == grade; })).enter().append("div")
// .call(d3.helper.tooltip(function(d, i){
//         return "tips";
// }))
.attr("title",function (d) { return Math.round(d.pct) + "% " + String(d.race).toLowerCase() + "s absent in Grade " + d.grade; })
.attr("id",function (d) { return d.race + "_" + d.grade; })
.attr("class",function (d) { 

  var colorClass = "";

  if (d.race == "Black"){
    if (d.pct > 50) { colorClass = "gray6"; }
    else if (d.pct > 40) { colorClass = "gray5"; }
    else if (d.pct > 30) { colorClass = "gray4"; }
    else if (d.pct > 20) { colorClass = "gray3"; }
    else if (d.pct > 10) { colorClass = "gray2"; }
    else if (d.pct > 0) { colorClass = "gray1"; }
  }
  if (d.race == "Native"){
    if (d.pct > 50) { colorClass = "gray6"; }
    else if (d.pct > 40) { colorClass = "gray5"; }
    else if (d.pct > 30) { colorClass = "gray4"; }
    else if (d.pct > 20) { colorClass = "gray3"; }
    else if (d.pct > 10) { colorClass = "gray2"; }
    else if (d.pct > 0) { colorClass = "gray1"; }
  }
  if (d.race == "Hispanic"){
    if (d.pct > 50) { colorClass = "gray6"; }
    else if (d.pct > 40) { colorClass = "gray5"; }
    else if (d.pct > 30) { colorClass = "gray4"; }
    else if (d.pct > 20) { colorClass = "gray3"; }
    else if (d.pct > 10) { colorClass = "gray2"; }
    else if (d.pct > 0) { colorClass = "gray1"; }
  }
  if (d.race == "Asian"){
    if (d.pct > 50) { colorClass = "gray6"; }
    else if (d.pct > 40) { colorClass = "gray5"; }
    else if (d.pct > 30) { colorClass = "gray4"; }
    else if (d.pct > 20) { colorClass = "gray3"; }
    else if (d.pct > 10) { colorClass = "gray2"; }
    else if (d.pct > 0) { colorClass = "gray1"; }
  }
  if (d.race == "White"){
    if (d.pct > 50) { colorClass = "gray6"; }
    else if (d.pct > 40) { colorClass = "gray5"; }
    else if (d.pct > 30) { colorClass = "gray4"; }
    else if (d.pct > 20) { colorClass = "gray3"; }
    else if (d.pct > 10) { colorClass = "gray2"; }
    else if (d.pct > 0) { colorClass = "gray1"; }
  }  

  var slideClasses = "slide1";

  if (d.grade == "K" || d.grade == 1 || d.grade == 9 || d.grade == 10 || d.grade == 11 || d.grade == 12) { slideClasses += " slide2 "; }
  if (d.race == "Black" || d.race == "Hispanic" || d.race == "Native") { slideClasses += " slide3 "; }

  return slideClasses + colorClass + " block"; 

})
.html(function (d){ 
  return " ";});

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

}

var timer = [];

function play(j,timeout){
 timer[j] = window.setTimeout(function() { playback(j); }, timeout); 
}

function stop(){
  for (var i=0; i<dataChatter.length; i++){
     clearTimeout(timer[i]);
  }
}

function playback(index){
    $("#headline").text(dataChatter[index].headline)
    $("#text").text(dataChatter[index].text)
    $(".trackDot").removeClass("current");
    $("#d" + index).addClass("current");

    $(".slide1, .slide2, .slide3, .slide4").addClass("fadein, fadeout");
    $(".slide1, .slide2, .slide3, .slide4").addClass("fadeout");
    $(".slide" + (index + 1)).removeClass("fadeout");
}

  playback(0);

  $("#info").show();

var index = 0;
$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             for (var j=0; j<data.length; j++){ play(j,j*3300); if (index < 4) { index++; } }
         }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$(".previous").click(function() {
  if (index > 0) {
  index--;
  stop();
  playback(index);
}
  });

$(".next").click(function() {
  if (index < 4) {
  stop();
  index++;
  playback(index);
}
  });

$(".trackDot").click(function() {
  $("#toggle").attr("class", "play myButton2");
  $("#toggle").html("&#9658;");
  $(".trackDot").removeClass("current");
  $(this).addClass("current");
  stop();
  index = Number($(this).attr("index"));
  playback(Number($(this).attr("index")));
});

});
});