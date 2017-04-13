d3.json("./data/data2010.json", function(error, data2010Load) {
d3.json("./data/data2011.json", function(error, data2011Load) {
d3.json("./data/data2012.json", function(error, data2012Load) {
d3.json("./data/data2013.json", function(error, data2013Load) {

var aspect = 900 / 300;
var aspect2 = 900 / 700;
var chart = $("#chart svg");
var mappage = $("#map svg");
var mappage2 = $("#map2 svg");
$(window).on("resize", function() {
    var targetWidth = chart.parent().width();
    var targetWidth2 = mappage.parent().width();
    var targetWidth3 = mappage2.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
    mappage.attr("width", targetWidth2);
    mappage.attr("height", targetWidth2 / aspect2);
    mappage2.attr("width", targetWidth3);
    mappage2.attr("height", targetWidth3 / aspect2);
});



$("#wrapper").css("width","98%");

$(window).on('load resize', function () {
    window.resizeTo(($( window ).width() - 1), $( window ).height());
});

$( document ).ready(function() {

    $("#map2").hide();
    $("#reset").css("background-color","#333");
})

  $("#sort").click(function(){
    $("#map").slideUp("slow");
    $("#map2").slideDown("slow");
    $("#sort").css("background-color","#333");
    $("#reset").css("background-color","#61bd1a");
  });
  $("#reset").click(function(){
    $("#map2").slideUp("slow");
    $("#map").slideDown("slow");
    $("#reset").css("background-color","#333");
    $("#sort").css("background-color","#61bd1a");
  });

var margin = {top: 0, right: 0, bottom: 20, left: 0};
var w = 900;
var h = 250;

var dataset = [ 
	{ key: 0, value: 16.2, state: "AK", total: "$16,206,581.97", state_full: "Alaska"  },
	{ key: 3, value: 14.6, state: "AR", total: "$14,622,465.48", state_full: "Arkansas"  },
	{ key: 4, value: 57.7, state: "CA", total: "$57,748,650.12", state_full: "California"  },
	{ key: 5, value: 8.1, state: "CO", total: "$8,131,661.57", state_full: "Colorado"  },
	{ key: 6, value: 28.2, state: "CT", total: "$28,228,260.78", state_full: "Connecticut"  },
	{ key: 8, value: 7.80, state: "DE", total: "$7,805,483.56", state_full: "Delaware"  },
	{ key: 9, value: 40.8, state: "FL", total: "$40,891,857.68", state_full: "Florida"  },
	{ key: 10, value: 28.8, state: "GA", total: "$28,881,717.63", state_full: "Georgia"  },
	{ key: 12, value: 6.56, state: "ID", total: "$6,553,492.91", state_full: "Idaho"  },
	{ key: 13, value: 60.0, state: "IL", total: "$60,041,822.01", state_full: "Illinois"  },
	{ key: 14, value: 28.2, state: "IN", total: "$28,246,063.87", state_full: "Indiana"  },
	{ key: 15, value: 10.7, state: "IA", total: "$10,717,543.20", state_full: "Iowa"  },
	{ key: 16, value: 23.4, state: "KS", total: "$23,438,027.48", state_full: "Kansas"  },
	{ key: 17, value: 39.5, state: "KY", total: "$39,547,875.72", state_full: "Kentucky"  },
	{ key: 18, value: 90, state: "LA", total: "$187,601,191", state_full: "Louisiana"  },
	{ key: 19, value: 7.40, state: "ME", total: "$7,403,483.41", state_full: "Maine"  },
	{ key: 20, value: 22.3, state: "MD", total: "$22,331,246.36", state_full: "Maryland"  },
	{ key: 21, value: 29.6, state: "MA", total: "$29,607,993.29", state_full: "Massachusetts"  },
	{ key: 22, value: 24.5, state: "MI", total: "$24,541,893.16", state_full: "Michigan"  },
	{ key: 23, value: 14.9, state: "MN", total: "$14,988,004.04", state_full: "Minnesota"  },
	{ key: 24, value: 27.7, state: "MS", total: "$27,795,528.12", state_full: "Mississippi"  },
	{ key: 25, value: 47.7, state: "MO", total: "$47,764,282.06", state_full: "Missouri"  },
	{ key: 27, value: 8.5, state: "NE", total: "$8,593,146.34", state_full: "Nebraska"  },
	{ key: 28, value: 6.26, state: "NV", total: "$6,261,358.48", state_full: "Nevada" },
	{ key: 30, value: 33.8, state: "NJ", total: "$33,887,934.39", state_full: "New Jersey"  },
	{ key: 32, value: 85, state: "NY", total: "$134,493,521.82", state_full: "New York"  },
	{ key: 33, value: 47.0, state: "NC", total: "$47,052,648.87", state_full: "North Carolina"  },
	{ key: 35, value: 41.0, state: "OH", total: "$41,072,513.56", state_full: "Ohio"  },
	{ key: 36, value: 28.3, state: "OK", total: "$28,399,516.73", state_full: "Oklahoma" },
	{ key: 37, value: 15.5, state: "OR", total: "$15,151,849.81", state_full: "Oregon"  },
	{ key: 38, value: 30.7, state: "PA", total: "$30,729,119.67", state_full: "Pennsylvania"  },
	{ key: 40, value: 19.9, state: "SC", total: "$19,983,522.26", state_full: "South Carolina"  },
	{ key: 42, value: 78.8, state: "TN", total: "$78,870,738.99", state_full: "Tennessee"  },
	{ key: 43, value: 95, state: "TX", total: "$196,718,960.26", state_full: "Texas"  },
	{ key: 44, value: 7.98, state: "UT", total: "$7,989,088", state_full: "Utah"  },
	{ key: 45, value: 5.50, state: "VT", total: "$5,507,996.31", state_full: "Vermont"  },
	{ key: 46, value: 100, state: "VA", total: "$1,008,988,074.68", state_full: "Virginia"  },
	{ key: 47, value: 16.5, state: "WA", total: "$16,562,703.65", state_full: "Washington"  },
	{ key: 48, value: 16.1, state: "WV", total: "$16,148,738.40", state_full: "West Virginia" },
	{ key: 49, value: 54.7, state: "WI", total: "$54,757,244", state_full: "Wisconsin"  } ];

var dataset2 = [ 
	{ key: 0, value: 1.44, state: "AK", total: "$1,446,189,444", state_full: "Alaska"  },
	{ key: 3, value: 4.42, state: "AR", total: "$4,428,390,909", state_full: "Arkansas"  },
	{ key: 4, value: 66.0, state: "CA", total: "$66,056,757,855 ", state_full: "California"  },
	{ key: 5, value: 5.31, state: "CO", total: "$5,314,867,064", state_full: "Colorado"  },
	{ key: 6, value: 6.7, state: "CT", total: "$6,723,113,621", state_full: "Connecticut"  },
	{ key: 8, value: 1.6, state: "DE", total: "$1,655,387,071", state_full: "Delaware"  },
	{ key: 9, value: 19.1, state: "FL", total: "$19,180,703,866 ", state_full: "Florida"  },
	{ key: 10, value: 9.3, state: "GA", total: "$9,359,038,151", state_full: "Georgia"  },
	{ key: 12, value: 1.7, state: "ID", total: "$1,761,758,211", state_full: "Idaho"  },
	{ key: 13, value: 16.5, state: "IL", total: "$16,536,234,179", state_full: "Illinois"  },
	{ key: 14, value: 8.3, state: "IN", total: "$8,367,085,690", state_full: "Indiana"  },
	{ key: 15, value: 3.8, state: "IA", total: "$3,805,810,851", state_full: "Iowa"  },
	{ key: 16, value: 2.7, state: "KS", total: "$2,720,787,284", state_full: "Kansas"  },
	{ key: 17, value: 5.9, state: "KY", total: "$5,931,446,503", state_full: "Kentucky"  },
	{ key: 18, value: 7.1, state: "LA", total: "$7,181,407,383", state_full: "Louisiana"  },
	{ key: 19, value: 2.9, state: "ME", total: "$2,959,349,126", state_full: "Maine"  },
	{ key: 20, value: 8.0, state: "MD", total: "$8,052,966,208", state_full: "Maryland"  },
	{ key: 21, value: 13.6, state: "MA", total: "$13,687,392,762", state_full: "Massachusetts"  },
	{ key: 22, value: 12.9, state: "MI", total: "$12,970,899,451", state_full: "Michigan"  },
	{ key: 23, value: 9.3, state: "MN", total: "$9,343,811,915", state_full: "Minnesota"  },
	{ key: 24, value: 4.8, state: "MS", total: "$4,879,175,168", state_full: "Mississippi"  },
	{ key: 25, value: 9.2, state: "MO", total: "$9,209,870,025", state_full: "Missouri"  },
	{ key: 27, value: 1.9, state: "NE", total: "$1,906,330,745", state_full: "Nebraska"  },
	{ key: 28, value: 1.9, state: "NV", total: "$1,918,533,349", state_full: "Nevada" },
	{ key: 30, value: 11.1, state: "NJ", total: "$11,143,784,058", state_full: "New Jersey"  },
	{ key: 32, value: 54.1, state: "NY", total: "$54,192,911,238", state_full: "New York"  },
	{ key: 33, value: 12.4, state: "NC", total: "$12,463,184,143", state_full: "North Carolina"  },
	{ key: 35, value: 17.2, state: "OH", total: "$17,237,076,852", state_full: "Ohio"  },
	{ key: 36, value: 4.7, state: "OK", total: "$4,752,126,532", state_full: "Oklahoma" },
	{ key: 37, value: 5.6, state: "OR", total: "$5,600,397,595", state_full: "Oregon"  },
	{ key: 38, value: 21.6, state: "PA", total: "$21,698,977,826", state_full: "Pennsylvania"  },
	{ key: 40, value: 4.9, state: "SC", total: "$4,921,639,527", state_full: "South Carolina"  },
	{ key: 42, value: 9.0, state: "TN", total: "$9,022,143,146", state_full: "Tennessee"  },
	{ key: 43, value: 29.0, state: "TX", total: "$29,086,162,849", state_full: "Texas"  },
	{ key: 44, value: 2.2, state: "UT", total: "$2,229,362,038", state_full: "Utah"  },
	{ key: 45, value: 1.4, state: "VT", total: "$1,499,744,254", state_full: "Vermont"  },
	{ key: 46, value: 7.6, state: "VA", total: "$7,604,993,529", state_full: "Virginia"  },
	{ key: 47, value: 8.4, state: "WA", total: "$8,407,111,070", state_full: "Washington"  },
	{ key: 48, value: 3.1, state: "WV", total: "$3,181,083,472", state_full: "West Virginia" },
	{ key: 49, value: 7.3, state: "WI", total: "$7,390,660,088", state_full: "Wisconsin"  } ];

var xScale = d3.scale.ordinal()
				.domain(d3.range(dataset.length))
				.rangeRoundBands([0, w], 0.05); 

var yScale = d3.scale.linear()
				.domain([0, d3.max(dataset, function(d) {return d.value;})])
				.range([0, h]);

var key = function(d) {
	return d.key;
};

//Create SVG element
var svg = d3.select("#chart svg")
			.attr("width", w + margin.left + margin.right)
			.attr("height", h + margin.top + margin.bottom)
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg2 = d3.select("#chart svg")
			.attr("width", w + margin.left + margin.right)
			.attr("height", h + margin.top + margin.bottom)
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.state_full + " Recoveries</strong> - " + d.total + "</span>";
  })
var tip3 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.state_full + " Medicaid</strong> - " + d.total + "</span>";
  })

svg.call(tip);
svg.call(tip3);

//Create bars
svg.selectAll("rect")
   .data(dataset, key)
   .enter()
   .append("rect")
   .attr("x", function(m, i) {
		return xScale(i);
   })
   .attr("y", function(m) {
		return h - yScale(m.value);
   })
   .attr("width", xScale.rangeBand())
   .attr("height", function(m) {
		return yScale(m.value);
   })
   .attr("fill", function(m) {
             if (m.state == "MN"){return "#44c767";}
             else{return "#6c7f8c";}

   })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

svg2.selectAll("rect")
   .data(dataset2, key)
   .enter()
   .append("rect")
   .attr("x", function(m, i) {
		return xScale(i);
   })
   .attr("y", function(m) {
		return h - yScale(m.value);
   })
   .attr("width", xScale.rangeBand())
   .attr("height", function(m) {
		return yScale(m.value);
   })
   .attr("fill", function(m) {
             if (m.state == "MN"){return "#44c767";}
             else{return "#333";}

   })
      .on('mouseover', tip3.show)
      .on('mouseout', tip3.hide);


//Create labels
svg.selectAll("text")
   .data(dataset, key)
   .enter()
   .append("text")
   .text(function(d) {
		return d.state;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
		return xScale(i) + xScale.rangeBand() / 2;
   })
   .attr("y", "270")
   .attr("font-family", "sans-serif") 
   .attr("font-size", "11px")
   .attr("fill", "white");

svg2.selectAll("text")
   .data(dataset2, key)
   .enter()
   .append("text")
   .text(function(d) {
		return d.state;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
		return xScale(i) + xScale.rangeBand() / 2;
   })
   .attr("y", "270")
   .attr("font-family", "sans-serif") 
   .attr("font-size", "11px")
   .attr("fill", "black");
   
var sortOrder = false;
var sortBars = function () {
    sortOrder = !sortOrder;
    
    sortItems = function (a, b) {
        if (sortOrder) {
            return a.value - b.value;
        }
        return b.value - a.value;
    };

    svg.selectAll("rect")
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
    });

    svg2.selectAll("rect")
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
    });

    svg.selectAll('text')
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.state;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");

    svg2.selectAll('text')
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.state;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");
};
// Add the onclick callback to the button
d3.select("#sort").on("click", sortBars);
d3.select("#reset").on("click", reset);
function randomSort() {

	
	svg.selectAll("rect")
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
    });

	svg2.selectAll("rect")
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
    });

    svg.selectAll('text')
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.value;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");

    svg2.selectAll('text')
        .sort(sortItems)
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.value;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");
}
function reset() {
	svg.selectAll("rect")
		.sort(function(a, b){
			return a.key - b.key;
		})
		.transition()
        .delay(function (d, i) {
        return i * 50;
		})
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
		});

	svg2.selectAll("rect")
		.sort(function(a, b){
			return a.key - b.key;
		})
		.transition()
        .delay(function (d, i) {
        return i * 50;
		})
        .duration(1000)
        .attr("x", function (d, i) {
        return xScale(i);
		});
		
	svg.selectAll('text')
        .sort(function(a, b){
			return a.key - b.key;
		})
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.state;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");

	svg2.selectAll('text')
        .sort(function(a, b){
			return a.key - b.key;
		})
        .transition()
        .delay(function (d, i) {
        return i * 50;
    })
        .duration(1000)
        .text(function (d) {
        return d.state;
    })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
        .attr("y", "270");
};

var tip2 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.state_full + "</strong> - " + d.state_total + "</span>";
  })

var cartogram1 = {
    margin: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
    },

    selector: '#map2 svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 900 - self.margin.left - self.margin.right;
        self.height = 700 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('rx', 2)
            .attr('ry', 2)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide);

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide)
            .text(function(d) {
                return d.state_postal;
            });
    },

state_pos_co: [{'state_full':'Virginia','state_postal':'VA','row':0,'column':0,'state_total':'$1,008,988,074.68','color':'dq7'},
{'state_full':'Texas','state_postal':'TX','row':0,'column':1,'state_total':'$196,718,960.26','color':'dq7'},
{'state_full':'Louisiana','state_postal':'LA','row':0,'column':2,'state_total':'$187,601,191','color':'dq7'},
{'state_full':'New York','state_postal':'NY','row':0,'column':3,'state_total':'$134,493,521.82','color':'dq7'},
{'state_full':'Tennessee','state_postal':'TN','row':0,'column':4,'state_total':'$78,870,738.99','color':'dq7'},
{'state_full':'Illinois','state_postal':'IL','row':0,'column':5,'state_total':'$60,041,822.01','color':'dq7'},
{'state_full':'California','state_postal':'CA','row':0,'column':6,'state_total':'$57,748,650.12','color':'dq7'},
{'state_full':'Wisconsin','state_postal':'WI','row':0,'column':7,'state_total':'$54,757,244','color':'dq7'},
{'state_full':'Missouri','state_postal':'MO','row':0,'column':8,'state_total':'$47,764,282.06','color':'dq6'},
{'state_full':'North Carolina','state_postal':'NC','row':0,'column':9,'state_total':'$47,052,648.87','color':'dq6'},
{'state_full':'Ohio','state_postal':'OH','row':0,'column':10,'state_total':'$41,072,513.56','color':'dq6'},
{'state_full':'Florida','state_postal':'FL','row':1,'column':0,'state_total':'$40,891,857.68','color':'dq6'},
{'state_full':'Kentucky','state_postal':'KY','row':1,'column':1,'state_total':'$39,547,875.72','color':'dq6'},
{'state_full':'New Jersey','state_postal':'NJ','row':1,'column':2,'state_total':'$33,887,934.39','color':'dq6'},
{'state_full':'Pennsylvania','state_postal':'PA','row':1,'column':3,'state_total':'$30,729,119.67','color':'dq6'},
{'state_full':'Massachusetts','state_postal':'MA','row':1,'column':4,'state_total':'$29,607,993.29','color':'dq5'},
{'state_full':'Georgia','state_postal':'GA','row':1,'column':5,'state_total':'$28,881,717.63','color':'dq5'},
{'state_full':'Oklahoma','state_postal':'OK','row':1,'column':6,'state_total':'$28,399,516.73','color':'dq5'},
{'state_full':'Indiana','state_postal':'IN','row':1,'column':7,'state_total':'$28,246,063.87','color':'dq5'},
{'state_full':'Connecticut','state_postal':'CT','row':1,'column':8,'state_total':'$28,228,260.78','color':'dq5'},
{'state_full':'Mississippi','state_postal':'MS','row':1,'column':9,'state_total':'$27,795,528.12','color':'dq5'},
{'state_full':'Michigan','state_postal':'MI','row':1,'column':10,'state_total':'$24,541,893.16','color':'dq5'},
{'state_full':'Kansas','state_postal':'KS','row':2,'column':0,'state_total':'$23,438,027.48','color':'dq5'},
{'state_full':'Maryland','state_postal':'MD','row':2,'column':1,'state_total':'$22,331,246.36','color':'dq5'},
{'state_full':'South Carolina','state_postal':'SC','row':2,'column':2,'state_total':'$19,983,522.26','color':'dq4'},
{'state_full':'Minnesota','state_postal':'MN','row':2,'column':3,'state_total':'$14,988,004.04','color':'mn'},
{'state_full':'Washington','state_postal':'WA','row':2,'column':4,'state_total':'$16,562,703.65','color':'dq4'},
{'state_full':'Alabama','state_postal':'AL','row':2,'column':5,'state_total':'$16,206,581.97 ','color':'dq4'},
{'state_full':'West Virginia','state_postal':'WV','row':2,'column':6,'state_total':'$16,148,738.40','color':'dq4'},
{'state_full':'Oregon','state_postal':'OR','row':2,'column':7,'state_total':'$15,151,849.81','color':'dq4'},
{'state_full':'Arkansas','state_postal':'AR','row':2,'column':8,'state_total':'$14,622,465.48','color':'dq4'},
{'state_full':'Iowa','state_postal':'IA','row':2,'column':9,'state_total':'$10,717,543.20','color':'dq3'},
{'state_full':'Nebraska','state_postal':'NE','row':2,'column':10,'state_total':'$8,593,146.34','color':'dq3'},
{'state_full':'Colorado','state_postal':'CO','row':3,'column':0,'state_total':'$8,131,661.57','color':'dq3'},
{'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total':'$7,989,088','color':'dq3'},
{'state_full':'Delaware','state_postal':'DE','row':3,'column':2,'state_total':'$7,805,483.56','color':'dq3'},
{'state_full':'Maine','state_postal':'ME','row':3,'column':3,'state_total':'$7,403,483.41','color':'dq3'},
{'state_full':'Idaho','state_postal':'ID','row':3,'column':4,'state_total':'$6,553,492.91','color':'dq3'},
{'state_full':'Nevada','state_postal':'NV','row':3,'column':5,'state_total':'$6,261,358.48','color':'dq3'},
{'state_full':'Vermont','state_postal':'VT','row':3,'column':6,'state_total':'$5,507,996.31','color':'dq3'},
{'state_full':'Hawaii','state_postal':'HI','row':3,'column':7,'state_total':'$4,537,669.87','color':'dq2'},
{'state_full':'Rhode Island','state_postal':'RI','row':3,'column':8,'state_total':'$4,381,891.74','color':'dq2'},
{'state_full':'New Hampshire','state_postal':'NH','row':3,'column':9,'state_total':'$3,663,350.94','color':'dq2'},
{'state_full':'South Dakota','state_postal':'SD','row':3,'column':10,'state_total':'$3,053,873.46','color':'dq2'},
{'state_full':'New Mexico','state_postal':'NM','row':4,'column':0,'state_total':'$2,017,386.44','color':'dq2'},
{'state_full':'Wyoming','state_postal':'WY','row':4,'column':1,'state_total':'$1,623,271.63','color':'dq2'},
{'state_full':'Alaska','state_postal':'AK','row':4,'column':2,'state_total':'$1,093,135.83','color':'dq2'},
{'state_full':'Montana','state_postal':'MT','row':4,'column':3,'state_total':'$985,871.37','color':'dq1'},{'state_full':'Arizona','state_postal':'AZ','row':4,'column':4,'state_total':'$622,973.75','color':'dq1'},
{'state_full':'D.C.','state_postal':'DC','row':4,'column':5,'state_total':'$398,817.22','color':'dq1'},
{'state_full':'North Dakota','state_postal':'ND','row':4,'column':6,'state_total':'No data available','color':'none'}]

};

var cartogram2 = {
    margin: {
        top: 90,
        right: 0,
        bottom: 0,
        left: 0
    },

    selector: '#map svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 900 - self.margin.left - self.margin.right;
        self.height = 700 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('rx', 2)
            .attr('ry', 2)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide);

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return d.color;
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .call(tip2)
            .on('mouseover', tip2.show)
             .on('mouseout', tip2.hide)
            .text(function(d) {
                return d.state_postal;
            });
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total':'$16,206,581.97 ','color':'dq4'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total':'$1,093,135.83','color':'dq2'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total':'$622,973.75','color':'dq1'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total':'$14,622,465.48','color':'dq4'},
        {'state_full':'California','state_postal':'CA','row':2,'column':0,'state_total':'$57,748,650.12','color':'dq7'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total':'$8,131,661.57','color':'dq3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total':'$28,228,260.78','color':'dq5'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total':'$398,817.22','color':'dq1'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total':'$7,805,483.56','color':'dq3'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total':'$40,891,857.68','color':'dq6'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total':'$28,881,717.63','color':'dq5'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total':'$4,537,669.87','color':'dq2'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total':'$6,553,492.91','color':'dq3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total':'$60,041,822.01','color':'dq7'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total':'$28,246,063.87','color':'dq5'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total':'$10,717,543.20','color':'dq3'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total':'$23,438,027.48','color':'dq5'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total':'$39,547,875.72','color':'dq6'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total':'$187,601,191','color':'dq7'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total':'$7,403,483.41','color':'dq3'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total':'$22,331,246.36','color':'dq5'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total':'$29,607,993.29','color':'dq6'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total':'$24,541,893.16','color':'dq5'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total':'$14,988,004.04','color':'mn'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total':'$27,795,528.12','color':'dq5'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total':'$47,764,282.06','color':'dq6'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total':'$985,871.37','color':'dq1'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total':'$8,593,146.34','color':'dq2'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total':'$6,261,358.48','color':'dq3'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total':'$3,663,350.94','color':'dq2'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total':'$33,887,934.39','color':'dq6'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total':'$2,017,386.44','color':'dq2'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total':'$134,493,521.82','color':'dq7'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total':'$47,052,648.87','color':'dq6'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total':'No data available','color':'none'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total':'$41,072,513.56','color':'dq6'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total':'$28,399,516.73','color':'dq5'},
        {'state_full':'Oregon','state_postal':'OR','row':1,'column':0,'state_total':'$15,151,849.81','color':'dq4'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total':'$30,729,119.67','color':'dq6'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total':'$4,381,891.74','color':'dq2'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total':'$19,983,522.26','color':'dq4'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total':'$3,053,873.46','color':'dq2'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total':'$78,870,738.99','color':'dq7'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total':'$196,718,960.26','color':'dq7'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total':'$7,989,088','color':'dq3'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total':'$5,507,996.31','color':'dq3'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total':'$1,008,988,074.68','color':'dq7'},
        {'state_full':'Washington','state_postal':'WA','row':0,'column':0,'state_total':'$16,562,703.65','color':'dq4'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total':'$16,148,738.40','color':'dq4'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total':'$54,757,244','color':'dq7'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total':'$1,623,271.63','color':'dq2'}]

};

$(document).ready(function() {
    cartogram1.init();
    cartogram2.init();

        var targetWidth = chart.parent().width();
    var targetWidth2 = mappage.parent().width();
    var targetWidth3 = mappage2.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
    mappage.attr("width", targetWidth2);
    mappage.attr("height", targetWidth2 / aspect2);
    mappage2.attr("width", targetWidth3);
    mappage2.attr("height", targetWidth3 / aspect2);
});

});
});
});
});