// a callback function is a function that is passed into another function as an argument...
// this "passed-in " function is invoked in the body of the other function

const squareZap = (arr) => {
    let result = [];
    for(let item of arr) {
        result.push(Math.pow(item, 2));
    }
    return result;
}
console.log(squareZap([1, 2, 3]))

const doubleZap = (arr) => {
    let result = [];
    for (let item of arr) {
        result.push(item * 2)
    }
    return result;
}
console.log(doubleZap([1, 2, 3]))

const squareRootZap = (arr) => {
    let result = [];
    for (let item of arr) {
        result.push(Math.sqrt(item));
    }
    return result;
}
console.log(squareRootZap([1, 2, 3]))

const upperCaseZap = (arr) => {
    let result = [];
    for (let item of arr) {
        result.push(item.toUpperCase());
    }
    return result;
}
console.log(upperCaseZap(["what up"]))



// using callback

const masterZap = (arr, callback) => {
    let result = [];
    for(let item of arr) {
        result.push(callback(item));
    }
    return result;
}

const uppercase = (item) => item.toUpperCase();

const double = (item) => item * 2;

const square = (item) => Math.pow(item, 2);

console.log(masterZap([1, 2, 3], double));