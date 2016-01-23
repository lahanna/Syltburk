// Smooth scrolling
$(document).ready(function(){

	var $root = $('html, body');
	$('.arrow-all, .footer-icon').on('click', function(){
		var distance = $($.attr(this, 'href')).offset().top;
		$root.animate({
			scrollTop: distance + 'px'
		}, 600);
		return false;
	});

	function resizeFirstPage(){
		var windowHeight = $(window).height();
		$('.first-page').css({
			'height': windowHeight
		});
	};

	$(window).on('resize', function(){
		resizeFirstPage();
	});

	resizeFirstPage();
	
});