d3.json("./data/deaths.json", function(error, dataLoad) {
d3.json("./data/deaths.geojson", function(error, dataLoadMaps) {

var data = dataLoad.deaths;
var crashes = dataLoadMaps;

function addBoxes() {
  $('.street').each(function(i, obj) {
    $(this).addClass("lightbox");
  });
  $('.street').each(function(i, obj) {
    $(this).attr("data-featherlight",$(this).find("a").attr("href"));
  }); 
}

d3.select("#deaths").selectAll(".card")
.data(data).enter().append("div")
.attr("id",function (d) { return d.record_number; })
.attr("class","card")
.attr("lat",function (d) { return d.latitude; })
.attr("long",function (d) { return d.longitude; })
.html(function (d){ 
  return "<div class='name'>" + d.victim + "</div><div class='date'>Killed on " + new Date(d.date).toDateString() + "</div><div class='age'>" + d.age + "-years-old</div><div class='city'>" + d.location + "</div><div class='city'>" + d.city + ", MN</div><div class='speed'>Driver was going " + d.speed + "mph</div>";});

//SEARCH FILTER TABLE
  $( document ).ready(function() {
     $('#filter_box').keyup(function(i){
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
});

addBoxes();

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.266667, 44.983333],
    zoom: 10.2,
    minZoom: 10,
    maxBounds: llb
});

$(".zoom").click(function() {
map.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
});

$(".card:first").addClass("thisOne");

$(".card").click(function() {
$(".card").removeClass("thisOne");
$(this).addClass("thisOne");

map.flyTo({ center: [$(this).attr("long"), $(this).attr("lat")], zoom: 15 });

panorama.setPosition(new google.maps.LatLng($(this).attr("lat"), $(this).attr("long")));

});


$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address");

map.on('load', function() {
   map.addSource("crashes", {
        type: "geojson",
        data: crashes
    });

    map.addLayer({
                "id": "crashes-points",
                "type": "circle",
                "source": "crashes",
                "paint": {
                    "circle-color": '#AA3939',
                    // "circle-color": 'rgba(14,121,178, 0.45)',
                    "circle-radius": 5
                }
    });
  });

});
});