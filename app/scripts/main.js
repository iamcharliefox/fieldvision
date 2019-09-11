$('.toggle-info').on("click", function (e) {
  e.preventDefault();
  $(this).text(function (i, text) {
    if ($(this).text === "CLOSE") {
      return text === "SEE MORE" ? "CLOSE" : "SEE MORE";
    } else {
      return text === "CLOSE" ? "SEE MORE" : "CLOSE";
    }
  });
  $(this).prev('.drawer').toggle();
  $(this).prev('.drawer').removeClass('hidden');
});

$('.collapse-compare').on("click", function (e) {
  e.preventDefault();
  $(this).text(function (i, text) {
    if ($(this).text === "CLOSE COMPARISON TABLE") {
      return text === "SHOW COMPARISON TABLE" ? "CLOSE COMPARISON TABLE" : "SHOW COMPARISON TABLE";
    } else {
      return text === "CLOSE COMPARISON TABLE" ? "SHOW COMPARISON TABLE" : "CLOSE COMPARISON TABLE";
    }
  });
  $(this).next('.fv-comparison').toggle();  
});


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
        });
      }
    }
  });