$(function() {
  // swiper 인스턴스로 초기화될 변수
  let mainUse = null;
  let toggleAutoplay = true;
  $(window)
    .on('resize', function() {
      let w = $(this).outerWidth();

      if ( w >= 768) {
        // swiper instance가 있으면 이전 swiper instance 삭제하고 스타일 제거
        if (mainUse) mainUse.destroy(true, true);

        mainUse = new Swiper('.main_use .swiper', {
          slidesPerView: 3,
          spaceBetween: 24,
          allowTouchMove: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        });
      } else {
        if (mainUse) mainUse.destroy(true, true);
        
        mainUse = new Swiper('.main_use .swiper', {
          // swiper 10에서 centeredSlides와 loop가 동시 적용될 경우 slide가 채워지지 않는 현상이 나타나므로 slide 개수를 늘리고, allowTouchMove: false를 적용해 복사한 slide가 나타나지 않게 함
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 10,
          centeredSlides: true,
          autoplay : {
            delay: 1000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        });

        mainUse.on('slideChange', function() {
          // 표시하고자 하는 개수만큼 나머지 연산자 사용
          let current = mainUse.realIndex % 3 + 1;
          $('.main_use .num .current').text(current);
        });
      };
      // resize시 toggle 변수가 false면 멈추게 함
      if(!toggleAutoplay) {
        mainUse.autoplay.stop();  
      }
    })
  // risize는 창크기를 변경 해야만 outerWidth 값을 얻는데, trigger을 이용해 강제 실행을 하면 창을 실행만 해도 값을 얻을 수 있다.
  .trigger('resize');
  let total = $('.main_use .swiper-slide:not(.copy_slide)').length;
  $('.main_use .total').text(total);
  
  // 자동 재생 토글
  $('.main_use .autoplay_btn').on('click', function() {
    $(this).toggleClass('on');
  
    if(toggleAutoplay) {
      mainUse.autoplay.stop();
      toggleAutoplay = false;
    } else {
      mainUse.autoplay.start();
      toggleAutoplay = true;
    }
  });  
});
