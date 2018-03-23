d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=mn_shootings", function(error, dataLoadShootings) {
d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=yearChart", function(error, dataLoadYear) {
d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=raceChart", function(error, dataLoadRace) {
d3.json("http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=viz_chatter", function(error, dataLoadChatter) {
dataShootings = dataLoadShootings.mn_shootings;
dataYear = dataLoadYear.yearChart;
dataRace = dataLoadRace.raceChart;
dataChatter = dataLoadChatter.viz_chatter;
var mentalLoad = false;

$('#bigCount').html(dataShootings.length);

$('.scrollToTop').click(function(){
    $('#deathsTable').animate({scrollTop : 0},800);
    return false;
  });
function addBoxes() {
  $('#deathsTable .card').each(function(i, obj) {
    $(this).addClass("lightbox");
  });
  $('#deathsTable .card.lightbox').each(function(i, obj) {
    $(this).attr("data-featherlight","#" + $(this).attr("id"));
  }); 
}
$('#mainFilters').hide();
$(".switch").click(function() {
  $(".switch").removeClass("selected");
  $(".bigswitch").removeClass("selected");
  $('#mainFilters').show();
  $('#clickyStuff').hide();
  $(this).addClass("selected");
  $("#filterWord").text($(this).attr("data"));
  $(".chartTitle, .chatter").hide();
  $(".filterSection").hide(); 
  $("." + $(this).attr("data")).show();
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
});
$(".bigswitch").click(function() {
  $(".bigswitch").removeClass("selected");
  $(this).addClass("selected");
  $(".switch").removeClass("selected");
  $('#mainFilters').hide();
  $('#clickyStuff').show();
});
$('#bigNumber').html(dataShootings.length);
$('.results').html(dataShootings.length);
//POPULATE TABLE
d3.select("#deathsTable").selectAll(".card")
.data(dataShootings).enter().append("div")
.attr("id",function (d) { return d.doch; })
.attr("class","card")
.html(function (d){ 
  var linkString = "";
  var mentalStatus = "<span class='hideThis'>" + d.Mental + "</span>";
  if (d.Mental == "Yes") { mentalStatus = "<span class='hideThis'>" + d.Mental + "</span><div class='mentalSwatch'>Mental health issues</div>"; }
  if (d.URL != "#") { linkString = "<div class='url'><a href='" + d.URL + "' target='new_'>More coverage</a></div>"; }
  return "<div class='leftSide'><div class='name'>" + d.FirstName + " " + d.LastName + " " + d.Suffix + "</div><div class='stats'>" + d.AgeYears + " &#8226; " + d.Occupation + "</div><div class='description_chatter'>" + d.StribNarrative + "</div><div class='stats'>" + d.Race + " &#8226; " + d.Gender +  " &#8226; " + d.ResCity + "</div><div class='location'>Incident: " + d3.time.format("%m-%d-%Y")(new Date(d.DeathDate)) + " &#8226; Location: " + d.InjuryCity + " &#8226; Agency: " + d.Agency + "</div><div class='ruling'>Weapon: " + d.Weapon + " &#8226 Ruling: " + d.MannerDeath + "</div>" + mentalStatus + "</div><div class='rightSide'><div class='photo'><img src='http://stmedia.stimg.co/" + d.photo + "?h=155&w=150&fit=crop&bg=999&crop=faces' /></div></div><div class='weaponType'>" + d.WeaponCategory + "</div><div class='region'>" + d.Region + "</div><div class='break'></div>" + linkString + "<div class='readmore'>Read more</div>";});
addBoxes();
$(".card").on("click" ,function(){
  $(document).bind('DOMNodeInserted', function(event) {
$(".featherlight-content .card").removeClass("lightbox");
$(".featherlight-content .card").removeClass("featherlight-inner");
$(".featherlight-content .card").attr("data-featherlight","");
});
});
  $(".url").on("click" ,function(){
    window.open($(this).find("a").attr("href"), '_new');
    return false;
  });
function spitDots(year){
d3.select("#y" + year).selectAll(".dot")
.data(dataShootings.filter(function(d){ return d.year == year; }).sort(function(a, b) { return d3.ascending(a.Mental, b.Mental); })).enter().append("div")
.attr("class", "dot")
.attr("first", function (d){ return d.FirstName;})
.attr("last", function (d){ return d.LastName;})
.attr("gender", function (d){ return " " + d.Gender;})
.attr("age", function (d){ return d.AgeYears;})
.attr("year", function (d){ return d.year;})
.attr("race", function (d){ return d.Race;})
.attr("city", function (d){ return d.InjuryCity;})
.attr("occupation", function (d){ return d.Occupation;})
.attr("manner", function (d){ return d.MannerDeath;})
.attr("region", function (d){ return d.Region;})
.attr("weapon", function (d){ return d.WeaponCategory;})
.attr("mental", function (d){ return d.Mental;})
.on("mousedown", function(d, i){ 
        $(".dot").removeClass("faded, active");
        $(".dot").addClass("faded");
        d3.select(this).classed("faded", false);
        d3.select(this).classed("active", true);
        $('.card').hide();
        var txt = d.FirstName + " " + d.LastName;
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  })
.html(function (d){ return "";})
.call(d3.helper.tooltip(function(d, i){
  var mentalStatus = "";
  if (d.Mental == "Yes") { mentalStatus = "<div class='mentallabel' style='color:#999;font-weight:900;font-size:.8em;'>MENTAL HEALTH ISSUES</div>"; }
    return "<div class='name'>" + d.FirstName + " " + d.LastName + "</div>" + mentalStatus;
}));
}
$(".zoom").click(function() {
  $('.card').show();
  var count = $('.card:visible').length;
  $('.results').html(count);
  $('#mainFilters').hide();
  $(".dot").removeClass("faded, active");
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  if (mentalLoad == true) { 
  $(".bigswitch, .switch").removeClass("selected");
  $("#mentalB_m, #mentalB").addClass("selected");
  $('.dot').each(function(i, obj) {
    if ($(this).attr("mental") == "Yes") { $(this).addClass("mentalSwatch"); }
  });
       $('#filter_box').val("");
    $('.card').hide();
        var txt = "Yes";
        $('.hideThis').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
 } else {
  $(".bigswitch, .switch").removeClass("selected");
  $("#all_m, #all").addClass("selected"); 
  d3.selectAll(".dot").classed("mentalSwatch", true);
 }
});
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
            tooltipDiv.style('left', (absoluteMousePos[0] - 180)+'px')
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
            tooltipDiv.style('left', (absoluteMousePos[0] - 180)+'px')
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
for (var i=2000; i <= 2018; i++){ spitDots(i); }
//SEARCH FILTER TABLE
  // $( document ).ready(function() {
     $('#filter_box').keyup(function(i){
      if (mentalLoad == true){
        $('#filter_box').attr("placeholder","Search list of mental health deaths by name, year or keyword");
        $('.card').hide();
        var findIt = "Yes";
        var txt = $('#filter_box').val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).text().toUpperCase().indexOf(findIt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
      } else {
        $('#filter_box').attr("placeholder","Search list of all deaths by name, year or keyword");
        $('.card').hide();
        var txt = $('#filter_box').val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
      }
    });
// });
$.getJSON('shapefiles/counties.json', function(counties) {
//FILTER STUFF
$( "#mainFilters .filter3 a, #mainFilters .filter2 a, #mainFilters .filter a" ).css("background","#fff");
// $(document).bind('DOMNodeInserted', function(event) {
$(".bigDot").on('click',function(){
  $(".bigDot").removeClass("selected");
  $(this).addClass("selected");
});
$(".filter, .filter2, .filter3").on('click',function(){
  $(".bigDot").removeClass("selected");
  $(this).find(".bigDot").addClass("selected");
});
// });
function countStats(target, text){
  if (mentalLoad == true){
 return $(target).filter(function() { return $(this).text().toUpperCase().indexOf(text.toUpperCase()) != -1 && $(this).parent().find(".mentalSwatch").length}).length;
} else {
   return $(target).filter(function() { return $(this).text().toUpperCase().indexOf(text.toUpperCase()) != -1 }).length;
}
}
$(".filter").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  var datapoint = $(this).attr("data");
  $('.dot').each(function(i, obj) {
    if (mentalLoad == true){
      if ($(this).attr("mental") == "Yes"){
      if (datapoint == "WHITE") { if ($(this).attr("race") == "HISPANIC" || $(this).attr("race") == "WHITE") { $(this).addClass("mentalSwatch");  } }
      else if ($(this).attr("gender") == datapoint || $(this).attr("race") == datapoint || $(this).attr("manner") == datapoint) { 
        $(this).addClass("mentalSwatch");  
      }
      }
    } else {
      if (datapoint == "WHITE") { if ($(this).attr("race") == "HISPANIC" || $(this).attr("race") == "WHITE") { $(this).addClass("mentalSwatch");  } }
      else if ($(this).attr("gender") == datapoint || $(this).attr("race") == datapoint || $(this).attr("manner") == datapoint) { 
        $(this).addClass("mentalSwatch");  
      }
    }
  });
   $('#filter_box').val("");
if (mentalLoad == true){
    $('.card').hide();
        var txt = $(this).attr("data");
        var txt2 = $(this).attr("data");
        if (txt == "WHITE") { txt2 = "HISPANIC"; }
        $('.card .stats, .card .ruling').each(function(){
           if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(txt2.toUpperCase()) != -1) && $(this).parent().parent().find(".mentalSwatch").length){
               $(this).parent().parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  } else {
        $('.card').hide();
        var txt = $(this).attr("data");
        var txt2 = $(this).attr("data");
        if (txt == "WHITE") { txt2 = "HISPANIC"; }
        $('.card .stats, .card .ruling').each(function(){
           if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 || $(this).text().toUpperCase().indexOf(txt2.toUpperCase()) != -1)){
               $(this).parent().parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
      }
  });
$(".filter2").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  var datapoint = $(this).attr("data");
  $('.dot').each(function(i, obj) {
    if (mentalLoad == true){
      if ($(this).attr("mental") == "Yes"){
      if ($(this).attr("weapon") == datapoint) { $(this).addClass("mentalSwatch"); }
      }
    } else {
      if ($(this).attr("weapon") == datapoint) { $(this).addClass("mentalSwatch"); }
    }
  });
$('#filter_box').val("");
if (mentalLoad == true){
    $('.card').hide();
        var txt = $(this).attr("data");
        $('.weaponType').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().find(".mentalSwatch").length){
               $(this).parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  } else {
        $('.card').hide();
        var txt = $(this).attr("data");
        $('.weaponType').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
      }
  });
$(".filter3").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  var datapoint = $(this).attr("data");
  $('.dot').each(function(i, obj) {
    if (mentalLoad == true){
      if ($(this).attr("mental") == "Yes"){
      if ($(this).attr("region") == datapoint) { $(this).addClass("mentalSwatch"); }
      }
    } else {
      if ($(this).attr("region") == datapoint) { $(this).addClass("mentalSwatch"); }
    }
  });
   $('#filter_box').val("");
if (mentalLoad == true){
    $('.card').hide();
        var txt = $(this).attr("data");
        $('.region').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().find(".mentalSwatch").length){
               $(this).parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  } else {
        $('.card').hide();
        var txt = $(this).attr("data");
        $('.region').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
      }
  });
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1]; }
  else { return 0; }
}
if ($.urlParam('mental') != 0 ) { 
  var page = $.urlParam('mental');
  if (page = "yes") { 
  $('#filter_box').attr("placeholder","Search list of mental health deaths by name, year or keyword");
  mentalLoad = true;
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
  $(".bigswitch, .switch").removeClass("selected");
  $("#mentalB_m, #mentalB").addClass("selected");
  $(".chatter, .chartTitle").hide();
  $(".mental").show();
  $('.dot').each(function(i, obj) {
    if ($(this).attr("mental") == "Yes") { $(this).addClass("mentalSwatch"); }
  });
     $('#filter_box').val("");
    $('.card').hide();
        var txt = "Yes";
        $('.hideThis').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  } 
} else {
    $(".bigswitch, .switch").removeClass("selected");
    $("#all_m, #all").addClass("selected");
    d3.selectAll(".dot").classed("mentalSwatch", true);
    for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "all") { $(".chatterThing").html(dataChatter[i].chatter) } }
  }
$("#all, #all_m").on('click',function(){
  $('#filter_box').attr("placeholder","Search list of all deaths by name, year or keyword");
        mentalLoad = false;
        $('.card').show();
        var count = $('.card:visible').length;
        $('.results').html(count);
        d3.selectAll(".dot").classed("active", false);
        d3.selectAll(".dot").classed("mentalSwatch", true);
        d3.selectAll(".dot").classed("faded", false);
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "all") { $(".chatterThing").html(dataChatter[i].chatter) } }
  });
$("#mentalB, #mentalB_m").on('click',function(){
  $('#filter_box').attr("placeholder","Search list of mental health deaths by name, year or keyword");
  mentalLoad = true;
  for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
  $(".bigDot").removeClass("selected");
  $("#mentalDot").addClass("selected");
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $('.dot').each(function(i, obj) {
    if ($(this).attr("mental") == "Yes") { $(this).addClass("mentalSwatch"); }
  });
     $('#filter_box').val("");
    $('.card').hide();
        var txt = "Yes";
        $('.hideThis').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
           }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
$("#weaponB").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $(".bigDot").removeClass("selected");
  $("#weaponDot").addClass("selected");
  $('.dot').each(function(i, obj) {
    if (mentalLoad == true) { 
      if ($(this).attr("weapon") == "GUN" && $(this).attr("mental") == "Yes") { 
        $(this).addClass("mentalSwatch"); 
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "weapon_mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
      }
    } else {
      if ($(this).attr("weapon") == "GUN") { $(this).addClass("mentalSwatch"); }
      for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "weapon_all") { $(".chatterThing").html(dataChatter[i].chatter) } }
    }
    
  });
   $('#filter_box').val("");
        $('.card').hide();
        var txt = "GUN";
        $('.weaponType').each(function(){
          if (mentalLoad == true) {
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().find(".mentalSwatch").length){
               $(this).parent().show();
           }
         } else {
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().show();
             }
         }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
$("#raceB").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $(".bigDot").removeClass("selected");
  $("#raceDot").addClass("selected");
    $('.dot').each(function(i, obj) {
    if (mentalLoad == true) { 
      if ($(this).attr("race") == "BLACK" && $(this).attr("mental") == "Yes") { 
        $(this).addClass("mentalSwatch"); 
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "race_mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
      }
    } else {
      if ($(this).attr("race") == "BLACK") { $(this).addClass("mentalSwatch"); }
      for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "race_all") { $(".chatterThing").html(dataChatter[i].chatter) } }
    }
    
  });
 $('#filter_box').val("");
        $('.card').hide();
        var txt = "BLACK";
        $('.card .stats, .card .ruling').each(function(){
          if (mentalLoad == true) {
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().parent().find(".mentalSwatch").length){
               $(this).parent().parent().show();
           }
         } else {
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
             }
         }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
$("#placeB").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $(".bigDot").removeClass("selected");
  $("#placeDot").addClass("selected");
    $('.dot').each(function(i, obj) {
    if (mentalLoad == true) { 
      if ($(this).attr("region") == "Metro" && $(this).attr("mental") == "Yes") { 
        $(this).addClass("mentalSwatch"); 
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "location_mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
      }
    } else {
      if ($(this).attr("region") == "Metro") { $(this).addClass("mentalSwatch"); }
      for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "location_all") { $(".chatterThing").html(dataChatter[i].chatter) } }
    }
    
  });
 $('#filter_box').val("");
        $('.card').hide();
        var txt = "Metro";
        $('.region').each(function(){
          if (mentalLoad == true) {
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().find(".mentalSwatch").length){
               $(this).parent().show();
           }
         } else {
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().show();
             }
         }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
$("#mannerB").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $(".bigDot").removeClass("selected");
  $("#mannerDot").addClass("selected");
    $('.dot').each(function(i, obj) {
    if (mentalLoad == true) { 
      if ($(this).attr("manner") == "HOMICIDE" && $(this).attr("mental") == "Yes") { 
        $(this).addClass("mentalSwatch"); 
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "manner_mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
      }
    } else {
      if ($(this).attr("manner") == "HOMICIDE") { $(this).addClass("mentalSwatch"); }
      for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "manner_all") { $(".chatterThing").html(dataChatter[i].chatter) } }
    }
    
  });
 $('#filter_box').val("");
        $('.card').hide();
        var txt = "HOMICIDE";
        $('.card .stats, .card .ruling').each(function(){
          if (mentalLoad == true) {
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().parent().find(".mentalSwatch").length){
               $(this).parent().parent().show();
           }
         } else {
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
             }
         }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
$("#genderB").on('click',function(){
  d3.selectAll(".dot").classed("faded", false);
  d3.selectAll(".dot").classed("active", false);
  d3.selectAll(".dot").classed("mentalSwatch", false);
  $(".bigDot").removeClass("selected");
  $("#genderDot").addClass("selected");
    $('.dot').each(function(i, obj) {
    if (mentalLoad == true) { 
      if ($(this).attr("gender") == " MALE" && $(this).attr("mental") == "Yes") { 
        $(this).addClass("mentalSwatch"); 
        for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "gender_mental") { $(".chatterThing").html(dataChatter[i].chatter) } }
      }
    } else {
      if ($(this).attr("gender") == " MALE") { $(this).addClass("mentalSwatch"); }
      for (var i=0; i < dataChatter.length; i++){ if (dataChatter[i].category == "gender_all") { $(".chatterThing").html(dataChatter[i].chatter) } }
    }
    
  });
 $('#filter_box').val("");
        $('.card').hide();
        var txt = " MALE";
        $('.card .stats, .card .ruling').each(function(){
          if (mentalLoad == true) {
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1 && $(this).parent().parent().find(".mentalSwatch").length){
               $(this).parent().parent().show();
           }
         } else {
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().parent().show();
             }
         }
        });
        var count = $('.card:visible').length;
        $('.results').html(count);
  });
});
});
});
});
});