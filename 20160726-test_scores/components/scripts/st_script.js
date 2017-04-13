d3.csv("./data/scores.csv", function(d) {
  return {
    id: d.SchoolID,
    district: d.districtname_new,
    school: d.SCHOOLNAME_NEW,
    type: d.Grades,
    metro: d.Metro7county,
    region: d.Location,
    location: d.SchoolLocationCountyName,
    county: d.SchoolLocationCountyName,
    year: String(d.dataYear),
    subject: d.subject,
    profpct: +d.PctProf,
    freelunch: +d.FreeLunch,
    povertypct: +d.PctPoverty,
    povertycat: d.PovertyCategory,
    minoritypct: +d.PctMinority,
    predicted: +d.Predicted,
    residual: +d.Residual,
    category: d.CategoryName,
    enrollment: d.K12Enr
  };
}, function(error, rows) {

var data = rows;

    var povShade;
    var raceShade, lunchShade;
    var gradeShade, gradeShade2;
    var currentDistrict = "";
    var thisDistrict = "All";

d3.select("#schoolsList").selectAll(".switch")
  .data(data.filter(function(d) { return d.year == "15 to 16" && d.subject == "R"; })).enter().append("div")
  .attr("class",function(d) { return "switch"; })
  .attr("categoryr",function(d) { 
    var category;
    if (d.category == "About as expected") { category = "expected"; }
    else if (d.category == "Better than expected") { category = "better"; }
    else if (d.category == "Falling short") { category = "worse"; }
    return d.category; 
  })
  .attr("categorym",function(d) { 
    var category;
        for (var k=0; k < data.length; k++){
      if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "15 to 16"){
        category = data[k].category;
      }
    }
    return category; 
  })
  .attr("district",function(d) { return d.district; })
  .attr("id",function(d) { return "s" + d.id; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .on("click",function(d){

    $("#minority").removeClass('gray5');
    $("#minority").removeClass('gray4');
    $("#minority").removeClass('gray3');
    $("#minority").removeClass('gray2');
    $("#minority").removeClass('gray1');
    $("#poverty,#freelunch").removeClass('gray5');
    $("#poverty,#freelunch").removeClass('gray4');
    $("#poverty,#freelunch").removeClass('gray3');
    $("#poverty,#freelunch").removeClass('gray2');
    $("#poverty,#freelunch").removeClass('gray1');
    $("#categoryR,#categoryM").removeClass('better');
    $("#categoryR,#categoryM").removeClass('worse');
    $("#categoryR,#categoryM").removeClass('expected');
    $("#categoryR,#categoryM").removeClass('nan');

    switchChart(d.school,d.district);

    for (var k=0; k < data.length; k++){
      if (data[k].school == d.school && data[k].district == d.district && data[k].subject == "M" && data[k].year == "15 to 16"){
        $("#categoryM").html(data[k].category);
        $("#categoryR").html(d.category);
        $("#mPCT").html(d3.format("%")(data[k].profpct) + " proficiency");
        $("#rPCT").html(d3.format("%")(d.profpct) + " proficiency");
        $("#mPCTP").html(d3.format("%")(data[k].predicted) + " predicted");
        $("#rPCTP").html(d3.format("%")(d.predicted) + " predicted");
        if (data[k].category == "About as expected") { gradeShade2 = "expected"; }
        if (data[k].category == "Falling short") { gradeShade2 = "worse"; }
        if (data[k].category == "Better than expected") { gradeShade2 = "better"; }
        if (data[k].category == "Not enough students tested") { gradeShade2 = "nan"; }
      }
    }

    var freelunchPCT = d.freelunch / d.enrollment;

    if (freelunchPCT >= .70) { lunchShade = "gray5"; }
    else if (freelunchPCT >= .50) { lunchShade = "gray4"; }
    else if (freelunchPCT >= .40) { lunchShade = "gray3"; }
    else if (freelunchPCT >= .20) { lunchShade = "gray2"; }
    else if (freelunchPCT >= 0) { lunchShade = "gray1"; }

    if (d.minoritypct >= .70) { raceShade = "gray5"; }
    else if (d.minoritypct >= .50) { raceShade = "gray4"; }
    else if (d.minoritypct >= .40) { raceShade = "gray3"; }
    else if (d.minoritypct >= .20) { raceShade = "gray2"; }
    else if (d.minoritypct >= 0) { raceShade = "gray1"; }

    if (d.povertypct >= .70) { povShade = "gray5"; }
    else if (d.povertypct >= .50) { povShade = "gray4"; }
    else if (d.povertypct >= .40) { povShade = "gray3"; }
    else if (d.povertypct >= .20) { povShade = "gray2"; }
    else if (d.povertypct >= 0) { povShade = "gray1"; }

    if (d.category == "About as expected") { gradeShade = "expected"; }
    if (d.category == "Falling short") { gradeShade = "worse"; }
    if (d.category == "Better than expected") { gradeShade = "better"; }
    if (d.category == "Not enough students tested") { gradeShade = "nan"; }

    $("#schoolname").html(d.school);
    $("#district").html(d.district);
    $("#enrolled").html(d3.format(",")(d.enrollment));
    $("#type").html(d.type);
    $("#location").html(" (" + d.location + ")");
    $("#category").html(d.category);
    $("#freelunch").html(d3.format("%")(freelunchPCT));
    $("#poverty").html(d3.format("%")(d.povertypct));
    // $("#povertycat").html(d.povertycat);
    $("#minority").html(d3.format("%")(d.minoritypct));

    $("#freelunch").addClass(lunchShade);
    $("#minority").addClass(raceShade);
    $("#poverty").addClass(povShade);
    $("#categoryR").addClass(gradeShade);
    $("#categoryM").addClass(gradeShade2);

  })
  .html(function(d){ 
    if (currentDistrict != d.district){
      currentDistrict = d.district;
      $("#listedSchools").append("<li class='district'>" + currentDistrict + "</li>");
    }
    return d.school;
  });

  function crunchStatsM(district,all){
    var totalSchools = 0;
    var failCount = 0;
    var metCount = 0;
    var betterCount = 0;

    if (all == true){
    for (var k=0; k < data.length; k++){
      if (data[k].subject == "M" && data[k].year == "15 to 16"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
    } else {
    for (var k=0; k < data.length; k++){
      if (data[k].district == district && data[k].subject == "M" && data[k].year == "15 to 16"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
  }

    $("#failM").html(d3.format("%")(failCount / totalSchools));
    $("#metM").html(d3.format("%")(metCount / totalSchools));
    $("#betterM").html(d3.format("%")(betterCount / totalSchools));

  }

  function crunchStatsR(district,all){
    var totalSchools = 0;
    var failCount = 0;
    var metCount = 0;
    var betterCount = 0;

    if (all == true){
    for (var k=0; k < data.length; k++){
      if (data[k].subject == "R" && data[k].year == "15 to 16"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
    }
    } else {
    for (var k=0; k < data.length; k++){
      if (data[k].district == district && data[k].subject == "R" && data[k].year == "15 to 16"){
        totalSchools++;
        if (data[k].category == "About as expected") { metCount++; }
        if (data[k].category == "Falling short") { failCount++; }
        if (data[k].category == "Better than expected") { betterCount++; }

      }
     }
    }

    $("#failR").html(d3.format("%")(failCount / totalSchools));
    $("#metR").html(d3.format("%")(metCount / totalSchools));
    $("#betterR").html(d3.format("%")(betterCount / totalSchools));

  }



    $("#districtSelect").click(function() { 
      $("#listedSchools").slideToggle();
    });

    $("li.district").click(function() { 
      $("li.district").removeClass("selected");
      $(".cell").removeClass("selected2");
      $(this).addClass("selected");
      $("#listedSchools").slideToggle();
      $("#thisDistrict").html($(this).text());
      $(".switch").hide();
      $(".switch[district='" + $(this).text() + "']").show();
      crunchStatsM($(this).text(),false);
      crunchStatsR($(this).text(),false);
      thisDistrict = $(this).text();
    });

    $(".cell").click(function()  { 
       $(".cell").removeClass("selected2");
       $(this).addClass("selected2");
       $(".switch").hide();
       if (thisDistrict == "All"){
       if ($(this).attr("type") == "R") { $(".switch[categoryr='" + $(this).attr("data") + "']").show(); }
       else if ($(this).attr("type") == "M") { $(".switch[categorym='" + $(this).attr("data") + "']").show(); }
       } else {  
       if ($(this).attr("type") == "R") { $(".switch[categoryr='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       else if ($(this).attr("type") == "M") { $(".switch[categorym='" + $(this).attr("data") + "'][district='" + thisDistrict + "']").show(); }
       }
    });

    $('#filter_box').keyup(function(i){
       $('.switch').hide();
       var txt = $('#filter_box').val();
       $('.switch').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
       });
    });

    $('#filter2 input').keyup(function(i){
       $('.district').hide();
       var txt = $('#filter2 input').val();
       
       $('.district').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           } 
       });
    });

    $(".switch").click(function()  { 
       $(".switch").removeClass("selected");
       $(this).addClass("selected");
       $("#instructions").hide();
       $("#infobox,#chart,#chartLabel").show();
       // map.flyTo({ center: [$(this).attr("longitude"),$(this).attr("latitude")], zoom: 9 });
    });

    $("#infobox,#chart,#chartLabel").hide();
    $("#instructions").show();
    $("#schoolname").html(data[4].school);
    $("#district").html(data[4].district);
    $("#enrolled").html(data[4].enrollment);
    $("#freelunch").html(d3.format("%")(data[4].freelunch / data[4].enrollment));
    $("#type").html(data[4].type);
    $("#location").html(" (" + data[4].location + ")");
    $("#categoryR").html(data[4].category);
    $("#categoryM").html(data[5].category);
    $("#poverty").html(d3.format("%")(data[4].povertypct));
    $("#povertycat").html(data[4].povertycat);
    $("#minority").html(d3.format("%")(data[4].minoritypct));
    $("#minority").addClass("gray1");
    $("#poverty").addClass("gray3");
    $("#freelunch").addClass("gray3");
    $("#categoryR,#categoryM").addClass("better");
    $("#mPCT").html(d3.format("%")(data[4].profpct) + " proficiency");
    $("#rPCT").html(d3.format("%")(data[5].profpct) + " proficiency");
    $("#mPCTP").html(d3.format("%")(data[4].predicted) + " predicted");
    $("#rPCTP").html(d3.format("%")(data[5].predicted) + " predicted");
    crunchStatsM("",true);
    crunchStatsR("",true);

    $(".zoom").click(function() {
        thisDistrict = "All"
        $("#infobox,#chart,#chartLabel").hide();
        $("#instructions").show();
        $(".switch, li.district").removeClass("selected");
        $(".switch").show();
        $("li.district").show();
        $("#listedSchools").hide();
        $("#thisDistrict").html("All");
        $('#schoolsList').animate({scrollTop : 0},800);
        $('#listedSchools').animate({scrollTop : 0},800);
        $("#filter input, #filter2 input").val("");
        $("#enrolled").html(data[4].enrollment);
        $("#minority").removeClass('gray5');
        $("#minority").removeClass('gray4');
        $("#minority").removeClass('gray3');
        $("#minority").removeClass('gray2');
        $("#minority").removeClass('gray1');
        $("#poverty,#freelunch").removeClass('gray5');
        $("#poverty,#freelunch").removeClass('gray4');
        $("#poverty,#freelunch").removeClass('gray3');
        $("#poverty,#freelunch").removeClass('gray2');
        $("#poverty,#freelunch").removeClass('gray1');
        $("#categoryR,#categoryM").removeClass('better');
        $("#categoryR,#categoryM").removeClass('worse');
        $("#categoryR,#categoryM").removeClass('expected');
        $("#categoryR,#categoryM").removeClass('nan');
        $("#mPCT").html("75% math proficiency");
        $("#rPCT").html("65% reading proficiency");
        $("#mPCTP").html("57% predicted");
        $("#rPCTP").html("54% predicted");
        $("#categoryR").html(data[4].category);
        $("#categoryM").html(data[5].category);
        $("#schoolname").html(data[4].school);
        $("#district").html(data[4].district);
        $("#type").html(data[4].type);
        $("#location").html(" (" + data[0].location + ")");
        $("#category").html(data[4].category);
        $("#poverty").html(d3.format("%")(data[4].povertypct));
        $("#povertycat").html(data[4].povertycat);
        $("#minority").html(d3.format("%")(data[4].minoritypct));
        $("#minority").addClass("gray1");
        $("#freelunch").addClass("gray3");
        $("#poverty").addClass("gray3");
        crunchStatsM("",true);
        crunchStatsR("",true);
        $("#categoryR,#categoryM").addClass("better");
        $(".cell").removeClass("selected2");
        switchChart("A.C.G.C. SECONDARY");
        // $(".switch:first").addClass("selected");
    return false;
    });



function switchChart(name,district){

var axis = [];

console.log(district)

axis[0] = 'x';
// axis[1] = "'12 to '13";
// axis[2] = "'13 to '14";
// axis[3] = "'14 to '15";
// axis[4] = "'15 to '16";

var indexYear = 1;
var dataR = [];
var dataM = [];

dataR[0] = "Reading";
dataM[0] = "Math";
dataRP = 0;
dataMP = 0;

var found = false;

for (var i=0; i < data.length; i++){
  if (name == data[i].school && district == data[i].district){
    found = true;

    if (data[i].subject == 'R'){
      dataR[indexYear] = data[i].profpct;
      axis[indexYear] = data[i].year;
      indexYear++;
      dataRP = data[i].predicted;
    }
    
  }
}

indexYear = 1;

for (var i=0; i < data.length; i++){
  if (name == data[i].school && district == data[i].district){
    found = true;

    if (data[i].subject == 'M'){
      dataM[indexYear] = data[i].profpct;
      axis[indexYear] = data[i].year;
      indexYear++;
      dataMP = data[i].predicted;
    }
    
  }
}

// console.log(dataRP);
// console.log(dataMP);

if (found == true){

// console.log(dataStream);

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 70,
    };

var share = "#B0BEC5";

// console.log(axis);

var chart = c3.generate({
        bindto: '#chart',
        padding: padding,
    data: {
        x: 'x',
        columns: [
            axis,
            dataR,
            dataM
        ],
        type: 'line'
    },
    color:  { pattern: ["#51373E","#E3B5A4"] },
    axis: {
      y: {
            max: 1,
            min: 0,
            padding: {bottom: 0, top:0},
            tick: {
             count: 4,
             format: d3.format('%')
            }
        },
        x: {
            type: "category",
            categories: ["'12 to '13", "'13 to '14", "'14 to '15", "'15 to '16"],
            tick: {
                count: 4,
                multiline: false
            }
          }
        },
    grid: {
        y: {
            lines: [
                // {value: dataRP, text: ' ', position: 'start', class:'read'},
                // {value: dataMP, text: ' ', position: 'start', class:'math'}
            ]
        }
    }

  });
}
}

switchChart("A.C.G.C. SECONDARY");
$('.switch').first().addClass("selected");

});
      
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