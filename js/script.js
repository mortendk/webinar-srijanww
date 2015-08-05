
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


// responsive tables
/*
(function ($) {

  Drupal.behaviors.fixResponsiveTable = {
    attach: function(context,settings) {
      $('.node table', context).not('.not-responsive').each(function() {
        $table = $(this);
        $(this).addClass('is-responsive');
      });

      $('.node table.is-responsive', context).each(function() {
        Drupal.behaviors.fixResponsiveTable.responsiveTable($(this));
      });
    },
    responsiveTable: function ($table) {
      var headertext = [];
      // Get data from the tables first row, assuming it is an <th> or <td>.
      var tableHeaders = $table.find('tr:first > *');
      // Count all rows.
      var tableRows = $table.find('tbody tr');

      // Create list of headers to use for the data-title.
      for (var i = 0; i < tableHeaders.length; i++) {
        var current = tableHeaders[i];
        headertext.push(current.textContent.replace(/\r?\n|\r/,""));
      }

      // Loop through each row.
      for (var i = 0; i < tableRows.length; i++) {

        // Loop through the <td> and add the data-title from table headers.
        for (var j = 0; j < tableHeaders.length; j++) {
          // nth-child counts from 1 not 0.
          $('td:nth-child(' + (j+1) + ') ').attr("data-title", headertext[j]);
        }
      }
    }
  };



})(jQuery);
*/
