$(document).ready(function(){
    $(".btn").click(function(){
        $("#hyp").removeClass('hgt').addClass('aftr');
    });
    $(".btt").click(function(){
        $("html, body").animate({scrollTop:0}, 1000);
        
    })
    });
