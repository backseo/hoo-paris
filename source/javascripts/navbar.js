
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar-hoo').css("height", 50);
      $('.dropdown-toggle').css("font-size", 20);
    }
    else {
      $('.navbar-hoo').css("height", 90);
      $('.dropdown-toggle').css("font-size", 30);
    }
  });
