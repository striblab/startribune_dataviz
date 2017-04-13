!function e(t,l,a){function o(r,s){if(!l[r]){if(!t[r]){var i="function"==typeof require&&require;if(!s&&i)return i(r,!0);if(n)return n(r,!0);throw new Error("Cannot find module '"+r+"'")}var c=l[r]={exports:{}};t[r][0].call(c.exports,function(e){var l=t[r][1][e];return o(l||e)},c,c.exports,e,t,l,a)}return l[r].exports}for(var n="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(e,t,l){function a(e){d3.select("#chart1 svg").datum(e).transition().duration(500).call(r),nv.utils.windowResize(r.update)}function o(e){var t;if(e&&s!==e){var l=f.centroid(e);l[0],l[1],t=4,s=e}else v/2,p/2,t=1,s=null;m.selectAll("path").classed("faded",!0).classed("active",s&&function(e){return e===s}),m.transition().duration(750).style("stroke-width",1.5/t+"px")}function n(e){var t;if(document.getElementById("infobox").innerHTML="<div class='county_name'>Minnesota</div><div class='prevalence'>14.4%  smoke</div>",e&&s!==e){var l=f.centroid(e);l[0],l[1],t=4,s=e}else t=1,s=null;m.selectAll("path").classed("faded",!1).classed("active",s&&function(e){return e===s}),m.transition().duration(750).style("stroke-width",1.5/t+"px")}var r=$("#map svg");$(window).on("resize",function(){var e=r.parent().width();r.attr("width",e),r.attr("height",e/1)}),$(document).ready(function(){$("#national").css("background-color","#333"),$("#national").click(function(){$(".myButton").css("background-color","#888"),$("#national").css("background-color","#333"),a(c)}),$("#age").click(function(){$(".myButton").css("background-color","#888"),$("#age").css("background-color","#333"),a(i)}),$("#other").click(function(){$(".myButton").css("background-color","#888"),$("#other").css("background-color","#333"),a(d)}),$("#second").click(function(){$(".myButton").css("background-color","#888"),$("#second").css("background-color","#333"),a(u)})});var r;nv.addGraph(function(){return r=nv.models.multiBarHorizontalChart().x(function(e){return e.label}).y(function(e){return e.value}).margin({top:30,right:20,bottom:50,left:100}).showValues(!1).tooltips(!0).transitionDuration(350).tooltip(function(e,t,l,a,o){return"<h3>"+t+"</h3><p>"+l+" in "+e+"</p>"}).showControls(!1),r.yAxis.tickFormat(d3.format(",.1%")),d3.select("#chart1 svg").datum(c).call(r),nv.utils.windowResize(r.update),r});var s,i=[{key:"2010",color:"#BCBCBC",values:[{label:"Ages 18-24",value:.218},{label:"Ages 25-44",value:.197},{label:"Ages 45-64",value:.149},{label:"Ages 65+",value:.054}]},{key:"2014",color:"#2B2B2B",values:[{label:"Ages 18-24",value:.153},{label:"Ages 25-44",value:.187},{label:"Ages 45-64",value:.142},{label:"Ages 65+",value:.054}]}],c=[{key:"U.S.",color:"#BCBCBC",values:[{label:"1999",value:.253},{label:"2003",value:.215},{label:"2007",value:.191},{label:"2010",value:.17},{label:"2014",value:.161}]},{key:"MN",color:"#2B2B2B",values:[{label:"1999",value:.221},{label:"2003",value:.191},{label:"2007",value:.17},{label:"2010",value:.161},{label:"2014",value:.144}]}],u=[{key:"2010",color:"#BCBCBC",values:[{label:"Cigar",value:.032},{label:"Pipe",value:.006},{label:"Waterpipe",value:.007},{label:"Smokeless",value:.044},{label:"E-cigarettes",value:.007}]},{key:"2014",color:"#2B2B2B",values:[{label:"Cigar",value:.029},{label:"Pipe",value:.007},{label:"Waterpipe",value:.007},{label:"Smokeless",value:.044},{label:"E-cigarettes",value:.059}]}],d=[{key:"2014",color:"#BCBCBC",values:[{label:"Building Entrance",value:.204},{label:"Bar Patio",value:.128},{label:"Parking Lot",value:.091},{label:"Gambling Venue",value:.063},{label:"Bus Stop",value:.031},{label:"Park",value:.025}]}],v=630,p=600,b=d3.geo.albersUsa().scale(5037).translate([100,990]),f=d3.geo.path().projection(b),g=d3.select("#map svg").attr("width",v).attr("height",p);g.append("rect").attr("class","background").attr("width",v).attr("height",p);var m=g.append("g"),h=document.getElementById("infobox");h.innerHTML="<div class='county_name'>Minnesota</div><div class='prevalence'>14.4% smoke</div>",d3.json("shapefiles/regions.json",function(e,t){m.append("g").attr("id","states").selectAll("path").data(t.features).enter().append("path").attr("d",f).on("click",o).style("fill",function(e,t){return e.properties.PREV>=18?"#002911":e.properties.PREV>=15?"#006d2c":e.properties.PREV>=13?"#74c476":e.properties.PREV>=12?"#c7e9c0":void 0}).on("mousedown",function(e,t){h.innerHTML="<div class='county_name'>"+e.properties.COUNTYNAME+" Region</div><div class='prevalence'>"+e.properties.PREV+"%  smoke</div>"}).style("stroke-width","1.5px").style("stroke","#fff").call(d3.helper.tooltip(function(e,t){return"<b>"+e.properties.COUNTYNAME+"</b>"})),m.append("path").attr("id","state-borders").attr("d",f)});d3.behavior.zoom().on("zoom",function(){m.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),m.selectAll("circle").attr("d",f.projection(b)),m.selectAll("path").attr("d",f.projection(b))});$(".zoom").click(function(){n()}),d3.helper={},d3.helper.tooltip=function(e){return function(t){var l,a=d3.select("body").node();t.on("mouseover",function(t,o){d3.select("body").selectAll("div.tooltip").remove(),l=d3.select("body").append("div").attr("class","tooltip");var n=d3.mouse(a);l.style("left",n[0]+10+"px").style("top",n[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,o)}).on("mousemove",function(t,o){var n=d3.mouse(a);l.style("left",n[0]+10+"px").style("top",n[1]-15+"px");var r=e(t,o)||"";l.html(r)}).on("mouseout",function(e,t){l.remove()})}}},{}]},{},[1]);