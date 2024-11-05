const DEFAULT_GRID_SIZE = 16;

function createGrid(size) {

    const gridDiv = document.querySelector(".grid");

    gridDiv.innerHTML = "";

    const boxsize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.flex = `0 0 ${boxsize}px`
        gridSquare.style.height = `${boxsize}px`
        gridDiv.appendChild(gridSquare);    
    }
}

createGrid(DEFAULT_GRID_SIZE);
selectSquares();


const newGridButton = document.querySelector("#new-grid");

newGridButton.addEventListener("click", () => {
    createGrid(DEFAULT_GRID_SIZE);
    selectSquares()
})

const resetGridButton = document.querySelector("#reset-grid");

resetGridButton.addEventListener("click", () => {
    createGrid(16);
    selectSquares()
})

function selectSquares() {
    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach (square => {
    square.addEventListener("mouseover", () => square.style.backgroundColor = "red")
})
}



