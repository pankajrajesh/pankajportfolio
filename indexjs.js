$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky"); 
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     
    // slide up 
    $('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop: 0});
    });
     
    //tying
    var typed = new Typed(".typing", {
         strings: ["Web Developer"],
         typeSpeed: 150,
         backSpeed: 90,
         loop: true
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});