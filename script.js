function createGrid(size) {

    const gridDiv = document.querySelector(".grid");

    // grid solution by https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
    gridDiv.style.setProperty('--grid-rows', size);
    gridDiv.style.setProperty('--grid-cols', size);  


    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridDiv.appendChild(gridSquare);    
    }
}

createGrid(16);