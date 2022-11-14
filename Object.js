const person = {
	name: 'shamoon',
	age: 24,
	address: {
		city: 'Lahore',
	},
};

// const person2 = Object.assign({}, person);

// person.address.city = 'Karachi';
// person.name = 'Shahzaib';

// console.log(person2);

const person2 = { ...person, address: { ...person.address } };

person.address.city = 'Karachi';

person.name = 'Shahzaib';
console.log(person);
console.log(person2);
