(function () {

	'use strict';

	var useragent = navigator.userAgent;

	function deviceOS() {
		if(useragent.match(/Android/i)) {
			return 'android';
		} else if(useragent.match(/webOS/i)) {
			return 'webos';
		} else if(useragent.match(/iPhone/i)) {
			return 'iphone';
		} else if(useragent.match(/iPod/i)) {
			return 'ipod';
		} else if(useragent.match(/iPad/i)) {
			return 'ipad';
		} else if(useragent.match(/Windows Phone/i)) {
			return 'windows phone';
		} else if(useragent.match(/SymbianOS/i)) {
			return 'symbian';
		} else if(useragent.match(/RIM/i) || useragent.match(/BB/i)) {
			return 'blackberry';
		} else {
			return 'no-device';
		}
	}

	var androidTypes = {
		number : [
			"2.3", "2.3", "2.3"
		],
		tel : [
			"2.3", "2.3", "2.3"
		]
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
		}
	}


	console.log(androidTypes);

	setRightInputKeyboard();


})();
