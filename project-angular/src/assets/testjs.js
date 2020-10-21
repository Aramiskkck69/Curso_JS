function mytest(anchura) {
$(document).ready(function () {

  $("#logo").click(function (e) {
    e.preventDefault()
    $("header").css("background", "yellow")
      .css("height", "50px")
  });
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: this.anchura
  });
});

}
