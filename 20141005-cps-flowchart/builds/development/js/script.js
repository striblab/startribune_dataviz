(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var aspect = 960 / 1300,
    chart = $("#target svg");
$(window).on("resize", function() {
    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
});

var margin = {top: 100, right: 200, bottom: 0, left: 0},
   width = 1600 - margin.right - margin.left,
    height = 1400- margin.top - margin.bottom;
    
var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.x, d.y]; });

var svg = d3.select("#target svg")
  .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var stretch = svg.append("line")
         .attr("x1", 800)
          .attr("y1", 1200)
          .attr("x2", 800)
           .attr("y2", 40)
            .attr("stroke-width", 1)
            .attr("stroke", "#ddd");

  var stretch2 = svg.append("line")
            .attr("x1", 200)
            .attr("y1", 1200)
            .attr("x2", 200)
           .attr("y2", 40)
           .attr("stroke-width", 1)
            .attr("stroke", "#ddd");

  var stretch3 = svg.append("line")
            .attr("x1", 800)
            .attr("y1", 40)
            .attr("x2", 700)
           .attr("y2", 20)
           .attr("stroke-width", 1)
           .attr("stroke", "#ddd");

  var stretch4 = svg.append("line")
            .attr("x1", 200)
            .attr("y1", 40)
            .attr("x2", 270)
            .attr("y2", 20)
            .attr("stroke-width", 1)
            .attr("stroke", "#ddd");


//var circle = svg.append("circle")
  //                       .attr("cx", 700)
    //                     .attr("cy", 1100)
      //                   .attr("class", "repeated1")
        //                 .attr("r", 17);

//var circle2 = svg.append("circle")
  //                       .attr("cx", 200)
    //                     .attr("cy", 1100)
      //                   .attr("class", "repeated2")
        //                 .attr("r", 14);

var flare = 
{
 "size": 100, "def": "A report is made to Child Protective Services, a county agency enforcing child welfare laws.", "name": "  ",
 "children": [
  {"name": "Screened Out", "size": 71, "def": "Child protection services are not offered."},
  {
   "size": 29, "def": "Accepted to determine if a child is safe.", "name": "Screened In",
   "children": [
{
     "size": 27, "def": "An investigation to determine whether the child was abused and if so, by whom.", "name": "  Investigation",
     "children": [
      {"name": "No Services ", "size": 48, "def": "Child protection decides no services are needed to keep a child safe."},
      {"name": "Services Needed", "def": "Child Protection decides family requires services like parenting classes, therapy, or drug or alcohol treatment.", "size": 51, "children":[{"name": "  Juvenile Court        ", "size": 32, "def": "County files a Child in Need of Protection or Services petition, which asks a juvenile court judge to take action to keep a child safe."}]}
      ]
    },
    {
     "size": 71, "def": "A determination of the child's safety, with a goal of engaging a family.", "name": "  Family Assessment",
     "children": [
      {"name": "Juvenile Court ", "size": 7, "def": "County files a Child in Need of Protection or Services petition, which asks a juvenile court judge to take action to keep a child safe."},
      {"name": "No Services", "size": 71, "def": "Child protection decides no services are needed to keep a child safe."},
      {"name": "Investigation", "size": 6, "def": "Child Protection decides the abuse warrants an investigation to determine whether the child was abused and if so, by whom."},
      {"name": "Services Offered", "size": 13, "def": "County offers services like parenting classes, therapy, or drug or alcohol treatment."},
      {"name": "Services  Needed", "size": 15, "def": "County says parents need to participate in services like parenting classes, therapy, or drug or alcohol treatment."}
     ]
    }
  
   ]
  }

 ]
};
root = flare;
root.x0 = height / 2;
root.y0 = 0;

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });
 // nodes.forEach(function(d) { d.x = d.depth * 100; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
      .on("click", click)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "#73A073" : "#fff"; });

 // nodeEnter.append("text")
 //     .attr("class", "selected2")
   //   .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
     // .attr("dy", ".35em")
    //  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
     //   .attr('transform', function(d){ 
     //       return 'translate(5, 85)';
     //   })
     // .text(function(d) { return d.name; })
     // .style("fill-opacity", 1e-6);

nodeEnter.append("foreignObject")
    .attr("width", 200)
    .attr("height", 200)
    .attr("height", 200)
      .attr("x", 0)
      .attr("y", 85)
     .attr('transform', function(d){ 
          return 'translate(-45, 0)';
       })
    .append("xhtml:body")
    .attr("class", "selected2")
     .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
    .html(function(d) { return "<center>" + d.name + "</center>"; });

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodeUpdate.select("circle")
      .attr("r", function(d) { return d.size - 5; })
      .style("fill", function(d) { return d._children ? "#73A073" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

d3.select("selected")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });


}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

function mouseover(d) {
    d3.select(this).append("text")
        .attr("class", "hover")
        .attr("class", "selected")
        .attr('transform', function(d){ 
            return 'translate(4, 15)';
        })

    d3.select(this).append("foreignObject")
    .attr("width", 300)
    .attr("height", 300)
    .append("xhtml:body")
    .attr("class", "selected3")
    .attr('transform', function(d){ 
            return 'translate(300, 300)';
        })
    .html("<h4>" + d.size +"%</h4>" + d.def);
}

// Toggle children on click.
function mouseout(d) {
    d3.select(this).select("text.hover").remove();
    d3.select(this).select("text.selected").remove();
    d3.select(this).select(".selected3").remove();
    d3.select(this).select("text.selected2").attr("display", "block");
}

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

root.children.forEach(collapse);
update(root);

d3.select(self.frameElement).style("height", "800px");
},{}]},{},[1])