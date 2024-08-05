$(function () {
  let mainProduct = new Swiper('.main_product .swiper', {
    allowTouchMove: true,
    // swiper의 slidesPerView는 mobile-first 적용, breakpoints로 태블릿, pc정해줘야함
    slidesPerView: 3,
    spaceBetween: 8,
    grid: {
      rows: 2,
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
        slidesPerView: 6,
        spaceBetween: 18,
        grid: {
          rows: 1,
        }
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // mobile viewport에서 swiper의 hieght 가변 처리
  $(window)
    .on('resize', function() {
      if ($(this).outerWidth() <= 767) {
        let h = $('.main_product .swiper-slide').outerHeight() * 2 + 110;
        $('.main_product .swiper').outerHeight(h);
      } else {
        // resize 됐을때 높이가 변경되었기 때문에 pc viewport에서 원위치
        $('.main_product .swiper').outerHeight('auto');
      }
    })
    .trigger('resize');
})