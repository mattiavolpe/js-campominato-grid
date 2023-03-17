const containerElement = document.querySelector(".container");

let cellsNumber = 49;

const levelSelectorElement = document.querySelector("#level");

levelSelectorElement.addEventListener("change", function() {
  switch (this.value) {
    case "medium":
      cellsNumber = 81;
      break;
    case "hard":
      cellsNumber = 100;
      break;
    default:
      cellsNumber = 49;
  }
});

const playButton = document.querySelector("#game_options > button");

playButton.addEventListener("click", function () {
  containerElement.innerHTML = "";
  const cellsPerRow = Math.sqrt(cellsNumber);
  for (let i = 1; i <= cellsNumber; i++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.style.height = `min(calc(100% / ${cellsPerRow}), (96vw / ${cellsPerRow}))`;
    cellElement.innerHTML = i;
    containerElement.insertAdjacentElement("beforeend", cellElement);
  }
  
  const insertedCells = document.querySelectorAll(".cell");

  for (let i = 0; i < insertedCells.length; i++) {
    const currentCell = insertedCells[i];
    currentCell.addEventListener("click", function() {
      this.classList.add("selected");
      console.log(Number(this.innerText));
    });
  }

});

