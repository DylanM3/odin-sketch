# Sketch
A web-based version of an etch-a-sketch coded with HTML, CSS, and JavaScript.\
Developed as apart of the curriculum for [The Odin Project](https://theodinproject.com)  

## Features:
- Dynamic Grid Scaling: A user can choose a `gridSize` (between one and one-hundred inclusive) to be created with `createGrid()`.
- Toggleable Grid Lines: Grid lines can be toggled using the built in `toggleGrid()` function.
- Clear Canvas: Similar to the `toggleGrid()` function, a similar `clearCanvas` button is available to reset the grid to a plain state.
- Click Mode: Disable "hover" effect from `mouseenter` and replace it with `click` to provide an old-school Microsoft Paint feeling.
- Rainbow Mode: Randomise the `rgb()` value of all squares inside of `changePixel()` to achieve a random colour effect.

## Known Bugs:
- FIXED: 15/11/2026\
It is possible to obtain a grid size outside of the specified boundaries by accepting the `alert()` with a number inside the `Grid Size` box outside of the defined boundaries and clicking `Reset Canvas` to bypass the validation. This is known to crash the browser when paired with extreme numbers and remove the grid with negative numbers.

- FIXED: 17/11/2026\
The grid lines appear disabled by default when clicking `Reset Canvas` with a high number in the `Grid Size` input box after accepting the `alert()`. It is suspected this error is due to the `15/11/2026 Patch` however it does not affect any functionalities of the webpage

#

Hosted at [dylanmoore.uk](https://sketch.dylanmoore.uk)  
