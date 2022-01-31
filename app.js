function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `My name is ${this.name}. I'm ${this.age} years old!`;
}


// Programmer Constructor
function Programmer(name, age, language) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age);
    this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);

const a = new Programmer("John", 22, "Java");
const b = new Programmer("Naruto", 32, "Python")
console.log(b.greet())

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