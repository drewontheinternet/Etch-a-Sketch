
/* The User Input */

/* disabling because I want the grid to default load 6x6

const userInput = prompt("Please enter a number 1-100");
const size = Number(userInput);

*/

/* the global settings */

let currentColor = "black";
let mouseDown = false;
document.addEventListener("mousedown", () => {
    mouseDown = true;
})

document.addEventListener("mouseup", () => {
    mouseDown = false;
})


/* clearing the grid, and event listeners so we know when
the mouse is clicked down */


const etch = document.querySelector(".etch");
function makeBoxes(size) {
    etch.innerHTML = ""
    etch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    etch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    /* the loop creating the divs inside the grid */

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.outline = "0.25px solid black";


        box.addEventListener("mouseenter", () => {
            if (mouseDown) {
                box.style.backgroundColor = currentColor;

            }
        });
        etch.append(box);
    }
};


/* calling the function on page load */

makeBoxes(7);

/* attempting to add some new color options with buttons! */

const redBtn = document.querySelector(".redBtn");
redBtn.addEventListener("click", function () {
    currentColor = "rgb(181, 59, 45)"

})

const blackBtn = document.querySelector(".blackBtn");
blackBtn.addEventListener("click", function () {
    currentColor = "rgb(152, 152, 152)"
})

const yellowBtn = document.querySelector(".yellowBtn");
yellowBtn.addEventListener("click", function () {
    currentColor = "rgb(196, 174, 78)"
})

const blueBtn = document.querySelector(".blueBtn");
blueBtn.addEventListener("click", function () {
    currentColor = "rgb(91, 111, 120)"
})

const whiteBtn = document.querySelector(".whiteBtn");
whiteBtn.addEventListener("click", function () {
    currentColor = "rgb(227, 225, 211)"
})

const lightBlueBtn = document.querySelector(".lightBlueBtn");
lightBlueBtn.addEventListener("click", function () {
    currentColor = "rgb(138, 199, 237)"
})

/* some tool buttons to resize the grid */

const sixteen = document.querySelector(".sixteen");
sixteen.addEventListener("click", function () {
    makeBoxes(16);
})

const thirtyTwo = document.querySelector(".thirtyTwo");
thirtyTwo.addEventListener("click", function () {
    makeBoxes(32);
})

const fourtyEight = document.querySelector(".fourtyEight");
fourtyEight.addEventListener("click", function () {
    makeBoxes(48);
})

const sixtyFour = document.querySelector(".sixtyFour");
sixtyFour.addEventListener("click", function () {
    makeBoxes(64);
})

const eighty = document.querySelector(".eighty");
eighty.addEventListener("click", function () {
    makeBoxes(80);
})

const custom = document.querySelector(".custom");
custom.addEventListener("click", function () {
    let customChoice = prompt("enter your grid size!")
    let customSize = Number(customChoice)
    makeBoxes(customSize);



})










