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
  //adds hover effect after cells been created
  addHoverEffect();
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
      cell.style.width = ((100 / gridSize) + "%");
      grid.appendChild(cell);
    }
  }
   //adds hover effect after cells been created
   addHoverEffect();
}

function addHoverEffect(){
  let cells = document.querySelectorAll('.cell');
  
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      let r = Math.floor((Math.random() * 255) + 1);
      let g = Math.floor((Math.random() * 255) + 1);
      let b = Math.floor((Math.random() * 255) + 1);
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      cell.style.filter += `brightness(${10}})`;
    });
  });
}

function etchASketch(){
  makeDefaultCells();

  button.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Enter choice of grid(1-100)", 16));
    if(gridSize <= 100 && gridSize >= 1){
      makeNewCells(gridSize);
    }
  });
}

etchASketch();
