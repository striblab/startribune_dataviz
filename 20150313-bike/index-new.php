<?php
	$blog_path = "http://apps.startribune.com/news/sports/20150313-bicycling-america/index-new.php";
	readfile('http://prod-www.startribune.com/partner/header/294420061/');
	$shareURL = "http://strib.mn/bikeblog";
	$shareTitle = "PEDALING AMERICA: A cross-country adventure with bike blogger Tony Brown";
	$shareDescription = "Tony Brown is a Minneapolis-based freelance writer riding his bicycle across the country";
	$shareImage = "http://stmedia.startribune.com/images/bike-blog.png";
?>

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src="http://apps.startribune.com/news/sports/20150313-bicycling-america/d3.slider-master/d3.slider.js"></script>
<script src="http://apps.startribune.com/news/sports/20150313-bicycling-america/waypoints/lib/noframework.waypoints.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js'></script>
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

<style type="text/css">
/*
This CSS resource incorporates links to font software which is
the valuable copyrighted property of WebType LLC, The Font Bureau
and/or their suppliers. You may not
attempt to copy, install, redistribute, convert, modify or reverse
engineer this font software. Please contact WebType with any
questions: http://www.webtype.com
*/

//Benton Sans Regular
@font-face {
  font-family: "Benton Sans";
  src: url("fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-2.eot");
  src: url("fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-2.eot?") format("embedded-opentype"),
       url("fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-3.woff") format("woff"),
       url("fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Benton Sans Regular Italic
@font-face {
  font-family: "Benton Sans";
  src: url("fonts/Benton-Sans-Regular-Italic/2c74d4f4-5f5a-4841-9646-6cb371baa21a-2.eot");
  src: url("fonts/Benton-Sans-Regular-Italic/2c74d4f4-5f5a-4841-9646-6cb371baa21a-2.eot?") format("embedded-opentype"),
       url("fonts/Benton-Sans-Regular-Italic/2c74d4f4-5f5a-4841-9646-6cb371baa21a-3.woff") format("woff"),
       url("fonts/Benton-Sans-Regular-Italic/2c74d4f4-5f5a-4841-9646-6cb371baa21a-1.ttf") format("truetype");
  font-style: italic;
  font-weight: normal;
}

//Benton Sans Bold
@font-face {
  font-family: "Benton Sans";
  src: url("fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-2.eot");
  src: url("fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-2.eot?") format("embedded-opentype"),
       url("fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-3.woff") format("woff"),
       url("fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}

//Benton Sans Condensed Medium
@font-face {
  font-family: "Benton Sans Condensed Medium";
  src: url("fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-2.eot");
  src: url("fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-2.eot?") format("embedded-opentype"),
       url("fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-3.woff") format("woff"),
       url("fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Popular Light
@font-face {
  font-family: "Popular Light";
  src: url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-2.eot");
  src: url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-2.eot?") format("embedded-opentype"),
       url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-3.woff") format("woff"),
       url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: "Popular";
  src: url("fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-2.eot");
  src: url("fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-2.eot?") format("embedded-opentype"),
       url("fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-3.woff") format("woff"),
       url("fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Popular Medium
@font-face {
  font-family: "Popular Medium";
  src: url("fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-2.eot");
  src: url("fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-2.eot?") format("embedded-opentype"),
       url("fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-3.woff") format("woff"),
       url("fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Popular Bold
@font-face {
  font-family: "Popular";
  src: url("fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-2.eot");
  src: url("fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-2.eot?") format("embedded-opentype"),
       url("fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-3.woff") format("woff"),
       url("fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}


//Poynter Serif RE
@font-face {
  font-family: "Poynter Serif RE";
  src: url("fonts/Poynter-Serif-RE/6da0e483-5b55-412e-9685-611b9bb101fd-2.eot");
  src: url("fonts/Poynter-Serif-RE/6da0e483-5b55-412e-9685-611b9bb101fd-2.eot?") format("embedded-opentype"),
       url("fonts/Poynter-Serif-RE/6da0e483-5b55-412e-9685-611b9bb101fd-3.woff") format("woff"),
       url("fonts/Poynter-Serif-RE/6da0e483-5b55-412e-9685-611b9bb101fd-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Poynter Serif RE Italic
@font-face {
  font-family: "Poynter Serif RE";
  src: url("fonts/Poynter-Serif-RE-Italic/fcc7dbe8-7d79-4278-a765-8e1eb8535c3f-2.eot");
  src: url("fonts/Poynter-Serif-RE-Italic/fcc7dbe8-7d79-4278-a765-8e1eb8535c3f-2.eot?") format("embedded-opentype"),
       url("fonts/Poynter-Serif-RE-Italic/fcc7dbe8-7d79-4278-a765-8e1eb8535c3f-3.woff") format("woff"),
       url("fonts/Poynter-Serif-RE-Italic/fcc7dbe8-7d79-4278-a765-8e1eb8535c3f-1.ttf") format("truetype");
  font-style: italic;
  font-weight: normal;
}

//Poynter Serif RE Bold
@font-face {
  font-family: "Poynter Serif RE";
  src: url("fonts/Poynter-Serif-RE-Bold/a9cccbf1-281e-4903-b5f3-4b5dcd9d9cfa-2.eot");
  src: url("fonts/Poynter-Serif-RE-Bold/a9cccbf1-281e-4903-b5f3-4b5dcd9d9cfa-2.eot?") format("embedded-opentype"),
       url("fonts/Poynter-Serif-RE-Bold/a9cccbf1-281e-4903-b5f3-4b5dcd9d9cfa-3.woff") format("woff"),
       url("fonts/Poynter-Serif-RE-Bold/a9cccbf1-281e-4903-b5f3-4b5dcd9d9cfa-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}

//Poynter Serif RE Bold Italic
@font-face {
  font-family: "Poynter Serif RE";
  src: url("fonts/Poynter-Serif-RE-Bold-Italic/8cf6fa2c-d12a-46b5-b282-c93fbad37343-2.eot");
  src: url("fonts/Poynter-Serif-RE-Bold-Italic/8cf6fa2c-d12a-46b5-b282-c93fbad37343-2.eot?") format("embedded-opentype"),
       url("fonts/Poynter-Serif-RE-Bold-Italic/8cf6fa2c-d12a-46b5-b282-c93fbad37343-3.woff") format("woff"),
       url("fonts/Poynter-Serif-RE-Bold-Italic/8cf6fa2c-d12a-46b5-b282-c93fbad37343-1.ttf") format("truetype");
  font-style: italic;
  font-weight: bold;
}

//Whitman Display Compressed Bold
@font-face {
  font-family: "Whitman Display Compressed Bold";
  src: url("fonts/Whitman-Display-Comp-Bold/c1ec7b66-657a-4549-9c44-00ae270517c5-2.eot");
  src: url("fonts/Whitman-Display-Comp-Bold/c1ec7b66-657a-4549-9c44-00ae270517c5-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Display-Comp-Bold/c1ec7b66-657a-4549-9c44-00ae270517c5-3.woff") format("woff"),
       url("fonts/Whitman-Display-Comp-Bold/c1ec7b66-657a-4549-9c44-00ae270517c5-1.ttf") format("truetype");
  font-style: italic;
  font-weight: bold;
}

//Whitman Display Condensed Bold
@font-face {
  font-family: "Whitman Display Condensed Bold";
  src: url("fonts/Whitman-Display-Cond-Bold/8406d32c-8dc4-4285-a5ee-200b97edd2ab-2.eot");
  src: url("fonts/Whitman-Display-Cond-Bold/8406d32c-8dc4-4285-a5ee-200b97edd2ab-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Display-Cond-Bold/8406d32c-8dc4-4285-a5ee-200b97edd2ab-3.woff") format("woff"),
       url("fonts/Whitman-Display-Cond-Bold/8406d32c-8dc4-4285-a5ee-200b97edd2ab-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}

//Whitman Display Regular
@font-face {
  font-family: "Whitman Display";
  src: url("fonts/Whitman-Display-Regular/afc69d83-243c-4a7f-8d26-1795692dfade-2.eot");
  src: url("fonts/Whitman-Display-Regular/afc69d83-243c-4a7f-8d26-1795692dfade-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Display-Regular/afc69d83-243c-4a7f-8d26-1795692dfade-3.woff") format("woff"),
       url("fonts/Whitman-Display-Regular/afc69d83-243c-4a7f-8d26-1795692dfade-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

//Whitman Display Regular Italic
@font-face {
  font-family: "Whitman Display";
  src: url("fonts/Whitman-Display-Regular-Italic/e9683d36-3a41-45c2-8aeb-f461fa1825f1-2.eot");
  src: url("fonts/Whitman-Display-Regular-Italic/e9683d36-3a41-45c2-8aeb-f461fa1825f1-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Display-Regular-Italic/e9683d36-3a41-45c2-8aeb-f461fa1825f1-3.woff") format("woff"),
       url("fonts/Whitman-Display-Regular-Italic/e9683d36-3a41-45c2-8aeb-f461fa1825f1-1.ttf") format("truetype");
  font-style: italic;
  font-weight: normal;
}

//Whitman Display Bold
@font-face {
  font-family: "Whitman Display";
  src: url("fonts/Whitman-Display-Bold/d34b615f-025d-471c-a1a0-a5a039248094-2.eot");
  src: url("fonts/Whitman-Display-Bold/d34b615f-025d-471c-a1a0-a5a039248094-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Display-Bold/d34b615f-025d-471c-a1a0-a5a039248094-3.woff") format("woff"),
       url("fonts/Whitman-Display-Bold/d34b615f-025d-471c-a1a0-a5a039248094-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}

//Whitman OSF
@font-face {
  font-family: "Whitman OSF";
  src: url("fonts/Whitman-Roman-OSF/c35df3ea-93e1-47b6-9629-bc761414cf65-2.eot");
  src: url("fonts/Whitman-Roman-OSF/c35df3ea-93e1-47b6-9629-bc761414cf65-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Roman-OSF/c35df3ea-93e1-47b6-9629-bc761414cf65-3.woff") format("woff"),
       url("fonts/Whitman-Roman-OSF/c35df3ea-93e1-47b6-9629-bc761414cf65-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "Whitman OSF";
  src: url("fonts/Whitman-Bold-OSF/90508854-65ad-4bc0-b4f5-13734269e40e-2.eot");
  src: url("fonts/Whitman-Bold-OSF/90508854-65ad-4bc0-b4f5-13734269e40e-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Bold-OSF/90508854-65ad-4bc0-b4f5-13734269e40e-3.woff") format("woff"),
       url("fonts/Whitman-Bold-OSF/90508854-65ad-4bc0-b4f5-13734269e40e-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}
@font-face {
  font-family: "Whitman OSF";
  src: url("fonts/Whitman-Italic-OSF/4227a9bf-e403-4086-8d26-9a6d738858e0-2.eot");
  src: url("fonts/Whitman-Italic-OSF/4227a9bf-e403-4086-8d26-9a6d738858e0-2.eot?") format("embedded-opentype"),
       url("fonts/Whitman-Italic-OSF/4227a9bf-e403-4086-8d26-9a6d738858e0-3.woff") format("woff"),
       url("fonts/Whitman-Italic-OSF/4227a9bf-e403-4086-8d26-9a6d738858e0-1.ttf") format("truetype");
  font-style: italic;
  font-weight: normal;
}
</style>


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
// var speedInfo = document.getElementById('speed_n');
var durationInfo = document.getElementById('duration_n');
var terrainInfo = document.getElementById('terrain_n');
var weatherInfo = document.getElementById('weather_n');
var entryInfo = document.getElementById('entry');
var titleInfo = document.getElementById('title');
var photoInfo = document.getElementById('photo');
var milesInfo = document.getElementById('miles');
var videoInfo = document.getElementById('video');
var mediaInfo = document.getElementById('media');
var captionInfo = document.getElementById('caption');

d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=s8YKWie8hVZOFhKmUDNJaXcFpeAM3e85UU9ZJsUBfbTVwr3g620ENOynCyhGXNP2WW7yUhNz9g2FdPn3D1Ig1SKPBheEBw_yOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6mxe6tDbziZec7grFEEynegH3jwQBCvcC-ThE4ajOWsMftbtrq3RB0ZqpkyQzzZhz3Al4z0cbb6aRIlzoqiWYAclrX4ROTKb1Vj9xjaxJQNltOdXsov6vX_783Tz4FBkFa8RVPDgqZAwqJbeTowOR_fVIgxkfofiQ&lib=MMrwE3mIeiG43FmGAYlH5YDbZ7jG6IkQL", function(error, bikeData) {

if (bikeDude != null){map.removeLayer(bikeDude);}

dateInfo.innerHTML = bikeData.Sheet1[i].date; 
dayInfo.innerHTML = bikeData.Sheet1[i].day; 
stopInfo.innerHTML = bikeData.Sheet1[i].last_stop;
stop2Info.innerHTML = bikeData.Sheet1[i].last_stop;
distanceInfo.innerHTML = bikeData.Sheet1[i].distance; 
// speedInfo.innerHTML = bikeData.Sheet1[i].speed; 
durationInfo.innerHTML = bikeData.Sheet1[i].duration;
terrainInfo.innerHTML = bikeData.Sheet1[i].terrain;
weatherInfo.innerHTML = bikeData.Sheet1[i].weather; 
entryInfo.innerHTML = bikeData.Sheet1[i].entry; 
titleInfo.innerHTML = bikeData.Sheet1[i].title; 
photoInfo.innerHTML = "<img src='" + bikeData.Sheet1[i].photo + "' />";
milesInfo.innerHTML = bikeData.Sheet1[i].total_miles;
captionInfo.innerHTML = bikeData.Sheet1[i].caption; 

var stateObj = { foo: "bar" };
history.pushState(stateObj, "", "<?php echo $blog_path; ?>?day=" + bikeData.Sheet1[i].day);

if (bikeData.Sheet1[i].video != "null"){videoInfo.innerHTML = "<iframe class='bikeVideo' width='630' height='360' src=" + bikeData.Sheet1[i].video + " frameborder='0' allowfullscreen></iframe>";}
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
<?php
readfile('http://prod-www.startribune.com/partner/footer/294420061/');
?>