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
                "oLanguage": {"sSearch": ""},
                "sAjaxSource": "https://spreadsheets.google.com/feeds/list/1XBn-4N1Ri_8VjbTNiITlBTYhB-UsL7TiHShvor3zExQ/od6/public/values?&alt=json",
                "aoColumns": [                 
                    { "mDataProp": "gsx$physlname.$t" },
                    { "mDataProp": "gsx$physfname.$t" },
                    { "mDataProp": "gsx$docaddress.$t" },
                    { "mDataProp": "gsx$specialty.$t" },
                    { "mDataProp": "gsx$payer.$t" },
                    { "mDataProp": "gsx$payerstate.$t" },
                    { "mDataProp": "gsx$totalpayments.$t" },
                    { "mDataProp": "gsx$numpayments.$t" },
                    { "mDataProp": "gsx$paynature.$t" },
                    { "mDataProp": "gsx$payform.$t" },
                            ]
            } );

        } );

// d3.json("./data/docpay.json", function(error, json) {

// var data = json.docpay;



// function tableSpill() {

// d3.select("#events").selectAll(".card")
//   .data(data.sort(function(a,b) {return b.year-a.year;})).enter().append("div")
//   .attr("class",function(d) { return "card"; })
//   .attr("id",function(d) { return "s" + d.id; })
//   .on("click",function(d){

//   })
//   .html(function(d){ 
//     return "<div class='cell num year'>" + d.year + "</div><div class='cell hospital'>" + d.hospital + "</div><div class='cell kill city'>" + d.city + "</div><div class='cell kill category'>" + d.category + "</div><div class='cell num'>" + d.number + "</div><div class='cell kill num'>" + d.death + "</div><div class='cell kill num'>" + d.injury + "</div><div class='cell kill type'>" + d.cattype + "</div>";
//   });

// }

// tableSpill();

// function tableSort(container,party,data,candidate,sorted){
   
//   d3.select(container).selectAll(".card").sort(function(a, b) {
//           if (candidate == "year") { 
//         if (sorted == "descend") { return d3.descending(a.year, b.year); }
//         if (sorted == "ascend") { return d3.ascending(a.year, b.year); }
//      }
//           if (candidate == "hospital") { 
//         if (sorted == "descend") { return d3.descending(a.hospital, b.hospital); }
//         if (sorted == "ascend") { return d3.ascending(a.hospital, b.hospital); }
//      }
//            if (candidate == "city") { 
//         if (sorted == "descend") { return d3.descending(a.city, b.city); }
//         if (sorted == "ascend") { return d3.ascending(a.city, b.city); }
//      }
//            if (candidate == "event") { 
//         if (sorted == "descend") { return d3.ascending(a.category, b.category); }
//         if (sorted == "ascend") { return d3.descending(a.category, b.category); }
//      }
//            if (candidate == "incidents") { 
//         if (sorted == "descend") { return d3.ascending(a.number, b.number); }
//         if (sorted == "ascend") { return d3.descending(a.number, b.number); }
//      }
//            if (candidate == "deaths") { 
//         if (sorted == "descend") { return d3.ascending(a.death, b.death); }
//         if (sorted == "ascend") { return d3.descending(a.death, b.death); }
//      }
//            if (candidate == "injuries") { 
//         if (sorted == "descend") { return d3.ascending(a.injury, b.injury); }
//         if (sorted == "ascend") { return d3.descending(a.injury, b.injury); }
//      }
//            if (candidate == "type") { 
//         if (sorted == "descend") { return d3.ascending(a.cattype, b.cattype); }
//         if (sorted == "ascend") { return d3.descending(a.cattype, b.cattype); }
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