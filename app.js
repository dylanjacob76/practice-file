function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `My name is ${this.name}. I'm ${this.age} years old!`;
}


// Programmer Constructor
function Programmer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

// how to override methods
Programmer.prototype.greet = function() {
    return `${Person.prototype.greet.call(this)} I code in ${this.language}.`
}

const a = new Programmer("Naruto", 32, "Java");
console.log(a.greet())






// Fighter Constructor
function Fighter(name, age, art) {
    Person.call(this, name, age);
    this.art = art;
}

// always make sure to have these two lines of code when inheriting from a parent constructor
Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;

const johnny = new Fighter("Johnny", 56, "Eagle Fang")
console.log(johnny.greet());
console.log(johnny.constructor);

Fighter.prototype.greet = function() {
    return `${Person.prototype.greet.call(this)}. And I fight in ${this.art}!!!`
}

console.log(johnny.greet())