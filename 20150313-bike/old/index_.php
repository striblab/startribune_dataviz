
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Pedaling America</title>
  <meta name="description" content="Pedaling America">
  <meta name="author" content="Jeff Hargarten - StarTribune">
	
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.css' rel='stylesheet' />
  <link rel="stylesheet" href="js/d3.slider-master/d3.slider.css" /> 

<style type="text/css">
@font-face {
	font-family: Popular;
	src: url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-2.eot?") format("embedded-opentype"),
		 url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-3.woff") format("woff"),
		 url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-1.ttf") format("truetype"),
		 url("http://apps.startribune.com/fonts/popular/regular/851caebd-2961-4fd9-a500-2b38452b1ec9-4.svg#web") format("svg");
	font-style: normal;
	font-weight: normal;
}

@font-face {
	font-family: Popular-medium;
	src: url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-2.eot?") format("embedded-opentype"),
		 url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-3.woff") format("woff"),
		 url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-1.ttf") format("truetype"),
		 url("http://apps.startribune.com/fonts/popular/medium/96c3bd87-fed5-419d-a1cf-d947b17d6ab7-4.svg#web") format("svg");
	font-style: normal;
	font-weight: normal;
}

@font-face {
	font-family: Popular-bold;
	src: url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-2.eot?") format("embedded-opentype"),
	url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-3.woff") format("woff"),
	url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-1.ttf") format("truetype"),
	url("http://apps.startribune.com/fonts/popular/bold/9a23c9ca-82fe-417a-9070-5f5daeaf6214-4.svg#web") format("svg");
	font-style: normal;
	font-weight: bold;
}
</style>
	
	
<style type="text/css">	
	.bikeBucket { width: 630px; font-family: Helvetica, Arial, sans-serif; margin: 0 auto; padding: 0px; }
	.bikeBlogTitle { font-family: "Popular", Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; color: #999; font-size: 36px; text-transform: uppercase; margin: 0 0 10px 0; }
	.bikeBlogSummary { font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; color: #646464; font-size: 16px; margin: 0 0 10px 0; }
	.bikeBlogSummary a { color: #646464; }
	.bikeBlogSummary a:hover { color: #333333;	 text-decoration: underline; }

	/*INTRO FOR DAY ONE ONLY*/
		
	.bikeIntro { display: block; float: left; width: 560px;
	font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; color: #444444; font-size: 16px; line-height: 150%; margin: 20px 35px 10px 35px; }
	.bikeIntro img { float: left; margin: 3px 15px 0px 0px; }	
		
	/*TIMESTAMP: DAY, PLACE, MILES	*/
		
	.bikeBlogDay { display: block; float: left; width: 540px; height: 30px; font-family: "Popular", Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; color: #444444; font-size: 28px; line-height: 100%; margin: 20px 0 10px 0; }
	.bikeBlogLocation, .bikeBlogMiles { font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal;
	color: #646464; font-size: 16px; margin: 0 0 10px 0; }
	.bikeSocial { display: block; float: right; width: 84px; height: 30px; margin: 20px 0 10px 0; }
	.bikeSocial img { margin: 4px 0 0px 0; }		
	#map { display: block; float: left; width: 630px; height: 300px; margin: 10px 0 10px 0; }
	.ScrubberGoesHere { display: block; float: left;	 width: 630px; height: 40px; margin: 10px 0 20px 0; }
		
	/*BIKE STATS DASHBOARD	*/
		
	.DashboardGoesHere { display: block; float:left; width: 630px; margin: 0 0 30px 0; }
	.bikeStat { float: left; width: 90px; margin: 0 10px 0 0; }
	.bikeStat:nth-child(1) { margin: 0 10px 0 20px; }		
	.bikeStat img { margin: 0px 21px 0px 21px; }	
	.bikeStatLabel {= display: block; font-family: Helvetica, Arial, sans-serif; font-weight: bold; text-align: center; color: #999;
	font-size: 10px; line-height: 135%; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 2px 0; }	
	.bikeStatData { display: block;	 font-family: Helvetica, Arial, sans-serif; text-align: center; color: #333; font-size: 12px; line-height: 135%; margin: 0px 0 0px 0; padding: 0; }	

	/*HED AND TEXT FOR EACH POST */

	.bikePostHed { width: 630px; font-family: "Popular", Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; text-align: center; color: #444444; font-size: 36px; margin: 20px 0 20px 0; }
	.bikePost p { font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; color: #444444; font-size: 14px; line-height: 135%; margin: 0px 0 20px 0; }
	.bikePost p{ text-indent:1.5em;line-height:130%; }
	p.firstGraph { text-indent:0em; }
	.dropCap { font-family: "Popular", Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; color: #ccc; float: left; font-size: 6em; line-height: 40px; margin: 16px 5px 5px 0; }	
	p.bikeDateline { display: block; font-family: Helvetica, Arial, sans-serif; font-style: normal;
	font-weight: bold; color: #888; font-size: 12px; line-height: 135%; text-transform: uppercase; letter-spacing: 1px; margin: 0px 0 9px 0; padding: 0; }
		
	/*NAV LINKS AT THE BOTTOM OF EACH POST*/
		
	#bikePostNav { height: 20px; font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; font-size: 14px; color: #666; margin: 10px 0 20px 0; padding-bottom: 20px; border-bottom: 1px solid #ccc; }
	#bikePostNav a { color: #666; text-decoration: none; }
	#bikePostNav a:hover { color: #666; text-decoration: underline;	}
	.previousPost { float: left; width: 20%; }	
	.topPost { float: left; text-align: center; width: 60%; }	
	.nextPost { float: right; text-align: right; width: 20%; }

	/*BIO BLOCK RUNS ON EACH DAY*/
		
	.bikeBio { display: block; float: left; width: 590px; font-family: Helvetica, Arial, sans-serif; font-style: normal; font-weight: normal; color: #444444; font-size: 14px; line-height: 135%; margin: 20px 20px 20px 20px;	}
	.bikeBio img { float: right; margin: 20px 10px 0 15px; }	
	#photo img{width:50%;float:right;}
	.d3-slider-handle { position: absolute; width: 1.2em; height: 1.2em; border: 1px solid #66BC45; border-radius: 4px; background: #eee; background: #66BC45; z-index: 3; }
	.d3-slider-handle:hover { background: #5cbf2a; cursor:pointer; }
	.leaflet-control-attribution{display:none !important;}
	.mapbox-logo, .leaflet-control, .mapbox-logo-true {display:none !important;}
</style>	
<link rel="stylesheet" href="http://apps.startribune.com/news/dataviz-css-master/startribune_dataviz_styles.css" /> 	
	
</head>
<body> 
<div class="bikeBucket">


<div class="bikeBlogTitle">Pedaling America</div>

<div class="bikeBlogSummary">
A cross-country adventure with bike blogger <a href="www.startribune.com">Tony Brown</a>
</div>

<div class="bikeIntro">
<img width="73" height="60" alt="Tony-Brown" src="http://stmedia.startribune.com/images/TonyBrownFPOmug.png">		
Tony Brown is a Minneapolis-based freelance writer. This weekend he will start riding his bicycle across the country, from San Diego to Savannah, with his childhood friend Will Fifer.
</div>	
	
	
	

<div class="bikeBlogDay">Day <span id="day" class="num"></span>  
<span class="bikeBlogLocation">&bull; <span id="stop2"></span> &bull;</span>
<span class="bikeBlogMiles"><span id="miles"></span> of 1000 miles</span>
</div>

<div class="bikeSocial">
<img width="84" height="24" alt="" src="http://stmedia.startribune.com/images/socialFPO.png">
</div>


<div id='map'></div>
<div class="ScrubberGoesHere"><div id="slider"></div></div>

<div class="bikePostHed" id="title">Fixing a flat can take a long time</div>


	
	
<div class="DashboardGoesHere">
	
<div class="bikeStat" id="location">
<img width="48" height="30" alt="location" src="http://stmedia.startribune.com/images/TonyBrown-map-pin.png">		
<div class="bikeStatLabel">Location</div>	
<div class="bikeStatData"><span id="stop"></span></div>
</div>	
	
<div class="bikeStat" id="distance">
<img width="48" height="30" alt="distance" src="http://stmedia.startribune.com/images/TonyBrown-distance.png">		
<div class="bikeStatLabel">Distance</div>	
<div class="bikeStatData"><span id="distance_n" class="num"></span><span> miles</span></div>
</div>
	
<div class="bikeStat" id="speed">
<img width="48" height="30" alt="speed" src="http://stmedia.startribune.com/images/TonyBrown-speed.png">		
<div class="bikeStatLabel">Speed</div>	
<div class="bikeStatData"><span id="speed_n" class="num"></span><span> mph</span></div>
</div>
	
<div class="bikeStat" id="duration">
<img width="48" height="30" alt="duration" src="http://stmedia.startribune.com/images/TonyBrown-duration.png">		
<div class="bikeStatLabel">Duration</div>	
<div class="bikeStatData"><span id="duration_n" class="num"></span><span> hours</span></div>
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


	
<p class="bikeDateline"><div id="date"></div></p>

<div class="bikePost">

<div id="photo"></div>
	
<p class="firstGraph"><span class="dropCap">T</span>hree in the morning,	
ood thing I only had one hour to get to the bank, or I might have given up before I got to the end of my own south Minneapolis street that first snowy day in November. My bike slipped one way and I braced my core, convinced I was going down. Instead, I slipped the other way, and then back again, until I managed to get through the snow that had compacted into something resembling mashed potatoes. I didn't go down as I expected, and I didn't worry about staying warm. I was sweating, and not from exertion.</p>
<p>This is my first winter riding a bike for transportation. I sold my car three years ago to pay for school, spent some time in cities with excellent transit and bike-sharing systems, and since I've returned to an ever-more-bike-friendly Minneapolis, I've been content to continue my same mobile ways.</p>
<p>Somewhere an expert just exclaimed, "A millennial!" Am I representative of my generation's eco-awareness, economic constraints or twee tastes? I am not sure, but I do know my bike gives me the most freedom at the lowest cost. I prefer cycling whenever possible, and I'm not the only one. An estimated 20 percent of Twin Cities cyclists keep riding year-round, according to bike count data collected by Transit for Livable Communities, a nonprofit focused on reforming Minnesota's transportation system.</p>
<p>In my first hours as a winter cyclist -- after I had established a tentative trust in the strangely innate balance of my bike and body -- I counted 30 people, including five on fat bikes. I passed a guy with five-inch tires, wearing a helmet and goggles. Shortly after, his antithesis pedaled by on a rickety 10-speed wearing a hooded sweatshirt and no gloves. Winter cycling may still be a fringe activity in the Twin Cities, but cyclists are not uniform.</p>
<p>I've found my own personal comfort zone riding an old cruiser with fenders and a chain guard. Thanks to panniers, back rack and bungee cord, I've successfully transported most everything I want or need in daily life from cupcakes to toilet paper. I am not the fastest, but I can wear whatever I want, including a long coat, dresses and most any type of footwear. The big plastic pedals are easy work. In fact, riding a bike in winter has proven just enough work that I stay warm with a light down coat. Still, there are a few occasions when the winter wind has numbed my cheeks into a state I can imagine resembles Botox. I can see why some cyclists wear balaclavas. I've invested about $100 in wool tights, socks and a pair of wool liner gloves. I'm searching for the perfect boots.</p>
<p>More difficult than keeping my extremities warm has been convincing my grandfather -- who spent the past 20 years in Florida -- I am not going to freeze to death in the streets. I appreciate the concern, but since I started spending more time outdoors in winter, I've realized the temperature on this godforsaken piece of tundra is often more manageable than extreme.</p>
<p>It's easy to appreciate winter when you are skiing through a blanket of fresh snow. But when you are fumbling with your keys and trying to keep your mittens from dropping into a puddle of dirty parking lot water on a Tuesday night, the season is a lot less lovely. Riding a bike doesn't change the bare trees and dirty snow and milky sky. But changing the way I move has changed the way I think. Instead of a long, crushing, homebound imprisonment, winter now is a season whose light reveals my world differently.</p>
<!--close bikepost	-->

<div class="entry" id="entry"></div>

<div id="video"></div>
<div id="media"></div>
</div>


<div id="bikePostNav"></div>	

	
<div class="bikeBio">
<img width="146" height="120" alt="Tony-Brown" src="http://stmedia.startribune.com/images/TonyBrownFPOmug.png">		
<b>About the writer</b><br>
Tony Brown is a Minneapolis-based freelance writer, working largely in journalism and nonprofit development. He has, through various unrelated circumstances, hiked in the Himalayas with Sir Edmund Hillary, stopped Phil Esposito on a breakaway, canoed the navigable length of the Bronx River and double-dated with Alistair Cooke. He is currently riding his bicycle across the country, from San Diego to Savannah, with his childhood friend Will Fifer.
<br>
<br>
<br>	
</div>		

<!--close bikeBucket-->
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src="js/waypoints/lib/noframework.waypoints.min.js"></script>
<script src="js/d3.slider-master/d3.slider.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js'></script>

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
var map = L.mapbox.map('map', 'examples.map-i87786ca').setView([30.7890, -84.7815],6);

var leg1 = L.mapbox.featureLayer()
    .loadURL('tex.geojson')
    .addTo(map);
var leg2 = L.mapbox.featureLayer()
    .loadURL('sd.geojson')
    .addTo(map);

var bikeDude;
var spot;
</script>
<script>
scrubInit(0);

function scrubInit(i){
$.getJSON( "https://script.googleusercontent.com/a/macros/umn.edu/echo?user_content_key=ccuHergCzNM5prs1468cqo7tJktA0_QXfGRxBLAFHhroUglt1gCBOQFT_4csXlCbMsk_XuyF3UJR3gfCVoRkA02yTZlz4NNTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKASbbMAF6orU02DLGwV8tFzfspDFzQK6GrLM0eoOZ5TIOnqTxsArftO2Po860f-NZwzK-lIuPz36z08hnCfeSab4KwLvAsU0j-LiAXVloloiUAy7e3y2snJuMzfiZ6VcD_L_B4PaW-7gvB6hEsk2j4gZ0b2s6wiAu4sq7x9Ad11ursOF32aUKnl&lib=MMrwE3mIeiG43FmGAYlH5YDbZ7jG6IkQL", function( data ) {

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

d3.select('#slider').call(slider.min(1).max(count).value(slide_spot).axis(d3.svg.axis().tickFormat(d3.format(",d0")).orient("top").ticks(count)).step(1).on("slide", function(evt, value) {
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

});
}


function loadHeader(i){
var dateInfo = document.getElementById('date');
var dayInfo = document.getElementById('day');
var stopInfo = document.getElementById('stop');
var stop2Info = document.getElementById('stop2');
var distanceInfo = document.getElementById('distance_n');
var speedInfo = document.getElementById('speed_n');
var durationInfo = document.getElementById('duration_n');
var terrainInfo = document.getElementById('terrain_n');
var weatherInfo = document.getElementById('weather_n');
var entryInfo = document.getElementById('entry');
var titleInfo = document.getElementById('title');
var photoInfo = document.getElementById('photo');
var milesInfo = document.getElementById('miles');
var videoInfo = document.getElementById('video');
var mediaInfo = document.getElementById('media');

d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=s8YKWie8hVZOFhKmUDNJaXcFpeAM3e85UU9ZJsUBfbTVwr3g620ENOynCyhGXNP2WW7yUhNz9g2FdPn3D1Ig1SKPBheEBw_yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6mxe6tDbziZec7grFEEynegH3jwQBCvcC-ThE4ajOWsMftbtrq3RB0ZqpkyQzzZhz3Al4z0cbb6aRIlzoqiWYAclrX4ROTKb1Vj9xjaxJQNltOdXsov6vX_783Tz4FBkFa8RVPDgqZAwqJbeTowOR_fVIgxkfofiQ&lib=MMrwE3mIeiG43FmGAYlH5YDbZ7jG6IkQL", function(error, bikeData) {

if (bikeDude != null){map.removeLayer(bikeDude);}

dateInfo.innerHTML = bikeData.Sheet1[i].date; 
dayInfo.innerHTML = bikeData.Sheet1[i].day; 
stopInfo.innerHTML = bikeData.Sheet1[i].last_stop;
stop2Info.innerHTML = bikeData.Sheet1[i].last_stop;
distanceInfo.innerHTML = bikeData.Sheet1[i].distance; 
speedInfo.innerHTML = bikeData.Sheet1[i].speed; 
durationInfo.innerHTML = bikeData.Sheet1[i].duration;
terrainInfo.innerHTML = bikeData.Sheet1[i].terrain;
weatherInfo.innerHTML = bikeData.Sheet1[i].weather; 
entryInfo.innerHTML = bikeData.Sheet1[i].entry; 
titleInfo.innerHTML = bikeData.Sheet1[i].title; 
photoInfo.innerHTML = "<img src='" + bikeData.Sheet1[i].photo + "' />";
milesInfo.innerHTML = bikeData.Sheet1[i].total_miles; 

var stateObj = { foo: "bar" };
history.pushState(stateObj, "", "http://jeffhargarten.com/interactives/bike_route/index_style.html?day=" + bikeData.Sheet1[i].day);

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

});
}

function loadCrumbs(max){
d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=s8YKWie8hVZOFhKmUDNJaXcFpeAM3e85UU9ZJsUBfbTVwr3g620ENOynCyhGXNP2WW7yUhNz9g2FdPn3D1Ig1SKPBheEBw_yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6mxe6tDbziZec7grFEEynegH3jwQBCvcC-ThE4ajOWsMftbtrq3RB0ZqpkyQzzZhz3Al4z0cbb6aRIlzoqiWYAclrX4ROTKb1Vj9xjaxJQNltOdXsov6vX_783Tz4FBkFa8RVPDgqZAwqJbeTowOR_fVIgxkfofiQ&lib=MMrwE3mIeiG43FmGAYlH5YDbZ7jG6IkQL", function(error, bikeData) {
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
});
}
</script>
</html>