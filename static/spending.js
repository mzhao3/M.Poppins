d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/csd_expend.csv", function(csv){

    var i;
    for (i=1; i<=32; i++){
	var button = document.createElement("BUTTON");
	button.id = i.toString();
	if(i < 10){
	    button.innerHTML = "District 0" + i.toString();
	}
	else{
	    button.innerHTML = "District " + i.toString();
	}
	
	button.setAttribute("drawn", 0);
	button.setAttribute("class", "btn btn-info");
	button.addEventListener('click', function(e){
	    district_data = data[parseInt(this.id)-1];
	    var isDrawn = this.getAttribute("drawn");
	    if(isDrawn==1){
		//clear district data
		console.log("inside if");
  		d3.select("#district"+this.id.toString()).remove();
		d3.select("text.line_label").remove();
		d3.selectAll(".district"+this.id.toString()).remove();
		this.setAttribute("drawn", 0);
	    }
	    else{
		//draw line
  		g.append("path")
  		    .datum(district_data)
  		    .attr("id", "district"+this.id.toString())
  		    .attr("class", "line")
  		    .style("stroke", color(i))
  		    .attr("d", lineFunction);

		//draw dots
		g.selectAll("dot")
		    .data(district_data)
  		    .enter().append("circle")
		    .attr("class", "district"+this.id.toString())
		    .attr("r", 7)
		    .attr("cx", function(d) {
			return x(parseTime(d.year)); })
		    .attr("cy", function(d) {
			return y(d.money); })
		    .on("mouseover", function(d) {		
			div.transition()		
			    .duration(200)		
			    .style("opacity", .9);		
			div.html(d.year + "<br>" + d.money)	
			    .style("left", (d3.event.pageX) + "px")		
			    .style("top", (d3.event.pageY - 28) + "px");	
		    })					
		    .on("mouseout", function(d) {		
			div.transition()		
			    .duration(500)		
			    .style("opacity", 0);	
		    });


		//label line
		g.append("text")
		    .attr("class", "district"+this.id.toString())
		    .attr("transform", "translate(" + (width+20) + "," + y(district_data[8].money) + ")")
		    .attr("dy", ".35em")
		    .attr("text-anchor", "start")
		    .style("fill", "steelblue")
		    .text('District ' + this.id.toString());
		
		this.setAttribute("drawn", 1);
	    };
	    

	});
	document.body.appendChild(button);
    };

    // Define the div for the tooltip
    var div = d3.select("body").append("div")	
	.attr("class", "tooltip")				
	.style("opacity", 0);


    //create svg
    var svg = d3.select("body").append("svg")
	.attr("width", 1000)
	.attr("height", 500)

    //set dimensions
    var margin = {left:100, right:100, top: 100, bottom: 100}
    var width = svg.attr("width") - margin.left - margin.right;
    var height = svg.attr("height") - margin.bottom - margin.top;


    //axis parameters
    var x = d3.scaleTime()
	.rangeRound([0, width]);
    var x_axis = d3.axisBottom(x);

    var y = d3.scaleLinear()
	.rangeRound([height, 0]);
    var y_axis = d3.axisBottom(y);

    var xFormat = "%Y";
    var parseTime = d3.timeParse("%Y");

    //data for line graph
    var data = [
	[{'year': '2004', 'money': '16717.15426171'}, {'year': '2005', 'money': '17441.49270092'}, {'year': '2006', 'money': '17990.85670371'}, {'year': '2007', 'money': '18073.00221438'}, {'year': '2008', 'money': '18927.64888769'}, {'year': '2009', 'money': '19170.16312815'}, {'year': '2010', 'money': '19006.92053506'}, {'year': '2011', 'money': '18332.42167695'}, {'year': '2012', 'money': '18195.40660522'}],
	[{'year': '2004', 'money': '13584.63764498'}, {'year': '2005', 'money': '14244.36107035'}, {'year': '2006', 'money': '15505.18152111'}, {'year': '2007', 'money': '15988.37476454'}, {'year': '2008', 'money': '16957.31274044'}, {'year': '2009', 'money': '17288.15451863'}, {'year': '2010', 'money': '17503.75996414'}, {'year': '2011', 'money': '17427.85903431'}, {'year': '2012', 'money': '17221.77266965'}],
	[{'year': '2004', 'money': '14845.34519341'}, {'year': '2005', 'money': '15253.63397264'}, {'year': '2006', 'money': '16320.69826563'}, {'year': '2007', 'money': '16534.24044581'}, {'year': '2008', 'money': '17649.23607457'}, {'year': '2009', 'money': '17810.50353142'}, {'year': '2010', 'money': '17869.47654296'}, {'year': '2011', 'money': '17809.7137725'}, {'year': '2012', 'money': '17677.55456234'}],
	[{'year': '2004', 'money': '15176.39962195'}, {'year': '2005', 'money': '15903.5470787'}, {'year': '2006', 'money': '17388.01493409'}, {'year': '2007', 'money': '18564.88058166'}, {'year': '2008', 'money': '19770.54017929'}, {'year': '2009', 'money': '20064.23962942'}, {'year': '2010', 'money': '20009.84907684'}, {'year': '2011', 'money': '19722.90718654'}, {'year': '2012', 'money': '19490.16746946'}],
	[{'year': '2004', 'money': '17112.84607312'}, {'year': '2005', 'money': '17356.78103127'}, {'year': '2006', 'money': '18623.40405635'}, {'year': '2007', 'money': '19589.26955224'}, {'year': '2008', 'money': '20318.1339532'}, {'year': '2009', 'money': '20099.82394411'}, {'year': '2010', 'money': '20045.40301859'}, {'year': '2011', 'money': '19398.38918257'}, {'year': '2012', 'money': '18805.63961387'}],
	[{'year': '2004', 'money': '14371.04164456'}, {'year': '2005', 'money': '15600.20114262'}, {'year': '2006', 'money': '17347.94811015'}, {'year': '2007', 'money': '18243.37737587'}, {'year': '2008', 'money': '19139.24647651'}, {'year': '2009', 'money': '19411.83651274'}, {'year': '2010', 'money': '19436.93397491'}, {'year': '2011', 'money': '18660.89699196'}, {'year': '2012', 'money': '18270.74726523'}],
	[{'year': '2004', 'money': '16491.56670114'}, {'year': '2005', 'money': '17202.46700917'}, {'year': '2006', 'money': '18456.12676065'}, {'year': '2007', 'money': '19268.28168159'}, {'year': '2008', 'money': '19876.45837752'}, {'year': '2009', 'money': '20496.65241455'}, {'year': '2010', 'money': '20871.91687683'}, {'year': '2011', 'money': '20099.72356233'}, {'year': '2012', 'money': '19578.43297705'}],
	[{'year': '2004', 'money': '14302.27624505'}, {'year': '2005', 'money': '15166.00436784'}, {'year': '2006', 'money': '16346.11616166'}, {'year': '2007', 'money': '16980.27132181'}, {'year': '2008', 'money': '18230.36544401'}, {'year': '2009', 'money': '18620.62961557'}, {'year': '2010', 'money': '18548.56595822'}, {'year': '2011', 'money': '18309.07124076'}, {'year': '2012', 'money': '18212.7838962'}],
	[{'year': '2004', 'money': '15291.94530741'}, {'year': '2005', 'money': '16590.42418988'}, {'year': '2006', 'money': '17904.20011164'}, {'year': '2007', 'money': '18744.83251659'}, {'year': '2008', 'money': '19605.20520358'}, {'year': '2009', 'money': '19522.31388345'}, {'year': '2010', 'money': '19992.26998402'}, {'year': '2011', 'money': '19319.08379479'}, {'year': '2012', 'money': '18672.77308722'}],
	[{'year': '2004', 'money': '14888.01469647'}, {'year': '2005', 'money': '15762.70995132'}, {'year': '2006', 'money': '16761.84692523'}, {'year': '2007', 'money': '17505.11011386'}, {'year': '2008', 'money': '18456.58884234'}, {'year': '2009', 'money': '18652.20729495'}, {'year': '2010', 'money': '18533.70788668'}, {'year': '2011', 'money': '17894.95941789'}, {'year': '2012', 'money': '17487.08854688'}],
	[{'year': '2004', 'money': '13636.84977833'}, {'year': '2005', 'money': '14606.76177706'}, {'year': '2006', 'money': '15784.8511939'}, {'year': '2007', 'money': '16513.81473366'}, {'year': '2008', 'money': '17754.10188061'}, {'year': '2009', 'money': '18093.20672006'}, {'year': '2010', 'money': '18218.88277334'}, {'year': '2011', 'money': '18008.00850376'}, {'year': '2012', 'money': '17763.09164243'}],
	[{'year': '2004', 'money': '16758.66124918'}, {'year': '2005', 'money': '17340.5735513'}, {'year': '2006', 'money': '18231.20809379'}, {'year': '2007', 'money': '18877.97005188'}, {'year': '2008', 'money': '19634.81366989'}, {'year': '2009', 'money': '20234.29938428'}, {'year': '2010', 'money': '20196.37548148'}, {'year': '2011', 'money': '19457.68656175'}, {'year': '2012', 'money': '19104.24038106'}],
	[{'year': '2004', 'money': '14730.64721831'}, {'year': '2005', 'money': '15478.34925822'}, {'year': '2006', 'money': '16407.91991738'}, {'year': '2007', 'money': '16949.85809732'}, {'year': '2008', 'money': '18044.41539061'}, {'year': '2009', 'money': '17823.8666661'}, {'year': '2010', 'money': '17868.59153704'}, {'year': '2011', 'money': '17557.17564787'}, {'year': '2012', 'money': '16704.36484345'}],
	[{'year': '2004', 'money': '15850.12458805'}, {'year': '2005', 'money': '16920.75086724'}, {'year': '2006', 'money': '17960.29819584'}, {'year': '2007', 'money': '18586.32812446'}, {'year': '2008', 'money': '18527.40873807'}, {'year': '2009', 'money': '18862.16439262'}, {'year': '2010', 'money': '18566.60584731'}, {'year': '2011', 'money': '18471.75698269'}, {'year': '2012', 'money': '17994.69809938'}],
	[{'year': '2004', 'money': '14978.84631227'}, {'year': '2005', 'money': '15589.50072146'}, {'year': '2006', 'money': '16400.10107471'}, {'year': '2007', 'money': '17118.52940131'}, {'year': '2008', 'money': '18117.25106439'}, {'year': '2009', 'money': '18468.7179677'}, {'year': '2010', 'money': '18489.62001704'}, {'year': '2011', 'money': '18193.98178351'}, {'year': '2012', 'money': '17168.83502074'}],
	[{'year': '2004', 'money': '14103.2355327'}, {'year': '2005', 'money': '15169.28886676'}, {'year': '2006', 'money': '16148.37248561'}, {'year': '2007', 'money': '17292.32576919'}, {'year': '2008', 'money': '18643.98387693'}, {'year': '2009', 'money': '19442.18754046'}, {'year': '2010', 'money': '19705.45775133'}, {'year': '2011', 'money': '20101.28590157'}, {'year': '2012', 'money': '19704.87328569'}],
	[{'year': '2004', 'money': '14588.21080434'}, {'year': '2005', 'money': '15333.75641304'}, {'year': '2006', 'money': '17158.62933335'}, {'year': '2007', 'money': '17875.32779285'}, {'year': '2008', 'money': '18463.03773643'}, {'year': '2009', 'money': '18813.73044144'}, {'year': '2010', 'money': '18927.67760469'}, {'year': '2011', 'money': '18112.5217716'}, {'year': '2012', 'money': '17785.20367053'}],
	[{'year': '2004', 'money': '13936.92264235'}, {'year': '2005', 'money': '14194.76879472'}, {'year': '2006', 'money': '15173.64874963'}, {'year': '2007', 'money': '16284.54365056'}, {'year': '2008', 'money': '17821.36327848'}, {'year': '2009', 'money': '18575.42367025'}, {'year': '2010', 'money': '18797.07343748'}, {'year': '2011', 'money': '18131.21506999'}, {'year': '2012', 'money': '17740.62280088'}],
	[{'year': '2004', 'money': '14368.43887127'}, {'year': '2005', 'money': '15649.50917984'}, {'year': '2006', 'money': '16804.54102428'}, {'year': '2007', 'money': '17541.18497382'}, {'year': '2008', 'money': '18393.27490325'}, {'year': '2009', 'money': '18554.2862632'}, {'year': '2010', 'money': '18532.10823324'}, {'year': '2011', 'money': '18583.19077479'}, {'year': '2012', 'money': '17948.89996138'}],
	[{'year': '2004', 'money': '13016.64855178'}, {'year': '2005', 'money': '13834.36749196'}, {'year': '2006', 'money': '14892.35553083'}, {'year': '2007', 'money': '15283.87122388'}, {'year': '2008', 'money': '15887.87442381'}, {'year': '2009', 'money': '16347.83497503'}, {'year': '2010', 'money': '16368.10089891'}, {'year': '2011', 'money': '15751.53504117'}, {'year': '2012', 'money': '15353.07109265'}],
	[{'year': '2004', 'money': '13741.75062675'}, {'year': '2005', 'money': '14322.67747663'}, {'year': '2006', 'money': '15564.42798763'}, {'year': '2007', 'money': '16200.39491264'}, {'year': '2008', 'money': '17096.72593397'}, {'year': '2009', 'money': '17515.47379463'}, {'year': '2010', 'money': '17767.6905358'}, {'year': '2011', 'money': '16840.00904341'}, {'year': '2012', 'money': '16682.28097472'}],
	[{'year': '2004', 'money': '12282.79591992'}, {'year': '2005', 'money': '13041.5628911'}, {'year': '2006', 'money': '14137.67576667'}, {'year': '2007', 'money': '15283.88047216'}, {'year': '2008', 'money': '16234.51891536'}, {'year': '2009', 'money': '16605.63908698'}, {'year': '2010', 'money': '16838.48819001'}, {'year': '2011', 'money': '16385.54698269'}, {'year': '2012', 'money': '16275.41954208'}],
	[{'year': '2004', 'money': '15370.55968149'}, {'year': '2005', 'money': '16080.23713069'}, {'year': '2006', 'money': '17259.0311689'}, {'year': '2007', 'money': '17934.85978051'}, {'year': '2008', 'money': '19184.01011428'}, {'year': '2009', 'money': '19620.64466684'}, {'year': '2010', 'money': '19660.20017359'}, {'year': '2011', 'money': '19339.11179678'}, {'year': '2012', 'money': '18773.96951322'}],
	[{'year': '2004', 'money': '12786.60050263'}, {'year': '2005', 'money': '13493.74049156'}, {'year': '2006', 'money': '14743.12050318'}, {'year': '2007', 'money': '15351.85036659'}, {'year': '2008', 'money': '16237.22310328'}, {'year': '2009', 'money': '16275.02234354'}, {'year': '2010', 'money': '16452.83592538'}, {'year': '2011', 'money': '15978.35323056'}, {'year': '2012', 'money': '15584.34488693'}],
	[{'year': '2004', 'money': '13537.36959482'}, {'year': '2005', 'money': '14459.97805559'}, {'year': '2006', 'money': '15713.58703887'}, {'year': '2007', 'money': '16470.29358198'}, {'year': '2008', 'money': '17163.50730352'}, {'year': '2009', 'money': '17198.24822048'}, {'year': '2010', 'money': '17116.88543365'}, {'year': '2011', 'money': '16464.20795553'}, {'year': '2012', 'money': '15874.52047426'}],
	[{'year': '2004', 'money': '12152.11835789'}, {'year': '2005', 'money': '12825.85842328'}, {'year': '2006', 'money': '13800.34499694'}, {'year': '2007', 'money': '14249.21332865'}, {'year': '2008', 'money': '15059.04110151'}, {'year': '2009', 'money': '15038.03826325'}, {'year': '2010', 'money': '15381.94463162'}, {'year': '2011', 'money': '15379.87142726'}, {'year': '2012', 'money': '14873.50528064'}],
	[{'year': '2004', 'money': '14075.36227376'}, {'year': '2005', 'money': '14376.75566532'}, {'year': '2006', 'money': '15496.99773119'}, {'year': '2007', 'money': '15982.68916283'}, {'year': '2008', 'money': '16680.84750723'}, {'year': '2009', 'money': '16600.01561155'}, {'year': '2010', 'money': '16892.7666575'}, {'year': '2011', 'money': '16574.11873817'}, {'year': '2012', 'money': '16295.74151249'}],
	[{'year': '2004', 'money': '13182.48908373'}, {'year': '2005', 'money': '13730.03700402'}, {'year': '2006', 'money': '14753.76500484'}, {'year': '2007', 'money': '15416.60425365'}, {'year': '2008', 'money': '16297.66917917'}, {'year': '2009', 'money': '16286.04658535'}, {'year': '2010', 'money': '16500.50960093'}, {'year': '2011', 'money': '16235.84530912'}, {'year': '2012', 'money': '15789.11248031'}],
	[{'year': '2004', 'money': '13500.80149906'}, {'year': '2005', 'money': '14142.48726935'}, {'year': '2006', 'money': '15448.55925561'}, {'year': '2007', 'money': '16090.19071608'}, {'year': '2008', 'money': '16943.84960967'}, {'year': '2009', 'money': '16886.7043403'}, {'year': '2010', 'money': '17020.27140738'}, {'year': '2011', 'money': '16867.81955276'}, {'year': '2012', 'money': '16499.7726661'}],
	[{'year': '2004', 'money': '13599.20970575'}, {'year': '2005', 'money': '14537.10192264'}, {'year': '2006', 'money': '15785.36427572'}, {'year': '2007', 'money': '16511.70413854'}, {'year': '2008', 'money': '17247.01511027'}, {'year': '2009', 'money': '17238.6524035'}, {'year': '2010', 'money': '17342.72414216'}, {'year': '2011', 'money': '16857.31382471'}, {'year': '2012', 'money': '16451.87364638'}],
	[{'year': '2004', 'money': '13749.52982015'}, {'year': '2005', 'money': '14606.17325336'}, {'year': '2006', 'money': '15890.40443399'}, {'year': '2007', 'money': '16453.507403'}, {'year': '2008', 'money': '17328.09829'}, {'year': '2009', 'money': '17863.61868519'}, {'year': '2010', 'money': '18294.39665531'}, {'year': '2011', 'money': '17635.72682373'}, {'year': '2012', 'money': '17345.21460009'}],
	[{'year': '2004', 'money': '15098.3645062'}, {'year': '2005', 'money': '15945.53456839'}, {'year': '2006', 'money': '17184.23694361'}, {'year': '2007', 'money': '17576.13763825'}, {'year': '2008', 'money': '18497.2928006'}, {'year': '2009', 'money': '18921.52640154'}, {'year': '2010', 'money': '18877.77686426'}, {'year': '2011', 'money': '18658.79888729'}, {'year': '2012', 'money': '17965.6563677'}]];

    x.domain(d3.extent(data[0], function(d) { return parseTime(d.year); }));
    y.domain([0,
  	      d3.max(data[0], function(d) {
  		  return d3.max([d.money]);
  	      })]);


    var multiline = function(category) {
	var line = d3.line()
  	    .x(function(d) { return x(parseTime(d.year)); })
  	    .y(function(d) { return y(d[category]); });
	return line;
    }

    var lineFunction = multiline('money');

    var categories = ['money'];
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var g = svg.append("g")
	.attr("transform",
  	      "translate(" + margin.left + "," + margin.top + ")");


    // add x-axis
    g.append("g")
	.attr("transform", "translate(0," + height + ")")
	.call(d3.axisBottom(x).tickFormat(d3.timeFormat(xFormat)));

    // add y-axis
    g.append("g")
	.call(d3.axisLeft(y));

    //add x-axis label
    g.append("text")
	.attr("x", 450 )
	.attr("y",  355 )
	.style("text-anchor", "middle")
	.text("Year");

    //add y-axis label
    g.append("text")
	.attr("transform", "rotate(-90)")
	.attr("x", -150 )
	.attr("y",  -70 )
	.style("text-anchor", "middle")
	.text("Spending per student ($)");

    //add title
    g.append('text')
  	.attr("class", "title")
  	.attr("x", 450 )
  	.attr("y",  -30 )
	.attr("font-size", "30px")
  	.style("text-anchor", "middle")
  	.text('Average District Spending Per Student');
});

