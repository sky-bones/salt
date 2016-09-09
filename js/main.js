
var $navExpand = $('.nav-expand');
var $panel = $('.panel');

	$navExpand.on('click', function (){

	$panel.toggleClass('js-panel-expand');

});


$('.smooth-scroll').localScroll();


$('.to-top-image').on('click', function()
{
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});

// found snippet on stack-overflow, decided to use it for the scroll to top //
