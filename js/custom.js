$(function(){
//   slick
    
$('.benner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
    slideUp:true,
  autoplaySpeed: 2000,
});
//    mixitup
var containerEl = document.querySelector('.mixitup');

var mixer = mixitup(containerEl);
    
    
//    video
    $('.venobox').venobox();
    
//    back to top
       $('.back-to-top').click(function(){
      $('html,body').animate({scrollTop:0},1500) 
   });
    
    
//    sticky header
    $(window).on('scroll',function (event) {
       var asad = $(window).scrollTop();
        if (asad < 245) {
            $(".navbar").removeClass("bg");
        }   else{
            $(".navbar").addClass("bg");
        }
    });
});