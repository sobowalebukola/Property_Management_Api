import "./register.html";
import { Userrs } from "../../api/events";

Template.register.events({
	'submit .sign-up-form': function (event, template) {
	  event.preventDefault();
  
	  var $form = $(event.currentTarget);
	  var $emailInput = $form.find('.email-address-input').eq(0);
	  var $passwordInput = $form.find('.password-input').eq(0);
  
	  var emailAddress = $emailInput.val() || '';
	  var password = $passwordInput.val() || '';
  
	  //trim
	  emailAddress = emailAddress.replace(/^\s*|\s*$/g, '');
	  password = password.replace(/^\s*|\s*$/g, '');
  
	  //validate
	  var isValidEmail = checkEmailIsValid(emailAddress);
	  var isValidPassword = checkPasswordIsValid(password);
  
	  if (!isValidEmail || !isValidPassword) {
		if (!isValidEmail) {
		  sAlert.error('Invalid email address');
		}
		if (!isValidPassword) {
		  sAlert.error('Your password must be at least 8 characters long');
		}
	  } else {
		Accounts.createUser({
		  email: emailAddress,
		  password: password
		}, function (error) {
		  if (error) {
			sAlert.error('Account creation failed for unknown reasons :(');
		  } else {
			Router.go('/login');
		  }
		});
	  }
	}
  });