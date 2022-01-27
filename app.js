// this is a constrcutor function
// you cannot have a return inside of a constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Car.prototype.stats = function() {
//     return `${this.brand} ${this.model}`;
// }

Car.prototype.drive = function() {
    return `I'm driving a ${this.brand} ${this.model} vrooooom`;
}

let car1 = new Car("lambo", "aventador");
let car2 = new Car ("toyota", "camry");
let car3 = new Car ("dodge", "charger");

console.log(car1.drive());
console.log(car2.drive());
console.log(car3.drive());