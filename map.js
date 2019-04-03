// Width and Height of the whole visualization
var width = 700;
var height = 580;
var mdata = fetch("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/nyc_map.json")
.then(response => response.json())
	.then(parsed => console.log(parsed)/* parsed contains the parsed json object */);
console.log(mdata)
// Create SVG
var svg = d3.select( "body" )
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

// Append empty placeholder g element to the SVG
// g will contain geometry elements
var g = svg.append( "g" );

// Width and Height of the whole visualization
// Set Projection Parameters
var albersProjection = d3.geoAlbers()
    .scale(400 )
    .rotate( [71.057,0] )
    .center( [0, 0] )
    .translate( [width/2,height/2] );

// Create GeoPath function that uses built-in D3 functionality to turn
// lat/lon coordinates into screen coordinates
var geoPath = d3.geoPath()
    .projection( albersProjection );

console.log(mdata)
// Classic D3... Select non-existent elements, bind the data, append the elements, and apply attributes
g.selectAll( "path" )
    .data( mdata.features )
    .enter()
    .append( "path" )
    .attr( "fill", "#ccc" )
    .attr( "stroke", "#333")
    .attr( "d", geoPath );
