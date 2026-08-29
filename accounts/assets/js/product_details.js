  // slick slider js
  $('.product-slider-for').slick({
    rtl: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-nav'
  });
  $('.product-slider-nav').slick({
    rtl: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });

  //  **------post gallery js**
  GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh",
  });