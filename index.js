// Task 1 - getFirstSelector
let getFirstSelector = (selector) => {
	return document.querySelector(selector);
}

// Task 2 - nestedTarget
let nestedTarget = () => {
	let parent = document.querySelector('#nested');
	let child = parent.querySelector('.target');
	return child;
}

// Task 3 - deepestChild
let deepestChild = () => {
	let grand = document.querySelectorAll('#grand-node');
	let divs = grand[0].querySelectorAll('div');
	let divs_len = divs.length;
	let find_last = divs_len - 1;
	return divs[find_last];
}
