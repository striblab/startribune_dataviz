<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minnesota Weather Explorer</title>
  <meta name="description" content="Minnesota Weather Explorer">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link href="js/c3-master/c3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  
  <style>
    .bigTitle { width:90%; margin-left:auto; margin-right:auto; font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:900; font-size:1.5em; text-align:center; padding-bottom:10px; border-bottom:2px solid #ddd; }
    .icon { text-align:center; display:block; }
    .icon img { width:60px; }
    .highlights { text-align:center; }
    .highlightNum { width:180px; font-size:3em; font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:900; display:inline-block; text-align:center; }
    .highlightText { width:180px; display:inline-block; text-align:center; font-family:"Benton Sans",Helvetica,Arial,sans-serif; margin-right:auto; margin-left:auto; }
    .highlightBreak { clear:both; }
    .wrapper-dropdown-1 { width:100%; }
    .wrapper-demo { width:100%; z-index:9000 !important; }
    .blueswatch { color:#407F7F; }
    .lowswatch { color:#E7A9A9; }
    .redswatch { color:#801515; }
    .greyswatch { color:#333; }
    .orangeswatch { color:#AA6C38; }
    .hottest { fill:#a70518; }
    .snowswatch { color:#96ADB0; }
    .windswatch { color:#E7C6A9; }
    .greenswatch { color:#3D813D; }
    .precipswatch { color:#87B887; }
    p a, .l-utility-inner p a { color: #036; text-decoration: underline!important; }
    p a:hover, .l-utility-inner p a:hover { color: #666666; text-decoration: none!important; }
    h3 { font-family:"Benton Sans",Helvetica,Arial,sans-serif; }
  </style> 
</head>

<body>
  <div id="wrapper">

<div id="selector">
  <section class="main">
        <div class="wrapper-demo" style="display:none;">
          <div id="dd" class="wrapper-dropdown-1" tabindex="1">
            <span>Month</span>
              <ul class="dropdown months" tabindex="1">
        <li><a href="#" month="1">January</a></li>
        <li><a href="#" month="2">February</a></li>
        <li><a href="#" month="3">March</a></li>
        <li><a href="#" month="4">April</a></li>
        <li><a href="#" month="5">May</a></li>
        <li><a href="#" month="6">June</a></li>
        <li><a href="#" month="7">July</a></li>
        <li><a href="#" month="8">August</a></li>
        <li><a href="#" month="9">September</a></li>
        <li><a href="#" month="10">October</a></li>
        <li><a href="#" month="11">November</a></li>
        <li><a href="#" month="12">December</a></li>
              </ul>
          </div>
        ​</div>

        <div class="wrapper-demo">
          <div id="ddY" class="wrapper-dropdown-1" tabindex="1">
            <span>Year</span>
              <ul class="dropdown years" tabindex="1">
<!--         <li data='data2012' year='2011'><a href="#">2011</a></li> -->
        <li data='data2012' year='2012'><a href="#">2012</a></li>
        <li data='data2013' year='2013'><a href="#">2013</a></li>
        <li data='data2014' year='2014'><a href="#">2014</a></li>
        <li data='data2015' year='2015'><a href="#">2015</a></li>
              </ul>
          </div>
        ​</div>
</section>
</div>

<div id="pdf">
<h3>Annual breakdowns (PDF)</h3>
<p><b><b> <a href="http://stmedia.startribune.com/documents/2003+yearend+wx.pdf">2003</a> * <a href="http://stmedia.startribune.com/documents/2004+yearend+wx.pdf">2004</a> * <a href="http://stmedia.startribune.com/documents/2005+yearend+wx.pdf">2005</a> * <a href="http://stmedia.startribune.com/documents/2006+yearend+wx.pdf">2006</a> * <a href="http://stmedia.startribune.com/documents/2007+Yearend+wx.pdf">2007</a> * <a href="http://stmedia.startribune.com/documents/2008+yearend+wx.pdf">2008</a> * <a href="http://stmedia.startribune.com/documents/2009+yearend+wx.pdf">2009</a> * <a href="http://stmedia.startribune.com/documents/2010+yearend+wx.pdf">2010</a> * <a href="http://stmedia.startribune.com/documents/2011+yearend+wx.pdf">2011</a> * <a href="http://stmedia.startribune.com/documents/2012+yearend+wx.pdf">2012</a> * <a href="http://stmedia.startribune.com/documents/2013+yearend+wx.pdf">2013</a> * <a href="http://stmedia.startribune.com/documents/2014_yearend_wx.pdf">2014</a> * <a href="data/3YearEndWX2015.pdf">2015</a></b></b></p>
</div>

<div id="temperature" class="block">
<div class="icon"><img  src="img/thermostat.png" /></div>
<div class="bigTitle redswatch">Temperatures</div>
<div class="chartTitle">Temperatures <span class="thisYear">2015</span></div>
<div class="chatter">Average, minimum and maximum temperatures by day in Minnesota.</div>
<div class="highlights">
  <div class="highlightNum redswatch" id="maxTemp">0</div><div class="highlightNum lowswatch" id="minTemp">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="tempsChart"></div>
<div class="chartTitle">Average temperature over time</div>
<div class="chatter">Annual average temperatures by year in Minnesota tracing back more than a century.</div>
<div class="highlights">
  <div class="highlightNum redswatch" id="maxTempAll">0</div><div class="highlightNum lowswatch" id="minTempAll">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="tempsHistory"></div>
<div class="chartTitle">Days over 90&deg; by year</div>
<div class="chatter">Total number of very hot days by year in Minnesota tracing back more than a century.</div>
<div class="highlights">
  <div class="highlightNum redswatch" id="max90">0</div><div class="highlightNum lowswatch" id="min90">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">Days: Most</div><div class="highlightText">Days: Least</div>
</div>
<div class="chart" id="over90History"></div>
</div>

<div class="breaker"></div>

<div id="snowfall" class="block">
<div class="icon"><img  src="img/snowflake.png" /></div>
<div class="bigTitle snowswatch">Snowfall</div>
<div class="chartTitle">Snowfall <span class="thisYear">2015</span></div>
<div class="chatter">The total snowfall in inches by day in Minnesota.</div>
<div class="highlights">
  <div class="highlightNum snowswatch" id="maxSnow">0</div><div class="highlightNum greyswatch" id="minSnow">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="snowChart"></div>
<div class="chartTitle">Total snowfall by year</div>
<div class="chatter">Total snowfall in inches by year in Minnesota tracing back more than a century.</div>
<div class="highlights">
  <div class="highlightNum snowswatch" id="maxSnowAll">0</div><div class="highlightNum greyswatch" id="minSnowAll">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="snowHistory"></div>
</div>

<div class="breaker"></div>

<div id="precipitation" class="block">
<div class="icon"><img  src="img/raindrop.png" /></div>
<div class="bigTitle precipswatch">Precipitation</div>
<div class="chartTitle">Precipitation <span class="thisYear">2015</span></div>
<div class="chatter">The total precipitation in inches by day in Minnesota.</div>
<div class="highlights">
  <div class="highlightNum greenswatch" id="maxPrecip">0</div><div class="highlightNum precipswatch" id="minPrecip">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="precipChart"></div>
<div class="chartTitle">Total precipitation by year</div>
<div class="chatter">The total precipitation in inches by year in Minnesota tracing back more than a century.</div>
<div class="highlights">
  <div class="highlightNum greenswatch" id="maxPrecipAll">0</div><div class="highlightNum precipswatch" id="minPrecipAll">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="precipHistory"></div>
<div class="chartTitle">Dewpoint highs by year</div>
<div class="chatter">Highest average dewpoint from June to August by year in Minnesota tracing back more than a century.</div>
<div class="highlights">
  <div class="highlightNum greenswatch" id="maxDew">0</div><div class="highlightNum precipswatch" id="minDew">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="dewChart"></div>
</div>

<div class="breaker"></div>

<div id="wind" class="block" style="display:none;">
<div class="icon"><img  src="img/wind.png" /></div>
<div class="bigTitle orangeswatch">Wind</div>
<div class="chartTitle">Windspeed <span class="thisYear">2015</span></div>
<div class="chatter">Maximum and average windspeed by day in Minnesota.</div>
<div class="highlights">
  <div class="highlightNum orangeswatch" id="maxWind">0</div><div class="highlightNum windswatch" id="minWind">0</div>
  <div class="highlightBreak"></div>
  <div class="highlightText">High</div><div class="highlightText">Low</div>
</div>
<div class="chart" id="windChart"></div>
</div>

  </div>
</body>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="js/c3-master/c3.min.js"></script>
<script src="../_common_resources/stickies/jquery.sticky.js"></script>

<script>
// $("#selector").sticky({topSpacing:1});
</script>
<script type="text/javascript">
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });

</script>
<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=weather2011
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=weather2012
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=weather2013
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=weather2014
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=weather2015
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=avgTemp
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=coolingDegree
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=over90
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=dewpointHighs
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=heatingDegree
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=hottestDecade
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=annualPrecip
//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1-2zKGGKgPe9Xer1MrRBI74Zy5TUi15HuZShdT-eJFFs&sheet=annualSnow


//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonData2011 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=l5_aNeJYpzBLERNvsi086lXDhWdKV_rV-zIYfSJ3Kq-smFJm1GhXPjLjm7pSGJuROJrCDFolUPJJJvQOa15umibMWjlo-U3UOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDaoHaP2ix_cb&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2012 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=9bJ4W0EzeuC0jr3RkVN0_i6zYMyRVuSScqO6K3SkWJTuMfqTJPL5OHariSOO40qSf-wrA2-NGvnSXd2TDqLCRynTGdzah8lKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDR_LfmYbIuwY&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2013 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=mdVJzUd9WHmfJBkXkYEw_4bm7jNY3ZQnyPGPwS5UlrQOPJpoLsGfmrploIYcXuUCUG4mxOfXrt8v2QzIHhbNAz_g48noQ1KzOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDSBXb84BGvRE&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2014 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=9B-AWywwxrR1TBeP9Ia3cXAIqYN1T86VynrSb5_fkHf9DL_z4AgKJPoSIuffDiHDfT_drofP9agv2QzIHhbNA2NX_mOIqL0rOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDQsWJUuuPAtW&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData2015 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=Kor1VwDOmGgoy_JfeRUxKiQ27I6lkP3BrUSasfwBKdeItoWcKZ_ijnXzzah4FKqUuAOdANrkFI0v2QzIHhbNAxig1ykYg_tjOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzGetL3GQdFGtzSS3bVLNjDS7AWuiHuzI1&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataTmp = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=vbmsyf5KREVq2ZYqQyEbRhbNrYZNewE28ZBxrPWb88KhGY2gURPkHmHAs0s9kiHTTFpiTp7nHE0jRkQ-X35H-cBijNEMrdFYOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzCybrZkpw6lssgaDZH-wzIA&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataCool = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=6nyoUiL0ogAGtBuQrvxeu64CIZMJ-jlLqkPNKOCL57xQ4bN_Pp45qumEZs69wua-PbnC_7FDZnAjRkQ-X35H-d4atuqvRiuwOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzW0Ar8EAym2-rSLd6Kd3MhGoD-a8Q7Shx&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonData90 = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=Sm3LMCfJhh_4ui1k1tgAsG3LpcGjWo58N9vLW0Hitxm4F-_zO0ny_H_4W-nY_KQTbkl3w8FAE_sjRkQ-X35H-Z19ZG2n3KUIOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIz3SRbIqcu4Za0fnLkJQj8mg&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataDew = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=R5SXWbFJdDkDYssFUlLvPkeWCZPpzLbzl_6PV2PiSx5NbSf6F02xGpW2rNWOY2g_R7cS4LGfdbAjRkQ-X35H-Wj6U1N-qGvkOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIz3dzJzZTV7GibOBmgGRDvDAePdCTtDnUe&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataHeat = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=bDx9446nsE_17BOWXpdCg88TQN1F8hiJigvS1OAp3QvthRP09Fn-g70V4tQFjE-8096_wSmLulZHGJOtJcWT_sRVhlD-fLluOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzSCWgToZmllYLAludXjgR92oD-a8Q7Shx&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataDecade = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=inQ4H6msBBEe2lAuUmcihnvF_9T41FyWQpZfRLInrHzBv1WFR4VXLQRog--cgHi6mOUPZ6Do_TdHGJOtJcWT_qGr0FgEJyzOOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzSCWgToZmllbQp3vYj6SpyFwQpERPvs5H&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataPrecip = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=-PIWqx5kMzKvhitTFnzAReTbLeF8ayn4t3smDKTRyg618IeHLVfNAuvI37QFTtuPzrxKnR3ps9VHGJOtJcWT_o5drkE28sTlOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzCybrZkpw6ls6fOqW35suTWBZtRnYfzDl&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
$jsonDataSnow = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=uaAlUqxjSlon5e_C8c5IOzeeuQNOfi6s9HyU2a0brYaJVvdddqLmk37tkWKS-H9dbo-NdWzNbP1HGJOtJcWT_kBSc61GAoNPOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TuemWiCPnYU3v6YF6IJkSFYyyTJG-HL6oSfmK20SEw86uyLwhxRZulMt4JgiTXzIzCybrZkpw6lts1UOCsECMqBGQmSuaYtHQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoad2011 = <?php echo $jsonData2011; ?>;
var dataLoad2012 = <?php echo $jsonData2012; ?>;
var dataLoad2013 = <?php echo $jsonData2013; ?>;
var dataLoad2014 = <?php echo $jsonData2014; ?>;
var dataLoad2015 = <?php echo $jsonData2015; ?>;
var dataLoadTmp = <?php echo $jsonDataTmp; ?>;
var dataLoadCool = <?php echo $jsonDataCool; ?>;
var dataLoad90 = <?php echo $jsonData90; ?>;
var dataLoadDew = <?php echo $jsonDataDew; ?>;
var dataLoadHeat = <?php echo $jsonDataHeat; ?>;
var dataLoadDecade = <?php echo $jsonDataDecade; ?>;
var dataLoadPrecip = <?php echo $jsonDataPrecip; ?>;
var dataLoadSnow = <?php echo $jsonDataSnow; ?>;

data2011 = dataLoad2012.weather2011;
data2012 = dataLoad2012.weather2012;
data2013 = dataLoad2013.weather2013;
data2014 = dataLoad2014.weather2014;
data2015 = dataLoad2015.weather2015;
dataTmp = dataLoadTmp.avgTemp;
dataCool = dataLoadCool.coolingDegree;
data90 = dataLoad90.over90;
dataDew = dataLoadDew.dewpointHighs;
dataHeat = dataLoadHeat.heatingDegree;
dataDecade = dataLoadDecade.hottestDecade;
dataPrecip = dataLoadPrecip.annualPrecip;
dataSnow = dataLoadSnow.annualSnow;
</script>

<script>

$(".years li").on('click',function(){
$(".thisYear").text($(this).attr('year'));

var whatYear = $(this).attr('year');

if (whatYear == '2011') { var newData = data2011; }
if (whatYear == '2012') { var newData = data2012; }
if (whatYear == '2013') { var newData = data2013; }
if (whatYear == '2014') { var newData = data2014; }
if (whatYear == '2015') { var newData = data2015; }

var maxTemp = Math.max.apply(Math,newData.map(function(o){return o.Tmax;}))
var minTemp = Math.min.apply(Math,newData.map(function(o){return o.Tmin;}))
$("#maxTemp").html(Math.round(maxTemp) + "&deg;");
$("#minTemp").html(Math.round(minTemp) + "&deg;");
var maxSnow = Math.max.apply(Math,newData.map(function(o){return o.SnowFall;}))
var minSnow = Math.min.apply(Math,newData.map(function(o){return o.SnowFall;}))
$("#maxSnow").html(Math.round(maxSnow) + "in");
$("#minSnow").html(Math.round(minSnow) + "in");
var maxPrecip = Math.max.apply(Math,newData.map(function(o){return o.PrecipTotal;}))
var minPrecip = Math.min.apply(Math,newData.map(function(o){return o.PrecipTotal;}))
$("#maxPrecip").html(Math.round(maxPrecip) + "in");
$("#minPrecip").html(Math.round(minPrecip) + "in");
var maxWind = Math.max.apply(Math,newData.map(function(o){return o.Max5Speed;}))
var minWind = Math.min.apply(Math,newData.map(function(o){return o.Max5Speed;}))
$("#maxWind").html(Math.round(maxWind) + "mph");
$("#minWind").html(Math.round(minWind) + "mph");


    chartTemps.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['Tmax','Tmin','Tavg']
            },
          unload: ['Tmax','Tmin','Tavg']
    });

    chartSnow.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['SnowFall']
            },
          unload: ['SnowFall']
    });

    chartPrecip.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['PrecipTotal']
            },
          unload: ['PrecipTotal']
    });

    chartWind.load({
            json: newData,
            keys: {
                x: 'DATE1',
                value: ['AvgSpeed',"Max5Speed"]
            },
          unload: ['AvgSpeed',"Max5Speed"]
    });

});

var maxTemp = Math.max.apply(Math,data2015.map(function(o){return o.Tmax;}))
var minTemp = Math.min.apply(Math,data2015.map(function(o){return o.Tmin;}))
var maxTempAll = Math.max.apply(Math,dataTmp.map(function(o){return o.avgTemp;}))
var minTempAll = Math.min.apply(Math,dataTmp.map(function(o){return o.avgTemp;}))
var max90 = Math.max.apply(Math,data90.map(function(o){return o.daysOver90;}))
var min90 = Math.min.apply(Math,data90.map(function(o){return o.daysOver90;}))

$("#maxTemp").html(Math.round(maxTemp) + "&deg;");
$("#minTemp").html(Math.round(minTemp) + "&deg;");
$("#maxTempAll").html(Math.round(maxTempAll) + "&deg;");
$("#minTempAll").html(Math.round(minTempAll) + "&deg;");
$("#max90").html(Math.round(max90));
$("#min90").html(Math.round(min90));

var maxSnow = Math.max.apply(Math,data2015.map(function(o){return o.SnowFall;}))
var minSnow = Math.min.apply(Math,data2015.map(function(o){return o.SnowFall;}))
var maxSnowAll = Math.max.apply(Math,dataSnow.map(function(o){return o.totalSnow;}))
var minSnowAll = Math.min.apply(Math,dataSnow.map(function(o){return o.totalSnow;}))

$("#maxSnow").html(Math.round(maxSnow) + "in");
$("#minSnow").html(Math.round(minSnow) + "in");
$("#maxSnowAll").html(Math.round(maxSnowAll) + "in");
$("#minSnowAll").html(Math.round(minSnowAll) + "in");

var maxPrecip = Math.max.apply(Math,data2015.map(function(o){return o.PrecipTotal;}))
var minPrecip = Math.min.apply(Math,data2015.map(function(o){return o.PrecipTotal;}))
var maxPrecipAll = Math.max.apply(Math,dataPrecip.map(function(o){return o.annualPrecip;}))
var minPrecipAll = Math.min.apply(Math,dataPrecip.map(function(o){return o.annualPrecip;}))
var maxDew = Math.max.apply(Math,dataDew.map(function(o){return o.junetoAugAvg;}))
var minDew = Math.min.apply(Math,dataDew.map(function(o){return o.junetoAugAvg;}))

$("#maxPrecip").html(Math.round(maxPrecip) + "in");
$("#minPrecip").html(Math.round(minPrecip) + "in");
$("#maxPrecipAll").html(Math.round(maxPrecipAll) + "in");
$("#minPrecipAll").html(Math.round(minPrecipAll) + "in");
$("#maxDew").html(Math.round(maxDew));
$("#minDew").html(Math.round(minDew));

var maxWind = Math.max.apply(Math,data2015.map(function(o){return o.Max5Speed;}))
var minWind = Math.min.apply(Math,data2015.map(function(o){return o.Max5Speed;}))

$("#maxWind").html(Math.round(maxWind) + "mph");
$("#minWind").html(Math.round(minWind) + "mph");

var  padding = {
        top: 40,
        right: 40,
        bottom: 30,
        left: 40,
    };


var chartTemps = c3.generate({
        bindto: '#tempsChart',
        padding: padding,
        data: {
            json: data2015,
            keys: {
                x: 'DATE1',
                value: ['Tmax','Tmin','Tavg']
            },
            names: {
              'Tmax': 'Max',
              'Tmin': 'Min',
              'Tavg': 'Avg'
            }
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          y: {
            tick: {
             values: ['-23', '0', '20', '40', '60', '80'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
                count: 4,
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#801515', '#E7A9A9', '#333'] },
    });


var chartTempHistory = c3.generate({
        bindto: '#tempsHistory',
        padding: padding,
        data: {
            json: dataTmp,
            keys: {
                x: 'year',
                value: ['avgTemp']
            },
            names: {
              'avgTemp': 'Average Temperature'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
           // type: 'categories',
            tick: {
                values: ['1895', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#333'] },
    });

var chartTempHot = c3.generate({
        bindto: '#over90History',
        padding: padding,
        data: {
            json: data90,
            keys: {
                x: 'year',
                value: ['daysOver90']
            },
            names: {
              'daysOver90': '90+ Degree Days'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
           // type: 'categories',
            tick: {
                values: ['1873', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
         regions: [
        {axis: 'x', start: '1980', end: '1990', class: 'hottest'},
    ],
      subchart: { show: true },
        color: { pattern: ['#801515'] },
    });



var chartSnow = c3.generate({
        bindto: '#snowChart',
        padding: padding,
        data: {
            json: data2015,
            keys: {
                x: 'DATE1',
                value: ['SnowFall']
            },
            names: {
              'SnowFall': 'Snowfall'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '2', '4', '6', '8'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#96ADB0'] },
    });

var chartSnowHistory = c3.generate({
        bindto: '#snowHistory',
        padding: padding,
        data: {
            json: dataSnow,
            keys: {
                x: 'year',
                value: ['totalSnow']
            },
            names: {
              data1: 'Total Snow'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40', '60', '80', '100'],
             format: d3.format('r')
            }
        },
        x: {
            tick: {
                values: ['1884', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#96ADB0'] },
    });


var chartPrecip = c3.generate({
        bindto: '#precipChart',
        padding: padding,
        data: {
            json: data2015,
            keys: {
                x: 'DATE1',
                value: ['PrecipTotal']
            },
            names: {
              'PrecipTotal': 'Precipitation'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '2', '4'],
             format: d3.format('r')
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartDewHistory = c3.generate({
        bindto: '#dewChart',
        padding: padding,
        data: {
            json: dataDew,
            keys: {
                x: 'year',
                value: ['junetoAugAvg']
            },
            names: {
              'junetoAugAvg': 'Dewpoint High June to August Average'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['40', '50', '60'],
             format: d3.format('r')
            }
        },
        x: {
           type: 'categories',
            tick: {
                values: ['1903', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartPrecipHistory = c3.generate({
        bindto: '#precipHistory',
        padding: padding,
        data: {
            json: dataPrecip,
            keys: {
                x: 'year',
                value: ['annualPrecip']
            },
            names: {
              'annualPrecip': 'Total Precipitation'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40'],
             format: d3.format('r')
            }
        },
        x: {
            tick: {
                values: ['1891', '1924', '1953', '1982', '2011'],
                multiline: false
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#3D813D'] },
    });

var chartWind = c3.generate({
        bindto: '#windChart',
        padding: padding,
        data: {
            json: data2015,
            keys: {
                x: 'DATE1',
                value: ['AvgSpeed',"Max5Speed"]
            },
            names: {
              'AvgSpeed': 'Average Speed',
              'Max5Speed': 'Max Speed'
            }
        },
        axis: {
          y: {
            tick: {
             values: ['0', '20', '40', '60'],
             format: d3.format('r')
            }
        },
        x: {
          type: 'timeseries',
            tick: {
                count: 4,
                format: '%Y-%m-%d'
            }
          }
        },
      subchart: { show: true },
        color: { pattern: ['#E7C6A9', '#AA6C38'] },
    });
</script>
</html>