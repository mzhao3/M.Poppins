// Width and Height of the whole visualization
var width = 600;
var height = 600;

var colors = {"nyc": "black", "Staten Island": "red", "Brooklyn":"green", "Queens":"orange", "Bronx": "blue", "Manhattan": "purple"}
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
    .rotate( [71.057,0] )
    .fitSize([width, height], district_json);

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
    .attr( "district", function(d) {
      return d.properties.SchoolDist})
    .on( "mouseover", function ( d ) {
			d3.select( "#what" )
				.text( "District " + d.properties.SchoolDist  );
			d3.select( this )
				.attr( "class", "district hover" );
		} )
    .on( "mouseout", function ( d ) {
			d3.select( "#what" )
				.text( "No district selected." );
			d3.select( this )
				.attr( "class", "district" );
      });
var search_spend = "support";
var search_year = "2005";


var update = function(search_spend, search_year ) {
  d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/csd_expend.csv", function(csv){
  var districts = [];

  var spend_data = {};
  var avg_data = {};

  for (var i = 1 ; i < csv.length; i++) {

    districts[(csv[i]["csd"])] = [parseInt(csv[i]["csd"]), csv[i]["boro"]];

    if (csv[i]["year"] == search_year){
      spend_data[parseInt(csv[i]["csd"])] = parseInt(csv[i][search_spend + "_csd"]);
      avg_data[csv[i]["boro"]] = parseInt(csv[i][search_spend + "_boro"]);
      avg_data["nyc"] = parseInt(csv[i][search_spend + "_nyc"]);
    }
  }
  var min = d3.min([d3.min(d3.values(spend_data)), parseInt(d3.min(d3.values(avg_data)))] )

  var max = d3.max([parseInt(d3.max(d3.values(spend_data))), parseInt(d3.max(d3.values(avg_data)))] )

  var yScale = d3.scaleLinear()
    .domain([min,max])
    .rangeRound([0,50]);

g.selectAll("rect").remove()
var staterect =
  g.selectAll(".stateRect")
      .data(district_json.features)
        .enter().append("rect")
        .attr("district", function(d) {
          return d.properties.SchoolDist
        })
        .attr("x", function(d) {
            return geoPath.centroid(d)[0]+10;
        })
        .attr("y", function(d) {
            return geoPath.centroid(d)[1];
        })
        .attr("height", 0)
        .attr("height",
         function(d){
          return yScale(parseInt(spend_data[parseInt(d.properties.SchoolDist)]))} )
        .attr("width", 10)
        .style("fill", "steelblue")
        .on( "mouseover", function ( d ) {
    			d3.select( "#what" )
    				.text(dd_spend[dd_spend.selectedIndex].text + ": In District "+ d.properties.SchoolDist + ": $" + parseFloat(spend_data[parseInt(d.properties.SchoolDist)]).toFixed(2) + "    In " + districts[d.properties.SchoolDist][1] + ": $" + parseFloat(avg_data[districts[d.properties.SchoolDist][1]]).toFixed(2) + "   In NYC: $" + parseFloat(avg_data["nyc"]).toFixed(2) + " ");
    			d3.select( this )
    				.attr( "class", "district hover" );
    		} )
        .on( "mouseout", function ( d ) {
    			d3.select( "#what" )
    				.text( "No district selected." );
    			d3.select( this )
    				.attr( "class", "district" );
          });

staterect.exit().remove();
staterect
  .transition().duration(10)
  .attr("height",
   function(d){
    return yScale(parseInt(spend_data[parseInt(d.properties.SchoolDist)]))} )


g.selectAll(".boroRect").remove()
var bororect =
g.selectAll(".boroRect")
    .data(district_json.features)
      .enter().append("rect")
      .attr("boro", function(d) {
        return d.properties.boro
      })
      .attr("x", function(d) {
          return geoPath.centroid(d)[0];
      })
      .attr("y", function(d) {
          return geoPath.centroid(d)[1];
      })
      .attr("height",
       function(d){

        return yScale(parseInt(avg_data[districts[d.properties.SchoolDist][1]]))} )

      .attr("width", 10)
      .style("fill", function(d) {
        return colors[districts[d.properties.SchoolDist][1]];
      })
      .on( "mouseover", function ( d ) {
  			d3.select( "#what" )
  				.text(dd_spend[dd_spend.selectedIndex].text + ": In District "+ d.properties.SchoolDist + ": $" + parseFloat(spend_data[parseInt(d.properties.SchoolDist)]).toFixed(2) + "    In " + districts[d.properties.SchoolDist][1] + ": $" + parseFloat(avg_data[districts[d.properties.SchoolDist][1]]).toFixed(2) + "   In NYC: $" + parseFloat(avg_data["nyc"]).toFixed(2) + " ");
  			d3.select( this )
  				.attr( "class", "district hover" );
  		} )
      .on( "mouseout", function ( d ) {
  			d3.select( "#what" )
  				.text( "No district selected." );
  			d3.select( this )
  				.attr( "class", "district" );
        });
bororect.exit().remove();
bororect
  .transition().duration(10)
  .attr("height",
   function(d){
    return yScale(parseInt(avg_data[districts[d.properties.SchoolDist][1]]))} )


g.selectAll(".nycRect").remove()
var nycrect =
g.selectAll(".nycRect")
    .data(district_json.features)
      .enter().append("rect")
      .attr("city", "nyc")
      .attr("x", function(d) {
          return geoPath.centroid(d)[0]-10;
      })
      .attr("y", function(d) {
          return geoPath.centroid(d)[1];
      })
      .attr("height",
       function(d){
        return yScale(parseInt(avg_data["nyc"]))} )

      .attr("width", 10)
      .style("fill", colors["nyc"])
      .on( "mouseover", function ( d ) {
  			d3.select( "#what" )
  				.text(dd_spend[dd_spend.selectedIndex].text + ": In District "+ d.properties.SchoolDist + ": $" + parseFloat(spend_data[parseInt(d.properties.SchoolDist)]).toFixed(2) + "    In " + districts[d.properties.SchoolDist][1] + ": $" + parseFloat(avg_data[districts[d.properties.SchoolDist][1]]).toFixed(2) + "   In NYC: $" + parseFloat(avg_data["nyc"]).toFixed(2) + " ");
  			d3.select( this )
  				.attr( "class", "district hover" );
  		} )
      .on( "mouseout", function ( d ) {
  			d3.select( "#what" )
  				.text( "No district selected." );
  			d3.select( this )
  				.attr( "class", "district" );
        });
nycrect.exit().remove();
nycrect
  .transition().duration(10)
  .attr("height",
   function(d){
    return yScale(parseInt(avg_data["nyc"]))} )

});
};

//event listener for spending dropdown
update(search_spend, search_year);
var dd_spend = document.getElementById("spending");
dd_spend.addEventListener("change", function() {
  search_spend = dd_spend.value;
  update(search_spend, search_year);
});

// event listener for year dropdown
var dd_year = document.getElementById("year");
dd_year.addEventListener("change", function() {
  search_year = dd_year.value;
  update(search_spend, search_year);
});
