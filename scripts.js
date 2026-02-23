
/* The User Input */
const userInput = prompt("Please enter a number 1-100");
const size = Number(userInput);

/* the creating of the divs */
const etch = document.querySelector(".etch");


/* clearing the grid, and event listeners so we know when
the mouse is clicked down */

function makeBoxes(size) {
    etch.innerHTML = ""
    etch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    etch.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let mouseDown = false;
    document.addEventListener("mousedown", () => {
        mouseDown = true;
    })

    document.addEventListener("mouseup", () => {
        mouseDown = false;
    })

    /* the loop creating the divs inside the grid */

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");


        box.addEventListener("mouseover", () => {
            if (mouseDown) {
                box.style.backgroundColor = "black";

            }
        });


        etch.append(box);
    }
}


/* calling the function on page load */
makeBoxes(size);









