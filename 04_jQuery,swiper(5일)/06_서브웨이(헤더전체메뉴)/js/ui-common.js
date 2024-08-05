$(function() {
  $('.gnb').on('mouseenter', function() {
    $('#header').addClass('on')
  });
  $('.gnb').on('mouseleave', function() {
    $('#header').removeClass('on')
  });
});