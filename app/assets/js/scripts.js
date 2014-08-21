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

	var useragent = navigator.userAgent;

	function deviceOS() {
		if(useragent.match(/Android/i)) {
			return 'android';
		} else if(useragent.match(/Android 4.4.4/i)) {
			return 'android 4.4.4';
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

	var androidTypes = {
		number : [
			"4.1.2", "4.2.2", "4.4.4", "2.3.3"
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
		} else if(deviceOS() === 'android 4.4.4') {
			for(var i in input){
			    if(input[i].type === 'tel'){
		        	input[i].type = 'number';
		        	console.log(input[i], 'Changed to number');
			    }
			}
		}
	}


	console.log(androidTypes);

	setRightInputKeyboard();


})();
