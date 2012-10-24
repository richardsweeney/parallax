/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

var Ipad_Iphon_Android = (navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))


jQuery(function ($) {
  // $('.icons').show();
	if(Ipad_Iphon_Android){
		// $('.floating-arrow, .scroll-arrow').hide();
		// $('.icons').css({position:'absolute'});
		// $('.right-content .icons').show().css({marginLeft:'-250px'});
		// $('li.sequence').css('background-attachment','scroll');
		// $('li.sequence').css('min-height','485px');
		// $('.chapter').css('min-height','700px');
		// $('li.sequence img').show().css({float:'right', marginRight:'15px'});
		// $('.right-content li.sequence img').show().css({float:'left', marginRight:'0', marginLeft:'70px'});
		// $('.text-content').show().css({position:'absolute'});
		// $('.right-content .text-content').css({marginLeft:'60px'});
		// $('#chapter1-block li.sequence').css({border:'0px'});
		// $('#outer-header').css({position:'absolute'});
		// $('#chapter1-block').css({marginTop:'83px'});
	} else {

    var $slideshowImages = $('#unbuild li img'),
        $window = $(window),
        increment = 150;

    $slideshowImages
      .addClass('hidden')
      .css({ 'opacity': 0 });

    var lastScrollTop = 0,
        lastPhase = 0,
        firstLoad = true;

    // Wait for the document to load before calculating the window.height
    window.setTimeout(function () {
      var scrollTop = $window.scrollTop();
      lastScrollTop = scrollTop;
      lastPhase = Math.floor(scrollTop / increment);
      scrollFadeOut();
      $window.bind('scroll', $.throttle(150, true, scrollFadeOut));
    }, 50);

    function scrollFadeOut() {

      var scrollTop = $window.scrollTop(),
          direction = (lastScrollTop > scrollTop) ? 'up' : 'down',
          phase = Math.floor(scrollTop / increment);

      thisPhase = phase = (phase < 0) ? 0 : phase;

      if (firstLoad === true) {
        $('img#img-' + thisPhase).animate({ 'opacity' : 1 }, 150);
        console.log($('img#img-' + thisPhase));
      } else {
        if (lastPhase !== phase) {
          $slideshowImages.animate({ 'opacity': 0 }, 150);
          if (direction === 'up') {
            thisPhase = (phase > 1) ? (phase - 1) : 0;
          }
          $('img#img-' + thisPhase).animate({ 'opacity' : 1 }, 150);
          lastScrollTop = scrollTop;
          lastPhase = phase;
        }
      }
      firstLoad = false;
    }





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



