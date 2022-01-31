// es6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `My name is ${this.name}. I'm ${this.age} years old!`
    }
}

const instance = new Person("sam", 24)


// // es5
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     return `My name is ${this.name}. I'm ${this.age} years old!` 
// }

// const instance = new Person("sam", 24)

// instance.name // sam
// instance.age // 24