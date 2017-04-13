(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// d3.json("./data/overtime.json", function(error, json) {

// var data = json.overtime;

      $(document).ready(function() {

           var eventsTable = $('#events').DataTable( {
           	    responsive: {
        details: {
            type: 'row'
        }
    },
                "bServerSide":false,
                "bProcessing":true,
                "sAjaxDataProp": "feed.entry",
                "order": [[ 3, "desc" ]],
                "oLanguage": {"sSearch": ""},
                "sAjaxSource": "data/overtime.json",
                // https://spreadsheets.google.com/feeds/list/18fLI7k8yU7t9bGGUqGfwm2RJWrVVwKjnm5pg9gtJ0ac/od6/public/values?&alt=json
                "aoColumns": [                 
                    { "mDataProp": "gsx$lastname.$t" },
                    { "mDataProp": "gsx$restname.$t" },
                    { "mDataProp": "gsx$source.$t" },
                    { "mDataProp": "gsx$otgross.$t" },
                    { "mDataProp": "gsx$pctot.$t" },
                    { "mDataProp": "gsx$organization.$t" },
                    { "mDataProp": "gsx$jobtitle.$t" },
                    { "mDataProp": "gsx$grosswages.$t" },
                            ]
            } );

$('.dataTables_filter input').attr("placeholder", "Enter an employee's name or county and click their last name for further information");

        } );

// function tableSpill() {

// d3.select("#events").selectAll(".card")
//   .data(data.sort(function(a,b) {return b.lastname-a.lastname;})).enter().append("div")
//   .attr("class",function(d) { return "card"; })
//   .attr("id",function(d) { return "s" + d.id; })
//   .on("click",function(d){

//   })
//   .html(function(d){ 
//     return "<div class='cell num last'>" + d.lastname + "</div><div class='cell first'>" + d.restname + "</div><div class='cell kill county'>" + d.source + "</div><div class='cell kill wages'>" + d.otgross + "</div><div class='cell orgs'>" + d.organization + "</div><div class='cell kill title'>" + d.jobtitle + "</div><div class='cell kill gross'>" + d.grosswages + "</div>";
//   });

// }

// tableSpill();

// function tableSort(container,party,data,candidate,sorted){
   
//   d3.select(container).selectAll(".card").sort(function(a, b) {
//           if (candidate == "last") { 
//         if (sorted == "descend") { return d3.descending(a.lastname, b.lastname); }
//         if (sorted == "ascend") { return d3.ascending(a.lastname, b.lastname); }
//      }
//           if (candidate == "first") { 
//         if (sorted == "descend") { return d3.descending(a.restname, b.restname); }
//         if (sorted == "ascend") { return d3.ascending(a.restname, b.restname); }
//      }
//            if (candidate == "county") { 
//         if (sorted == "descend") { return d3.descending(a.source, b.source); }
//         if (sorted == "ascend") { return d3.ascending(a.source, b.source); }
//      }
//            if (candidate == "wages") { 
//         if (sorted == "descend") { return d3.ascending(a.otgross, b.otgross); }
//         if (sorted == "ascend") { return d3.descending(a.otgross, b.otgross); }
//      }
//            if (candidate == "orgs") { 
//         if (sorted == "descend") { return d3.ascending(a.organization, b.organization); }
//         if (sorted == "ascend") { return d3.descending(a.organization, b.organization); }
//      }
//            if (candidate == "title") { 
//         if (sorted == "descend") { return d3.ascending(a.jobtitle, b.jobtitle); }
//         if (sorted == "ascend") { return d3.descending(a.jobtitle, b.jobtitle); }
//      }
//            if (candidate == "gross") { 
//         if (sorted == "descend") { return d3.ascending(a.grosswages, b.grosswages); }
//         if (sorted == "ascend") { return d3.descending(a.grosswages, b.grosswages); }
//      }
//     })
//     .transition().duration(500);
// }

// $( document ).ready(function() {
// $('#filter_box').on('keyup search', function(e){
//    $('.card').hide();
//    var txt = $('#filter_box').val();
//    $('.card').each(function(){
//       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
//           $(this).show();
//       }
//    });
//    var count = $('.card:visible').length;
//    $('#results').html(d3.format(",")(count));
// });

// $('.scrollToTop').click(function(){
//     $('#events').animate({scrollTop : 0},800);
//     return false;
//   });

// $(".th").click(function() {
//   $(".th").removeClass("sortSelect");
//   $(this).addClass("sortSelect");
//   if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
//   else if ($(this).hasClass("sortSelect")) { $(this).addClass("toggled"); var sorted ="descend"; } 
//   tableSort("#events",null,data,$(this).attr("data"),sorted);
// });
// });

// });
},{}]},{},[1])