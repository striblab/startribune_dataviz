<?php
	$blog_path = "http://apps.startribune.com/news/sports/20150313-bicycling-america/";
	readfile('http://www.startribune.com/partner/header/294420061/');
	$shareURL = "http://strib.mn/bikeblog";
	$shareTitle = "PEDALING AMERICA: A cross-country adventure with bike blogger Tony Brown";
	$shareDescription = "Tony Brown is a Minneapolis-based freelance writer riding his bicycle across the country";
	$shareImage = "http://stmedia.startribune.com/images/bike-blog.png";
?>

<script src="js/d3.v3.min.js" charset="utf-8"></script>
<script src='js/leaflet-omnivore.min.js'></script>
<script src="js/d3.slider-master/d3.slider.js"></script>
<script src="js/waypoints/lib/noframework.waypoints.min.js"></script>
<script src='js/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.css' rel='stylesheet' />


    <script type="text/javascript">
    if( typeof window.console === 'undefined' ) {
      var noOp = function() {};    // no-op function
      console = {
        log: noOp,
        warn: noOp,
        info: noOp,
        error: noOp,
        debug: noOp
      };
    }
  </script>

<script>
function popitup(url){
newwindow=window.open(url,'name','height=350,width=520');
if (window.focus) {newwindow.focus()}
return false;
}
</script>
  
  <link rel="stylesheet" href="css/startribune_dataviz_styles.css" />
 <link rel="stylesheet" href="js/d3.slider-master/d3.slider.css" />

<style type="text/css">	

#ie-fallback {
  display: none;
}

.bikeBucket {
width: 630px;
font-family: Helvetica, Arial, sans-serif;
margin: 0 auto;
padding: 0px;
/* background-color: #eeeeee; */
}

.bikeBlogTitle {
font-family: "Popular", Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
text-align: center;
color: #999;
font-size: 36px;
text-transform: uppercase;
margin: 20px 0 25px 0;
}

.bikeBlogSummary {
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
text-align: center;
color: #444444;
font-size: 16px;
margin: 0 0 10px 0;
}

.bikeBlogSummary a {
color: #444444;	
/*text-decoration: none;	*/
}
	
.bikeBlogSummary a:hover {
color: #999999;	
text-decoration: underline;
}
	
.byline {
    font-family: "Benton Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size:0.6em;
    color: #888;
    padding-top:10px;
    padding-bottom:10px;
    text-align:left;
}

/*INTRO FOR DAY ONE ONLY*/
	
.bikeIntro {
/* display: block; */
display: none;
float: left;	
width: 560px;
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
color: #777777;
font-size: 16px;
line-height: 150%;
margin: 15px 35px 10px 35px;	
/*background-color: pink;*/
}
	
.bikeIntro img {
float: left;
margin: 3px 15px 0px 0px;
}	
	
	
/*TIMESTAMP: DAY, PLACE, MILES	*/
	
.bikeBlogDay {
display: block;
float: left;
width: 540px;
height: 30px;
font-family: "Popular", Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
color: #444444;
font-size: 28px;
line-height: 100%;
margin: 20px 0 10px 0;
/*background-color: #ccc;*/
}

.bikeBlogLocation, .bikeBlogMiles {
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
color: #646464;
font-size: 16px;
margin: 0 0 10px 0;
}

.bikeSocial {
display: block;
float: right;
width: 90px;
height: 24px;
margin: 20px 0 10px 0;
}

.bikeSocial img {
float: left;
margin: 0px 0 0px 0;
opacity: 1;
filter: alpha(opacity=100);
}	

.bikeSocial img:hover {
opacity: 0.5;
filter: alpha(opacity=50);
}

#map { 
display: block;
float: left;	
width: 630px;
height: 300px;
margin: 10px 0 20px 0;
 }

.ScrubberGoesHere {
display: block;
float: left;	
width: 630px;
height: 40px;
margin: 10px 0 10px 0;
}

	
/*BIKE STATS DASHBOARD	*/
	
.DashboardGoesHere {
display: block;
float:left;
width: 630px;
margin: 10px 0 30px 0;
}

.bikeStat {
float: left;	
width: 110px;
/* width: 90px; if speed category gets added back */
margin: 0 10px 0 0;
}

.bikeStat:nth-child(1) {
margin: 0 10px 0 20px;
}	
	
.bikeStat img {
margin: 0px 31px 5px 31px;
/* margin: 0px 21px 0px 21px; if speed category gets added back */
}	
	
.bikeStatLabel {
display: block;	
font-family: Helvetica, Arial, sans-serif;
font-weight: bold;
text-align: center;
color: #999;
font-size: 10px;
line-height: 135%;
text-transform: uppercase;
letter-spacing: 1px;
margin: 0 0 2px 0;
}
	
.bikeStatData {
display: block;	
font-family: Helvetica, Arial, sans-serif;
text-align: center;
color: #333;
font-size: 12px;
line-height: 135%;
margin: 0px 0 0px 0;
padding: 0;
}	

/*HED AND TEXT FOR EACH POST */

.bikePostHed {
width: 630px;
font-family: "Popular", Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
line-height: 125%;
text-align: center;	
color: #444444;
font-size: 32px;
margin: 10px 0 20px 0;
clear:both;
}

.bikePost p {
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
color: #444444;
font-size: 14px;
line-height: 135%;
margin: 0px 0 20px 0;
text-indent:0em !important;
}

.bikePost p.firstGraph {text-indent:0em;}

.dropCap {
font-family: "Popular", Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;	
color: #ccc;
float: left;
font-size: 6em;
line-height: 40px;
margin: 16px 5px 5px 0;
}	
	
.bikeDateline {
display: block;	
font-family: Helvetica, Arial, sans-serif;
font-weight: bold;
color: #999;
font-size: 10px;
line-height: 135%;
text-transform: uppercase;
letter-spacing: 1px;
margin: 0px 0 9px 0;
padding: 0;
}

/* POST PHOTOS */

.photoContainer {
float:right;
max-width:50%;
margin:0 0 12px 12px;>
}

#photo img {
width: 100%;
display: block;	
margin: 0px 0px 10px 0;
}

#caption {
display: block;	
font-family: Helvetica, Arial, sans-serif;
color: #666;
font-size: 14px;
line-height: 135%;
margin: 5px 0 10px 0;
}



	
/*NAV LINKS AT THE BOTTOM OF EACH POST*/
	
#bikePostNav {

height: 20px;	
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #666;	
margin: 10px 0 20px 0;
padding-bottom: 20px;	
border-bottom: 1px solid #ccc;		
}
  
#bikePostNav a {
color: #666;
text-decoration: none;	
}

#bikePostNav a:hover {
color: #666;
text-decoration: underline;	
}

.previousPost {
float: left;
width: 20%;
}	

.topPost {
float: left;	
text-align: center;	
width: 60%;	
}
	
.nextPost {
float: right;
text-align: right;		
width: 20%;
}

.bikeVideo {margin: 10px 0  20px}


/*BIO BLOCK RUNS ON EACH DAY*/
	
.bikeBio {
display: block;
float: left;	
width: 590px;
font-family: Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
color: #777777;
font-size: 16px;
line-height: 150%;
margin: 20px 40px 20px 20px;	
/*background-color: pink;*/
}
	
.bikeBio img {
float: right;
margin: 3px 0px 0 15px;
}	

.d3-slider-handle {
position: absolute;
width: 1.2em;
height: 1.2em;
border: 1px solid #66BC45;
border-radius: 4px;
background: #eee;
background: #66BC45;
z-index: 3;
}

.d3-slider-handle:hover { background: #5cbf2a; cursor:pointer; }

  .leaflet-control-attribution{display:none !important;}
  .mapbox-logo, .leaflet-control, .mapbox-logo-true {display:none !important;}
</style>


<!-- 
<style type='text/css'>
#ie-fallback {
  display: none;
}
</style>
 -->

<!--[if lt IE 9 ]>
<style type='text/css'>

#map{display:none;}
.bikeIntro {display:none;}
.bikeBlogDay {display:none;}
.bikeBlogLocation {display:none;}
.bikeBlogMiles {display:none;}
.bikeSocial {display:none;}
.ScrubberGoesHere {display:none;}
.bikePostHed {display:none;}
.DashboardGoesHere {display:none;}
.bikePost {display:none;}
#bikePostNav {display:none;}
.entry {display:none;}
.bikeBio {display:none;}

#ie-fallback {
display:block;
position:relative;
margin:12px 0 60px 0;}

.message {
font-family:helvetica, sans-serif;
font-size:18px;
line-height:120%;
text-align: center;
top:20px;
left:25%;
width:50%;
z-index:100;
padding-bottom: 60px;
position:absolute;
</style>
<![endif]-->

<div style="width:637px;float:left;min-height:2000px;position:relative;z-index:100;">

<div class="bikeBucket">

<div class="bikeBlogTitle">Pedaling America</div>

<div class="bikeBlogSummary">
A cross-country adventure with bike blogger <a href="#bikeBio">Tony Brown</a>
</div>

<!-- Fall back div for older browsers -->
<div id="ie-fallback">
<div class="message">Your web browser isn't able to display the blog. Please try again using another browser.</div>
</div>

<div class="bikeIntro">
<img width="73" height="60" alt="Tony-Brown" src="http://stmedia.startribune.com/images/TonyBrownFPOmug2.png">		
Tony Brown is a Minneapolis-based freelance writer. This weekend he will start riding his bicycle across the country — from San Diego to Savannah, Ga. — with his childhood friend Will Fifer.
</div>	


<div class="bikeBlogDay">Day <span id="day" class="num"></span>  
<span class="bikeBlogLocation">&bull; <span id="stop2"></span> &bull;</span>
<span class="bikeBlogMiles"><span id="miles"></span> of 3,100 miles</span>
</div>

<div class="bikeSocial">
<a id="facebookbtn-link" onclick="return popitup('http://www.facebook.com/sharer.php?&amp;p[title]=<?php echo urlencode($shareTitle); ?>&amp;p[summary]=<?php echo urlencode($shareDescription); ?>&amp;p[url]=<?php echo urlencode($shareURL); ?>&amp;p[images][0]=<?php echo urlencode($shareImage); ?>')" target="_blank"><img width="28" height="24" alt="bike blog facebook" src="http://stmedia.startribune.com/images/bikeBlog_facebook.png"></a>
<a id="twitterbtn-link" onclick="return popitup('https://twitter.com/share?url=<?php echo urlencode($shareURL); ?>&amp;counturl=<?php echo urlencode($shareURL); ?>&amp;text=<?php echo urlencode($shareDescription); ?>&amp;via=StarTribune')"><img width="28" height="24" alt="bike blog twitter" src="http://stmedia.startribune.com/images/bikeBlog_twitter.png"></a>
<a href="http://comments.startribune.com/comments.php?d=content_comments&asset_id=295627221&section=/sports/outdoors&comments=true"><img width="28" height="24" alt="bike blog comments" src="http://stmedia.startribune.com/images/bikeBlog_comments.png"></a>
</div>


<div id='map'></div>
<div class="ScrubberGoesHere"><div id="slider"></div></div>

<div class="bikePostHed" id="title"></div>
	
<div class="DashboardGoesHere">
	
<div class="bikeStat" id="location">
<img width="48" height="30" alt="location" src="http://stmedia.startribune.com/images/TonyBrown-map-pin.png">		
<div class="bikeStatLabel">Location</div>	
<div class="bikeStatData"><span id="stop"></span></div>
</div>	
	
<div class="bikeStat" id="distance">
<img width="48" height="30" alt="distance" src="http://stmedia.startribune.com/images/TonyBrown-distance.png">		
<div class="bikeStatLabel">Distance</div>	
<div class="bikeStatData"><span id="distance_n" class="numX"></span><span> miles</span></div>
</div>
	
<!-- 
<div class="bikeStat" id="speed">
<img width="48" height="30" alt="speed" src="http://stmedia.startribune.com/images/TonyBrown-speed.png">		
<div class="bikeStatLabel">Speed</div>	
<div class="bikeStatData"><span id="speed_n" class="num"></span><span> mph</span></div>
</div>
 -->
	
<div class="bikeStat" id="duration">
<img width="48" height="30" alt="duration" src="http://stmedia.startribune.com/images/TonyBrown-duration.png">		
<div class="bikeStatLabel">Duration</div>	
<div class="bikeStatData"><span id="duration_n" class="numX"></span><span> hours</span></div>
</div>	
	
<div class="bikeStat" id="terrain">
<img width="48" height="30" alt="terrain" src="http://stmedia.startribune.com/images/TonyBrown-terrain.png">		
<div class="bikeStatLabel">Terrain</div>	
<div class="bikeStatData"><span id="terrain_n"></span></div>
</div>
	
<div class="bikeStat" id="weather">
<img width="48" height="30" alt="weather" src="http://stmedia.startribune.com/images/TonyBrown-weather.png">		
<div class="bikeStatLabel">Weather</div>	
<div class="bikeStatData"><span id="weather_n"></span></div>
</div>
	
<!--close dashboard	-->
</div>


<div class="bikeDateline"><div id="date"></div></div>

<div class="bikePost">

<div class="photoContainer">
<div id="photo"></div>
<div id="caption"></div>
</div>

<div class="entry" id="entry"></div>
<!--close bikepost	-->

<div id="video"></div>
<div id="media"></div>
</div>

<div id="bikePostNav"></div>	
	
<div class="bikeBio" id="bikeBio">
<img width="134" height="110" alt="Tony-Brown" src="http://stmedia.startribune.com/images/TonyBrownFPOmug2.png">		
<span style="font-weight:bold; color:#666;">About the writer</span><br>
Tony Brown is a Minneapolis-based freelance writer, working primarily in journalism and nonprofit development. He is currently riding his bicycle across the country — from San Diego to Savannah, Ga. — with his childhood friend Will Fifer.
<br>
<br>
<br>	
</div>		

<!--close bikeBucket-->
</div>

<div class="byline">Source: Star Tribune reporting | Graphic by <a href="http://www.startribune.com/jeff-hargarten/274254381/" target="new_">Jeff Hargarten, Star Tribune</a> | <a href="./data/maindata.xlsx" target="new_">Download Data</a></div>
</div>

<script>
var j = 0;

var waypoint = new Waypoint({
  element: document.getElementById('entry'),
  handler: function(direction) {
    //loadHeader(0);
  }
})
</script>

<script>
L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var map = L.mapbox.map('map', 'mapbox.light').setView([30.7890, -84.7815],6);

// var leg1 = L.mapbox.featureLayer()
//     .loadURL('shapefiles/tex.geojson')
//     .addTo(map);
// var leg2 = L.mapbox.featureLayer()
//     .loadURL('shapefiles/sd.geojson')
//     .addTo(map);

var bikeDude;
var spot;
</script>
<script>
<?php
$jsonData = file_get_contents("./data/blog.json");
$phpArray = json_encode(array($jsonData));
?>

var data = <?php echo $jsonData ?>

var bikeData = <?php echo $jsonData ?>

scrubInit(0);

function scrubInit(i){
//$.getJSON(jsonStuff, function( data ) {

$("#slider").empty();

console.log("scrub " + i);

var switchInfo = document.getElementById('bikePostNav');
var slide_spot;
var count = +data.Sheet1[0].num;
loadCrumbs(count);

var day = location.search.split('day=')[1];
var indexed = Number(day);

if (isFinite(indexed)){slide_spot=indexed; loadHeader(count-indexed); } else {loadHeader(0);  slide_spot=count + i; }

if (slide_spot == count){
switchInfo.innerHTML = "<div class='previousPost'><a id='prev_button' href='javascript:void(0)'>Previous post</a></div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost' style='color:black !important'>Next post</div>"; 
}
else if (slide_spot == 1){
switchInfo.innerHTML = "<div class='previousPost' style='color:black !important'>Previous post</div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost'><a id='next_button' href='javascript:void(0)'>Next post</a></div>"; 
}
else {
switchInfo.innerHTML = "<div class='previousPost'><a id='prev_button' href='javascript:void(0)'>Previous post</a></div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost'><a id='next_button' href='javascript:void(0)'>Next post</a></div>"; 
}

d3.select('#next_button').on('click', function() { slider.value(++slide_spot);  $("html, body").animate({ scrollTop: 0 }, "slow"); });
d3.select('#prev_button').on('click', function() { slider.value(--slide_spot);  $("html, body").animate({ scrollTop: 0 }, "slow"); });

$("#top_button").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

var slider = d3.slider().axis(true);

d3.select('#slider').call(slider.min(1).max(count).value(slide_spot).axis(d3.svg.axis().tickFormat(d3.format(",d0")).orient("top").ticks(Math.round(count / 1.5))).step(1).on("slide", function(evt, value) {
console.log(slide_spot);
loadHeader(count-value);

if (value == count){
switchInfo.innerHTML = "<div class='previousPost'><a id='prev_button' href='javascript:void(0)'>Previous post</a></div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost' style='color:black !important'>Next post</div>"; 
}
else if (value == 1){
switchInfo.innerHTML = "<div class='previousPost'>Previous post</div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost'><a id='next_button' href='javascript:void(0)'>Next post</a></div>"; 
}
else {
switchInfo.innerHTML = "<div class='previousPost'><a id='prev_button' href='javascript:void(0)'>Previous post</a></div><div class='topPost'><a id='top_button' href='javascript:void(0)'>Top</a></div><div class='nextPost'><a id='next_button' href='javascript:void(0)'>Next post</a></div>"; 
}

d3.select('#next_button').on('click', function() { slider.value(++value);  $("html, body").animate({ scrollTop: 0 }, "slow"); });
d3.select('#prev_button').on('click', function() { slider.value(--value);  $("html, body").animate({ scrollTop: 0 }, "slow"); });

$("#top_button").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

}));

//});
}


function loadHeader(i){
var dateInfo = document.getElementById('date');
var dayInfo = document.getElementById('day');
var stopInfo = document.getElementById('stop');
var stop2Info = document.getElementById('stop2');
var distanceInfo = document.getElementById('distance_n');
//var speedInfo = document.getElementById('speed_n');
var durationInfo = document.getElementById('duration_n');
var terrainInfo = document.getElementById('terrain_n');
var weatherInfo = document.getElementById('weather_n');
var entryInfo = document.getElementById('entry');
var titleInfo = document.getElementById('title');
var photoInfo = document.getElementById('photo');
var milesInfo = document.getElementById('miles');
var videoInfo = document.getElementById('video');
var mediaInfo = document.getElementById('media');

//d3.json(data, function(error, bikeData) {

if (bikeDude != null){map.removeLayer(bikeDude);}

dateInfo.innerHTML = bikeData.Sheet1[i].date; 
dayInfo.innerHTML = bikeData.Sheet1[i].day; 
stopInfo.innerHTML = bikeData.Sheet1[i].last_stop;
stop2Info.innerHTML = bikeData.Sheet1[i].last_stop;
distanceInfo.innerHTML = bikeData.Sheet1[i].distance; 
//speedInfo.innerHTML = bikeData.Sheet1[i].speed; 
durationInfo.innerHTML = bikeData.Sheet1[i].duration;
terrainInfo.innerHTML = bikeData.Sheet1[i].terrain;
weatherInfo.innerHTML = bikeData.Sheet1[i].weather; 
entryInfo.innerHTML = bikeData.Sheet1[i].entry; 
titleInfo.innerHTML = bikeData.Sheet1[i].title; 
photoInfo.innerHTML = "<img src='" + bikeData.Sheet1[i].photo + "' />";
milesInfo.innerHTML = bikeData.Sheet1[i].total_miles; 

var stateObj = { foo: "bar" };
history.pushState(stateObj, "", "http://apps.startribune.com/news/sports/20150313-bicycling-america/?day=" + bikeData.Sheet1[i].day);

if (bikeData.Sheet1[i].video != "null"){videoInfo.innerHTML = "<iframe width='630' height='360' src=" + bikeData.Sheet1[i].video + " frameborder='0' allowfullscreen></iframe>";}
else {videoInfo.innerHTML = "";}

if (bikeData.Sheet1[i].other_media != "null"){mediaInfo.innerHTML = bikeData.Sheet1[i].other_media; }
else {mediaInfo.innerHTML = "";}

$(function() {
    function count($this){
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if(current < $this.data('count')){
            setTimeout(function(){count($this)}, 10);
        }
    }        
  $(".num").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
  });
});

map.setView([bikeData.Sheet1[i].cx, bikeData.Sheet1[i].cy],6);

bikeDude = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          bikeData.Sheet1[i].y,
          bikeData.Sheet1[i].x 
        ]
    },
    properties: {
        title: bikeData.Sheet1[i].last_stop,
        description: bikeData.Sheet1[i].description,
  image: "http://i.imgur.com/Mv5NZmw.jpg",
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#66BC45',
        'marker-symbol': 'bicycle'
    }
}).addTo(map);

//});
}

function loadCrumbs(max){
//d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=s8YKWie8hVZOFhKmUDNJaXcFpeAM3e85UU9ZJsUBfbTVwr3g620ENOynCyhGXNP2WW7yUhNz9g2FdPn3D1Ig1SKPBheEBw_yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6mxe6tDbziZec7grFEEynegH3jwQBCvcC-ThE4ajOWsMftbtrq3RB0ZqpkyQzzZhz3Al4z0cbb6aRIlzoqiWYAclrX4ROTKb1Vj9xjaxJQNltOdXsov6vX_783Tz4FBkFa8RVPDgqZAwqJbeTowOR_fVIgxkfofiQ&lib=MMrwE3mIeiG43FmGAYlH5YDbZ7jG6IkQL", function(error, bikeData) {
for (i = 0; i < max; i++){
spot = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          bikeData.Sheet1[i].y,
          bikeData.Sheet1[i].x 
        ]
    },
    properties: {
        title: bikeData.Sheet1[i].last_stop,
        description: bikeData.Sheet1[i].description,
  image: "http://i.imgur.com/Mv5NZmw.jpg",
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#66BC45',
        'marker-symbol': 'circle'
    }
}).addTo(map);
}
//});
}
</script>
<?php
readfile('http://www.startribune.com/partner/footer/294420061/');
?>