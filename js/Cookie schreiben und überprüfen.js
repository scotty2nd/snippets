/*On Document Ready überprüfe ob das Cookie ("cookieBannerClosed") existiert*/
/*Imzweiten Teil wird das Cookie beim Clickevent gesetzt*/
/*Beispiel Airport Bremen Cookie Banner*/

(function() {
    if (document.cookie.indexOf("cookieBannerClosed") >= 0) {
        jQuery("#cookie-banner").css('display','none'); /*Container verbergen wenn das Cookie (cookieBannerClosed) existiert*/
        /*User ist zurück gekehrt*/
    }else{
        /*User ist das erste mal hier*/
    }

    jQuery("#cookie-banner > #content > .buttonWrapper > a").click(function(){
        /*Wird der OK/Schliessen Link geklickt Animations Klasse für die Slideout Animation hinzufügen und Coookie schrieben und auf true setzen*/
        /*Mit return false am Ende der Funktion das natürliche Klick Verhalten deaktivieren*/
        jQuery("#cookie-banner").addClass('slideout');
        document.cookie="cookieBannerClosed=True";
        return false;
    });
})();
