var $navExpand = $('.nav-expand');
var $panel = $('.panel');

	$navExpand.on('click', function (){

	$panel.toggleClass('js-panel-expand');

});



var $storyExpand = $('.story-expand');
var $story = $('.story');

	$storyExpand.on('click', function (){

	$story.toggleClass('js-panel-expand');

});



var $story2Expand = $('.story-2-expand');
var $story2 = $('.story-2');

	$story2Expand.on('click', function (){

	$story2.toggleClass('js-panel-expand');

});


var $story3Expand = $('.story-3-expand');
var $story3 = $('.story-3');

	$story3Expand.on('click', function (){

	$story3.toggleClass('js-panel-expand');

});

var $story4Expand = $('.story-4-expand');
var $story4 = $('.story-4');

	$story4Expand.on('click', function (){

	$story4.toggleClass('js-panel-expand');

});

var $story5Expand = $('.story-5-expand');
var $story5 = $('.story-5');

	$story5Expand.on('click', function (){

	$story5.toggleClass('js-panel-expand');

});

var $story6Expand = $('.story-6-expand');
var $story6 = $('.story-6');

	$story6Expand.on('click', function (){

	$story6.toggleClass('js-panel-expand');

});

	var $story7Expand = $('.story-7-expand');
var $story7 = $('.story-7');

	$story7Expand.on('click', function (){

	$story7.toggleClass('js-panel-expand');

});


$('.smooth-scroll').localScroll();


$('.to-top-image').on('click', function()
{
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});

// found snippet on stack-overflow, decided to use it for the scroll to top //
