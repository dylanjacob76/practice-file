function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `My name is ${this.name}. I'm ${this.age} years old!`;
}


// Programmer Constructor
function Programmer(name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
}

// Fighter Constructor
function Fighter(name, age, art) {
    this.name = name;
    this.age = age;
    this.art = art;
}