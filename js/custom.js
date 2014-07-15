$(document).ready(function() {
   
    jQuery('li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
    });
   
    $(".gallry-innr").hover(function(){
      $(".gallry-innr a").stop( true, true ).animate({"opacity":"0"},700);
      $(this).find('a').stop( true, true ).animate({"opacity":"1"},700);
    },function(){
        $(this).find('a').stop( true, true ).animate({"opacity":"0"},700);;	
    });
});



