function createGrid(size) {

    const gridDiv = document.querySelector(".grid");

    const boxsize = 500 / size;


    // grid solution by https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
    // gridDiv.style.setProperty('--grid-rows', size);
    // gridDiv.style.setProperty('--grid-cols', size);  


    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.flex = `0 0 ${boxsize}px`
        gridSquare.style.height = `${boxsize}px`
        gridDiv.appendChild(gridSquare);    
    }
}

createGrid(16);