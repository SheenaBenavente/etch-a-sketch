const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

// Create the grid cells
for (let i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  container.appendChild(cell);
}

// Add event listeners to paint cells black when hovered over
const cells = document.querySelectorAll('.grid-cell');
cells.forEach(cell => {
  cell.addEventListener('mouseenter', () => {
    cell.classList.add('painted');
  });
});

// Reset the grid when the reset button is clicked
resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.classList.remove('painted');
  });
});