// burger-button
$('.header__burger').on('click', function(){
	$('.header__nav').toggleClass('active');
	$('body').toggleClass('locked');
});
$('.header__link').on('click', function(){
	$('.header__nav').removeClass('active');
	$('body').removeClass('locked');
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



//smooth scrolling to the anchor
//this.hash -> подтягивает именно тот id, по ссылке которого был клик
// $('.header__link').on('click', function(e){
// 	$('html, body').stop().animate({
// 		scrollTop: $(this.hash).offset().top }, 1000
// 		);
// 	e.preventDefault();
//  });

//можно использовать этот код
//тут неважно если ли ссылки с определенными классами
//тут отслеживаем клик по ссылкам - у которых есть # в href
$('body').on('click', '[href*="#"]', function(e){
	//var fixed_offset = 100; - это смещение (высота верхнего блока)
	//$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
	e.preventDefault();
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