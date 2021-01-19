// burger-button
$('.header__burger').on('click', function(){
	$('.header__nav').toggleClass('active');
	$('body').toggleClass('locked');
});

//leave__button
$('[data-toggle="open-modal"]').on('click', function(){
	$('.contact__right').addClass('show');
	$('body').addClass('locked');
	//$('.contact__right').closest('body').toggleClass('locked'); //to delete scrool during opened form popup
});
$('[data-toggle="close-modal"]').on('click', function(){
	$('.contact__right').removeClass('show');
	$('body').removeClass('locked');
	//$('.contact__right').closest('body').toggleClass('locked'); //to delete scrool during opened form popup
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