jQuery(document).ready(function($) {
    $("#about-scroll").click(function(event){     
        $('html,body').animate({
        	scrollTop:$("#about").offset().top
        }, 500);
    });
});

jQuery(document).ready(function($) {
    $("#skills-scroll").click(function(event){     
        $('html,body').animate({
        	scrollTop:$("#skills").offset().top
        }, 500);
    });
});

jQuery(document).ready(function($) {
    $("#resume-scroll").click(function(event){     
        $('html,body').animate({
        	scrollTop:$("#resume").offset().top
        }, 500);
    });
});

jQuery(document).ready(function($) {
    $("#contact-scroll").click(function(event){     
        $('html,body').animate({
        	scrollTop:$("#contact").offset().top
        }, 500);
    });
});