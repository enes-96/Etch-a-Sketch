"use strict";
//ich könnte so machen, wenn movein oder mousein ich weiss nocht nicht style background black
const container = document.querySelector(".container");
const rangeValue = document.querySelector(".grid-size");
const gridSize = document.querySelector("h2");
rangeValue.onchange = (e) => {
  //clear the grid for a new one
  clearGrid();
  ///generating new grid
  gridGenerator(e.target.value);
};

//create standart grid
function gridGenerator(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //create childs
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("child");
    container.appendChild(gridElement);
    //eventlistener on every child
    gridElement.addEventListener("mouseover", () => {
      gridElement.style.backgroundColor = "red";
    });
  }
  //displaying the grid size
  updateGridSize(size);
}

//clearing the grid
function clearGrid() {
  container.innerHTML = "";
}

//updating the grid size display
function updateGridSize(size) {
  gridSize.innerHTML = `${size} x ${size}`;
}

//calling the default grid
gridGenerator(16);
