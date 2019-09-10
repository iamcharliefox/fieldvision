$('.toggle-info').on( "click", function(e) {
  e.preventDefault();
  $(this).text(function(i, text){
    if ($(this).text === "CLOSE") {
      return text === "SEE MORE" ? "CLOSE" : "SEE MORE";
    } else {
      return text === "CLOSE" ? "SEE MORE" : "CLOSE";
    }
  })
  $(this).prev('.drawer').toggle();
  $(this).prev('.drawer').removeClass('hidden');
});

