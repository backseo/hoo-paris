$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar-hoo').css("height", 50);
    $('.dropdown-toggle').css("font-size", 20);
    $('.navbar-hoo span').css("font-size", "2rem");
  }
  else {
    $('.navbar-hoo').css("height", 90);
    $('.dropdown-toggle').css("font-size", 30);
    $('.navbar-hoo span').css("font-size", "3.5rem");
  }
});

