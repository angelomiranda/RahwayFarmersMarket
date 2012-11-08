
(function($){
	$(document).ready(function() {
		$('.focus').on('focus blur', function() {
			$(this).toggleClass('highlight');
		});
		$('#textarea').keyup(function() {
			var maxlength = 200;
			var charRemaining = maxlength - $('#textarea').val().length;
				$('#comment_feedback').html(charRemaining + " Characters Remaining");
		});
		// Function that validates email
		function validateEmail(email) { 
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		$('#submit').on('click', function() {
			var email_ = $('#contact_email');
			var email_val = $('#contact_email').val();
			var textarea = $('#textarea');
			var textarea_val = $('#textarea').val();
			var c_feedback = $('#contact_feedback');
			c_feedback.text("");
			email_.css('border', 'none');
			textarea.css('border', 'none');
			if (!validateEmail(email_val)) {
				email_.css('border', '2px solid red');
				c_feedback.html("***** Please provide a valid email *****");
				return false;
			}
			if (textarea_val == '') {
				textarea.css('border', '2px solid red');
				c_feedback.html("***** Please provide your comment on the highlighted field *****");
				return false;
			} else {
				alert("Thank you for using our contact form. We will get back to you as soon as we can!");
			}
			
		});

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