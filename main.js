
$(function() {


});

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


  $(".nav i").click(function () {

    var bulletClicked = $(this);
    var bulletClickedIndex = $(this).index();
    $(".images img.active").removeClass("active");
    $(".images img").eq(bulletClickedIndex).addClass("active");
    $(".nav i").removeClass("active");
    bulletClicked.addClass("active");
  })

});
