"use strict";
const container = document.querySelector(".container");
const gridSize = document.querySelector("h2");

//sliding the slider
const rangeValue = (document.querySelector(".grid-size").oninput = (e) => {
  //clear the grid for a new one
  container.innerHTML = "";
  gridSize.innerHTML = this.value;

  ///generating new grid
  gridGenerator(e.target.value);
});

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
    const btnGridLine = document.querySelector(".btn-grid-line");
    btnGridLine.addEventListener("click", function () {
      gridElement.classList.toggle("no-border");
    });

    //function for colorpicker
    const colorPicker = document.querySelector("#color-picker");
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
    const btnRGB = document.querySelector(".btn-rgb");
    btnRGB.addEventListener("click", function () {
      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = "#000000".replace(
          /0/g,
          function () {
            return (~~(Math.random() * 16)).toString(16);
          }
        );
      });
    });
    //erease your drawing
    const btnEreaser = document.querySelector(".btn-erease");
    btnEreaser.addEventListener("click", function () {
      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = "white";
      });
    });
    //reset your drawing
    const btnReset = document.querySelector(".btn-reset");
    btnReset.addEventListener("click", function () {
      gridElement.style.backgroundColor = "white";
    });
  }
}

//calling the default grid
gridGenerator(16);
