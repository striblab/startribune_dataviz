<?php
  $blog_path = "http://apps.startribune.com/news/datamancer/index_live.php";
  readfile('http://www.startribune.com/partner/header/294420061/');
  $shareURL = "http://strib.mn/bikeblog";
  $shareTitle = "StarTribune - Bakken Oil trains and public safety";
  $shareDescription = "Minnesota serves as a crossroads for trains carrying volatile crude oil from North Dakota’s Bakken shale formations. How prepared is the state for an oil train disaster?";
  $shareImage = "http://stmedia.startribune.com/images/bike-blog.png";
?>

<meta name="viewport" content="width=device-width, initial-scale=1">

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

<script>
var titleString = "<a class='nav-section-link' href='http://www.startribune.com/local/'' data-linkname='Local' data-linktype='logo navigation' data-modulename='Page Navigation Top' data-moduletype='header-page-nav' data-position='0-13'>LOCAL</a>";

$(".nav-section-mod.col-2 li").html(titleString);

$(".edgetoedge li").removeClass("highlight");

document.title = 'Local';
</script>

<link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css" />
 <style type="text/css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.7.0/nv.d3.min.css");
  @import url("styles.css");
  @import url("http://stage-www.startribune.com/static/css/screen.css?d=1429128267");
  @import url("js/jquery.bxslider.css");
  @import url("https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css");
  @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.7.0/mapbox-gl.css");
  </style> 
  <style>
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
  </style>

  <style>
    body { margin:0; padding:0; overflow:hidden; }
    .mapperWrapper { width: 100%; margin-left:auto; margin-right:auto; text-align:center; }
    #map { width:100%; height:450px !important;  }
    #map2 { width:100%; height:auto; float:left; text-align:center;}
    #map3 { width:100%; height:375px; float:left; text-align:center;}
    .map-legend .swatch { width:20px; height:20px; float:left; margin-right:10px; }
    .leaflet-popup-close-button { display: none; }
    .leaflet-popup-content-wrapper { pointer-events: none; }
    .leaflet-control-attribution{ display:none !important; }
    .leaflet-control-mapbox-geocoder, .leaflet-control-mapbox-geocoder-wrap { position:absolute; border-radius: 0 !important; top:360px; width:100%; margin:0 !important; z-index:900;}
    .leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input[type=text], .leaflet-control-mapbox-geocoder-form  { background: 0 0; border: 0; width: 100% !important; padding: 0 0 0 10px; height: 26px; outline: 0; }
    .mapbox-logo{ display:none !important; }
    #wrapper { width:80%; padding:20px; float:right; }
    .myButton2 { background-color:#2ca25f; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:3px; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:14px; padding:14px; text-decoration:none; font-weight:900; width:100%; }
    .myButton2:hover { background-color:#5cbf2a !important; }
    .myButton2:active { background-color:#5cbf2a; }
    button:focus { outline:0 !important; }
    .breaker { clear:both; padding:5px; }
    .sizer { height:200px; }
    .bx-wrapper { width:97%; }
    .bx-wrapper .bx-pager.bx-default-pager a { background: #ddd !important; }
    .bx-pager.bx-default-pager a.active { background: #61bd1a !important; }
    .bx-viewport { padding:20px; height:400px; margin-right:100px; width:98%}
    .title { font-size:24px; font-weight:900; font-family: Popular; }
    .chatter { font-size:20px; }
    .land { fill: #ddd; }
    .border { fill: none; stroke: #fff; stroke-linejoin: round; stroke-linecap: round; }
    .bubble { fill: brown; fill-opacity: .5; stroke: #fff; stroke-width: .5px; }
    .bubble :hover { stroke: #000; }
    .legend circle { fill: none; stroke: #ccc; }
    .legend text { fill: #777; font: 10px sans-serif; text-anchor: middle; }
    #chart1 { max-width:100%; width:100%; display: block; text-align:center; margin-left:auto; margin-right:auto; height:450px; }
    #chart1 svg { max-width:100% !important; width:100%; height:100%; }
    .source { font-size:12px !important; color:#ccc !important; }
    .title { text-align:center; font-family:Popular; }
    #credits{ padding:25px; margin-top:20px;}
    #nerdbox { padding:25px; }
    .credit_block{width: 100%; margin-bottom: 10px; }
    h3 { font-size:24px;}
    .source { font-size:12px !important; color:#ccc !important; }
    .source_link { float:left; padding-top:5px; width:70%;}
    .source_row {clear:both; height:8px;}
    .download { text-align:center; }
    .download_links { padding-top:10px;}
    .downloadButton:hover { background-color:#378f00 !important; }
    .downloadButton { background-color:#61bd1a; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:3px; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:28px; padding:13px; text-decoration:none; font-weight:900; margin:5px; width:300px; }
    .downloadButton:active { background-color:#378f00; }
    #intro_photo { max-width:100%; width:100%; display: block; text-align:center; margin-left:auto; margin-right:auto; }
    .chatter { height:auto; font-size:20px; }
    .bxslider li a { font-weight:bold; }

    .qIcon { width:10%; float:left; margin:10px; display:none; padding-bottom:2%; }
    .qIcon img { width:100%; display:block; }
    .question { font-size:16px; }

    .bxslider li { display:block; margin-bottom:40px; border: 1px solid #ddd; width:auto; height:auto !important; padding:10px; padding-bottom:5%;}

    .legend2 label, .legend2 span { display:block; float:left; height:3px; width:48%; padding:2px; margin:2px; text-align:center; font-size:12px; color:#808080; }
    #legendInner { width:200px; height:20px; }

    .background { fill: none; pointer-events: all; }
    #states { fill: #aaa; }
    #state-borders { fill: none; stroke: #fff; stroke-width: 2px; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
    #states .active { fill: #333 !important; fill-opacity: 1 !important; }
    .faded { fill-opacity: 0.5 !important; }
    #states .active:hover { fill:#333 !important; }
    #states path:hover{ fill:#333 !important; }
    .tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-size:12px; font-family:Arial; }
    .legend label, .legend span { display:block; float:left; height:15px; width:30px; text-align:center; font-size:11px;  color:#808080; }
    #evac { float:right; }

    .countyName { font-weight:bold; font-size:14px; }
    .prevalence { font-size: 14px; }

    .dataTables_scrollBody { border-left: 1px solid #111; border-bottom: 0 !important; }
      th{ visibility:hidden; }
    td{ padding: 8.88px !important; font-family:Arial; }
    tr.odd td.sorting_1 { background-color: #efefef; }
    tr.even td.sorting_1 { background-color: #efefef; }
    tr.even { background-color: #fff !important; }
    tr.odd { background-color: #fff !important; }
    .dataTables_length{ display:none; }
    .dataTable{ margin-bottom:18px; }
    .dataTables_filter{ margin:10px; visibility:hidden;}
    .dataTables_length, .dataTables_info { display:none; }
    .dataTables_info { display:none;}
    .dataTables_scrollHead { display:none;}
    th { background: #ccc !important; }
    table.dataTable.no-footer{ margin-bottom:0 !important; }
    table { font-size:12px; }
    .dataTables_scrollBody thead{ visibility:hidden;height:0 !important; }
    th.sorting_asc, th.sorting_desc { background:#333 !important; font-weight:bold; color:#fff;}
    th { display: table-cell;vertical-align: initial; }
    th { padding:5px !important; }

    .p-break { margin:25px;}

    .nvtooltip { position: absolute; background-color: rgba(255,255,255,1); padding: 10px; border: 1px solid #000; z-index: 10000; width:auto; font-family: Arial;font-size: 16px; transition: opacity 200ms linear; -moz-transition: opacity 200ms linear; -webkit-transition: opacity 200ms linear; transition-delay: 200ms; -moz-transition-delay: 200ms; -webkit-transition-delay: 200ms; -moz-border-radius: 0; pointer-events: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
    .nvtooltip h3 { margin: 0; padding: 5px; text-align: center; font-weight:900; background:white !important; font-size:14px; }
    .nvtooltip p { margin: 0; padding: 0; text-align: center; }
    .nvtooltip span { display: inline-block; margin: 2px 0; }
    .nvtooltip-pending-removal { position: absolute; pointer-events: none; }

    #navigate { width:15%; min-width:150px; padding:2px; border: 1px solid black; text-align:center; background:white; float:left; }
    .f-nav{ z-index: 9999; position: fixed; left: 0; top: 0; width: 100%;}
    .myButton2 { background-color: #61bd1a; border: 0; border-radius: 0; color: #ffffff; cursor: pointer; display:block; font-family: arial; font-size: 16px; font-weight: 900; moz-border-radius: 16px; padding: 13px; text-decoration: none; webkit-border-radius: 16px; width: 95%; margin:5px;}
    .myButton2:hover { background-color: #378f00 !important; }
    .myButton2:active { background-color: #378f00; }
    button:focus { outline: 0 !important; }

  </style>

  <style type="text/css"> 
/*style me bro*/

    .specialContentWrapper{ width:100%; }
    #sorting_mobile { display:none; }
    #leftPane { float:left !important; width:60% !important; }
    #infobox { font-size:16px; margin:10px; }
    #infobox p { padding:3px; }
    #logo_container { width:27%; }
    .datalab-logo { float:left; margin:10px; width:100%;}
    #articlePane { display:inline-block !important;  }
    .articleEntry { margin:30px; }
    .articleName { font-weight:900; font-size:28px; }
    .articlePhoto img { border: 1px solid #000; padding:1px; width:100%; max-width:100%; }
    .byline { font-weight:bold; }
    #dataSidebar { float:right !important; display:inline-block !important; width:35% !important; border: 1px solid #ddd; }
    .sectionBox { margin:7px; }
    .creditBox { width:32%; height:auto; float:left; }
    #team { font-weight:bold; clear:both; }
    .sort-link { border-bottom: 1px solid #000; padding:15px; font-size:14px; }
    #searchMe, #searchMe_m { padding:15px; font-size:14px; }
    .fixed { position:fixed; top:40px !important;}
    .git { font-size: 16px; background-color:#61bd1a; -moz-border-radius:16px; -webkit-border-radius:16px; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; padding:8px; text-align:center; text-decoration:none; font-weight:900; width:100%; margin-bottom:7px; }
    .git:hover { cursor:pointer; }
    #github { padding:15px; font-size:14px; }
    .gitlogo, .bloglogo { width:100%; display:block; margin:3px; }
    #search-criteria, #search-criteria_m { width:98%; }
    #search-criteria_m { height:40px; font-size:20px; }
    .links { text-align:center; } 
    .l-container { text-align:left !important; }
    .nav-section-mod.col-2 li { text-align:center !important; }
    .nav-shortcuts-inner { text-align:center !important; }
    .link { float:left; width:48%; text-align:center; font-size:16px; padding:10px; font-weight:bold; display:inline-block; }
    .more { font-size:18px; display:block; text-align:center; }
    #links_m { display:none; }

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


    @media (max-width: 933px) {
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
    }

    @media (max-width: 833px) {
    #navigate { display:none; }
    #wrapper{ width:98%; }
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
    .nav-branding-mod { text-align:center !important; }
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

<div id="navigate">
<a href="#intro"><button id="introB" class="myButton2">Intro</button></a>
<a href="#evacuation"><button id="evacuationB" class="myButton2">Evacuation</button></a>
<a href="#population"><button id="populationsB" class="myButton2">Population</button></a>
<a href="#accidents"><button id="accidentsB" class="myButton2">Accidents</button></a>
<a href="#training"><button id="trainingB" class="myButton2">Training</button></a>
<a href="#derailmentsS"><button id="derailmentsB" class="myButton2">Derailments</button></a>
<a href="#faq"><button id="faqB" class="myButton2">FAQ</button></a>
<a href="#creditsS"><button id="creditsB" class="myButton2">Credits</button></a>
</div>

<div id="wrapper">

<div id='intro' class="anchor"></div>
<ul class="bxslider">
  <li>

<div class="title">Bakken Oil trains and public safety</div>

<img id="intro_photo" src="img/AX184_1807_9.JPG"/>

<div class="source">An oil train moves through St Paul, MN July 25, 2014. Connor Lake.</div>
<div class="chatter">
<p>Minnesota serves as a crossroads for trains carrying volatile crude oil from North Dakota’s Bakken shale formations. How prepared is the state for an oil train disaster?</p>
<p class="p-break"></p>
<p>It’s been 25 years since a death involving crude oil transportation by rail has occurred in the United States, and hazardous materials incidents on railroads have decreased by more than 90 percent since 1980. But oil train traffic is increasing, and recent accidents and resulting evacuations have underscored the risks.</p>
<p class="p-break"></p>
<p>Those hazards became clear in July 2013 in the town of Lac-Mégantic, in the Canadian province of Quebec, where an untended freight train carrying Bakken crude oil rolled down a hill, derailed and burst into flame, killing 47 people.</p>
<p class="p-break"></p>
<p>The U.S. Department of Transportation predicts trains hauling crude oil or ethanol will derail 10 times a year, on average, over the next two decades, causing more than $4 billion in damage and killing perhaps hundreds of people if the incidents occur in densely populated corridors, the Associated Press reported in February.</p>
<p class="p-break"></p>
<p>The Star Tribune took a closer look at rail incidents and the emergency preparedness improvements the state of Minnesota launched in 2014 in case such an incident occurred here.</p>
</div>
  </li>

<div id='evacuation' class="anchor"></div>
  <li>
  
  <div class="title">Is your home or work in a potential evacuation zone?</div>

<div class="mapperWrapper">

<div id='legend' style='display:none;'>
<div id="legendInner">
  <nav class='legend2 clearfix'>
    <span style='background:#900;'></span>
    <span style='background:#333;'></span>
    <span style='background:#fff;'>Buffer Zone</span>
    <span style='background:#fff;'>Rail Line</span>
    </nav>
    </div>
</div>
  <div id='map'></div>
  </div>
<div class="source">Source: Minnesota Department of Transportation </div>
<div class="chatter">
<strong>Type your address in the “Search” box, in the lower left, to zoom the map to your location.</strong>
<p class="p-break"></p>
<p>On average, seven trains a day roll through Minnesota carrying 3.3 million gallons of crude oil. This map shows the lines that carry the Bakken crude and the half-mile-wide corridors on either side. That’s the area designated by public safety officials as the evacuation zone in the event of a significant leak or fire.  Some 326,000 people live within those corridors.</p>
<p class="p-break"></p>
<p>Officials would order an evacuation if a leak posed a major health threat or a fire broke out, said Kevin Reed, operations branch director for Minnesota’s Homeland Security and Emergency Management division.  “It’s not automatic,” he said.</p>

</div>
  </li>

<div id='population' class="anchor"></div>
  <li>
  
<div class="title">Population centers along the rail lines </div>

<div id='legendCircle' style='display:none;'>
<nav class='clearfix'>
    <img src="img/legend.png" />
    </nav>
</div>

<div id='map3'><svg width="100%" height="400" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid"></svg></div>
<div class="breaker"></div>
<div class="source">Source: Star Tribune analysis</div>
<div class="chatter">
<p>A Star Tribune analysis of the evacuation corridors found that an incident in rural Minnesota might result in fewer than 10 people being evacuated, while one in northeast Minneapolis might result in the evacuation of as many as 8,000 residents and anyone else who happened to be in the area.</p>
<p class="p-break"></p>
<p>This map shows some of the population centers along the rail and the number of people who live within a half-mile. The default evacuation zone for a train carrying crude oil is a half-mile radius around the wreckage. If an explosion occurs or is likely, the zone would be extended to a mile.</p>
<p class="p-break"></p>
<p>Reed, the state emergency management official, noted that crude oil incidents have resulted in “fire balls” rather than explosions, however. Explosions, he said, produce shrapnel, which has the potential to travel farther. Photos taken after crude oil train fires near Charleston, W. Va, and Casselton, N.D., show that the tanker cars burned but were otherwise left virtually intact, he said. </p>
<p class="p-break"></p>
<p>Reed said the last rail incident he could recall that resulted in an evacuation in Minnesota took place in 2012. A semi-trailer truck struck a train near Plummer, killing the driver and puncturing a 30,000-gallon rail tanker that was filled with a flammable, aromatic petroleum-based concentrate. Residents around Plummer, population 292, were evacuated for about two hours.</p>
</div>
  </li>

<div id='accidents' class="anchor"></div>
  <li>
  
<div class="title">Minnesota train accidents have been declining</div>

<div id='chart1'><svg></svg></div>
<div class="source">Source: Federal Railroad Administration</div>
<div class="chatter">
<p>Despite the recent incidents involving oil trains, the number of derailments or highway-crossing accidents, both nationally and in Minnesota, has generally declined.</p>
<p class="p-break"></p>
<p>From 2000 to 2014, there were 1,203 railway incidents of all types in Minnesota, according to a Star Tribune analysis. Derailments were the most common type, accounting for nearly two out of three incidents. But they are trending downward, ranging from a high of 65 in 2001 to a low of 39 in 2012 before rebounding to 47 in 2013 and 2014.</p>
<p class="p-break"></p>
<p>The railroad mishaps killed 16 people and injured 79. Four out of five incidents resulting in injuries were attributed to vehicles at rail crossings.</p>
<p class="p-break"></p>
<p>That’s compared to 10 injuries, and no deaths, associated with freight train derailments and other accidents that did not involve collisions with highway vehicles.</p>
<p class="p-break"></p>
<p>This year, the Legislature allocated $5 million for rail projects, less than one-sixth of what Gov. Mark Dayton called for spending. Most of that money will be applied toward 38 rail grade crossing projects, which are projected to cost MnDOT $8.8 million, a spokesman said.</p>
</div>
<div class="breaker"></div>
  </li>
<div id='training' class="anchor"></div>
  <li>
  
  <div class="title">State beefing up training for first responders</div>

  <div id='map2'><svg width="100%" height="400" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid"></svg></div>
<div class='legend' id="evac">
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Less</span>
    <span style='background:#C6A29E;'></span>
    <span style='background:#A45958;'></span>
    <span style='background:#9B161F'></span>
    <span style='background:#210507'></span>
    <span style='background:#fff;'>More</span>
</div>

<div class="source">Source: Minnesota Department of Public Safety</div>
<div class="breaker"></div>
<div class="chatter">
<p>Legislation that took effect in July2014 tightened public oversight of Minnesota railroads, increased safety inspections and added specialized training for the 343 fire departments along the oil shipment routes.</p>
<p class="p-break"></p>
<p>Public safety officials say the training sessions are on schedule, and expect to have 110 departments through the program by the end of July 2015. As of mid-May, 2,382 first-responders had gone through the training in 96 sessions.</p>
<p class="p-break"></p>
<p>Click on any county in the map to see the number of departments that have been trained, as of mid-May 2015.</p>

</div>
  </li>

<div id='derailmentsS' class="anchor"></div>
  <li>
  
<div class="title">Recent oil train derailments in United States and Canada</div>

<div id='map4'><svg width="800" height="400" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid"></svg></div>
<div class="source">Source: Congressional Research Service report and media reports</div>
<div class="breaker"></div>
<table id ="derailments" width="100%">
  <thead>
    <tr>
      <th class="date-cell">date</th>
      <th class="city-cell">city</th>
      <th class="location-cell">location</th>
      <th class="description-cell">description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="firstRow">
      <td class="date-cell">3/27/13</td>
      <td class="city-cell">Parkers Prairie</td>
      <td class="location-cell">Minnesota</td>
      <td class="description-cell">A mile-long training hauling oil from Canada derailed, spilling  15,000 gallons of crude. There were no injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">5/21/13</td>
      <td class="city-cell">Jansen</td>
      <td class="location-cell">Saskatchewan</td>
      <td class="description-cell">A freight train jumped the tracks in southeastern Saskatchewan and spilled more than 91,000 litres of oil. Canadian Pacific Rail said five cars derailed, but only one leaked its contents.</td>
    </tr>
    <tr>
      <td class="date-cell">7/5/13</td>
      <td class="city-cell">Lac Megantic</td>
      <td class="location-cell">Quebec</td>
      <td class="description-cell">A train with 72 loaded tank cars of crude oil from North Dakota moving from Montreal, Quebec, to St. John, New Brunswick, stopped at Nantes, Quebec, at 11:00 pm. The operator and sole railroad employee aboard the train secured it and departed, leaving the train on shortline track with a descending grade of about 1.2%. At about 1:00 AM, it appears the train began rolling down the descending grade toward the town of Lac-MŽgantic, about 30 miles from the U.S. border. Near the center of town, 63 tank cars derailed, resulting in multiple explosions and subsequent fires. There were 47 fatalities and extensive damage to the town. 2,000 people were evacuated. The initial determination was that the braking force applied to the train was insufficient to hold it on the 1.2% grade and that the crude oil released was more volatile than expected.</td>
    </tr>
    <tr>
      <td class="date-cell">10/19/13</td>
      <td class="city-cell">Gainford</td>
      <td class="location-cell">Alberta</td>
      <td class="description-cell">Nine tank cars of propane and four tank cars of crude oil from Canada derailed as a Canadian National train was entering a siding at 22 miles per hour. About 100 residents were evacuated. Three of the propane cars burned, but the tank cars carrying oil were pushed away and did not burn. No one was injured or killed.</td>
    </tr>
    <tr>
      <td class="date-cell">11/7/13</td>
      <td class="city-cell">Aliceville</td>
      <td class="location-cell">Alabama</td>
      <td class="description-cell">A train hauling 90 cars of crude oil from North Dakota to a refinery near Mobile, AL, derailed on a section of track through a wetland near Aliceville, AL. Thirty tank cars derailed and some dozen of these burned. No one was injured or killed. The derailment occurred on a shortline railroadÕs track that had been inspected a few days earlier. The train was travelling under the speed limit for this track. </td>
    </tr>
    <tr>
      <td class="date-cell">12/10/13</td>
      <td class="city-cell">Cheektowaga</td>
      <td class="location-cell">New York</td>
      <td class="description-cell">Several tank cars carrying crude oil derailed on a train traveling from Chicago to Philadelphia. There were no leaks or injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">12/30/13</td>
      <td class="city-cell">Cassleton</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">An eastbound BNSF Railway train hauling 106 tank cars of crude oil struck a westbound train carrying grain that shortly before had derailed onto the eastbound track. Some 34 cars from both trains derailed, including 20 cars carrying crude, which exploded and burned for over 24 hours. About 1,400 residents of Casselton were evacuated but no injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">1/7/14</td>
      <td class="city-cell">Plaster Rock</td>
      <td class="location-cell">New Brunswick</td>
      <td class="description-cell">Seventeen cars of a mixed train hauling crude oil, propane, and other goods derailed likely due to a sudden wheel or axle failure. Five tank cars carrying crude oil caught fire and exploded. The train reportedly was delivering crude from Manitoba and Alberta to the Irving Oil refinery in Saint John, New Brunswick. About 45 homes were evacuated but no injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">1/20/14</td>
      <td class="city-cell">Philadelphia</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">Seven cars of a 101-car CSX train, including 6 carrying crude oil, derailed on a bridge over the Schuylkill River. No injuries and no leakage were reported, but press photographs showed two cars, one a tanker, leaning over the river.</td>
    </tr>
    <tr>
      <td class="date-cell">1/31/14</td>
      <td class="city-cell">New Augusta</td>
      <td class="location-cell">Mississippi</td>
      <td class="description-cell">About 50 people were evacuated in this southeast Mississippi community after 18 cars of an 85-car train carrying chemicals derailed. No one was hurt in the accident. An ethanol-based product spilled, which led to the precautionary evacuation.</td>
    </tr>
    <tr>
      <td class="date-cell">2/13/14</td>
      <td class="city-cell">Vandergrift</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">Twenty-one tank cars of a 120-car train derailed outside Pittsburgh. Nineteen of the derailed cars were carrying crude oil from western Canada, and four of them released product. There was no fire or injuries.</td>
    </tr>
    <tr>
      <td class="date-cell">4/30/14</td>
      <td class="city-cell">Lynchburg</td>
      <td class="location-cell">Virginia</td>
      <td class="description-cell">Fifteen cars in a crude oil train derailed in the downtown area of this city. Three cars caught fire, and some cars derailed into a river along the tracks. The immediate area surrounding the derailment was evacuated. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">5/9/14</td>
      <td class="city-cell">LaSalle</td>
      <td class="location-cell">Colorado</td>
      <td class="description-cell">Six cars of a 100-car Union Pacific crude oil train derailed, spilling a small amount of oil from one tank car into a nearby ditch. No one was injured. </td>
    </tr>
    <tr>
      <td class="date-cell">11/13/14</td>
      <td class="city-cell">Casselton</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">A traing carrying lumber and other products derailed, striking a passing empty oil train traveling in the other direction. No one was hurt. </td>
    </tr>
    <tr>
      <td class="date-cell">12/1/14</td>
      <td class="city-cell">Bluffton</td>
      <td class="location-cell">Minnesota</td>
      <td class="description-cell">More than 30 train cars derailed a half-mile east of Bluffton. The tank cars on the BNSF train were empty. Other rail cars were carrying sugar, corn meal, lumber and other non-hazardous materials. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">2/2/15</td>
      <td class="city-cell">Philadelphia</td>
      <td class="location-cell">Pennsylvania</td>
      <td class="description-cell">An 111-car freight train carrying crude oil partially derailed. No injuries or spills were reported. The cars remained upright.</td>
    </tr>
    <tr>
      <td class="date-cell">2/4/15</td>
      <td class="city-cell">Dubuque</td>
      <td class="location-cell">Iowa</td>
      <td class="description-cell">A Canadian Pacific train carrying ethanol derailed along the Upper Mississippi. The Environmental Protection Agency estimated that about 55,000 gallons spilled, some of which burned and some of which was recovered from the river.</td>
    </tr>
    <tr>
      <td class="date-cell">2/14/15</td>
      <td class="city-cell">Timmins</td>
      <td class="location-cell"> Ontario</td>
      <td class="description-cell">Twenty-nine of 100 cars went off the track near Timmins, Ontario, spilling oil and causing a fire.</td>
    </tr>
    <tr>
      <td class="date-cell">2/16/15</td>
      <td class="city-cell">Mount Carbon</td>
      <td class="location-cell">West Virginia</td>
      <td class="description-cell">A train carrying more than 100 tankers of crude oil derailed, sending at least one into the Kanawha River, igniting at least 14 tankers and sparking a house fire. One person was treated for potential inhalation issues, but no other injuries were reported. Nearby residents were evacuated.</td>
    </tr>
    <tr>
      <td class="date-cell">3/1/15</td>
      <td class="city-cell">New Orleans</td>
      <td class="location-cell">Louisiana</td>
      <td class="description-cell">Two railroad tank cars carrying crude oil derailed in eastern New Orleans. There were no reported spills or injuries.The accident occurred while the train was traveling at </td>
    </tr>
    <tr>
      <td class="date-cell">3/5/15</td>
      <td class="city-cell">Galena</td>
      <td class="location-cell">Illinois</td>
      <td class="description-cell">A BNSF train derailed in a rural area. Twenty-one of the 105 cars, containing Bakken formation crude oil, left the track and caught fire. No injuries were reported.</td>
    </tr>
    <tr>
      <td class="date-cell">3/7/15</td>
      <td class="city-cell">Gogama</td>
      <td class="location-cell"> Ontario</td>
      <td class="description-cell">A fireball erupted among oil tank cars, and 38 cars broke free of the train. At least one rolled into the Makami River. A number of cars spilled oil, igniting a large pool fire which destoyed the steel rail bridge over the river. About 700 feet of track was destoyed.</td>
    </tr>
    <tr class="lastRow">
      <td class="date-cell">5/6/15</td>
      <td class="city-cell">Heimdal</td>
      <td class="location-cell">North Dakota</td>
      <td class="description-cell">Residents of Heimdal were evacuated for about one day, after a train carrying crude oil derailed, caught fire and exploded. The six cars that caught fire were carrying about 180,000 gallons of oil, according to BNSF. The six cars were a model slated to be phased out or retrofitted by 2020 under a recently announced federal rule.</td>
    </tr>
  </tbody>
</table>
  </li>

 <div id='faq' class="anchor"></div>
 <li>

  <div class="title">Frequently-asked questions about Bakken oil trains</div>
<p class="p-break"></p>
<div id='facts'>
<div class="qIcon"><img src="img/question.png" /></div><div class="question"><strong>Which railroad companies carry crude shipments in Minnesota?</strong>
<p>The BNSF Railway and Canadian Pacific Railway originate almost all crude oil shipments from North Dakota's Bakken oil field. The Fort Worth, Tex.-based BNSF (Burlington Northern Santa Fe) railroad transports 75 percent of all North Dakota-produced oil.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="qIcon"><img src="img/question.png" /></div><div class="question"><strong>What is Bakken oil? What are its qualities? Do local Minnesota refineries process this oil?</strong>
<p>Oil from the Bakken field is characterized as a "sweet, light" crude, with the same consistency as diesel or jet fuel. The oil comes from deep beds of shale that is extracted through the application of new technology, including directional drilling and hydraulic fracturing. Bakken oil contains a high percentage of natural gas liquids, which increases its flammability. Minnesota refineries normally do not process Bakken crude, since they are designed to refine heavy sour crude oils such as Canadian tar sand oil.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="qIcon"><img src="img/question.png" /></div><div class="question"><strong>How much crude travels through Minnesota, including the Twin Cities, by rail each day?</strong>
<p>On average, seven oil-carrying trains pass through Minnesota daily, with as many as six through the Twin Cities. Each train carries 3.3 million gallons of oil among 110 loaded cars.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="qIcon"><img src="img/question.png" /></div><div class="question"><strong>Where are these shipments going?</strong>
<p>The majority of the Bakken oil is shipped from oil fields in North Dakota through Minnesota to various refineries in the Midwest and Eastern seaboard.</p></div>
<p class="p-break"></p>
<div class="breaker"></div>
<div class="qIcon"><img src="img/question.png" /></div><div class="question"><strong>What steps are railroads taking to prevent future accidents?</strong>
<p>Railroad companies have voluntarily agreed to slow down oil trains in 45 "high-threat urban areas," including the Twin Cities. As of March 1, 2014, US DOT and the railroads have agreed to limit speeds in urban areas to 40 m.p.h. Previous speeds were 50 m.p.h. or more. Further steps include more frequent track and car inspections, stricter operating rules and better hazmat documentation. BNSF in particular is taking steps to build new cars with thicker walls and more quickly retiring older cars. Railroads are cooperating on training upgrades for local responders to meet current needs.</p></div>

</div>
<div class="source"><a href="http://www.dot.state.mn.us/ofrw/crude-by-rail/crude_faqs.html#four" target="new_">Source: Minnesota Department of Transportation</a></div>
  </li>

<div id='creditsS' class="anchor"></div>
  <li>
<div style="clear:both"></div>
<div id="nerdbox">
  <h3>Data Sources</h3>
  
  <div class="source_links">
  <p class='source_row'><div class="source_link"><a href="http://www.fra.dot.gov/Page/P0001" target="new_">Federal Railroad Administration</a></div></p>
  <p class='source_row'><div class="source_link"><a href="https://dps.mn.gov/Pages/default.aspx" target="new_">Minnesota Department of Public Safety</a></div></p>
  <p class='source_row'><div class="source_link"><a href="http://www.dot.state.mn.us/" target="new_">Minnesota Department of Transportation</a></div></p>
  <p class='source_row'><div class="source_link"><a href="http://www.census.gov/" target="new_">U.S. Census Bureau</a></div> </p>

  </div>

</div>

<div class="download_links">
  <div class="download"><a href="https://github.com/jhargarten/dataviz-projects/blob/master/strib/20150607-bakken/data/oiltraindata.zip?raw=true" target="new_"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
</div>

<div id="credits">
    <h3>Credits</h3>

  <div class="credit_block">
  <h5>Reporting</h5>
  <p>Dan Browning</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Dan.Browning@startribune.com?subject=Bakken Oil Trains" data-linkname="Matt.DeLong@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Dan.Browning@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4493" data-linkname="612-673-4493" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4493</a> <a class="article-author-hcard__twitter" href="http://twitter.com/browningstrib" target="_blank" data-linkname="browningstrib" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">browningstrib</a></p>
  </div>

  <div class="credit_block">
  <h5>Reporting</h5>
  <p>MaryJo Webster</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:MaryJo.Webster@startribune.com?subject=Bakken Oil Trains" data-linkname="MaryJo.Webster@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">MaryJo.Webster@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-1789" data-linkname="612-673-1789" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-1789</a> <a class="article-author-hcard__twitter" href="http://twitter.com/maryjowebster" target="_blank" data-linkname="maryjowebster" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">maryjowebster</a></p>
  </div>

     <div class="credit_block">
  <h5>Data Visualization and Presentation</h5>
  <p>Jeff Hargarten</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Jeff.Hargarten@startribune.com?subject=Bakken Oil Trains" data-linkname="Jeff.Hargarten@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Jeff.Hargarten@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4642" data-linkname="612-673-4642" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4642</a> <a class="article-author-hcard__twitter" href="http://twitter.com/jeffhargarten" target="_blank" data-linkname="jeffhargarten" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">jeffhargarten</a></p>
  </div>
  </li>
</ul>

</div>

</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js'></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js" type="text/javascript"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.js'></script>
<script src='https://cartodb-libs.global.ssl.fastly.net/torque.full.js'></script>
<script src="js/nvd3-master/lib/d3.v3.js"></script>
<script src="js/nvd3-master/nv.d3.js"></script>
<script src="js/nvd3-master/src/utils.js"></script>
<script src="js/nvd3-master/src/tooltip.js"></script>
<script src="js/nvd3-master/src/models/legend.js"></script>
<script src="js/nvd3-master/src/models/axis.js"></script>
<script src="js/nvd3-master/examples/stream_layers.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.7.0/mapbox-gl.js'></script>
<script src='//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js'></script>
<script src="js/waypoints/lib/noframework.waypoints.min.js"></script>

<script>
// $( document ).ready(function() {
//   slider = $('.bxslider').bxSlider();
//   var current = slider.getCurrentSlide();
// });



jQuery("document").ready(function($){

$("#introB").css("background-color","#333");

  $( ".myButton2" ).click(function() {
  $(".myButton2").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  }); 
    
    var nav = $('#navigate');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
 
});

var waypoint1 = new Waypoint({
  element: document.getElementById('intro'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#introB").css("background-color","#333");
  }
})
var waypoint2 = new Waypoint({
  element: document.getElementById('evacuation'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#evacuationB").css("background-color","#333");
  }
})
var waypoint3 = new Waypoint({
  element: document.getElementById('population'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#populationsB").css("background-color","#333");
  }
})
var waypoint4 = new Waypoint({
  element: document.getElementById('accidents'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#accidentsB").css("background-color","#333");
  }
})
var waypoint5 = new Waypoint({
  element: document.getElementById('training'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#trainingB").css("background-color","#333");
  }
})
var waypoint6 = new Waypoint({
  element: document.getElementById('derailmentsS'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#derailmentsB").css("background-color","#333");
  }
})
var waypoint7 = new Waypoint({
  element: document.getElementById('faq'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#faqB").css("background-color","#333");
  }
})
var waypoint8 = new Waypoint({
  element: document.getElementById('creditsS'),
  handler: function(direction) {
  $(".myButton2").css("background-color","#61bd1a");
  $("#creditsB").css("background-color","#333");
  }
})
</script>

<script>
var aspect = 800 / 400, chart = $("#map4 svg"), chart2 = $("#map2 svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
  chart2.attr("width", targetWidth);   
  chart2.attr("height", targetWidth / aspect);
});
</script>

<script type="text/javascript" charset="utf-8">
        $(document).ready(function() {
            derailTable = $('#derailments').dataTable( {
                "scrollCollapse": false, 
                "paging": false,
                "oLanguage": {"sSearch": ""}
            } );

            derailTable.fnSort( [ [0,'asc'] ] );
        } );


    </script>

<script>

var southWest = L.latLng(40.78054, -80.22217),
northEast = L.latLng(49.56798, -110.76416),
bounds = L.latLngBounds(southWest, northEast);

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = L.mapbox.map('map', 'examples.map-20v6611k', {minZoom: 6, maxBounds: bounds})
    .setView([46.543750,-94.493408], 6);

map.scrollWheelZoom.disable();

map.legendControl.addLegend(document.getElementById('legend').innerHTML);

var geocoderControl = L.mapbox.geocoderControl('mapbox.places', {
        keepOpen: true
    });
geocoderControl.addTo(map);

geocoderControl.on('found', function(res) {
   // console.log(res.results.features[0])

var here = "";

if (here != "") { map.removeLayer(here); }

   here = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: res.results.features[0].geometry.coordinates
    },
    properties: {
        title: 'Approximate address location',
        description: res.results.features[0].place_name,
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#900'
    }
})
   map.addLayer(here);

   map.setView([res.results.features[0].geometry.coordinates[1],res.results.features[0].geometry.coordinates[0]],9);

  $('.leaflet-control-mapbox-geocoder-results a').on('click', function() {

    if (here != "") { map.removeLayer(here); }

             here = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: res.results.features[0].geometry.coordinates
    },
    properties: {
        title: 'Approximate address location',
        description: res.results.features[0].place_name,
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#900'
    }
})
   map.addLayer(here);

   map.setZoom(9);

   map.setView([res.results.features[0].geometry.coordinates[1],res.results.features[0].geometry.coordinates[0]],9);
    });

});

    $(document).ready(function() {
  $.getJSON('buffer.json', function(data) {
    var buffer = L.geoJson(data, {
      'style': {fillColor: '#f00', strokeColor: '#f00', fillOpacity: 0, opacity: 1, weight: 1, color: '#f00'},
      'onEachFeature': null
    });
    map.addLayer(buffer);
})
    $.getJSON('rail.json', function(data) {
     var rail = L.geoJson(data, {
      'style': {fillColor: '#333', strokeColor: '#333', fillOpacity: 0, opacity: 1, weight: 1, color: '#333'},
      'onEachFeature': null
    });
    map.addLayer(rail);
})

});

</script>

<script>
// var map2 = L.mapbox.map('map2', 'examples.map-20v6611k')
//     .setView([44.9647979,-93.2272339], 10);

//     $(document).ready(function() {
//   $.getJSON('buffer.json', function(data) {
//     var buffer = L.geoJson(data, {
//       'style': {fillColor: '#f00', strokeColor: '#f00', fillOpacity: 0, opacity: 1, weight: 1, color: '#f00'},
//       'onEachFeature': null
//     });
//     map2.addLayer(buffer);
// })
//     $.getJSON('rail.json', function(data) {
//     var rail = L.geoJson(data, {
//       'style': {fillColor: '#333', strokeColor: '#333', fillOpacity: 0, opacity: 1, weight: 1, color: '#333'},
//       'onEachFeature': null
//     });
//     map2.addLayer(rail);
// })

//          $.getJSON('counties.json', function(data) {
//      statesLayer = L.geoJson(data, {
//       style: getStyle,
//       onEachFeature: onEachFeature
//     });
//     map2.addLayer(statesLayer);

//     var popup = new L.Popup({ autoPan: false });


//  function getStyle(feature) {
//       return {
//           weight: 2,
//           opacity: 0.1,
//           color: 'black',
//           fillOpacity: 0.7,
//           fillColor: getColor(feature.properties.density)
//       };
//   }

//     function getColor(d) {
//       return d > 1000 ? '#8c2d04' :
//           d > 500  ? '#cc4c02' :
//           d > 200  ? '#ec7014' :
//           d > 100  ? '#fe9929' :
//           d > 50   ? '#fec44f' :
//           d > 20   ? '#fee391' :
//           d > 10   ? '#fff7bc' :
//           '#ffffe5';
//   }

//   function onEachFeature(feature, layer) {
//       layer.on({
//           mousemove: mousemove,
//           mouseout: mouseout,
//           click: zoomToFeature
//       });
//   }

//   var closeTooltip;

//   function mousemove(e) {
//       var layer = e.target;

//       popup.setLatLng(e.latlng);
//       popup.setContent('<div class="marker-title">' + layer.feature.properties.name + '</div>' +
//           layer.feature.properties.density + ' people per square mile');

//       if (!popup._map) popup.openOn(map);
//       window.clearTimeout(closeTooltip);

//       // highlight feature
//       layer.setStyle({
//           weight: 3,
//           opacity: 0.3,
//           fillOpacity: 0.9
//       });

//       if (!L.Browser.ie && !L.Browser.opera) {
//           layer.bringToFront();
//       }
//   }

//   function mouseout(e) {
//       statesLayer.resetStyle(e.target);
//       closeTooltip = window.setTimeout(function() {
//           map.closePopup();
//       }, 100);
//   }

//   function zoomToFeature(e) {
//       map.fitBounds(e.target.getBounds());
//   }
// })  

// });

d3.csv("counties_data.csv", function(error, evacData) {
    evacData.forEach(function(d) {
  d.county = d.county;
  d.count = +d.count;
    });

var width = $("#map2").width(),
    height = 400,
    centered;

// var projection1 = d3.geo.albers()
//     .scale(3837)
//     .translate([100, 770]);

var projection1 = d3.geo.mercator().scale([2400]).center([-87.9565,45.6524]);

var path1 = d3.geo.path()
    .projection(projection1);

var svg1 = d3.select("#map2 svg")
    .attr("width", width)
    .attr("height", height);

svg1.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg1.append("g");

var none = "#ddd";
var q1 = "#C6A29E";
var q2 = "#A45958";
var q3 = "#C6A29E";
var q4 = "#210507";


d3.json("counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path1)
      .style("fill", function(d, j){
        for (j = 0; j < 87; j++){
          // console.log(evacData[j].county + " " + j);
          if (d.properties.COUNTYNAME == evacData[j].county){ 
            if (evacData[j].count >= 20) { return q4; }
            if (evacData[j].count >= 5) { return q3; }
            if (evacData[j].count >= 3) { return q2; }
            if (evacData[j].count > 0) { return q1; }
            else { return none; }
         }
         }
        })

      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == evacData[j].county){ 
            return "<div class='countyName'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>" + evacData[j].count + " trained departments</div>";
          }
         }
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path1);
});

// d3.json("rail.json", function(error, us) {

//   g.append("g")
//       .attr("id", "states2")
//     .selectAll("path")
//       .data(us.geomtries)
//     .enter().append("path")
//       .attr("d", path1)
//       .style("fill", "#000")
//       .style("stroke-width", "1.5px")
//       .style("stroke", "#000")
//       .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + " County</b>";}));

//   g.append("path")
//       //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
//       .attr("id", "state-borders2")
//       .attr("d", path1);
// });

});

</script>

<script>
var map3 = L.mapbox.map('map3', 'examples.map-20v6611k', {legendControl: { position: 'bottomleft' }})
    .setView([45.011783,-93.270407], 11, {minZoom: 6, maxBounds: bounds});

map3.scrollWheelZoom.disable();

map3.legendControl.addLegend(document.getElementById('legendCircle').innerHTML);


$(document).ready(function() {

    $.getJSON('blocks.json', function(data) {
    var blocks = L.geoJson(data, {
      'style': {fillColor: '#500', strokeColor: '#333', fillOpacity: 0.5, opacity: 1, weight: 1, color: '#333'},
      'onEachFeature': null
    });

    var densityLayer = L.geoJson(null, { pointToLayer: scaledPoint });

function pointRadius(feature) {
    return (feature.properties.Sum_POP10 - 4) / 300;
}

function scaledPoint(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: pointRadius(feature),
        fillColor: "#a00",
        fillOpacity: 0.7,
        weight: 0.5,
        color: '#fff'
    }).bindPopup('<strong>Population:  ' + feature.properties.Sum_POP10 + '</strong>');
}

d3.json('scenarios.json', function(err, data) {
    densityLayer.addData(data);
});

    map3.addLayer(blocks);

    map3.addLayer(densityLayer);
})
    $.getJSON('rail.json', function(data) {
     var rail = L.geoJson(data, {
      'style': {fillColor: '#900', strokeColor: '#900', fillOpacity: 1, opacity: 1, weight: 4, color: '#333'},
      'onEachFeature': null
    });
    map3.addLayer(rail);
})

});

</script>

<script>
var chart1;
nv.addGraph(function() {
    chart1 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(true)
      .groupSpacing(0.1)    //Distance between each group of bars.
      .margin({top: 30, right: 5, bottom: 30, left: 20})
      .tooltip(function(key, x, y, e, graph) { return '<h3>' + key + '</h3>' +'<p>' +  y + ' in ' + x + '</p>';});

    chart1.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart1 svg')
        .datum(derailmentData)
        .call(chart1);

    nv.utils.windowResize(chart1.update);

    return chart1;
});

var derailmentData = [
  {
    "key": "Derailments",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2000" ,
        "value" : 38
      },
      { 
        "label" : "2001" ,
        "value" : 48
      },
      { 
        "label" : "2002" ,
        "value" : 34
      },
      { 
        "label" : "2003" ,
        "value" : 30
      },
      { 
        "label" : "2004" ,
        "value" : 40
      },
      { 
        "label" : "2005" ,
        "value" : 31
      },
      { 
        "label" : "2006" ,
        "value" : 28
      },
      { 
        "label" : "2007" ,
        "value" : 35
      },
      { 
        "label" : "2008" ,
        "value" : 25
      },
      { 
        "label" : "2009" ,
        "value" : 22
      },
      { 
        "label" : "2010" ,
        "value" : 15
      },
      { 
        "label" : "2011" ,
        "value" : 32
      },
      { 
        "label" : "2012" ,
        "value" : 16
      },
      { 
        "label" : "2013" ,
        "value" : 26
      },
      { 
        "label" : "2014" ,
        "value" : 24
      }
    ]
  },
  {
    "key": "Highway-Rail Crossing",
    "color": "#333333",
    "values": [
      { 
        "label" : "2000" ,
        "value" : 5
      },
      { 
        "label" : "2001" ,
        "value" : 3
      },
      { 
        "label" : "2002" ,
        "value" : 5
      },
      { 
        "label" : "2003" ,
        "value" : 2
      },
      { 
        "label" : "2004" ,
        "value" : 10
      },
      { 
        "label" : "2005" ,
        "value" : 6
      },
      { 
        "label" : "2006" ,
        "value" : 2
      },
      { 
        "label" : "2007" ,
        "value" : 7
      },
      { 
        "label" : "2008" ,
        "value" : 1
      },
      { 
        "label" : "2009" ,
        "value" : 2
      },
      { 
        "label" : "2010" ,
        "value" : 2
      },
      { 
        "label" : "2011" ,
        "value" : 2
      },
      { 
        "label" : "2012" ,
        "value" : 4
      },
      { 
        "label" : "2013" ,
        "value" : 4
      },
      { 
        "label" : "2014" ,
        "value" : 3
      }
    ]
  }
]
</script>

<script>

d3.csv("derailments.csv", function(error, csvData) {
    csvData.forEach(function(d) {
  d.city = d.city;
  d.date = d.date;
  d.description = d.description;
    });


var width = $("#map4").width(),
    height = 400;

var formatNumber = d3.format(",.0f");

var projection = d3.geo.albersUsa().scale(800).translate([380, 190]);

var path = d3.geo.path()
    .projection(projection);

var radius = d3.scale.sqrt()
    .domain([0, 1e6])
    .range([0, 15]);

var svg = d3.select("#map4 svg")
    .attr("width", width)
    .attr("height", height);

d3.json("states_gov.json", function(error, json) {
    svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke-width", 1.5)
           .style("stroke", "white")
           .style("fill","#ddd");


var circles = svg.append("svg:g")
    .attr("id", "circles");

 circles.append("g")
     .attr("id", "markers")
    .selectAll("circle")
      .data(csvData)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr('r', '5')
      .attr("transform", function(d) { 
        return "translate(" + projection([d.longitude,d.latitude]) + ")"; 
      })
      .call(d3.helper.tooltip(
        function(d, i){
          return "<div><strong>" + d.city + ", " + d.location + "</strong></div>";
        }
        ));

      });

});

</script>

<script>
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
</script>

<?php
readfile('http://www.startribune.com/partner/footer/294420061/');
?>