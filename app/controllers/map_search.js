/**
 * Controller for the Map Search
 *
 * @class Controllers.map_search
 * @uses core
 */
var APP = require("core");
var CONFIG = arguments[0];
APP.log("debug", "home | " + JSON.stringify(CONFIG));

var locations = [{
	"lat": 41.8911911,
	"longi": -87.6324906
}, {
	"lat": 41.8916184,
	"longi": -87.6330217
}, {
	"lat": 41.8916464,
	"longi": -87.6311066
}, {
	"lat": 41.8924251,
	"longi": -87.6329734
}];

//FUNCTIONS
var loadLocations = function() {
	for(var i = 0; i < 4; i++) {
		var location = Alloy.Globals.Map.createAnnotation({
			title: "Location " + i,
			latitude: locations[i].lat,
			longitude: locations[i].longi,
			pincolor: 88
		});
		//Ti.API.info(location.title);

		$.map.addAnnotation(location);
	}
};

//INIT
var init = function() {

	Ti.Geolocation.getCurrentPosition(function(e) {
		Ti.API.info(e.coords);
		var location = Alloy.Globals.Map.createAnnotation({
			title: "Your Location",
			latitude: 41.8906600,
			longitude: -87.632061
			//latitude: e.coords.latitude,
			//longitude: e.coords.longitude
		});

		$.map.addAnnotation(location);

		$.map.region = {
			latitude: 41.8906600,
			longitude: -87.632061,
			// latitude: e.coords.latitude,
			// longitude: e.coords.longitude,
			latitudeDelta: 0.05,
			longitudeDelta: 0.05
		};

	});

	loadLocations();

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

//LISTENERS
$.map.addEventListener('click', function(e) {
	//Ti.API.info(e.annotation);
	//alert(e.title);
	APP.addChild("place_detail", {
		isChild: true,
		heading: e.title,
		text: "More info here",
	});
});

//BOOTSTRAP
init();
