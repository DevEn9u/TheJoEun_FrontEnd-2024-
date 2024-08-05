$(function() {
  let mainSlider = new Swiper('.main_slider .swiper', {
    speed: 2000,
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      // delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      // default: bullet    fraction은 숫자 타입
      type: 'fraction',
      // renderFracition: 숫자 앞 0 제거 가능
      formatFractionCurrent: function (number) {
          return (number < 10 ? '0' + number : number);
        },
        formatFractionTotal: function (number) {
          return (number < 10 ? '0' + number : number);
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            '<span class="' + totalClass + '"></span>';
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //  .autoplay_btn을 클릭시 text와 i를 STOP에서 PLAY로 변경, autoplay도 그에 맞춰 조정
  let autoplay = true;

  $('.main_slider .autoplay_btn').on('click', function() {
    if (autoplay) {
      $(this).find('span').text('PLAY');
      $(this).find('i').attr('class', 'ri-play-fill');
      mainSlider.autoplay.stop();
    } else {
      $(this).find('span').text('STOP');
      $(this).find('i').attr('class', 'ri-pause-fill');
      mainSlider.autoplay.start();
    }
    autoplay = !autoplay;
  });
});