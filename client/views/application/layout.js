// Meteor.startup( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

// Template.layout.rendered( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

Template.layout.created = function() {
  $('head').append('<script type="text/javascript" src="assets/js/jquery.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/bootstrap.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/isotope.pkgd.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/imagesloaded.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/jquery.scrollTo.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/jquery.nav.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/jquery.appear.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/twitterFetcher.min.js">');
  $('head').append('<script type="text/javascript" src="assets/js/script.js">');
}

$.getScript('assets/js/script.js', function() {
      initNavbar();
      initPortfolio();
      initAnimations();
      initTwitterFeed();
      $(".loader .fading-line").fadeOut();
      $(".loader").fadeOut("slow");
});