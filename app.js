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

const a = new Person("sam", 24)

// ---------------------------------------

class Programmer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    greet() {
        return `${super.greet()}. I code in ${this.language}. `
    }

    talk() {
        return "I'm just talking"
    }
}

const b = new Programmer("Julie", 22, "c")

console.log(b.greet())

// ---------------------------------------

class Fighter extends Person {
    constructor(name, age, art) {
        super(name, age);
        this.art = art;
    }

    fight() {
        return "I'm fighting!!!"
    }

}

const c = new Fighter("Naruto", 32, "talk no jutsu");
console.log(c.fight())