document.getElementById('click_id').addEventListener('click', click_in);
	function click_in() {
		var click_on = document.getElementById('show-first');
		if(click_on.classList.contains('list_items_first')) {
			click_on.style.display = 'block';
			click_on.classList.remove('list_items_first');
			click_on.classList.remove('new_lists');
			click_on.classList.add('add_list_items_first');
		}

		else {
			click_on.classList.add('list_items_first');
			click_on.classList.add('new_lists');
		}
	}

	document.getElementById('click_second_id').addEventListener('click', click_in_second);
	function click_in_second() {
		var click_on = document.getElementById('show-second');
		if(click_on.classList.contains('list_items_first')) {
			click_on.style.display = 'block';
			click_on.classList.remove('list_items_first');
			click_on.classList.remove('new_lists');
			click_on.classList.add('add_list_items_first');
			
		}
		else {
			click_on.classList.add('list_items_first');
			click_on.classList.add('new_lists');
		}
	}

	document.getElementById('click_third_id').addEventListener('click', click_in_third);
	function click_in_third() {
		var click_on_third = document.getElementById('show-third');
		if(click_on_third.classList.contains('list_items_first')) {
			click_on_third.style.display = 'block';
			click_on_third.classList.remove('list_items_first');
			click_on_third.classList.remove('new_lists');
			click_on_third.classList.add('add_list_items_first');
		}
		else {
			click_on_third.classList.add('list_items_first');
			click_on_third.classList.add('new_lists');
		}
	}

	
document.getElementById('click_id').addEventListener('click', click_down);
	function click_down(){
		var first_rotate = document.getElementById('first_down');
		if(first_rotate.classList.contains('first_down')) {
			first_rotate.classList.add('first_down_effect');
			first_rotate.classList.remove('first_down_effect_off');
			first_rotate.classList.remove('first_down')
		}
		else {
			first_rotate.classList.add('first_down')
			first_rotate.classList.remove('first_down_effect');
			first_rotate.classList.add('first_down_effect_off')

		}
	}


	document.getElementById('click_second_id').addEventListener('click', click_down_second);
	function click_down_second(){
		var first_rotate = document.getElementById('second_down');
		if(first_rotate.classList.contains('first_down')) {
			first_rotate.classList.add('first_down_effect');
			first_rotate.classList.remove('first_down_effect_off');
			first_rotate.classList.remove('first_down')
		}
		else {
			first_rotate.classList.add('first_down')
			first_rotate.classList.remove('first_down_effect');
			first_rotate.classList.add('first_down_effect_off')

		}
	}

	document.getElementById('click_third_id').addEventListener('click', click_down_third);
	function click_down_third(){
		var first_rotate = document.getElementById('third_down');
		if(first_rotate.classList.contains('first_down')) {
			first_rotate.classList.add('first_down_effect');
			first_rotate.classList.remove('first_down_effect_off');
			first_rotate.classList.remove('first_down')
		}
		else {
			first_rotate.classList.add('first_down')
			first_rotate.classList.remove('first_down_effect');
			first_rotate.classList.add('first_down_effect_off')

		}
	}

	// window.addEventListener('mouseup', function(event){
	// 	var a = document.getElementById('show-first');
	// 	if(event.target !=a) {
	// 		a.style.display = "none";
	// 	}
	// 	else {
	// 		a.style.display = "block";	
	// 	}
	// });

	// window.addEventListener('mouseup', function(event){
	// 	var a = document.getElementById('show-second');
	// 	if(event.target !=a) {
	// 		a.style.display = "none";
	// 	}
	// });

	// window.addEventListener('mouseup', function(event){
	// 	var a = document.getElementById('show-third');
	// 	if(event.target !=a) {
	// 		a.style.display = "none";
	// 	}
	// });