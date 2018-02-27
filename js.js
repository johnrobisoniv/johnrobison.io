



d3.select('body')
  .on('mousemove', function () {
    console.log('me!');
  });


d3.selectAll('h2')
  .on('click', function () {
    d3.selectAll('p')
      .style('opacity',0.8);
  });


function reveal() {
  console.log('sigh');
  d3.selectAll('p')
    // .each(function (d, i) {
    //   console.log(d);
    // })
    .style('opacity', 0.8);
}

// count interactions ...
// set conditions to unlock more of the site if you interact with it more ....
