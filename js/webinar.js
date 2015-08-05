(function ($) {
  // adds in a fixed position menu
  // css in page.css navigation fixed
  $(window).scroll(function() {

    if( $(this).scrollTop() > $('.hero-main').height() ) {
      $('.nav-fixed').addClass('nav-fixed--locked');
    } else {
      $('.nav-fixed').removeClass('nav-fixed--locked');
    }

  });

  // smooth scroll
  $(function() {
    console.log( $('.nav-fixed').height());

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            // calculates in the nav-fixed height
            scrollTop: target.offset().top - $('.nav-fixed').height()
          }, 1000);
          return false;
        }
      }
    });
  });

})(jQuery);
