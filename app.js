// any function that's using variables outside of it's own scope is a closure

// let a = 6; //global scope

// let product = function() {
//     let b = 7;
//     return a * b; //this is a closure because we're using a which is a variable declared in the global scope
// }

// console.log(product());

// ----------------------------------------------------------------

// a closure is an inner function that uses it's outer function's variables

// function outer() {
//     let varA = "HI"; // outer functions variable
//     function inner() { // inner function
//         return varA + " Bye"; 
//     }
//     return inner;
// }

// let myFunc = outer();

// console.log(myFunc());

// ---------------------------------------------------------------- 

// function greeting(type) {
//     return function(name) {
//         console.log(`${type}, ${name}!!!`)
//     }
// }

// const sayHello = greeting("hello");
// const sayHi = greeting("hi");
// const sayWhatUp = greeting("what's up");

// sayHello("Ichigo");
// sayHi("Luffy");
// sayWhatUp("Naruto");

// ---------------------------------------------------------------- 

// function html(tag) {
//     return function(innerValue) {
//         return `<${tag}>${innerValue}</${tag}>`
//     }
// }

// const h1Tag = html("h1");
// const buttonTag = html("button");

// console.log(h1Tag("This is a header 1"))
// console.log(h1Tag("This is a header 2"))
// console.log(h1Tag("This is a header 3"))
// console.log(buttonTag("on button"))
// console.log(buttonTag("off button"))

// ---------------------------------------------------------------- 

function nameModule() {
    let name = "default"; // private

    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    }
}

// closures store references to the outer function's variables

const myName = nameModule(); // storing the reference to the name variable
console.log(myName.getName());
myName.setName("Naruto");
console.log(myName.getName());
