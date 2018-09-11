// for window load
	$(window).on('load',function() {
		// Animate loader off screen
		console.warn('load');
    $(".loadingText").animate({
      opacity:'0.5'
    });
		$(".icon").fadeOut("slow" );
	});