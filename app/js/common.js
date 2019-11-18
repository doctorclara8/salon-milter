$(function () {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', "border-none", "position-back",
			"position-right"],
		navbar: { title: '<img src="img/logo-1.svg" alt="SMitler">' },
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});
});