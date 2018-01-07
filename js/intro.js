// for window load
	$(window).on('load',function() {
		// Animate loader off screen
		console.warn('load');
    $(".loadingText").animate({
      opacity:'0.5'
    });
		$(".icon").fadeOut("slow" );
	});

// $(document).ready(function(){
//   var adjectives = ['Optimistic','Innovative','Persistent','Passionate','Practical'];
//   var i = 0;
//   setInterval(function() {
//     $('#intro4 h1').fadeOut(500, function() {
//       if (i>=adjectives.length){
//         i = 0;
//       }
//       $(this).text(adjectives[i]);
//       $(this).fadeIn(100);
//       i++;
//     });
// }, 2000);

// 	$(".miniMenu").css({
//         display: "block"
//     });

//     $(".miniMenu").css({
//         visibility: "visible"
//     });
// 		$(".miniMenu").css({
// 			 opacity: 0
// 	 });

// 	 $("#blockOne").mouseenter(function(){
// 			 $(this).find(".main").stop().delay(100).animate({
// 					 opacity:0,
// 			 }, 200);

// 			 $(this).find(".miniMenu").stop().delay(100).animate({
// 					 opacity: 1,
// 				}, 200);

// 	 });
// 	 $("#blockOne").mouseleave(function(){
// 			 $(this).find(".miniMenu").stop().delay(100).animate({
// 					 opacity: 0
// 			 }, 200);

// 			 $(this).find(".main").stop().delay(100).animate({
// 					 opacity: 1
// 				}, 200);
// 	 });

// });
