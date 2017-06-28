/*Nach oben der bei Klick Smooth nach oben scrollt. Der Clou die Nach oben Grafik wird erst eingeblendet nachdem man mindestens 500px runtergescrollt hat.*/

/*Zugehöriger HTML Container*/
/*<div class="toTop">
    <img src="https://www.unikatoo.com/skin/frontend/unikatoo/default/images/scroll_up.png" alt="Nach Oben" title="Nach Oben">
</div>*/

$( document ).ready(function(){
    /*Smoothes Scrollen zur angegebenen Klasse*/
    $( '.toTop' ).on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 600, 'swing');
    });
});

$( document ).scroll(function() {
    /*Nachdem 500px runtergescrollt wird wird der Container sichtbar*/
    if ($( document ).scrollTop() > 500) {
        §( '.toTop' ).stop().animate({
            "opacity":"1"
        }, 300);
    }else {
        $( '.toTop' ).stop().animate({
            "opacity":"0"
        }, 300);
    }
});
