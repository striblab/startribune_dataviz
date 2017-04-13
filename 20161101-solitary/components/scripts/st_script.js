d3.csv("./data/solitary.csv", function(d) {
  return {
    id: +d.oid,
    start: new Date(d.start),
    end: new Date(d.end),
    consecutive: +d.consecutive,
    overlap: +d.overlap,
    discipline: d.discipline,
    last: d.Last,
    first: d.First,
    middle: d.Middle,
    sex: d.sex,
    dob: d.dob,
    currstat: d.currstat,
    currlocation: d.currlocation,
    src: d.src,
    govoffense: d.govoffense,
    admitdate: new Date(d.admitdate),
    expdate: d.expdate
  };
}, function(error, rows) {

var data = rows;

function buildBricks(year){
  var date = "";
  var milliseconds = 0;

  for (var i=0; i < 31; i++){
    date = new Date("Jan " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .january").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  if (year == 2012 || year == 2008) { var febRange = 29; }
  else { var febRange = 28; }
  for (var i=0; i < febRange; i++){
    date = new Date("Feb " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .february").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("Mar " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .march").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 30; i++){
    date = new Date("Apr " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .april").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("May " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .may").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 30; i++){
    date = new Date("Jun " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .june").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("Jul " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .july").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("Aug " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .august").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 30; i++){
    date = new Date("Sep " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .september").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("Oct " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .october").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 30; i++){
    date = new Date("Nov " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .november").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
  for (var i=0; i < 31; i++){
    date = new Date("Dec " + (i + 1) + " " + year + " 00:00:00");
    milliseconds = date.getTime(); 
    $("#y" + year + " .december").append("<div class='block' data='" + milliseconds + "' id='d" + milliseconds + "'></div>");
  }
}

buildBricks(2000);
buildBricks(2001);
buildBricks(2002);
buildBricks(2003);
buildBricks(2004);
buildBricks(2005);
buildBricks(2006);
buildBricks(2007);
buildBricks(2008);
buildBricks(2009);
buildBricks(2010);
buildBricks(2011);
buildBricks(2012);
buildBricks(2013);
buildBricks(2014);
buildBricks(2015);

function spitCalendars(id){

  $(".month .block").removeClass("selectedBlock");
  $(".month .block").removeClass("out");
  $(".month .block").removeClass("health");
  $(".clause").hide();

  var startRange = [];
  var endRange = []; 
  var cCount = 0
  var oCount = 0;
  var index = 0;
  var range = 0;
  var admission;

  for (var i=0; i < data.length; i++){
    //find id
    if (data[i].id == id){
      startRange[index] = data[i].start;
      endRange[index] = data[i].end;
      cCount += data[i].consecutive;
      oCount += data[i].overlap;
      index++;
      admission = data[i].admitdate;
    }
  }

  var startblock;
  var endblock;

  for (var k=1; k < startRange.length; k++){
    range += Math.round(((endRange[k].getTime()) - startRange[k].getTime())/(1000*60*60*24));

    var startblock = "d" + startRange[k].getTime();
    var endblock = "d" + endRange[k].getTime();
    
    $("#" + startblock).addClass("selectedBlock");
    $("#" + endblock).prev().addClass("selectedBlock");

    var $cells = $('.month .block'),
    idx_1 = $cells.index($("#" + startblock)),
    idx_2 = $cells.index($("#" + endblock));

    $cells.slice(idx_1, idx_2).addClass('selectedBlock');
  }

    $("#consecutive").html(d3.format(",")(cCount));
    $("#overlapping").html(d3.format(",")(oCount));
    $("#total").html(d3.format(",")(range));

    var admitted = admission.getTime(); 
    var cutoff = new Date("December, 31, 2015");   

    var allDays = Math.round((cutoff.getTime() - admitted)/(1000*60*60*24));

    $("#allDays").html(d3.format(",")(allDays));
    $("#pct").html(d3.format("%")(range/allDays));

    $( ".block" ).each(function() { 
      if ($(this).attr("data") < admitted) { $(this).addClass("out"); }
    });

if (id == 204314){

      var healthDays = 2087;
      $(".clause").show();
      $("#healthDays").html(d3.format(",")(healthDays));

      var stint1S = new Date("April, 24, 2001"); 
      var stint1E = new Date("May, 17, 2001"); 
      var stint2S = new Date("September, 26, 2001"); 
      var stint3S = new Date("October, 19, 2001"); 
      var stint3E = new Date("November, 4, 2001"); 
      var stint4S = new Date("April, 5, 2002"); 
      var stint4E = new Date("April, 7, 2002"); 
      var stint04E = new Date("June, 13, 2002"); 
      var stint5S = new Date("April, 16, 2006"); 
      var stint5E = new Date("September, 10, 2006"); 
      var stint6S = new Date("January, 9, 2007"); 
      var stint6E = new Date("July, 30, 2007"); 
      var stint7S = new Date("September, 6, 2007"); 
      var stint7E = new Date("October, 16, 2007"); 
      var stint8S = new Date("October, 20, 2008"); 
      var stint8E = new Date("November, 12, 2008");
      var stint9S = new Date("July, 2, 2009"); 
      var stint9E = new Date("September, 15, 2007");
      var stint10S = new Date("May, 19, 2010"); 
      var stint10E = new Date("December, 30, 2013"); 
      var stint11S = new Date("January, 1, 2014"); 
      var stint11E = new Date("March, 6, 2014"); 
      var stint12S = new Date("April, 11, 2014"); 
      var stint12E = new Date("August, 14, 2014"); 
      var stint13S = new Date("October, 3, 2014"); 
      var stint13E = new Date("October, 6, 2014");
      var stint14S = new Date("December, 24, 2014"); 
      var stint14E = new Date("December, 30, 2014"); 
      var stint15S = new Date("January, 1, 2015"); 
      var stint15E = new Date("January, 25, 2015"); 

      $( ".block" ).each(function() { 
      if ($(this).attr("data") <= stint1E.getTime() && $(this).attr("data") >= stint1S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") == stint2S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint3E.getTime() && $(this).attr("data") >= stint3S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint4E.getTime() && $(this).attr("data") >= stint4S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint5E.getTime() && $(this).attr("data") >= stint5S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint6E.getTime() && $(this).attr("data") >= stint6S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint7E.getTime() && $(this).attr("data") >= stint7S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint8E.getTime() && $(this).attr("data") >= stint8S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint9E.getTime() && $(this).attr("data") >= stint9S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint10E.getTime() && $(this).attr("data") >= stint10S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint11E.getTime() && $(this).attr("data") >= stint11S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint12E.getTime() && $(this).attr("data") >= stint12S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint13E.getTime() && $(this).attr("data") >= stint13S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint14E.getTime() && $(this).attr("data") >= stint14S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") <= stint15E.getTime() && $(this).attr("data") >= stint15S.getTime()) { $(this).addClass("health"); }
      if ($(this).attr("data") == stint04E.getTime()) { $(this).addClass("health"); }
    });
}

}

spitCalendars("204314");
$("#more").show();

$(".step").click(function() {
  $("#more, #more2").hide();
  $("#name").html($(this).text());
  spitCalendars($(this).attr("data"));
  if ($(this).attr("index") == "0") { $("#more").show(); }
  else if ($(this).attr("index") == "2") { $("#more2").show(); }
  else { $("#more, #more2").hide(); }
});

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