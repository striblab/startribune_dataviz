!function a(t,n,e){function o(r,d){if(!n[r]){if(!t[r]){var p="function"==typeof require&&require;if(!d&&p)return p(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var m=n[r]={exports:{}};t[r][0].call(m.exports,function(a){var n=t[r][1][a];return o(n||a)},m,m.exports,a,t,n,e)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<e.length;r++)o(e[r]);return o}({1:[function(a,t,n){function e(a){this.dd=a,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}e.prototype={initEvents:function(){var a=this;a.dd.on("click",function(a){return $(this).toggleClass("active"),!1}),a.opts.on("click",function(){var t=$(this);a.val=t.text(),a.index=t.index(),a.placeholder.text(a.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new e($("#dd")),new e($("#ddY"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})}),d3.json("./data/weather2011.json",function(a,t){d3.json("./data/weather2012.json",function(a,t){d3.json("./data/weather2013.json",function(a,n){d3.json("./data/weather2014.json",function(a,e){d3.json("./data/weather2015.json",function(a,o){d3.json("./data/weather2016.json",function(a,i){d3.json("./data/weather2017.json",function(a,r){d3.json("./data/avgTemp.json",function(a,d){d3.json("./data/coolingDegree.json",function(a,p){d3.json("./data/over90.json",function(a,m){d3.json("./data/dewpointHighs.json",function(a,l){d3.json("./data/heatingDegree.json",function(a,u){d3.json("./data/hottestDecade.json",function(a,h){d3.json("./data/annualPrecip.json",function(a,s){d3.json("./data/annualSnow.json",function(a,c){data2011=t.weather2011,data2012=t.weather2012,data2013=n.weather2013,data2014=e.weather2014,data2015=o.weather2015,data2016=i.weather2016,data2017=r.weather2017,dataTmp=d.avgTemp,dataCool=p.coolingDegree,data90=m.over90,dataDew=l.dewpointHighs,dataHeat=u.heatingDegree,dataDecade=h.hottestDecade,dataPrecip=s.annualPrecip,dataSnow=c.annualSnow,$(".years li").on("click",function(){$(".thisYear").text($(this).attr("year"));var a=$(this).attr("year");if("2011"==a)var t=data2011;if("2012"==a)var t=data2012;if("2013"==a)var t=data2013;if("2014"==a)var t=data2014;if("2015"==a)var t=data2015;if("2016"==a)var t=data2016;if("2017"==a)var t=data2017;var n=Math.max.apply(Math,t.map(function(a){return a.Tmax})),e=Math.min.apply(Math,t.map(function(a){return a.Tmin}));$("#maxTemp").html(Math.round(n)+"&deg;"),$("#minTemp").html(Math.round(e)+"&deg;");var o=Math.max.apply(Math,t.map(function(a){return a.SnowFall})),i=Math.min.apply(Math,t.map(function(a){return a.SnowFall}));$("#maxSnow").html(Math.round(o)+"in"),$("#minSnow").html(Math.round(i)+"in");var r=Math.max.apply(Math,t.map(function(a){return a.PrecipTotal})),d=Math.min.apply(Math,t.map(function(a){return a.PrecipTotal}));$("#maxPrecip").html(Math.round(r)+"in"),$("#minPrecip").html(Math.round(d)+"in");var p=Math.max.apply(Math,t.map(function(a){return a.Max5Speed})),m=Math.min.apply(Math,t.map(function(a){return a.Max5Speed}));$("#maxWind").html(Math.round(p)+"mph"),$("#minWind").html(Math.round(m)+"mph"),Y.load({json:t,keys:{x:"DATE1",value:["Tmax","Tmin","Tavg"]},unload:["Tmax","Tmin","Tavg"]}),q.load({json:t,keys:{x:"DATE1",value:["SnowFall"]},unload:["SnowFall"]}),O.load({json:t,keys:{x:"DATE1",value:["PrecipTotal"]},unload:["PrecipTotal"]}),W.load({json:t,keys:{x:"DATE1",value:["AvgSpeed","Max5Speed"]},unload:["AvgSpeed","Max5Speed"]}),Y.flush(),q.flush(),O.flush(),W.flush()});var f=Math.max.apply(Math,data2017.map(function(a){return a.Tmax})),g=Math.min.apply(Math,data2017.map(function(a){return a.Tmin})),x=Math.max.apply(Math,dataTmp.map(function(a){return a.avgTemp})),v=Math.min.apply(Math,dataTmp.map(function(a){return a.avgTemp})),M=Math.max.apply(Math,data90.map(function(a){return a.daysOver90})),w=Math.min.apply(Math,data90.map(function(a){return a.daysOver90}));$("#maxTemp").html(Math.round(f)+"&deg;"),$("#minTemp").html(Math.round(g)+"&deg;"),$("#maxTempAll").html(Math.round(x)+"&deg;"),$("#minTempAll").html(Math.round(v)+"&deg;"),$("#max90").html(Math.round(M)),$("#min90").html(Math.round(w));var y=Math.max.apply(Math,data2017.map(function(a){return a.SnowFall})),T=Math.min.apply(Math,data2017.map(function(a){return a.SnowFall})),j=Math.max.apply(Math,dataSnow.map(function(a){return a.totalSnow})),S=Math.min.apply(Math,dataSnow.map(function(a){return a.totalSnow}));$("#maxSnow").html(Math.round(y)+"in"),$("#minSnow").html(Math.round(T)+"in"),$("#maxSnowAll").html(Math.round(j)+"in"),$("#minSnowAll").html(Math.round(S)+"in");var A=Math.max.apply(Math,data2017.map(function(a){return a.PrecipTotal})),k=Math.min.apply(Math,data2017.map(function(a){return a.PrecipTotal})),D=Math.max.apply(Math,dataPrecip.map(function(a){return a.annualPrecip})),P=Math.min.apply(Math,dataPrecip.map(function(a){return a.annualPrecip})),b=Math.max.apply(Math,dataDew.map(function(a){return a.junetoAugAvg})),E=Math.min.apply(Math,dataDew.map(function(a){return a.junetoAugAvg}));$("#maxPrecip").html(Math.round(A)+"in"),$("#minPrecip").html(Math.round(k)+"in"),$("#maxPrecipAll").html(Math.round(D)+"in"),$("#minPrecipAll").html(Math.round(P)+"in"),$("#maxDew").html(Math.round(b)),$("#minDew").html(Math.round(E));var C=Math.max.apply(Math,data2016.map(function(a){return a.Max5Speed})),F=Math.min.apply(Math,data2016.map(function(a){return a.Max5Speed}));$("#maxWind").html(Math.round(C)+"mph"),$("#minWind").html(Math.round(F)+"mph");var H={top:40,right:40,bottom:30,left:40},Y=c3.generate({bindto:"#tempsChart",padding:H,data:{json:data2017,keys:{x:"DATE1",value:["Tmax","Tmin","Tavg"]},names:{Tmax:"Max Temp",Tmin:"Min Temp",Tavg:"Average Temp"},types:{Tmax:"line",Tmin:"line",Tavg:"line"}},legend:{show:!1},point:{show:!1},bar:{width:{ratio:.5}},axis:{y:{max:100,min:-23,padding:{top:0,bottom:0},tick:{values:[-23,0,20,40,60,80,100],format:d3.format(".0f")}},x:{padding:{left:0,right:0},type:"timeseries",tick:{format:"%Y-%m-%d",count:4,multiline:!1}}},subchart:{show:!0},color:{pattern:["#801515","#E7A9A9","#333"]}}),q=(c3.generate({bindto:"#tempsHistory",padding:H,data:{json:dataTmp,keys:{x:"year",value:["avgTemp"]},names:{avgTemp:"Average Temperature"}},point:{show:!1},legend:{show:!1},axis:{y:{max:50,min:30,padding:{top:0,bottom:0},tick:{count:4,values:[0,30,40,50],format:d3.format(".0f")}},x:{padding:{left:0,right:0},tick:{values:["1895","1924","1953","1982","2017"],multiline:!1}}},color:{pattern:["#333"]}}),c3.generate({bindto:"#over90History",padding:H,data:{json:data90,keys:{x:"year",value:["daysOver90"]},names:{daysOver90:"90+ Degree Days"}},point:{show:!1},legend:{show:!1},axis:{y:{max:50,min:0,padding:{top:0,bottom:0},tick:{values:[0,25,50],format:d3.format("r")}},x:{padding:{left:0,right:0},tick:{values:["1873","1924","1953","1982","2017"],multiline:!1}}},regions:[{axis:"x",start:"1980",end:"1990",class:"hottest"}],color:{pattern:["#801515"]}}),c3.generate({bindto:"#snowChart",padding:H,data:{json:data2017,keys:{x:"DATE1",value:["SnowFall"]},names:{SnowFall:"Snowfall"}},point:{show:!1},legend:{show:!1},axis:{y:{max:4,min:0,padding:{top:0,bottom:0},tick:{values:[0,2,4],format:d3.format("r")}},x:{padding:{left:0,right:0},type:"timeseries",tick:{count:4,format:"%Y-%m-%d"}}},color:{pattern:["#96ADB0"]}})),O=(c3.generate({bindto:"#snowHistory",padding:H,data:{json:dataSnow,keys:{x:"year",value:["totalSnow"]},names:{totalSnow:"Total Snow"}},point:{show:!1},legend:{show:!1},axis:{y:{max:100,min:0,padding:{top:0,bottom:0},tick:{values:[0,20,40,60,80,100],format:d3.format("r")}},x:{padding:{left:0,right:0},tick:{values:["1884","1924","1953","1982","2016"],multiline:!1}}},color:{pattern:["#96ADB0"]}}),c3.generate({bindto:"#precipChart",padding:H,data:{json:data2017,keys:{x:"DATE1",value:["PrecipTotal"]},names:{PrecipTotal:"Precipitation"}},point:{show:!1},legend:{show:!1},axis:{y:{max:4,min:0,padding:{top:0,bottom:0},tick:{values:[0,2,4],format:d3.format("r")}},x:{padding:{left:0,right:0},type:"timeseries",tick:{count:4,format:"%Y-%m-%d"}}},color:{pattern:["#3D813D"]}})),W=(c3.generate({bindto:"#precipHistory",padding:H,data:{json:dataPrecip,keys:{x:"year",value:["annualPrecip"]},names:{annualPrecip:"Total Precipitation"}},point:{show:!1},legend:{show:!1},axis:{y:{max:40,min:0,padding:{top:0,bottom:0},tick:{values:[0,20,40],format:d3.format("r")}},x:{padding:{left:0,right:0},tick:{values:["1891","1924","1953","1982","2017"],multiline:!1}}},color:{pattern:["#3D813D"]}}),c3.generate({bindto:"#dewChart",padding:H,data:{json:dataDew,keys:{x:"year",value:["junetoAugAvg"]},names:{junetoAugAvg:"Dewpoint High June to August Average"}},point:{show:!1},legend:{show:!1},axis:{y:{tick:{max:60,min:0,padding:{top:0,bottom:0},values:[40,50,60],format:d3.format("r")}},x:{padding:{left:0,right:0},tick:{values:[1903,1924,1953,1982,2017],multiline:!1}}},color:{pattern:["#3D813D"]}}),c3.generate({bindto:"#windChart",padding:H,data:{json:data2017,keys:{x:"DATE1",value:["AvgSpeed","Max5Speed"]},names:{AvgSpeed:"Average Speed",Max5Speed:"Max Speed"}},point:{show:!1},legend:{show:!1},axis:{y:{tick:{values:["0","20","40","60"],format:d3.format("r")}},x:{type:"timeseries",tick:{count:4,format:"%Y-%m-%d"}}},color:{pattern:["#E7C6A9","#AA6C38"]}}))})})})})})})})})})})})})})})})},{}]},{},[1]);