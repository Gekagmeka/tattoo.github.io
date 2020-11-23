// burger-button
$('.header__burger').on('click', function(){
	$('.header__nav').toggleClass('active');
	$('body').toggleClass('locked');
});

// fancybox
$('[data-fancybox="gallery"]').fancybox({
	buttons : [
		'slideShow',
		'share',
		'zoom',
		'fullScreen',
		'close'
	],
	protect: true
});