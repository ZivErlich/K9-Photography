$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate({
    scrollTop: images
  }, 900);
});

$('#contact').on('click', function() {
  const contact = $('#contact-us').position().top;

  $('html, body').animate({
    scrollTop: contact
  }, 900);
})