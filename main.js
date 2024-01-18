// let gridSquare = createElement('div');
// let gridSquares = gridSquare * 256;
// // Adds a class of 'grid-squares' to the created element.
// gridSquare.classList.add('grid-squares')
// container.appendChild(gridSquares);

let container = document.getElementById('container');

for(let i = 0; i < 256; i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-squares');
    gridSquare.setAttribute('id', 'grid-squares');
    container.appendChild(gridSquare);
};