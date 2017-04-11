var toggle = "p1";

$(".metroSwitch").click(function() {
  $(".metroSwitch").removeClass("selected");
  $(this).addClass("selected");
  $(".map").hide();
  $(".chatter").hide();
  $("#" + $(this).attr("data")).show();
  $("#" + $(this).attr("data") + "Chatter").show();
});

d3.json("./data/aum.json", function(error, json) {

var data = json.countiesAll;

var aspect = 800 / 500, chart = $("#map svg");
var aspect2 = 800 / 500, chart2 = $("#country svg");

var midwestLoad = false;

$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  var targetWidth2 = chart2.parent().width(); 
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
  chart2.attr("width", targetWidth2);   
  chart2.attr("height", targetWidth2 / aspect2);
});

$(".hSort").click(function() {
  $(".hSort").removeClass("selected");
  $(this).addClass("selected");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#table",data,$(this).attr("data"),sorted);
});

$(".district").click(function() {
  $(".district").removeClass("selected");
  $(this).addClass("selected");
});


//SELECTION TABLES
function tableSort(container,data,column,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
          if (column == "county") { 
        if (sorted == "descend") { return d3.descending(a.county, b.county); }
        if (sorted == "ascend") { return d3.ascending(a.county, b.county); }
     }
          if (column == "state") { 
        if (sorted == "descend") { return d3.descending(a.state, b.state); }
        if (sorted == "ascend") { return d3.ascending(a.state, b.state); }
     }
          if (column == "aum25") { 
        if (sorted == "descend") { return d3.descending(a.aum25, b.aum25); }
        if (sorted == "ascend") { return d3.ascending(a.aum25, b.aum25); }
     }
          if (column == "aum75") { 
        if (sorted == "descend") { return d3.descending(a.aum75, b.aum75); }
        if (sorted == "ascend") { return d3.ascending(a.aum75, b.aum75); }
     }
    })
    .transition().duration(500);
}

function tableBuild(container,data,index){

d3.select(container).selectAll(".card")
.data(data).enter().append("div")
.attr("class","card")
.attr("fips",function (d){ return d.FIPS; })
.html(function (d){
  var p25, p75 = 0;

  if (d.aum25 != 0) { 
    p25 = d3.format("+")(Math.round(d.aum25 - 42)); 
    p75 = d3.format("+")(Math.round(d.aum75 - 61)); 
  } 
  else { 
    p25 = "No data available"; 
    p75 = "No data available"; 
  }
  
  // return "<div class='tableCell district' data='county'>" + d.county + "</div><div class='tableCell' data='state'>" + d.state + "</div>";

  return "<div class='tableCell district' data='county'>" + d.county + "<span style='display:none'>" + d.FIPS + "</span></div><div class='tableCell state' data='state'>" + d.state + "</div><div class='tableCell p25'>" + p25 + "</div>";
});

//SEARCH        
        var sd = "South Dakota";
        var nd = "North Dakota";
        var mn = "Minnesota";
        var ia = "Iowa";
        var wi = "Wisconsin";
        var il = "Illinois";
        var ind = "Indiana";
        var mi = "Michigan";
        var oh = "Ohio";

$( document ).ready(function() {
     $('#filter input').keyup(function(i){
        
        $('.card, .card div').hide();
        var txt = $('#filter input').val();
        if (txt == ""){ $('.card, .card div').show(); } 
        else {
        if (midwestLoad == false){
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
               $(this).find("div").show();
           }
        });
      } else {
            $('.state').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase() || $(this).text().toUpperCase().indexOf(sd.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(nd.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(mn.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(ia.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(wi.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(il.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(ind.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(mi.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(oh.toUpperCase()) != -1) != -1){
               $(this).parent().show();
               $(this).parent().find("div").show();
           }
        });
      }
    }
    });

$("#usfilter").click(function() {
  midwestLoad = false;
 $('.card, .card div').show();
})

$("#mwfilter").click(function() {
    midwestLoad = true;
    $('.card, .card div').hide();
        $('.state').each(function(){
           if($(this).text().toUpperCase().indexOf(sd.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(nd.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(mn.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(ia.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(wi.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(il.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(ind.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(mi.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(oh.toUpperCase()) != -1){
               $(this).parent().show();
               $(this).parent().find("div").show();
      }
});
        });
  });

$(".district").click(function() {
 $(".district").removeClass("selected");
 $(this).addClass("selected");

  $(".districtName").html($(this).text());

  jQuery.fn.d3Click = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Down = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Up = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

    // clicked2();
    var findDistrict = ($(this).text() + "_us").replace(new RegExp(" ", "g"),"-");
    var findDistrictMN = ($(this).text() + "_mn").replace(new RegExp(" ", "g"),"-");
    var findDistrictMW = ($(this).text() + "_country").replace(new RegExp(" ", "g"),"-");

    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    $("[id='" + findDistrict.replace(new RegExp(" ", "g"),"-") + "']").d3Click();
    // $("[id='" + findDistrictMN.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    // $("[id='" + findDistrictMN.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    // $("[id='" + findDistrictMN.replace(new RegExp(" ", "g"),"-") + "']").d3Click();
    $("[id='" + findDistrictMW.replace(new RegExp(" ", "g"),"-") + "']").d3Down();
    $("[id='" + findDistrictMW.replace(new RegExp(" ", "g"),"-") + "']").d3Up();
    $("[id='" + findDistrictMW.replace(new RegExp(" ", "g"),"-") + "']").d3Click();
});

   $('.p25').each(function() {
    var num = $(this).text();
    if (num != "No data available"){
      var color_scale = d3.scale.linear().domain([-10, 0, 20]).range(['#F21919', '#F1D9CB', '#57B857']);
      if (num < -15 || num > 15) { var textcolor = "#fff"; }
      else  { var textcolor = "#000"; }
      $(this).css('color', textcolor);
      $(this).css('background-color', color_scale(num));
     
    }
    });
   $('.p75').each(function() {
    var num = $(this).text();
    if (num != "No data available"){
      if (num >= 20) { $(this).addClass("posDark"); $(this).html(num); }
      else if (num >= 10) { $(this).addClass("posMid"); $(this).html(num); } 
      else if (num > 0) { $(this).addClass("posLight"); $(this).html(num); }
      else if (num <= -20) { $(this).addClass("negDark"); $(this).html(num); }
      else if (num <= -10) { $(this).addClass("negMid"); $(this).html(num); }
      else if (num < 0) { $(this).addClass("negLight"); $(this).html(num); }
      else if (num == 0) { $(this).addClass("neutral"); $(this).html(num); }
    }
    });
}


//MAPS
function mapReshade(container, shape, subject, race, dataCompare, visible, demoData, demoData2) {
d3.selectAll(container + " svg g path")
      .data(us.features)
      .style("opacity",visible)
      .attr("class", function(d){
        return "orange2";
        });
}

function mapColor(d, subject, dataCompare){
  for (var i=0; i < data.length; i++){
    if (d.properties.GEOID == data[i].FIPS || ("27" + String(d.properties.COUNTYFIPS)) == String(data[i].FIPS)){
      var points = data[i].aum25 - 42;
      if (data[i].aum25 == null || data[i].aum25 == 0 || data[i].aum25 == "undefined") { return "#fff"; }
      else { 
        var color_scale = d3.scale.linear().domain([-10, 0, 20]).range(['#F21919', '#F1D9CB', '#57B857']);
        return color_scale(points);
      }

      // break;
      // else if (points >= 15 ) { return "posDark"; }
      // else if (points >= 10) { return "posMid"; }
      // else if (points > 0) { return "posLight"; }
      // else if (points <= -15) { return "negDark"; }
      // else if (points <= -10) { return "negMid"; }
      // else if (points < 0) { return "negLight"; }
      // break;
      // return color_scale(d['properties']['CENSUSAREA']);
    }
  }
    return "#fff";
}

function mapTips(d, subject, dataCompare){
  for (var i=0; i < data.length; i++){
    if (d.properties.GEOID == data[i].FIPS || ("27" + String(d.properties.COUNTYFIPS)) == String(data[i].FIPS)){
      if (data[i].aum25 != 0) { 
       if (d.properties.hasOwnProperty('NAME')) { var name = d.properties.NAME; }
       else if (d.properties.hasOwnProperty('COUNTYNAME')) { var name = d.properties.COUNTYNAME; }
        var points = Math.round(data[i].aum25 - 47); 
        if (Math.round(data[i].aum25) < -15 || Math.round(data[i].aum25) > 15) { var textcolor = "#fff"; }
        else  { var textcolor = "#000"; }
        return "<div style='font-weight:900;'>" + name + " County, " + data[i].state + "</div><div>" + Math.round(data[i].aum25) + " average upward mobility score</div><div style='background-color:" + mapColor(d, subject, dataCompare) + "; color:" + textcolor + "'>" + d3.format("+")(points) + " from average</div>";
      } else {
         return "<div style='font-weight:900;'>" + d.properties.NAME + " County, " + data[i].state + "</div><div>No data available</div>";
      }
    }
  }
}

function mapBuild(container, boxContainer, chartContainer, shape, race, geo, dataCompare, index, visible) {

if (geo=="country") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(1000).translate([400, 260]); }
else if (geo=="us") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(2000).translate([330, 430]); }
else if (geo=="mn") { var width = 350, height = 500, centered; var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var width = 350, height = 350, centered; var projection = d3.geo.mercator().scale([16500]).center([-92.403259,44.988113]); }

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
d3.json("shapefiles/us_states_topo.json", function(error, st) {

  var marks = [{long:-93.266667, lat:44.983333, name:"Minneapolis"},{long:-74.0059, lat:40.7127, name:"New York"},{long: -122.416667, lat: 37.783333, name:"San Francisco"},{long: -87.955833, lat: 43.052222, name:"Milwaukee"},{long: -87.684722, lat: 41.836944, name:"Chicago"},{long: -93.620833, lat: 41.590833, name:"Des Moines"},{long: -83.045833, lat: 42.331389, name:"Detroit"},{long: -86.15, lat: 39.766667, name:"Indiana"},{long: -96.731667, lat: 43.536389, name:"Sioux Falls"},{long: -118.25, lat: 34.05, name:"Los Angeles"},{long: -80.208889, lat: 25.775278, name:"Miami"},{long: -95.383056, lat: 29.762778, name:"Houston"},{long: -96.796667, lat: 32.775833, name:"Dallas"},{long: -71.063611, lat: 42.358056, name:"Boston"}];

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .attr("id", function(d) { var str = d.properties.NAME + "" + d.properties.GEOID + "_" + geo; return str.replace(new RegExp(" ", "g"),"-"); })
      .style("fill", function(d){
         return mapColor(d, race, dataCompare);
      })
      .on("mousedown", function(d, i){
        for (var i=0; i < data.length; i++){
        if (d.properties.GEOID == data[i].FIPS || ("27" + String(d.properties.COUNTYFIPS)) == String(data[i].FIPS)){
          $("#districtName").html(d.properties.NAME + " County, " + data[i].state);
        
        if (d.properties.hasOwnProperty('NAME')) { var name = d.properties.NAME; var state = data[i].state; }
        else if (d.properties.hasOwnProperty('COUNTYNAME')) { var name = d.properties.COUNTYNAME; var state = "Minnesota";  }

        var txt = name;
        var txt2 = state;
        $('.card, .card div').hide();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).text().toUpperCase().indexOf(txt2.toUpperCase()) != -1){
               $(this).show();
               $(this).find("div").show();
           }
          })
        }
      }
      })
      .style("stroke-width", ".5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

  svg.selectAll("circle")
    .data(marks)
    .enter()
    .append("circle")
    .attr('class','mark')
    .attr('width', 10)
    .attr('height', 10)
    .attr("r", "1.3px")
    .attr("fill", "#333")
    .attr("transform", function(d) {return "translate(" + projection([d.long,d.lat]) + ")";});

    svg.insert("path", ".graticule")
      .datum(topojson.mesh(st, st.objects.us_states, function(a, b) { return a !== b; }))
      .attr("class", "state-boundary")
      .style("stroke-width", "1.2px")
      .attr("d", path);

  svg.selectAll("text")
    .data(marks)
    .enter()
    .append("text")
    .attr('class','city-label')
    .attr("transform", function(d) {return "translate(" + projection([d.long+.23,d.lat-.09]) + ")";})
    .text(function(d) { return " " + d.name; });



});
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

$(".zoom").click(function() {
  clicked2();
  $('#filter input').val("");
  $("#districtName").html("Midwest");
  $(".district").removeClass("selected");
  $('.card, .card div').show();
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

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
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
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
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

}

function redrawChart(chart,container,subject,data,county,index,year){
  var colorArray = ['#777','#C22A22']; 
  var formatter = d3.format('%');

    d3.select(container + ' svg').datum(chartData(subject,data,county,year)).transition().duration(300).call(chartStuff[index].color(colorArray));
    // chart[index].yAxistickFormat(formatter);
    nv.utils.windowResize(chartStuff[index].update);

}

function chartData(subject,data,county,level) {

 var cq1_pq1, cq2_pq1, cq3_pq1, cq4_pq1, cq5_pq1, cq1_pq2, cq2_pq2, cq3_pq2, cq4_pq2, cq5_pq2, cq1_pq3, cq2_pq3, cq3_pq3, cq4_pq3, cq5_pq3, cq1_pq4, cq2_pq4, cq3_pq4, cq4_pq4, cq5_pq4, cq1_pq5, cq2_pq5, cq3_pq5, cq4_pq5, cq5_pq5 = 0;

  for (var i=0; i<data.length; i++){
    if (data[i].FIPS == county){
      cq1_pq1 = data[i].cq1_pq1;
      cq2_pq1 = data[i].cq2_pq1;
      cq3_pq1 = data[i].cq3_pq1;
      cq4_pq1 = data[i].cq4_pq1;
      cq5_pq1 = data[i].cq5_pq1;
      cq1_pq2 = data[i].cq1_pq2;
      cq2_pq2 = data[i].cq2_pq2;
      cq3_pq2 = data[i].cq3_pq2;
      cq4_pq2 = data[i].cq4_pq2;
      cq5_pq2 = data[i].cq5_pq2;
      cq1_pq3 = data[i].cq1_pq3;
      cq2_pq3 = data[i].cq2_pq3;
      cq3_pq3 = data[i].cq3_pq3;
      cq4_pq3 = data[i].cq4_pq3;
      cq5_pq3 = data[i].cq5_pq3;
      cq1_pq4 = data[i].cq1_pq4;
      cq2_pq4 = data[i].cq2_pq4;
      cq3_pq4 = data[i].cq3_pq4;
      cq4_pq4 = data[i].cq4_pq4;
      cq5_pq4 = data[i].cq5_pq4;
      cq1_pq5 = data[i].cq1_pq5;
      cq2_pq5 = data[i].cq2_pq5;
      cq3_pq5 = data[i].cq3_pq5;
      cq4_pq5 = data[i].cq4_pq5;
      cq5_pq5 = data[i].cq5_pq5;
      break;
    }
  };

if (toggle == "p1"){
  var pct1 = cq1_pq1;
  var pct2 = cq2_pq1;
  var pct3 = cq3_pq1;
  var pct4 = cq4_pq1;
  var pct5 = cq5_pq1;  
}
else if (toggle == "p2"){
  var pct1 = cq1_pq2;
  var pct2 = cq2_pq2;
  var pct3 = cq3_pq2;
  var pct4 = cq4_pq2;
  var pct5 = cq5_pq2;  
}
else if (toggle == "p3"){
  var pct1 = cq1_pq3;
  var pct2 = cq2_pq3;
  var pct3 = cq3_pq3;
  var pct4 = cq4_pq3;
  var pct5 = cq5_pq3;  
}
else if (toggle == "p4"){
  var pct1 = cq1_pq4;
  var pct2 = cq2_pq4;
  var pct3 = cq3_pq4;
  var pct4 = cq4_pq4;
  var pct5 = cq5_pq4;  
}
else if (toggle == "p5"){
  var pct1 = cq1_pq5;
  var pct2 = cq2_pq5;
  var pct3 = cq3_pq5;
  var pct4 = cq4_pq5;
  var pct5 = cq5_pq5;  
}


  return [{
        "key": "PCT",
        "values": [
          { 
            "label" : "5th" ,
            "value" : pct5
          },
          { 
            "label" : "4th" ,
            "value" : pct4
          },
          { 
            "label" : "3rd" ,
            "value" : pct3
          },
          { 
            "label" : "2nd" ,
            "value" : pct2
          },
          { 
            "label" : "1st" ,
            "value" : pct1
          }]
      }]

}

  tableBuild("#table",data,0)

  mapBuild("#map", "#districtName", "#chart", "us_states.json", "economics", "us", data, 2, 1);
  mapBuild("#map", "#districtName", "#chart", "midwest_counties.json", "economics", "us", data, 2, 1);
  // mapBuild("#mapMN", "#districtName", "#chart", "counties.json", "economics", "mn", data, 2, 1);
  mapBuild("#country", "#districtName", "#chart", "us_counties.json", "economics", "country", data, 2, 1);

  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);
  var targetWidth2 = chart2.parent().width();   
  chart2.attr("width", targetWidth2);
  chart2.attr("height", targetWidth2 / aspect2);

});