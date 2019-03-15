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
	// the deepest child is the last object 
	let find_last = divs_len - 1;
	return divs[find_last];
}

// Task 4 - increaseRankBy
let increaseRankBy = (n) => {
	let rankedLists = document.querySelectorAll('.ranked-list');

	let firstList = rankedLists[0];
	let secondList = rankedLists[1];

	let firstChildren = firstList.children;
	let secondChildren = secondList.children;
	// see -> https://stackoverflow.com/a/222847
	let listArray1 = [].slice.call(firstChildren);
	let listArray2 = [].slice.call(secondChildren);
	// to enable usage of map from converted HTMLCollection
	listArray1.map(function(x, y) {
		let newVal = parseInt(x.innerHTML) + n;
		firstChildren[y].innerHTML = newVal;
	});

	listArray2.map(function(x,y) {
		let newVal = parseInt(x.innerHTML) + n;	
		secondChildren[y].innerHTML = newVal;
	});
}