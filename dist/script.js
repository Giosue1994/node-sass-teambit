$(document).ready(function() {
  
  // al click mostro la dropdown
  $('.drop-solutions').click(function() {
    $('.dropdown').slideToggle();
  });

  // al click apro e chiudo il menu
  $('.hamburger').click(function() {
    $('.hamburger').slideUp();
    $('.close').slideDown();
    $('.slide-menu').slideDown();
  });
  $('.close').click(function() {
    $('.close').slideUp();
    $('.hamburger').slideDown();
    $('.slide-menu').slideUp();
  });

});
