$(document).ready(function(){
    
    $("header").width($(window).width());
    $("header").height($(window).height()/2);
      
    $(window).on("resize",function(){
        $("header").width($(window).width());
        $("header").height($(window).height()/2);
    });
    
    // fire dropdown menu 
    $('.ui.dropdown').dropdown(); 
    
    
});