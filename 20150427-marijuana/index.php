<!DOCTYPE html>
<html>
<head>

<script>
    // $blog_path = "http://apps.startribune.com/news/20150427-marijuana/index.php";
    // readfile('http://www.startribune.com/partner/header/307021311/');
    // $shareURL = "http://strib.mn/1IKABCZ";
    // $clickabilityID = "307021311";
    // $shareTitle = "StarTribune - Nine charts that explain the state of marijuana in Minnesota";
    // $shareDescription = "Minnesota's new medical marijuana program opens in July. Explore marijuana issues in nine charts and maps.";
    // $shareImage = "http://stmedia.startribune.com/images/20150610-mj.png";
</script>

    <meta property="og:url" content="<?php echo $blog_path; ?>" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="<?php echo $shareTitle; ?>" />
    <meta property="og:description" content="<?php echo $shareDescription; ?>" />
    <meta property="og:image" content="<?php echo $shareImage; ?>" />

    <title>StarTribune.com: News, weather, sports from Minneapolis, St. Paul and Minnesota</title>
    
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="google-site-verification" content="bLXTXkzm4dJ8hcJy1LXawtxXxGP3JhInARj69uCiMiM" />
    <meta http-equiv="Set-Cookie" content="section=News; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionPath=/; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionInfo=; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
    <meta http-equiv="Set-Cookie" content="sectionIndex=; expires=Sun, 04 Sep 2016 15:06:59 GMT; path=/">
   
    <link rel="canonical" href="http://www.startribune.com/"/>
    <link rel="shortcut icon" href="http://stmedia.startribune.com/designimages/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" href="http://stmedia.startribune.com/designimages/apple-touch-icon.png"/>
    <link rel="stylesheet" href="http://assets.startribune.com/static/css/screen.css?d=1441910795">
    <link rel="stylesheet" href="http://m.startribune.com/assets/css/main.css"/>
    <link rel="stylesheet" href="http://apps.startribune.com/news/dataviz-css-master/startribune_dataviz_styles.css" /> 
    <link href="js/nvd3-master/src/nv.d3.css" rel="stylesheet" type="text/css">
    <link href="js/jquery.bxslider.css" rel="stylesheet" />
    <link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.8/mapbox.css' rel='stylesheet' />
    <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />

<!-- CUSTOM STYLE TWEAKS -->
    <style>
      .native-ad { display:none !important; }
      #js-navigation-menu { display:block !important; }
      .one-half { display:inline-block !important; float:left; }
      #testDiv { height:400px; background-color:#ddd; width:85%; float:right; }
      .article-share { width:100%; }
    </style>

<style>
    body {  margin:0; padding:0 !important;  overflow:hidden;  font-size: 0.8125em; text-rendering: optimizeLegibility; font: 13px/1.231 sans-serif; }

/*dataviz styles*/
    .background { fill: none; pointer-events: all; }
    #states { fill: #aaa; }
    #state-borders { fill: none; stroke: #fff; stroke-width: 2px; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
    .tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-size:1em; font-family:Arial; }
    .d3-tip { line-height: 1; font-weight: bold; padding: 12px; background: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 2px; }
    .d3-tip:after { box-sizing: border-box; display: inline; font-size: 1em; width: 100%; line-height: 1; color: rgba(0, 0, 0, 0.8); content: "\25BC";  position: absolute; text-align: center; }
    .d3-tip.n:after { margin: -1px 0 0 0; top: 100%; left: 0; }
    #states .active { fill: #333 !important; fill-opacity: 1 !important; }
    #timeline{font-weight:900;}
    .legend label, .legend span { display:block; float:left; height:15px; width:30PX; text-align:center; font-size:1em; color:#808080; }
    #legalQ.legend label, #legalQ.legend span { display:block; float:left; height:15px; width:100px !important; text-align:center; font-size:1em; color:#fff; padding:10px; padding-top:20px; font-weight:bold; }

    #navigate { width:15%; min-width:150px; max-width:150px; padding:2px; /*border: 1px solid black;*/ text-align:center; background:white; float:left !important; margin-top:18px; z-index:200 !important; }
    .f-nav{ position: fixed; left: 0; top: 50px; width: 100%; margin-bottom:700px; }
    .myButtonNav { background-color: #61bd1a; border: 0; border-radius: 0; color: #ffffff; cursor: pointer; display:block; font-family: "Benton Sans",Helvetica,Arial,sans-serif; font-size: 1em; font-weight: 900; moz-border-radius: 16px; padding: 6px; text-decoration: none; webkit-border-radius: 16px; width: 95%; margin:5px;}
    .myButtonNav:hover { background-color: #378f00 !important; }
    .myButtonNav:active { background-color: #378f00; }

    .social_share_m { display:none; }
    #facebookbtn-link-m:hover, #twitterbtn-link-m:hover, .comments:hover { cursor:pointer; }

    .myButton { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:1em; padding:13px 26px; text-decoration:none;  font-weight:900; width:32.6%; }
    .myButton:active { background-color:#333; }
    .downloadButton { background-color:#ddd; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#000; font-family:arial; font-size:1.3em; padding:13px; text-decoration:none; font-weight:900; margin:5px; width:95%; }
    .downloadButton:active { background-color:#378f00; }
    .myButton2 { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0;  display:inline-block; cursor:pointer;  color:#ffffff; font-family:arial; font-size:1em; padding:13px 26px; width:13.5%;
      text-decoration:none; font-weight:900; } 
    .myButton2:active { background-color:#333; }
    .myButton3 { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:1em; padding:13px 26px; text-decoration:none; font-weight:900; width:49.6%; }
    .myButton3:active { background-color:#333; }
    .myButton_pd { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:1em; padding:13px 26px; text-decoration:none; font-weight:900; width:49.6%; }
    .myButton_pd:active { background-color:#333; }
    .myButton4 { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:1em; padding:13px; width:15.8%; text-decoration:none; text-align:center; font-weight:900; }
    .myButton4:active { background-color:#333; }
    .myButton5 { background-color:#61bd1a; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0; border:0; display:inline-block; cursor:pointer; color:#ffffff; font-family:arial; font-size:1em; padding:13px 26px; text-decoration:none; font-weight:900; width:49.6%; }
    .myButton5:active { background-color:#333; }

    .navigate-sticky-wrapper { float:left !important; width:100px !important; }

    button:focus { outline:0 !important; }
    #map3{ display:none; }
    #chart_mpls { width:100% !important; height:450px !important;}
    #wrapper{ width:80%; padding:20px; float:right;}
    #legend_label{font-weight:900;}
    #color_legend{ float:left; }
    #zoom{float:right;text-decoration:none;font-weight:bold;color:steelblue;}
    #reset{float:left;font-size:3em;text-decoration:none;font-weight:999;color:steelblue;margin-left:15px;}
    #sidebox{ width:100% !important; }
    #map{float:left; margin:10px;}
    #infobox{ width:100% !important; border-style: solid; border-color: #eee; border-width: 2px; height:120px; padding:10px; }
    .county_name{font-size:1.2em; font-family: "Popular"; font-weight:900;}
    .prevalence{font-size:1.2em; font-family:Arial; padding-top:5px;}
    hr{border:0; border-bottom:1px dashed #aaa; background:#999; clear:both;}
    #infobox h4 { margin-top: 1.83em; margin-bottom: 1em; margin-left: 0; margin-right: 0; font-weight: 900; }
    .arrow { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; float:left; margin-right:2px; border-left: 5px solid black; }
    #chart1 svg { width:100% !important; height: 580px !important; }
    #chart2 svg { width:100% !important; height: 450px !important; }
    #chart_aclu svg{ width:100% !important; height: 580px !important; }

    .nvtooltip { padding:5px; }
    .nvtooltip h3 { margin: 0; padding: 2px; font-weight:bold; text-align:left; background:white !important; font-size:1em; }
    .nvtooltip p { margin: 0; padding: 0; }
    .nvtooltip span { display: inline-block; margin: 2px 0; }
    .nvtooltip-pending-removal { position: absolute; pointer-events: none; }
    p { font-family: "Poynter Serif RE",Georgia,Times,serif; font-size: 15px; line-height: 140%; margin-bottom: 14px; letter-spacing: -0.3px; }

    #population{float:left; }
    #cases{float:right; }

    .white{fill:#a1d99b;}
    .black{fill:#a1d99b;}
    .hispanic{fill:#a1d99b;}
    .indian{fill:#a1d99b;}
    .asian{fill:#a1d99b;}
    .other{fill:#a1d99b;} 
    .faded { fill-opacity: 0.5 !important; }
    .selected{ text-decoration:none !important; color:black !important; font-weight:900; opacity:1 !important; }
    .selected{fill:#333 !important;}
    .selectedButton{background-color:#333 !important;}
    .metric{font-weight:bold;line-height:150%;font-size:1.7em;}
    .num{font-weight:900;line-height:150%;font-size:1.7em;}
    .pct{font-weight:900;line-height:150%;margin-right:28px;font-size:1.7em;}
    .state-groups text { font-family: sans-serif; font-size: 9px; fill: #fff; cursor:default; font-weight:bold !important; }
    .state-groups:hover{ opacity:.5 !important; }
    .state-groups text{ font-size: 1em !important; }
    .dq0 { fill:#333; color:white !important; pointer-events: all; }
    .dq1 { fill:#999; color:black !important; pointer-events: all; }
    .dq2 { fill:#2b632c; color:white !important; pointer-events: all; }
    .dq3 { fill:#61bd1a; color:white !important; pointer-events: all; }
    .dc { fill:#000; color:white !important; pointer-events: all; }
    .none { fill:#ccc; }

    .bxslider li a { font-weight: 900 !important; }

    #label_us { font-weight:900; font-size:1.7em; }
    #label_mn { font-weight:900; font-size:1.7em; }
    #pie_us { width:100%; height:300px; }
    #pie_mn { width:100%; height:300px; }
    #pie_left { float:left; width:45%; text-align:center; }
    #pie_right { float:right; width:45%; text-align:center; }
    #chart_us { width:100%; }
    #chart_mn { width:100%;}
    #chart_us svg { with:100%; height:230px; }
    #chart_mn svg { with:100%; height:230px; }
    #chart_pd  svg { with:100%; height:450px; }

    #range {width:100%;}
    .year {width:33%;float:left; text-align:center; font-weight:900; font-size:1.7em;}
    #states_legend{font-family:arial; font-weight:bold; color:#000; margin-bottom:14px; clear:both;}
    #poll_legend{font-family:arial; font-weight:bold; color:#000; margin-bottom:14px}
    #map_buttons{display:none;}
    .source { font-size:1em !important; color:#ccc !important; }
    .source_link { float:left; padding-top:5px; width:100%;}
    .download { float:none;}
    .source_row {clear:both; height:8px;}
    .download_links { padding-top:10px;}
    #nerdbox{ padding:25px;}
    #credits{ padding:25px; margin-top:20px;}
    .credit_block{display:block; width: 98%; margin-bottom: 10px; }
    #convict{display:none;}
    h3 { font-family: "Poynter Serif RE",Georgia,Times,serif; font-size:1.3em; line-height: 140%; margin-bottom: 14px; letter-spacing: -0.3px; font-weight:normal; }

    .leaflet-control-attribution{display:none !important;}

    #dispense_map{ width:50%; height:490px; float:left;}
    #icons { width:48%; float:right;}
    .faded2{ fill:#eee !important;}
    .mapbox-logo {display:none;}
    .bx-viewport { padding:10px; padding-right:60px; }
    .bxslider li { margin:30px; margin-left:30px;}
    .divider{ margin:10px; }
    .leaflet-compact-attribution { display:none; }
    .factoid { font-size:1.3em; font-weight:bold; padding-top:20px; padding-right:8px;}
    .icon img { width:80px; margin:8px;}
    .icon { padding-top:5px; float:left;}
    .bx-wrapper .bx-pager.bx-default-pager a { background: #ddd !important; }
    .bx-pager.bx-default-pager a.active { background: #61bd1a !important; }
    h3 {margin-bottom:10px;}

    .us_num { font-size:48px; font-family:"Popular"; font-weight:900; color:#333; }

    .bottom_fix{ height:210px;}

    .stance { font-size:1.2em; color:#333; }

    .nv-indexLine{ display:none !important; }

    #description { text-align:center; clear:both; }

    .clicky { display:inline-block; margin:5px; }
    #poll_legend span { display:inline-block; margin:5px; }

    @media only screen and (min-width:650px) {
    #map svg path:hover{ fill:#378f00 !important; cursor:pointer; }
    #states .active:hover { fill:#333 !important; }
    .myButton:hover { background-color:#378f00 !important; }
    .downloadButton:hover { background-color:#378f00 !important; }
    .myButton2:hover { background-color:#378f00 !important; }
    .myButton3:hover { background-color:#378f00 !important; }
    .myButton_pd:hover { background-color:#378f00 !important; }
    .myButton4:hover { background-color:#378f00 !important; }
    .myButton5:hover { background-color:#378f00 !important; }
    .clicky:hover { cursor:pointer; opacity:.8; }

    }

    .bxslider li { display: block; margin-bottom: 40px; border: 1px solid #ddd; width: auto; height: auto !important; padding: 10px; padding-bottom: 5%; }

    .title {   color: #333; font-family: Popular; font-size: 26px; line-height: 26px; text-align:center; margin: 10px 0 15px 0; }
    #states_legend, #poll_legend { text-align:center; }

    @media only screen and (max-width : 300px) { h3 {font-weight:normal !important;} }
</style>


  <style type="text/css"> 
/*page template styles*/
    .specialContentWrapper{ width:100% !important; }
    .l-container { text-align:left !important; width:970px; margin-left:auto; margin-right:auto; }
    .nav-section-mod.col-2 li { text-align:center !important; }
    .nav-shortcuts-inner { text-align:center !important; }
    .l-container:nth-child(2) { width:100%; }
    .l-navigation-shortnav-container { width:100%; min-width:100%; }
    .l-section-right { display:none; }
    .l-section-inner { width:95%; border-right:0;}
    .l-footer-inner, .l-section-container { width:90% !important; }
    .nav-branding-mod, .nav-shortcuts-mod { width:100% !important;  }
    .nav-utility-mod {  width: 100%; margin: 0 auto; max-width: 100% !important; min-width: 100% !important; }
    #zone-none-block-1-leaderboard iframe { width:100% !important; }
    #zone-none-block-1-leaderboard, #zone-none-block-3-leaderboard { display: none !important; }
    #zone-none-block-3-leaderboard div iframe { width:100% !important; }
    .navbar-fixed-top { display:none !important; }
    .site-footer { display:none !important; }
    .nav-menu .menu-left, .nav-menu .menu-right { visibility:hidden !important; display:none !important; }
    .l-section-inner { padding-right: 0; width:100%; } 
    a { color: #333; text-decoration: none; }
    a:hover { text-decoration:none !important; color:inherit !important; }
    .article-share { position:relative !important; float:left !important; margin-left:0 !important; }
    .fyre .fyre-comment-head .fyre-comment-username { cursor: default !important; font-size: 12px !important; line-height: 25px !important; text-decoration: none !important; color: #000 !important; }
    .fyre-post-button { border-radius:0 !important; }
    .fyre { background-color:#fff !important; }
    .fyre .fyre-comment-article .fyre-comment-wrapper section p, .fyre .fyre-comment-stream .fyre-comment-wrapper section p { font-size:1em !important; }
    .fyre .fyre-comment-article .fyre-comment-head {  margin-top:0 !important; }
    .fyre .fyre-auth { margin:0px 0 0 0 !important; }
    .fyre .fyre-auth .fyre-login-bar, .fyre .fyre-auth .fyre-user-loggedout { color:#61bf1a !important; text-decoration:none !important; }
     #mobileMenu { display:none !important; }

    @media only screen and (min-width:650px) {
      .git:hover { background-color:#378f00 !important; }
      .sort-link-mid:hover, .sort-link:hover { background-color:#eee !important; cursor:pointer; }
    }

    @media (max-width: 970px) {
      .l-container { text-align:left !important; width:100% !important; margin:0; }
      .footer-navigation-mod { display:block !important; margin-top:30px; }
    }

    @media (max-width: 933px) {
      #mobileMenu { display:block !important; }
      #articleHeader {margin-top:40px;}
      .nav-shortcuts-inner { display:none !important; }
      .nav-utility-btn:before { width:30px; height:30px; }
      .nav-utility-mod { height:50px; }
      .nav-utility-inner-right { float: right !important;  width:auto !important}
      .nav-utility-inner-center { float:right !important; text-align: right; width:auto !important; margin-top:10px !important; }
      .nav-utility-mod { width:100% !important; min-width:auto !important; max-width:auto!important; float:left !important; border-bottom: 1px solid #000; }
      .nav-branding-mod {/* margin-top:0 !important;*/ display:none !important; }
      .nav-utility-inner { width:auto; }
      .nav-utility-inner .btn-subscribe { display:none !important; }
      .btn-eedition { display:none !important; }
      .js-nav-subscriptions-dropdown { display:none !important; }
      .dpp, .navigation-shortnav-ad { display:none !important; }
      .show-divider { border-left:0 !important; }
      .nav-logo-link { height: 38px !important; width: 260px !important; }
      .nav-utility-btn.show-divider:after { display:none; }
      #wrapper { padding:0; }
      /*.nav-utility-btn { text-indent:-5000px; }
      .nav-utility-btn::before { text-indent:2px; }*/
      .nav-weather-mod, .nav-section-mod { margin-top:40px !important; }
      .logInBtn { display:none !important; }
      .navbar-fixed-top { display:block !important; }
      .site-footer { display:block !important; }
      .global-nav-mod { display:none !important; } 
      #specialContentWrapper { margin-top:50px !important; width:100%; }
      .l-section-container { width:100% !important; }
      .l-section-inner { padding-right: 0; width:100%; } 
      .grid, .nav-menu .menu-left { visibility:visible !important; display:block !important; }
            .global-nav-mod { padding:0 !important; }
      #articleHeader {margin-top:40px;}
      #wrapper { padding:0; position:relative; }
      .bxslider li { margin:0; margin-bottom:30px;}
      .myButton5, .myButton3 { width:100%; border-radius:0; }
      .myButton4 { width:100%; border-radius:0; display:block; }
      #racial_buttons { float:right; width:30%; }
      #population { float: none; margin: 0; margin-left: 0; }
      #cases { float: none; margin: 0; margin-right: 0; }
      #boxes { float:left; width:65%; }
      #navigate-sticky-wrapper, .sticky-wrapper, .is-sticky, .l-footer-container { display:none !important; }
    }
    
    @media (max-width: 850px) {
      #navigate { display:none; }
      #wrapper{ width:98%; }
      .social_share_m { display:block; width:100%; }
    }

    @media (max-width: 740px) {
        .article-share { display:none; }
        #testDiv { width:100%; }
    }
    
    @media (max-width: 540px) {
    .navigation-shortnav-mod { display:none; }
     .btn-search{ display:none !important; }
     #dispense_map { width: 100% !important; float:none !important; }
     #icons { width: 100%; float: left; }
     #pie_us { float:none; width:100%; height:300px; }
     #pie_mn { float:none; width:100%; height:300px; }
     #pie_left { float:none; width:100%; }
     #pie_right { float:none; width:100%; }
    }

    .is-sticky { width:180px !important; margin:0 !important; margin-left:0 !important; z-index:200 !important; }
   </style>

<!-- HEADER SCRIPTS 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <!-- Optimizely -->
    <script src="//cdn.optimizely.com/js/3084170745.js"></script>
    <!-- End Optimizely --> 

             <!-- START Amazon Match Buy (header) --><script type='text/javascript' src='http://c.amazon-adsystem.com/aax2/amzn_ads.js'></script><script type='text/javascript'>
    try {
        amznads.getAds('3151');
    } catch(e) { /*ignore*/}
</script><!-- END Amazon Match Buy (header) -->        <script>document.domain = window.location.host.replace(/:\d+/, '').split('.')[window.location.host.replace(/:\d+/, '').split('.').length - 2] + '.' + window.location.host.replace(/:\d+/, '').split('.')[window.location.host.replace(/:\d+/, '').split('.').length - 1];</script>
    <script src="http://m.startribune.com/assets/js/libs/modernizr.js?d=1449692420"></script>

    <script type="text/javascript">var _sf_startpt = (new Date()).getTime()</script>
    <script>window.jQuery || document.write( '<script src="http://m.startribune.com/assets/js/libs/jquery.min.js?d=1449692420"><\/script>' )</script>
    <script src="http://m.startribune.com/assets/js/libs/jquery.onAppear.min.js?d=1449692420"></script>
    
    
    <!-- Google DFP ad library -->
    <script type='text/javascript'>
    // (function() {
    // var useSSL = 'https:' == document.location.protocol;
    // var src = (useSSL ? 'https:' : 'http:') +
    // '//www.googletagservices.com/tag/js/gpt_mobile.js';
    // document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    // })();
    //     window.lazyLoad = false;
    </script>

      <!-- START Amazon Match Buy (targeting) --><script type='text/javascript'>
var key = 'amznslots';
if (typeof amznads !== 'undefined') {
   var values = amznads.getTokens(); 
}
</script><script type='text/javascript'>
try {
    amznads.setTargetingForGPTAsync('amznslots');
} catch(e) { /*ignore*/}
</script><!-- END Amazon Match Buy (targeting) -->    
                    
                
    <!-- BEGIN Krux Control Tag -->
    <script class="kxct" data-id="JmCjGa6h" data-timing="async" data-version="1.9" type="text/javascript">
      window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);
      (function(){
        var k=document.createElement('script');k.type='text/javascript';k.async=true;
        var m,src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
        k.src = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
          (location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid=JmCjGa6h"
      ;
        var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);
      }());
    </script>
    <!-- END Krux control tag -->
    <!-- BEGIN Krux interchange tag -->
    <script>
    window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);
    (function(){
      function retrieve(n){
        var m, k='kx'+n;
        if (window.localStorage) {
            return window.localStorage[k] || "";
        } else if (navigator.cookieEnabled) {
            m = document.cookie.match(k+'=([^;]*)');
            return (m && unescape(m[1])) || "";
        } else {
            return '';
        }
      }
      Krux.user = retrieve('user');
    })();
    </script>
    <!-- END Krux interchange tag -->
        <script type="text/javascript">
        var dartSlotString = '/7932/mobile/mob_startribune.com/mob_homepage';
        var adType = 'home';

        if ( jQuery( window ).width() <= 320 && jQuery( window ).height() <= 459 ) {
            var instreamAdSizes = [ [ 1, 3 ], [ 234, 60 ], [ 320, 50 ] ];
        }
        else {
            var instreamAdSizes = [ [ 1, 3 ], [ 234, 60 ], [ 320, 50 ], [ 300, 250 ] ];
        }
    </script>
    <script type="text/javascript">
// var gptadslots = [];
// googletag.cmd.push( function() {
//    gptadslots[0] = googletag.defineSlot( dartSlotString, [[162,30]],'div-gpt-ad-localAdsPageLink').setTargeting('pos', '1').addService(googletag.pubads());
// });
</script>
            <script type="text/javascript">
            // var overlaySlot = '';
            // googletag.cmd.push( function() {
            //     overlaySlot = googletag.defineOutOfPageSlot( '/7932/mobile/mob_startribune.com/mob_homepage', 'div-gpt-ad-overlay').addService( googletag.pubads() );
            // });
        </script>
        <script type="text/javascript">
        // googletag.cmd.push( function () {
        //     googletag.pubads().disableInitialLoad();
        //     googletag.pubads().enableAsyncRendering();
        //     googletag.pubads().collapseEmptyDivs( true );
        //     googletag.enableServices();
        // } );
    </script>
      
    
    <!-- Grunticon script -->
    <script>
        window.grunticon = function ( e ) {
            if ( e && 3 === e.length ) {
                var t = window, n = !!t.document.createElementNS && !!t.document.createElementNS( "http://www.w3.org/2000/svg", "svg" ).createSVGRect && !!document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" ), A = function ( A ) {
                    var o = t.document.createElement( "link" ), r = t.document.getElementsByTagName( "script" )[ 0 ];
                    o.rel = "stylesheet", o.href = e[ A && n ? 0 : A ? 1 : 2 ], r.parentNode.insertBefore( o, r )
                }, o = new t.Image;
                o.onerror = function () {
                    A( !1 )
                }, o.onload = function () {
                    A( 1 === o.width && 1 === o.height )
                }, o.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            }
        };
        grunticon( [ "http://m.startribune.com/assets/css/icons.data.svg.css?d=2a1e07eec86f4c3b080202dc41c037231f59dadf", "http://m.startribune.com/assets/css/icons.data.png.css?d=da71f7668afca176d59c410731b6f93b4f6a1f06", "http://m.startribune.com/assets/css/icons.fallback.css?d=99d0dd65b1cb802fdcee9ed9cc5c66c682bbc6ac" ] );</script>
    <noscript>
        <link href="http://m.startribune.com/assets/css/icons.fallback.css?d=99d0dd65b1cb802fdcee9ed9cc5c66c682bbc6ac" rel="stylesheet">
    </noscript>
    <!-- End Grunticon script -->

    <style type="text/css">
        /*
        This CSS resource incorporates links to font software which is
        the valuable copyrighted property of WebType LLC, The Font Bureau,
        Ascender Corporation and/or their suppliers. You may not
        attempt to copy, install, redistribute, convert, modify or reverse
        engineer this font software. Please contact WebType with any
        questions:
        http://www.webtype.com
        */

        /*
        @font-face syntax based on Fontspring @font-face syntax.
        */

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

        @font-face {
            font-family: OpenSans-bold;
            src: url("http://apps.startribune.com/fonts/OpenSans-Bold/OpenSans-Bold.eot");
            src: url("http://apps.startribune.com/fonts/OpenSans-Bold/OpenSans-Bold.eot?#iefix") format("embedded-opentype"),
            url("http://apps.startribune.com/fonts/OpenSans-Bold/OpenSans-Bold.svg") format("svg"),
            url("http://apps.startribune.com/fonts/OpenSans-Bold/OpenSans-Bold.woff") format("woff"),
            url("http://apps.startribune.com/fonts/OpenSans-Bold/OpenSans-Bold.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: OpenSans-light;
            src: url("http://apps.startribune.com/fonts/OpenSans-Light/OpenSans-Light.eot");
            src: url("http://apps.startribune.com/fonts/OpenSans-Light/OpenSans-Light.eot?#iefix") format("embedded-opentype"),
            url("http://apps.startribune.com/fonts/OpenSans-Light/OpenSans-Light.svg") format("svg"),
            url("http://apps.startribune.com/fonts/OpenSans-Light/OpenSans-Light.woff") format("woff"),
            url("http://apps.startribune.com/fonts/OpenSans-Light/OpenSans-Light.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: OpenSans-regular;
            src: url("http://apps.startribune.com/fonts/OpenSans-Regular/OpenSans-Regular.eot");
            src: url("http://apps.startribune.com/fonts/OpenSans-Regular/OpenSans-Regular.eot?#iefix") format("embedded-opentype"),
            url("http://apps.startribune.com/fonts/OpenSans-Regular/OpenSans-Regular.svg") format("svg"),
            url("http://apps.startribune.com/fonts/OpenSans-Regular/OpenSans-Regular.woff") format("woff"),
            url("http://apps.startribune.com/fonts/OpenSans-Regular/OpenSans-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
        }
    </style>

    <script>
        var zipCode = 55488;
                
        var domain = "http\x3A\x2F\x2Fm.startribune.com";

                        var articleId = '0';

                                            var dataLayer = {"channel":"mobile homepage","contentType":"homepage","subsection":"StarTribune.com","pageName":"m.startribune.com Front","isAjax":false,"url":"http:\/\/m.startribune.com\/"};
        window.pageViewShouldFired = true;
    </script>

    
        <script src="http://m.startribune.com/assets/js/libs/AppMeasurement.js?d=1449692420" type="text/javascript"></script>
</head>
<body>
<div id="div-gpt-ad-overlay">
    <script type="text/javascript">
        // googletag.cmd.push( function() {
        //     googletag.display( 'div-gpt-ad-overlay' );
        //     googletag.pubads().refresh( [ overlaySlot ] );
        // });
    </script>
</div>


<div id="specialContentWrapper">
<!-- mark me bro -->

<div id="articleHeader">
<div id="articleHeadline" class="article-headline">Nine charts that explain the state of marijuana in Minnesota</div>
<div class="article-byline-mod">
<div id="bylines" class="article-byline"><strong>By <a href="http://www.startribune.com/jeff-hargarten/274254381/">Jeff Hargarten</a>, <a href="http://www.startribune.com/maryjo-webster/303594441/">MaryJo Webster</a>, <a href="http://www.startribune.com/matt-delong/285386351/">Matt DeLong</a></strong></div> 
<div class="article-dateline">JUNE 28, 2015 — 6:50AM</div>
</div>
<p>Everyone is talking about pot these days, thanks to new laws in a handful of states and a shift in public opinion in favor of legalizing the drug. The U.S. Justice Department has announced policy changes to relax enforcement in states that have legalized the recreational use of marijuana and to assure banks that they will not be punished for offering financial services to legitimate marijuana-related businesses. Earlier this year, a bill was introduced in Congress to end the federal prohibition. Despite these changes nationally and Minnesota’s reputation as a liberal state, Minnesotans have been slower to embrace cannabis -- even while enrollment in the state's new medical marijuana program opens in July. In these slides, we use data to explore the relationship between the people, the state and the leafy green plant.</p>
</div>

<div id="navigate" style="width:180px !important">
<a href="#landscape"><button id="landscapeB" class="myButtonNav">Changes</button></a>
<a href="#law"><button id="lawB" class="myButtonNav">Medical Law</button></a>
<a href="#opposition"><button id="oppositionB" class="myButtonNav">Opposition</button></a>
<a href="#prosecutions"><button id="prosecutionsB" class="myButtonNav">Prosecutions</button></a>
<a href="#enforcement"><button id="enforcementB" class="myButtonNav">Enforcement</button></a>
<a href="#cities"><button id="citiesB" class="myButtonNav">Among Cities</button></a>
<a href="#citations"><button id="citationsB" class="myButtonNav">Petty Citations</button></a>
<a href="#racial"><button id="racialB" class="myButtonNav">Racial Disparities</button></a>
<a href="#shift"><button id="shiftB" class="myButtonNav">National Shift</button></a>
<a href="#creditsS"><button id="creditsB" class="myButtonNav">Credits</button></a>
<div class="social_share">
<!-- SHARE BUTTONS -->

</div>
</div>

<div id="wrapper">

<div id='landscape' class="anchor"></div>

<ul class="bxslider">
  <li>
<div class="title">A changing landscape</div>
<a href="javascript:void(0);" id="reset">&#8635;</a>
<div id="map2"><svg width="600" height="500" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid"></svg></div>

<div id="description">Marijuana's legal status has quickly transformed in various ways across the country as associated medical and economic benefits become increasingly accepted.</div>

<div style="clear:both;"><br /><br /></div>

<div id="states_legend">
    <span class="clicky" id="illegal" style='background:#999;padding:10px;color:#fff'>Marijuana illegal</span>
    <span class="clicky" id="oil" style='background:#333;padding:10px;color:#fff'>Medicinal cannabidoil legal</span>
    <span class="clicky" id="medical" style='background:#2b632c;padding:10px;color:#fff'>Medicinal marijuana legal</span>
    <span class="clicky" id="legal" style='background:#61bd1a;padding:10px;color:#fff'>Recreational marijuana legal</span>
    <span id="decriminalized" class="clicky" style='background:#fff;padding:10px;color:#000'>*Decriminalized</span>
</div>
<div style="clear:both;"></div>
<div class="source">Source: <a href="http://norml.org/laws" target="_new">NORML</a></div>
<p class="divider"></p>
<h3>Minnesota passed a medical marijuana law in May 2014, joining about half the country in allowing doctors to prescribe marijuana to their patients, though recreational sales and use remain illegal. Four states and the District of Columbia have additionally legalized marijuana for recreational use.</h3>
  </li>

<div id='law' class="anchor"></div>

  <li>
<div class="title">Medical marijuana: What’s allowed, what isn’t?</div>

  <div id="dispense_map"></div>
  <div id="icons">
    <div class="icon"><img src="img/dispensary.png" /></div>
    <div class="factoid">8 marijuana dispensaries serving 87 counties</div>
    <div style="clear:both;"></div>
    <div class="icon"><img src="img/nosmoking.png" /></div>
    <div class="factoid">No cannabis smoking allowed</div>
    <div style="clear:both;"></div>
    <div class="icon"><img src="img/vaporizer.png" /></div>
    <div class="factoid">Liquids, oils and non-leaf vapors allowed</div>
    <div style="clear:both;"></div>
    <div class="icon"><img src="img/leaf.png" /></div>
    <div class="factoid">Pill consumption allowed</div>
    <div style="clear:both;"></div>
    <div class="icon"><img src="img/cross.png" /></div>
    <div class="factoid">Only for the terminally, seriously or chronically ill</div>
  </div>
<div style="clear:both;"></div>
<div style="clear:both;"></div>
<div class="title">Qualifying Conditions</div>
<p>-Cancer associated with severe or chronic pain, nausea vomiting, cachexia or severe wasting</p>
<p>-Glaucoma</p>
<p>-HIV/AIDS</p>
<p>-Tourette Syndrome</p>
<p>-Amyotrophic Lateral Sclerosis (ALS)</p>
<p>-Seizures, including those characteristic of Epilepsy</p>
<p>-Severe and persistent muscle spasms</p>
<p>-Multiple Sclerosis</p>
<p>-Crohn’s Disease</p>
<p>-Terminal illness</p>
<div style="clear:both;"></div>
<div class="source">Source: <a href="http://www.startribune.com/lifestyle/health/285779401.html?page=1&c=y" target="_new">Star Tribune</a>, <a href="https://www.revisor.mn.gov/laws/?id=311&year=2014&" target="new_">Minnesota Office of the Revisor of Statutes</a>, <a href="http://www.health.state.mn.us/topics/cannabis/about/stats.html" target="new_">Minnesota Department of Health</a></div>
<p class="divider"></p>
<h3>Minnesota’s eight planned medical cannabis dispensaries are scheduled to begin opening by July. The state has one of the nation’s strictest medical marijuana programs, allowing only seriously ill patients to ingest concentrated marijuana in edible or vapor form, but prohibits smoking. Initial patient enrollment in the program has been very low -- 65 as of June 26, 2015 -- currently far short of the state's 5,000-patient estimate for the program’s first years.</h3>
  </li>

<div id='opposition' class="anchor"></div>
  
  <li>
  <div class="title">Lingering opposition to full legalization</div>
<div id="pie_left">  
<div id="label_us">National - November 2014</div>
<div id="pie_us"><svg></svg></div>
</div>

<div id="pie_right">  
<div id="label_mn">Minnesota - February 2014</div>
<div id="pie_mn"><svg></svg></div>
</div>

<div style="clear:both;"></div>
<div id="poll_legend">
    <span style='background:#999;padding:10px;color:#fff'>Not Sure</span>
    <span style='background:#2b632c;padding:10px;color:#fff'>No, don't legalize it</span>
    <span style='background:#61bd1a;padding:10px;color:#fff'>Yes, legalize it</span>
</div>
<div style="clear:both;"></div>
<div class="source">Source: <a href="http://www.gallup.com/poll/179195/majority-continues-support-pot-legalization.aspx" target="_new">Gallup</a>, <a href="http://www.startribune.com/politics/245844481.html" target="_new">Star Tribune Minnesota Poll</a></div>
<p class="divider"></p>
<h3>In nationwide surveys, a majority of those polled support the legalization of marijuana for recreational use. In a poll of Minnesotans conducted by the Star Tribune in February 2014, most said they were opposed to legalizing recreational pot.</h3>
  </li>

<div id='prosecutions' class="anchors"></div>

  <li>
  <div class="title">Prosecutions and convictions on the rise</div>
<button id="caseyear" class="myButton3" onclick="redrawChart2(caseYearData);">Total Statewide Cases Filed</button>
<button id="conyear" class="myButton3" onclick="redrawChart2(conYearData);">Total Statewide Convictions</button>

<div id="chart2"><svg></svg></div>
<div class="source">Source: Supreme Court of Minnesota</div>
<p class="divider"></p>
<h3>Despite changing attitudes and legal status, authorities across Minnesota filed 44,910 cases including felony or misdemeanor marijuana charges between 2010 and 2014. The number of case filings and convictions rose each year during that period.  </h3>

  </li>

<div id='enforcement' class="anchor"></div>

  <li>
  <div class="title">Marijuana enforcement by county</div>

<div id="map"><svg width="600" height="500" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid"></svg></div>

<div id="sidebox">
<p style="clear:both;"></p>
<div id="color_legend">
<div class='legend' id="aidQ">
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Less </span>
    <span style='background:#e9f6e6;'></span>
    <span style='background:#c7e9c0;'></span>
    <span style='background:#74c476;'></span>
    <span style='background:#006d2c'></span>
    <span style='background:#fff;'> More</span>
  </nav>
</div>
</div>

<a href="javascript:void(0);" id="zoom">Reset View</a>

<p style="clear:both;"></p>

<div id="infobox"></div>

<p style="clear:both;"></p>

</div>
<p style="clear:both;"></p>
<div class="source">Source: Supreme Court of Minnesota, <a href="http://mn.gov/admin/demography/data-by-topic/population-data/our-estimates/" target="_new">Minnesota State Demographic Center</a>, Star Tribune analysis</div>
<p class="divider"></p>
<h3 style="clear:both">The rate of cannabis prosecutions per 1,000 people between 2010 and 2013 was largely consistent in counties across the state. However, some northern counties have higher rates due to drug trafficking activity.</h3>
  </li>

<div id='cities' class="anchor"></div>

<li>
<div class="title">Increased enforcement among cities</div>
<div id="chart_pd"><svg></svg></div>
<div class="source">Source: Supreme Court of Minnesota</div>
<p class="divider"></p>
<h3 style="clear:both">The number of cases filed by police departments in Minnesota’s major cities increased between 2010 and 2013, with some departments steadily filing more cannabis-related cases each year during that period.</h3>
</li>

<div id='citations' class="anchor"></div>

  <li>
  <div class="title">Petty citations declining in Minneapolis</div>
<button id="mplspetty" class="myButton5" onclick="redrawMPLSChart(mplsData);">MJ Petty Misdemeanors - Minneapolis Arrests</button>
<button id="allpetty" class="myButton5" onclick="redrawMPLSChart(pettyData);">MJ Petty Misdemeanors - MN Convictions</button>
<div id="chart_mpls"><svg></svg></div>
<p></p>
<div class="source">Source: Minnesota Bureau of Criminal Apprehension, <a href="http://norml.org/laws/item/minnesota-penalties-2" target="_new">NORML</a>, <a href="https://www.revisor.mn.gov/statutes/?id=152.01">Minnesota Office of the Revisor of Statutes</a>, Supreme Court of Minnesota, VIBES</div>
<p class="divider"></p>
<h3>Marijuana has long been decriminalized in Minnesota, meaning those carrying less than 42.5 grams may be conditionally discharged for a first offense. Despite rising felony and misdemeanor cases statewide, petty possession arrests in Minneapolis have declined. Black people were arrested for petty possession up to three times more often as whites.</h3>
  </li>

<div id='racial' class="anchor"></div>

      <li>
  <div class="title">Racial disparities persist</div>
  <div id="racial_buttons">
<button id="white" class="myButton4">White</button>
<button id="black" class="myButton4">Black</button>
<button id="hispanic" class="myButton4">Hispanic</button>
<button id="native" class="myButton4">Native</button>
<button id="asian" class="myButton4">Asian</button>
<button id="other" class="myButton4">Other</button>
</div>

<div id="boxes">
<div id="population">
<div id="box1"><svg width="275" height="275" viewBox="0 0 275 275" preserveAspectRatio="xMidYMid"></svg></div>
<p style="clear:both;"></p>
<div class="metric">Population</div> 
<span id="pop_pct" class="num">81.9</span><span class="pct">%</span>
</div>

<div id="cases">
<div id="box2"><svg width="275" height="275" viewBox="0 0 275 275" preserveAspectRatio="xMidYMid"></svg></div>
<p style="clear:both;"></p>
<div class="metric">Cases</div>
<span id="case_pct" class="num">57.3</span><span class="pct">%</span>
</div>
</div>

<div style="clear:both"></div>
<div class="source">Source: Supreme Court of Minnesota, <a href="http://quickfacts.census.gov/qfd/states/27000.html" target="new_">U.S. Census Bureau</a>, Star Tribune analysis</div>
<p class="divider"></p>
<h3>Blacks and Native Americans represent disproportionate percentages of cannabis cases filed in Minnesota relative to their overall percentage of the population, while whites are under-represented.</h3>

  </li>

<div id='shift' class="anchor"></div>

  <li>
  <div class="title">A slower march toward acceptance in Midwest</div>

  Do you think the use of marijuana should be made legal, or not?
<div id="chart_us"><svg></svg></div>

  Regional support for legalizing marijuana (% Yes, should be legal)
<div id="chart_mn"><svg></svg></div>
<div class="source">Source: <a href="http://www.gallup.com/poll/179195/majority-continues-support-pot-legalization.aspx" target="_new">Gallup</a></div>
<p class="divider"></p>
<h3>While attitudes toward legalizing marijuana have shifted quickly and dramatically nationwide, poll data shows Midwestern opinions have been less consistent than other regions. But strong support in the East and West may portend increased support for legal medical and recreational marijuana further into the interior of the country.</h3>
  </li>

<div id='creditsS' class="anchor"></div>
  
  <li>
<div style="clear:both"></div>
<div id="nerdbox">
  <h3>Data Sources</h3>
  
  <div class="source_links">
  <p class='source_row'><div class="source_link"><a href="http://www.gallup.com/poll/179195/majority-continues-support-pot-legalization.aspx" target="_new">Gallup - Majority Continues to Support Pot Legalization in U.S.</a></div>  <div class="download"></div></p>
  <p class='source_row'><div class="source_link"><a href="http://mn.gov/admin/demography/data-by-topic/population-data/our-estimates/" target="_new">Minnesota State Demographic Center - Population Data > Our Estimates</a></div>  <div class="download"></div></p>
   <p class='source_row'><div class="source_link">Minnesota Office of the Revisor of Statutes - <a href="https://www.revisor.mn.gov/statutes/?id=152.01">152.01 DEFINITIONS</a>, <a href="https://www.revisor.mn.gov/laws/?id=311&year=2014&" target="new_">CHAPTER 311--S.F.No. 2470</a></div>  <div class="download"></div></p>
  <p class='source_row'><div class="source_link">NORML - <a href="http://norml.org/legal/medical-marijuana-2" target="_new">Medical Marijuana</a>, <a href="http://norml.org/laws" target="_new">State Laws</a></div>  <div class="download"></div></p>
  <p class='source_row'><div class="source_link"><a href="http://www.startribune.com/politics/245844481.html" target="_new">Star Tribune - Minnesota Poll results: Legalizing marijuana</a></div>  <div class="download"></div></p>
  <p class='source_row'><div class="source_link"><a href="http://quickfacts.census.gov/qfd/states/27000.html" target="new_">U.S. Census Bureau - State & County QuickFacts: Minnesota</a></div>  <div class="download"></div></p>

  </div>

<div style="clear:both"></div>

<div class="download_links">
  <p class='source_row'><div class="source_link">Supreme Court of Minnesota - Marijuana-related cases filed 2010-2013</div> <div class="download"><a href="https://github.com/striblab/startribune_dataviz/tree/master/20150427-marijuana/data/scom.zip?raw=true" target="_new"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
  <p class='source_row'><div class="source_link">Supreme Court of Minnesota - Conviction Depositions, Statute 152.027, 2007-2014</div>  <div class="download"><a href="https://github.com/striblab/startribune_dataviz/tree/master/20150427-marijuana/data/pettys.xlsx?raw=true" target="_new"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
  <p class='source_row'><div class="source_link">Minneapolis Police Department - Low-level arrests 2012-2014</div>  <div class="download"><a href="https://github.com/striblab/startribune_dataviz/tree/master/20150427-marijuana/data/mpd.xlsx?raw=true" target="_new"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
  <p class='source_row'><div class="source_link">Minnesota Bureau of Apprehension - Uniform Crime Reports 2009-2014</div>  <div class="download"><a href="https://github.com/striblab/startribune_dataviz/tree/master/20150427-marijuana/data/mpls_ucr.zip?raw=true" target="_new"><button class="downloadButton">&#9660; Download Data</button></a></div></p>
</div>
</div>

<div id="credits">
    <h3>Credits</h3>

   <div class="credit_block">
  <h5>Data Analysis and Visualization</h5>
  <p>Jeff Hargarten</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Jeff.Hargarten@startribune.com?subject=Marijuana in Minnesota" data-linkname="Jeff.Hargarten@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Jeff.Hargarten@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4642" data-linkname="612-673-4642" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4642</a> <a class="article-author-hcard__twitter" href="http://twitter.com/jeffhargarten" target="_blank" data-linkname="jeffhargarten" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">jeffhargarten</a></p>
  </div>

  <div class="credit_block">
  <h5>Data Analysis</h5>
  <p>MaryJo Webster</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:MaryJo.Webster@startribune.com?subject=Marijuana in Minnesota" data-linkname="MaryJo.Webster@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">MaryJo.Webster@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-1789" data-linkname="612-673-1789" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-1789</a> <a class="article-author-hcard__twitter" href="http://twitter.com/maryjowebster" target="_blank" data-linkname="maryjowebster" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">maryjowebster</a></p>
  </div>

  <div class="credit_block">
  <h5>Presentation Direction</h5>
  <p>Matt DeLong</p>
  <p><a class="article-author-hcard__email" target="_blank" href="mailto:Matt.DeLong@startribune.com?subject=Marijuana in Minnesota" data-linkname="Matt.DeLong@startribune.com" data-linktype="email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">Matt.DeLong@startribune.com</a> <a class="article-author-hcard__phone" href="tel:612-673-4854" data-linkname="612-673-4854" data-linktype="phone" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">612-673-4854</a> <a class="article-author-hcard__twitter" href="http://twitter.com/mattdelong" target="_blank" data-linkname="mattdelong" data-linktype="twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-author">mattdelong</a></p>
  </div>

 <div class="credit_block">
  <h5>Data Requests and Collection</h5>
  <p><a href="https://twitter.com/CaptainKurtis" target="new_">Kurtis Hanna</a>, <a href="http://sensible.mn" target="new_">Sensible Minnesota</a></p>
  </div>

    <div class="social_share_m">
<a style="cursor:pointer" class="bottomShare" id="facebookbtn-link" onclick="return popitup('http://www.facebook.com/sharer.php?&amp;p[title]=<?php echo urlencode($shareTitle); ?>&amp;p[summary]=<?php echo urlencode($shareDescription); ?>&amp;p[url]=<?php echo urlencode($shareURL); ?>&amp;p[images][0]=<?php echo urlencode($shareImage); ?>')" target="_blank"><img width="28" height="24" alt="bike blog facebook" src="http://stmedia.startribune.com/images/bikeBlog_facebook.png"></a>
<a style="cursor:pointer" class="bottomShare" id="twitterbtn-link" onclick="return popitup('https://twitter.com/share?url=<?php echo urlencode($shareURL); ?>&amp;counturl=<?php echo urlencode($shareURL); ?>&amp;text=<?php echo urlencode($shareDescription); ?>&amp;via=StarTribune')"><img width="28" height="24" alt="bike blog twitter" src="http://stmedia.startribune.com/images/bikeBlog_twitter.png"></a>
<a class="bottomShare" href="http://comments.startribune.com/comments.php?d=content_comments&asset_id=307021311&section=/local&comments=true"><img width="28" height="24" alt="bike blog comments" src="http://stmedia.startribune.com/images/bikeBlog_comments.png"></a>
</div>
  </div>

  </li>
</ul>

</div>

</div>
<!--close specialContentWrapper-->


<script src="http://i.po.st/share/script/post-widget.js#publisherKey=56d2hkmk6d6lmd6llqb2" type="text/javascript"></script>

<p style="clear:both"></p>


<!-- FOOTER SCRIPTS -->
<script src="http://m.startribune.com/packages/star-tribune/www-startribune-com/js/main.min.js?d=1441050019"></script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"f550207221","applicationID":"7749207","transactionName":"M1JaYBQAVhVYW0cPWwoYeVcSCFcIFlVSD1o=","queueTime":0,"applicationTime":2036,"atts":"HxVZFlwaRRs=","errorBeacon":"bam.nr-data.net","agent":"js-agent.newrelic.com\/nr-686.min.js"}</script></body>

<script src="js/nvd3-master/lib/d3.v3.js"></script>
<script src="js/nvd3-master/nv.d3.js"></script>
<script src="js/nvd3-master/src/utils.js"></script>
<script src="js/nvd3-master/src/tooltip.js"></script>
<script src="js/nvd3-master/src/models/legend.js"></script>
<script src="js/nvd3-master/src/models/axis.js"></script>
<script src="js/nvd3-master/examples/stream_layers.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/1.0.1/svg.min.js"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.8/mapbox.js'></script>
<script src="js/waypoints/lib/noframework.waypoints.min.js"></script>
<script type="text/javascript" src="http://prod-www.startribune.com/static/vendor/modernizr/modernizr.js?d=1404405207"></script>
<script type='text/javascript' src="http://www.startribune.com/includes/jquery-scrolltofixed-min.js"></script>
<script src="../_common_resources/interfaces/stickies/jquery.sticky.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19gOc2cesEa-sOj5x6THx30uB0kp3b-Y8_V9o7nQPxuI&sheet=race
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19gOc2cesEa-sOj5x6THx30uB0kp3b-Y8_V9o7nQPxuI&sheet=pettys
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19gOc2cesEa-sOj5x6THx30uB0kp3b-Y8_V9o7nQPxuI&sheet=mpls_police_arrests
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=19gOc2cesEa-sOj5x6THx30uB0kp3b-Y8_V9o7nQPxuI&sheet=mn_police_departments


// $jsonDataRace = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=gFpszay7p8gOEOA9Pj-yuuQFnUt_B0zhYxhK81Y_nMUcum7EvwQFAqe2BQm6jy_qQtfN_E-Rz9iStLczh4ksC1-03Siu7WFUOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-drNL2VvcPJa45xY0E7LgIiEjQTuGzACyT7fiL6v_rs-GS5JsAuCI5YIleoBKqoDxcG-w52aeuQk88Dkxrp83Q&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataPetty = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=-okR-DopKzoo82P60xXF43heb9a5Z-Lnvp1Aunygis8mkaN1EAcxZutoO50mm2vyYlgxJARay6Y4hN5jy7v_5FRS_iTBl1DlOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-drNL2VvcPJa45xY0E7LgIiEjQTuGzACyT7fiL6v_rs-GS5JsAuCI5YIleoBKqoDvl7IGsXAM8l2y2ebJT8uew&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataArrests = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=v-rAmLI58cxVG7pQlNUlYdIwcnCiU25jV5wdzdwcfsNT7vdiOAxhkArURbFu_-cwkIS6Fe-w_eg4hN5jy7v_5O9vaO-5-TaxOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-drNL2VvcPJa45xY0E7LgIiEjQTuGzACyT7fiL6v_rs-GS5JsAuCI5YIleoBKqoD35iDyrfKhroOMRBdudB6wBB614HPargZuSfnq3vD3-4&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
// $jsonDataDepartments = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=AQoqRuriUOmp60VgmtyvZg9h1AN6O_dCtWGoZlJw-LRk70UJpd8f6mhqCRpEKSvUqhZonrAQCJw4hN5jy7v_5CjmkHTOvG1WOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T-drNL2VvcPJa45xY0E7LgIiEjQTuGzACyT7fiL6v_rs-GS5JsAuCI5YIleoBKqoD35iDyrfKhrpsZlmZSOrLiVDNT8l6DvC17DDwPBtIZaY&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");


// var dataRaceLoad = <?php echo $jsonDataRace; ?>
// var dataPettyLoad = <?php echo $jsonDataPetty; ?>
// var dataArrestsLoad = <?php echo $jsonDataArrests; ?>
// var dataDepartmentsLoad = <?php echo $jsonDataDepartments; ?>

// var dataRace = dataRaceLoad.race;
// var dataPetty = dataPettyLoad.pettys;
// var dataArrests = dataArrestsLoad.mpls_police_arrests;
// var dataDepartments = dataDepartmentsLoad.mn_police_departments;
</script>

<script type='text/javascript'>


// $(window).load(function(){
// $(document).ready(function() {
//    $('#navigate').scrollToFixed({
//        limit: $('#specialContentWrapper').offset().top - $('#navigate').outerHeight() - 5,
//        marginTop: function() {
//            var marginTop = $(window).height() - $('#navigate').outerHeight(true) - 30;
//            if (marginTop >= 0) return 180;
//            return marginTop;
//        }
//    });

// });  

// });  

// $("#navigate").sticky({topSpacing:18});

$(window).load(function(){
   
$(window).scroll(function() {
   // if($(window).scrollTop() + $(window).height() == $(document).height()) {
  if($(window).scrollTop() > 9000) {
       $('aside, .myButtonNav').hide();
   }
   else { $('aside, .myButtonNav').show(); }
});

$(window).on('resize', function(event){
    var windowWidth = $(window).width();
if(windowWidth < 933){
    // $(".nav-utility-btn").text("");
}
});

$(document).ready(function() {
    var windowWidth = $(window).width();
if(windowWidth < 933){
    // $(".nav-utility-btn").text("");
}
});

 });

$(document).ready(function(){
    $("#navigate").sticky({ topSpacing:0 });
    $("#navigate-sticky-wrapper").width(100);
    $("#navigate-sticky-wrapper").css("float","left");
  });


</script>

<script>
jQuery("document").ready(function($){

$("#landscapeB").css("background-color","#333");

  $( ".myButtonNav" ).click(function() {
  $(".myButtonNav").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  }); 


var waypoint1 = new Waypoint({
  element: document.getElementById('landscape'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#landscapeB").css("background-color","#333");
  }
})
var waypoint2 = new Waypoint({
  element: document.getElementById('law'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#lawB").css("background-color","#333");
  }
})
var waypoint3 = new Waypoint({
  element: document.getElementById('opposition'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#oppositionB").css("background-color","#333");
  }
})
var waypoint4 = new Waypoint({
  element: document.getElementById('prosecutions'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#prosecutionsB").css("background-color","#333");
  }
})
var waypoint5 = new Waypoint({
  element: document.getElementById('cities'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#citiesB").css("background-color","#333");
  }
})
var waypoint6 = new Waypoint({
  element: document.getElementById('racial'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#racialB").css("background-color","#333");
  }
})
var waypoint7 = new Waypoint({
  element: document.getElementById('shift'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#shiftB").css("background-color","#333");
  }
})
var waypoint8 = new Waypoint({
  element: document.getElementById('creditsS'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#creditsB").css("background-color","#333");
  }
})
var waypoint9 = new Waypoint({
  element: document.getElementById('citations'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#citationsB").css("background-color","#333");
  }
})
var waypoint10 = new Waypoint({
  element: document.getElementById('enforcement'),
  handler: function(direction) {
  $(".myButtonNav").css("background-color","#61bd1a");
  $("#enforcementB").css("background-color","#333");
  }
})
});
</script>

<script>
var aspect = 600 / 500, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

var aspect2 = 600 / 500, chart = $("#map2 svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

var aspect3 = 275 / 275, chart = $("#box1 svg"), chart2 = $("#box2 svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
  chart2.attr("width", targetWidth);   
  chart2.attr("height", targetWidth / aspect);
});
</script>

<script>


$( document ).ready(function() {
  //$('.bxslider').bxSlider();
  $("#convictions").css("background-color","#333");
  $("#caseyear").css("background-color","#333");
  $("#others2").css("background-color","#333");
  $("#bigcops").css("background-color","#333");
  $("#mplspetty").css("background-color","#333");
$( ".myButton2" ).click(function() {
  $(".myButton2").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  //clicked2();
  });  
$( ".myButton" ).click(function() {
  $(".myButton").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  });  
$( ".myButton3" ).click(function() {
  $(".myButton3").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  }); 
$( ".myButton_pd" ).click(function() {
  $(".myButton_pd").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  }); 
$( ".myButton5" ).click(function() {
  $(".myButton5").css("background-color","#61bd1a");
  $(this).css("background-color","#333");
  });
});
</script>

<script>

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

var map = L.mapbox.map('dispense_map', 'mapbox.light', { maxZoom: 8, minZoom: 6})
        .setView([46.331758,-93.944092], 6);

map.scrollWheelZoom.disable();
if (map.tap) map.tap.disable();

        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.2650110,
          44.9777530
        ]
    },
    properties: {
        title: 'Minneapolis',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

                L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0899580,
          44.9537030
        ]
    },
    properties: {
        title: 'St. Paul',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1668860,
          44.8041320
        ]
    },
    properties: {
        title: 'Eagan',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.4707860,
          44.8546860
        ]
    },
    properties: {
        title: 'Eden Prairie',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -94.1632400,
          45.5579450
        ]
    },
    properties: {
        title: 'St. Cloud',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -92.9376890,
          47.4271550
        ]
    },
    properties: {
        title: 'Hibbing',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);


        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -96.7678040,
          46.8737650
        ]
    },
    properties: {
        title: 'Moorhead',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);

        L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -92.4629500,
          44.0234000
        ]
    },
    properties: {
        title: 'Rochester',
        description: 'Planned Medical Marijuana Dispensary',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a',
        'marker-symbol': 'circle'
    }
}).addTo(map);
</script>

<script>

var chart2;
nv.addGraph(function() {
    chart2 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(true)
      .groupSpacing(0.1)    //Distance between each group of bars.
      .margin({top: 30, right: 30, bottom: 30, left: 50})
      .tooltip(function(key, x, y, e, graph) { return '<h3>' + key + '</h3>' +'<p>' +  y + ' in ' + x + '</p>';});

    chart2.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart2 svg')
        .datum(caseYearData)
        .call(chart2);

    nv.utils.windowResize(chart2.update);

    return chart2;
});

var chart3;
nv.addGraph(function() {
    chart3 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(true)
      .groupSpacing(0.1)    //Distance between each group of bars.
      .tooltip(function(key, x, y, e, graph) {return '<h3>' + x + '</h3>' + '<p>' +  y + ' ' + key + '</p>';});

    chart3.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart_mpls svg')
        .datum(mplsData)
        .call(chart3);

    nv.utils.windowResize(chart3.update);

    return chart3;
});

var chart4;
nv.addGraph(function() {
    chart4 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(false)
      .groupSpacing(0.1)    //Distance between each group of bars.
      .tooltip(function(key, x, y, e, graph) {return '<h3>' + x + '</h3>' + '<p>' +  y + ' ' + key + 's arrested</p>';});

    chart4.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart_aclu svg')
        .datum(acluData)
        .call(chart4);

    nv.utils.windowResize(chart4.update);

    return chart4;
});

var chart5;
nv.addGraph(function() {
  chart5 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .color(['#61bd1a', '#2b632c', '#999', '#2B2B2B', '#121212'])
      .margin({top: 5, right: 5, bottom: 0, left: 5})
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .donutRatio(0.5)     //Configure how big you want the donut hole size to be.
      ;

    chart5.valueFormat(d3.format('%'));

    d3.select("#pie_us svg")
        .datum(usPoll)
        .transition().duration(350)
        .call(chart5);

    d3.select("#pie_us svg").append("text")
     .attr("text-anchor", "middle")
     .attr("class", "us_num")
     .attr("x", function(){ return $("#pie_us svg").width() / 2 })
     .style("margin-right","auto")
     .style("margin-left","auto")
     .attr("y", "160px")
     .html("51%");


    d3.select("#pie_us svg").append("text")
     .attr("text-anchor", "middle")
     .attr("class", "stance")
     .style("margin-right","auto")
     .style("margin-left","auto")
     .attr("x", function(){ return $("#pie_us svg").width() / 2 })
     .attr("y", "180px")
     .html("SUPPORT");

        nv.utils.windowResize(chart5.update);

  return chart5;
});

var chart6;
nv.addGraph(function() {
  chart6 = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLegend(false)
      .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .color(['#61bd1a', '#2b632c', '#999', '#2B2B2B', '#121212'])
      .margin({top: 5, right: 5, bottom: 0, left: 5})
      .tooltipContent(function(key, y, e, graph) { return  '<strong>' + key + ': ' + y + '</strong>' ; })
      .donutRatio(0.5)     //Configure how big you want the donut hole size to be.
      ;

    chart6.valueFormat(d3.format('%'));

    d3.select("#pie_mn svg")
        .datum(mnPoll)
        .transition().duration(350)
        .call(chart6);

    d3.select("#pie_mn svg").append("text")
     .attr("text-anchor", "middle")
     .attr("class", "us_num")
     .style("margin-right","auto")
     .style("margin-left","auto")
     .attr("x", function(){ return $("#pie_mn svg").width() / 2 })
     .attr("y", "160px")
     .html("30%");

    d3.select("#pie_mn svg").append("text")
     .attr("text-anchor", "middle")
     .attr("class", "stance")
     .style("margin-right","auto")
     .style("margin-left","auto")
     .attr("x", function(){ return $("#pie_mn svg").width() / 2 })
     .attr("y", "180px")
     .html("SUPPORT");

        nv.utils.windowResize(chart6.update);

  return chart6;
});

$(window).on('resize', function(){
  d3.selectAll(".us_num").attr("x", function(){ return $("#pie_mn svg").width() / 2 });
  d3.selectAll(".stance").attr("x", function(){ return $("#pie_us svg").width() / 2 });
});

var chart7;
nv.addGraph(function() {  
   chart7 = nv.models.cumulativeLineChart()
            .x(function(d) {return d[0]})
            .y(function(d) {return d[1]})
            .color(['#61bd1a', '#2b632c', '#BCBCBC', '#2B2B2B', '#121212'])
            .showControls(false)
            .margin({top: 30, right: 30, bottom: 50, left: 60})
            .useInteractiveGuideline(true);

            chart7.xAxis.showMaxMin(false)
            .tickValues([1041400800000,1104559200000,1262325600000,1293861600000,1325397600000,1357020000000,1388556000000])
            .tickFormat(function(d) {
                      return d3.time.format('%Y')(new Date(d))
             });

            chart7.yAxis.tickFormat(d3.format(",%"));

            // chart7.forceY([.20, .70]);

chart7.yAxis
  .scale()
    .domain([.20, .70]);

  d3.select('#chart_us svg')
    .datum(usTime)
    .transition().duration(500)
    .call(chart7)
    ;


  nv.utils.windowResize(chart7.update);

  return chart7;
});

var chart8;
nv.addGraph(function() {  
   chart8 = nv.models.cumulativeLineChart()
             .x(function(d) {return d[0] })
            .y(function(d) { return d[1] }) 
            .color(['#BCBCBC', '#555', '#121212','#61bd1a', '#2b632c'])
            .showControls(false)
            .margin({top: 30, right: 30, bottom: 50, left: 60})
            .useInteractiveGuideline(true);

            chart8.xAxis.showMaxMin(false)
            .tickValues([1262325600000,1293861600000,1325397600000,1357020000000,1388556000000])
            .tickFormat(function(d) {
                      return d3.time.format('%Y')(new Date(d))
             });

            chart8.yAxis.tickFormat(d3.format(",%"));

            // chart8.forceY([.20, .70]);

chart8.yAxis
  .scale()
    .domain([.20, .70]);

  d3.select('#chart_mn svg')
    .datum(mnTime)
    .transition().duration(500)
    .call(chart8)
    ;

  nv.utils.windowResize(chart8.update);

  return chart8;
});

var chart9;
nv.addGraph(function() {
    chart9 = nv.models.multiBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(false)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .stacked(true)
      .color(['#e6e6e6', '#d5d5d5', '#c4c4c4', '#b4b4b4', '#a3a3a3', '#929292', '#818181', '#707070', '#5f5f5f','#4e4e4e', '#3d3d3d', '#2c2c2c', '#1b1b1b', '#0a0a0a', '#000'])
      .groupSpacing(0.1)    //Distance between each group of bars.
      .tooltip(function(key, x, y, e, graph) {return '<h3>' + x + '</h3>' + '<p>' +  y + ' ' + key + ' cases</p>';});

    chart9.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart_pd svg')
        .datum(copData)
        .call(chart9);

    nv.utils.windowResize(chart9.update);

    return chart9;
});

var usTime = [
  {
    "key": "Yes, legal",
    "values": [
  [1041400800000,0],
  [1041400800000,.34],
  [1104559200000,.36],
  [1230789600000,.44],
  [1262325600000,.46],
  [1293861600000,.50],
  [1325397600000,.48],
  [1357020000000,.58],
  [1388556000000,.51]
]
  },
    {
    "key": "No, illegal",
    "values": [
  [1041400800000,0],
  [1041400800000,.64],
  [1104559200000,.60],
  [1230789600000,.54],
  [1262325600000,.50],
  [1293861600000,.46],
  [1325397600000,.50],
  [1357020000000,.39],
  [1388556000000,.47]
]
  }
]

var mnTime = [
  {
    "key": "East",
    "values": [
  [1262325600000,0],
  [1262325600000,.47],
  [1293861600000,.51],
  [1325397600000,.55],
  [1357020000000,.60],
  [1388556000000,.57]
]
  },
    {
    "key": "West",
    "values": [
  [1262325600000,0],
  [1262325600000,.58],
  [1293861600000,.55],
  [1325397600000,.52],
  [1357020000000,.63],
  [1388556000000,.57]
]
  },
    {
    "key": "South",
    "values": [
  [1262325600000,0],
  [1262325600000,.40],
  [1293861600000,.44],
  [1325397600000,.45],
  [1357020000000,.52],
  [1388556000000,.47]
]
  },
    {
    "key": "Midwest",
    "values": [
  [1262325600000,0],
  [1262325600000,.41],
  [1293861600000,.54],
  [1325397600000,.44],
  [1357020000000,.58],
  [1388556000000,.45]
]
  }
]

var usPoll = [
      { 
        "label": "Yes, legalize it",
        "value" : .51
      } , 
      { 
        "label": "No, don't legalize it",
        "value" : .47
      } , 
      { 
        "label": "Not sure",
        "value" : .02
      } 
    ]

var mnPoll = [
      { 
        "label": "Yes, legalize it",
        "value" : .30
      } , 
      { 
        "label": "No, don't legalize it",
        "value" : .63
      } , 
      { 
        "label": "Not sure",
        "value" : .07
      } 
    ]

var acluData = [
   {
    "key": "White",
    "color": "#BCBCBC",
    "values": [ 
      { 
        "label" : "2012" ,
        "value" : 411
      } ,       
      { 
        "label" : "2013" ,
        "value" : 460
      }  , 
      { 
        "label" : "2014" ,
        "value" : 229
      }
    ]
  },
  {
    "key": "Black",
    "color": "#808080",
    "values": [
      { 
        "label" : "2012" ,
        "value" : 1232
      } ,       
      { 
        "label" : "2013" ,
        "value" : 1142
      }  , 
      { 
        "label" : "2014" ,
        "value" : 805
      }
    ]
  },
  {
    "key": "Asian",
    "color": "#515151",
    "values": [
      { 
        "label" : "2012" ,
        "value" : 18
      } ,       
      { 
        "label" : "2013" ,
        "value" : 9
      }  , 
      { 
        "label" : "2014" ,
        "value" : 12
      }
    ]
  },
    {
    "key": "Native",
    "color": "#2B2B2B",
    "values": [
      { 
        "label" : "2012" ,
        "value" : 45
      } ,       
      { 
        "label" : "2013" ,
        "value" : 57
      }  , 
      { 
        "label" : "2014" ,
        "value" : 19
      }
    ]
  },
    {
    "key": "Other",
    "color": "#121212",
    "values": [
      { 
        "label" : "2012" ,
        "value" : 112
      } ,       
      { 
        "label" : "2013" ,
        "value" : 147
      }  , 
      { 
        "label" : "2014" ,
        "value" : 92
      }
    ]
  }
]

var mplsData = [
   {
    "key": "White",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 231
      } , 
      { 
        "label" : "2010" ,
        "value" : 207
      } , 
      { 
        "label" : "2011" ,
        "value" : 216
      }  , 
      { 
        "label" : "2012" ,
        "value" : 248
      } ,       
      { 
        "label" : "2013" ,
        "value" : 231
      }  , 
      { 
        "label" : "2014" ,
        "value" : 196
      }
    ]
  },
  {
    "key": "Black",
    "color": "#808080",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 746
      } , 
      { 
        "label" : "2010" ,
        "value" : 737
      } , 
      { 
        "label" : "2011" ,
        "value" : 526
      }  , 
      { 
        "label" : "2012" ,
        "value" : 569
      } ,       
      { 
        "label" : "2013" ,
        "value" : 510
      }  , 
      { 
        "label" : "2014" ,
        "value" : 497
      }
    ]
  },
   {
    "key": "Other",
    "color": "#515151",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 53
      } , 
      { 
        "label" : "2010" ,
        "value" : 33
      } , 
      { 
        "label" : "2011" ,
        "value" : 24
      }  , 
      { 
        "label" : "2012" ,
        "value" : 20
      } ,       
      { 
        "label" : "2013" ,
        "value" : 23
      }  , 
      { 
        "label" : "2014" ,
        "value" : 18
      }
    ]
  }
]

var caseData = [
  {
    "key": "Cases",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "White" ,
        "value" : .572
      } , 
      { 
        "label" : "Black" ,
        "value" : .168
      } , 
      { 
        "label" : "Native" ,
        "value" : .0551
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .0524
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .020
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .0018
      }
    ]
  },
  {
    "key": "Population",
    "color": "#808080",
    "values": [
      { 
        "label" : "White" ,
        "value" : .819
      } , 
      { 
        "label" : "Black" ,
        "value" : .057
      } , 
      { 
        "label" : "Native" ,
        "value" : .013
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .05
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .045
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .001
      }
    ]
  }
]

var convictionData = [
    {
    "key": "Convictions",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "White" ,
        "value" : .561
      } , 
      { 
        "label" : "Black" ,
        "value" : .176
      } , 
      { 
        "label" : "Native" ,
        "value" : .056
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .055
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .021
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .0019
      }
    ]
  },
{
    "key": "Cases",
    "color": "#808080",
    "values": [
      { 
        "label" : "White" ,
        "value" : .576
      } , 
      { 
        "label" : "Black" ,
        "value" : .169
      } , 
      { 
        "label" : "Native" ,
        "value" : .0551
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .0524
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .020
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .0018
      }
    ]
  },
  {
    "key": "Population",
    "color": "#515151",
    "values": [
      { 
        "label" : "White" ,
        "value" : .819
      } , 
      { 
        "label" : "Black" ,
        "value" : .057
      } , 
      { 
        "label" : "Native" ,
        "value" : .013
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .05
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .045
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .001
      }
    ]
  }
]

var outcomeData = [
  {
    "key": "Felonies",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "White" ,
        "value" : .841
      } , 
      { 
        "label" : "Black" ,
        "value" : .8698
      } , 
      { 
        "label" : "Native" ,
        "value" : .8897
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .8841
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .9118
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .860
      }
    ]
  },
  {
    "key": "Misdemeanors",
    "color": "#808080",
    "values": [
      { 
        "label" : "White" ,
        "value" : .1589
      } , 
      { 
        "label" : "Black" ,
        "value" : .1301
      } , 
      { 
        "label" : "Native" ,
        "value" : .110
      }  , 
      { 
        "label" : "Hispanic" ,
        "value" : .1158
      } ,       
      { 
        "label" : "Asian" ,
        "value" : .0881
      }  , 
      { 
        "label" : "Pacific" ,
        "value" : .1395
      }
    ]
  }
]

var pettyData = [
    {
    "key": "Petty Misdemeanors",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2009" ,
        "value" : 4158
      },
      { 
        "label" : "2010" ,
        "value" : 4401
      },
      { 
        "label" : "2011" ,
        "value" : 4483
      },
      { 
        "label" : "2012" ,
        "value" : 4916
      },
      { 
        "label" : "2013" ,
        "value" : 4853
      },
      { 
        "label" : "2014" ,
        "value" : 4396
      }
    ]
  }
]

var caseYearData = [
  {
    "key": "Case Filings",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 7661
      },
      { 
        "label" : "2011" ,
        "value" : 7876
      },
      { 
        "label" : "2012" ,
        "value" : 9046
      },
      { 
        "label" : "2013" ,
        "value" : 9968
      },
      { 
        "label" : "2014" ,
        "value" : 10359
      }
    ]
  }
]

var conYearData = [
  {
    "key": "Convictions",
    "color": "#BCBCBC",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 4098
      },
      { 
        "label" : "2011" ,
        "value" : 4310
      },
      { 
        "label" : "2012" ,
        "value" : 4321
      },
      { 
        "label" : "2013" ,
        "value" : 4518
      },
      { 
        "label" : "2014" ,
        "value" : 5047
      }
    ]
  }
]

var copData = [
  {
    "key": "Minneapolis",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 658
      },
      { 
        "label" : "2011" ,
        "value" : 684
      },
      { 
        "label" : "2012" ,
        "value" : 822
      },
      { 
        "label" : "2013" ,
        "value" : 910
      }
    ]
  }, 
  //  {
  //   "key": "Hennepin County",
  //   "values": [
  //     { 
  //       "label" : "2010" ,
  //       "value" : 321
  //     },
  //     { 
  //       "label" : "2011" ,
  //       "value" : 357
  //     },
  //     { 
  //       "label" : "2012" ,
  //       "value" : 437
  //     },
  //     { 
  //       "label" : "2013" ,
  //       "value" : 588
  //     }
  //   ]
  // },
  {
    "key": "St. Paul",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 470
      },
      { 
        "label" : "2011" ,
        "value" : 421
      },
      { 
        "label" : "2012" ,
        "value" : 293
      },
      { 
        "label" : "2013" ,
        "value" : 474
      }
    ]
  },
  //   {
  //   "key": "Ramsey County",
  //   "values": [
  //     { 
  //       "label" : "2010" ,
  //       "value" : 129
  //     },
  //     { 
  //       "label" : "2011" ,
  //       "value" : 159
  //     },
  //     { 
  //       "label" : "2012" ,
  //       "value" : 115
  //     },
  //     { 
  //       "label" : "2013" ,
  //       "value" : 140
  //     }
  //   ]
  // },
  {
    "key": "Rochester",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 139
      },
      { 
        "label" : "2011" ,
        "value" : 129
      },
      { 
        "label" : "2012" ,
        "value" : 164
      },
      { 
        "label" : "2013" ,
        "value" : 187
      }
    ]
  },
  {
    "key": "Duluth",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 133
      },
      { 
        "label" : "2011" ,
        "value" : 126
      },
      { 
        "label" : "2012" ,
        "value" : 245
      },
      { 
        "label" : "2013" ,
        "value" : 337
      }
    ]
  },
  // {
  //   "key": "St. Louis County",
  //   "values": [
  //     { 
  //       "label" : "2010" ,
  //       "value" : 235
  //     },
  //     { 
  //       "label" : "2011" ,
  //       "value" : 288
  //     },
  //     { 
  //       "label" : "2012" ,
  //       "value" : 254
  //     },
  //     { 
  //       "label" : "2013" ,
  //       "value" : 256
  //     }
  //   ]
  // },
  {
    "key": "Bloomington",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 103
      },
      { 
        "label" : "2011" ,
        "value" : 95
      },
      { 
        "label" : "2012" ,
        "value" : 156
      },
      { 
        "label" : "2013" ,
        "value" : 169
      }
    ]
  },
  {
    "key": "Brooklyn Park",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 56
      },
      { 
        "label" : "2011" ,
        "value" : 85
      },
      { 
        "label" : "2012" ,
        "value" : 107
      },
      { 
        "label" : "2013" ,
        "value" : 103
      }
    ]
  },
  {
    "key": "Plymouth",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 42
      },
      { 
        "label" : "2011" ,
        "value" : 31
      },
      { 
        "label" : "2012" ,
        "value" : 43
      },
      { 
        "label" : "2013" ,
        "value" : 34
      }
    ]
  },
  {
    "key": "Saint Cloud",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 191
      },
      { 
        "label" : "2011" ,
        "value" : 211
      },
      { 
        "label" : "2012" ,
        "value" : 213
      },
      { 
        "label" : "2013" ,
        "value" : 254
      }
    ]
  },
  {
    "key": "Mankato",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 93
      },
      { 
        "label" : "2011" ,
        "value" : 110
      },
      { 
        "label" : "2012" ,
        "value" : 106
      },
      { 
        "label" : "2013" ,
        "value" : 198
      }
    ]
  },
  {
    "key": "Coon Rapids",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 54
      },
      { 
        "label" : "2011" ,
        "value" : 64
      },
      { 
        "label" : "2012" ,
        "value" : 76
      },
      { 
        "label" : "2013" ,
        "value" : 119
      }
    ]
  },  
  {
    "key": "Eagan",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 58
      },
      { 
        "label" : "2011" ,
        "value" : 83
      },
      { 
        "label" : "2012" ,
        "value" : 66
      },
      { 
        "label" : "2013" ,
        "value" : 77
      }
    ]
  },  
  {
    "key": "Woodbury",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 39
      },
      { 
        "label" : "2011" ,
        "value" : 48
      },
      { 
        "label" : "2012" ,
        "value" : 64
      },
      { 
        "label" : "2013" ,
        "value" : 49
      }
    ]
  },  
  {
    "key": "Maple Grove",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 21
      },
      { 
        "label" : "2011" ,
        "value" : 32
      },
      { 
        "label" : "2012" ,
        "value" : 17
      },
      { 
        "label" : "2013" ,
        "value" : 31
      }
    ]
  }//,
  // {
  //   "key": "MN State Patrol",
  //   "values": [
  //     { 
  //       "label" : "2010" ,
  //       "value" : 930
  //     },
  //     { 
  //       "label" : "2011" ,
  //       "value" : 1064
  //     },
  //     { 
  //       "label" : "2012" ,
  //       "value" : 1259
  //     },
  //     { 
  //       "label" : "2013" ,
  //       "value" : 1147
  //     }
  //   ]
  // }
]

var copTotalData = [
  {
    "key": "Total",
    "values": [
      { 
        "label" : "2010" ,
        "value" : 7488
      },
      { 
        "label" : "2011" ,
        "value" : 7648
      },
      { 
        "label" : "2012" ,
        "value" : 8800
      },
      { 
        "label" : "2013" ,
        "value" : 9730
      }
    ]
  }
]


function redrawChart(data){
    d3.select('#chart1 svg').datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
}

function redrawChart2(data){
    d3.select('#chart2 svg').datum(data).transition().duration(500).call(chart2);
    nv.utils.windowResize(chart2.update);
}

function redrawCopChart(data){
    d3.select('#chart_pd svg').datum(data).transition().duration(500).call(chart9);
    nv.utils.windowResize(chart9.update);
}

function redrawMPLSChart(data){
    d3.select('#chart_mpls svg').datum(data).transition().duration(500).call(chart3);
    nv.utils.windowResize(chart9.update);
}
</script>

<script>
var none = "#f7f7f7";
var q1="#e9f6e6";
var q2="#c7e9c0";
var q3="#74c476";
var q4="#006d2c";
var q5="#002911";

function redrawMap(race){

var districtInfo = document.getElementById('infobox');

d3.csv("data/county_race.csv", function(error, popData) {
    popData.forEach(function(d) {
        d.county = d.county;
    d.white = +d.white;
    d.black = +d.black;
    d.asian = +d.asian;
    d.pacific = +d.pacific;
    d.indian = +d.indian;
    d.hispanic = +d.hispanic;
    d.population = +d.population;
    });


d3.csv("data/cannabis_county_data.csv", function(error, csvData2) {
    csvData2.forEach(function(d) {
        d.race = d.race;
    d.county = d.county;
    d.convictions = +d.convictions;
    d.total = +d.total;
    });

d3.csv("data/cannabis_county_cases.csv", function(error, caseData) {
    csvData2.forEach(function(d) {
        d.race = d.race;
    d.county = d.county;
    d.cases = +d.cases;
    d.total = +d.total;
    });

    d3.select('#map svg').selectAll("path")
       .on("mousedown", function(d, i){

districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " </div><div class='prevalence'>0 cannabis-related cases filed</div> ";

      for (var i = 0; i < caseData.length; i++){

      if (race == "total"){
          if ((d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
if (popData[k].county == d.properties.COUNTYNAME){
var result = (caseData[i].total / popData[k].population) * 1000;
districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + "</div><div class='prevalence'>" + d3.round(result, 1) + " cannabis-related cases filed per 1,000 people</div>";
}
        }
          }
       } else {

        if ((caseData[i].race == race) && (d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
             if (popData[k].county == d.properties.COUNTYNAME){
                  if (race == "white"){var race_pop = popData[k].white; var cons = caseData[i].convictions;}
          else if(race == "black"){var race_pop = popData[k].black; var cons = caseData[i].convictions;}
          else if(race == "asian"){var race_pop = popData[k].asian; var cons = caseData[i].convictions;}
          else if(race == "indian"){var race_pop = popData[k].indian; var cons = caseData[i].convictions;}
          else if(race == "pacific"){var race_pop = popData[k].pacific; var cons = caseData[i].convictions;}
          else if(race == "hispanic"){var race_pop = popData[k].hispanic; var cons = caseData[i].convictions;}

if (isFinite(caseData[i].convictions)){
var result = (cons / race_pop) * 1000;
districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>" + d3.round(result, 1) + " cannabis-related cases filed per 1,000 " + race + " people</div>";
}
             }
       }
    }
      }
}
})
      .style("fill", function(d){
      for (var i = 0; i < caseData.length; i++){
      if (race == "total"){
          if ((d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
if (popData[k].county == d.properties.COUNTYNAME){
//console.log((caseData[i].total / popData[k].population) * 1000);
            if (((caseData[i].total / popData[k].population) * 1000) > 20 ) { return q5; }
            if (((caseData[i].total / popData[k].population) * 1000) > 15 ) { return q4; }
            if (((caseData[i].total / popData[k].population) * 1000) > 10 ) { return q3; }
            if (((caseData[i].total / popData[k].population) * 1000) > 5 ) { return q2; }
            if (((caseData[i].total / popData[k].population) * 1000) > 0 ) { return q1; }
}
        }
          }
       } else {
          if ((caseData[i].race == race) && (d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
            if (popData[k].county == d.properties.COUNTYNAME){
                  if (race == "white"){var race_pop = popData[k].white; }
          else if(race == "black"){var race_pop = popData[k].black; }
          else if(race == "asian"){var race_pop = popData[k].asian; }
          else if(race == "indian"){var race_pop = popData[k].indian; }
          else if(race == "pacific"){var race_pop = popData[k].pacific; }
          else if(race == "hispanic"){var race_pop = popData[k].hispanic; }

              if (((caseData[i].convictions / race_pop) * 1000) > 75) { return q5; }
              if (((caseData[i].convictions / race_pop) * 1000) > 50) { return q4; }
              if (((caseData[i].convictions / race_pop) * 1000) > 25) { return q3; }
              if (((caseData[i].convictions / race_pop) * 1000) > 10) { return q2; }
              if (((caseData[i].convictions / race_pop) * 1000) > 0) { return q1; }
        }
        }
          }
       }


      }
         return none; 
        });
    });
 });
 });
}

d3.csv("data/county_race.csv", function(error, popData) {
    popData.forEach(function(d) {
        d.county = d.county;
    d.white = +d.white;
    d.black = +d.black;
    d.asian = +d.asian;
    d.pacific = +d.pacific;
    d.indian = +d.indian;
    d.hispanic = +d.hispanic;
    d.population = +d.population;
    });



d3.csv("data/cannabis_county_data.csv", function(error, csvData2) {
    csvData2.forEach(function(d) {
        d.race = d.race;
    d.county = d.county;
    d.convictions = +d.convictions;
    d.total = +d.total;
    });

d3.csv("data/cannabis_county_cases.csv", function(error, caseData) {
    csvData2.forEach(function(d) {
        d.race = d.race;
    d.county = d.county;
    d.cases = +d.cases;
    d.total = +d.total;
    });

race = "total";

var width = 600,
    height = 500,
    centered;

var projection = d3.geo.albersUsa()
    .scale(4200)
    .translate([100, 800]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    //.on("click", clicked2)
    .attr("height", height);

var g = svg.append("g");

var districtInfo = document.getElementById('infobox');

districtInfo.innerHTML = "<div class='county_name'>Minnesota</div><div class='prevalence'>6.2 cannabis-related cases filed per 1,000 people</div>";

d3.json("shapefiles/counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d){
      for (var i = 0; i < caseData.length; i++){
      if (race == "total"){
          if ((d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
if (popData[k].county == d.properties.COUNTYNAME){
//console.log((caseData[i].total / popData[k].population) * 1000);
            if (((caseData[i].total / popData[k].population) * 1000) > 20 ) { return q5; }
            if (((caseData[i].total / popData[k].population) * 1000) > 15 ) { return q4; }
            if (((caseData[i].total / popData[k].population) * 1000) > 10 ) { return q3; }
            if (((caseData[i].total / popData[k].population) * 1000) > 5 ) { return q2; }
            if (((caseData[i].total / popData[k].population) * 1000) > 0 ) { return q1; }
}
    }
          }
       } else {
          if ((caseData[i].race == race) && (d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
            if (popData[k].county == d.properties.COUNTYNAME){
                  if (race == "white"){var race_pop = popData[k].white; }
          else if(race == "black"){var race_pop = popData[k].black; }
          else if(race == "asian"){var race_pop = popData[k].asian; }
          else if(race == "indian"){var race_pop = popData[k].indian; }
          else if(race == "pacific"){var race_pop = popData[k].pacific; }
          else if(race == "hispanic"){var race_pop = popData[k].hispanic; }

              if (((caseData[i].convictions / race_pop) * 1000) > 75) { return q5; }
              if (((caseData[i].convictions / race_pop) * 1000) > 50) { return q4; }
              if (((caseData[i].convictions / race_pop) * 1000) > 25) { return q3; }
              if (((caseData[i].convictions / race_pop) * 1000) > 10) { return q2; }
              if (((caseData[i].convictions / race_pop) * 1000) > 0) { return q1; }
        }
        }
          }
       }


      }
         return none; 
        })
      .on("mousedown", function(d, i){

districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>0 cannabis-related cases</div> ";

      for (var i = 0; i < caseData.length; i++){

      if (race == "total"){
          if ((d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
if (popData[k].county == d.properties.COUNTYNAME){
var result = (caseData[i].total / popData[k].population) * 1000;
districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>" + d3.round(result, 1) + " cannabis-related cases filed per 1,000 people</div>";
}
    }
          }
       } else {

        if ((caseData[i].race == race) && (d.properties.COUNTYNAME == caseData[i].county)){
           for (var k = 0; k < popData.length; k++){
             if (popData[k].county == d.properties.COUNTYNAME){
                  if (race == "white"){var race_pop = popData[k].white; var cons = caseData[i].convictions;}
      else if(race == "black"){var race_pop = popData[k].black; var cons = caseData[i].convictions;}
      else if(race == "asian"){var race_pop = popData[k].asian; var cons = caseData[i].convictions;}
      else if(race == "indian"){var race_pop = popData[k].indian; var cons = caseData[i].convictions;}
      else if(race == "pacific"){var race_pop = popData[k].pacific; var cons = caseData[i].convictions;}
      else if(race == "hispanic"){var race_pop = popData[k].hispanic; var cons = caseData[i].convictions;}

if (isFinite(caseData[i].convictions)){
var result = (cons / race_pop) * 1000;
districtInfo.innerHTML = "<div class='county_name'>" + d.properties.COUNTYNAME + " County</div><div class='prevalence'>" + d3.round(result, 1) + " cannabis-related cases filed per 1,000 " + race + " people</div>";
}
             }
     }
  }
      }
}
})
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + " County</b>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});



// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

//svg.call(zoom);

$("ul li #sidebox #zoom").click(function() {
  clicked2();
});
$(".myButton2").mousedown(function() {
  clicked2();
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;
var districtInfo = document.getElementById('infobox');

    districtInfo.innerHTML = "<div class='county_name'>Minnesota</div><div class='prevalence'>6.2 cannabis-related cases filed per 1,000 people</div>";


  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

});
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

<script>

var white = "#edf8e9";
var black = "#c7e9c0";
var indian = "#a1d99b";
var hispanic = "#74c476";
var asian = "#31a354";
var other = "#006d2c";


$(document).ready(function() {
    cartogram1.init();
    cartogram2.init();
});

var tip2 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.state_full + "</strong>";
  })

var cartogram1 = {
    margin: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
    },

    selector: '#box1 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 275 - self.margin.left - self.margin.right;
        self.height = 275 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.grid_population)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                //return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color + " state-block";
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .call(tip2);
            // .on('mouseover', tip2.show)
            //  .on('mouseout', tip2.hide);

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide)
            .text(function(d) {
                return d.state_postal;
            });
    },

grid_population: [{'state_full':'white','state_postal':' ','row':0,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':6,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':7,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':8,'column':0,'color':'white'},
{'state_full':'black','state_postal':' ','row':8,'column':1,'color':'black'},
{'state_full':'black','state_postal':' ','row':8,'column':2,'color':'black'},
{'state_full':'black','state_postal':' ','row':8,'column':3,'color':'black'},
{'state_full':'black','state_postal':' ','row':8,'column':4,'color':'black'},
{'state_full':'black','state_postal':' ','row':8,'column':5,'color':'black'},
{'state_full':'black','state_postal':' ','row':8,'column':6,'color':'black'},
{'state_full':'hispanic','state_postal':' ','row':8,'column':7,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':8,'column':8,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':8,'column':9,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':9,'column':0,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':9,'column':1,'color':'hispanic'},
{'state_full':'indian','state_postal':' ','row':9,'column':2,'color':'indian'},
{'state_full':'asian','state_postal':' ','row':9,'column':3,'color':'asian'},
{'state_full':'asian','state_postal':' ','row':9,'column':4,'color':'asian'},
{'state_full':'asian','state_postal':' ','row':9,'column':5,'color':'asian'},
{'state_full':'asian','state_postal':' ','row':9,'column':6,'color':'asian'},
{'state_full':'asian','state_postal':' ','row':9,'column':7,'color':'asian'},
{'state_full':'other','state_postal':' ','row':9,'column':8,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':9,'color':'other'}
]

};

var cartogram2 = {
    margin: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
    },

    selector: '#box2 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 275 - self.margin.left - self.margin.right;
        self.height = 275 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.grid_cases)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color + " state-block";
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size);
            // .call(tip2)
            // .on('mouseover', tip2.show)
            //  .on('mouseout', tip2.hide);

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide)
            .text(function(d) {
                return d.state_postal;
            });
    },

    grid_cases: [{'state_full':'white','state_postal':' ','row':0,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':0,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':1,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':2,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':3,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':4,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':6,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':7,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':8,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':9,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':0,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':1,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':2,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':3,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':4,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':5,'color':'white'},
{'state_full':'white','state_postal':' ','row':5,'column':6,'color':'white'},
{'state_full':'black','state_postal':' ','row':5,'column':7,'color':'black'},
{'state_full':'black','state_postal':' ','row':5,'column':8,'color':'black'},
{'state_full':'black','state_postal':' ','row':5,'column':9,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':0,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':1,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':2,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':3,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':4,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':5,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':6,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':7,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':8,'color':'black'},
{'state_full':'black','state_postal':' ','row':6,'column':9,'color':'black'},
{'state_full':'black','state_postal':' ','row':7,'column':0,'color':'black'},
{'state_full':'black','state_postal':' ','row':7,'column':1,'color':'black'},
{'state_full':'black','state_postal':' ','row':7,'column':2,'color':'black'},
{'state_full':'black','state_postal':' ','row':7,'column':3,'color':'black'},
{'state_full':'hispanic','state_postal':' ','row':7,'column':4,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':7,'column':5,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':7,'column':6,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':7,'column':7,'color':'hispanic'},
{'state_full':'hispanic','state_postal':' ','row':7,'column':8,'color':'hispanic'},
{'state_full':'indian','state_postal':' ','row':7,'column':9,'color':'indian'},
{'state_full':'indian','state_postal':' ','row':8,'column':0,'color':'indian'},
{'state_full':'indian','state_postal':' ','row':8,'column':1,'color':'indian'},
{'state_full':'indian','state_postal':' ','row':8,'column':2,'color':'indian'},
{'state_full':'indian','state_postal':' ','row':8,'column':3,'color':'indian'},
{'state_full':'indian','state_postal':' ','row':8,'column':4,'color':'indian'},
{'state_full':'asian','state_postal':' ','row':8,'column':5,'color':'asian'},
{'state_full':'asian','state_postal':' ','row':8,'column':6,'color':'asian'},
{'state_full':'other','state_postal':' ','row':8,'column':7,'color':'other'},
{'state_full':'other','state_postal':' ','row':8,'column':8,'color':'other'},
{'state_full':'other','state_postal':' ','row':8,'column':9,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':0,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':1,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':2,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':3,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':4,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':5,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':6,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':7,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':8,'color':'other'},
{'state_full':'other','state_postal':' ','row':9,'column':9,'color':'other'}
]

};


</script>

<script>
var width = 630,
    height = 300,
    centered;

var projection3 = d3.geo.albersUsa()
    .scale(157000)
    .translate([-6100, 17600]);

var path3 = d3.geo.path()
    .projection(projection3);

var svg3 = d3.select("#map3").append("svg")
    .attr("width", width)
    .attr("height", height);

svg3.append("rect")
    .attr("class", "background")
    .attr("width", width)
    //.on("click", clicked2)
    .attr("height", height);

var g3 = svg3.append("g");


d3.json("shapefiles/mpls.json", function(error, us) {
  g3.append("g")
      .attr("id", "mpls")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path3)
      .on("click", clicked)
      .style("fill", "#ddd")
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.Name + "</b>";}));

  g3.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "mpls-borders")
      .attr("d", path3);
});


// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

//svg.call(zoom);

$("#zoom").click(function() {
  clicked2();
});
$(".myButton2").mousedown(function() {
  clicked2();
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g3.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g3.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;
var districtInfo = document.getElementById('infobox');

    districtInfo.innerHTML = "";


  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g3.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g3.transition()
      .duration(750)
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}
</script>

<script>


$(document).ready(function() {
    cartogram4.init();
});

var tip3 = d3.tip()
   .attr('class', 'd3-tip')
   .offset([-50, 0])
   .html(function(d) {
     return "<strong>" + d.state_full + "</strong>";
   })

var cartogram4 = {
    margin: {
        top: 70,
        right: -110,
        bottom: 30,
        left: 30
    },

    selector: '#map2 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 605;
        self.height = 300;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_legal)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')

            .attr('class', function(d) {
                return d.color;
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .attr('criminal', function(d) {
                return d.criminal;
            });
            // .call(tip3)
            // .on('mouseover', tip3.show)
            //  .on('mouseout', tip3.hide);

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .call(tip2)
            .on('mouseover', tip3.show)
             .on('mouseout', tip3.hide)
            .text(function(d) {
                return d.state_postal;
            });
    },

state_legal: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total':'No laws legalizing marijuana','color':'dq0'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total':'Marijuana legalized for recreational use','color':'dq3','criminal':'yes'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'California','state_postal':'CA*','row':3,'column':0,'state_total':'No laws legalizing marijuana','color':'dq2','criminal':'no'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total':'Marijuana legalized for recreational use','color':'dq3','criminal':'yes'},
        {'state_full':'Connecticut','state_postal':'CT*','row':2,'column':9,'state_total':'Marijuana legalized for medical use','color':'dq3','criminal':'no'},
        {'state_full':'District of Columbia','state_postal':'DC','row':4,'column':8,'state_total':'Marijuana legalized for medical use','color':'dq3','criminal':'yes'},
        {'state_full':'Delaware','state_postal':'DE*','row':3,'column':9,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Maine','state_postal':'ME*','row':-1,'column':10,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Maryland','state_postal':'MD*','row':3,'column':8,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Massachusetts','state_postal':'MA*','row':1,'column':9,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'Minnesota','state_postal':'MN*','row':1,'column':4,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Mississippi','state_postal':'MS*','row':5,'column':5,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'no'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'Nebraska','state_postal':'NE*','row':3,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'no'},
        {'state_full':'Nevada','state_postal':'NV*','row':2,'column':1,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total':'No laws legalizing marijuana','color':'dq2','criminal':'yes'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'yes'},
        {'state_full':'New York','state_postal':'NY*','row':1,'column':8,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'North Carolina','state_postal':'NC*','row':4,'column':6,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'no'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Ohio','state_postal':'OH*','row':2,'column':6,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'no'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total':'Marijuana legalized for recreational use','color':'dq3','criminal':'yes'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Rhode Island','state_postal':'RI*','row':2,'column':10,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Vermont','state_postal':'VT*','row':0,'column':9,'state_total':'Marijuana legalized for medical use','color':'dq2','criminal':'no'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total':'Marijuana legalized for recreational use','color':'dq3','criminal':'yes'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total':'No laws legalizing marijuana','color':'dq0','criminal':'yes'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total':'No laws legalizing marijuana','color':'dq1','criminal':'yes'}]

};


</script>
<script>
var popInfo = document.getElementById('pop_pct');
var caseInfo = document.getElementById('case_pct');
var stateInfo = document.getElementById('description');

$( document ).ready(function() {
    $("#white").addClass("selectedButton");
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white selectd");
    popInfo.innerHTML = "82";
    caseInfo.innerHTML = "57";
})
  $(".myButton4").click(function(){
    $(".myButton4").removeClass("selectedButton");
    $(this).addClass("selectedButton");
  });
  $("#white").click(function(){
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white selectd");
    popInfo.innerHTML = "82";
    caseInfo.innerHTML = "57";
  });
  $("#black").click(function(){
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black selectd");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white faded2");
    popInfo.innerHTML = "6";
    caseInfo.innerHTML = "17";
  });
  $("#hispanic").click(function(){
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic selectd");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white faded2");
    popInfo.innerHTML = "5";
    caseInfo.innerHTML = "5";
  });
  $("#native").click(function(){
    $(".indian").attr("class","indian selectd");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white faded2");
    popInfo.innerHTML = "1";
    caseInfo.innerHTML = "6";
    conInfo.innerHTML = "6";
  });
  $("#asian").click(function(){
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian selectd");
    $(".other").attr("class","other faded2");
    $(".white").attr("class","white faded2");
    popInfo.innerHTML = "5";
    caseInfo.innerHTML = "2";
  });
  $("#other").click(function(){
    $(".indian").attr("class","indian faded2");
    $(".black").attr("class","black faded2");
    $(".hispanic").attr("class","hispanic faded2");
    $(".asian").attr("class","asian faded2");
    $(".other").attr("class","other selectd");
    $(".white").attr("class","white faded2");
    popInfo.innerHTML = "2";
    caseInfo.innerHTML = "13";
  });
    $("#decriminalized").click(function(){
    $(".dq1").attr("class","dq1 faded2");
    $(".dq2").attr("class","dq2 faded2");
    $(".dq3").attr("class","dq3 faded2");
    $(".dq0").attr("class","dq0 faded2");
    $(".dq1[criminal='no']").attr("class","dq1");
    $(".dq2[criminal='no']").attr("class","dq2");
    $(".dq3[criminal='no']").attr("class","dq3");
    $(".dq0[criminal='no']").attr("class","dq0");
    stateInfo.innerHTML = "While remaining recreationally illegal, marijuana is decriminalized in some states where first-time possession is typically treated as a minor violation.";
  });
  $("#oil").click(function(){
    $(".dq1").attr("class","dq1 faded2");
    $(".dq2").attr("class","dq2 faded2");
    $(".dq3").attr("class","dq3 faded2");
    $(".dq0").attr("class","dq0");
    stateInfo.innerHTML = "Some states have legalized non-psychoactive cannabidoil -- a marijuana derivative -- for very specific medical treatments while other marijuana strains remain illegal.";
  });
  $("#illegal").click(function(){
    $(".dq0").attr("class","dq0");
    $(".dq1").attr("class","dq1");
    $(".dq2").attr("class","dq2 faded2");
    $(".dq3").attr("class","dq3 faded2");
     stateInfo.innerHTML = "Marijuana remains illegal to sell or use in any substantial quantity in many states, even while some have certain exceptions.";
  });
  $("#medical").click(function(){
    $(".dq0").attr("class","dq0 faded2");
    $(".dq1").attr("class","dq1 faded2");
    $(".dq2").attr("class","dq2");
    $(".dq3").attr("class","dq3 faded2");
     stateInfo.innerHTML = "Some states have passed laws of varying strictness allowing the use of medical marijuana, while recreational use and sale remains illegal.";
  });
  $("#legal").click(function(){
    $(".dq0").attr("class","dq0 faded2");
    $(".dq1").attr("class","dq1 faded2");
    $(".dq2").attr("class","dq2 faded2");
    $(".dq3").attr("class","dq3");
     stateInfo.innerHTML = "A handful of states have legalized  marijuana for recreational and medical use under a varying set of rules, while others consider following suit.";
  });
  $("#reset").click(function(){
    $(".dq0").attr("class","dq0");
    $(".dq1").attr("class","dq1");
    $(".dq2").attr("class","dq2");
    $(".dq3").attr("class","dq3");
     stateInfo.innerHTML = "Marijuana's legal status has quickly transformed in various ways across the country as associated medical and economic benefits become increasingly accepted.";
  });
</script>


<script>
// readfile('http://www.startribune.com/partner/footer/294420061/');
</script>

  <script src="http://m.startribune.com/assets/min/main.min.js?d=1449692463"></script>
  <script type="text/javascript">
    var _sf_async_config = { uid: 19787, domain: 'm.startribune.com', useCanonical: true };
    (function() {
        function loadChartbeat() {
            window._sf_endpt = (new Date()).getTime();
            var e = document.createElement('script');
            e.setAttribute('language', 'javascript');
            e.setAttribute('type', 'text/javascript');
            e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
            document.body.appendChild(e);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != 'function') ?
                loadChartbeat : function() { oldonload(); loadChartbeat(); };
    })();
</script>
<!-- Begin comScore Tag -->
<script>
    var _comscore = _comscore || [];
    _comscore.push({ c1: "2", c2: "8428425" });
    (function() {
        var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
        s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
        el.parentNode.insertBefore(s, el);
    })();
</script>
<noscript>
    <img src="http://b.scorecardresearch.com/p?c1=2&c2=8428425&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->
<!-- Start Quantcast tag -->
<script type="text/javascript">
    _qoptions={
        qacct:"p-0fEc9CMkDiJ2g"
    };
</script>
<script type="text/javascript" src="http://edge.quantserve.com/quant.js"></script>
<noscript>
    <img src="http://pixel.quantserve.com/pixel/p-0fEc9CMkDiJ2g.gif" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/> </noscript>
<!-- End Quantcast tag -->



<script src="http://m.startribune.com/assets/js/st.analytics.click.tracking.js?d=1449692420" type="text/javascript"></script>
<script src="http://m.startribune.com/assets/js/st.analytics.js?d=1449692420" type="text/javascript"></script>

        <div id="div-gpt-ad-interstitial-1"></div>
              <script>
            // Optimizely Adobe Analytics SiteCatalyst Integration code
            window.optimizely = window.optimizely || [];
            window.optimizely.push('activateSiteCatalyst');

            jQuery( document ).on(
                'no-interstitial',
                function () {
                    if (window.pageViewShouldFired) {
                        ST_Analytics.om(dataLayer);
                    }
                }
            );
        </script>
          
<script>
    ST_Analytics_Click_Tracking.listen();
</script>
</body>
</html>