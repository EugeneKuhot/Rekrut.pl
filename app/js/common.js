$(window).on('load', function() {
  $("body").removeClass("load");
});

$(window).scroll(function() {
  var y = $(this).scrollTop();
    if (y > 100) {
      $('.header').addClass('header-scroll');
    } else {
       $('.header').removeClass('header-scroll');
    }
});

