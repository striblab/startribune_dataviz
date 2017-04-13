!function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=r[s]={exports:{}};t[s][0].call(c.exports,function(e){var r=t[s][1][e];return o(r||e)},c,c.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){var n=$("#map svg");$(window).on("resize",function(){var e=n.parent().width();n.attr("width",e),n.attr("height",e/1.05)});var o="#c7e9c0",i="#74c476",s="#006d2c",a="#002911";d3.csv("data/counts.csv",function(e,t){function r(e){var t,r,n;if(e&&c!==e){var o=f.centroid(e);t=o[0],r=o[1],n=4,c=e}else t=p/2,r=u/2,n=1,c=null;m.selectAll("path").classed("faded",!0).classed("active",c&&function(e){return e===c}),m.transition().duration(750).attr("transform","translate("+p/2+","+u/2+")scale("+n+")translate("+-t+","+-r+")").style("stroke-width",1.5/n+"px")}function n(e){var t,r,n;if(document.getElementById("infobox").innerHTML="Many of those arrested for drug possession in North Minneapolis don't live there and come from zip codes spanning the Metro Area.",e&&c!==e){var o=f.centroid(e);t=o[0],r=o[1],n=1,c=e}else t=p/2,r=u/2,n=1,c=null;m.selectAll("path").classed("faded",!1).classed("active",c&&function(e){return e===c}),m.transition().duration(750).attr("transform","translate("+p/2+","+u/2+")scale("+n+")translate("+-t+","+-r+")").style("stroke-width",1.5/n+"px")}function l(e){d3.select("#chart svg").datum(e).transition().duration(500).call(g),nv.utils.windowResize(g.update)}t.forEach(function(e){e.offense=e.offense,e.zip=e.zip,e.count=+e.count});var c,p=630,u=600,d=d3.geo.albersUsa().scale(24500).translate([-700,3e3]),f=d3.geo.path().projection(d),v=(d3.geo.albersUsa().scale(24500).translate([-750,3100]),d3.geo.path().projection(d)),h=d3.select("#map svg").attr("width",p).attr("height",u);h.append("rect").attr("class","background").attr("width",p);var m=h.append("g"),M=document.getElementById("infobox");M.innerHTML="Most of those arrested for drug possession in North Minneapolis don't live there and come from zip codes spanning the Metro Area.",d3.json("shapefiles/zips.json",function(e,n){function c(e){var t=document.getElementById("infobox");d3.csv("data/counts.csv",function(r,n){n.forEach(function(e){e.offense=e.offense,e.zip=e.zip,e.count=+e.count}),d3.select("#map svg").selectAll("path").on("mousedown",function(r,o){if(null!=r.properties.NAME4)var i=r.properties.NAME4+" - "+r.properties.NAME2;else if(null!=r.properties.NAME3)var i=r.properties.NAME3+" - "+r.properties.PREFNAME;else if(null!=r.properties.NAME2)var i=r.properties.NAME2;else var i=r.properties.PREFNAME;if(t.innerHTML="<div class='county_name'>"+r.properties.ZIP5+" - "+i+"</div><div class='prevalence'>no data</div>","median"==e)for(var o=0;o<n.length;o++)n[o].offense==e&&r.properties.ZIP5==n[o].zip&&(console.log(e),t.innerHTML="<div class='county_name'>"+r.properties.ZIP5+" - "+i+"</div><div class='prevalence'>$"+d3.format(",.2f")(n[o].count)+"</div> median income");else for(var o=0;o<n.length;o++)n[o].offense==e&&r.properties.ZIP5==n[o].zip&&(console.log(e),t.innerHTML="<div class='county_name'>"+r.properties.ZIP5+" - "+i+"</div><div class='prevalence'>"+n[o].count+"</div> drug arrests in North Minneapolis")}).style("fill",function(t,r){if("median"==e){for(var r=0;r<n.length;r++)if(n[r].offense==e&&t.properties.ZIP5==n[r].zip){if(n[r].count>=1e5)return a;if(n[r].count>=5e4)return s;if(n[r].count>=3e4)return i;if(n[r].count>14e3)return o}}else for(var r=0;r<n.length;r++)if(n[r].offense==e&&t.properties.ZIP5==n[r].zip){if(n[r].count>=300)return a;if(n[r].count>=75)return s;if(n[r].count>=15)return i;if(n[r].count>0)return o}return"#ddd"})})}m.append("g").attr("id","states").selectAll("path").data(n.features).enter().append("path").attr("d",v).attr("class",function(e,t){return"z"+e.properties.ZIP5}).on("click",r).style("fill",function(e,r){for(var r=0;r<t.length;r++)if("all"==t[r].offense&&e.properties.ZIP5==t[r].zip){if(t[r].count>=300)return a;if(t[r].count>=75)return s;if(t[r].count>=15)return i;if(t[r].count>0)return o}return"#ddd"}).on("mousedown",function(e,r){if(null!=e.properties.NAME4)var n=e.properties.NAME4+" - "+e.properties.NAME2;else if(null!=e.properties.NAME3)var n=e.properties.NAME3+" - "+e.properties.PREFNAME;else if(null!=e.properties.NAME2)var n=e.properties.NAME2;else var n=e.properties.PREFNAME;M.innerHTML="<div class='county_name'>"+e.properties.ZIP5+" - "+n+"</div><div class='prevalence'>no data</div>";for(var r=0;r<t.length;r++)"all"==t[r].offense&&e.properties.ZIP5==t[r].zip&&(M.innerHTML="<div class='county_name'>"+e.properties.ZIP5+" - "+n+"</div><div class='prevalence'>"+t[r].count+"</div> drug arrests in North Minneapolis")}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(e,t){if(null!=e.properties.NAME4)var r=e.properties.NAME4+" - "+e.properties.NAME2;else if(null!=e.properties.NAME3)var r=e.properties.NAME3+" - "+e.properties.PREFNAME;else if(null!=e.properties.NAME2)var r=e.properties.NAME2;else var r=e.properties.PREFNAME;return"<b>"+e.properties.ZIP5+"</b> - "+r})),m.append("path"),$("#all").css("background-color","#333"),$(".myButton2").click(function(){$(".myButton2").css("background-color","#61bd1a"),$(this).css("background-color","#333")}),$("#all").click(function(){l(A),c("all")}),$("#narc").click(function(){l(E),c("NARC")}),$("#mj").click(function(){l(N),c("MJINMV")}),$("#median").click(function(){l(N),c("median")})});d3.behavior.zoom().on("zoom",function(){m.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),m.selectAll("circle").attr("d",f.projection(d)),m.selectAll("path").attr("d",f.projection(d))});$(".zoom").click(function(){n()}),$(".myButton2").mousedown(function(){n()}),d3.helper={},d3.helper.tooltip=function(e){return function(t){var r,n=d3.select("body").node();t.on("mouseover",function(t,o){d3.select("body").selectAll("div.tooltip").remove(),r=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(n);r.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,o)}).on("mousemove",function(t,o){var i=d3.mouse(n);r.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var s=e(t,o)||"";r.html(s)}).on("mouseout",function(e,t){r.remove()})}};var g;nv.addGraph(function(){return g=nv.models.multiBarChart().x(function(e){return e.label}).y(function(e){return e.value}).transitionDuration(350).reduceXTicks(!0).color(["#31a354"]).showLegend(!1).showControls(!1).tooltip(function(e,t,r,n,o){return"<h3>"+t+"</h3><span class='pos_change'>"+r+"</span> <span>"+e+"</span>"}),g.yAxis.tickFormat(d3.format(",%")),d3.select("#chart svg").datum(A).call(g),nv.utils.windowResize(g.update),g});var A=[{key:"of all drug arrests",values:[{label:"North Minneapolis",value:.4436},{label:"Surrounding Area",value:.5563}]}],E=[{key:"of narcotic arrests",values:[{label:"North Minneapolis",value:.45},{label:"Surrounding Area",value:.55}]}],N=[{key:"of marijuana arrests",values:[{label:"North Minneapolis",value:.4326},{label:"Surrounding Area",value:.5673}]}]})},{}]},{},[1]);