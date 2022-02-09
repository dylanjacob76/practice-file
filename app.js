// any function that's using variables outside of it's own scope is a closure

let a = 6; //global scope

let product = function() {
    let b = 7;
    return a * b; //this is a closure because we're using a which is a variable declared in the global scope
}

console.log(product());

// ----------------------------------------------------------------

// a closure is an inner function that uses it's outer function's variables

function outer() {
    let varA = "HI"; //declared outside the inner function/block
    function inner() {
        return varA + " Bye"; //varA is declared outside of this scope therefore this is a closure
    }
    return inner;
}


let myFunc = outer();

console.log(myFunc());

// ----------------------------------------------------------------

function greeting(type) {
    return function(name) {
        console.log(`${type}, ${name}!!!`);
    }
}

const sayHello = greeting("Hello")
const sayHi = greeting("Hi");
const sayBonjour = greeting("Bonjour");

sayHello("Mike");
sayHi("John");
sayBonjour("Thomas");

// ----------------------------------------------------------------

function html(tag) {
    return function(innerValue) {
        return `<${tag}>${innerValue}</${tag}>`
    }
}

const h1 = html("h1");
const p = html("p");
const button = html("button");

console.log(h1("this is a heading 1"))
console.log(p("this is a paragraph"))
console.log(button("button"))