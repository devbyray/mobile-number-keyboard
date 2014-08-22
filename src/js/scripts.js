(function () {

	'use strict';

	// androidTypes: {
	// 	numberKeyboard : [
	// 		"4.2.2", "4.4.4", "4.4.2", "2.3.3"
	// 	],
	// 	telKeyboard : [
	// 		"4.1.2"
	// 	]
	// }

	var useragent = navigator.userAgent;

	function deviceOS() {
		if(useragent.match(/Android/i)) {
			return 'android';
		} else if(useragent.match(/iPhone/i)) {
			return 'iphone';
		} else if(useragent.match(/iPod/i)) {
			return 'ipod';
		} else if(useragent.match(/iPad/i)) {
			return 'ipad';
		} else if(useragent.match(/Windows Phone/i)) {
			return 'windows phone';
		} else {
			return 'no-device';
		}
	}

	var paragraph = document.createElement("p");
	var txtnode = document.createTextNode(useragent);
	paragraph.appendChild(txtnode);

	var element = document.getElementById("useragent");
	element.appendChild(paragraph);

	function setRightInputKeyboard() {
		var input = document.getElementsByTagName('input');
		if(deviceOS() === 'iphone' || deviceOS() === 'ipod' || deviceOS() === 'ipad') {
			console.log('deviceOS: ', deviceOS());
			for(var i in input){
			    if(input[i].type === 'number'){
		        	input[i].type = 'tel';
		        	console.log(input[i], 'Changed to tel');
			    }
			}
		} else if(deviceOS() === 'android') {
			if(useragent.match(/Android 4.1.2/i)) {
				for(var i in input){
				    if(input[i].type === 'number'){
			        	input[i].type = 'tel';
			        	console.log(input[i], 'Changed to number');
				    }
				}
			}
		}
	}

	setRightInputKeyboard();


})();
