$(document).ready(function(){

  /*Zum smoothen scrollen zu einem Container*/
  /*Benötigt jQuery*/  
  $("CLICK CONTAINER").on('click', function(event) {
    $j('html, body').animate({
      scrollTop: $j("ZIELCONTAINER").offset().top - 100
    }, 1000);
  });



  /*Zum smoothen scrollen zu einem Container mit einem selbst einstellbarem Offset(Abstand)*/
  /*Benötigt jQuery*/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 600);
        return false;
      }
    }
  });

});
