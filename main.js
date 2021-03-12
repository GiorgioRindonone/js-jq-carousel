
$(function() {

  $(".prev").click(
    function () {
     var imgActive = $('.images img.active');
     imgActive.removeClass("active");
     if (imgActive.hasClass("first") == true) {
       $('.images img.last').addClass("active");
     } else {
       imgActive.prev().addClass("active");
     }
    }
  );
  $(".next").click(
    function () {
     var imgActive = $('.images img.active');
     imgActive.removeClass("active");
     if (imgActive.hasClass("last") == true) {
       $('.images img.first').addClass("active");
     } else {
       imgActive.next().addClass("active");
     }
    }
  );
});
