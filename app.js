angular.module("moneyApp", [])
.controller("moneyController", ["$scope", "$http", function($scope, $http){
	
	$scope.stateFIPS = {
	    "01": {
	        "abbreviation": "AL",
	        "name": "Alabama"
	    },
	    "02": {
	        "abbreviation": "AK",
	        "name": "Alaska"
	    },
	    "03": {
	        "abbreviation": "AS",
	        "name": "American Samoa"
	    },
	    "04": {
	        "abbreviation": "AZ",
	        "name": "Arizona"
	    },
	    "05": {
	        "abbreviation": "AR",
	        "name": "Arkansas"
	    },
	    "06": {
	        "abbreviation": "CA",
	        "name": "California"
	    },
	    "07": {
	        "abbreviation": "CZ",
	        "name": "Canal Zone"
	    },
	    "08": {
	        "abbreviation": "CO",
	        "name": "Colorado"
	    },
	    "09": {
	        "abbreviation": "CT",
	        "name": "Connecticut"
	    },
	    "10": {
	        "abbreviation": "DE",
	        "name": "Delaware"
	    },
	    "11": {
	        "abbreviation": "DC",
	        "name": "District Of Columbia"
	    },
	    "12": {
	        "abbreviation": "FL",
	        "name": "Florida"
	    },
	    "13": {
	        "abbreviation": "GA",
	        "name": "Georgia"
	    },
	    "14": {
	        "abbreviation": "GU",
	        "name": "Guam"
	    },
	    "15": {
	        "abbreviation": "HI",
	        "name": "Hawaii"
	    },
	    "16": {
	        "abbreviation": "ID",
	        "name": "Idaho"
	    },
	    "17": {
	        "abbreviation": "IL",
	        "name": "Illinois"
	    },
	    "18": {
	        "abbreviation": "IN",
	        "name": "Indiana"
	    },
	    "19": {
	        "abbreviation": "IA",
	        "name": "Iowa"
	    },
	    "20": {
	        "abbreviation": "KS",
	        "name": "Kansas"
	    },
	    "21": {
	        "abbreviation": "KY",
	        "name": "Kentucky"
	    },
	    "22": {
	        "abbreviation": "LA",
	        "name": "Louisiana"
	    },
	    "23": {
	        "abbreviation": "ME",
	        "name": "Maine"
	    },
	    "24": {
	        "abbreviation": "MD",
	        "name": "Maryland"
	    },
	    "25": {
	        "abbreviation": "MA",
	        "name": "Massachusetts"
	    },
	    "26": {
	        "abbreviation": "MI",
	        "name": "Michigan"
	    },
	    "27": {
	        "abbreviation": "MN",
	        "name": "Minnesota"
	    },
	    "28": {
	        "abbreviation": "MS",
	        "name": "Mississippi"
	    },
	    "29": {
	        "abbreviation": "MO",
	        "name": "Missouri"
	    },
	    "30": {
	        "abbreviation": "MT",
	        "name": "Montana"
	    },
	    "31": {
	        "abbreviation": "NE",
	        "name": "Nebraska"
	    },
	    "32": {
	        "abbreviation": "NV",
	        "name": "Nevada"
	    },
	    "33": {
	        "abbreviation": "NH",
	        "name": "New Hampshire"
	    },
	    "34": {
	        "abbreviation": "NJ",
	        "name": "New Jersey"
	    },
	    "35": {
	        "abbreviation": "NM",
	        "name": "New Mexico"
	    },
	    "36": {
	        "abbreviation": "NY",
	        "name": "New York"
	    },
	    "37": {
	        "abbreviation": "NC",
	        "name": "North Carolina"
	    },
	    "38": {
	        "abbreviation": "ND",
	        "name": "North Dakota"
	    },
	    "39": {
	        "abbreviation": "OH",
	        "name": "Ohio"
	    },
	    "40": {
	        "abbreviation": "OK",
	        "name": "Oklahoma"
	    },
	    "41": {
	        "abbreviation": "OR",
	        "name": "Oregon"
	    },
	    "42": {
	        "abbreviation": "PA",
	        "name": "Pennsylvania"
	    },
	    "43": {
	        "abbreviation": "PR",
	        "name": "Puerto Rico"
	    },
	    "44": {
	        "abbreviation": "RI",
	        "name": "Rhode Island"
	    },
	    "45": {
	        "abbreviation": "SC",
	        "name": "South Carolina"
	    },
	    "46": {
	        "abbreviation": "SD",
	        "name": "South Dakota"
	    },
	    "47": {
	        "abbreviation": "TN",
	        "name": "Tennessee"
	    },
	    "48": {
	        "abbreviation": "TX",
	        "name": "Texas"
	    },
	    "49": {
	        "abbreviation": "UT",
	        "name": "Utah"
	    },
	    "50": {
	        "abbreviation": "VT",
	        "name": "Vermont"
	    },
	    "51": {
	        "abbreviation": "VA",
	        "name": "Virginia"
	    },
	    "52": {
	        "abbreviation": "VI",
	        "name": "Virgin Islands"
	    },
	    "53": {
	        "abbreviation": "WA",
	        "name": "Washington"
	    },
	    "54": {
	        "abbreviation": "WV",
	        "name": "West Virginia"
	    },
	    "55": {
	        "abbreviation": "WI",
	        "name": "Wisconsin"
	    },
	    "56": {
	        "abbreviation": "WY",
	        "name": "Wyoming"
	    }
	};
	
	$scope.candidates = [
	  {
	    "name":"Lindsey Graham",
	    "committee":"GRAHAM, LINDSEY O",
	    "column":"export_GRA"
	  },
	  {
	    "name":"Bobby Jindal",
	    "committee":"JINDAL, BOBBY",
	    "column":"export_JIN"
	  },
	  {
	    "name":"Marco Rubio",
	    "committee":"RUBIO, MARCO",
	    "column":"export_RUB"
	  },
	  {
	    "name":"Rand Paul",
	    "committee":"PAUL, RAND",
	    "column":"export_PAU"
	  },
	  {
	    "name":"Jeb Bush",
	    "committee":"BUSH, JEB",
	    "column":"export_BUS"
	  },
	  {
	    "name":"Ben Carson",
	    "committee":"CARSON, BENJAMIN S SR MD",
	    "column":"export_CAR"
	  },
	  {
	    "name":"Ted Cruz",
	    "committee":"CRUZ, RAFAEL EDWARD TED",
	    "column":"export_CRU"
	  },
	  {
	    "name":"Carly Fiorina",
	    "committee":"FIORINA, CARLY",
	    "column":"export_FIO"
	  },
	  {
	    "name":"Rick Perry",
	    "committee":"PERRY, JAMES R (RICK)",
	    "column":"export_PER"
	  },
	  {
	    "name":"Mike Huckabee",
	    "committee":"HUCKABEE, MIKE",
	    "column":"export_HUC"
	  },
	  {
	    "name":"Rick Santorum",
	    "committee":"SANTORUM, RICHARD J.",
	    "column":"export_SAN"
	  },
	  {
	    "name":"Donald Trump",
	    "committee":"TRUMP, DONALD J",
	    "column":"export_TRU"
	  },
	  {
	    "name":"George Pataki",
	    "committee":"PATAKI, GEORGE E",
	    "column":"export_PAT"
	  }
	];
	
	$scope.candidates.sort(function(a, b){ return (b.name.substr(b.name.indexOf(" ") + 1, 100) < a.name.substr(a.name.indexOf(" ") + 1, 100)) ? 1 : -1 });
	$scope.candidates[0].selected = true;
	
	var container = d3.select("#container");

	var path = d3.geo.path();

	var svg = container.append("svg")
		.append("g");

	var counties, country, states;
	
	var hover = d3.select(".hover");
	
	var selectedCandidate;
	
	svg.on("mousemove",function(){
		hover.style({
			left: function(){
				if(d3.event.pageX < container.node().offsetWidth / 2)
					return (d3.event.pageX + 10) + "px"
				else
					return (d3.event.pageX - hover.node().offsetWidth - 10 ) + "px"
			},
			top: function(){
				if(d3.event.pageY < container.node().offsetHeight / 2)
					return (d3.event.pageY + 10) + "px"				
				else
					return (d3.event.pageY - hover.node().offsetHeight - 10 ) + "px"
			}
		});
	});
		
	d3.json("/counties_with_results_topo.json", function(error, us) {
	  if (error) throw error;

		country = svg.append("g")
	      .attr("class", "country");
	
		counties = country.selectAll(".county")
	      .data(topojson.feature(us, us.objects.counties_with_results).features)
	    .enter().append("path")
	      .attr("d", path)
		  .classed("county", true)
		  .on("mouseover", function(d){ $scope.$apply(function(){ $scope.selectedCounty = d.properties }); })
		  .on("mouseout", function(d){ $scope.$apply(function(){ $scope.selectedCounty = null }) });
	
	
		states = country.selectAll(".state")
		  .data(topojson.feature(us, us.objects.states).features)
	    .enter().append("path")
	      .attr("d", path)
		  .classed("state", true);
		

		
		resize();
		$scope.toggleColors($scope.candidates[0]);
		d3.select(window).on("resize", resize);
	});


	function resize(){
		svg.attr("transform", "scale(" + d3.select("#container").node().offsetWidth / 900 + ")")
			.style("height", function(){ return (d3.select("#container").node().offsetWidth * .618) });
		d3.select("svg").style("height", function(){ return (d3.select("#container").node().offsetWidth * .618) + "px" });
		d3.select("#container").style("height", function(){ return (d3.select("#container svg").node().offsetHeight + d3.select(".title").node().offsetHeight ) + "px"  });
		d3.select("#rail").style("height", function(){ return (d3.select("#container svg").node().offsetHeight + d3.select(".title").node().offsetHeight ) + "px" });
	}	
	
	$scope.toggleColors = function(candidate){
		$scope.candidates.forEach(function(candidate){ candidate.selected = false; });
		$scope.candidates[$scope.candidates.indexOf(candidate)].selected = true;
		$scope.selectedCandidate = candidate;
		counties.classed("selected", function(d) { 
		 	return $scope.candidates[$scope.candidates.indexOf(candidate)].selected == true && d.properties.export_win == candidate.committee;
		});
		
		counties.classed("money", function(d) { 
			return $scope.candidates[$scope.candidates.indexOf(candidate)].selected == true && d.properties[candidate.column] > 0
		});
	}
	
	$scope.sortCandidatesTable = function(candidate){
		return $scope.selectedCounty[candidate.column];
	}
	
	
}]).directive("sizeToSibling", function() {
	return {
		link: function(scope, element, attr) {
			

			resize();
			window.addEventListener("resize", resize);

			function resize(){
				element.css({
					width: (window.innerWidth - document.getElementById(attr.sibling).offsetWidth - 20) + "px"
				});
			}

		}
	};	

});

// Thanks to http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };