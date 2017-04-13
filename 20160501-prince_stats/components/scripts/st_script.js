//LIVE JSON MAGIC
d3.json("./data/prince.json", function(error, dataLoad) {
var data = dataLoad.stats;
$('.scrollToTop').click(function(){
    $('.rightSide').animate({scrollTop : 0},800);
    return false;
  });
$(".button").click(function() {
  $(".switch, .button").removeClass("selected");
  $(this).addClass("selected");
  $(".item, .year").hide();
  if ($(this).attr("data") == "all") { $(".item, .year").show(); }
  else { $("." + $(this).attr("data")).parent().show(); $("." + $(this).attr("data")).show(); }
});
// $("li.switch").click(function() {
//   $(".switch, .button").removeClass("selected");
//   $(this).addClass("selected");
//   $(".year").hide();
//   $(".item").show();
//   if ($(this).find("a").attr("data") == "all") { $(".item, .year").show(); }
//   else { $("#y" + $(this).find("a").attr("data")).show(); }
// });
function spitFirstItems(year){
 $("#y" + year).append(function(){ return "<div class='yearLabel'>" + year + "</div>" });
 d3.select("#y" + year).selectAll(".item")
  .data(data.filter(function(d){ return d.year == year; })).enter().append("div")
  .attr("class",function(d) { return "item " + d.type; })
  .html(function(d){ 
    if (d.type == "other"){
      return "<div class='yearHide'>" + d.year + "</div><div class='title'>" + d.title + "</div><div class='description'>" + d.notes + "</div>" ;
    }
    if (d.type == "album"){
      return "<div class='yearHide'>" + d.year + "</div><div class='art'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div><div class='rank'>Certified : " + d.rank + "</div><div class='label'>Label: " + d.label + "<div class='description'>" + d.strib_copy + "</div><div class='author'> ~ " + d.author + "</div><div class='score'>Score: " + d.strib_score + "</div>" ;
    }
    if (d.type == "alt"){
      return "<div class='yearHide'>" + d.year + "</div><div class='art'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div><div class='description'>" + d.notes + "</div>" ;
    }
    if (d.type == "billboard"){
      return "<div class='yearHide'>" + d.year + "</div><div class='icon'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div><div class='rank'>Billboard Rank: #" + d.rank + "</div>" ;
    }
    if (d.type == "grammy"){
      return  "<div class='yearHide'>" + d.year + "</div><div class='icon'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div><div class='rank'>Grammy Award</div>" ;
    }
    if (d.type == "tour"){
      var textstuff = "";
      if (d.notes != "#") { textstuff = "<div class='description'>" + d.notes + "</div>"; }
      return "<div class='yearHide'>" + d.year + "</div><div class='icon'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div>" + textstuff;
    }
    if (d.type == "tickets"){
      return "<div class='yearHide'>" + d.year + "</div><div class='icon'><img src='img/" + d.art + "' /></div><div class='title'>" + d.title + "</div><div class='rank'>Total Tickets Sold: " + d3.format(",")(d.TicketsSold) + "</div><div class='rank'>Average Tickets Sold: " + d3.format(",")(d.AvgTicketsSold) + "</div><div class='rank'>Gross: $" + d.gross_millions + " million</div>"
    }
 });
}
//SEARCH FILTER TABLE
  $( document ).ready(function() {
for(var i=1978; i<=2016; i++){ spitFirstItems(i); }
spitFirstItems(1958);
spitFirstItems(1975);
     $('#filter_box').keyup(function(i){
        $('.year').hide();
        $(".switch, .button").removeClass("selected");
        var txt = String($('#filter_box').val());
        $('.tickets, .other, .album, .tour, .billboard, .grammy').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).parent().show();
               $(this).show();
           }
        });
        var count = $('.item:visible').length;
        // $('.results').show();
        // $('.results').html(count);
    });
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