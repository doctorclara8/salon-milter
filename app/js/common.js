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


	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carousel_s();
		});
	}
	);
	$('.carousel-services').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<span><i class="fas fa-angle-double-left"></i></span>', '<span><i class="fas fa-angle-double-right"></span>'],
		responsiveClass: true,
		responsive: {

			0: {

				items: 1

			},

			800: {

				items: 2

			},

			1100: {

				items: 3

			}
		}

	});



	function carousel_s() {
		$('.carousel-services-item').each(function () {
			$(this).find('.carousel-services-img').css('min-height', $(this).find('.carousel-services-content').outerHeight());
		})
	}
	$('.carousel-services-content .h3').each(function () {
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	function onRecize() {
		$('.carousel-services-content').equalHeights();
		console.log(1);
	}
	$('.carousel-services-content').equalHeights();
	$(window).onrecize = function () {
		onRecize();
	}

});