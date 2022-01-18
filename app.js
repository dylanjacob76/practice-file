const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.querySelectorAll("span");
const openModalTriggerEl = document.querySelector(".trigger");
const closeModalTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");

function toggleNav() {
    navTriggerEl.addEventListener("click", function () {
        navEl.classList.toggle("open");
        contentEl.classList.toggle("shift");
        animateHamburgers();
    })
}

function animateHamburgers() {
    for (let item of hamburgerBarsEl) {
        item.classList.toggle("change");
    }
}

toggleNav();

function main() {
    openModalTriggerEl.addEventListener("click", function() {
        modalEl.classList.add("open__modal");
    });
    closeModalTriggerEl.addEventListener("click", function() {
        modalEl.classList.remove("open__modal");
    });
    window.addEventListener("click", function(e) {
        if (e.target === modalEl) {
            modalEl.classList.remove("open");
        }
    })

}

main();