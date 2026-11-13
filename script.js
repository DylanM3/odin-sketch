// Create a reference to all HTML elements required
const gridContainer = document.getElementById("grid-container");
const gridInput = document.getElementById("gridInput");
const gridSizeForm = document.getElementById("gridSizeForm");

const resetCanvasBtn = document.getElementById("resetCanvasBtn");
const toggleGridBtn = document.getElementById("toggleGridBtn");

const clickMode = document.getElementById("clickMode");
const rainbowMode = document.getElementById("rainbowMode");

let gridSize = 10; // Set a default grid size
let showGrid = true; // Set showGrid to true by default

function createGrid(rowCount, columnCount) {
    // Clear the inner HTML and remove all divs inside the container
    gridContainer.innerHTML = ""

    // Create the rowContainers
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row-container");
        gridContainer.append(row);

        // Fill the rowContainers with squares
        for (let j = 0; j < columnCount; j++) {
            const column = document.createElement("div");
            column.classList.add("square");

            if (showGrid === true) {
                column.classList.add("squareBorder");
            }


            row.append(column);
        }
    }
}

function resetCanvas(rowCount, columnCount) {
    gridContainer.innerHTML = "";
    createGrid(gridSize, gridSize);
}

function changePixel(event) {
    event.target.style.backgroundColor = "black";
}

function toggleGrid(){
    // Create a reference to the squares present
    const square = document.querySelectorAll(".square");

    // Flip the state of showGrid
    showGrid = !showGrid;

    square.forEach(square => {
      square.classList.toggle("squareBorder");
    })
}

function toggleClickMode(event) {
    // `.checked` is the same as true for checkboxes
    if(clickMode.checked) {

    }
}

function submitGridSize(event) {
    // Prevent the page from refreshing and get the grid size input
    event.preventDefault();
    gridSize = Number(gridInput.value);

    if(gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize, gridSize);
        gridSizeForm.reset();
    }
    else {
        alert("Grid size must be between one and one-hundred (inclusive) ");
    }
}

createGrid(gridSize, gridSize);
gridSizeForm.addEventListener("submit", submitGridSize);
resetCanvasBtn.addEventListener("click", resetCanvas);
toggleGridBtn.addEventListener("click", toggleGrid);
clickMode.addEventListener("change", toggleClickMode);