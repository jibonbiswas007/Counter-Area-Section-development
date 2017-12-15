(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$(".header-area").sticky();
    	$(".counter-number span").counterUp({
    		delay: 10,
            time: 1500
    	});
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));