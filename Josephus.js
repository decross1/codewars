// Problem Here: https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(items, k) {
	var store = [];
	var counter = 0;
	var index = 0;
	while (items.length > 0) {
		index = index % items.length;
		if (++counter === k) {
			store.push(items.splice(index, 1)[0]);
			counter = 0;
			index--;
		}
		index++;
	}
	return store;
}