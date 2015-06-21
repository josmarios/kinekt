/**
 * Controller for the home screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];

APP.log("debug", "home | " + JSON.stringify(CONFIG));

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