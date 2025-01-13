const width = 960;
const height = 500;

let geoData;  
let languagesByCountry = new Map();

// Create an SVG
const svg = d3.select('#map-container')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');

// Create a group that will be zoomed/panned
const g = svg.append("g");

// Tooltip div
const tooltip = d3.select('#tooltip');

// Projection & path
const projection = d3.geoMercator()
  .scale(150)
  .translate([width / 2, height / 1.4]);
const path = d3.geoPath().projection(projection);

// 5 color bins for [0-1], [1-2], [2-3], [3-4], [4-∞]
const colorScale = d3.scaleThreshold()
  .domain([1, 2, 3, 4])
  .range(["#a1dab4","#41b6c4","blue","#2c7fb8","#253494"]);

// For the legend
const legendBins = [
  { label: "0–1", color: "#a1dab4" },
  { label: "1–2", color:  "#41b6c4"},
  { label: "2–3", color:  "blue"},
  { label: "3–4", color:  "#2c7fb8"},
  { label: "4–5+", color: "#253494" }
];

// Build legend items
const legend = d3.select('#legend')
  .selectAll('.legend-item')
  .data(legendBins)
  .join('div')
    .attr('class', 'legend-item');

legend.append('div')
  .attr('class', 'legend-color')
  .style('background', d => d.color);
legend.append('div')
  .text(d => d.label);

// Zoom behavior
const zoom = d3.zoom()
  .scaleExtent([1, 8]) 
  .translateExtent([[0, 0], [width, height]])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });

// Attach zoom to the svg
svg.call(zoom);

// Load data in parallel
Promise.all([
  d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
  d3.csv("/assets/language_data.csv")
]).then(([world, csv]) => {
  geoData = world;
  // Group CSV by country => array of rows
  languagesByCountry = d3.group(csv, d => d.country);

  // Draw map default: metric=50K
  drawMap("200K");
})
.catch(err => console.error(err));

// Radio input => redraw
d3.selectAll('input[name="metric"]').on('change', function() {
  drawMap(this.value);
});

function drawMap(metric) {
  // For each country, average the chosen metric across its languages
  const metricAverages = {};
  languagesByCountry.forEach((rows, countryName) => {
    const vals = rows.map(r => +r[metric]);
    const avg = d3.mean(vals);
    metricAverages[countryName] = avg;
  });

  // Join geoData
  const countries = g.selectAll('.country')
    .data(geoData.features, d => d.properties.name);

  // ENTER + UPDATE
  countries.enter()
    .append('path')
    .attr('class', 'country')
    .merge(countries)
    .attr('d', path)
    .attr('fill', d => {
      const cname = d.properties.name;
      const val = metricAverages[cname];
      return (val != null && !isNaN(val)) 
        ? colorScale(val) 
        : '#ccc';
    })
    // Tooltip
    .on('mousemove', (event, d) => {
      const cname = d.properties.name;
      const rows = languagesByCountry.get(cname);

      if (!rows) {
        tooltip.html(`<strong>${cname}</strong><br/>No data`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px')
          .classed('show', true);
      } else {
        let html = `<strong>${cname}</strong><br/><ul style="margin:0; padding-left:1em;">`;
        rows.forEach(r => {
          html += `<li>${r.language}: ${r[metric]}</li>`;
        });
        html += "</ul>";

        tooltip.html(html)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY + 10) + 'px')
          .classed('show', true);
      }
    })
    .on('mouseout', () => tooltip.classed('show', false));

  // EXIT
  countries.exit().remove();
}
