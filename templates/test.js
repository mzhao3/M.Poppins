function getCsv(schoolname) {

  d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/2015-2016_Demographic_Data_-_Grades_9-12_School.csv", function(csv) {

    if (!document.getElementById(csv["School Name"])) {
      var button = document.createElement("BUTTON");
      button.innerHTML = csv["School Name"];
      button.id = csv["School Name"];
      button.addEventListener('click', function(e) {
        getCsv(this.id);
        var title = document.getElementById("which_school");
        title.innerHTML = this.id;
      });
      document.getElementById("addhere").appendChild(button);
    }

    if (csv["School Name"] == schoolname && csv["Category "] == "All Students") {
      //console.log(csv);
      console.log(csv["School Name"]);
      data = [csv["#Asian"], csv["#Black"], csv["#White"], csv["#Hispanic"], csv["#Other"]];
      console.log(data);
      var c = ['orange', 'yellow', 'blue', 'green', 'red']


      var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


      svg.append("g")
        .attr("class", "labels");
      /*
	    var color = d3.scaleOrdinal()
		.domain(["Asian", "Black", "White", "Hispanic"])
		.range(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c', '#884aaf']);
    */
      // Generate the pie
      var pie = d3.pie();

      // Generate the arcs
      var arc = d3.arc()
        .innerRadius(radius / 2)
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
          console.log(d);
          console.log(i);
          //console.log(color(i));
          return c[i];
        })
        .attr("d", arc);



    }
  });

}

getCsv("Stuyvesant High School");
//getCsv("Bronx High School of Science");
//getCsv("Eleanor Roosevelt High School");
//getCsv("Benjamin N. Cardozo High School");
