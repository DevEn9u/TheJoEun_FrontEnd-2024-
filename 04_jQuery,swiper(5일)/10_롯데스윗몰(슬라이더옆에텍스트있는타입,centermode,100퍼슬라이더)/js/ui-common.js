$(function() {
  // '지금 신상' swiper
  let mainNew = new Swiper('.main_new .swiper', {
    // css로 크키 지정시 auto
    slidesPerView: '4',
    spaceBetween: 30,

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // '선물하기 인기상품' swiper
  let mainPopular = new Swiper('.main_popular .swiper', {
    // css로 크키 지정시 auto
    slidesPerView: 'auto',
    spaceBetween: 50,
    // active slide will be centered not always on left side
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      // mainPopular.slideTo()로 interaction이 일어났기 때문에 적용
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // swiper.slideTo(index, speed, runCallbacks): 시작시 슬라이드 이동, speed는 ms, 1000=1초, 여기서 1을 넣은 이유는 0일 때 autoplay가 안되는 현상 발생하기 때문
  mainPopular.slideTo(3, 1);
});