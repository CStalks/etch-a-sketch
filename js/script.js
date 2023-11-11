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

function addHoverEffect(){
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'red';
    });
  });
}

function main(){
  makeGridCells();
  addHoverEffect();
}

main();





