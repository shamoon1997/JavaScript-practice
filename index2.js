const obj = {};
function calculateCube(number) {
	if (obj[number] != null) {
		console.log('from return statement');
		return obj[number];
	}
	let result = 0;
	for (let i = 0; i < number; i++) {
		result = result + number;
	}
	obj[number] = result;
	return result;
}

console.log(calculateCube(1000000300));

console.log(calculateCube(1000000300));

console.log(calculateCube(1000000300));
