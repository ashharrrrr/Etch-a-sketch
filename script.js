const grid = document.querySelector(".grid");
const gridButton = document.querySelector(".gridSize");
const randomColor = document.querySelector(".randomColor");
const colorPicker = document.querySelector(".colorPicker");
const cleanButton = document.querySelector(".clean-board");

let lastColor = null;
let wasRandom = false;

function initialRender() {
  for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.append(box);
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.minWidth = "50px";
    box.style.maxHeight = "50px";
  });
}

initialRender();

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) =>
  box.addEventListener("mouseover", () => {
    box.classList.add("hovered");
  })
);

gridButton.addEventListener("click", () => {
  const dimension = prompt("Enter a value between 1 and 100");
  let value = 800 / dimension;
  if (dimension > 0 && dimension < 100) {
    cleanGrid();

    for (i = 0; i < dimension ** 2; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      grid.appendChild(box);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.style.minWidth = `${value.toString()}` + "px";
      box.style.maxHeight = `${value.toString()}` + "px";

      if (lastColor) {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = lastColor;
        });
        wasRandom = false;
        console.log(lastColor);
      } else if (wasRandom) {
          box.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
        lastColor = null;
      } else {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = "black";
        });
      }
      console.log(box.style.backgroundColor);
    });
  }
});

randomColor.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  });
  wasRandom = true;
  lastColor = null;
  console.log(lastColor);
});

colorPicker.addEventListener("change", (e) => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = e.target.value;
      lastColor = e.target.value;
    });
  });
  wasRandom = false;
  lastColor = e.target.value;
});

cleanButton.addEventListener('click', cleanBoard);

function cleanBoard(){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = '#fff';
  })
}

function cleanGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
}



