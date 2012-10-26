/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

var mobile = (navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))

$(function() {
  // Maybe show a loader gif...
});

$(window).load(function () {
	if (mobile) {
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
        $winHeight = $window.height(),
        increment = 50,
        throttle = 150,
        $c1Text = $('#chapter1-text'),
        $c2Text = $('#chapter2-text'),
        $c3Text = $('#chapter3-text'),
        $c2Icons = $('.chapter2-icons-container ul'),
        $c3Icons = $('.chapter3-icons-container ul'),
        $c1Content = $('#chapter1-text, #unbuild li img'),
        $c2Content = $('#chapter2-text, .chapter2-icons-container ul').addClass('hide'),
        $c3Content = $('#chapter3-text, #chapter3-image, .chapter3-icons-container ul').addClass('hide'),
        $c4Content = $('#chapter4-text, #chapter4-image, .chapter4-icons-container ul').addClass('hide'),
        $c5Content = $('#chapter5-text, #chapter5-image, .chapter5-icons-container ul').addClass('hide'),
        $c6Content = $('#chapter6-text, #chapter6-map'),
        allContent = [$c1Content, $c2Content, $c3Content, $c4Content, $c5Content, $c6Content],
        allContentLength = allContent.length,
        lastScrollTop = 0,
        lastPhase = 0,
        firstLoad = true,
        scrollPhase = 1,
        $scrollArrow = $('.scroll-arrow'),
        $lastPall = $('img#img-16'),
        $chapterNavLi = $('ul#chapter-nav li a');

    // Wait for the document to load before calculating the window.height
    var timeout = window.setTimeout(function () {
      var scrollTop = lastScrollTop = $window.scrollTop();
      lastPhase = Math.floor(scrollTop / increment);
      scrollFadeOutFirstPhase();
      $window.bind('scroll', $.throttle(throttle, true, scrollFadeOutFirstPhase));
    }, 50);

    function scrollFadeOutFirstPhase() {
      var scrollTop = $window.scrollTop(),
          direction = (lastScrollTop > scrollTop) ? 'up' : 'down',
          phase = Math.floor(scrollTop / increment);

      // Clear the timer
      window.clearTimeout(timeout);
      if (scrollTop < 850) {
        $.each($chapterNavLi, function () {
          $(this).parent().removeClass('current');
        });
        $chapterNavLi.eq(0).parent().addClass('current');
        scrollPhase = 1;
        if (Modernizr.csstransitions === true) {
          $scrollArrow.show();
          $c1Text.removeClass('hide').addClass('show');
          $c2Content.add($c3Content).add($c4Content).add($c5Content).removeClass('show').addClass('hide');
        } else {
          $c1Text.show();
          $c2Icons.add($c2Text).removeClass('show').addClass('hide');
        }
        thisPhase = phase = (phase < 0) ? 0 : phase;
        if (firstLoad === true) {
          $('img#img-' + thisPhase).removeClass('hide').addClass('show');
        } else {
          if (lastPhase !== phase) {
            $slideshowImages.removeClass('show').addClass('hide');
            if (direction === 'up') {
              thisPhase = (phase > 1) ? (phase - 1) : 0;
            }
            $('img#img-' + thisPhase).removeClass('hide').addClass('show');
            lastScrollTop = scrollTop;
            lastPhase = phase;
          }
        }
      } else {
        $slideshowImages.removeClass('show').addClass('hide');
        $scrollArrow.hide();
        var chapter;
        if (scrollTop > 850 && scrollTop < 1200) {
          chapter = 2;
        } else if (scrollTop > 1200 && scrollTop < 1550) {
          chapter = 3;
        } else if (scrollTop > 1550 && scrollTop < 1900) {
          chapter = 4;
        } else if (scrollTop > 1900 && scrollTop < 2250) {
          chapter = 5;
        } else if (scrollTop > 2250) {
          chapter = 6;
        }
        scrollFadeOutNextPhase(chapter, scrollTop);
      }
      firstLoad = false;
    }

    function scrollFadeOutNextPhase(chapter, scrollTop) {
      $.each($chapterNavLi, function () {
        $(this).parent().removeClass('current');
      });
      $chapterNavLi.eq(chapter - 1).parent().addClass('current');
      for (var i = 0; i < allContentLength; i++) {
        if (Modernizr.csstransitions === true) {
          if (chapter === i + 1) {
            allContent[i].removeClass('hide').addClass('show');
          } else {
            allContent[i].removeClass('show').addClass('hide');
          }
        }
        // Add support for non css3 browsers
      }
      if (chapter === 2 ) {
        $('img#img-16').addClass('show').removeClass('hide');
      }
    }

    $chapterNavLi.click(function () {
      $window.unbind('scroll', scrollFadeOutFirstPhase);
      var depth = +$(this).parent().attr('data-depth');
      $("html, body").animate({ scrollTop: depth }, 300, function () {
        $window.bind('scroll', $.throttle(throttle, true, scrollFadeOutFirstPhase)).trigger('scroll');
        if (depth === 0) {
          $slideshowImages.removeClass('show').addClass('hide');
          $('img#img-0').removeClass('hide').addClass('show');
        }
      });
      return false;
    });
	}

});


  // floatingArrow();



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



