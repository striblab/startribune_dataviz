(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/data2010.json", function(error, data2010Load) {
d3.json("./data/mntotals2010.json", function(error, dataTotalsLoad) {

$( document ).ready(function() {
    $("#aid").css("background-color","#333");
    $("#taxQ").hide();
$( "#local" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#local").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show();   
});
$( "#county" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#county").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
$( "#human" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#human").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
$( "#education" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#education").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
$( "#highway" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#highway").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
$( "#property" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#property").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#income" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#income").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#sales" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#sales").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#gas" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#gas").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#vehicles" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#vehicles").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#corporate" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#corporate").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#taxes" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#taxes").css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide(); 
});
$( "#aid" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#aid").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
$( "#community" ).click(function() {
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $("#community").css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
});
});

var aspect = 630 / 650,
    chart = $("#map svg");
$(window).on("resize", function() {
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
});


redrawGraph = function(data1) {

d3.csv("data/mntotals.csv", function(error, csvData2) {
    csvData2.forEach(function(d) {
        d.name = d.NAME;
    d.population = +d.Pop2010;
    d.total_aid = +d.total_aid;
    d.aid_per_cap = +d.aid_per_cap;
    d.aids = +d.AIDS;
    d.education_aid = +d.education_aid;
    d.total_hs_aid = +d.total_hs_aid;
    d.co_hwy_aid = +d.co_hwy_aid;
    d.city_hwy_aid = +d.city_hwy_aid;
    d.town_hwy = +d.town_hwy;
    d.total_hwy = +d.total_hwy;
    d.total_lga = +d.total_lga;
    d.reducation_aid = +d.reducation_aid;
    d.community_correction_aid = +d.community_correction_aid;
    d.co_program_aid = +d.co_program_aid;
    d.prop_tax_credits = +d.prop_tax_credits;
    d.homestead_credit = +d.homestead_credit;
    d.ag_credit = +d.ag_credit;
    d.taconite_credit = +d.taconite_credit;
    d.misc_proptax_credits = +d.misc_proptax_credits;
    d.prop_tax_refunds = +d.prop_tax_refunds;
    d.home_proptax_refund = +d.home_proptax_refund;
    d.renter_proptax_refund = +d.renter_proptax_refund;
    d.targ_proptax_refund = +d.targ_proptax_refund;
    d.proptax_levy = +d.proptax_levy;
    d.total_ntc_levy = +d.total_ntc_levy;
    d.total_mkt_value_levy = +d.total_mkt_value_levy;
    d.state_levy = +d.state_levy;
    d.proptax_credits = +d.proptax_credits;
    d.net_proptax_payable = +d.net_proptax_payable;
    d.taxes = +d.taxes;
    d.income_tax = +d.income_tax;
    d.sales_tax = +d.sales_tax;
    d.vehicle_tax = +d.vehicle_tax;
    d.license_tax = +d.license_tax;
    d.gas_tax = +d.gas_tax;
    d.corp_tax = +d.corp_tax;
    d.state_prop_tax = +d.state_prop_tax;
    d.tax_per_capita = +d.tax_per_capita;
    d.total_tax = +d.total_tax;
    });

d3.csv("data/mn_data.csv", function(error, csvData) {
    csvData.forEach(function(d) {
        d.name = d.NAME;
    d.population = +d.Pop2010;
    d.total_aid = +d.total_aid;
    d.aid_per_cap = +d.aid_per_cap;
    d.aids = +d.AIDS;
    d.education_aid = +d.education_aid;
    d.total_hs_aid = +d.total_hs_aid;
    d.co_hwy_aid = +d.co_hwy_aid;
    d.city_hwy_aid = +d.city_hwy_aid;
    d.town_hwy = +d.town_hwy;
    d.total_hwy = +d.total_hwy;
    d.total_lga = +d.total_lga;
    d.reducation_aid = +d.reducation_aid;
    d.community_correction_aid = +d.community_correction_aid;
    d.co_program_aid = +d.co_program_aid;
    d.prop_tax_credits = +d.prop_tax_credits;
    d.homestead_credit = +d.homestead_credit;
    d.ag_credit = +d.ag_credit;
    d.taconite_credit = +d.taconite_credit;
    d.misc_proptax_credits = +d.misc_proptax_credits;
    d.prop_tax_refunds = +d.prop_tax_refunds;
    d.home_proptax_refund = +d.home_proptax_refund;
    d.renter_proptax_refund = +d.renter_proptax_refund;
    d.targ_proptax_refund = +d.targ_proptax_refund;
    d.proptax_levy = +d.proptax_levy;
    d.total_ntc_levy = +d.total_ntc_levy;
    d.total_mkt_value_levy = +d.total_mkt_value_levy;
    d.state_levy = +d.state_levy;
    d.proptax_credits = +d.proptax_credits;
    d.net_proptax_payable = +d.net_proptax_payable;
    d.taxes = +d.taxes;
    d.income_tax = +d.income_tax;
    d.sales_tax = +d.sales_tax;
    d.vehicle_tax = +d.vehicle_tax;
    d.license_tax = +d.license_tax;
    d.gas_tax = +d.gas_tax;
    d.corp_tax = +d.corp_tax;
    d.state_prop_tax = +d.state_prop_tax;
    d.tax_per_capita = +d.tax_per_capita;
    d.total_tax = +d.total_tax;
    });

var districtInfo = document.getElementById('infobox');

var none = "#f7f7f7";
var q1="#006d2c"; //300%
var q2="#74c476"; //100%
var q3="#c7e9c0"; //10%
var q4 = "#002911";
var t1="#6c0f15"; //300%
var t2="#A45958"; //100%
var t3="#C6A29E"; //10%
var t4 = "#210507";

if (data1 == "lga"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".lg").css({'font-weight':'bold','color':'black'});
            $('.category.lg').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].total_lga / csvData[j].population) >= 200){ return q1; }
            if ((csvData[j].total_lga / csvData[j].population) >= 100){ return q2; }
            if ((csvData[j].total_lga / csvData[j].population) >= 0){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "hwy"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".hw").css({'font-weight':'bold','color':'black'});
            $('.category.hw').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Traverse"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].total_hwy / csvData[j].population) >= 400){ return q1; }
            if ((csvData[j].total_hwy / csvData[j].population) >= 200){ return q2; }
            if ((csvData[j].total_hwy / csvData[j].population) >= 50){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "hsa"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".hs").css({'font-weight':'bold','color':'black'});
            $('.category.hs').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].total_hs_aid / csvData[j].population) >= 900){ return q1; }
            if ((csvData[j].total_hs_aid / csvData[j].population) >= 600){ return q2; }
            if ((csvData[j].total_hs_aid / csvData[j].population) >= 300){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "cpa"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".cp").css({'font-weight':'bold','color':'black'});
            $('.category.cp').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].co_program_aid / csvData[j].population) >= 100){ return q1; }
            if ((csvData[j].co_program_aid / csvData[j].population) >= 50){ return q2; }
            if ((csvData[j].co_program_aid / csvData[j].population) >= 1){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "eda"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".ed").css({'font-weight':'bold','color':'black'});
            $('.category.ed').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].education_aid / csvData[j].population) >= 1300){ return q1; }
            if ((csvData[j].education_aid / csvData[j].population) >= 1000){ return q2; }
            if ((csvData[j].education_aid / csvData[j].population) >= 700){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "pt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".pt").css({'font-weight':'bold','color':'black'});
            $('.category.pt').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Cook"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].proptax_levy / csvData[j].population) >= 3000){ return t1; }
            if ((csvData[j].proptax_levy / csvData[j].population) >= 2200){ return t2; }
            if ((csvData[j].proptax_levy / csvData[j].population) >= 1500){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "it"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".it").css({'font-weight':'bold','color':'black'});
            $('.category.it').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Carver"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].income_tax / csvData[j].population) >= 900){ return t1; }
            if ((csvData[j].income_tax / csvData[j].population) >= 600){ return t2; }
            if ((csvData[j].income_tax / csvData[j].population) >= 200){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "st"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".st").css({'font-weight':'bold','color':'black'});
            $('.category.st').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Cook"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].sales_tax / csvData[j].population) >= 700){ return t1; }
            if ((csvData[j].sales_tax / csvData[j].population) >= 400){ return t2; }
            if ((csvData[j].sales_tax / csvData[j].population) >= 100){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "gt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".gt").css({'font-weight':'bold','color':'black'});
            $('.category.gt').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Wilkin"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].gas_tax / csvData[j].population) >= 250){ return t1; }
            if ((csvData[j].gas_tax / csvData[j].population) >= 150){ return t2; }
            if ((csvData[j].gas_tax / csvData[j].population) >= 130){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "vt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".vt").css({'font-weight':'bold','color':'black'});
            $('.category.vt').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Kittson"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].vehicle_tax / csvData[j].population) >= 200){ return t1; }
            if ((csvData[j].vehicle_tax / csvData[j].population) >= 175){ return t2; }
            if ((csvData[j].vehicle_tax / csvData[j].population) >= 100){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "aid"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".ta").css({'font-weight':'bold','color':'black'});
            $('.category.ta').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].aids / csvData[j].population) >= 2600){ return q1; }
            if ((csvData[j].aids / csvData[j].population) >= 2200){ return q2; }
            if ((csvData[j].aids / csvData[j].population) >= 1500){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "corp"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".corp").css({'font-weight':'bold','color':'black'});
            $('.category.corp').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Hennepin"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].corp_tax / csvData[j].population) >= 100){ return t1; }
            if ((csvData[j].corp_tax / csvData[j].population) >= 50){ return t2; }
            if ((csvData[j].corp_tax / csvData[j].population) >= 20){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "comm"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".dr").css({'font-weight':'bold','color':'black'});
            $('.category.dr').before('<span class="arrow"></span>');
            $(".cc").css({'font-weight':'bold','color':'black'});
            $('.category.cc').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "St. Louis"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if (((csvData[j].reducation_aid + csvData[j].community_correction_aid)/ csvData[j].population) >= 50){ return q1; }
            if (((csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) >= 20){ return q2; }
            if (((csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) >= 5){ return q3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "tax"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";
           }
    }
            $(".category").css({'font-weight':'normal','color':'#aaa'});
            $(".amount").css({'font-weight':'normal','color':'#aaa'});
            $(".tt").css({'font-weight':'bold','color':'black'});
            $('.category.tt').before('<span class="arrow"></span>');
}) 
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Hennepin"){ 
            return t4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].taxes / csvData[j].population) >= 2000){ return t1; }
            if ((csvData[j].taxes / csvData[j].population) >= 1500){ return t2; }
            if ((csvData[j].taxes / csvData[j].population) >= 900){ return t3; }
            else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

    });
});

}

d3.csv("data/mntotals.csv", function(error, csvData2) {
    csvData2.forEach(function(d) {
        d.name = d.NAME;
    d.population = +d.Pop2010;
    d.total_aid = +d.total_aid;
    d.aid_per_cap = +d.aid_per_cap;
    d.aids = +d.AIDS;
    d.education_aid = +d.education_aid;
    d.total_hs_aid = +d.total_hs_aid;
    d.co_hwy_aid = +d.co_hwy_aid;
    d.city_hwy_aid = +d.city_hwy_aid;
    d.town_hwy = +d.town_hwy;
    d.total_hwy = +d.total_hwy;
    d.total_lga = +d.total_lga;
    d.reducation_aid = +d.reducation_aid;
    d.community_correction_aid = +d.community_correction_aid;
    d.co_program_aid = +d.co_program_aid;
    d.prop_tax_credits = +d.prop_tax_credits;
    d.homestead_credit = +d.homestead_credit;
    d.ag_credit = +d.ag_credit;
    d.taconite_credit = +d.taconite_credit;
    d.misc_proptax_credits = +d.misc_proptax_credits;
    d.prop_tax_refunds = +d.prop_tax_refunds;
    d.home_proptax_refund = +d.home_proptax_refund;
    d.renter_proptax_refund = +d.renter_proptax_refund;
    d.targ_proptax_refund = +d.targ_proptax_refund;
    d.proptax_levy = +d.proptax_levy;
    d.total_ntc_levy = +d.total_ntc_levy;
    d.total_mkt_value_levy = +d.total_mkt_value_levy;
    d.state_levy = +d.state_levy;
    d.proptax_credits = +d.proptax_credits;
    d.net_proptax_payable = +d.net_proptax_payable;
    d.taxes = +d.taxes;
    d.income_tax = +d.income_tax;
    d.sales_tax = +d.sales_tax;
    d.vehicle_tax = +d.vehicle_tax;
    d.license_tax = +d.license_tax;
    d.gas_tax = +d.gas_tax;
    d.corp_tax = +d.corp_tax;
    d.state_prop_tax = +d.state_prop_tax;
    d.tax_per_capita = +d.tax_per_capita;
    d.total_tax = +d.total_tax;
    });

var districtInfo = document.getElementById('infobox');

    districtInfo.innerHTML = "<div id='county_name'>Minnesota Average</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData2[0].total_lga / csvData2[0].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData2[0].co_program_aid / csvData2[0].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData2[0].total_hs_aid / csvData2[0].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData2[0].education_aid / csvData2[0].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData2[0].total_hwy / csvData2[0].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData2[0].community_correction_aid / csvData2[0].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData2[0].reducation_aid / csvData2[0].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData2[0].state_prop_tax / csvData2[0].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData2[0].income_tax / csvData2[0].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData2[0].sales_tax / csvData2[0].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData2[0].vehicle_tax / csvData2[0].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData2[0].gas_tax / csvData2[0].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData2[0].corp_tax / csvData2[0].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";

            $(".ta").css({'font-weight':'bold','color':'black'});
            $('.category.ta').before('<span class="arrow"></span>');


d3.csv("data/mn_data.csv", function(error, csvData) {
    csvData.forEach(function(d) {
        d.name = d.NAME;
    d.population = +d.Pop2010;
    d.total_aid = +d.total_aid;
    d.aid_per_cap = +d.aid_per_cap;
    d.aids = +d.AIDS;
    d.education_aid = +d.education_aid;
    d.total_hs_aid = +d.total_hs_aid;
    d.co_hwy_aid = +d.co_hwy_aid;
    d.city_hwy_aid = +d.city_hwy_aid;
    d.town_hwy = +d.town_hwy;
    d.total_hwy = +d.total_hwy;
    d.total_lga = +d.total_lga;
    d.reducation_aid = +d.reducation_aid;
    d.community_correction_aid = +d.community_correction_aid;
    d.co_program_aid = +d.co_program_aid;
    d.prop_tax_credits = +d.prop_tax_credits;
    d.homestead_credit = +d.homestead_credit;
    d.ag_credit = +d.ag_credit;
    d.taconite_credit = +d.taconite_credit;
    d.misc_proptax_credits = +d.misc_proptax_credits;
    d.prop_tax_refunds = +d.prop_tax_refunds;
    d.home_proptax_refund = +d.home_proptax_refund;
    d.renter_proptax_refund = +d.renter_proptax_refund;
    d.targ_proptax_refund = +d.targ_proptax_refund;
    d.proptax_levy = +d.proptax_levy;
    d.total_ntc_levy = +d.total_ntc_levy;
    d.total_mkt_value_levy = +d.total_mkt_value_levy;
    d.state_levy = +d.state_levy;
    d.proptax_credits = +d.proptax_credits;
    d.net_proptax_payable = +d.net_proptax_payable;
    d.taxes = +d.taxes;
    d.income_tax = +d.income_tax;
    d.sales_tax = +d.sales_tax;
    d.vehicle_tax = +d.vehicle_tax;
    d.license_tax = +d.license_tax;
    d.gas_tax = +d.gas_tax;
    d.corp_tax = +d.corp_tax;
    d.state_prop_tax = +d.state_prop_tax;
    d.tax_per_capita = +d.tax_per_capita;
    d.total_tax = +d.total_tax;
    });


var width = 630,
    height = 650,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5070)
    .translate([100, 970]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    //.on("click", clicked2)
    .attr("height", height);

var g = svg.append("g");

var none = "#f7f7f7";
var q1="#006d2c" //300%
var q2="#74c476" //100%
var q3="#c7e9c0" //10%
var q4 = "#002911";

var districtInfo = document.getElementById('infobox');

d3.json("shapefiles/counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name && d.properties.COUNTYNAME == "Mahnomen"){ 
            return q4;
         }
          else if (d.properties.COUNTYNAME == csvData[j].name){ 
            if ((csvData[j].aids / csvData[j].population) >= 2600){ return q1; }
            if ((csvData[j].aids / csvData[j].population) >= 2200){ return q2; }
            if ((csvData[j].aids / csvData[j].population) >= 1500){ return q3; }
            else { return none; }
           }
         }
        })
      .on("mousedown", function(d, i){
        for (var j = 0; j < 87; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
    districtInfo.innerHTML = "<div id='county_name'>" + d.properties.COUNTYNAME + " County</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData[j].total_lga / csvData[j].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData[j].co_program_aid / csvData[j].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData[j].total_hs_aid / csvData[j].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData[j].education_aid / csvData[j].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData[j].total_hwy / csvData[j].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData[j].community_correction_aid / csvData[j].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData[j].reducation_aid / csvData[j].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData[j].aids + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) + "</div><hr><div class='category tt'>State Average Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData[j].state_prop_tax / csvData[j].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData[j].income_tax / csvData[j].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData[j].sales_tax / csvData[j].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData[j].vehicle_tax / csvData[j].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData[j].gas_tax / csvData[j].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData[j].corp_tax / csvData[j].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population) + ")</div><hr><div class='category ta'>State Average Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div>";
           }
    }
            $(".ta").css({'font-weight':'bold','color':'black'});
            $('.category.ta').before('<span class="arrow"></span>');
}) 
      .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + "</b>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});



// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

//svg.call(zoom);

$(".zoom").click(function() {
  clicked2();
  $("#taxQ").hide();
    $("#aidQ").show();
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
var districtInfo = document.getElementById('infobox');

    districtInfo.innerHTML = "<div id='county_name'>Minnesota Average</div><h4>Major Aid Types Per Capita</h4><div class='category lg'>Local Government Aid</div><div class='amount lg'>$" + d3.round(csvData2[0].total_lga / csvData2[0].population) + "</div><hr><div class='category cp'>County Programs Aid</div><div class='amount cp'>$" + d3.round(csvData2[0].co_program_aid / csvData2[0].population) + "</div><hr><div class='category hs'>Human Services Aid</div><div class='amount hs'>$" + d3.round(csvData2[0].total_hs_aid / csvData2[0].population) + "</div><hr><div class='category ed'>Educational Aid</div><div class='amount ed'>$" + d3.round(csvData2[0].education_aid / csvData2[0].population) + "</div><hr><div class='category hw'>Highway Aid</div><div class='amount hw'>$" + d3.round(csvData2[0].total_hwy / csvData2[0].population) + "</div><hr><div class='category cc'>Community Corrections Aid</div><div class='amount cc'>$" + d3.round(csvData2[0].community_correction_aid / csvData2[0].population) + "</div><hr><div class='category dr'>Disparity Reduction Aid</div><div class='amount dr'>$" + d3.round(csvData2[0].reducation_aid / csvData2[0].population) + "</div><hr><div class='category ta'>Total Aid</div><div class='amount ta'>$" + d3.round((csvData2[0].aids + csvData2[0].reducation_aid + csvData2[0].community_correction_aid) / csvData2[0].population) + "</div><p style='clear:both'></p><h4>Major Taxes Per Capita</h4><div class='category pt'>Property Taxes</div><div class='amount pt'>($" + d3.round(csvData2[0].state_prop_tax / csvData2[0].population) + ")</div><hr><div class='category it'>Income Taxes</div><div class='amount it'>($" + d3.round(csvData2[0].income_tax / csvData2[0].population) + ")</div><hr><div class='category st'>Sales Taxes</div><div class='amount st'>($" + d3.round(csvData2[0].sales_tax / csvData2[0].population) + ")</div><hr><div class='category vt'>Vehicle Taxes</div><div class='amount vt'>($" + d3.round(csvData2[0].vehicle_tax / csvData2[0].population) + ")</div><hr><div class='category gt'>Gas Taxes</div><div class='amount gt'>($" + d3.round(csvData2[0].gas_tax / csvData2[0].population) + ")</div><hr><div class='category corp'>Corporate Taxes</div><div class='amount corp'>($" + d3.round(csvData2[0].corp_tax / csvData2[0].population) + ")</div><hr><div class='category tt'>Total Taxes</div><div class='amount tt'>($" + d3.round((csvData2[0].taxes + csvData2[0].corp_tax) / csvData2[0].population) + ")</div>";

redrawGraph('aid');
$(".myButton").css("background-color","#61bd1a");
$(".myButton_tax").css("background-color","#8B2219");
$("#aid").css("background-color","#333");
$('.category').css({'font-weight':'normal','color':'#aaa'});
$('.amount').css({'font-weight':'normal','color':'#aaa'});
$('.ta').css({'font-weight':'bold','color':'black'});
$('span').remove( '.arrow' );
$('.category.ta').before('<span class=\'arrow\'></span>');

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
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}
});

});

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
  
  $( document ).ready(function() {
    var aspect = 630 / 600,
    chart = $("#map svg");
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
});

});
});
},{}]},{},[1])