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


function displayInfo() {
        const nameEl = document.querySelector("#name");
        const emailEl = document.querySelector("#email");
        const buttonEl = document.querySelector("button");

        buttonEl.addEventListener("click", function() {
            let name = nameEl.value;
            let email = emailEl.value;
            let result = {
                name,
                email
            }
            console.log(result)
        })
}

displayInfo();

