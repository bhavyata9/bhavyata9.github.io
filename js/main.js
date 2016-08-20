$(document).ready(function() {
	var workPages= {};
	var projects=[];
	var current='';
	var height = $('.work-item img').height()+'px';
	 $(document).on("scroll", onScroll);
	 $( window ).resize(function() {
	 if($(window).width()<=311){
		 var numOfLinks = $(".work-links .link").length;
		$('.link').css('width',100/numOfLinks+'vw');
	}else{
		var numOfLinks = $(".work-links .link").length;
	 $('.link').css('width','auto');
	}
 });
 if($(window).width()<=311){
	 var numOfLinks = $(".work-links .link").length;
	$('.link').css('width',100/numOfLinks+'vw');
}else{
	var numOfLinks = $(".work-links .link").length;
 $('.link').css('width','auto');
}


	 //smoothscroll
	$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			var sections = $(".menu-item");
			var menuLinks = $('.navBarContainer ul li a');

			$('a').each(function () {
					$(this).removeClass('active');
			});
			var href = $(this).attr('href');
			var menuTab = menuLinks.filter(function(index,value,array){
				return $(value).attr('href') == href;
			});
			$(menuTab).addClass('active');
			var target = this.hash,
					menu = target;
			$target = $(target);
			$('html, body').stop().animate({
					'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
					window.location.hash = target;
					$(document).on("scroll", onScroll);
			});
	});


	$('.work-item a').each(function (index) {
		workPages[$(this).attr('href')]=index; //"this" is the current element in the loop
		projects.push($(this).attr('href'));
});



if(projects.length>0){
	localStorage.setItem('map',JSON.stringify(workPages));
	localStorage.setItem('array',JSON.stringify(projects));
	localStorage.setItem('current',current);
}

	$(".scroll").click(function(event){
		event.preventDefault();
		$('body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	//Work hover
	if (Modernizr.touch) {
			$(".work-item").click(function(e){
					if (!$(this).hasClass("hover")) {
							$(this).addClass("hover");
							$('.work-item.hover .overlay').css('height',height);
					}
			});
	} else {
			// handle the mouseenter functionality
			$(".work-item").mouseenter(function(){
					$(this).addClass("hover");
					$('.work-item.hover .overlay').css('height',height);

			})
			// handle the mouseleave functionality
			.mouseleave(function(){
				$('.work-item.hover .overlay').css('height',0);
					$(this).removeClass("hover");
			});
	}

	//Work navigation
	/*
	Functions:
	- returnToHome();
	- prevWork();
	- nextWork();
	*/

	$('.work-item a').click(function(){
		$(this).addClass('work-open');
		var href = $(this).attr('href');
		localStorage.setItem('current',href);
	});

	$('.work-tabs .all').click(function(){
		returnToHome();
	});

	$('.work-tabs .previous').click(function(){
		previousWork();
	});

	$('.work-tabs .next').click(function(){
			nextWork();
	});

	function returnToHome(){
		current = '';
	}

	function previousWork(){
		var current = localStorage.getItem('current');
		var map =JSON.parse(localStorage.getItem('map'));
		var array = JSON.parse(localStorage.getItem('array'));
		var index = map[current];
		index--;
		if(index<0){
			index = array.length-1;
		}
		var newLocation = array[index];
		localStorage.setItem('current',newLocation);
		window.location.href = newLocation;
	}

	function nextWork(){
		var current = localStorage.getItem('current');
		var map =JSON.parse(localStorage.getItem('map'));
		var array = JSON.parse(localStorage.getItem('array'));
		var index = map[current];
		index++;
		if(index>array.length-1){
			index =0;
		}
		var newLocation = array[index];
		localStorage.setItem('current',newLocation);
		window.location.href = newLocation;
	}

});

function onScroll(event){
	 var sections = $(".menu-item");
		if (sections.filter(":in-viewport:last").attr("id") == sections.last().attr("id")) {
          	$('.navBarContainer ul li a').removeClass("active");
          	$('.navBarContainer ul li:nth-last-child(2) a').last().addClass("active");
        }else{
					$('.navBarContainer a').each(function (index,element) {
							var currLink = $(this);
								if(index == 4){
									return;
								}
							var refElement = $(currLink.attr("href"));
							 var scrollPos = $(document).scrollTop();

							if (refElement.position().top-125 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
									$('.navBarContainer ul li a').removeClass("active");
									currLink.addClass("active");
							}
							else{
									currLink.removeClass("active");
							}
					});
				}
}
