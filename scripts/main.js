$(document).ready(function(){
    $('.js-nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-bar, .wrapper, html, body').toggleClass('is-active');
    });

    $( '.js-counter' ).each( function() {
        var counter = 0;
        $( this ).children( '.js-counter-plus' ).click( function() {
           $( this ).siblings( 'input[type="text"]' ).val( ++ counter );
        } );
        $( this ).children( '.js-counter-minus' ).click( function() {
           $( this ).siblings( 'input[type="text"]' ).val( (counter - 1 < 0) ? counter : -- counter );
        } );
     } );

     $('[data-popup]').click(function(e) {
         e.preventDefault();
         e.stopPropagation();
        let id = $(this).attr('data-popup');
        $(id).addClass('is-active');
        $('html, body').addClass('is-open');
     });

     $('.js-popup-close').click(function(e) {
         e.preventDefault();
         $(this).parents('.popup-bar').removeClass('is-active');
         $('html, body').removeClass('is-open');
     });

     $('html, body').click(function() {
        $('.popup-bar').removeClass('is-active');
        $('html, body').removeClass('is-open');
     });

     $('.popup-bar .wrap').click(function(e) {
        e.stopPropagation();
     })
})