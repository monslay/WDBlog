$(document).ready(function() {
	$('#mobile-nav-btn').on('click', function() {
		$('.header-nav').slideToggle();
	});

	$(window).resize(function(){
  		var width = $(window).width();
	 	if (width > 320 && $('.header-nav').is(':hidden')) {
	    	$('.header-nav').removeAttr('style');
	  	}
	}); 

	$('.work-nav button').click(function() {
		var id = this.id;

		if (id == 'all') {
			$('.works-list__item').show(500);
			return;
		}

		var current = $('.works-list__item.' + id);

		$('.works-list__item').not(current).hide(500);
		current.show(500);
	});

	$('.clients-slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		    {
		    	breakpoint: 767,
		    	settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
		    	}
		    },
		    {
		    	breakpoint: 575,
		    	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
		    	}
		    },
		    {
		    	breakpoint: 400,
		    	settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
		    	}
		    },
		  ]
	});
});
