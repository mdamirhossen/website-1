$(document).ready(function (){

    AOS.init({
        duration : 1000
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $(".scrollUp").fadeIn();
        }else{
            $(".scrollUp").fadeOut();
        }
    });





})