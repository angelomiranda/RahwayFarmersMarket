(function($){
	$(function(){
		$('.slide img').css('display', 'block');
		// Runs the homepage carousel 
		$('#slides').slides({
			effect: 'fade',
			play: 4000,
			pause: 2500,
			hoverPause: false
		});
		// Appends the controls on the div
		$('a.prev').show().appendTo('#controls');
		$('ul.pagination').appendTo('#controls');
		$('a.next').show().appendTo('#controls');
	
		// Function that validates email
		function validateEmail(email) { 
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		// Validates email on the subscribe events and toggles "your email..." keywords
		var def = 'your email...';
		var email = $('#email');
		email.val( def );
	
		email.focus( function(){
			if ( $(this).val() == def ) {
				$(this).val( '' );
			}
		});
		
		email.blur( function(){
			if ( $(this).val() == '' ) {
				$(this).val( def );
			}
		});
		$("#subscribe").on('click', function(){
			$('#feedback').text("");
			var email = $('#email').val();
			if (!validateEmail(email)) {
				$('#feedback').text('Please provide a valid Email');
				return false;
			} 
			alert("Thank you for subscribing! Your newsletter will be emailed to you weekly!");
		});
		
	});
})(jQuery);