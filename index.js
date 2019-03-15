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