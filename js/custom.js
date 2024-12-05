$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    550: {
      items: 2
    },
    750: {
      items: 3
    },
    1000: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
})