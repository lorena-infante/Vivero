var slider = tns({
  container: ".my-slider",
  items: 3,
  center: true,
  mouseDrag: true,
  gutter: 3,
  loop: true,
  speed: 400,
  controlsPosition:"bottom",
  controlsText: ['<','>'],
  navPosition:"bottom",
  responsive: {
    375: {
      items: 1.5,
      center: true,
      gutter: 1,
      speed: 300,
    },
    576: {
      items: 2,
      gutter: 0,
      speed: 300,
    },
    768: {
      items: 3,
      gutter: 1,
      viewportMax: 100,
    },
    992: {
      items: 4,
      gutter: 0,
      viewportMax: 100
    },
    1200: {
      items: 4,
      gutter: 3,
      viewportMax: 100,
    },
  },
});
