<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>The Great Divide</title>
  <meta name="description" content="The Great Divide">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link href="js/c3-master/c3.css" rel="stylesheet" type="text/css">
  <link href="../_common_resources/charts/nvd3-master/build/nv.d3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css?r" />
  <link href="../_common_resources/interfaces/bxslider-master/jquery.bxslider.css" rel="stylesheet" />
  
  <style>
      
@font-face {
  font-family: "Benton Sans";
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-2.eot");
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Benton-Sans-Regular/c80c8df9-343a-4ee8-a64b-6213022724fd-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }

@font-face {
  font-family: "Benton Sans";
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-2.eot");
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Benton-Sans-Bold/34ba72ff-8e42-428e-b0a6-d43e43d09b7f-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold; }
      
@font-face {
  font-family: "Benton Sans Condensed Medium";
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-2.eot");
  src: url("http://apps.startribune.com/fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Benton-Sans-Condensed-Medium/06f4dbf6-2449-4b99-9621-e8abb9e595a2-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
      
@font-face {
  font-family: "Popular Light";
  src: url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-2.eot");
  src: url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Popular-Light/64136bfc-6015-473a-b534-6f235774c8ab-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
      
@font-face {
  font-family: "Popular";
  src: url("http://apps.startribune.com/fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-2.eot");
  src: url("http://apps.startribune.com/fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Popular-Regular/a6cd39cd-f989-4756-ba40-dfd8fdcee7ca-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
      
@font-face {
  font-family: "Popular Medium";
  src: url("http://apps.startribune.com/fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-2.eot");
  src: url("http://apps.startribune.com/fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Popular-Medium/ce490641-b5d9-4eff-a05c-38dbe1948f17-1.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
      
@font-face {
  font-family: "Popular";
  src: url("http://apps.startribune.com/fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-2.eot");
  src: url("http://apps.startribune.com/fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-2.eot?") format("embedded-opentype"), url("http://apps.startribune.com/fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-3.woff") format("woff"), url("http://apps.startribune.com/fonts/Popular-Bold/cec9083e-fac8-488a-8891-4f7eacf77220-1.ttf") format("truetype");
  font-style: normal;
  font-weight: bold; }   
      
      
    body { font-family:"Benton Sans",Helvetica,Arial,sans-serif;line-height:130%;overflow-x:hidden; }
    #wrapper { width:100%; }
    .bar.positive { fill: steelblue; }
    .bar.negative { fill: brown; }
    .axis text { font: 10px sans-serif; }
    .axis path, .axis line { fill: none; stroke: #000; shape-rendering: crispEdges; }
      
    .sectionHead {width:90%; margin-left: auto; margin-right: auto; min-height:90px;}

    .sectionIcon { float:left; text-align:left; display:block; height: 80px; width: 105px; background-color: none}
    .sectionIcon img { width:80px; height:80px; }
    .sectionTitle { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:900; font-size:1.5em; text-align:left; margin-bottom: 8px;}
 
    #menu { background-color:#fff; text-align:center; width:100%; }
    .myButton2 { padding:8px; width:12%; font-size:1em; font-weight: normal; background-color:#918677; font-family:"Benton Sans",Helvetica,Arial,sans-serif !important; color: #fff; border:none;}
    .myButton2:hover { background-color:#ccbe9a !important;; color: #fff; !important; }

    .legend {margin-left:11%;}
    .countyName { font-weight:bold; }

    .above { background-color:#121212; }
    .mid { background-color:#888888; }
    .below { background-color:#c7c7c7; }

     .breaker { clear:both; margin:7px; padding:10px; width:100%;}
    .section { margin-top:10px; padding-left:2%;padding-right:2%;}
    .sideBox { height:auto; float:right; width:40%; margin-right:8%}
    .map { width:40%; float:left; margin-left:8%;}
    .map path:hover { fill:#333 !important; cursor:pointer; }
    .chatter { text-align:left;margin-bottom:0px;}
    .chart { height:330px; }
    .countyName { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:900; font-size:1.3em; }
    .legend label, .legend span { display:block; float:left; height:15px; width:60px; text-align:center; font-size:12px; color:#808080; font-family:"Benton Sans",Helvetica,Arial,sans-serif; }
    .nvd3 .nv-x .nv-axis .tick line, .nvd3 .nv-y .nv-axis .tick line { fill: none; display: none !important; stroke: #fff; shape-rendering: crispEdges; opacity: 0 !important; }
    .nvtooltip { border-radius:0 !important; background-color:#fff; border-color:#000; font-size:1em; }
    .zoom { display:block; text-align:center !important; clear:both !important; width:100% ;}
    ul, li { list-style:none; }
    .metric { font-family:"Benton Sans",Helvetica,Arial,sans-serif; }
    .source { font-size:.65em; color:#999; line-height:130%; font-family:"Benton Sans",Helvetica,Arial,sans-serif; clear:both; padding-top:10px; text-align:center; width:100%;}
    .source a { color:#999; text-decoration:none; }
    .source a:hover { color:#333; }
    .selected { background-color:#bc2d26 !important; color: #fff !important;}
    .selected:hover {color: #fff !important}  
    .chatter { min-width:180px !important; }
    .infobox {margin-left: 25px;} 

    .context { text-align:center; font-size:.8em; }
      
      
       /*DOWNLOAD BUTTON STYLES*/
  .downloadButton9 { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; border:none; font-size:.9em; text-align:center; margin-top:15px; margin-left:1%; padding-top:0px; width: 99%; background-color:#fff; color:#333; background-image: url('../_common_resources/img/downloadDoc.svg'); background-size: 18px 18px; background-repeat: no-repeat; background-position: 42% 76%; }
  .downloadButton9:hover {background-color:#fff !important; opacity:.5; cursor:pointer; }
  .downloadButton9:active {background-color:#fff !important;} 
 

   @media (max-width: 570px) {
    .sideBox, .map { width:100%; clear:both; }
    .zoom, .legendContainer, .source { width:100%; text-align:center; clear:both; margin:7px; height:auto; margin-right:auto; margin-left:auto; }
    .legend nav { margin-right:auto; margin-left:auto; height:auto; width:100%; text-align:center; }
    .countyName, .metric { text-align:center; }
    .chart { height:230px; }
    .myButton2 { width:48%; margin-bottom:5px;}
    .downloadButton9 { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; border:none; font-size:.9em; text-align:center; margin-top:15px; margin-left:1%; padding-top:0px; width: 99%; background-color:#fff; color:#333; background-image: none !important; }  
        }



    .nv-bar rect { stroke:#fff !important; stroke-width:4 !important; stroke-opacity:1 !important; }
      
      
    @media (min-device-width: 320px) and (max-device-width:640px) {
    .myButton2 { width:48%; }
    .map { width:90%; float:left; margin:0 auto 20px auto;} 
    .downloadButton9 { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; border:none; font-size:.9em; text-align:center; margin-top:15px; margin-left:0%; margin-bottom:20px; padding-bottom:0; width: 99%; background-color:#fff; color:#333; background-image: url('../_common_resources/img/downloadDoc.svg'); background-size: 18px 18px; background-repeat: no-repeat; background-position: 28% 0%; }    
        
    }
      
      
  </style> 
</head>

<body>
  <div id="wrapper">

<div id="menu">
  <button data="population" class="myButton2" id="populationB">Population</button>
  <button data="education" class="myButton2" id="educationB">Education</button>
  <button data="religion" class="myButton2" id="religionB">Religion</button>
  <button data="income" class="myButton2" id="incomeB">Income</button>
  <button data="costs" class="myButton2" id="livingB">Costs</button>
  <button data="age" class="myButton2" id="ageB">Age</button>
  <button data="race" class="myButton2" id="raceB">Race</button>
  <button data="social" class="myButton2" id="socialB">Social</button>
<!--   <button data="politics" class="myButton2" id="politicsB">Politics</button> -->
</div>

  <div class="chatter" id="topChatter"></div>

<div class="breaker"></div>

<!-- SECTION:POPULATION -->

<div class="section" id="population">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/population.png" /></div>
  <div class="sectionTitle populationSwatch">Population</div>
  <div class="chatter">The Twin Cities metro area experienced far greater population growth from 2010 to 2014 compared to outstate counties, many of which saw lesser or negative growth over the time period. Some rural counties have lost about half their population since the 1950s.</div>
</div>

<div class='breaker'></div>

<div class="map" id="popMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="popInfo"></div>
<div class="chart" id="popChart"><svg></svg></div>
<div class="context">Population since 1950</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>

    <span style='background:#fff;'>-5%</span>
    <span class='below'></span>
    <span class='mid'></span>
    <span class='above'></span>
    <span style='background:#fff;'>+7%</span>
  </nav>
</span>
</div>
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>    
    
    <div class='source'>Source: U.S. Census Bureau, American Community Survey, Minnesota State Demographic Center</div> 
</div>

<!-- SECTION:EDUCATION -->

<div class="section" id="education">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/education.png" /></div>
  <div class="sectionTitle educationSwatch">Education</div>
  <div class="chatter">In the metro area, the percentage of people with a associate's degree or higher was often far higher across 2009-2013 compared to many outstate counties.</div>
</div>


<div class='breaker'></div>

<div class="map" id="edMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="edInfo"></div>
<div class="chart" id="edChart"><svg></svg></div>
<div class="context">Educational attainment breakdown of 25+ population</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Below 40%</span>
    <span class='below'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above 40%</span>
  </nav>
</span>
</div>    
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
<div class='source'>Source: U.S. Census Bureau, American Community Survey, <a href="http://mn.gov/admin/images/ACS-2008-12-S1501-educationalattain-us-mn-allcounties.csv" target="new_">Minnesota State Demographic Center</a></div>
</div>


<!-- SECTION:RELIGION -->

<div class="section" id="religion">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/religion.png" /></div>
  <div class="sectionTitle religionSwatch">Religion</div>
  <div class="chatter">Outstate counties tend to have higher percentages of religious adherence compared to the metro area, particularly in southwestern Minnesota.</div>
</div>

<div class='breaker'></div>

<div class="map" id="religionMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="religionInfo"></div>
<div class="chart" id="religionChart"><svg></svg></div>
<div class="context">Religious adherents by denomination</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Below 60%</span>
    <span class='below'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above 60%</span>
  </nav>
</span>
</div>    
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
<div class='source'>Source: U.S. Census Bureau, <a href="http://www.rcms2010.org/" target="new_">U.S. Religion Census</a>, <a href="http://www.thearda.com/mapsreports/maps/2010/MN_TOTADH.asp" target="new_">Association of Religion Data Archives</a></div>
</div>

<!-- SECTION:INCOME -->

<div class="section" id="income">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/income.png" /></div>
  <div class="sectionTitle incomeSwatch">Income</div>
  <div class="chatter">Median income in the metro area tends to be higher than in outstate counties.</div>
</div>

<div class='breaker'></div>

<div class="map" id="incomeMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="incomeInfo"></div>
<div class="chart" id="incomeChart"><svg></svg></div>
<div class="context">1999 income versus 2010 income</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Below $55k</span>
    <span class='below'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above $55k</span>
  </nav>
</span>
</div>
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
<div class='source'>Source: U.S. Census Bureau, American Community Survey</div>
</div>


<!-- SECTION:COSTS -->

<div class="section" id="costs">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/cost.png" /></div>
  <div class="sectionTitle costSwatch">Living Costs</div>
  <div class="chatter">The lower cost of basic necessities, particularly housing, in Greater Minnesota tends to equalize standards of living with the metro area, where median household incomes are higher.</div>
</div>

<div class='breaker'></div>

<div class="map" id="costsMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="costsInfo"></div>
<div class="chart" id="costsChart"><svg></svg></div>
<div class="context">Average monthly living cost breakdown</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Below $55k</span>
    <span class='below'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above $55k</span>
  </nav>
</span>
</div> 
      
<div class='breaker'></div>    
<div class="zoom">Reset View</div>   

<div class='source'>Source: Minnesota Department of Employment and Economic Development</div>
</div>

<!-- SECTION:AGE -->

<div class="section" id="age">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/age.png" /></div>
  <div class="sectionTitle ageSwatch">Age</div>
  <div class="chatter">A larger elderly population is in the whole state's future as the baby boomers become senior citizens. But Greater Minnesota is graying first and faster than the metro area.</div>
</div>

<div class='breaker'></div>

<div class="map" id="ageMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="ageInfo"></div>
<div class="chart" id="ageChart"><svg></svg></div>
<div class="context">Age groups by gender and population</div>
</div>

<div class="legendContainer">
<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff; width:58px;'>Below 40yo</span>
    <span class='below'></span>
    <span class='mid'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above 45yo</span>
  </nav>
</span>
</div>
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
<div class='source'>Source: U.S. Census Bureau, American Community Survey, Minnesota State Demographic Center</div>

</div>


<!-- SECTION:RACE -->

<div class="section" id="race">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/race.png" /></div>
  <div class="sectionTitle raceSwatch">Race</div>
  <div class="chatter">Metro area counties are vastly more diverse than populations outstate, with more people of color than most other areas.</div>
</div>

<div class='breaker'></div>

<div class="map" id="raceMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="raceInfo"></div>
<div class="chart" id="raceChart"><svg></svg></div>
<div class="context">People of color compared to white population</div>
</div>


<div class="legendContainer">

<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Below 10%</span>
    <span class='below'></span>
    <span class='mid'></span>
    <span class='above'></span>
    <span style='background:#fff;'>Above 15%</span>
  </nav>
</span>

</div>
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
    
<div class='source'>Source: U.S. Census Bureau, American Community Survey, Minnesota State Demographic Center</div>

</div>


<!-- SECTION:SOCIAL -->

<div class="section" id="social">
<div class="sectionHead">
  <div class="sectionIcon"><img src="img/social.png" /></div>
  <div class="sectionTitle socialSwatch">Social</div>
  <div class="chatter">The 2012 proposed constitutional amendment banning same-sex marriage in Minnesota was defeated even though it won majority approval in most Greater Minnesota counties. "No" votes carried five of seven metro counties.</div>
</div>

<div class='breaker'></div>

<div class="map" id="socialMap"><svg width="320" height="350" viewBox="0 0 500 550" preserveAspectRatio="xMidYMid"></svg></div>

<div class="sideBox">
<div class="infobox" id="socialInfo"></div>
<div class="chart" id="socialChart"><svg></svg></div>
<div class="context">Marriage amendment ballot vote totals</div>
</div>


<div class="legendContainer">

<span class='legend'>
  <nav class='legend clearfix'>
    <span style='background:#fff;'>Yes</span>
    <span class='below'></span>
    <span class='above'></span>
    <span style='background:#fff;'>No</span>
  </nav>
</span>
</div>
    
<div class='breaker'></div>    
<div class="zoom">Reset View</div>     
    
    

<div class='source'>Source: Minnesota Secretary of State</div>

</div>


<!--<div class='breaker'></div>-->

<a href="https://docs.google.com/spreadsheets/d/1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY/pub?output=xlsx" target="new_"><button class="downloadButton9">&nbsp;Download data</button></a>

  </div>



</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="../_common_resources/charts/c3-master/c3.min.js"></script>
<script src="../_common_resources/interfaces/stickies/jquery.sticky.js"></script>
<script src="../_common_resources/charts/nvd3-master/build/nv.d3.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/utils.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/tooltip.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/models/legend.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/models/axis.js"></script>
<script src="../_common_resources/charts/nvd3-master/test/stream_layers.js"></script>
<script src="../_common_resources/interfaces/bxslider-master/jquery.bxslider.min.js"></script>

<script>
// $("#headerDiv").sticky({topSpacing:1});

</script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=religion
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=medianIncome
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=population
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=age
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=medianAge
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=livingCosts
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=education
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=race
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=politicalLeaning2014
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1xavZEiWOLzafmKIhtkl2UZTuTpGCUtxZTgsP1Hy-KZY&sheet=votes2012

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonDataBreakdown = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=IyAA37ei8WZg3bN97a_XFkCwkhmmpdDw3n6AqiGEywtmb9uTQn_0_A6PGMfTqNqk1lPDdw76PUx-qcNrYwrIADV2MAMw5PxDOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TAII-ngvhBapgn5m2jpYmuJX8hhM_lhZLQqupDWBH9vvDqMlPpvlQMPv6ttTnn03tW0Ar8EAym28BrZ6Y4W6Ze4TUFkrULxsJ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");


$jsonDataReligion = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=_wsf_5Rq5G4OYAW05C8aNAwbbYUn8NTgMxCRpc2kAIi2_OR1dtWLF_iknsrf3ELiQ5WmZmXDwwC2BUF0JWMzmkrXOxcz7KS_OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACxcG-w52aeuTDeO79TK_9yw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataIncome = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=Z86oIe8B9gLHmvuK45ShDNcLqk1f6uzJjPcuUqiImxN_vnxRxM--6LhUIoWbQ6OzBoEqC7EUHEbaBzjFRtcj--HXo40wUTJZOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHAC35iDyrfKhroIrv8lzh-yXWh44bWgfVWB&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataPop = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=PBXKjJH764EXxYX-ujnBXa-3OBGntorHEx_79jvPDHH60KAS82U6P6DsaGRmtrlz6SfQhhBABSUcanQRzfwLfTLwXJLOICfUOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACvl7IGsXAM8milcZGaIdcVxu0XK1b9qtD&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataAge = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=II7LbFHTaQ8ztWj8iZgwJO2LfvsPtRPH0iHYIMMgqpqxc3XQ8CD-VFXA-UdiKPkNyouZrqm7HnBHZmihACD9K4F-dPvX1sXVOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACCybrZkpw6lv3awp-wX2GXg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataMAge = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=CEN32UFqiil8RauoscPvxsf6BAAS3eEfwxD-pgTScBQ1UuieJ-28y_ntD-yhNdx584pcdV6KS91YnIvFHE7eiC6go6LpUBnpOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHAC35iDyrfKhrqGmU-ePo1aWQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataLiving = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=T7QBCPPev8B6GK-U1Nzc_rHBG8SnRO-V-uvVOham4L8JChjhtzl5_4ucSZQFmoJPtcMYS-QBEtYKmB9iB_WkykECunD_LVLpOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACYdO8VyFAHGn9ftoYmAuQqLkn56t7w9_u&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataEducation = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=M7qrJDrU_ulibIKy5ww4R9ij4WOXpTSFL6DQvtTNCGCfNmXKYAW4xGr5CrHtl15CDzBcClpgSxumgWshXQPGMiLBfLW7gLP5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACGFMHuQvceYxOf80yLrpamA&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataRace = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=SPPOrRQMH7HbU12OU6MRXXwbfxwV6FtUDv6JzPW_O-yFdSxC75ff7UI-BTZ9iMqTidY2r9gkpS32yhoLUBPmI7_Gqn-ebk86OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACxcG-w52aeuQk88Dkxrp83Q&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataAmend = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=xB3E3sJmVZluOyxVMqOYq4tsCaOIdirNO1ELDS24wjhOP-q4I1WaY91UnvGWXF-4zXqApZVJ7nZdhp0BaVOJQFG2nL3Gfx6WOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDjmD7O6J2BSG2CAG_cxnG0KqCpdFoMCcqnCGG0shiIGr51q8rVM2xkn3HcCJnHACEc_ICSNr2JZUyCYaz-ylXw&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var dataLoadBreakdown = <?php echo $jsonDataBreakdown; ?>;


//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoadReligion = <?php echo $jsonDataReligion; ?>;
var dataLoadIncome = <?php echo $jsonDataIncome; ?>;
var dataLoadPop = <?php echo $jsonDataPop; ?>;
var dataLoadAge = <?php echo $jsonDataAge; ?>;
var dataLoadMAge = <?php echo $jsonDataMAge; ?>;
var dataLoadLiving = <?php echo $jsonDataLiving; ?>;
var dataLoadEducation = <?php echo $jsonDataEducation; ?>;
var dataLoadRace = <?php echo $jsonDataRace; ?>;
var dataLoadAmend = <?php echo $jsonDataAmend; ?>;

dataBreakdown = dataLoadBreakdown.charter_breakdown;


dataReligion = dataLoadReligion.religion;
dataIncome = dataLoadIncome.medianIncome;
dataPopulation = dataLoadPop.population;
dataAge = dataLoadAge.age;
dataMAge = dataLoadMAge.medianAge;
dataCosts = dataLoadLiving.livingCosts;
dataEducation = dataLoadEducation.education;
dataRace = dataLoadRace.race;
data2012 = dataLoadAmend.votes2012;
</script>

<script>


//BUTTONS
$(".myButton2").on('click',function(){
 $(".myButton2").removeClass("selected");
 $(this).addClass("selected");
 $(".section").hide();
 $("#" + $(this).attr("data")).show();
});


//OTHER PAGE EFFECTS
// $("#menu").sticky({topSpacing:1});
</script>

<script>
//CHARTS
chartBuild("#popChart","population",dataPopulation,"Minnesota",0);
chartBuild("#edChart","education",dataEducation,"Minnesota",1);
chartBuild("#religionChart","religion",dataReligion,"Minnesota",2);
chartBuild("#incomeChart","income",dataIncome,"Minnesota",3);
chartBuild("#costsChart","costs",dataCosts,"Minnesota",4);
chartBuild("#raceChart","race",dataRace,"Minnesota",5);
chartBuild("#ageChart","age",dataAge,"Minnesota",6);
chartBuild("#socialChart","social",data2012,"Minnesota",7);

 $(".section").hide();
 $("#populationB").addClass("selected");
 $("#population").show();

var chart = [];
// var chartCosts = chartBuild("#livingChart","costs",dataPopulation,"Minnesota");

function mapColor(d, subject, dataCompare){
  if (d == "Minnesota") { var where = "Minnesota"; }
  else { var where = d; }

  var above = "#121212";
  var mid = "#888888";
  var below = "#C7C7C7";

  if (subject == "population"){
  for (var i = 0; i < dataCompare.length; i++) {
  if (dataCompare[i].county == where){
    if (dataCompare[i].pctChange > .03) { return above; }
    else if (dataCompare[i].pctChange <= 0) { return below; }
    else if (dataCompare[i].pctChange <= .03) { return mid; } 
    }
  }
}
  if (subject == "education"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct < .40) { return below; }
    if (dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct >= .40) { return above; }
    }
  }
}
  if (subject == "income"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].income >= 55000) { return above; }
    if (dataCompare[i].income < 55000) { return below; }
    }
  }
}
  if (subject == "costs"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].YearlyCost >= 55000) { return above; }
    if (dataCompare[i].YearlyCost < 55000) { return below; }
    }
  }
}
  if (subject == "age"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].median_age >= 45) { return above; }
    else if (dataCompare[i].median_age >= 40) { return mid; }
    else if (dataCompare[i].median_age < 40) { return below; }
    }
  }
}
  if (subject == "religion"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].adherent_pct >= 60) { return above; }
    if (dataCompare[i].adherent_pct < 60) { return below; }
    }
  }
}
  if (subject == "race"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].poc_pct > .15) { return above; }
    else if (dataCompare[i].poc_pct <= .10) { return below; }
    else if (dataCompare[i].poc_pct <= .15) { return mid; }
    }
  }
}
  if (subject == "social"){
  for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    if (dataCompare[i].Yes_No == "No") { return above; }
    if (dataCompare[i].Yes_No == "Yes") { return below; }
    }
  }
}
}

function chartBuild(container,subject,data,county,index){
  if (subject == "population"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "education"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "religion"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "income"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "costs"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "age"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "race"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "social"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }

nv.addGraph(function() {
  chart[index] = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 40, bottom: 20, left: 95})
      .showValues(true)
      .tooltips(true)
      .stacked(true)
      .showLegend(false)
      .color(colorArray)
      .width($(container).width()).height($(container).height())
      .showControls(false);

  chart[index].yAxis
      .tickFormat(formatter);

  d3.select(container + ' svg')
      .datum(chartData(subject,data,county))
      .transition().duration(500)
      .call(chart[index]);

  nv.utils.windowResize(chart[index].update);

  return chart[index];
});

}

function redrawChart(chart,container,subject,data,county,index){
  if (subject == "population"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "education"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "religion"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "income"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "costs"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('$,.0f'); }
  if (subject == "age"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }
  if (subject == "race"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format('%'); }
  if (subject == "social"){ var colorArray = [mapColor(county, subject, data)]; var formatter = d3.format(','); }

    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
     chart[index].yAxis
      .tickFormat(formatter);
    nv.utils.windowResize(chart[index].update);
}

function chartData(subject,data,county) {

if (subject == "population"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Population",
        "values": [
          { 
            "label" : "1950" ,
            "value" : data[i].pop1950
          } , 
          { 
            "label" : "1960" ,
            "value" : data[i].pop1960
          } , 
          { 
            "label" : "1970" ,
            "value" : data[i].pop1970
          } ,  
          { 
            "label" : "1980" ,
            "value" : data[i].pop1980
          } , 
          { 
            "label" : "1990" ,
            "value" : data[i].pop1990
          } , 
          {
            "label" : "2000" ,
            "value" : data[i].pop2000
          } , 
          { 
            "label" : "2010" ,
            "value" : data[i].pop2010
          } , 
          { 
            "label" : "2014" ,
            "value" : data[i].pop2014
          }
        ]
      }]
    }
  }
}

if (subject == "education"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "% of population",
        "values": [
          { 
            "label" : "Below 9th grade" ,
            "value" : data[i].less_nine_pct
          },
          { 
            "label" : "No HS Diploma" ,
            "value" : data[i].highschool_nodiploma_pct
          },
          { 
            "label" : "High School" ,
            "value" : data[i].highschool_pct
          },
          { 
            "label" : "Some College" ,
            "value" : data[i].some_college_nodegree_pct
          },
          { 
            "label" : "Associate's" ,
            "value" : data[i].associates_pct
          },
          { 
            "label" : "Bachelor's" ,
            "value" : data[i].bachelors_pct
          },
          { 
            "label" : "Graduate" ,
            "value" : data[i].grad_degree_pct
          }
        ]
      }]
    }
  }
}

if (subject == "religion"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "",
        "values": [ 
          { 
            "label" : "Evangelical" ,
            "value" : data[i].evangelical / data[i].population
          },
          { 
            "label" : "Mainline Prot." ,
            "value" : data[i].mainline_protestant / data[i].population
          },
          { 
            "label" : "Black Prot." ,
            "value" : data[i].black_protestant / data[i].population
          },
          { 
            "label" : "Catholic" ,
            "value" : data[i].catholic / data[i].population
          },
          { 
            "label" : "Orthodox" ,
            "value" : data[i].orthodox / data[i].population
          },
          { 
            "label" : "Judaism" ,
            "value" : data[i].judaism / data[i].population
          },
          { 
            "label" : "Islam" ,
            "value" : data[i].islam / data[i].population
          },
          { 
            "label" : "Other" ,
            "value" : data[i].other / data[i].population
          }
        ]
      }]
    }
  }
}

if (subject == "income"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Median Income (2010 dollars)",
        "values": [
          { 
            "label" : "1999" ,
            "value" : data[i].income_1999_today_dollars
          },{ 
            "label" : "2010" ,
            "value" : data[i].income
          }
        ]
      }]
    }
  }
}

if (subject == "costs"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "Monthly Cost",
        "values": [
          { 
            "label" : "Children" ,
            "value" : data[i].ChildCare
          },
          { 
            "label" : "Food" ,
            "value" : data[i].Food
          },
          { 
            "label" : "Health" ,
            "value" : data[i].HealthCare
          },
          { 
            "label" : "Housing" ,
            "value" : data[i].Housing
          },
          { 
            "label" : "Transport" ,
            "value" : data[i].Transport
          },
          { 
            "label" : "Other" ,
            "value" : data[i].Other
          },
          { 
            "label" : "Taxes" ,
            "value" : data[i].Taxes
          }
        ]
      }]
    }
  }
}

if (subject == "age"){
  var female = [];
  var male = [];

  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      if (data[i].range == "0 to 4") { female[0] = data[i].female_2015; male[0] = data[i].male_2015;  }
      if (data[i].range == "5 to 9") { female[1] = data[i].female_2015; male[1] = data[i].male_2015;  }
      if (data[i].range == "10 to 14") { female[2] = data[i].female_2015; male[2] = data[i].male_2015;  }
      if (data[i].range == "15 to 19") { female[3] = data[i].female_2015; male[3] = data[i].male_2015;  }
      if (data[i].range == "20 to 24") { female[4] = data[i].female_2015; male[4] = data[i].male_2015;  }
      if (data[i].range == "25 to 29") { female[5] = data[i].female_2015; male[5] = data[i].male_2015;  }
      if (data[i].range == "30 to 34") { female[6] = data[i].female_2015; male[6] = data[i].male_2015;  }
      if (data[i].range == "35 to 39") { female[7] = data[i].female_2015; male[7] = data[i].male_2015;  }
      if (data[i].range == "40 to 44") { female[8] = data[i].female_2015; male[8] = data[i].male_2015;  }
      if (data[i].range == "45 to 49") { female[9] = data[i].female_2015; male[9] = data[i].male_2015;  }
      if (data[i].range == "50 to 54") { female[10] = data[i].female_2015; male[10] = data[i].male_2015;  }
      if (data[i].range == "55 to 59") { female[11] = data[i].female_2015; male[11] = data[i].male_2015;  }
      if (data[i].range == "60 to 64") { female[12] = data[i].female_2015; male[12] = data[i].male_2015;  }
      if (data[i].range == "65 to 69") { female[13] = data[i].female_2015; male[13] = data[i].male_2015;  }
      if (data[i].range == "70 to 74") { female[14] = data[i].female_2015; male[14] = data[i].male_2015;  }
      if (data[i].range == "75 to 79") { female[15] = data[i].female_2015; male[15] = data[i].male_2015;  }
      if (data[i].range == "80 to 84") { female[16] = data[i].female_2015; male[16] = data[i].male_2015;  }
      if (data[i].range == "85+") { female[17] = data[i].female_2015; male[17] = data[i].male_2015;  }
          }
  }
     
      return [{
        "key": "Females",
        "values": [
          { 
            "label" : "0 to 4" ,
            "value" : female[0]
          } , 
          { 
            "label" : "5 to 9" ,
            "value" : female[1]
          } , 
          { 
            "label" : "10 to 14" ,
            "value" : female[2]
          } ,  
          { 
            "label" : "15 to 19" ,
            "value" : female[3]
          } , 
          { 
            "label" : "20 to 24" ,
            "value" : female[4]
          } , 
          {
            "label" : "25 to 29" ,
            "value" : female[5]
          } , 
          { 
            "label" : "30 to 34" ,
            "value" : female[6]
          } , 
          { 
            "label" : "35 to 39" ,
            "value" : female[7]
          } , 
          { 
            "label" : "40 to 44" ,
            "value" : female[8]
          } , 
          { 
            "label" : "45 to 49" ,
            "value" : female[9]
          } , 
          { 
            "label" : "50 to 54" ,
            "value" : female[10]
          } , 
          { 
            "label" : "55 to 59" ,
            "value" : female[11]
          } , 
          { 
            "label" : "60 to 64" ,
            "value" : female[12]
          } , 
          { 
            "label" : "65 to 69" ,
            "value" : female[13]
          } , 
          { 
            "label" : "70 to 74" ,
            "value" : female[14]
          } , 
          { 
            "label" : "75 to 79" ,
            "value" : female[15]
          } , 
          { 
            "label" : "80 to 84" ,
            "value" : female[16]
          } , 
          { 
            "label" : "85+" ,
            "value" : female[17]
          }
        ]
      },{
        "key": "Males",
        "values": [
          { 
            "label" : "0 to 4" ,
            "value" : male[0]
          } , 
          { 
            "label" : "5 to 9" ,
            "value" : male[1]
          } , 
          { 
            "label" : "10 to 14" ,
            "value" : male[2]
          } ,  
          { 
            "label" : "15 to 19" ,
            "value" : male[3]
          } , 
          { 
            "label" : "20 to 24" ,
            "value" : male[4]
          } , 
          {
            "label" : "25 to 29" ,
            "value" : male[5]
          } , 
          { 
            "label" : "30 to 34" ,
            "value" : male[6]
          } , 
          { 
            "label" : "35 to 39" ,
            "value" : male[7]
          } , 
          { 
            "label" : "40 to 44" ,
            "value" : male[8]
          } , 
          { 
            "label" : "45 to 49" ,
            "value" : male[9]
          } , 
          { 
            "label" : "50 to 54" ,
            "value" : male[10]
          } , 
          { 
            "label" : "55 to 59" ,
            "value" : male[11]
          } , 
          { 
            "label" : "60 to 64" ,
            "value" : male[12]
          } , 
          { 
            "label" : "65 to 69" ,
            "value" : male[13]
          } , 
          { 
            "label" : "70 to 74" ,
            "value" : male[14]
          } , 
          { 
            "label" : "75 to 79" ,
            "value" : male[15]
          } , 
          { 
            "label" : "80 to 84" ,
            "value" : male[16]
          } , 
          { 
            "label" : "85+" ,
            "value" : male[17]
          }
        ]
      }]
  
}

if (subject == "race"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "% people of color",
        "values": [
          { 
            "label" : "2010" ,
            "value" : data[i].poc_pct
          }
        ]
      },{
        "key": "% white",
        "values": [
          { 
            "label" : "2010" ,
            "value" : data[i].white_pct
          }
        ]
      }]
    }
  }
}

if (subject == "social"){
  for (var i=0; i < data.length; i++){
    if (data[i].county == county) { 
      return [{
        "key": "No Votes",
        "values": [
          { 
            "label" : "2012" ,
            "value" : data[i].NO
          }
        ]
      },{
        "key": "Yes Votes",
        "values": [
          { 
            "label" : "2012" ,
            "value" : data[i].YES
          }
        ]
      }]
    }
  }
}

}

</script>

<script>
mapBuild("#popMap","#popInfo","#popChart","counties.json","population",dataPopulation,0);
mapBuild("#edMap","#edInfo","#edChart","counties.json","education",dataEducation,1);
mapBuild("#religionMap","#religionInfo","#religionChart","counties.json","religion",dataReligion,2);
mapBuild("#incomeMap","#incomeInfo","#incomeChart","counties.json","income",dataIncome,3);
mapBuild("#costsMap","#costsInfo","#costsChart","counties.json","costs",dataCosts,4);
mapBuild("#raceMap","#raceInfo","#raceChart","counties.json","race",dataRace,5);
mapBuild("#ageMap","#ageInfo","#ageChart","counties.json","age",dataMAge,6);
mapBuild("#socialMap","#socialInfo","#socialChart","counties.json","social",data2012,7);


function mapTips(d, subject, dataCompare){
  if (d == "Minnesota") { var where = "Minnesota"; }
  else { var where = d.properties.COUNTYNAME; }

  if (subject == "population"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%.0f")(dataCompare[i].pctChange) + " population growth 2010-2014"; 
      }
     }
    }
  if (subject == "education"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%.0f")(dataCompare[i].associates_pct + dataCompare[i].bachelors_pct + dataCompare[i].grad_degree_pct) + " with college degrees"; 
      }
     }
    }
  if (subject == "income"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("$,.00f")(dataCompare[i].income) + " median income"; 
      }
     }
    }
  if (subject == "costs"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("$,.00f")(dataCompare[i].YearlyCost) + " annual household costs"; 
      }
     }
    }
  if (subject == "age"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format(".0f")(dataCompare[i].median_age) + " median age"; 
      }
     }
    }
  if (subject == "religion"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format(".0f")(dataCompare[i].adherent_pct) + "% religious adherency"; 
      }
     }
    }
  if (subject == "race"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return d3.format("%")(dataCompare[i].poc_pct) + " people of color"; 
      }
     }
    }
   if (subject == "social"){
    for (var i = 0; i < dataCompare.length; i++){
  if (dataCompare[i].county == where){
    return dataCompare[i].PctWin + "% voted No"; 
      }
     }
    }
}

function mapBuild(container, boxContainer, chartContainer, shape, subject, dataCompare, index) {

if (subject != "politics") { $(boxContainer).html("<div class='countyName'>Minnesota</div><div class='metric' style='color:" +  mapColor("Minnesota", subject, dataCompare) + "'>" + mapTips("Minnesota", subject, dataCompare) + "</div>"); }

var width = 350,
    height = 350,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5037)
    .translate([50, 970]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

var districtInfo = document.getElementById('infobox');
var none = "#ddd";
var q1 = "#74C476";
var q2 = "#49ab4b";
var q3 = "#347c36";
var q4 = "#204c21";
var q5 = "#163417";

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d){
         return mapColor(d.properties.COUNTYNAME, subject, dataCompare);
        })
       .on("mousedown", function(d, i){
          if (subject == "age") { var countyName = d.properties.COUNTYNAME + " County"; redrawChart(chart,chartContainer,subject,dataAge,d.properties.COUNTYNAME,index); }
          else { var countyName = d.properties.COUNTYNAME + " County"; redrawChart(chart,chartContainer,subject,dataCompare,d.properties.COUNTYNAME,index); }

          $(boxContainer).html("<div class='countyName'>" + countyName + "</div><div class='metric' style='color:" + mapColor(d.properties.COUNTYNAME, subject, dataCompare) + "'>" + mapTips(d, subject, dataCompare) + "</div>");
})
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
             if (subject == "politics") { var countyName = "District " + d.properties.DISTRICT; }
             else { var countyName = d.properties.COUNTYNAME + " County";  }
        return "<div class='countyName'>" + countyName + "</div><div style='color:" + mapColor(d.properties.COUNTYNAME, subject, dataCompare) + "'>" + mapTips(d, subject, dataCompare) + "</div>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .myButton2").click(function() {
  clicked2();
  if (subject == "age") { redrawChart(chart,chartContainer,subject,dataAge,"Minnesota",index); }
  else if (subject == "politics") { redrawChart(chart,chartContainer,subject,dataCompare,"Minnesota",index); }
  else { redrawChart(chart,chartContainer,subject,dataCompare,"Minnesota",index); }
  $(boxContainer).html("<div class='countyName'>Minnesota</div><div class='metric' style='color:" +  mapColor("Minnesota", subject, dataCompare) + "'>" + mapTips("Minnesota", subject, dataCompare) + "</div>");
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

  // g.transition()
  //     .duration(750)
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //     .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

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

//   g.transition()
//       .duration(750)
// .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
//       .style("stroke-width", 1.5 / k + "px");
}

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
}
</script>
</html>