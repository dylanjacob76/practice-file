// let a = "alpha";
// let b = "beta";
// let c = "charlie"

// let human = {
//     a, 
//     b,
//     c,
//     d: "hard coded value",
//     talk () {
//         console.log("i'm talking")
//     },
//     walk () {
//         console.log("i'm walking now...")
//     }
// }

// console.log(human);
// human.walk();


// function displayInfo() {
//         const nameEl = document.querySelector("#name");
//         const emailEl = document.querySelector("#email");
//         const buttonEl = document.querySelector("button");

//         buttonEl.addEventListener("click", function() {
//             let name = nameEl.value;
//             let email = emailEl.value;
//             let result = {
//                 name,
//                 email
//             }
//             console.log(result)
//         })
// }

// displayInfo();

function display(name, age, profession) {
    console.log(`My name is ${name}. I am ${age} years old. I work as a ${profession}.`)
}

function createLongHTML() {
    // let html = "<div>";
    // html += "<p> hi this is paragraph </p>"
    // html += "<h1> this is heading </h1>"
    // html += "<div>"

    let html = `
        <div>
            <p> hi this is a paragraph </p>
            <h1> this is some heading </h1>
        </div>
    `
    document.querySelector("body").innerHTML = html;

}

createLongHTML();
