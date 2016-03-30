<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Group Home 911 Calls</title>
  <meta name="description" content="Group Home 911 Calls">
  <meta name="author" content="Jeff Hargarten - StarTribune">

  <link rel="stylesheet" href="http://apps.startribune.com/news/dataviz-css-master/startribune_dataviz_styles.css" /> 
	<link rel="stylesheet" href="js/colorbox-master/colorbox.css" />

<style>
    #chart svg { height:400px; display:none; }
    #nerdbox { width:100%; }
    .victimCard { font-family:"Benton Sans"; width:45%; border-radius:5px; height:auto; background:#ddd; display:inline-block; margin:5px; padding:10px; }
    .victimCard:hover { cursor:pointer; opacity:.5; }
    .type { font-weight:900; font-family:"Popular"; float:left; }
    .dateline { clear:both; }
    .reportLink a { float:right; text-decoration:none; display:none; }
    .code { display:none; }

    .breaker { clear:both; margin:10px; padding:20px; }

    .iconSelect:hover { cursor:pointer; color:#ddd; }

    #filter { font-family:"Benton Sans"; font-size:.9em;}
    #filter input { width:98% !important; padding: 0 10px 0 10px; font-family:"Benton Sans"; border-radius:5px !important; margin:0; width:100%; height:30px; line-height:120%; font-size: 1em; -webkit-appearance: none; -webkit-border-radius:0; border-radius:0; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); color: rgba(0,0,0,0.75);  -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; background-color: #fff !important; font-family: inherit; border: 1px solid #eee !important;  background-image: url('img/search-icon.svg');  background-size: 14px 14px; background-repeat: no-repeat;  background-position: 98% 50%; }
    #filter input:focus { width:98% !important; font-family:"Benton Sans"; box-shadow: 0 0 5px #999; padding: 1px 10px 1px 10px; border: 1px solid #61bd1a; }
    input:focus { outline:0 !important; }

    .downloadButton { font-family:"Benton Sans",Helvetica,Arial,sans-serif; font-weight:bold; color:#333333; font-size:.9em; text-align:center; margin-top:15px; margin-left:1%; width: 99%; background-color:#fff; color:#333; border-top: 1px solid #ccc; background-image: url('img/downloadDoc.svg'); background-size: 20px 20px; background-repeat: no-repeat; background-position: 2% 50%; }
    .downloadButton:hover {background-color:#fff !important; opacity:.5;}
    .downloadButton:active {background-color:#fff !important;}

    .bar { height:120px; display:inline-block; width:11.5%; vertical-align:bottom; }
    .graph { background-color:#ddd; }
    .iconSelect { display:inline-block; width:11.5%; text-align:center; font-family:"Benton Sans"; }
    .number { text-align:center; display:inline-block; width:11.5%; font-weight:900; font-family:"Popular"; font-size:1.4em; }
  
    @media only screen and (max-width:650px) {
      .victimCard { width:98%; }
    }

    .allSwatch { color:#3C3232; }
    .medicalSwatch { color:#4178BE; }
    .otherSwatch { color:#4B8400; }
    .missingSwatch { color:#008571; }
    .disturbanceSwatch { color:#9855D4; }
    .suicideSwatch { color:#E71D32; }
    .psychiatricSwatch { color:#DB2780; }
    .assaultSwatch { color:#D74108; }
</style>
</head>

<body> 

<div id="wrapper">


<div class="iconSelect allSwatch" id="allB" data="all">All</div>
<div class="iconSelect medicalSwatch" id="medicalB" data="medicalStuff">Medical</div>
<div class="iconSelect otherSwatch" id="otherB" data="otherStuff">Other</div>
<div class="iconSelect missingSwatch" id="missingB" data="missingStuff">Missing</div>
<div class="iconSelect disturbanceSwatch" id="disturbB" data="disturbanceStuff">Disturbance</div>
<div class="iconSelect suicideSwatch" id="suicideB" data="suicideStuff">Suicide</div>
<div class="iconSelect psychiatricSwatch" id="psychB" data="psychiatricStuff">Psychiatric</div>
<div class="iconSelect assaultSwatch" id="assaultB" data="assaultStuff">Assault</div>

<div class"breaker"></div>

<div class="number allSwatch" id="allN" data="all">1572</div>
<div class="number medicalSwatch" id="medicalN" data="medicalStuff">0</div>
<div class="number otherSwatch" id="otherN" data="otherStuff">0</div>
<div class="number missingSwatch" id="missingN" data="missingStuff">0</div>
<div class="number disturbanceSwatch" id="disturbN" data="disturbanceStuff">0</div>
<div class="number suicideSwatch" id="suicideN" data="suicideStuff">0</div>
<div class="number psychiatricSwatch" id="psychN" data="psychiatricStuff">0</div>
<div class="number assaultSwatch" id="assaultN" data="assaultStuff">0</div>

<div class"breaker"></div>

<div class="bar" id="allG" data="all"><div class="graph"></div></div>
<div class="bar" id="medicalG" data="medicalStuff"><div class="graph"></div></div>
<div class="bar" id="otherG" data="otherStuff"><div class="graph"></div></div>
<div class="bar" id="missingG" data="missingStuff"><div class="graph"></div></div>
<div class="bar" id="disturbG" data="disturbanceStuff"><div class="graph"></div></div>
<div class="bar" id="suicideG" data="suicideStuff"><div class="graph"></div></div>
<div class="bar" id="psychG" data="psychiatricStuff"><div class="graph"></div></div>
<div class="bar" id="assaultG" data="assaultStuff"><div class="graph"></div></div>

<div id="filter"><input type="search" id="filter_box" placeholder="Search list of calls by keyword"></input></div>

<div id="nerdbox"></div>

<a class="downloadButton" href='https://docs.google.com/spreadsheets/d/1ckBZQQ6hK9w_wWKWDhsZB21u0CGFIYt4scuE3R9ALIU/pub?gid=0&single=true&output=csv'>&#9660; Download Data</button></a>

</div>

</body>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="js/colorbox-master/jquery.colorbox.js"></script>

<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1ckBZQQ6hK9w_wWKWDhsZB21u0CGFIYt4scuE3R9ALIU&sheet=calls911

//THESE LOAD DIFFERENT TABS OF THE GOOGLE SHEET INTO SEPERATE JSON STRINGS, USING THE ACTUAL URLS
<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=pZTCAkPYZJwLOIi2jwiTr5SBPpUbBdKLkhp1ecCVFzqcexo8PVnVl0_SqBZIbHdzI-319b8jW-AJjGoWrAMcbqfi1azVNWBXOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TkNKVDlkUzzGatjCbv0vUXYPAgPhZjax1Fp-df68fLfJ2WmKtJJhkHixcCzrIV0nbW0Ar8EAym2_RorZKOXnIHQ&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

//THESE ADD THEM TO JAVASCRIPT VARIABLES WE CAN ACCESS THROUGHOUT THE DOCUMENT
var dataLoad = <?php echo $jsonData; ?>;

var data = dataLoad.calls911;

var suicideStuff = ["SUICT","DOA","SUICA","SUICT"];
var assaultStuff = ["ASLT","FIGHT","HARASS","PERMAG","THREAT"];
var psychiatricStuff = ["PSYCH"];
var disturbanceStuff = ["ANIMAL","ATTPU","FALRM","FCO","MUSIC","PARTY","SHOTS","DIST"];
var medicalStuff = ["ANBITE","MASLT","MCVA","MDIAB","MDIFFB","MEDIC","MHEART","MISC","MOD","MSEIZ"];
var missingStuff = ["ATL","MISSP","RUN"];
var otherStuff = ["ALRMS","AOA","ASTINV","BURG","CB","CHILD","CHILDV","CIVIL","CIVMTR","CKHAZ","CKPER","CKWEL","DAMP","DK","DOMES","DRUG","FGAS","FMISC","FORG","FOUT","FRAUD","FSTRUC","FVEH","INFO","ITEM","NOTIFY","OPEND","ORDERV","OUTW","PARK","PARKBD","PD","PROP","PTRANS","PUBLIC","RESCUE","SIFA","SUSPA","THEFT","TRAFIC","TRBKID","TRBNBR","TRBTEN","TRBUNK","UNWANT","VDAMP","VINFO","VPROWL","VRECOV"];

function aggregateCalls(calls){
   var count = d3.nest()
  .key(function(d) { return $.inArray(d.activity_code, calls) > -1; })
  .rollup(function(v) { return v.length; })
  .entries(data);

  if (count.length > 1) { return count[1].values; }
  else { return 1; }
}

//SURFACE DATA
$( document ).ready(function() {  
  $('.number').each(function(i, obj) {
    if ($(this).attr("data") == "all") { var tally = 1572; }
    else if ($(this).attr("data") == "suicideStuff") { var tally = aggregateCalls(suicideStuff); }
    else if ($(this).attr("data") == "psychiatricStuff") { var tally = aggregateCalls(psychiatricStuff); }
    else if ($(this).attr("data") == "disturbanceStuff") { var tally = aggregateCalls(disturbanceStuff); }
    else if ($(this).attr("data") == "medicalStuff") { var tally = aggregateCalls(medicalStuff); }
    else if ($(this).attr("data") == "missingStuff") { var tally = aggregateCalls(missingStuff); }
    else if ($(this).attr("data") == "assaultStuff") { var tally = aggregateCalls(assaultStuff); }
    else if ($(this).attr("data") == "otherStuff") { var tally = aggregateCalls(otherStuff); }

    $(this).html(tally);
  });

  $('.bar').each(function(i, obj) {
    var total = 1572;
    if ($(this).attr("data") == "all") { var tally = 100; }
    else if ($(this).attr("data") == "suicideStuff") { var tally = (aggregateCalls(suicideStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "psychiatricStuff") { var tally = (aggregateCalls(psychiatricStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "disturbanceStuff") { var tally = (aggregateCalls(disturbanceStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "medicalStuff") { var tally = (aggregateCalls(medicalStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "missingStuff") { var tally = (aggregateCalls(missingStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "assaultStuff") { var tally = (aggregateCalls(assaultStuff) / 1572) * 100; }
    else if ($(this).attr("data") == "otherStuff") { var tally = (aggregateCalls(otherStuff) / 1572) * 100; }

    // console.log(tally);
    $(this).children(".graph").css("height",tally + "px");
  });
});

//CLICKY FILTERS
$(document).bind('DOMNodeInserted', function(event) {
  $("#allB").css("background-color","#ddd");
});

  $(".iconSelect").click(function() {
   $(".iconSelect").css("background-color","#fff");
   $(this).css("background-color","#ddd");

    $('.victimCard').hide();

    if ($(this).attr("data") == "all") { var txt = ""; }
    else if ($(this).attr("data") == "suicideStuff") { var txt = suicideStuff;  }
    else if ($(this).attr("data") == "psychiatricStuff") { var txt = psychiatricStuff; }
    else if ($(this).attr("data") == "disturbanceStuff") { var txt = disturbanceStuff; }
    else if ($(this).attr("data") == "medicalStuff") { var txt = medicalStuff; }
    else if ($(this).attr("data") == "missingStuff") { var txt = missingStuff; }
    else if ($(this).attr("data") == "assaultStuff") { var txt = assaultStuff; }
    else if ($(this).attr("data") == "otherStuff") { var txt = otherStuff; }
   
    $('.victimCard').each(function(){
        if($.inArray($(this).children(".code").text(), txt) > -1){
            $(this).show();
           }
      });

    if ($(this).attr("data") == "all") { $('.victimCard').show(); }
  });

var allSwatch = "#3C3232";
var medicalSwatch = "#4178BE";
var otherSwatch = "#4B8400";
var missingSwatch = "#008571";
var disturbanceSwatch = "#9855D4";
var suicideSwatch = "#E71D32";
var psychiatricSwatch = "#DB2780";
var assaultSwath = "#D74108";

//LOAD CARDS
  d3.select("#nerdbox").selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .attr("class", function (d){return "victimCard inline " + d.activity_code;} )
  .on("mousedown", function(d, i){
    // console.log("clicky");
})
  .on("mousedown", function(d, i){
    $('#cboxContent').html("SPILL THE REPORT INTO HERE");
    $(".inline").colorbox({inline:true, width:"70%", height:"500px"});
})
  .html(function (d,i){
    if ($.inArray(d.activity_code, suicideStuff) > -1) { var swatch = suicideSwatch; }
    else if ($.inArray(d.activity_code, medicalStuff) > -1) { var swatch = medicalSwatch; }
    else if ($.inArray(d.activity_code, otherStuff) > -1) { var swatch = otherSwatch; }
    else if ($.inArray(d.activity_code, missingStuff) > -1) { var swatch = missingSwatch; }
    else if ($.inArray(d.activity_code, assaultStuff) > -1) { var swatch = assaultSwath; }
    else if ($.inArray(d.activity_code, disturbanceStuff) > -1) { var swatch = disturbanceSwatch; }
    else if ($.inArray(d.activity_code, psychiatricStuff) > -1) { var swatch = psychiatricSwatch; }
    else { var swatch = allSwatch; }

    return "<div class='type' style='color:" + swatch + ";'>" + d.description + "</div><div class='reportLink'><a href='" + d.report_link + "'>View Report</a></div><div class='dateline'>Date: " + String(d.date) + "</div><div class='address'>" + d.address + "</div><div class='code'>" + d.activity_code + "</div>"; });

//SEARCH FILTER
$( document ).ready(function() {
     $('#filter_box').keyup(function(i){
        $('.victimCard').hide();
        var txt = $('#filter_box').val();
        $('.victimCard').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });
});

//COLORBOX FIXES
$(document).bind('DOMNodeInserted', function(event) {
$( "#cboxClose" ).click(function() {
     $.colorbox.close()
  });
});
</script>

</html>