var Ipad_Iphon_Android = (navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))


$(function () {
    $('.icons').show();
	if(Ipad_Iphon_Android){
		$('.floating-arrow, .scroll-arrow').hide();
		$('.icons').css({position:'absolute'});
		$('.right-content .icons').show().css({marginLeft:'-250px'});
		$('li.sequence').css('background-attachment','scroll');
		$('li.sequence').css('min-height','485px');
		$('.chapter').css('min-height','700px');
		$('li.sequence img').show().css({float:'right', marginRight:'15px'});
		$('.right-content li.sequence img').show().css({float:'left', marginRight:'0', marginLeft:'70px'});
		$('.text-content').show().css({position:'absolute'});
		$('.right-content .text-content').css({marginLeft:'60px'});
		$('#chapter1-block li.sequence').css({border:'0px'});
		$('#outer-header').css({position:'absolute'});
		$('#chapter1-block').css({marginTop:'83px'});
	}else{

    var $slideshowImages = $('li.sequence img');
    $slideshowImages.filter(':first').show();


		// sequenceImages('li.sequence');
		// floatingArrow();

		// var lastSequencePos = $('#chapter3-block li.sequence').offset().top;
		// var $currentChapter = $("#"+$('.chapter:in-viewport').attr('id'));
		// 	$('.text-content, .icons').stop().fadeTo(100,0);
		// 	$currentChapter.find('.text-content, .icons').stop().fadeTo(500,1);
		// 	$(window).scroll(function(){
		// 	/////
		// 	var $currentChapter = $("#"+$('.chapter:in-viewport').attr('id'));
		// 	$('.text-content, .icons').stop().fadeTo(100,0);
		// 	$currentChapter.find('.text-content, .icons').stop().fadeTo(500,1);
		// 	////
		// 	var windowScrollTop = $(window).scrollTop();
		// 	if(windowScrollTop > lastSequencePos-1150){
		// 		$('.scroll-arrow').fadeOut();
		// 		$('li.sequence').css('background-position','50% 0px');
		// 		$('li.sequence').css('background-attachment','scroll');
		// 	}else{
		// 		$('.scroll-arrow').fadeIn();
		// 		$('li.sequence').css('background-position','50% 83px');
		// 		$('li.sequence').css('background-attachment','fixed');
		// 	}
		// });


	}



	//One Page Navigaion
	// $('.meun').onePageNav({
 //    begin: function() {
	//   console.log('start')
 //    },
 //    end: function() {
	//   console.log('stop')
 //    }
 //  });
 //  //
 //  $('.floating-arrow, #logo').click(function(){
	// $('body').scrollTo( '#chapter1', 800 );
	// return false;
 //  });
});
//Sequence Images to Background
// function sequenceImages(list){
//     var $windowHight = $(window).height();
//     $(list).each(function(){
//         var imagePath = $(this).find('img').attr('src');
//         $(this).css({
//             backgroundImage:'url('+imagePath+')',
//             height:$windowHight
//         });
// 		if($windowHight<550){
// 			$(this).css({
// 				height:'600px'
// 			});
// 		}
//     });
// }
// function floatingArrow(){
//     var offset = $('.floating-arrow').offset();
//     var lastSequencePos = $('li.sequence:last').offset().top;
//     var topPadding = 15;
//     $(window).scroll(function(){
//         if($(window).scrollTop() > (lastSequencePos)-200){
//             $('.floating-arrow').stop().animate({
//                 marginTop: $(window).scrollTop() - offset.top + $(window).height() - 100
//             });
//         }else{
//             $('.chapter1-text').stop().animate(function(){
//                 marginTop: 0
//             });
//         }
//     });
// }



