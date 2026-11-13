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

            updateDrawingMode(column);
            row.append(column);
        }
    }
}

// ---------------------------------------------------------------------------------------
// Change Pixel Function - used in `createGrid`

function changePixel(event) {
    if(rainbowMode.checked) {
        event.target.style.backgroundColor = generateRandomColor();
    }
    else {
        event.target.style.backgroundColor = "black";
    }
}

// ---------------------------------------------------------------------------------------
// Update Drawing Mode - used in `createGrid` and `toggleClickMode`

function updateDrawingMode(square) {
    if (clickMode.checked) {
        square.removeEventListener("mouseenter", changePixel);
        square.addEventListener("click", changePixel);
    } else {
        square.removeEventListener("click", changePixel);
        square.addEventListener("mouseenter", changePixel);
    }
}

// ---------------------------------------------------------------------------------------
// TOP BUTTON CONTAINER: Submit Grid Size Function

function submitGridSize(event) {
    // Prevent the page from refreshing and get the grid size input
    event.preventDefault();
    gridSize = Number(gridInput.value);

    // Check grid size boundaries
    if(gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
        gridSizeForm.reset();
    }
    else {
        alert("Grid size must be between one and one-hundred (inclusive) ");
    }
}

// ---------------------------------------------------------------------------------------
// TOP BUTTON CONTAINER: Toggle Grid Function

function toggleGrid(){
    // Create a reference to the squares present
    const existingSquares = document.querySelectorAll(".square");

    // Flip the state of showGrid
    showGrid = !showGrid;

    existingSquares.forEach(square => {
        square.classList.toggle("squareBorder");
    })
}

// ---------------------------------------------------------------------------------------
// BOTTOM BUTTON CONTAINER: Toggle Click Mode

function toggleClickMode() {
    const existingSquares = document.querySelectorAll(".square");
    existingSquares.forEach(square => updateDrawingMode(square));
}

// ---------------------------------------------------------------------------------------
// Assists `changePixel` to assist the `Rainbow Mode` checkbox

function generateRandomColor() {
    // Generate random colors using `Math` lib
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}

// ---------------------------------------------------------------------------------------
// Main Program Loop

createGrid(gridSize);
gridSizeForm.addEventListener("submit", submitGridSize);
resetCanvasBtn.addEventListener("click", () => createGrid(gridSize)); // Arrow func to reset the grid
toggleGridBtn.addEventListener("click", toggleGrid);
clickMode.addEventListener("change", toggleClickMode); // Change is the checkboxes `update` variable
// rainbowMode.addEventListener("change", changePixel); REDUNDANT EVENT LISTENER: accounted for within other functions