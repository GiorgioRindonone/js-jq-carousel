
$(function() {


});

$(function() {
  // al click sull'elemento con classe .prev accegno una funzione
  $(".prev").click(
    function () {
      // creo una var corrispondente all'img attiva
     var imgActive = $('.images img.active');
     // vado a rimuovere la classe active dall'img attuale
     imgActive.removeClass("active");
     // creo un if che va a verificare se una volta finito il ciclo l'img è la prima, di non farlo stoppare
     if (imgActive.hasClass("first") == true) {
       // se img è la prima, allora vai a dare la class active all'ultima creando un loop
       $('.images img.last').addClass("active");
     } else {
       // altrimenti continua a dare la classe active
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

  // mi seleziono gli i dentro il nav
  $(".nav i").click(function () {
    // utilizzo il this per definire quello su cui ho cliccato
    var bulletClicked = $(this);
    // utilizzo il this per trovarmi l'index del bottone cliccato
    var bulletClickedIndex = $(this).index();
    // mi rimuovo la classe active dall'img
    $(".images img.active").removeClass("active");
    // utilizzo l'index preso dal bottone per farlo corrispondere all'index dell'img e gli do la classe active
    $(".images img").eq(bulletClickedIndex).addClass("active");
    // rimuovo la classe active da tutti gli i presenti in nav
    $(".nav i").removeClass("active");
    // assegno active al bullet cliccato
    bulletClicked.addClass("active");
  })

});
