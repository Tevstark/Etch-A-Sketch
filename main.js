// let gridSquare = createElement('div');
// let gridSquares = gridSquare * 256;
// // Adds a class of 'grid-squares' to the created element.
// gridSquare.classList.add('grid-squares')
// container.appendChild(gridSquares);

let container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-squares");
  container.appendChild(gridSquare);
}

let hoverEffect = Array.from(document.querySelectorAll(".grid-squares"));

hoverEffect.forEach(function (hoverEffect) {
  hoverEffect.addEventListener("mouseover", function () {
    this.style.backgroundColor = "purple";
  });

  hoverEffect.addEventListener("mouseout", function () {
    this.style.backgroundColor = "blueviolet";
  });
});

let numSquares = document.querySelector("#num-squares");

numSquares.addEventListener("click", function () {
  let userNum = parseInt(prompt("Enter number between 1 and 100"));
  let inputNum = userNum * userNum;
  // let amountSquares = document.querySelector('#grid-squares');
  if (userNum >= 1 && userNum <= 100) {
    container.innerHTML = "";
    // let squareSize = 960 / userNum;
    for (let i = 0; i < inputNum; i++) {
      let gridSquare = document.createElement("div");
      gridSquare.style.width = `calc(100% / ${userNum}`;
      gridSquare.style.height = `calc(100% / ${userNum}`;
      gridSquare.classList.add("grid-squares");
      container.appendChild(gridSquare);
    }
    hoverEffect = Array.from(document.querySelectorAll(".grid-squares"));

    hoverEffect.forEach(function (hoverEffect) {
      hoverEffect.addEventListener("mouseover", function () {
        this.style.backgroundColor = "purple";
      });

      hoverEffect.addEventListener("mouseout", function () {
        this.style.backgroundColor = "blueviolet";
      });
    });
  } else {
    alert("Invalid Prompt");
  }
  // amountSquares.style.cssText = `width: 100% / ${userNum}; height: 100% / ${userNum};`;
});
