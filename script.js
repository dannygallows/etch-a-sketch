const DEFAULT_GRID_SIZE = 16;
const GRID_PIXEL_SIZE = 500;

function createGrid(size) {

    const gridDiv = document.querySelector(".grid");

    gridDiv.innerHTML = "";

    const boxsize = GRID_PIXEL_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.flex = `0 0 ${boxsize}px`;
        gridSquare.style.height = `${boxsize}px`;
        gridDiv.appendChild(gridSquare);    
    }
}

function selectSquares() {
    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach (square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red"
    });
})
}

createGrid(DEFAULT_GRID_SIZE);
selectSquares();

const newGridButton = document.querySelector("#new-grid");

newGridButton.addEventListener("click", () => {
    const userInput = parseInt(prompt("Enter grid size between 1-100"));
    if (!Number.isInteger(userInput) || userInput < 1 || userInput > 100) {
        alert("Incorrect value. For the sake of this site's health and my sanity, please reconsider your choice to an integer between 1-100.");
        return;
    }
    createGrid(userInput);
    selectSquares();
})

const resetGridButton = document.querySelector("#reset-grid");

resetGridButton.addEventListener("click", () => {
    createGrid(16);
    selectSquares();
});





