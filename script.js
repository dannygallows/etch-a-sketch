function createGrid(size) {

    const gridDiv = document.querySelector(".grid");

    const boxsize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.flex = `0 0 ${boxsize}px`
        gridSquare.style.height = `${boxsize}px`
        gridDiv.appendChild(gridSquare);    
    }
}

createGrid(16);

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach (square => {
    square.addEventListener("mouseover", () => square.style.backgroundColor = "red")
})






