// Create a reference to the grid, row, and column containers
const gridContainer = document.getElementById("grid-container")
const rowContainer = document.getElementById("row-container")

for(let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    gridContainer.append(row)
    for(let j = 0; j < 10; j++) {
        const column = document.createElement("div");
        rowContainer.append(row);
    }
}