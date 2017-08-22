$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

d3.json('./data/diff.json', function(error, dataLoad) {

d3.json('./shapefiles/counties.json', function(error, counties) {

var data = dataLoad.diff;

function mapTips(d, subject, dataCompare){

if (subject == "change"){

    var color = "";
    var change = 0;

           for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == dataCompare[i].county) {
           change = dataCompare[i].cabin_share_diff;
           if (dataCompare[i].cabin_share_diff >= 0.10) { color = "gray5"; }
           else if (dataCompare[i].cabin_share_diff >= 0.05) { color = "gray4"; }
           else if (dataCompare[i].cabin_share_diff >= 0.02) { color = "gray3"; }
           else if (dataCompare[i].cabin_share_diff >= 0.01) { color = "gray2"; }
           else if (dataCompare[i].cabin_share_diff > 0) { color = "gray1"; }
           else if (dataCompare[i].cabin_share_diff == 0) { color = "none"; }
           else if (dataCompare[i].cabin_share_diff <= -0.05) { color = "red5"; }
           else if (dataCompare[i].cabin_share_diff <= -0.02) { color = "red3"; }
           else if (dataCompare[i].cabin_share_diff < 0) { color = "red1"; }
          }
         }

    return "<div class='districtName'>" + d.properties.COUNTYNAME + " County</div><div class='" +  color + "'>" + d3.format("+%")(change) + " change</div>"      

}
else if (subject == "portion") {

    var color = "";
    var change = 0;

           for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == dataCompare[i].county) {
           change = dataCompare[i].cabin_share_2016;
           if (dataCompare[i].cabin_share_2016 >= 0.5) { color = "gray5"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.3) { color = "gray4"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.2) { color = "gray3"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.1) { color = "gray2"; }
           else if (dataCompare[i].cabin_share_2016 > 0) { color = "gray1"; }
          }
         }

    return "<div class='districtName'>" + d.properties.COUNTYNAME + " County</div>Cabins are <span class='" +  color + "'>" + d3.format("%")(change) + "</span> of residential property taxes"      

}

}

function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index) {

var width = 320,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .attr("class", function(d){

        if (subject == "change"){ 
         for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == dataCompare[i].county) {
           if (dataCompare[i].cabin_share_diff >= 0.10) { return "gray5"; }
           else if (dataCompare[i].cabin_share_diff >= 0.05) { return "gray4"; }
           else if (dataCompare[i].cabin_share_diff >= 0.02) { return "gray3"; }
           else if (dataCompare[i].cabin_share_diff >= 0.01) { return "gray2"; }
           else if (dataCompare[i].cabin_share_diff > 0) { return "gray1"; }
           else if (dataCompare[i].cabin_share_diff == 0) { return "none"; }
           else if (dataCompare[i].cabin_share_diff <= -0.05) { return "red5"; }
           else if (dataCompare[i].cabin_share_diff <= -0.02) { return "red3"; }
           else if (dataCompare[i].cabin_share_diff < 0) { return "red1"; }
          }
         }
       } else if (subject == "portion"){
         for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == dataCompare[i].county) {
           if (dataCompare[i].cabin_share_2016 >= 0.5) { return "gray5"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.3) { return "gray4"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.2) { return "gray3"; }
           else if (dataCompare[i].cabin_share_2016 >= 0.1) { return "gray2"; }
           else if (dataCompare[i].cabin_share_2016 > 0) { return "gray1"; }
           else if (dataCompare[i].cabin_share_2016 == 0) { return "none"; }
          }
         }      
       }
        })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, subject, dataCompare);
      }));

  g.append("path")
      .attr("id", "state-borders")
      .attr("d", path);

});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .switch, #close, .mapSwitch").click(function() {
  clicked2();
  $("#filter input").val("");
  $(".district").removeClass("selected");
  $("#infobox").hide();
  d3.selectAll(".map rect").classed('faded', false); 
  d3.selectAll(".map rect").classed('active', false); 
  $(".rightSide").show();
});

$(".mapSwitch").click(function() {
  $("#filter input").val("");
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  d3.selectAll("#mapMetro path, #mapState path")
      .classed("faded", false)
      .classed("active", false);

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function (d) { return d === centered; });
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function (d) { return d === centered; });
}

}

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

//POPULATE
  mapBuild("#map", "#infobox", "#chart", "counties.json", "change", "mn", data, 0);
  mapBuild("#map2", "#infobox", "#chart", "counties.json", "portion", "mn", data, 0);

  $('.scrollToTop').click(function(){
    $('#countyList').animate({scrollTop : 0},800);
    return false;
  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
          if (candidate == "county") { 
        if (sorted == "descend") { return d3.descending(a.county, b.county); }
        if (sorted == "ascend") { return d3.ascending(a.county, b.county); }
     }
          if (candidate == "cabin_share_2016") { 
        if (sorted == "descend") { return d3.descending(a.cabin_share_2016, b.cabin_share_2016); }
        if (sorted == "ascend") { return d3.ascending(a.cabin_share_2016, b.cabin_share_2016); }
     }
           if (candidate == "cabin_share_diff") { 
        if (sorted == "descend") { return d3.descending(a.cabin_share_diff, b.cabin_share_diff); }
        if (sorted == "ascend") { return d3.ascending(a.cabin_share_diff, b.cabin_share_diff); }
     }
    })
    .transition().duration(500);
}

function tableBuild() {
d3.select("#countyList").selectAll(".card")
.data(data.sort(function (a,b) { return d3.descending(a.cabin_share_2016, b.cabin_share_2016); })).enter().append("div")
.attr("class",function (d) { return "card"; })
.html(function (d){ 
  var color_scale = d3.scale.linear().domain([0, 0.25, 0.5]).range(['#dddddd', '#969696', '#252525']);
  var color = color_scale(d.cabin_share_2016);

  var color_scale2 = d3.scale.linear().domain([-0.05, 0, 0.10]).range(['#9C0004', '#dddddd', '#252525']);
  var color2 = color_scale2(d.cabin_share_diff);

    return "<div class='tableCell county'>" + d.county + "</div><div class='tableCell county pct' style='background-color:" + color + ";'>" + d3.format("%")(d.cabin_share_2016) + "</div><div class='tableCell cabin_share_diff pct' style='background-color:" + color2 + ";'>" + d3.format("%")(d.cabin_share_diff) + "</div>";
});


//SEARCH FILTER TABLE
  $( document ).ready(function() {
    $('#filter_box').on('keyup search', function(e){
        $('.card').hide();
        var txt = $('#filter_box').val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.card:visible').length;
        $('#results').html(count);
    });

      $(".switch").click(function() {
        $(".switch").removeClass("selected");
        $(this).addClass("selected");
        $('.card').hide();
        $('.' + $(this).attr("data")).show();
      });

      });
    $(".hSort").click(function() {
      $(".hSort").removeClass("selected");
      $(this).addClass("selected");
      if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
      else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
      tableSort("#countyList",null,data,$(this).attr("data"),sorted);
    });

// });

}

tableBuild();


});
});