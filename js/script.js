$(document).ready(function () {
  // cowl-carousel
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

  //back to top feature
  const gotoTopBtn = document.querySelector("#topBtn");
  const width = window.matchMedia("(max-width: 576px");

  // Display the button
  const showGotoTopBtn = () => {
    if (
      document.body.scrollTop > 200 ||
      (document.documentElement.scrollTop && !width.matches)
    ) {
      gotoTopBtn.style.display = "flex";
    } else {
      gotoTopBtn.style.display = "none";
    }
  };

  window.addEventListener("scroll", showGotoTopBtn);

  // Scroll to top button
  const backToTop = () => {
    document.body.scollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // For Other
  };

  gotoTopBtn.addEventListener("click", backToTop);
});
