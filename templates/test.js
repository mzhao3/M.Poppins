function getCsv(schoolname){
    
    d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/2015-2016_Demographic_Data_-_Grades_9-12_School.csv", function(csv){
	if (csv["School Name"] == schoolname && csv["Category "] == "All Students"){
	    console.log(csv);
	    console.log(csv["School Name"]);
	    data = [csv["#Asian"], csv["#Black"], csv["#White"], csv["#Hispanic"]];

	    
	    var svg = d3.select("svg"),
		width = svg.attr("width"),
		height = svg.attr("height"),
		radius = Math.min(width, height) / 2,
		g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	    svg.append("g")
		.attr("class", "labels");
	    
	    var color = d3.scaleOrdinal()
		.domain(["Asian", "Black", "White", "Hispanic"])
		.range(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c', '#792B1A']);
    
	    // Generate the pie
	    var pie = d3.pie();
	    
	    // Generate the arcs
	    var arc = d3.arc()
		.innerRadius(radius/2)
		.outerRadius(radius);
	    
	    //Generate groups
	    var arcs = g.selectAll("arc")
		.data(pie(data))
		.enter()
		.append("g")
		.attr("class", "arc")
	    
	    //Draw arc paths
	    arcs.append("path")
		.attr("fill", function(d, i) {
		    return color(i);
		})
		.attr("d", arc);
	    
	    
	}});
    
    }

getCsv("Stuyvesant High School");

