/* new Glider(document.querySelector('.glider'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  }); */
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1.2,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1.2,
          draggable: true,
          slidesToScroll: 1,
          itemWidth: 120,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });