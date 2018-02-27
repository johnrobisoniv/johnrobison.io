
// When you click the h2s the content reveals
// on hover it gets darker
// mask in svg ? to stars .. . ?


// data
// mostly links to external things
// would be cool to go to local data vis with svg
//

// pop ups / console logs:
// 'i think it's cool that you use chrome'
// just so you know i can read your ip address ... my automated lookup has your
// address as xxx


// h2 image
// click reveals square images vertically aligned 36% apart
// on click
// maybe lightbox pops up that you can flip through ...
// more images  in the set - or link to them visible behind
// 7 - 10 images / stories
// one or two triptychs
// dawn in atlantic
// croatia
// uk
// czech
// blue ridge
//
// rainier
// st lucia
// canaria
// portraits
// spherical
// instagram




console.log('you');

d3.select('body')
  .on('click', function () {
    console.log('me!');
  });


d3.selectAll('h2')
  .on('click', function () {
    d3.selectAll('p')
      .style('opacity',0.8);
  });


function reveal() {
//  console.log('sigh');
  d3.selectAll('p')
    // .each(function (d, i) {
    //   console.log(d);
    // })
    .style('opacity', 0.8);
}

// count interactions ...
// set conditions to unlock more of the site if you interact with it more ....
