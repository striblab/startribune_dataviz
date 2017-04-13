<html>

<meta charset=utf-8 />
<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

 <style type="text/css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.7.0/nv.d3.min.css");
  @import url("styles.css");
  @import url("http://stage-www.startribune.com/static/css/screen.css?d=1429128267");
  @import url("js/jquery.bxslider.css");
  @import url("https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css");
  @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.7.0/mapbox-gl.css");
  </style> 

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>

    <link href='https://api.tiles.mapbox.com/mapbox.js/v2.0.0/mapbox.css' rel='stylesheet' />
    <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.3/leaflet.fullscreen.css' rel='stylesheet' />
    <link rel="stylesheet" href="http://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.css" />
    <link rel="stylesheet" href="http://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.Default.css" />
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.css" />
    <link rel="stylesheet" href="//cdn.datatables.net/responsive/1.0.6/css/dataTables.responsive.css" />
    <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<style>
/*dataviz styles*/
		body { font-family:"Benton Sans",Helvetica,Arial,sans-serif; margin: 0; overflow-x: hidden; padding: 0; }
		#map { height: 540px; width: 100%; }
		#mapbox { float: right; width:55%; }
		#sidebox { float:left; }
		.leaflet-control-mapbox-geocoder-toggle, .mapbox-icon mapbox-icon-geocoder { background-color: #fff; }
		.leaflet-control-zoom { }
		.leaflet-control-attribution { display: none !important; }
		.legend label,
		.legend span { color: #808080; display: block; float: left; font-size: 9px; height: 15px; text-align: center; width: 33%; }
		small { line-height: 90%; }
		.marker-cluster-small { background-color: rgba(160, 241, 157, 0.7); }
		.marker-cluster-small div { background-color: rgba(160, 241, 157, 0.7); }
		.marker-cluster-medium { background-color: rgba(30, 170, 24, 0.7); }
		.marker-cluster-medium div { background-color: rgba(30, 170, 24, 0.7); }
		.marker-cluster-large { background-color: rgba(22, 125, 18, 0.7); color: white; }
		.marker-cluster-large div { background-color: rgba(22, 125, 18, 0.7); color: white; }
		path:hover { fill: #000 !important; fill-opacity: 0.8 !important; }
		path { fill: #333 !important; fill-opacity: 0.6 !important; stroke: #333 !important; stroke-opacity: 0.3 !important; stroke-width: 1px !important; }
		.btn-group { margin-left: 0; width: 100%; }
		.marker:hover { stroke: black !important; }
		#menu { float: left; width: 100%; }
		#menu a { color: #000; text-decoration: none; }
		#menu a:hover { color: #000; text-decoration: none; }
		#menu .active { background-color: #fff !important; color: #000; }
		#menu .active a { color: #fff; }
        .active { background-color: #fff !important; color: #000; }
		path:hover { fill-opacity: 0.5; stroke: #fff !important; }
		.symbol { fill: #efefef; fill-opacity: 1; stroke: #fff; }
		.tooltip { background-color: rgba(255,255,255,1); border-radius: 10px; height: 50px; margin: 10px; moz-border-radius: 10px; padding-left: 10px; padding-top: 10px; webkit-border-radius: 10px; width: 150px; }
		label > input { display: none; }
		label > input + img { border: 2px solid transparent; cursor: pointer; }
		label > input:checked + img { border: 2px solid #efefef; }
		.map { float: left; height: 500px; width: 25%; }
		.circle { border-radius: 50%; float: left; height: 58px; margin: 0 12px 12px 0; width: 58px; }
		.used { background: url(http://stmedia.startribune.com/designimages/goto-background.png) #74a31e no-repeat -1px -1px; cursor: pointer; }
		.notused { background: #efefef; }
		.used:hover { background: url(http://stmedia.startribune.com/designimages/goto-background.png) #74a31e no-repeat -1px -1px; opacity: .65; }
		.tooltip { background-color: #161616; border: 1px solid #333; border-radius: 5px; color: #fff; display: none; font-size: 12px Arial; padding: 10px; position: absolute; }
		.resizeFont h3 { margin: 0 0 18px 0; }
		.resizeFont h3 span { font-weight: normal; }
		#menu { border: none; border-collapse: collapse; }
		#menu td { display: block; font-size: 11px; width: 100%; }
		#menu a { background: #efefef; border-top: 1px #fff solid; display: block; font-size: 1em; padding: 6px 12px 6px 12px; text-align: left; text-decoration: none; }
		#menu a:hover { background: #ccc; text-decoration: none; }
		.map { position: absolute; right: 0; top: 0; }
		#menu td.active a { background: #666; color: #fff !important; font-weight: bold; }
		#menu td.first a { border: none; }
		.hide { display: none; }
		#chatter { font-size: 13px; height: 210px; }
		#head_chatter { padding: 20px; }
		#wrapper { background-color: white; border-top: 1px dotted #eeeeee; padding-top: 24px; width: 98%; }
		#container { display: table; width:100%; }
		#row { display: table-row; vertical-align: top; }
		#left, #right, #middle { display: table-cell; vertical-align: top; }
		#left { width: 0; }
		#middle { padding: 10px; width: 100%; }
		.leaflet-control-mapbox-geocoder { left: 0 !important; margin: 0 !important; padding: !important; position: absolute; top: 510px; z-index: 900; }
		.bioColumn, .bioColumn.maps, .bioColumn.maps img { width: 100%; }
		#cssmenu { background: none; height: 44px; position: relative; width: auto; }
		#cssmenu ul { line-height: 1; list-style: none; margin: 0; padding: 0; }
		#cssmenu > ul { background: #e6ede4; display: block; margin: 0 auto; position: relative; width: 272px; z-index: 5000; }
		#cssmenu > ul > li > a { color: #333333; font-size: 14px; font-weight: bold; moz-transition: color 0.25s ease-out; ms-transition: color 0.25s ease-out; o-transition: color 0.25s ease-out; padding: 15px 20px; text-transform: uppercase; transition: color 0.25s ease-out; webkit-transition: color 0.25s ease-out; }
		#cssmenu ul ul li a { background: #ffffff; border-bottom: 1px solid #eeeeee; border-left: 1px solid #eeeeee; border-right: 1px solid #eeeeee; color: #666666; font-size: 12px; moz-transition: all .35s ease; ms-transition: all .35s ease; o-transition: all .35s ease; padding: 10px 20px; transition: all .35s ease; webkit-transition: all .35s ease; width: 230px; }
		#cssmenu ul ul li:last-child > a,
		#cssmenu ul ul li.last > a { border-bottom: 1px solid #eeeeee; }
		#cssmenu ul ul li:hover > a { background: #f2f2f2; color: #999999; }
		#cssmenu > ul > li.has-sub::after { border-left: 16px solid transparent; border-right: 16px solid transparent; border-top: 16px solid #258423; height: 0; right:.5%; top: 14px; width: 0; }
		#cssmenu > ul > li:hover::after { border-top-color: #999999; }
		#cssmenu > ul > li:hover > a { color: #999999; }
		#chatter #heads { font-size: 10px; margin: 20px 0 10px 0; }
		#middle { padding: 0; }
		#cssmenu ul ul { left: 0; moz-transition: opacity .3s ease, top .25s ease; ms-transition: opacity .3s ease, top .25s ease; opacity: 1; o-transition: opacity .3s ease, top .25s ease; position: absolute; top: 44px; transition: opacity .3s ease, top .25s ease; webkit-transition: opacity .3s ease, top .25s ease; z-index: 1000; }
		#map--labels { height: 30px; }
		#map--labels h4 { float: left; font-size: 14px; padding-left: 60px; position: relative; width: 200px; }
   	    .leaflet-control-mapbox-geocoder, .leaflet-control-mapbox-geocoder-wrap { position:absolute; border-radius: 0 !important; top:512px; width:100%; margin:0 !important; z-index:900;}
    	.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input[type=text], .leaflet-control-mapbox-geocoder-form  { background: 0 0; border: 0; width: 100% !important; padding: 0 0 0 10px; height: 26px; outline: 0; }
    	.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input[type=text], .leaflet-control-mapbox-geocoder-form { background: 0 0; border: 0; width: 1200px; padding: 0 0 0 10px; height: 26px; font-size: 20px; outline: 0; }
    	.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-wrap { width: 1200px; opacity: 1; }
</style>

 <style type="text/css"> 
/*page template styles*/
    .specialContentWrapper{ width:100%; }
    .l-container { text-align:left !important; width:960px; margin-right:auto; margin-left:auto; }
    .l-container:nth-child(2) { width:100%; }
    .nav-section-mod.col-2 li { text-align:center !important; }
    .nav-shortcuts-inner { text-align:center !important; }

    @media only screen and (min-width:650px) {
    .git:hover { background-color:#378f00 !important; }
    .sort-link-mid:hover, .sort-link:hover { background-color:#eee !important; cursor:pointer; }
    }

    .l-navigation-shortnav-container { width:100%; min-width:100%; }
    .l-section-right { display:none; }
    .l-section-inner { width:95%; border-right:0;}
    .l-footer-inner, .l-section-container { width:90% !important; }
    .nav-branding-mod, .nav-shortcuts-mod { width:100% !important;  }
    .nav-utility-mod {  width: 100%; margin: 0 auto; max-width: 100% !important; min-width: 100% !important; }
    #zone-none-block-1-leaderboard iframe { width:100% !important; }
    #zone-none-block-1-leaderboard, #zone-none-block-3-leaderboard { display: none !important; }
    #zone-none-block-3-leaderboard div iframe { width:100% !important; }

	@media (max-width: 999px) {
	#mapbox { float: none; width:100%; }
	#sidebox { float:none; width:100%; }
	.cssmenu { float:left !important; }
	#menu-button { display:none !important; }
	}


    @media (max-width: 970px) {
    .nav-shortcuts-inner { display:none !important; }
    .nav-utility-btn:before { width:30px; height:30px; }
    .nav-utility-mod { height:50px; }
    .nav-utility-inner-right { float: right !important;  width:auto !important}
    .nav-utility-inner-center { float:right !important; text-align: right; width:auto !important; margin-top:10px !important; }
    .nav-utility-mod { width:auto !important; min-width:auto !important; max-width:auto!important; float:left !important; border-bottom: 1px solid #000; }
    .nav-branding-mod { margin-top:0 !important; }
    .nav-utility-inner { width:auto; }
    .nav-utility-inner .btn-subscribe { display:none !important; }
    .btn-eedition { display:none !important; }
    .js-nav-subscriptions-dropdown { display:none !important; }
    .dpp, .navigation-shortnav-ad { display:none !important; }
    .show-divider { border-left:0 !important; }
    .nav-logo-link { height: 38px !important; width: 260px !important; }
    .nav-utility-btn.show-divider:after { display:none; }
    .l-container { width:100%; }
    .nav-branding-mod, .nav-shortcuts-mod { display:none; }
    .global-nav-mod { padding-left:0; padding-right:0; }
    }

    @media (max-width: 833px) {
    #navigate { display:none; }
    #wrapper{ width:98%; }
    .social_share_m { display:block; width:100%; }
    }


    @media (max-width: 799px) {
    .footer-navigation-links.col-1, .footer-navigation-links.col-2 { float:none !important; width:100%; }
    .footer-navigation-col { width:31% !important; }
    .footer-social-links-label  { display:none; }
    .footer-branding-mod { margin-bottom:20px; }
    .footer-social-links a { width:50px; height:50px; }
    }

    @media (max-width: 742px) {
    .nav-weather-mod, .nav-section-mod { margin-top:40px !important; }
    }

    @media (max-width: 720px) {
    .footer-navigation-col, .footer-top-mod { float:none !important; min-width:300px !important; clear:both !important; margin-top:10px !important; }
    .footer-navigation-links li  a { font-size:20px; }
    .footer-group-h { font-size:24px; }
    #dataSidebar{ display:none !important;}
    #sorting_mobile { display:block !important; }
    #leftPane, #articlePane, #infobox { width:100% !important; }
    .footer-social-links a { width:95px; height:95px; }
    .footer-social-mod { margin-bottom: 20px;  float:none !important; width:100% !important; clear:both !important; }
    .footer-social-links { text-align: left; margin-top:20px; }
    #links_m { display:block; }
    .search-branding-mod{ display:none; }
    }

    @media (max-width: 683px) {
    .footer-social-links a { width:90px; height:90px; }
    }

    @media (max-width: 675px) {
    .nav-branding-mod { margin-top:0 !important; }
    }

    @media (max-width: 660px) {
    .btn-search { display:none; }
    }

    @media (max-width: 652px) {
    .footer-social-links a { width:87px; height:87px; }
    }

    @media (max-width: 645px) {
    .footer-social-links a { width:85px; height:85px; }
    .footer-social-mod { margin-bottom: 20px;  float:none !important; width:100% !important; clear:both !important; }
    .footer-social-links { text-align: left; margin-top:20px; }
    }

    @media (max-width: 627px) {
    .footer-social-links a { width:80px; height:80px; }
    .footer-social-mod { margin-bottom: 20px;  float:none !important; width:100% !important; clear:both !important; }
    .footer-social-links { text-align: left; margin-top:20px; }
    }

    @media (max-width: 611px) {
    .logInBtn { display:none !important; }
    }

    @media (max-width: 600px) {
    .footer-social-links a { width:65px; height:65px; }
    }

    @media (max-width: 538px) {
    .navigation-shortnav-mod { display:none; }
    }

    @media (max-width: 520px) {
    .nav-weather-mod { display:none !important; }
    .footer-social-links a { width:60px; height:60px; }
    .btn-search{ display:none !important; }
    }

    @media (max-width: 488px) {
    .footer-social-links a { width:55px; height:55px; }
    }

    @media (max-width: 461px) {
    .footer-social-links a { width:50px; height:50px; }
    }

    @media (max-width: 432px) {
    .footer-social-links a { width:45px; height:45px; }
    }

    @media (max-width: 425px) {
    .articleName { font-weight:900; font-size:22px; }
    }

    @media (max-width: 417px) {
    .nav-logo-link { display:none !important; }
    }

    @media (max-width: 404px) {
    .footer-social-links a { width:40px; height:40px; }
    }

    @media (max-width: 376px) {
    .footer-social-links a { width:35px; height:35px; }
    }

    @media (max-width: 349px) {
    .footer-social-links a { width:30px; height:30px; }
    }

</style>
<div id="specialContentWrapper">
<!-- mark me bro -->

<div id="articleHeader">
<div id="articleHeadline" class="article-headline">Interactive map of Minneapolis 311 calls</div>
<div class="article-byline-mod">
<div id="bylines" class="article-byline"><strong>By <a href="http://www.startribune.com/eric-roper/62906482/">Eric Roper</a>, <a href="http://www.startribune.com/jeff-hargarten/274254381/">Jeff Hargarten</a> and <a href="http://www.startribune.com/billy-steve-clayton/10644626/">Billy Steve Clayton</a></strong></div>	
<div class="article-dateline">December 8, 2014 - 10:45AM</div>
</div>
<p>From abandoned vehicles to potholes, nearly every citizen complaint in Minneapolis pours into the city's 311 call center. Since 2006, it has been ground zero for the city's non-emergencies, giving City Hall a better idea of where services are needed. The graphic below is a snapshot of 154,000 calls for service that poured in between Sep. 2011 and Sep. 2014. Toggle by category or type an address to see what's happening in your area. <a href="http://www.startribune.com/local/blogs/285492721.html">Read more</a>.</p>
</div>

<div id="wrapper">
<!--<div id="head_chatter">From abandoned vehicles to potholes, nearly every citizen complaint in Minneapolis pours into the city's 311 call center. Since 2006, it has been ground zero for the city's non-emergencies, giving City Hall a better idea of where services are needed. The graphic below is a snapshot of 154,000 calls for service that poured in between Sep. 2011 and Sep. 2014. Toggle by category or type an address to see what's happening in your area.</div>-->

<div id='cssmenu' class="nav-tabs">
<ul>
   <li class='active has-sub'><a href='javascript:void(0);'><span id="hoverMe">Choose type of 311 Call</span></a>
<ul class="nav-tabs">
				<li class="first active">
					<a href="#tab1" onclick="loadScript('js/load1.js',clusterGroup1,1);">Abandoned Bikes</a>
				</li>
				<li>
					<a href="#tab2" onclick="loadScript('js/load2.js',clusterGroup2,2);">Abandoned Vehicles</a>
				</li>
				<li>
					<a href="#tab3" onclick="loadScript('js/load3.js',clusterGroup3,3);">Air Pollution</a>
				</li>
				<li>
					<a href="#tab4" onclick="loadScript('js/load4.js',clusterGroup4,4);">Animals - Public Health</a>
				</li>
				<li>
					<a href="#tab46" onclick="loadScript('js/load46.js',clusterGroup5,5);">Animals - Livability Issues</a>
				</li>
				<li>
					<a href="#tab5" onclick="loadScript('js/load5.js',clusterGroup6,6);">Bike Lanes</a>
				</li>
				<li>
					<a href="#tab7" onclick="loadScript('js/load7.js',clusterGroup8,8);">Chemical Spills</a>
				</li>
				<li>
					<a href="#tab8" onclick="loadScript('js/load8.js',clusterGroup9,9);">Commercial Food Safety</a>
				</li>
				<li>
					<a href="#tab10" onclick="loadScript('js/load10.js',clusterGroup11,11);">Debris</a>
				</li>
				<li>
					<a href="#tab45" onclick="loadScript('js/load47.js',clusterGroup47,47);">General Street Issue</a>
				</li>
				<li>
					<a href="#tab14" onclick="loadScript('js/load14.js',clusterGroup15,15);">Graffiti</a>
				</li>
				<li>
					<a href="#tab15" onclick="loadScript('js/load15.js',clusterGroup16,16);">Hydrants</a>
				</li>
				<li>
					<a href="#tab16" onclick="loadScript('js/load16.js',clusterGroup17,17);">Illegal Dumping</a>
				</li>
				<li>
					<a href="#tab17" onclick="loadScript('js/load17.js',clusterGroup18,18);">Land Pollution</a>
				</li>
				<li>
					<a href="#tab18" onclick="loadScript('js/load18.js',clusterGroup19,19);">Licensing</a>
				</li>
				<li>
					<a href="#tab19" onclick="loadScript('js/load19.js',clusterGroup20,20);">Newspaper Boxes</a>
				</li>
				<li>
					<a href="#tab43" onclick="loadScript('js/load43.js',clusterGroup21,21);">Noise Pollution</a>
				</li>
				<li>
					<a href="#tab20" onclick="loadScript('js/load20.js',clusterGroup22,22);">Parking</a>
				</li>
				<li>
					<a href="#tab21" onclick="loadScript('js/load21.js',clusterGroup23,23);">Permitted Work</a>
				</li>
				<li>
					<a href="#tab22" onclick="loadScript('js/load22.js',clusterGroup24,24);">Potholes</a>
				</li>
				<li>
					<a href="#tab23" onclick="loadScript('js/load23.js',clusterGroup25,25);">Residental Conditions (under 4 units)</a>
				</li>
				<li>
					<a href="#tab24" onclick="loadScript('js/load24.js',clusterGroup26,26);">Residental Conditions (4+ units)</a>
				</li>
				<li>
					<a href="#tab27" onclick="loadScript('js/load27.js',clusterGroup29,29);">Sewers</a>
				</li>
				<li>
					<a href="#tab28" onclick="loadScript('js/load28.js',clusterGroup30,30);">Sidewalk Obstructions</a>
				</li>
				<li>
					<a href="#tab29" onclick="loadScript('js/load29.js',clusterGroup31,31);">Sidewalk Snow</a>
				</li>
				<li>
					<a href="#tab30" onclick="loadScript('js/load30.js',clusterGroup32,32);">Sidewalk Structural Issues</a>
				</li>
				<li>
					<a href="#tab31" onclick="loadScript('js/load31.js',clusterGroup33,33);">Signs</a>
				</li>
				<li>
					<a href="#tab32" onclick="loadScript('js/load32.js',clusterGroup34,34);">Snow and Ice</a>
				</li>
				<li>
					<a href="#tab33" onclick="loadScript('js/load33.js',clusterGroup35,35);">Illegal Dumping of Snow</a>
				</li>
				<li>
					<a href="#tab34" onclick="loadScript('js/load34.js',clusterGroup36,36);">Special Sweeping</a>
				</li>
				<li>
					<a href="#tab36" onclick="loadScript('js/load36.js',clusterGroup38,38);">Sporting Equipment in Street</a>
				</li>
				<li>
					<a href="#tab37" onclick="loadScript('js/load37.js',clusterGroup39,39);">Street Lights</a>
				</li>
				<li>
					<a href="#tab38" onclick="loadScript('js/load38.js',clusterGroup40,40);">Suspicious Activity</a>
				</li>
				<li>
					<a href="#tab39" onclick="loadScript('js/load39.js',clusterGroup41,41);">New Traffic Signals</a>
				</li>
				<li>
					<a href="#tab40" onclick="loadScript('js/load40.js',clusterGroup42,42);">Traffic Signal Timing Issues</a>
				</li>
				<li>
					<a href="#tab41" onclick="loadScript('js/load41.js',clusterGroup43,43);">Traffic Signal Troubles</a>
				</li>
				<li>
					<a href="#tab42" onclick="loadScript('js/load42.js',clusterGroup44,44);">Trees Down</a>
				</li>
				<li>
					<a href="#tab44" onclick="loadScript('js/load44.js',clusterGroup45,45);">Unpermitted Work</a>
				</li>
			</ul>
   </li>
</ul>

<!--close cssmenu-->
</div>

<div id="container">
  <div id="row">

  	<div id="middle">
<div id="chatter">
	<div id="heads"><h1>Abandoned Bikes</h1></div>
	<div id="texts">Calls for abandoned bikes are most prevalent in the western half of downtown and along Hennepin Avenue in Uptown.</div>
</div>
<!-- <div id="map--labels">
	
</div> -->

<div id="sidebox">
<h4>Call density</h4>
<div class="bioColumn">
<section id="tab1" class="tab-content">
<span class="maps"><img src="heatmaps/abandoned_bikes.png"/></span>
</section>
<section id="tab2" class="tab-content hide">
<span class="maps"><img src="heatmaps/abandoned_vehicles.png"/></span>
</section>
<section id="tab3" class="tab-content hide">
<span class="maps"><img src="heatmaps/air_pollution.png"/></span>
</section>
<section id="tab4" class="tab-content hide">
<span class="maps"><img src="heatmaps/animal_health.png"/></span>
</section>
<section id="tab5" class="tab-content hide">
<span class="maps"><img src="heatmaps/bike_lanes.png"/></span>
</section>
<section id="tab6" class="tab-content hide">
<span class="maps"><img src="heatmaps/bridges.png"/></span>
</section>
<section id="tab7" class="tab-content hide">
<span class="maps"><img src="heatmaps/chemical_spills.png"/></span>
</section>
<section id="tab8" class="tab-content hide">
<span class="maps"><img src="heatmaps/commercial_food_safety.png"/></span>
</section>
<section id="tab9" class="tab-content hide">
<span class="maps"><img src="heatmaps/commercial_structure_unsound.png"/></span>
</section>
<section id="tab10" class="tab-content hide">
<span class="maps"><img src="heatmaps/debris.png"/></span>
</section>
<section id="tab11" class="tab-content hide">
<span class="maps"><img src="heatmaps/emergency_pollution.png"/></span>
</section>
<section id="tab12" class="tab-content hide">
<span class="maps"><img src="heatmaps/fence_maintenance.png"/></span>
</section>
<section id="tab13" class="tab-content hide">
<span class="maps"><img src="heatmaps/fire_hydrant_snow.png"/></span>
</section>
<section id="tab14" class="tab-content hide">
<span class="maps"><img src="heatmaps/graffiti.png"/></span>
</section>
<section id="tab15" class="tab-content hide">
<span class="maps"><img src="heatmaps/hydrants.png"/></span>
</section>
<section id="tab16" class="tab-content hide">
<span class="maps"><img src="heatmaps/illegal_dumping.png"/></span>
</section>
<section id="tab17" class="tab-content hide">
<span class="maps"><img src="heatmaps/land_pollution.png"/></span>
</section>
<section id="tab18" class="tab-content hide">
<span class="maps"><img src="heatmaps/licensing.png"/></span>
</section>
<section id="tab19" class="tab-content hide">
<span class="maps"><img src="heatmaps/newspaper_boxes.png"/></span>
</section>
<section id="tab20" class="tab-content hide">
<span class="maps"><img src="heatmaps/parking.png"/></span>
</section>
<section id="tab21" class="tab-content hide">
<span class="maps"><img src="heatmaps/permitted_work.png"/></span>
</section>
<section id="tab22" class="tab-content hide">
<span class="maps"><img src="heatmaps/potholes.png"/></span>
</section>
<section id="tab23" class="tab-content hide">
<span class="maps"><img src="heatmaps/rcc_main.png"/></span>
</section>
<section id="tab24" class="tab-content hide">
<span class="maps"><img src="heatmaps/rcc_hod.png"/></span>
</section>
<section id="tab25" class="tab-content hide">
<span class="maps"><img src="heatmaps/residential_disability_zones.png"/></span>
</section>
<section id="tab26" class="tab-content hide">
<span class="maps"><img src="heatmaps/sand_barrels.png"/></span>
</section>
<section id="tab27" class="tab-content hide">
<span class="maps"><img src="heatmaps/sewers.png"/></span>
</section>
<section id="tab28" class="tab-content hide">
<span class="maps"><img src="heatmaps/sidewalk_obstruction.png"/></span>
</section>
<section id="tab29" class="tab-content hide">
<span class="maps"><img src="heatmaps/sidewalk_snow.png"/></span>
</section>
<section id="tab30" class="tab-content hide">
<span class="maps"><img src="heatmaps/sidewalk_structural.png"/></span>
</section>
<section id="tab31" class="tab-content hide">
<span class="maps"><img src="heatmaps/signs.png"/></span>
</section>
<section id="tab32" class="tab-content hide">
<span class="maps"><img src="heatmaps/snow_ice.png"/></span>
</section>
<section id="tab33" class="tab-content hide">
<span class="maps"><img src="heatmaps/snow_illegal_dumping.png"/></span>
</section>
<section id="tab34" class="tab-content hide">
<span class="maps"><img src="heatmaps/special_sweeping.png"/></span>
</section>
<section id="tab35" class="tab-content hide">
<span class="maps"><img src="heatmaps/speed_wagons.png"/></span>
</section>
<section id="tab36" class="tab-content hide">
<span class="maps"><img src="heatmaps/sports_equipment.png"/></span>
</section>
<section id="tab37" class="tab-content hide">
<span class="maps"><img src="heatmaps/street_lights.png"/></span>
</section>
<section id="tab38" class="tab-content hide">
<span class="maps"><img src="heatmaps/suspicious_activity.png"/></span>
</section>
<section id="tab39" class="tab-content hide">
<span class="maps"><img src="heatmaps/traffic_signal_new.png"/></span>
</section>
<section id="tab40" class="tab-content hide">
<span class="maps"><img src="heatmaps/traffic_signal_timing.png"/></span>
</section>
<section id="tab41" class="tab-content hide">
<span class="maps"><img src="heatmaps/traffic_signal_trouble.png"/></span>
</section>
<section id="tab42" class="tab-content hide">
<span class="maps"><img src="heatmaps/trees_down.png"/></span>
</section>
<section id="tab43" class="tab-content hide">
<span class="maps"><img src="heatmaps/noise_pollution.png"/></span>
</section>
<section id="tab44" class="tab-content hide">
<span class="maps"><img src="heatmaps/unpermitted_work.png"/></span>
</section>
<section id="tab45" class="tab-content hide">
<span class="maps"><img src="heatmaps/urgent_pollution.png"/></span>
</section>
<section id="tab46" class="tab-content hide">
<span class="maps"><img src="heatmaps/animal_livability.png"/></span>
</section>
<section id="tab47" class="tab-content hide">
<span class="maps"><img src="heatmaps/streets.png"/></span>
</section>
</div>
</div>

<div id="mapbox">
<h4>Explore your neighborhood</h4>	
<div id='map'></div>
</div>

<p style="clear:both;padding-top:5px;"></p>
<small>Input an addresses and zipcode into the map's search box or manually navigate with a mouse to examine an area.</small>

	  
	  
<!--close middle -->
</div>

<!--close row-->
</div>

<!--close container-->
</div>


<!--close wrapper-->
</div>

<!--extra?-->
<!--</div>-->

<!--close specialContentWrapper-->
</div>

<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="//cdn.jsdelivr.net/underscorejs/1.6.0/underscore-min.map"></script>
<script src="//cdn.jsdelivr.net/underscorejs/1.6.0/underscore-min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.3/Leaflet.fullscreen.min.js'></script>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="js/script.js"></script>
<!--[if lte IE 8]>
    <link rel="stylesheet" href="http://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.Default.ie.css" />
<![endif]-->
<script src="http://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>


<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1krHb7MyWqYtSsesgu2pKBTqzWOItULPicOAnblI_pfY&sheet=mpls_311_2013
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1krHb7MyWqYtSsesgu2pKBTqzWOItULPicOAnblI_pfY&sheet=mpls_311_2014
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1krHb7MyWqYtSsesgu2pKBTqzWOItULPicOAnblI_pfY&sheet=mpls_311_2015

<?php

$jsonData2013 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=b9-YlZf4Vtqq0epHx8-nuQL7uqfST_7tI8H7WJjiFMV2Kah1tL1UhZlbo5ryQZ4S69cKFBNepHjq-NfOclMvqA5Grtrr3zfLOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TtnzVI3fICRNxOiXXBqBVvH_eOVhLpqwUssxTsn_b-V7oC3XABCZfQlmaKKea6Dax35iDyrfKhrpqYYW4f78JWREE2Zjut61k&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2014 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=zIWQeNpcY9YpAN04TEgzsBo4K1l8L4DIpd75PzKMGSEtS8eeQtdwBIO1wE6SoryFXJ5_-THkhG9HTJF_WT_uoXzuIZDYF4tfOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TtnzVI3fICRNxOiXXBqBVvH_eOVhLpqwUssxTsn_b-V7oC3XABCZfQlmaKKea6Dax35iDyrfKhrpqYYW4f78JWTSI7ofyArkV&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2015 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=HvGUUtl3LHpwspMSh6dmZ228no4yjm-QqjmDbVBdpzc5SR3-e0kk1-GKF4pLYKje5JvcIPiywFnG6BE42wcjgAEzIPrnR3uNOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TtnzVI3fICRNxOiXXBqBVvH_eOVhLpqwUssxTsn_b-V7oC3XABCZfQlmaKKea6Dax35iDyrfKhrpqYYW4f78JWdXtN5TfDqLe&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataLoad2013 = <?php echo $jsonData2013; ?>
var dataLoad2014 = <?php echo $jsonData2014; ?>
var dataLoad2015 = <?php echo $jsonData2015; ?>

// var data2013 = dataLoad2013.mpls_311_2013;
// var data2014 = dataLoad2014.mpls_311_2014;
// var data2015 = dataLoad2015.mpls_311_2015;

$(window).on('resize', function(event){
    var windowWidth = $(window).width();
if(windowWidth < 933){
    $(".nav-utility-btn").text("");
}
});

$(document).ready(function() {
    var windowWidth = $(window).width();
if(windowWidth < 933){
    $(".nav-utility-btn").text("");
}
});

$(document).ready(function(){
$("ul.nav-tabs").hide();
$("#cssmenu ul ul").hide();
$("ul.nav-tabs>li").hide();


$("#hoverMe").hover(function(){
$("ul.nav-tabs").show();
$("#cssmenu ul ul").show();
$("ul.nav-tabs>li").show();
});

$("ul.nav-tabs>li>a").click(function(){
$("ul.nav-tabs").hide();
$("#cssmenu ul ul").hide();
$("ul.nav-tabs>li").hide();
});

$("#middle").click(function(){
$("ul.nav-tabs").hide();
$("#cssmenu ul ul").hide();
$("ul.nav-tabs>li").hide();
});

});

//MENU STUFF
function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}
	$(document).ready(function() {
		$('.nav-tabs > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor

		//get displaying tab content jQuery selector
		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					
 
		//find actived navigation and remove 'active' css
		var actived_nav = $('.nav-tabs > li.active');
		actived_nav.removeClass('active');
 
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
 
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
 
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	     });
	  });

//build map baselayer
L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var map = L.mapbox.map('map', 'mapbox.light')
    .setView([44.9658, -93.2598], 11);

L.control.fullscreen().addTo(map);

map.scrollWheelZoom.disable();

map.addControl(L.mapbox.geocoderControl('mapbox.places-v1', {
        autocomplete: true,
        keepOpen: true
    }));

//build blank clustergroups
var clusterGroup1;
var clusterGroup2;
var clusterGroup3;
var clusterGroup4;
var clusterGroup5;
var clusterGroup6;
var clusterGroup7;
var clusterGroup8;
var clusterGroup9;
var clusterGroup10;
var clusterGroup11;
var clusterGroup12;
var clusterGroup13;
var clusterGroup14;
var clusterGroup15;
var clusterGroup16;
var clusterGroup17;
var clusterGroup18;
var clusterGroup19;
var clusterGroup20;
var clusterGroup21;
var clusterGroup22;
var clusterGroup23;
var clusterGroup24;
var clusterGroup25;
var clusterGroup26;
var clusterGroup27;
var clusterGroup28;
var clusterGroup29;
var clusterGroup30;
var clusterGroup31;
var clusterGroup32;
var clusterGroup33;
var clusterGroup34;
var clusterGroup35;
var clusterGroup36;
var clusterGroup37;
var clusterGroup38;
var clusterGroup39;
var clusterGroup40;
var clusterGroup41;
var clusterGroup42;
var clusterGroup43;
var clusterGroup44;
var clusterGroup45;
var clusterGroup46;
var clusterGroup47;


//build blank array to track map layers
var mapIndex = [];
for (var i = 1; i < 48; i++) {
mapIndex[i] = 0;
}

mapIndex[1] = 1;

map.addLayer(clusterGroup1);
</script>

<script src="js/load1.js"></script>

<script>

function loadScript(filename, mappage, theline){

$.getScript(filename).done(function () {
});

if (mapIndex[1] == 1){clusterGroup1.clearLayers();console.log(filename);}
if (mapIndex[2] == 2){clusterGroup2.clearLayers();console.log(filename);}
if (mapIndex[3] == 3){clusterGroup3.clearLayers();console.log(filename);}
if (mapIndex[4] == 4){clusterGroup4.clearLayers();console.log(filename);}
if (mapIndex[5] == 5){clusterGroup5.clearLayers();console.log(filename);}
if (mapIndex[6] == 6){clusterGroup6.clearLayers();console.log(filename);}
if (mapIndex[8] == 8){clusterGroup8.clearLayers();console.log(filename);}
if (mapIndex[9] == 9){clusterGroup9.clearLayers();console.log(filename);}
if (mapIndex[11] == 11){clusterGroup11.clearLayers();console.log(filename);}
if (mapIndex[15] == 15){clusterGroup15.clearLayers();console.log(filename);}
if (mapIndex[16] == 16){clusterGroup16.clearLayers();console.log(filename);}
if (mapIndex[17] == 17){clusterGroup17.clearLayers();console.log(filename);}
if (mapIndex[18] == 18){clusterGroup18.clearLayers();console.log(filename);}
if (mapIndex[19] == 19){clusterGroup19.clearLayers();console.log(filename);}
if (mapIndex[20] == 20){clusterGroup20.clearLayers();console.log(filename);}
if (mapIndex[21] == 21){clusterGroup21.clearLayers();console.log(filename);}
if (mapIndex[22] == 22){clusterGroup22.clearLayers();console.log(filename);}
if (mapIndex[23] == 23){clusterGroup23.clearLayers();console.log(filename);}
if (mapIndex[24] == 24){clusterGroup24.clearLayers();console.log(filename);}
if (mapIndex[25] == 25){clusterGroup25.clearLayers();console.log(filename);}
if (mapIndex[26] == 26){clusterGroup26.clearLayers();console.log(filename);}
if (mapIndex[29] == 29){clusterGroup29.clearLayers();console.log(filename);}
if (mapIndex[30] == 30){clusterGroup30.clearLayers();console.log(filename);}
if (mapIndex[31] == 31){clusterGroup31.clearLayers();console.log(filename);}
if (mapIndex[32] == 32){clusterGroup32.clearLayers();console.log(filename);}
if (mapIndex[33] == 33){clusterGroup33.clearLayers();console.log(filename);}
if (mapIndex[34] == 34){clusterGroup34.clearLayers();console.log(filename);}
if (mapIndex[35] == 35){clusterGroup35.clearLayers();console.log(filename);}
if (mapIndex[36] == 36){clusterGroup36.clearLayers();console.log(filename);}
if (mapIndex[38] == 38){clusterGroup38.clearLayers();console.log(filename);}
if (mapIndex[39] == 39){clusterGroup39.clearLayers();console.log(filename);}
if (mapIndex[40] == 40){clusterGroup40.clearLayers();console.log(filename);}
if (mapIndex[41] == 41){clusterGroup41.clearLayers();console.log(filename);}
if (mapIndex[42] == 42){clusterGroup42.clearLayers();console.log(filename);}
if (mapIndex[43] == 43){clusterGroup43.clearLayers();console.log(filename);}
if (mapIndex[44] == 44){clusterGroup44.clearLayers();console.log(filename);}
if (mapIndex[45] == 45){clusterGroup45.clearLayers();console.log(filename);}
if (mapIndex[46] == 46){clusterGroup46.clearLayers();console.log(filename);}
if (mapIndex[47] == 47) {clusterGroup47.clearLayers();console.log(filename);}

mapIndex[theline]=theline;

  var descriptions = [
   " ",
   "Calls for abandoned bikes are most prevalent in the western half of downtown and along Hennepin Avenue in Uptown.",
   "A vehicle is considered abandoned if it is missing vital mechanical components or it has been parked in the same place for more than 72 hours, according to Clara Schmit-Gonzalez with the city's regulatory services department. Vehicles that have been parked for more than 72 hours will be given notice they will be ticketed and towed if not moved. Agents then return three days later to see if it is still there. 'We only wind up ticketing in a little over 20% of these cases,' Schmit-Gonzalez said. 'Usually, the vehicle is gone when our agent returns.'",
   "Air pollution complaints relate to various emissions, including idling vehicles. The city's environmental health director, Dan Huff, said the concentration of complaints alongthe North Side riverfront likely reflects major metal recycling and concrete plants located there. 'Whenever we have industry next to residential, we're going to get more complaints,' Huff said. ",
   "Animal complaints categorized under 'public health' refer to serious animal-related issues including animal neglect, abuse and abandonement. It also includes calls about a large number of animals at one property and stray animals that have been found, said 311 Call Center Analyst Diane Nelson.",
   "Animal complaints categorized under 'livability' refer to problems that are nuisance-related. 311 Call Center Analyst Diane Nelson said this could include a barking dog, deceased animal, an animal that is loose or a feces complaint. 'They're more ... things that would bother neighbors,' Nelson said. The calls are densest in north Minneapolis.",
   "Bike lane calls pertain to a wide range of problems from potholes to striping. This map reflects both on-street and off-street bike lane calls, though the category was recently changed to only reflect off-street lanes. The map shows the majority of calls are clustered just off the Midtown Greenway and along the Hiawatha Avenue bike trail.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Unlike land pollution complaints, chemical spills often require the immediate response of city staffers. When one is filed, an alert is sent to environmental inspectors' smartphones. The nearest one then responds and sometimes alerts other departments about any necessary cleanup.",
   "Commercial food safety complaints pertain to health issues in restaurants. The city's environmental health director, Dan Huff, said the pattern of the map reflects the density of restaurants in certain pockets of the city. The biggest clusters include downtown, Nicollet Ave., Lake Street, the University and along West Broadway. 'If I were to show you a map of where restaurants are, it would look almost just like this,' Huff said. He said he has not found a discernable pattern of restaurants in certain corridors attracting more complaints.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Calls filed under 'street debris' refer to items that have been left on the public roadway. An example might include someone leaving a sofa in the middle of the street, said 311 Call Center Analyst Diane Nelson. The complaints are fairly scattered throughout the city, but most prevalent in several North Side neighborhoods.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "The most common calls for service to 311, graffiti complaints are concentrated in South Minneapolis -- above 40th street -- Northeast and the University area. Relatively few pertained to the North Side. Angela Brenny, who oversees the city's graffiti program, said graffiti is often art-related and more prevalent in areas with many artists. Gang graffiti, by comparison, is fairly rare. While she believes there is less graffiti in north Minneapolis, several groups who actively report graffiti elsewhwere in the city likely skew the numbers. City staff used to do regular sweeps of the city for graffiti, but now rely primarily on 311 calls.",
   "Hydrant calls refer to complaints about fire hydrants that are out of service, damaged, leaking water or otherwise having issues.",
   "Illegal dumping refers to the garbage and debris that has been left on private property. Debris in the public-right-of-way are categorized under 'debris.'",
   "Land pollution may refer to leaky fluids from a car or the release of other chemicals that are somehow impacting the land, such as a barrel of fluid that has been dumped outside. This is no distinct pattern to the complaints, though there appear to be more calls about several spots along Hiawatha Avenue -- an industrial corridor.",
   "Licensing complaints pertain to businesses that are either not properly licensed or adhering to the conditions of their license. Examples might include persistent garbage issues or a pedicab not having an appropriate license. The city's business licensing manager, Grant Wilson, said the map generally reflects the locations of business corridors in the city -- particularly Lake Street. 'Since we investigate most complaints about businesses, it makes sense that the dots follow our commercial corridors,' Wilson wrote in an e-mail.",
   "Newspaper box complaints may be filed in response to boxes that are always empty, feature broken windows or have been tipped over. Nearly all of the complaints are located downtown.",
   "Noise complaints typically pertain to ongoing construction activity and block events, or parties that have already concluded. Areas with more construction and outdoor events -- like downtown and Uptown -- draw more complaints, said Dan Huff, the city's environmental health director. The only major cluster below 36th Street is in southwest Minneapolis, where neighbors have clashed with builders over construction activity.",
   "Complaints about parking violations generally fall in the areas where parking density is highest, said Jon Wertjes, the city's director traffic and parking services. That includes Uptown, downtown and the University areas. The Hennepin Avenue spine of downtown and Uptown had the most calls.",
   "Permitted work calls generally involve complaints that a contractor is not abiding by the conditions of their city-issued permits. They are largely concentrated in southwest Minneapolis, where homes have been built at a rapid clip in recent years. The city's development services director, Doug Kress, said complaints include parking issues, dumpsters and portable bathroom placement, as well as the height, bulk, grading and landscaping of the project in question.",
   "Pothole complaints are scattered throughout the city, with some denser clusters on Lake Street, Hennepin Avenue and West Broadway.",
   "These residential condition complaints refer to calls about dwellings under four units. They include calls from occupants reporting internal problems and from passersby, who may notice issues such as broken shutters, broken windows, missing roof tiles, damage to the siding or holes in doors. They are most common in the north Minneapolis, where duplex rental housing is particularly common, and several neighborhoods surrounding Lake Street in south Minneapolis.",
   "These residential condition complaints refer to calls about dwellings with more than four units, as well as some commercial properties. They reflect a mix of tenants reporting problems with a building, outsiders taking note of exterior issues and city staffers logging problems they discover during inspections. The number of these complaints grew dramatically in 2013 largely because staff began making reports to 311.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Sewer complaints, which are scattered throughout the city, primarily reflect calls about sewer backups.",
   "Sidewalk obstruction calls pertain to objects on a sidewalk that are not the responsibility of the adjacent property owner.",
   "Sidewalk snow and ice complaints are registered both by the public and city staff. They pertain to homeowners and businesses that have not shoveled their walkways. The map shows they are most common in Uptown and the southern half of north Minneapolis.",
   "Structural sidewalk complaints often reflect trip hazards and other non-snow problems with a sidewalk. They are largely clustered downtown, where 311 Interim Director Scott Wellan theorized that more people are spotting the same issues.",
   "Sign calls reflect complaints about signs that are in need of repair or intersections where a new sign is needed. The two top intersections were Hennepin-Lake and New Brighton Boulevard-Stinson Parkway.",
   "General snow and ice complaints refer to obstructions spotted in the city's streets or alleyways. They are scattered broadly throughout the city.",
   "Illegal dumping of snow calls involve snow that has been improperly moved to the public right-of-way, such as a street or alley. The calls are most prevalent in several North Side neighborhoods.",
   "Special sweep calls reflect residents who would like the city to use its sweepers to remove debris like sand or gravel outside of the traditional spring and fall street sweeps.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Nearly all of the complaints about sports equipment in the streets pertain to problems in north Minneapolis. Council Member Barb Johnson said portable basketball hoops are often left on the curb after people play a game in the street. 'We have people that play basketball at 4 o'clock in the morning,' Johnson said. 'And the stuff gets left out in the streets, knocked over.' Calls are frequently lodged about problems in an area just northwest of Wirth Lake.",
   "Street light calls, which pertain to overhead lights that illuminate the street, are most prevalent in downtown, Uptown, Prospect Park and central Lake Street, as well as the Field and Regina neighborhoods.",
   "Suspicious activity calls address issues that are not currently in progress, such as a pattern of drug dealing or prostitution at a corner, house or alley. More urgent calls are directed to 911 so a squad can be dispatched. 'There's something that happens on a regular occurrence,' said Diane Nelson, 311 call center analyst. 'It might not be happening now but they want to report those incidents, those would be suspicious activity.' They are somewhat evenly spread out throughout the city, though more densely concentrated in several North Side neighborhoods.",
   "New traffic signal calls 'basically means somebody is requesting that a traffic signal be erected at a particular intersection and a whole study needs to be done,' said 311 Call Center Analyst Diane Nelson.",
   "Traffic signal timing calls relate to the green and red time cycles of traffic lights. It could mean vehicular lights do not allow enough cars to pass, or a walk signal is too abbreviated for someone to cross the street, 311 staffers said. The complaints are most prevalent in downtown and along Hiawatha Avenue, a state highway with a lot of lights to accomodate cross traffic.",
   "Traffic signal trouble complaints address lights that somehow do not function. One of the colors may not light or the pole may have been knocked down, said interim 311 director Scott Wellan.",
   "Trees down calls describe trees or tree branches that are obstructing the public right of way, whether in the street or on the sidewalk.",
   "Unpermitted work complaints focus on construction activity that does not appear to have an accompanying permit. The city's development services director, Doug Kress, said these include sign issues, after-hour noise complaints, debris, dumpsters in the street and general construction complaints. The map shows that the complaints are most common in the lower-income areas of south Minneapolis and the North Side.",
   "Urgent Pollution Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "General street complaints address issues that fall outside other street-related categories (potholes, snow and ice, debris). 311 Call Center Analyst Diane Nelson said examples include calls about an uneven surface, curb repair or standing water."
  ];

  $("#texts").text(descriptions[theline]);

  var headers = [
   ' ',
   'Abandoned Bikes',
   'Abandoned Vehicles',
   'Air Pollution',
   'Animals - Public Health',
   'Animals - Livability Issues',
   'Bike Lanes',
   ' ',
   'Chemical Spills',
   'Commercial Food Safety',
   ' ',
   'Debris',
   ' ',
   ' ',
   ' ',
   'Graffiti',
   'Hydrants',
   'Illegal Dumping',
   'Land Pollution',
   'Licensing',
   'Newspaper Boxes',
   'Noise Pollution',
   'Parking',
   'Permitted Work',
   'Potholes',
   'Residental Conditions',
   'Residental Conditions - HOD',
   ' ',
   ' ',
   'Sewers',
   'Sidewalk Obstructions',
   'Sidewalk Snow',
   'Sidewalk Structural Issues',
   'Signs',
   'Snow and Ice',
   'Illegal Dumping of Snow',
   'Special Sweeping',
   ' ',
   'Sporting Equipment in Street',
   'Street Lights',
   'Suspicious Activity',
   'New Traffic Signals',
   'Traffic Signal Timing Issues',
   'Traffic Signal Troubles',
   'Trees Down',
   'Unpermitted Work',
   'Urgent Pollution',
   'General Street Issue'
  ];

 $("#heads").html("<h1>" + headers[theline] + "</h1>");

}
</script>
</html>
