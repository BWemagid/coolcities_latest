					$(function() {
			var button = $('#loginButton');
			var box = $('#loginBox');
			var form = $('#loginForm');
			button.removeAttr('href');
			button.mouseup(function(login) {
				box.toggle();
				button.addClass('active');
			});
			form.mouseup(function() { 
				return false;
			});
			$(this).mouseup(function(login) {
				if(!($(login.target).parent('#loginButton').length > 0)) {
					button.removeClass('active');
					box.hide();
				}
			});
		});
		
		
		
						$(function() {
			var button = $('#loginButton2');
			var box = $('#loginBox2');
			var form = $('#loginForm2');
			button.removeAttr('href');
			button.mouseup(function(login) {
				box.toggle();
				button.addClass('active');
			});
			form.mouseup(function() { 
				return false;
			});
			$(this).mouseup(function(login) {
				if(!($(login.target).parent('#loginButton2').length > 0)) {
					button.removeClass('active');
					box.hide();
				}
			});
		});
		
		
		
						$(function() {
			var button = $('#loginButton3');
			var box = $('#loginBox3');
			var form = $('#loginForm3');
			button.removeAttr('href');
			button.mouseup(function(login) {
				box.toggle();
				button.addClass('active');
			});
			form.mouseup(function() { 
				return false;
			});
			$(this).mouseup(function(login) {
				if(!($(login.target).parent('#loginButton3').length > 0)) {
					button.removeClass('active');
					box.hide();
				}
			});
		});
		
		
		
		
						$(function() {
			var button = $('#loginButton4');
			var box = $('#loginBox4');
			var form = $('#loginForm4');
			button.removeAttr('href');
			button.mouseup(function(login) {
				box.toggle();
				button.addClass('active');
			});
			form.mouseup(function() { 
				return false;
			});
			$(this).mouseup(function(login) {
				if(!($(login.target).parent('#loginButton4').length > 0)) {
					button.removeClass('active');
					box.hide();
				}
			});
		});
		