$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
