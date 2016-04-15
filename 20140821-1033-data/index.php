<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>1033 Military Equipment Inventory</title>
  	<meta name="description" content="1033 Military Equipment Inventory">
 	<meta name="author" content="Jeff Hargarten - StarTribune">
	<meta name="generator" content="BBEdit 10.5" />

  <link rel="stylesheet" href="../_common_resources/startribune_dataviz_styles.css" />
  
<style>
  	body { overflow-x:hidden; }
  	.title { font-size:1.3em; font-family:Popular; font-weight:bold; }
  	.contentBox { width:100%; margin-top:7px; }
    #leftSide { float:left; width:60%; }
  	#map { background-color:white; }
  	#selection { background-color:#fff; height:100px;  }
  	#nerdbox { background-color:#ddd;  height:300px; }
  	.filter { width:100%; height:50px; background-color:#ddd; }
  	.table { height:200px; background-color:#ddd; }
  	.breaker { clear:both; padding:20px; }

    .background { fill: none; pointer-events: all; }
    #states { fill: #aaa; }
    #states .active { fill: #333 !important; fill-opacity: 1 !important; }
    #state-borders { fill: none; stroke: #fff; stroke-width:.5px !important; stroke-linejoin: round; stroke-linecap: round; pointer-events: none; }
    .tooltip{ background-color:rgba(255,255,255,1); height: auto; width: auto; padding:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:0; border: 1px solid black; font-size:13px; font-family:Arial; }
    .zoom{ text-decoration:none;font-weight:bold;color:steelblue; float:left !important;}

    /*@media only screen and (min-width:650px) {*/
    path:hover{ fill:#333 !important; cursor:pointer; }
    #states .active:hover { fill:#333 !important; }
    /*}*/

    .aircraft { color:#4178BE; font-weight:900; fill:#4178BE;  }
    .firearms { color:#E71D32; font-weight:900; fill:#E71D32;  }
    .vehicles { color:#008571; font-weight:900; fill:#008571;  }
    .armor { color:#D74108; font-weight:900; fill:#D74108;  }
    .grenade { color:#4B8400; font-weight:900; fill:#4B8400;  }
    .nightvision { color:#9855D4; font-weight:900; fill:#9855D4;  }
    .other { color:#DB2780; font-weight:900; fill:#DB2780;  }

    .category { width:13%; display:inline-block; text-align:center; }
    .category:hover { cursor:pointer; color:#333; }
    .county { font-weight:900; font-size:1.5em; font-family:"Popular";}

    #agencyList { float:right; width:35%; }
    .agency { font-weight:bold; padding:10px; }
    .agency:hover { background-color:#ddd; cursor:pointer; }
    .selected { background-color:#333; color:#fff; }

    #search-criteria { margin:0; width:100%; height:30px; line-height:120%; font-size: 1em; -webkit-appearance: none;
    -webkit-border-radius:0; border-radius:0; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); color: rgba(0,0,0,0.75);   -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; background-color: #fff !important; font-family: inherit; border: 1px solid #ddd !important; }
    input:focus {outline:0 !important;}
    #search-criteria:focus { box-shadow: 0 0 5px #61bd1a; padding: 3px 0px 3px 3px; border: 1px solid #61bd1a; }
</style>

</head>
<body>
<div id="wrapper">

<div id="selection" class="contentBox">
<div class="category aircraft" rel="aircraft">Aircraft</div>
<div class="category firearms" rel="firearms">Firearms</div>
<div class="category vehicles" rel="vehicles">Vehicles</div>
<div class="category armor" rel="armor">Body Armor</div>
<div class="category grenade" rel="grenade">Grenade Launchers</div>
<div class="category nightvision" rel="nightvision">Night Vision</div>
<div class="category other" rel="other">Other Gear</div>
</div>

<div class="breaker"></div>

<div id="leftSide">
<div id="map">
<svg width="525" height="400" viewBox="0 0 525 400" preserveAspectRatio="xMidYMid"></svg>
</div>

<div id="nerdbox" class="contentBox">
<div class="county">Minnesota 1033 Acquisitions</div>
</div>

<a href='javascript:void(0);' class='zoom'>Reset View</a>
</div>

<div id="agencyList">
  <input type="text" id="search-criteria" placeholder="Search" />
</div>


</div>

</div>
</body>
       
<!--SCRIPTS-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="http://datamaps.github.com/scripts/datamaps-all.js"></script>


<script>
var aspect = 525 / 400, chart = $("#map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

var activeGear;

$(".category").click(function() {
   activeGear = $(this).attr("rel");
  });

</script>

<script>
jQuery.fn.d3Click = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Down = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

jQuery.fn.d3Up = function () {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);
  });
};

var width = 525,
    height = 400,
    centered;

var aircraft = "#4178BE";
var firearms = "#E71D32";
var vehicles = "#008571";
var armor = "#D74108";
var grenade = "#4B8400";
var nightvision = "#9855D4";
var other = "#DB2780";

var projection = d3.geo.mercator().scale([17000]).center([-87.9565,45.6524]);
var path = d3.geo.path()
                 .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);


var color1 = "#a7706b";
var color2 = "#79B0C5";
var basecolor = "#ddd";

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/cities.json", function(json) {

  //LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1tSKAkWN9kf4HMPpaGS2acfpAUYeWHMtWRK_94Lx07PA&sheet=inventory

<?php $jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=bZrGmw12voLFWqfnZzTb-fC9aw5-0Ud5Z5uu2jxsd0qUM5ND-bK0wCKB2DpJytvHlMpjKSP_KTWCVlzveUTJbN_p4l7QuBXGOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6T2OCkH3k_Rv1T5QroOz1laYX8yuxh3pGkkpEQgdl1Gmrcp6lPXghPQHQF6uxK0A-Qzr5ckcBEOoHde7IPxpUllA&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");
?>

var dataLoad = <?php echo $jsonData; ?>;

var data = dataLoad.inventory;

var nightvisionStuff = ["ILLUMINATOR,INFRARED","VIEWER,NIGHT VISION","THERMAL IMAGING SYSTEM","TELESCOPE,STRAIGHT","SIGHT,THERMAL","SIGHT,REFLEX","SIGHT,NIGHT VISION SNIPERSCOPE","RECEIVER,INFRARED","PARTS KIT,M68 SIGHT","PAN AND TILT ASSEMBLY,THERMAL VIEWER","NIGHT VISION SIGHT,","NIGHT VISION SIGHT ASSEMBLY","NIGHT VISION GOGGLE","MOUNT,VIEWER","MOUNT,SIGHT","LIGHT,INFRARED TRANSMITTER","LASER RANGE FINDER","IMAGE INTENSIFIER,NIGHT VISION","IMAGE INTENSIFIER TUBE,NIGHT VISION","ILLUMINATOR,INTEGRA","ILLUMINATOR,INFRARED","GOGGLES,NIGHTVISIO","FILTER,INFRARED LIGHT","DESC=VIEWER NIGHT VIS","DESC=SIMRAD GN1 NIGHTVISION","CONTROL,INFRARED SET","COLLIMATOR,INFRARED","CAMERA,INFRARED,INDUSTRIAL","BINOCULAR,ELECTRONI","BINOCULAR","BATTERY COMPARTMENT,NIGHT VISION VIEWER","BARREL AND FRONT SIGHT ASSEMBLY"];
var aircraftStuff = ["HELICOPTER,OBSERVATION"];
var vehiclesStuff = ["ILLUMINATOR,INFRARED","TRUCK,UTILITY","TRUCK,ARMORED","MINE RESISTANT VEHICLE"];
var firearmsStuff = ["ILLUMINATOR,INFRARED","STOCK,GUN,SHOULDER","SHOTGUN,12 GAGE,RIOT TYPE","RIFLE,7.62 MILLIMETER","RIFLE,5.56 MILLIMETER","REVOLVER,CALIBER .38 SPECIAL","PISTOL,CALIBER .45,AUTOMATIC"];
var armorStuff = ["ILLUMINATOR,INFRARED"];
var grenadeStuff = ["LAUNCHER,GRENADE"];
var medicalStuff = ["TOURNIQUET,NONPNEUMATIC",]
var otherStuff = ["WINDOW,VEHICULAR","WHEEL,PNEUMATIC TIRE","TRANSMISSION,MECHANICAL,VEHICULAR","TIRE,PNEUMATIC,VEHICULAR","TARGET HOLDING SET,TRAINING","STRAP CUTTER,RESCUE HOOK","SEARCHLIGHT","SAFETY GLASSES,REVISION SAWFLY EYEWEAR SYSTEM,REGULAR","RECREATIONAL AND GYMNASTIC EQUIPMENT","RECEIVER,CARTRIDGE","RADIO SET,PERSONNEL LOCATOR","PUMP,COOLING SYSTEM,ENGINE","POUCH,M4 THREE MAG","POUCH,FLASH BANG GRENADE","POUCH,CANTEEN-GENERAL PURPOSE","PACK,ASSAULT,MOLLE","OXIMETER,PULSE","NAVIGATION SET,SATELLITE SIGNALS","MOUNT,QUICK RELEASE ASSEMBLY","MAGAZINE,CARTRIDGE","MAGAZINE,CARTRIDGE","LITTER,NONRIGID,POLELESS","LITTER,DECONTAMINATION,MASS CASUALTY","LAPTOP COMPUTER","LAMP,INCANDESCENT","HEADSET ASSEMBLY","GUARD,HAND,GUN","GOGGLES,BALLISTIC","GLASS,LAMINATED","GENERATOR,ENGINE ACCESSORY","GAS MASK POUCH","FIRST AID KIT,UNIVERSAL","FIELD PACK","CLEANER,PRESSURE,SOLVENT-WATER","CARRIER,FIGHTING LOAD","CABLE ASSEMBLY,SPECIAL PURPOSE,ELECTRICAL","BORELIGHT SYSTEM,LASER","BOOTS,EXTREME COLD WEATHER","BOOTS,COLD WEATHER","BATTERY POWER CONDI","BANDAGE KIT,ELASTIC","BALACLAVA,HOOD COVER","BAG,MEDICAL AID","BAG DEPLOYMENT","AXLE,VEHICULAR,NONDRIVING","ARMAMENT TRAINING DEVICES","ADAPTER RAIL,WEAPON MOUNTED,M4"];

listDepartments();

var gear = nightvisionStuff;
var swatches = ["#D7AAFF","#AF6EE8","#734098","#562F72","#412356","#311A41"];

$(document).bind('DOMNodeInserted', function(event) {
 $(".agency").click(function() {
  $(".agency").removeClass("selected");
  $(this).addClass("selected");
    var city = $(this).text();

  $("[city='" + city + "']").d3Down();
  $("[city='" + city + "']").d3Up();
  $("[city='" + city + "']").d3Click();

 });

  $('#search-criteria').keyup(function(){
    $('.agency').hide();
    $(".agency").removeClass("selected");
    var txt = $('#search-criteria').val();
    $('.agency').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});
});

function aggregateGear(agency,gear){
   var count = d3.nest()
  .key(function(d) { return d.cityShort == agency && $.inArray(d.item , gear) > -1; })
  .rollup(function(v) { return d3.sum(v, function(d) { return d.quantity; }); })
  .entries(data);
  // console.log(count.length);
  $(".county").text(agency);
  if (count.length > 1) { return count[1].values; }
  else { return 1; }
}

function listDepartments(){
  var count = d3.nest()
  .key(function(d) { return d.cityShort; }).sortKeys(d3.ascending)
  .rollup(function(v) { return v.length; })
  .entries(data);
  console.log(count);

  for (var i=0; i < count.length; i++){
    $("#agencyList").append("<div class='agency'>" + count[i].key + "</div>");
  }
}

        g.append("g")
           .attr("id", "states")
           .selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("city",function(d) { 
            var city = d.properties.Name;
            return city.toUpperCase(); })
           .on("click", clicked)
           .attr("stroke-width", .5)
           .style("fill", function(d) {
            var city = d.properties.Name; 
            var whereAt = city.toUpperCase();
            var howMany = aggregateGear(whereAt,gear);

            if (howMany >= 50) { return swatches[6]; }
            else if (howMany >= 30) { return swatches[5]; }
            else if (howMany >= 20) { return swatches[4]; }
            else if (howMany >= 10) { return swatches[3]; }
            else if (howMany >= 5) { return swatches[2]; }
            else if (howMany > 1) { return swatches[1]; }
            else { return "#ddd"; }
           })
           .text(function(d) { return d.properties.Name; })
           .on("mousedown", function(d) { 
            var city = d.properties.Name; 
            var whereAt = city.toUpperCase();
            var howMany = aggregateGear(whereAt,gear);

            $("#nerdbox").html("<div class='county'>" + d.properties.Name + "</div><div>" + howMany + "</div>"); 
             $('.agency').hide();
             $(".agency").removeClass("selected");

             var txt = d.properties.Name;
             $('#search-criteria').val(txt);
             $('.agency').each(function(){
              if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
             $(this).show();
            }
          });
          })
           .style("stroke","white")
             .call(d3.helper.tooltip(
        function(d, i){
          return d.properties.Name;
        }
        ));


var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });


$(".zoom").click(function() {
  clicked2();
  $("#nerdbox").html("<div class='county'>Minnesota 1033 Acquisitions</div>");
  $('.agency').show();
  $(".agency").removeClass("selected");
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

function update(stuff){
 
var factor = stuff;

return factor;
                               
}

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
</html>