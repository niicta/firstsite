$("document").ready(function(){
	hidePopUps();
	$(".sing-in-button").click(function(){
		showSingInPopUp();
	});
	$(".sing-up-button").click(function(){
		showSingUpPopUp();
	});
	$('#close-sing-in-popup').click(function(){
			closeSingIn();
	})
	$('#close-sing-up-popup').click(function(){
			closeSingUp();
	})
	$('#ok-sing-in-button').click(function(){
		var login_field = $('#sing-in-login');
		var login = login_field.val();
			if(checkLoginField(login))
				closeSingIn();
				
	})
	$('#ok-sing-up-button').click(function(){
		var login_field = $('#sing-up-login');
		var login = login_field.val();
		var mail_field = $('#sing-up-mail');
		var mail = mail_field.val();
			if(checkLoginField(login) && checkMailField(mail))
				closeSingUp();
	}
)});
function hidePopUps(){
	$(".popup").hide();
	// var popups = $(".popup");
	// for (var i = popups.length - 1; i >= 0; i--) {
	// 	popups[i].hide();
	// }
}
function showSingInPopUp(){
	$(".sing-in-popup-container").fadeTo(0, 0).css('display', 'flex').fadeTo(0, 1);

}
function showSingUpPopUp(){
	$(".sing-up-popup-container").fadeTo(0, 0).css('display', 'flex').fadeTo(0, 1);
}
function closeSingIn(){
		$(".sing-in-popup-container").fadeTo(0.3, 0);
		setTimeout(function(){$(".sing-in-popup-container").hide()}, 300);
}
function closeSingUp(){
		$(".sing-up-popup-container").fadeTo(0.3, 0);
		setTimeout(function(){$(".sing-up-popup-container").hide()}, 300);
}
function checkLoginField(login){
	var exp = /^[a-zA-Z]+$/
	var result = exp.test(login);
	// var result = login_field.text().search(exp);
	if (	result === false) {
		alert("Логин должен содержать только латинские буквы");
	}
	return 	result;
}
function checkMailField(mail){
	var exp = /.+@.+\..+/i;
	var result = exp.test(mail);
	// var result = login_field.text().search(exp);
	if (	result === false) {
		alert("Неправильно введен адрес электронной почты");
	}
	return 	result;
}
