// Grid related references
const gridContainer = document.getElementById("grid-container");
const gridInput = document.getElementById("gridInput");
const gridSizeForm = document.getElementById("gridSizeForm");

// Top button references
const resetCanvasBtn = document.getElementById("resetCanvasBtn");
const toggleGridBtn = document.getElementById("toggleGridBtn");

// Bottom button references
const clickMode = document.getElementById("clickMode");
const rainbowMode = document.getElementById("rainbowMode");

// Default values
let gridSize = 10;
let showGrid = true;

// ---------------------------------------------------------------------------------------
// Create Grid Function

function createGrid(gridSize) {
    // Clear the inner HTML and remove all divs inside the container
    gridContainer.innerHTML = ""

    // Create the rowContainers
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row-container");
        gridContainer.append(row);

        // Fill the rowContainers with squares
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement("div");
            column.classList.add("square");

            if (showGrid === true) {
                column.classList.add("squareBorder");
            }

            column.addEventListener("mouseenter", changePixel);
            row.append(column);
        }
    }
}

// ---------------------------------------------------------------------------------------
// Change Pixel Function - used in `createGrid`

function changePixel(event) {
    event.target.style.backgroundColor = "black";
}

// ---------------------------------------------------------------------------------------
// Reset Canvas Function

function resetCanvas(rowCount, columnCount) {
    gridContainer.innerHTML = "";
    createGrid(gridSize, gridSize);
}

// ---------------------------------------------------------------------------------------
// Toggle Grid Function

function toggleGrid(){
    // Create a reference to the squares present
    const square = document.querySelectorAll(".square");

    // Flip the state of showGrid
    showGrid = !showGrid;

    square.forEach(square => {
      square.classList.toggle("squareBorder");
    })
}

// ---------------------------------------------------------------------------------------
// Submit Grid Size Function

function submitGridSize(event) {
    // Prevent the page from refreshing and get the grid size input
    event.preventDefault();
    gridSize = Number(gridInput.value);

    // Check grid size boundaries
    if(gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize, gridSize);
        gridSizeForm.reset();
    }
    else {
        alert("Grid size must be between one and one-hundred (inclusive) ");
    }
}

// ---------------------------------------------------------------------------------------
// Main Program Loop



createGrid(gridSize, gridSize);
gridSizeForm.addEventListener("submit", submitGridSize);
resetCanvasBtn.addEventListener("click", resetCanvas);
toggleGridBtn.addEventListener("click", toggleGrid);
clickMode.addEventListener("change", toggleClickMode);