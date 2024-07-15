$(function () {

  $('.hero__slider').slick({
    dots: false,
    arrows: false,
    autoplay: true
  });

  var mixer = mixitup('.works__list');

});


$(function () {
  $('.menu__link').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location == link) {
      $('.menu__link').removeClass('active');
      $(this).addClass('active');
    }
  })
})

$(function () {
  $('.mobile-menu__link').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location == link) {
      $('.mobile-menu__link').removeClass('active');
      $(this).addClass('active');
    }
  })
})