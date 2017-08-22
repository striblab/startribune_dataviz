!function e(r,a,t){function n(s,c){if(!a[s]){if(!r[s]){var o="function"==typeof require&&require;if(!c&&o)return o(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=a[s]={exports:{}};r[s][0].call(d.exports,function(e){var a=r[s][1][e];return n(a||e)},d,d.exports,e,r,a,t)}return a[s].exports}for(var i="function"==typeof require&&require,s=0;s<t.length;s++)n(t[s]);return n}({1:[function(e,r,a){$.urlParam=function(e){var r=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=r?r[1]||0:null};var t=$.urlParam("chart");null!=t&&($(".slide").hide(),$("#"+t).show()),d3.json("./data/diff.json",function(e,r){d3.json("./shapefiles/counties.json",function(e,a){function t(e,r,a){if("change"==r){for(var t="",n=0,i=0;i<a.length;i++)String(e.properties.COUNTYNAME).toUpperCase()==a[i].county&&(n=a[i].cabin_share_diff,a[i].cabin_share_diff>=.1?t="gray5":a[i].cabin_share_diff>=.05?t="gray4":a[i].cabin_share_diff>=.02?t="gray3":a[i].cabin_share_diff>=.01?t="gray2":a[i].cabin_share_diff>0?t="gray1":0==a[i].cabin_share_diff?t="none":a[i].cabin_share_diff<=-.05?t="red5":a[i].cabin_share_diff<=-.02?t="red3":a[i].cabin_share_diff<0&&(t="red1"));return"<div class='districtName'>"+e.properties.COUNTYNAME+" County</div><div class='"+t+"'>"+d3.format("+%")(n)+" change</div>"}if("portion"==r){for(var t="",n=0,i=0;i<a.length;i++)String(e.properties.COUNTYNAME).toUpperCase()==a[i].county&&(n=a[i].cabin_share_2016,a[i].cabin_share_2016>=.5?t="gray5":a[i].cabin_share_2016>=.3?t="gray4":a[i].cabin_share_2016>=.2?t="gray3":a[i].cabin_share_2016>=.1?t="gray2":a[i].cabin_share_2016>0&&(t="gray1"));return"<div class='districtName'>"+e.properties.COUNTYNAME+" County</div>Cabins are <span class='"+t+"'>"+d3.format("%")(n)+"</span> of residential property taxes"}}function n(e,r,a,n,i,s,c,o){function d(e){if(e&&l!==e){var r=_.centroid(e);r[0],r[1],1,l=e}else f/2,u/2,1,l=null;b.selectAll("path").classed("faded",!1).classed("active",l&&function(e){return e===l})}var l,f=320,u=400;if("us"==s)var h=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==s)var h=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==s)var h=d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]);var _=d3.geo.path().projection(h),p=d3.select(e+" svg").attr("width",f).attr("height",u);p.append("rect").attr("class","background").attr("width",f).attr("height",u);var b=p.append("g");d3.json("shapefiles/"+n,function(e,r){b.append("g").attr("class","states").selectAll("path").data(r.features).enter().append("path").attr("d",_).attr("class",function(e){if("change"==i){for(var r=0;r<c.length;r++)if(String(e.properties.COUNTYNAME).toUpperCase()==c[r].county){if(c[r].cabin_share_diff>=.1)return"gray5";if(c[r].cabin_share_diff>=.05)return"gray4";if(c[r].cabin_share_diff>=.02)return"gray3";if(c[r].cabin_share_diff>=.01)return"gray2";if(c[r].cabin_share_diff>0)return"gray1";if(0==c[r].cabin_share_diff)return"none";if(c[r].cabin_share_diff<=-.05)return"red5";if(c[r].cabin_share_diff<=-.02)return"red3";if(c[r].cabin_share_diff<0)return"red1"}}else if("portion"==i)for(var r=0;r<c.length;r++)if(String(e.properties.COUNTYNAME).toUpperCase()==c[r].county){if(c[r].cabin_share_2016>=.5)return"gray5";if(c[r].cabin_share_2016>=.3)return"gray4";if(c[r].cabin_share_2016>=.2)return"gray3";if(c[r].cabin_share_2016>=.1)return"gray2";if(c[r].cabin_share_2016>0)return"gray1";if(0==c[r].cabin_share_2016)return"none"}}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(e,r){return t(e,i,c)})),b.append("path").attr("id","state-borders").attr("d",_)});d3.behavior.zoom().on("zoom",function(){b.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),b.selectAll("circle").attr("d",_.projection(h)),b.selectAll("path").attr("d",_.projection(h))});$(".zoom, .switch, #close, .mapSwitch").click(function(){d(),$("#filter input").val(""),$(".district").removeClass("selected"),$("#infobox").hide(),d3.selectAll(".map rect").classed("faded",!1),d3.selectAll(".map rect").classed("active",!1),$(".rightSide").show()}),$(".mapSwitch").click(function(){$("#filter input").val("")})}function i(e,r,a,t,n){d3.select(e).selectAll(".card").sort(function(e,r){if("county"==t){if("descend"==n)return d3.descending(e.county,r.county);if("ascend"==n)return d3.ascending(e.county,r.county)}if("cabin_share_2016"==t){if("descend"==n)return d3.descending(e.cabin_share_2016,r.cabin_share_2016);if("ascend"==n)return d3.ascending(e.cabin_share_2016,r.cabin_share_2016)}if("cabin_share_diff"==t){if("descend"==n)return d3.descending(e.cabin_share_diff,r.cabin_share_diff);if("ascend"==n)return d3.ascending(e.cabin_share_diff,r.cabin_share_diff)}}).transition().duration(500)}var s=r.diff;d3.helper={},d3.helper.tooltip=function(e){return function(r){var a,t=d3.select("body").node();r.on("mouseover",function(r,n){d3.select("body").selectAll("div.tooltip").remove(),a=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(t);a.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001);e(r,n)}).on("mousemove",function(r,n){var i=d3.mouse(t);a.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var s=e(r,n)||"";a.html(s)}).on("mouseout",function(e,r){a.remove()})}},n("#map","#infobox","#chart","counties.json","change","mn",s,0),n("#map2","#infobox","#chart","counties.json","portion","mn",s,0),$(".scrollToTop").click(function(){return $("#countyList").animate({scrollTop:0},800),!1}),function(){d3.select("#countyList").selectAll(".card").data(s.sort(function(e,r){return d3.descending(e.cabin_share_2016,r.cabin_share_2016)})).enter().append("div").attr("class",function(e){return"card"}).html(function(e){var r=d3.scale.linear().domain([0,.25,.5]).range(["#dddddd","#969696","#252525"]),a=r(e.cabin_share_2016),t=d3.scale.linear().domain([-.05,0,.1]).range(["#9C0004","#dddddd","#252525"]),n=t(e.cabin_share_diff);return"<div class='tableCell county'>"+e.county+"</div><div class='tableCell county pct' style='background-color:"+a+";'>"+d3.format("%")(e.cabin_share_2016)+"</div><div class='tableCell cabin_share_diff pct' style='background-color:"+n+";'>"+d3.format("%")(e.cabin_share_diff)+"</div>"}),$(document).ready(function(){$("#filter_box").on("keyup search",function(e){$(".card").hide();var r=$("#filter_box").val();$(".card").each(function(){-1!=$(this).text().toUpperCase().indexOf(r.toUpperCase())&&$(this).show()});var a=$(".card:visible").length;$("#results").html(a)}),$(".switch").click(function(){$(".switch").removeClass("selected"),$(this).addClass("selected"),$(".card").hide(),$("."+$(this).attr("data")).show()})}),$(".hSort").click(function(){if($(".hSort").removeClass("selected"),$(this).addClass("selected"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var e="ascend"}else if($(this).hasClass("selected")){$(this).addClass("toggled");var e="descend"}i("#countyList",null,s,$(this).attr("data"),e)})}()})})},{}]},{},[1]);