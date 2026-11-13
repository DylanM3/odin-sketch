// Create a reference to the grid, row, and column containers
const gridContainer = document.getElementById("grid-container");
const rowContainer = document.getElementById("row-container");
// Create reference to `changeGridBtn`, and store its value
const changeGridBtn = document.getElementById("changeGridBtn");
let usrGridSize = 10;
usrGridSize = changeGridBtn.value;

function createGrid(rowCount, columnCount) {
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row-container");
        gridContainer.append(row)
        for (let j = 0; j < columnCount; j++) {
            const column = document.createElement("div");
            column.classList.add("square")
            column.addEventListener("mouseenter", changePixel)
            row.append(column);
        }
    }
}

function changePixel(event) {
    event.target.style.backgroundColor = "black";
}

createGrid(usrGridSize, usrGridSize);