$(document).ready(function () {
  $('.tag-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    cssEase:'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  

  $('.site-slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase:'linear',
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});