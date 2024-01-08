(function () {

  console.log("Hello World")

    // your data can be a plain array (Python calls them lists)...
    var numbers = [8, 20, 4];
  
    // ... but it's usually (what we'd call in Python) a list of dictionaries!
    var cities = [
      {
        'name': 'NYC',
        'population': 8,
        'area': 304
      },
      {
        'name': 'Tokyo',
        'population': 14,
        'area': 845
      },
      {
        'name': 'LA',
        'population': 4,
        'area': 4500      
      },
      {
        'name': 'Brooklyn',
        'population': 4,
        'area': 97
      }
    ]

    // Scales come here

    var names = ['NYC','Tokyo','LA','Brooklyn']

    var widthScale = d3.scaleLinear().domain([0, 15]).range([0, 500])
    var colorScale = d3.scaleLinear().domain([0, 15]).range(['beige', 'red'])
    var radiusScale = d3.scaleSqrt().domain([0, 15]).range([0,50])
    var yPositionScale = d3.scaleBand().domain(names).range([0,131])

    console.log(widthScale(7))
    console.log(widthScale(15))


    // telling D3 where to put appended rectangles in the HTML – namely, into the SVG bracket

    var svg = d3.select('svg')

    // Attributes come here

    svg.selectAll('rect')
      .data(cities) // binding the data to the rectangles
      .enter().append('rect')
      .attr('height', 20)
      .attr('x', 0)
      .attr('y', function(d) {
        return yPositionScale(d.name)
      })
      .attr('fill', '#e0e016')
      .attr('width', function(d) {
        console.log(d.population)
        return widthScale(d.population)
      })

    svg.selectAll('text')
      .data(cities)
      .enter().append('text')
      .attr('text', 'test')

      
    // Remember, scales allow us to map an INPUT (a domain) to an OUTPUT (a range).

  
    // For example, I'm going to have input values of 0-4500 (square miles), please give me back
    //   the appropriate size for a circle, between 0 and 100. A 0 sqmi city would have a 0 radius,
    //   while a 4500 sqmi city would have a radius of 100 pixels.
  
    // You can also use scales to say "I'm going to give you a number between 4 and 15, and you're
    //    going to give me back a color between beige and red." We can get fancy with our colors and use
    //    hex codes from colorbrewer.
  
    // The answer to every question is probably "function(d) { }"
  })()