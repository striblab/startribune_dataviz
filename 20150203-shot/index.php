
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>St. Paul Police Shootings</title>
  <meta name="description" content="St. Paul Police Shootings">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link href="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/src/nv.d3.css" rel="stylesheet" type="text/css">
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.css' rel='stylesheet' />
  <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.4/leaflet.fullscreen.css' rel='stylesheet' />
  <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />
  <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
<style type="text/css">
h1, h2, h3, h4, h5, h6 { font-family: "Popular"; }
h2 { color: #666; }
</style>
<style>
    path:hover { fill-opacity: 0.5; stroke: #fff !important; }
    .symbol { fill: #ddd; fill-opacity: 1; stroke: #fff; }
    .tab-content.active { display: block; }
    .tab-content.hide { display: none; }
    .tooltip { background-color: rgba(255,255,255,1); border-radius: 10px; height: 50px; margin: 10px; moz-border-radius: 10px; padding-left: 10px; padding-top: 10px; webkit-border-radius: 10px; width: 150px; }
    .land { fill: #222; }
    .state { fill: #ddd; }
    .state:hover { cursor: pointer; stroke: black; }
    .state-label { cursor: pointer; }
    rect { border-radius: 2px !important; }
    .state-label { moz-user-select: none; ms-user-select: none; webkit-user-select: none; }
    .key text { dominant-baseline: central; font-size: 12px; }
    .leader { shape-rendering: crispEdges; stroke: #666; }
    .selectable { background-color: #c0bfeb !important; fill: #c0bfeb !important; }
    #container { display: table; width: 100%; }
    #row { display: table-row; }
    #left, #right, #middle { display: table-cell; }
    div { vertical-align: text-top; }
    .CSSTableGenerator { border: 1px solid #fff; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 0px; border-top-right-radius: 0px; margin: 0px; moz-border-radius-bottomleft: 0px; moz-border-radius-bottomright: 0px; moz-border-radius-topleft: 0px; moz-border-radius-topright: 0px; padding: 0px; webkit-border-bottom-left-radius: 0px; webkit-border-bottom-right-radius: 0px; webkit-border-top-left-radius: 0px; webkit-border-top-right-radius: 0px; width: 100%; }
    .CSSTableGenerator table { border-collapse: collapse; border-spacing: 0; height: 100%; margin: 0px; padding: 0px; width: 100%; }
    .CSSTableGenerator tr:last-child td:last-child { border-bottom-right-radius: 0px; moz-border-radius-bottomright: 0px; webkit-border-bottom-right-radius: 0px; }
    .CSSTableGenerator table tr:first-child td:first-child { border-top-left-radius: 0px; moz-border-radius-topleft: 0px; webkit-border-top-left-radius: 0px; }
    .CSSTableGenerator table tr:first-child td:last-child { border-top-right-radius: 0px; moz-border-radius-topright: 0px; webkit-border-top-right-radius: 0px; }
    .CSSTableGenerator tr:last-child td:first-child { border-bottom-left-radius: 0px; moz-border-radius-bottomleft: 0px; webkit-border-bottom-left-radius: 0px; }
    .CSSTableGenerator tr:hover td { }
    .CSSTableGenerator tr:nth-child(odd) { background-color: #ddd; }
    .CSSTableGenerator tr:nth-child(even) { background-color: #ddd; }
    .CSSTableGenerator td { border: 1px solid #fff; border-width: 0px 1px 1px 0px; color: #000000; font-family: Arial; font-size: 16px; font-weight: normal; padding: 13px; text-align: center; vertical-align: middle; }
    .CSSTableGenerator tr:last-child td { border-width: 0px 1px 0px 0px; }
    .CSSTableGenerator tr td:last-child { border-width: 0px 0px 1px 0px; }
    .CSSTableGenerator tr:last-child td:last-child { border-width: 0px 0px 0px 0px; }
    #menu { float: left; width: 100%; }
    td a { color: #000; font-weight: 900; text-decoration: none; }
    td a:hover { color: #000; text-decoration: none; }
    td:hover { background-color: #999 !important; cursor: pointer; }
    .tab-content.active { display: block; }
    .tab-content.hide { display: none; }
    .tab-content { padding: 0px; }
    .map { margin: 10px 0px 30px 0; }
    path:hover { fill-opacity: 0.5; stroke: #fff !important; }
    .leaflet-control-attribution { display: none !important; }
    .symbol { fill: #ddd; fill-opacity: 1; stroke: #fff; }
    .tooltip { background-color: rgba(255,255,255,1); border-radius: 10px; height: 50px; margin: 10px; moz-border-radius: 10px; padding-left: 10px; padding-top: 10px; webkit-border-radius: 10px; width: 150px; }
    label > input { display: none; }
    label > input + img { border: 2px solid transparent; cursor: pointer; }
    label > input:checked + img { border: 2px solid #ddd; }
    .map { float: left; height: 280px; width: 96% !important; }
    .tooltip { background-color: #161616; border: 1px solid #333; border-radius: 5px; color: #fff; display: none; font-size: 12px Arial; padding: 10px; position: absolute; }
    #middle_stuff .active { background-color: #fff !important; color: #000 !important; }
    #wrapper { font-family: helvetica, sans-serif; width: 100%; }
    .bio { border: 1px solid #999; float: left; margin: 5px 20px 10px 0; padding: 0px; }
    .story { line-height: 130%; padding: 10px 0px 0 0; }
    .frame { border: 1px solid #999; padding: 0px; }
    .readMore a { color: #0B478D !important; font-size: .9em; line-height: 2em; text-decoration: none; }
    .readMore a:hover { text-decoration: underline; }
    #lower { width: 220px; }
    svg { height: 290px !important; }
    #menu { float: left; width: 25%; }
    #middle_stuff { float: right; margin-left: 10px; width: 70%; }
    #legend { border-bottom: 0 #999 solid; display: none; float: right; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: none !important; margin: 10px 0; text-align: center; width: 100%; }
    .legend span { display: table-cell; font-family: Helvetica, Arial, sans-serif; font-weight: normal !important; line-height: 100%; margin-top: 0; }
    .legend .block { color: #808080; display: table-cell; height: 10px; width: 10px; }
    .leg { float: left; margin-right: 5px; }
    .stat { font-family: helvetica, sans-serif; font-weight: bold; line-height: 160%; }
    span a { color: steelblue !important; font-weight: bold !important; }
    .story { clear: both; }
    h2 { margin-top: 7px; }
    .selected { background-color: #61bd1a; color: white !important; font-weight: bold !important; }
</style>
</head>

<body>

<div id="wrapper">
<div id="menu">
<div class="CSSTableGenerator">
                <table class="nav-tabs">
                    <tr class="nav-tabs">
                        <td class="active selected" width="11.1%" id="tabSTPbt" href="#tabSTP" onclick="redrawChart(raceData);$( '#stats' ).show();shooting1.addTo(map);shooting2.addTo(map);shooting3.addTo(map);shooting4.addTo(map);shooting5.addTo(map);shooting6.addTo(map);shooting7.addTo(map);shooting8.addTo(map);shooting9.addTo(map);shooting10.addTo(map);shooting11.addTo(map);shooting12.addTo(map);shooting13.addTo(map);shooting14.addTo(map);map.removeLayer(shooting15);map.setView([44.9690,-93.0784], 12);">
                            Overview
      </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab15" onclick="shooting15.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting14);map.removeLayer(shooting13);map.removeLayer(shooting12); redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.953829, -93.025666], 14);">
                            Justin Todd Tolkinen
                        </td>
        </tr>
                    <tr class="nav-tabs">
                        <td width="11.1%" href="#tab0" onclick="shooting1.addTo(map); map.removeLayer(shooting13);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9579080,-93.0941170], 14);">
                            Marcus Golden
      </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab1" onclick="shooting2.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting13);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9373780,-93.0877790], 14);">
                            Guillermo Canas
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab2" onclick="shooting3.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting13);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9629700,-93.1186710], 14);">
                            Yee Vang
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab4" onclick="shooting5.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting13);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9548030,-93.1297640], 14);">
                            Alden Anderson
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab5" onclick="shooting6.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting13);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9392480,-93.1525120], 14);">
                            Melvin Fletcher
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab6" onclick="shooting7.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting13);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9630000,-93.0736050], 14);">
                            Chue Xiong
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab7" onclick="shooting8.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting13);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9744320,-93.1127660], 14);">
                            Victor Gaddy
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab8" onclick="shooting9.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting13);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9531540,-93.0268030], 14);">
                            John Carr
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab10" onclick="shooting10.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting13);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9811700,-93.0405560], 14);">
                            Jason Jones
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab12" onclick="shooting12.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting13);map.removeLayer(shooting14);map.removeLayer(shooting15);map.removeLayer(shooting1); redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9784240,-93.0322820], 14);">
                            Romell Hill
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab13" onclick="shooting13.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);$( '#stats' ).hide();map.setView([44.9892690,-93.0354370], 14);">
                            Robert Jeske
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab9" onclick="shooting4.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting13);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting11);map.removeLayer(shooting12);map.removeLayer(shooting14);map.removeLayer(shooting15);$( '#stats' ).hide();map.setView([44.9681770,-93.0753010], 14);">
                            Donald Gartner
                        </td>
        </tr>
        <tr class="nav-tabs">
                        <td width="11.1%" href="#tab14" onclick="shooting14.addTo(map); map.removeLayer(shooting1);map.removeLayer(shooting2);map.removeLayer(shooting3);map.removeLayer(shooting4);map.removeLayer(shooting5);map.removeLayer(shooting6);map.removeLayer(shooting7);map.removeLayer(shooting8);map.removeLayer(shooting9);map.removeLayer(shooting10);map.removeLayer(shooting13);map.removeLayer(shooting12);map.removeLayer(shooting15); redrawChart(dummyData2);$( '#stats' ).hide();map.setView([44.9535770,-93.1078510], 14);">
                            Johnnie Rodgers
                        </td>
        </tr>
                    
                </table>
            </div>
</div>



<div id="middle_stuff">

<div>
<h3 style="margin:7px 0 7px 0">Approximate Locations of Shootings</h3>
<div class="map frame" id="map"></div>
</div>

<section id="tab0" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/1_marcus_golden.jpg" class="bio" />
<br /><h2>Marcus Golden, 24</h2>
<span class="stat">Date of Incident:</span> 1/14/2015<br />
<span class="stat">Suspect's Weapon:</span> Loaded gun, vehicle<br />
<span class="stat">Officers Involved:</span> Dan Peck, Jeremy Doverspike<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/east/288772391.html" target="new_">Read more</a></span>
<div class="story">Police responded shortly after 2 a.m. to a report of a man who was known to carry a gun sending death threats via text message. The officers fired at Golden's vehicle after he accelerated toward Doverspike. Police said Golden had a loaded handgun within his reach.</div>

</section>

<section id="tab1" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Guillermo Canas, 36</h2>
<span class="stat">Date of Incident:</span> 8/28/2014<br />
<span class="stat">Suspect's Weapon:</span> Rocks<br />
<span class="stat">Officers Involved:</span> Mark Grundhauser, Joseph Sandquist<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/273013851.html" target="new_">Read more</a></span>
<div class="story">Police said two officers were confronted by Canas after authorities had received calls about him damaging vehicles. Canas threw rocks at the police, they said, and ignored their orders to stop before one of the officers shot him multiple times.</div>

</section>

<section id="tab2" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Yee Vang, 20</h2>
<span class="stat">Date of Incident:</span> 8/3/2014<br />
<span class="stat">Suspect's Weapon:</span> Gun fired at officers<br />
<span class="stat">Officers Involved:</span> Laura Finnegan, Dan Gleason, Xiong Yang, Shawn Filiowich<br />
<span class="stat">Officer Injuries:</span> At least two officers suffered minor injuries, 14-year-old bystander grazed<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/269892011.html" target="new_">Read more</a></span>
<div class="story">Vang allegedly forced his way into a sport-utility vehicle after crashing his own vehicle into a fence outside Oakland Cemetery. With police in pursuit, Vang jumped out and started firing at officers. Police returned fire and hit Vang, who died on the way to Regions Hospital.</div>

</section>

<section id="tab4" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Alden Anderson, 32</h2>
<span class="stat">Date of Incident:</span> 2/12/2013<br />
<span class="stat">Suspect's Weapon:</span> Knife<br />
<span class="stat">Officers Involved:</span> Jeffrey Thissen, two deputy U.S. marshals<br />
<span class="stat">Officer Injuries:</span> Police K-9 fatally stabbed<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/190914391.html" target="new_">Read more</a></span>
<div class="story">Police entered a house where they found Anderson, who was wanted on a first-degree criminal sexual conduct warrant, armed with a knife in the basement. Anderson fatally stabbed Kody, a 9-year-old police dog, before the officers shot and killed Anderson, police said.</div>

</section>

<section id="tab5" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Melvin Fletcher Jr., 20</h2>
<span class="stat">Date of Incident:</span> 12/17/2012<br />
<span class="stat">Suspect's Weapon:</span> Gun<br />
<span class="stat">Officers Involved:</span> Theodore Mackintosh, Jeffrey Thissen<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/183985041.html" target="new_">Read more</a></span>
<div class="story">Armed with a gun, Fletcher allegedly robbed Kowalski’s Market and fled through a rear entrance. Officers shot Fletcher as they chased him down a wooded area to Ayd Mill Road.</div>

</section>

<section id="tab6" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Chue Xiong, 22</h2>
<span class="stat">Date of Incident:</span> 10/23/2012<br />
<span class="stat">Suspect's Weapon:</span> Shotgun fired at officers<br />
<span class="stat">Officers Involved:</span> Daniel King, Brian Wanschura<br />
<span class="stat">Officer Injuries:</span> Officer King shot twice<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/175833821.html" target="new_">Read more</a></span>
<div class="story">Xiong's family reported a shotgun and compound bow and arrows stolen from their home shortly before police spotted Xiong in a parking lot. Xiong raised the shotgun as officers arrived in a marked squad car and gunfire was exchanged, police said. Xiong was killed and officer King was wounded.</div>

</section>

<section id="tab7" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/7_victor_gaddy.jpg" class="bio" />
<br /><h2>Victor Gaddy, 41</h2>
<span class="stat">Date of Incident:</span> 10/23/2012<br />
<span class="stat">Suspect's Weapon:</span> Car<br />
<span class="stat">Officers Involved:</span> Edward O'Donnell, Mark Farrington, Joshua Raichert, Christopher McGuire<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/175546911.html" target="new_">Read more</a></span>
<div class="story">Officers stopped Gaddy at the request of Minneapolis police, who said he was a suspect in a narcotics investigation. When Gaddy used his car to ram unmarked squad cars, officers shot and killed him, officials said in a statement.</div>

</section>

<section id="tab8" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/8_john_carr.jpg" class="bio" />
<br /><h2>John Carr, 36</h2>
<span class="stat">Date of Incident:</span> 7/19/2010<br />
<span class="stat">Suspect's Weapon:</span> Knives<br />
<span class="stat">Officers Involved:</span> Colby Bragg, Arnulfo Curiel, Joshua Raichert, Justin Rangel<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/98798124.html" target="new_">Read more</a></span>
<div class="story">Police responded to a report that a man who may have been under the influence of meth was suicidal and armed with knives. When officers knocked on the door of the Carr's room, he yelled that he would kill them. Carr entered the hallway wielding knives and was killed when all four officers opened fire, police said.</div>

</section>

<section id="tab10" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/9_jason_jones.jpg" class="bio" />
<br /><h2>Jason Jones, 21</h2>
<span class="stat">Date of Incident:</span> 5/1/2010<br />
<span class="stat">Suspect's Weapon:</span> Large bolt<br />
<span class="stat">Officers Involved:</span> David Longbehn<br />
<span class="stat">Officer Injuries:</span> Sgt. Joseph Bergeron killed in earlier incident, Longbehn's nose and facial bones broken<br />
<span class="readMore"><a href="http://www.startribune.com/local/east/92733874.html" target="new_">Read more</a></span>
<div class="story">Jones allegedly stole a car at gunpoint and later shot and killed Sgt. Bergeron. He later was stopped by Longbehn while carrying a tool box. Jones hit Longbehn with a bolt, breaking his nose and several facial bones. A fight ensued, and Longbehn shot Jones several times, killing him.</div>

</section>


<section id="tab12" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/10_romell_hill.jpg" class="bio" />
<br /><h2>Romell Hill, 19</h2>
<span class="stat">Date of Incident:</span> 12/7/2009<br />
<span class="stat">Suspect's Weapon:</span> Gun fired at officers<br />
<span class="stat">Officers Involved:</span> Adam Bailey, Thomas Weinzettel, Stephen Bobrowski<br />
<span class="stat">Officer Injuries:</span> Officer shot in leg<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/78756312.html?elr=KArksLckD8EQDUoaEyqyP4O:DW3ckUiD3aPc:_Yyc:aUUZ" target="new_">Read more</a></span>
<div class="story">Police responded to a report that Hill and another man who had been involved in an earlier fight had returned to an apartment complex. Officers saw the men flee through an apartment window, and police said a struggle ensued and Hill discharged his weapon, striking an officer in the leg. All three officers returned fire, killing him.</div>

</section>

<section id="tab13" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/11_robert_jeske.jpg" class="bio" />
<br /><h2>Robert Jeske, 34</h2>
<span class="stat">Date of Incident:</span> 4/6/2009<br />
<span class="stat">Suspect's Weapon:</span> Gun<br />
<span class="stat">Officers Involved:</span> Adam Bailey, Brian Casey, Douglas Wilson<br />
<span class="stat">Officer Injuries:</span> Police shot K-9 by accident<br />
<span class="readMore"><a href="http://www.startribune.com/local/stpaul/42622852.html" target="new_">Read more</a></span>
<div class="story">Officers responded to reports that a man with a handgun was drinking in an alley and shots had been fired. They saw Jeske had a gun and ordered him to drop it. Jeske refused to drop the gun, and Boomer, a police K-9, was turned loose. When Jeske aimed at the officers, they fired, killing Jeske and wounding Boomer in the muzzle.</div>

</section>

<section id="tab9" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/12_donald_gartner.jpg" class="bio" />
<br /><h2>Donald Gartner, 34</h2>
<span class="stat">Date of Incident:</span> 9/18/2007<br />
<span class="stat">Suspect's Weapon:</span> Knife<br />
<span class="stat">Officers Involved:</span> Jessica Phillips, Cory Kochendorfer<br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/11557561.html" target="new_">Read more</a></span>
<div class="story">Police were called to the home Gartner shared with his girlfriend following a report that men had been fighting with pipes. The officers encountered Gartner and his girlfriend, who had scratches and a bruise on the side of her head. Gartner lunged at the officers with a knife, police said, and they shot and killed him.</div>

</section>

<section id="tab14" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Johnnie Rodgers, 54</h2>
<span class="stat">Date of Incident:</span> 1/23/2004<br />
<span class="stat">Suspect's Weapon:</span> Knife<br />
<span class="stat">Officers Involved: Charles Sims </span><br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/11557561.html" target="new_">Read more</a></span>
<div class="story">An officer spotted Rodgers, a suspect in a grocery-store robbery in Roseville, driving into a Sears parking lot just north of downtown St. Paul. Rodgers exited his vehicle carrying a knife, according to police. The officer repeatedly told him to stop, but Rodgers advanced on the officer, who shot him several times in the chest. Rodgers was pronounced dead at the hospital.
</div>

</section>

<section id="tab15" class="tab-content hide">
<img src="http://stmedia.startribune.com/images/cop_shoot_missing.jpg" class="bio" />
<br /><h2>Justin Todd Tolkinen, 28</h2>
<span class="stat">Date of Incident:</span> 3/16/2015<br />
<span class="stat">Suspect's Weapon:</span> Rifle<br />
<span class="stat">Officers Involved: Jermaine Davis, Patrick Murphy, Mark Farrington, and Brian Hall  </span><br />
<span class="stat">Officer Injuries:</span> None<br />
<span class="readMore"><a href="http://www.startribune.com/local/east/296499971.html" target="new_">Read more</a></span>
<div class="story">Police were called on a report that a man was armed with a rifle. Negotiators arrived at the scene and tried to talk to Tolkinen, authorities said. The officers fired beanbag rounds at Tolkinen before they fatally wounded him.
</div>

</section>

<section id="tabSTP" class="tab-content">

<div style="width:100%; float:left;">
<div id="stats">
<h3 style="margin:0">Race of Killed Suspects</h3>
<div id="chart" class="chart">
<svg></svg></div>
<div id='legend'>  <nav class='legend clearfix'>
<span class="block leg" style='background:#238b45;'></span> <span class="leg">Black</span>
<span class="block leg"  style='background:#66c2a4;'></span> <span class="leg">Hispanic</span>
<span class="block leg"  style='background:#b2e2e2;'></span> <span class="leg">Asian</span>
<span class="block leg"  style='background:#edf8fb;'></span> <span class="leg">White</span>
</div>
</div>
</div>
</section>

</div>
<p style="clear:both;"></p>

</div>
</body>

<script src='https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js'></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<!-- <script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script> -->
<!-- <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.4/Leaflet.fullscreen.min.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>
 -->
 // <script src="http://datamaps.github.com/scripts/datamaps-all.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/lib/d3.v3.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/nv.d3.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/src/utils.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/src/tooltip.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/src/models/legend.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/src/models/axis.js"></script>
<script src="http://apps.startribune.com/news/20150201-st-paul-police-shootings/nvd3-master/examples/stream_layers.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=stp_shootings
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1T-Du1geFfuspEYGF_U0531mLTJ0ehbA5YbaFCxgmkRA&sheet=mpls_shootings

<?php

$jsonDataSTP = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=KzNaWV0JB0g9XFM2pi6yCTYyC1rW4HNGNmmnfGQwlcB6zFQQCYcIbwBBx97hCbLOIZeoZDF3TrucTuKnWGNpZ2zC8AUDZHPQOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TTWRPEfSfzbJF18UG-xWdHYR7bDcausFkqDGusCOyHu-vlnNWYFTCZLrx7oAt3qWxzd_dgT7OAiauvEge2qMbLbECsxWSthHz&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataMPLS = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=JfSEO826as0zxqGV6nmfeWkRyXNrDg5GIynKx86hmP58q58W0InChT_5zgBuTxpsk0aCwRRTAlDQHR4Cgs6U9WsEdM6pTrFhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TTWRPEfSfzbJF18UG-xWdHYR7bDcausFkqDGusCOyHu-vlnNWYFTCZLrx7oAt3qWx35iDyrfKhrogJJ3xr17aTSpHXVormcll&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataSTPLoad = <?php echo $jsonDataSTP; ?>
var dataMPLSLoad = <?php echo $jsonDataMPLS; ?>

// var dataSTP = dataSTPLoad.stp_shootings;
// var dataMPLS = dataSTPLoad.mpls_shootings;
</script>

<script>

//MENU STUFF
function setVisibility(id, visibility) {
document.getElementById(id).style.display = visibility;
}
  $(document).ready(function() {
    $('.nav-tabs > td').click(function(event){
    event.preventDefault();//stop browser to take action for clicked anchor

    $('.nav-tabs > td').removeClass('selected');
    $(this).addClass('selected');

    //get displaying tab content jQuery selector
    var active_tab_selector = $('.nav-tabs > td').attr('href');          
 
    //find actived navigation and remove 'active' css
    var actived_nav = $('.nav-tabs > td.active');
    actived_nav.removeClass('active');
 
    //add 'active' css into clicked navigation
    $(this).parents('td').addClass('active');
 
    //hide displaying tab content
    $(".tab-content").removeClass('active');
    $(".tab-content").addClass('hide');
 
    //show target tab content
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
       });
    });
</script>

<script type="text/javascript">
//TOOLTIP STUFF
$(document).ready(function() {

$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></span>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});
</script>

<script>
L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

var map = L.mapbox.map('map', 'mapbox.light')
    .setView([44.9690,-93.0784], 12);

var shooting1 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0941170,
          44.9579080
        ]
    },
    properties: {
        description: '261 East University Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting2 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0877790,
          44.9373780
        ]
    },
    properties: {
        description: 'Plato Boulevard and Wabasha Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting3 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1186710,
          44.9629700
        ]
    },
    properties: {
        description: 'Minnehaha Avenue and Arundel Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting4 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0753010,
          44.9681770
        ]
    },
    properties: {
        description: '594 York Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting5 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1297640,
          44.9548030
        ]
    },
    properties: {
        description: '700 Aurora Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting6 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1525120,
          44.9392480
        ]
    },
    properties: {
        description: 'Grand Ave and Ayd Mill Road',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting7 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0736050,
          44.9630000
        ]
    },
    properties: {
        description: 'Payne Ave and Minnehaha Ave',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting8 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1127660,
          44.9744320
        ]
    },
    properties: {
        description: '300 Jessamine Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting9 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0268030,
          44.9531540
        ]
    },
    properties: {
        description: '1739 Old Hudson Road',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting10 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0405560,
          44.9811700
        ]
    },
    properties: {
        description: 'Ivy Avenue and Birmingham Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting11 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0354370,
          44.9892690
        ]
    },
    properties: {
        description: '1500 East Iowa Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting12 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0322820,
          44.9784240
        ]
    },
    properties: {
        description: '1619 East Maryland Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting13 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.0354370,
          44.9892690
        ]
    },
    properties: {
        description: '1500 East Iowa Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);

var shooting14 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.1078510,
          44.9535770
        ]
    },
    properties: {
        description: '425 Rice Street',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);
var shooting15 = L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -93.025666,
          44.953829
        ]
    },
    properties: {
        description: '411 White Bear Avenue',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'small',
        'marker-color': '#61bd1a'
    }
}).addTo(map);


</script>

<script>



var chart2;
  nv.addGraph(function() {
    chart2 = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 5, bottom: 50, left: 5})
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .transitionDuration(350)
  .color(['#BCBCBC', '#808080', '#515151', '#2B2B2B', '#121212'])
      .tooltip(function(key, x, y, e, graph) {
    return '<p>' + key + ': ' +  d3.round(y, 0);  + '</p>';
        })
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

   chart2.yAxis
        .tickFormat(d3.format(','));

    d3.select('#chart svg')
        .datum(raceData)
        .call(chart2);

    nv.utils.windowResize(chart2.update);

    return chart2;
  });

var raceData = [
    {
    "key": "White",
    "values": [
      { 
        "label" : "" ,
        "value" : 4
      }
    ]
  },
  {
    "key": "Black",
    "values": [
      { 
        "label" : "" ,
        "value" : 7
      }
    ]
  },
  {
    "key": "Hispanic",
    "values": [
      { 
        "label" : "" ,
        "value" : 1
      }
    ]
  },
  {
    "key": "Asian",
    "values": [
      { 
        "label" : "" ,
        "value" : 2
      }
    ]
  }

]

var dummyData2 = [
  {
    "key": "Black",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "Hispanic",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "Asian",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  },
  {
    "key": "White",
    "values": [
      { 
        "label" : "" ,
        "value" : 0
      }
    ]
  }
]

var dummyData =  [
      { 
        "label": "One",
        "value" : 0
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 0
      } , 
      { 
        "label": "Four",
        "value" : 0
      } , 
      { 
        "label": "Five",
        "value" : 0
      } , 
      { 
        "label": "Six",
        "value" : 0
      } , 
      { 
        "label": "Seven",
        "value" : 0
      } , 
      { 
        "label": "Eight",
        "value" : 0
      }
    ]

function redrawChart(data2){

    d3.select('#chart svg').datum(data2).transition().duration(500).call(chart2);
    nv.utils.windowResize(chart2.update);
}

//$( '#map' ).hide();
</script>
</html>