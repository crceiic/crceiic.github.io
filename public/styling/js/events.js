$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop: $("#top").offset().top}, 0);
    });

});