$(document).ready(function(){
  $('.main-slider').slick({
    	autoplay: true,
    	autoplaySpeed : 2500,
    	arrows : false
  });

  $('.poster-slider').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	arrows: false,
    	autoplay: true,
    	autoplaySpeed : 2500
  });
});

