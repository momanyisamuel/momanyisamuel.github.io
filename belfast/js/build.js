document.addEventListener(
  "DOMContentLoaded",
  function() {
    var slideshow = new KenBurnsSlideshow({
      el: document.querySelector(".slideshow")
    });
    slideshow.init();
  },
  false
);
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  console.log("hello");
  $(this).ekkoLightbox();
});
