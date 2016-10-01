$(document).ready(function(){
    
    $("header").width($(window).width());
    $("header").height($(window).height());
      
    $(window).on("resize",function(){
        $("header").width($(window).width());
        $("header").height($(window).height());
    });
    // fire dropdown menu 
    $('.ui.dropdown').dropdown();
    
    var eventFired = false;
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 5)
        {
            $("nav").addClass("white");         
        }
        else
        {
            $("nav").removeClass("white");         
        }
        
        // fire countTo Plugin
        if($(window).scrollTop() > $(".best-resturants").offset().top && eventFired === false){
            $('.timer').countTo({
                speed:2000
            });
            eventFired = true;
        }
    });
    
    // fire countTo Plugin
    if($(window).scrollTop() > $(".best-resturants").offset().top && eventFired === false){
        $('.timer').countTo({
            speed:2000
        });
        eventFired = true;
    }
});