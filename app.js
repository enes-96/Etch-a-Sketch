"use strict";
const container = document.querySelector(".container");
const rangeValue = document.querySelector(".grid-size");
const gridSize = document.querySelector("h2");
const btnRGB = document.querySelector(".btn-rgb");
const btnReset = document.querySelector(".btn-reset");
const btnGridLine = document.querySelector(".btn-grid-line");
const btnEreaser = document.querySelector(".btn-erease");
const colorPicker = document.querySelector("#color-picker");

//sliding the slider
rangeValue.oninput = (e) => {
  //clear the grid for a new one
  container.innerHTML = "";
  gridSize.innerHTML = this.value;

  ///generating new grid
  gridGenerator(e.target.value);
};

//create standart grid
function gridGenerator(size) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  //displaying the grid size
  gridSize.innerHTML = `${size} x ${size}`;

  //create childs
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("child");
    gridElement.classList.remove("no-border");
    container.appendChild(gridElement);

    //funciton for displaying the borders
    btnGridLine.addEventListener("click", function () {
      gridElement.classList.toggle("no-border");
    });

    //function for colorpicker
    colorPicker.addEventListener("click", function (e) {
      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = e.target.value;
      });
    });

    //eventlistener on every child color black
    gridElement.addEventListener("mouseover", () => {
      gridElement.style.backgroundColor = "black";
    });
    //eventlistener on every child RGB
    btnRGB.addEventListener("click", function () {
      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = randomColor();
      });
    });
    //erease your drawing
    btnEreaser.addEventListener("click", function () {
      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = "white";
      });
    });
    //reset your drawing
    btnReset.addEventListener("click", function () {
      gridElement.style.backgroundColor = "white";
    });
  }
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

//calling the default grid
gridGenerator(16);
