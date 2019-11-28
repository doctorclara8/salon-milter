$(function () {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', "border-none", "position-back",
			"position-right"],
		navbar: { title: '<img src="img/logo-1.svg" alt="SMitler">' },
	});
	$('ul.menu a[href^="#"').click(function () {
		var target = $(this).attr('href');
		setTimeout(function () {
			$("#my-menu").data("mmenu").close();
		}, 300);
		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
			$('ul.menu a[href^="#"').removeClass('active');
			$(this).addClass('active')
		}, 2000);

		return false;
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}
		else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function () {
		$('html, body').stop().animate(
			{ scrollTop: 0 }, 'slow', 'swing')
	})
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
	$('.carousel-parthners').owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		smartSpeed: 700,
		navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></span>'],
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},
			768: {

				items: 2

			},

			992: {

				items: 3

			},

			1200: {

				items: 4

			}
		}

	});
	$('.carousel-review').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		smartSpeed: 700
	});

	// $('select').selectize({
	// 	create: true,
	// 	sortField: 'text'
	// });

	$('.fotorama').fotorama({
		keyboard: false,
		nav: 'thumbs',
		thumbwidth: 110,
		thumbheights: 60,
		thumbborderwidth: 4,
		width: '100%',
		keyboard: true,
		thumbmargin: 10,
		shadows: false
		// spinner: {
		// 	lines: 13,
		// 	color: 'rgba(0, 0, 0, .75)'
		// }
	});

	//E-mail Ajax Send
	$("form.callback").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find('.success').addClass('.active').css('display', 'flex').hide().fadeIn();
			setTimeout(function () {
				// Done Functions
				$(th).find('.success').removeClass('.active').css('display', 'none').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	function carousel_s() {
		$('.carousel-services-item').each(function () {
			$(this).find('.carousel-services-img').css('min-height', $(this).find('.carousel-services-content').outerHeight());
		})
	}
	$('.carousel-services-content .h3').each(function () {
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function () {
		$(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	function onRecize() {
		$('.carousel-services-content').equalHeights();
		console.log(1);
	}

	$('.carousel-services-content').equalHeights();
	$(window).onrecize = function () {
		onRecize();
	}

	$(window).on('load', function () {
		$('.preloader').delay(1000).fadeOut('slow')

	})
});