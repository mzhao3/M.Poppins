// Width and Height of the whole visualization
var width = 800;
var height = 800;

// Create SVG
var svg = d3.select( "body" )
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

// Append empty placeholder g element to the SVG
// g will contain geometry elements
var g = svg.append( "g" );


// Set projection to fit the screen
var albersProjection = d3.geoAlbers()
    .fitSize([width, height], neighborhoods_json);

// Create GeoPath function that uses built-in D3 functionality to turn
// lat/lon coordinates into screen coordinates
var geoPath = d3.geoPath()
    .projection( albersProjection );

// Classic D3... Select non-existent elements, bind the data, append the elements, and apply attributes
g.selectAll( "path" )
    .data( district_json.features )
    .enter()
    .append( "path" )
    .attr( "fill", "#ccc" )
    .attr( "stroke", "#333")
    .attr( "d", geoPath )
    .attr( "class", "district" )

    .on( "mouseover", function ( d ) {
			d3.select( "h2" )
				.text( d.properties.SchoolDist );
			d3.select( this )
				.attr( "class", "district hover" );
		} )
    .on( "mouseout", function ( d ) {
			d3.select( "h2" )
				.text( "" );
			d3.select( this )
				.attr( "class", "district" );
      });

var districts = [];

var spend_data = {}
d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/csd_expend.csv", function(csv){

  console.log(csv)
  for (var i = 0 ; i < csv.length ; i++) {
    districts[parseInt(csv[i]["csd"])] = parseInt(csv[i]["csd"]);
    if (csv[i]["year"] == "2005")
      spend_data[parseInt(csv[i]["csd"])] = csv[i]["support_csd"];
  }
  console.log(districts)
  console.log(spend_data)

});

g.selectAll("rect")
   .data(district_json.features)
   .enter().append("rect")
   .attr("x", function(d) {
       return geoPath.centroid(d)[0];
   })
   .attr("y", function(d) {
       return geoPath.centroid(d)[1];
   })
   .attr("width", 12)
   .style("fill", "green")
   .attr("text-anchor", "middle")
   .attr("font-size", "12px")
   .text("foo")
