// burger-button
$('.header__burger').on('click', function(){
	$('.header__nav').toggleClass('active');
	$('body').toggleClass('locked');
});

//leave__button
$('[data-toggle="open-modal"]').on('click', function(){
	$('.contact__right').toggleClass('show');
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