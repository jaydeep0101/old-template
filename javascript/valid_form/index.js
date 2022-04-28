function printError(Id,Msg){
	document.getElementById(Id).innerHTML = Msg;
}

function validationForm(){

	var name = document.Form.name.value;
	var email = document.Form.email.value;
	var mobile = document.Form.mobile.value;
	var country = document.Form.country.value;
	var gender = document.Form.gender.value;
	var textarea_text = document.Form.textarea_name.value;
	console.log(textarea_text)

	var nameErr = emailErr = mobileErr = countryErr = genderErr = textareaErr = true;   

	if(name==""){
		printError('nameErr' , 'Please enter your name');	
		var elem = document.getElementById('name');
		return false
	}
	else {
		var regex = /^[a-zA-Z\s]+$/;
		if(regex.test(name) == false){
			printError('nameErr', 'Please enter a valid name')

		}
		else {
			printError('nameErr', '');
			nameErr = false;
			var elem = document.getElementById('name');
		}
		// return true
	}


	if(email==""){
		printError('emailErr' , 'Please enter your email');
		var elem = document.getElementById('email');
		return false
	}
	else {
		var regex = /^\S+@\S+\.\S+$/;
		if(regex.test(email) == false){
			printError('emailErr', 'Please enter a valid email')

		}
		else {
			printError('emailErr', '');
			emailErr = false;
			var elem = document.getElementById('email');
		}
	}

	if(mobile==""){
		printError('mobileErr' , 'Please enter your mobile');
		var elem = document.getElementById('mobile');
		return false;
	}
	else {
		var regex = /^[1-9]\d{9}$/;
		if(regex.test(mobile) == false){
			printError('mobileErr', 'Please enter a valid mobile')

		}
		else {
			printError('mobileErr', '');
			mobileErr = false;
			var elem = document.getElementById('mobile');
		}
	}



	if(country=="submit"){
		printError('countryErr' , 'Please enter your country');
		var elem = document.getElementById('country');
		elem.classList.add('input-4');
		elem.classList.remove('input-3');
		return false;
	}

	else{
		printError('countryErr' , '');
		var elem = document.getElementById('country');
		elem.classList.add('input-3');
		elem.classList.remove('input-4');
		// return true;
	}




	if(gender==""){
		printError('genderErr' , 'Please enter your gender');
		var elem = document.getElementById('gender');
		elem.classList.add('input-4');
		elem.classList.remove('input-3');
		return false;
	}

	else{
		printError('genderErr' , '');
		var elem = document.getElementById('gender');
		elem.classList.add('input-3');
		elem.classList.remove('input-4');
		
		// return true;
	}

	var check = document.Form.container;
	for(var i=0; i<check.length; i++){
		if (check[i].checked==true) {
			var elem = document.getElementById('hobby');
			elem.classList.add('input-3');
			elem.classList.remove('input-4');
			if (document.getElementById('other').checked==true) {
					var elem = document.getElementById('text_area');
				elem.classList.add('input-3');
				elem.classList.remove('input-4');
				return true		
			}
			else{
				printError('textareaErr' , 'write something');	
				var elem = document.getElementById('text_area');
				elem.classList.add('input-4');
				elem.classList.remove('input-3');
				return false
			}

			return true;
		}
		else{
			printError('hobbyErr', 'select your hobby');
			var elem = document.getElementById('hobby');
			elem.classList.add('input-4');
			elem.classList.remove('input-3');
			return false;
		}
	}
	// if(textarea_text == ''){
	// 	// printError('textareaErr' , 'write something');	
	// 	console.log("Hello")
	// 	var elem = document.getElementById('textareaErr').innerHTML = 'error';
	// 	// var elem = document.getElementById('text_area');
	// 	// 	elem.classList.add('input-4');
	// 	// 	elem.classList.remove('input-3');
	// 	// 	console.log('hh')
	// 	return false;
	// }

	// else {
	// 	var elem = document.getElementById('text_area');
	// 		elem.classList.add('input-3');
	// 		elem.classList.remove('input-4');
	// 	return true
	// }
}

document.getElementById('other').addEventListener('click', myfun);
function myfun(){
	var element = document.getElementById('text_area');
	if (element.classList.contains('text_class')) {
		element.classList.add('new_text_area');
		element.classList.remove('text_class');
	}	
	else {
		element.classList.add('text_class');
		element.classList.remove('new_text_area');
	}
}





	
