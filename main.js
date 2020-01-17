$(document).ready(function (){
    $('.menu-toogler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
     
    });
});