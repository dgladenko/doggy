var $btns = $('.our_dogy_navigat_item').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
/*---------------------------- start Hamburger_menu_mobile ------------------------*/


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

$(".hamburg").click(function(){
	 $(".hamburg_open").slideToggle( "slow" );
})

$('.galery_row').magnificPopup({
	delegate: 'a',
	type: 'image',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
	},
	image: {
		tError: '',
		titleSrc: function(item) {
		}
	}
});
/*---------------------------- finish Hamburger_menu_mobile ------------------------*/
$(".faq_tabs_title").click(function(){
	 $(this).toggleClass('activetab');
})

/*---------------------------- start Mask_input_telephone ------------------------*/

$(".tel_mask").mask("+7(999) 999-99-99");

/*---------------------------- finish Mask_input_telephone ------------------------*/


/*---------------------------- start Scroll_To ------------------------*/

$("#pol").click(function (){
		$('html, body').animate({
				scrollTop: $("#polblock").offset().top
		}, 1000);
})
$("#whywe").click(function (){
		$('html, body').animate({
				scrollTop: $("#whyweblock").offset().top
		}, 1500);
})
$("#calcul").click(function (){
		$('html, body').animate({
				scrollTop: $("#calculblock").offset().top
		}, 2000);
})


/*---------------------------- finish Scroll_To ------------------------*/
	
  // Add smooth scrolling to all links
  $(".linkh").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
	

/*---------------------------- start Animate WOW ------------------------*/

new WOW().init();

/*---------------------------- finish Animate WOW ------------------------*/
