var countries = ["India", "USA", "Japan", "Russia"]
//console.log(countries);

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//console.log(states[1]);
//console.log(states.length);

states[0] = "Punjab";
//console.log(states);

var user = ["Fawmey", "fawmey@live.com", 3, 34, true];

console.log(user);

//user.pop();
//user.pop();

//console.log(user);

user.unshift("New Value")
//console.log(user);

user.shift(user);
user.shift(user);
//console.log(user);
//console.log(user);

console.log(user.indexOf("Fawmey"));

console.log(Array.from("Fawmey"));