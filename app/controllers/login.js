/**
 * Controller for the login screen
 *
 * @class Controllers.login
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];

//EVENTS
$.login_btn.addEventListener('click', function(e) {
	APP.addChild("my_properties", {
		isChild: true
	});

});

$.signup_btn.addEventListener('click', function(e) {
	APP.addChild("signup", {
		isChild: true
	});

});

//FUNCTIONS
var init = function() {

	APP.log("debug", "login | " + JSON.stringify(CONFIG));

	//$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;

	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack(function(_event) {
			APP.removeChild();
		});
	} else {
		if(APP.Settings.useSlideMenu) {
			$.NavigationBar.showMenu(function(_event) {
				APP.toggleMenu();
			});
		} else {
			$.NavigationBar.showSettings(function(_event) {
				APP.openSettings();
			});
		}
	}
};