//create svg
var svg = d3.select("body").append("svg")
    .attr("width", 1000)
    .attr("height", 500)



//d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/hsfix.csv", function(csv){
  //console.log(csv)
  //for (var i = 0 ; i < csv.length ; i++) {
  //}

var allData = [];
var a = [];
var b = [];
var c = [];
var d = [];
var e = [];
var f = [];
var g = [];
var h = [];
var i = [];
var allYears = [a,b,c,d,e,f,g,h,i]
var allDis = Array.from(new Array(32), (x,i) => i + 1)
var YearlyData = ['holder'];
console.log(allDis)


var allDis = [...Array(33).keys()];
d3.csv("https://raw.githubusercontent.com/mzhao3/Poppins/master/data/hsfix.csv")
.then(function(data) {
  for (thing in data) {
    // console.log(data[thing]['year']) GETS ONE ITEM
    allData.push(data[thing]); //WHOLE DICT
    if (data[thing]['year'] == '2004'){
      a.push(data[thing])
    }
    else if (data[thing]['year'] == '2005'){
      b.push(data[thing])
    }
    else if (data[thing]['year'] == '2006'){
      c.push(data[thing])
    }
    else if (data[thing]['year'] == '2007'){
      d.push(data[thing])
    }
    else if (data[thing]['year'] == '2008'){
      e.push(data[thing])
    }
    else if (data[thing]['year'] == '2009'){
      f.push(data[thing])
    }
    else if (data[thing]['year'] == '2010'){
      g.push(data[thing])
    }
    else if (data[thing]['year'] == '2011'){
      h.push(data[thing])
    }
    else if (data[thing]['year'] == '2012'){
      i.push(data[thing])
    }
  }

  for (dis in allDis){
    //allDis = [1.....32]
    console.log(allDis[dis])
    var L = [];
    for (year in allYears ){
      d = {};
      for (singleDis in year){
        //console.log(singleDis)
        if (singleDis['csd'] == String(dis)){
          d['year'] = singleDis['year']
          d['money'] = singleDis['grand_total_csd']
        }
      }
      L.push(d)
    }
    YearlyData.push(L)
  }
  console.log(allData)
  console.log(a)
  console.log(a[0]) //WHY DOES THIS WORK???
  console.log(b)
  console.log(YearlyData)

});

//console.log(allData)
//console.log(allData[1]) //WHY DOES THIS RETURN UNDEFINED???
//console.log("this is all Data");
//console.log(a[0]); //WHY DOES THIS RETURN UNDEFINED???
//console.log("hi")
