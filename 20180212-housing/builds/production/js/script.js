!function e(t,i,o){function n(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return n(i||e)},c,c.exports,e,t,i,o)}return i[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(e,t,i){d3.json("./shapefiles/mn_places.json",function(e,t){d3.json("./shapefiles/wi_places.json",function(e,i){d3.json("./shapefiles/mpls_nb.json",function(e,o){d3.json("./shapefiles/stp_nb.json",function(e,n){d3.json("./data/cities.json",function(e,r){function a(e,t,i,o,n){d3.select(e).selectAll(".row").sort(function(e,t){if("name"==o){if("descend"==n)return d3.descending(e.name,t.name);if("ascend"==n)return d3.ascending(e.name,t.name)}if("index"==o){if("descend"==n)return d3.descending(e.IndexScore,t.IndexScore);if("ascend"==n)return d3.ascending(e.IndexScore,t.IndexScore)}}).transition().duration(500)}function s(){u.jumpTo({center:[-93.28469849,45.01832962],zoom:7.8,pitch:0,bearing:0}),$("#filter_box").val(""),$(".row").show()}function l(e){var t=c.filter(function(t){return t.name==e});-1!=String(e).indexOf("(MPLS)")?$("#districtName").html(t[0].CityState+", Minneapolis, MN"):-1!=String(e).indexOf("(STP)")?$("#districtName").html(t[0].CityState+", St. Paul, MN"):$("#districtName").html(t[0].CityState);var i="#888888";t[0].IndexScore>=300?i="#993404":t[0].IndexScore>=240?i="#d95f0e":t[0].IndexScore>=180?i="#fe9929":t[0].IndexScore>=120?i="#fec44f":t[0].IndexScore>=50&&(i="#fee391"),$("#districtName").css("background-color",i),$("#indexRow").css("border","3px solid "+i),$("#days").html(t[0].DaysMarket),$("#change").html(d3.format("+%")(t[0].PctChgfromAvg)),$("#distressed").html(d3.format("%")(t[0].PctDistressed)),$("#ppsf").html(d3.format("%")(t[0].PctOrigPrice)),$("#income").html(d3.format("$,.0f")(t[0].MedianHHincome)),$("#homes").html(d3.format("%")(t[0].PctSingleFamilyUnits)),$("#apartments").html(d3.format("%")(t[0].PctLargeApartmentBldgs)),$("#kids").html(d3.format("%")(t[0].PctKids)),$("#renters").html(d3.format("%")(t[0].PctRenters)),console.log(t[0].PPSF2016),P.load({columns:[["x","2003-01-01","2004-01-01","2005-01-01","2006-01-01","2007-01-01","2008-01-01","2009-01-01","2010-01-01","2011-01-01","2012-01-01","2013-01-01","2014-01-01","2015-01-01","2016-01-01","2017-01-01"],["PPSF",t[0].PPSF2003,t[0].PPSF2004,t[0].PPSF2005,t[0].PPSF2006,t[0].PPSF2007,t[0].PPSF2008,t[0].PPSF2009,t[0].PPSF2010,t[0].PPSF2011,t[0].PPSF2012,t[0].PPSF2013,t[0].PPSF2014,t[0].PPSF2015,t[0].PPSF2016,t[0].PPSF2017]]})}var c=r.cities,d=!1;d3.select("#cities").selectAll(".row").data(c.sort(function(e,t){return t.IndexScore-e.IndexScore})).enter().append("div").attr("class",function(e){return"Richfield"==e.name?"row selected":"row "}).style("background-color",function(e){var t="#888888";return e.IndexScore>=300?t="#993404":e.IndexScore>=240?t="#d95f0e":e.IndexScore>=180?t="#fe9929":e.IndexScore>=120?t="#fec44f":e.IndexScore>=0&&(t="#fee391"),t}).attr("latitude",function(e){return e.latitude}).attr("longitude",function(e){return e.longitude}).html(function(e,t){return"<div class='col name'>"+e.name+"</div><div class='col score'>"+e.IndexScore+"</div>"}),$(document).ready(function(){$(".row").hide();var e=$("#filter_box").val();$(".row").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()}),$(".row").each(function(){-1==$(this).text().toUpperCase().indexOf("(MPLS)")&&-1==$(this).text().toUpperCase().indexOf("(STP)")||$(this).hide()}),$("#filter_box").on("keyup search",function(e){$(".row").hide();var t=$("#filter_box").val();$(".row").each(function(){-1!=$(this).text().toUpperCase().indexOf(t.toUpperCase())&&$(this).show()})}),$(".th").click(function(){if($(".th").removeClass("selected3"),$(this).addClass("selected3"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var e="ascend"}else if($(this).hasClass("selected3")){$(this).addClass("toggled");var e="descend"}a("#cities",null,c,$(this).attr("data"),e)}),$(".row").click(function(){$(".row").removeClass("selected"),$(this).addClass("selected");var e=$(this).attr("longitude"),t=$(this).attr("latitude");-1!=$(this).find(".name").text().indexOf("(MPLS)")||-1!=$(this).find(".name").text().indexOf("(STP)")?u.jumpTo({center:[e,t],zoom:13.5,pitch:0,bearing:0}):u.jumpTo({center:[e,t],zoom:11.5,pitch:0,bearing:0}),l($(this).find(".name").text())})});var f=new mapboxgl.LngLat(-93.716125,44.643254),p=new mapboxgl.LngLat(-92.763062,45.350215);new mapboxgl.LngLatBounds(f,p);mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var u=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n",center:[-93.28469849,45.01832962],zoom:7.8,minZoom:7.8});u.addControl(new mapboxgl.NavigationControl),u.scrollZoom.disable(),u.on("load",function(){$(".onoffswitch :checkbox").change(function(){this.checked?(d=!0,u.setLayoutProperty("stpnb-layer","visibility","none"),u.setLayoutProperty("mplsnb-layer","visibility","none"),u.setLayoutProperty("mncities-layer","visibility","visible"),u.setLayoutProperty("wicities-layer","visibility","visible"),s(),l("Richfield"),$(".row").removeClass("selected"),$(".row:contains('Richfield')").addClass("selected"),$(".row").show(),$(".row").each(function(){-1==$(this).text().toUpperCase().indexOf("(MPLS)")&&-1==$(this).text().toUpperCase().indexOf("(STP)")||$(this).hide()}),$("#cities").animate({scrollTop:0},800)):(d=!1,u.setLayoutProperty("stpnb-layer","visibility","visible"),u.setLayoutProperty("mplsnb-layer","visibility","visible"),u.setLayoutProperty("mncities-layer","visibility","none"),u.setLayoutProperty("wicities-layer","visibility","none"),u.jumpTo({center:[-93.202515,44.969656],zoom:9.8,pitch:0,bearing:0}),l("(MPLS) Bottineau"),$(".row").removeClass("selected"),$(".row:contains('(MPLS) Bottineau')").addClass("selected"),$(".row").hide(),$(".row").each(function(){-1==$(this).text().toUpperCase().indexOf("(MPLS)")&&-1==$(this).text().toUpperCase().indexOf("(STP)")||$(this).show()}),$("#cities").animate({scrollTop:0},800)),console.log(d)}),$(".zoom").click(function(){u.jumpTo({center:[-93.28469849,45.01832962],zoom:7.8,pitch:0,bearing:0}),$("#cities").animate({scrollTop:0},800),$(".row").removeClass("selected"),$(".row:contains('Richfield')").addClass("selected"),l("Richfield")}),u.addSource("mncities",{type:"geojson",data:t}),u.addLayer({id:"mncities-layer",interactive:!0,source:"mncities",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.8,"fill-color":{property:"index_IndexScore",type:"interval",stops:[[0,"#888888"],[50,"#fee391"],[120,"#fec44f"],[180,"#fe9929"],[240,"#d95f0e"],[300,"#993404"]]},"fill-outline-color":"rgba(255, 255, 255, 0.1)"}},"place-neighbourhood"),u.addSource("wicities",{type:"geojson",data:i}),u.addLayer({id:"wicities-layer",interactive:!0,source:"wicities",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.8,"fill-color":{property:"index_IndexScore",type:"interval",stops:[[0,"#888888"],[50,"#fee391"],[120,"#fec44f"],[180,"#fe9929"],[240,"#d95f0e"],[300,"#993404"]]},"fill-outline-color":"rgba(255, 255, 255, 0)"}},"place-neighbourhood"),u.addSource("mplsnb",{type:"geojson",data:o}),u.addLayer({id:"mplsnb-layer",interactive:!0,source:"mplsnb",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.8,"fill-color":{property:"nbindex_IndexScore",type:"interval",stops:[[0,"#888888"],[50,"#fee391"],[120,"#fec44f"],[180,"#fe9929"],[240,"#d95f0e"],[300,"#993404"]]},"fill-outline-color":"rgba(255, 255, 255, 0.4)"}},"place-neighbourhood"),u.addSource("stpnb",{type:"geojson",data:n}),u.addLayer({id:"stpnb-layer",interactive:!0,source:"stpnb",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.8,"fill-color":{property:"nbindex_IndexScore",type:"interval",stops:[[0,"#888888"],[50,"#fee391"],[120,"#fec44f"],[180,"#fe9929"],[240,"#d95f0e"],[300,"#993404"]]},"fill-outline-color":"rgba(255, 255, 255, 0.4)"}},"place-neighbourhood"),u.setLayoutProperty("stpnb-layer","visibility","none"),u.setLayoutProperty("mplsnb-layer","visibility","none")});var m=c.filter(function(e){return"Richfield"==e.name}),h={top:40,right:40,bottom:30,left:40},P=c3.generate({bindto:"#chart",padding:h,data:{x:"x",columns:[["x","2003-01-01","2004-01-01","2005-01-01","2006-01-01","2007-01-01","2008-01-01","2009-01-01","2010-01-01","2011-01-01","2012-01-01","2013-01-01","2014-01-01","2015-01-01","2016-01-01","2017-01-01"],["PPSF",m[0].PPSF2003,m[0].PPSF2004,m[0].PPSF2005,m[0].PPSF2006,m[0].PPSF2007,m[0].PPSF2008,m[0].PPSF2009,m[0].PPSF2010,m[0].PPSF2011,m[0].PPSF2012,m[0].PPSF2013,m[0].PPSF2014,m[0].PPSF2015,m[0].PPSF2016,m[0].PPSF2016]],names:{PPSF:"Price per sq. ft."},colors:{PPSF:"#333333"}},legend:{show:!1},axis:{y:{max:400,min:0,padding:{bottom:0,top:0},tick:{count:4,format:d3.format("$.0f")}},x:{type:"timeseries",padding:{right:0,left:0},tick:{format:"%Y"}}}});d3.select("#chart svg").append("text").attr("x",50).attr("y",50).style("text-anchor","right").text("Price per square foot over time"),l("Richfield")})})})})})},{}]},{},[1]);