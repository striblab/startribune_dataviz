(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

// d3.json('./data/timeline.json', function(error, dataLoad) {
d3.json('http://googlescript.startribune.com/?macro=AKfycbw_cqdXZADky_zHS3pi9aBL2S3-514vlxJkcnv5TJ1z9sxCqPY&id=1_XVZfr5kc9uC38uSqKZH4ZV5t92W2XlknQf0L_7XVtg&sheet=events', function(error, dataLoad) {

var data = dataLoad.events;

//GENERATE TIMELINE MARKUP POPULATED WITH VARIABLES
function markup(date,title,description,media){

	var markupString = "<div class='showBlock'><div class='date'>" + title + "</div><div class='title'>" + date + "</div></div><div class='hideBlock'><div class='chatter'>" + description + "</div><div class='media'>" + media + "</div></div>";

	return markupString;

}

//https://windowssecrets.com/forums/showthread.php/173765-Word-Macro-to-extract-URLs-from-links

//BUILD THE TIMELINE
function timelineBuild() {
d3.select("#timeline").selectAll(".card")
.data(data.sort(function (a,b) { return d3.ascending(a.index, b.index); })).enter().append("div")
.attr("class",function (d) { return "card"; })
.html(function (d){ 
    return markup(d.date,d.title,d.description,d.media);
});

//TIMELINE SEARCH FILTER
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
        if (txt != '') { $('#results').html(count); }
        else { $('#results').html("all"); }
    });

});
}

timelineBuild();

});
},{}]},{},[1])