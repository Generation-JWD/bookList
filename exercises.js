// Objects 

// 1. Create an object literal ‘person’ that contains the keys firstname, lastname, place of birth and country - give them some related values
const person ={
	firstname: "Antonio",
	lastname: "Sebastiano",
	"place of birth": "Naples",
	country: "Italy"
}
//  a) Console.log the object ‘person’
//console.log(person);
//  b) Console.log the country property of the object ‘person’
//.log(person.country);
//  c) Console.log the ‘place of birth’ property of the ‘person’ object
//console.log(person["place of birth"]);



// 2. Create an object in Javascript named ‘school’ that contains the keys ‘name’,’location’,’established year’ - give them some related values
const school = {
	name: "Generation",
	location: "Sydney",
	"established year": 2018,
	displayInfo(){
		console.log(`My school ${this.name} was established in ${this["established year"]} at ${this.location}`);
	}
}
// a) Console.log the school name and location
//console.log(school.name,school.location);
// b) Console.log the established year
//console.log(school["established year"]);
// c) To that ‘school’ object, add a function ‘displayInfo’ to log to the console “My school ____ was established in ___ at ____”
//filling the blanks with the relevant values - Do the above using the ‘this’ keyword
//school.displayInfo();
// d) Call the function ‘displayInfo’
// e) Mutate the school object to add a boolean value called graduated and set it to true or false.
//school.graduated = true;
// f) Console.log the school object
//console.log(school);
// Classes
// Create a class called person
class Person {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}

// 1. create a static method for creating an Anonymous person
//  a) this should give a name variable as John Doe or Jane Doe depending on a gender parameter (hint: use if else or ternary opertors)
//  b) it should then return a new instance of person with this name
	static anonymousPers(gender){
		let name;
		if(gender === "male"){
			name = "John Doe";
		}else if((gender === "female")) {
			name = "Jane Doe";
		}
		return new Person(name);
	}
}

// 2. use the static method and save it to a variable and console log it

const newPerson = Person.anonymousPers("male");
console.log(newPerson); 
