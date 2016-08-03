//menu responsive
$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$("icon-me").click();
});

//menu fijo
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() - 70;
		if ($(window).scrollTop() > navHeight) {
			$('nav').addClass('fixed');
		}
		else {
			$('nav').removeClass('fixed');
		}
	});
});

//scroller
$(document).ready(function() {
	$("a.scroller").smoothscrolling();
});