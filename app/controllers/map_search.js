/**
 * Controller for the Map Search
 *
 * @class Controllers.map_search
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];

APP.log("debug", "home | " + JSON.stringify(CONFIG));

//INIT
var init = function() {

	var location = Alloy.Globals.Map.createAnnotation({
		title: "Your Location",
		latitude: 43.0782630,
		longitude: -87.8819690
	});

	$.map.addAnnotation(location);

	$.map.region = {
		latitude: 43.0782630,
		longitude: -87.8819690,
		latitudeDelta: 0.05,
		longitudeDelta: 0.05
	};

	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack(function(_event) {
			APP.removeChild();
		});
	}

	if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu(function(_event) {
			APP.toggleMenu();
		});
	} else {
		$.NavigationBar.showSettings(function(_event) {
			APP.openSettings();
		});
	}

};

//BOOTSTRAP
init();