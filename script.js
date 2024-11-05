function createGrid(gridWidth, gridHeight) {

    const gridDiv = document.querySelector(".grid");

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {

            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridDiv.appendChild(gridSquare);
        }
    }
}

createGrid(16,16);