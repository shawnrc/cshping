/**
 * Accounts controller
 * 
 *  
 */


Template.login.events({
	
	'submit #login-form': function(event, form) {
		
		event.preventDefault();
		
		var username = form.find('#login-username').value;
		var password = form.find('#login-password').value;
		
		Meteor.loginWithPassword(username, password, function(error) {
			
			if(error) throw new Meteor.Error(error);
			
		});
		
	}
	
});

Template.register.events({
	'submit #register-form': function(event, form) {
		
		event.preventDefault();
		
		var username = form.find('#account-email').value;
		var password = form.find('#account-password').value;
		var passvald = form.find('#password-validate').value;
		var cellnum  = form.find('#')
	}
})
