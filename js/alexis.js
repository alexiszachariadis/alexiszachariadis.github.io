$( document ).ready(function() {
	$("[rel='tooltip']").tooltip();

	$('.thumbnail').hover(
		function(){
			$(this).find('.caption').fadeIn(300); //.fadeIn(250)
		},
		function(){
			$(this).find('.caption').fadeOut(300,function(){$ (this).stop( true, true )}); //.fadeOut(205) and stop hover
		}
	); 
});

/* Back to Top scroll */
jQuery(document).ready(function() {
    var offset = 120;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});