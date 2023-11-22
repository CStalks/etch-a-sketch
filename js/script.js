const grid = document.querySelector('.grid');
const button = document.querySelector('.button-size');

//creates default grid to display on the screen
function makeDefaultCells(){
  for(let i = 1; i <= 16; i++){
    for(let j = 1; j <= 16; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);  
    }
  }

  //add background color effect to the cells 
  let cells = document.querySelectorAll('.cell');
  
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'mediumpurple';
    });
  });
}


function makeNewCells(gridSize){
  //remove old cells to replace new cells
  while(grid.firstChild){
    grid.firstChild.remove();
  }

  for(let i = 1; i <= gridSize; i++){
    for(let j = 1; j <= gridSize; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = (100/ gridSize) + "%";
      grid.appendChild(cell);
    }
  }

  //add background color effect to the cells 
  //change these two in seperate function with the one in the other function
  let cells = document.querySelectorAll('.cell');
  
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'mediumpurple';
    });
  });
}

function etchASketch(){
  makeDefaultCells();

  button.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Enter choice of grid", 16));
    makeNewCells(gridSize);
  });
}

etchASketch();
  


