$("document").ready(function(){
	$('.menu-bar-mobile-trigger').click(function(){
		executeMenuBarCondition();
	})
	$('.menu-bar-mobile').css('top', $('.header').height());
	$('.menu-bar-mobile').css('left', -$('.menu-bar-mobile').width());
	$('.menu-bar-mobile-trigger').css('top', $('.header').height());
	$('.menu-bar-mobile-trigger').css('left', $('.menu-bar-mobile').width()+$('.menu-bar-mobile').css('left'));
	$(window).scroll(function(){
		executeScrollPositionCondition();
	});
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
			if(checkLoginField(login) && checkPassLogin())
				closeSingIn();
				
	})
	$('#ok-sing-up-button').click(function(){
		var login_field = $('#sing-up-login');
		var login = login_field.val();
		var mail_field = $('#sing-up-mail');
		var mail = mail_field.val();
			if(checkLoginField(login) && checkMailField(mail) && checkPassSingUp() && checkPassRepeat() && checkName())
				closeSingUp();
	})
	$('.scroll-to-top-container').click(function(){
		$('body, html').animate({scrollTop:0},300);
	})
});
function checkPassLogin(){
	if ($("#sing-in-password").val().length >0)
		return true;
	alert ("введите пароль!");
}
function checkPassSingUp(){
	var text1 = $("#sing-up-password").val(); 
	if ((text1.length < 6)){
		alert ('Длина пароля должна быть больше шести символов');		
		return false;	
	}
		return true	;
}
function checkPassRepeat(){
	if (!($("#sing-up-password").val() === $("#sing-up-password-repeat").val())){
		alert ('Пароли не совпадают');	
		return false;		
	}
		return true;	
}
function checkName(){
	var name_field = $('#sing-up-name');
		var name = name_field.val();
		var exp = /^[a-zA-Zа-яА-Я\-]+(\s[a-zA-Zа-яА-Я\-]+)*$/;
		var result = exp.test(name);
	// var result = login_field.text().search(exp);
	if (	result === false) {
		alert("Неправильно введено имя!");
	}
	return 	result;

}
function hidePopUps(){
	$(".popup").hide();
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
function executeScrollPositionCondition(){
	var position = $(window).scrollTop();
	var display = $(".scroll-to-top-container").css('display');
	//$('.scroll-to-top-text').text(position);
	if (position != 0){
		if (display != 'flex') {
		$(".scroll-to-top-container").css('display' , 'flex').fadeTo(0, 1);
	}
	}
	else{
		$(".scroll-to-top-container").fadeTo(0.3, 0);
		setTimeout(function(){$(".scroll-to-top-container").hide()}, 300);
	}
	if ($('.menu-bar').css('display') == 'none') {return}
	var menu_bar = $('.menu-bar');
	if (position > $('.header').height()) {
		menu_bar.css('position' , 'fixed');
		menu_bar.css('top' , -menu_bar.outerHeight());
		if (menu_bar.css('top') != 0) {
			menu_bar.animate({top:0},800);
		}		
		menu_bar.css('width' , '100%');
		menu_bar.css('z-index' , '100');
		$('.main-content').css('position' , 'relative');
		$('.main-content').css('top', menu_bar.outerHeight());
	}
	else{	
		// menu_bar.css('top' , '');
		// menu_bar.css('position' , '');
		
		menu_bar.removeAttr('style');
		$('.main-content').removeAttr('style');
	}
	
}
function executeMenuBarCondition(){
	var menu_bar = $('.menu-bar-mobile');
	var menu_bar_trigger = $('.menu-bar-mobile-trigger');
	var position = menu_bar.position().left;
	var neededPos =  position < 0 ? 0 : -menu_bar.width();
	menu_bar.animate({left:neededPos},800);
	menu_bar_trigger.animate({left:neededPos + menu_bar.width()},800);
	if (position < 0 ) {
		OffScroll();
	}
	else{
		$(window).unbind('scroll');
		$(window).bind('scroll',function () {
			executeScrollPositionCondition()
			}
	)}
}

function OffScroll() {
var winScrollTop = $(window).scrollTop();
$(window).bind('scroll',function () {
  $(window).scrollTop(winScrollTop);
});
}
