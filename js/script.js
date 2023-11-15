function makeGridCells(){
  const grid = document.querySelector('.grid');

  for(let i = 1; i <= 16; i++){
    for(let j = 1; j <= 16; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);  
    }
  }
}

/*function makeNewGridCells(gridSize){
  const grid = document.querySelector('.grid');
  grid.style["grid-template-columns"] = "repeat(gridSize, 1fr)";
  grid.style["grid-template-rows"] = "repeat(gridSize, 1fr)";
 

  for(let i = 1; i <= gridSize; i++){
    for(let j = 1; j <= gridSize; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);  
    }
  }
}*/

function addHoverEffect(){
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'grey';
    });
  });
}

function changeGridSize(){
  const button = document.querySelector('.button-size');
  
  button.addEventListener('click', () => {
    const gridSize = prompt('Enter your prefered grid size(up to', 16);
    makeNewGridCells(gridSize);

  });
}


function main(){
  makeGridCells();
  addHoverEffect();
  //changeGridSize();
}

main();





