/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
(function () {

	'use strict';

	function deviceOS() {
		var useragent = navigator.userAgent;
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

	setRightInputKeyboard();


})();
