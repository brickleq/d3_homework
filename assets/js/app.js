// Set up an SVG chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

function readCSV() {
  d3.csv("assets/data/data.csv").then(function(data) { // Read data from CSV
  data.forEach(function(d) { // Convert numeric data to number
    d.abbr = d.abbr;
    d.age = +d.age;
    d.ageMoe = +d.ageMoe;
    d.healthcare = +d.healthcare;
    d.healthcareHigh = +d.healthcareHigh;
    d.id = +d.id;
    d.income = +d.income;
    d.incomeMoe = +d.incomeMoe;
    d.obesity = +d.obesity;
    d.obesityHigh = +d.obesityHigh;
    d.obesityLow = +d.obesityLow;
    d.poverty = +d.poverty;
    d.povertyMoe = +d.povertyMoe;
    d.smokes = +d.smokes;
    d.smokesHigh = +d.smokesHigh;
    d.smokesLow = +d.smokesLow;
    d.state = d.state;
  });
// console.log(data);
// return data;
});
// return data;
}
var data = readCSV();
console.log(data);