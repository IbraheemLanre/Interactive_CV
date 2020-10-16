$(document).ready(function () {
  // cowl-carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
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

  const gotoTopBtn = document.querySelector("#topBtn");
  const width = window.matchMedia("(max-width: 576px");
  const navBar = document.querySelector("header");
  const sticky = navBar.offsetTop;

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

  // Activate each navbar tab on click
  $("#myTab a").on("click", function () {
    // e.preventDefault();
    $(this).tab("show");
  });

  //Sticky navbar
  const stickyMenu = () => {
    if (window.pageYOffset >= sticky && !width.matches) {
      navBar.classList.add("sticky");
    } else {
      navBar.classList.remove("sticky");
    }
  };
  window.addEventListener("scroll", stickyMenu);
});
