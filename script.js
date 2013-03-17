var $ = jQuery;

// disable default action of 'submit' event

$(".button").click(function(event){
	event.preventDefault();
});

// validate that the use has:
	// a username
	function validateUsername(inputElement) {
		var errors = [];
		var value = inputElement.val();
		if (value === "") {
			errors.push("Username required");
		}
	}

	// a password that matches the confirm password field
	function validatePassword(inputElement) {
		var errors = [];
		var value = inputElement.val();
		var value2 = 
	}

	// inputs that are all longer than 6 characters in length
