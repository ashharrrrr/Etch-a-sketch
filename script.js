let body = document.querySelector('body');

let outerContainer = document.createElement('div');
let innerContainer = document.createElement('div');
innerContainer.classList.add('board');

outerContainer.appendChild(innerContainer);
body.appendChild(outerContainer);

let box;
let board;

for(let i = 0; i < 256; i++){
  box = document.createElement('div');
  box.setAttribute('class', 'box');
  innerContainer.appendChild(box);
}


board = document.querySelectorAll('.box');
board.forEach(block => {
  block.style.minWidth = '60px';
  block.style.maxHeight = '60px';

  console.log("EEEEEEE")
  })
console.log(board);

board.forEach(block => block.addEventListener('mouseover', (e) => {
  block.classList.add('hovered');
  console.log(e.target);
}))


