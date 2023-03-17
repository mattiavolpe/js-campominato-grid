const containerElement = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const cellElement = document.createElement("div");
  cellElement.classList.add("cell");
  cellElement.innerHTML = i;
  containerElement.insertAdjacentElement("beforeend", cellElement);
}

const insertedCells = document.querySelectorAll(".cell");
for (let i = 0; i < insertedCells.length; i++) {
  currentCell = insertedCells[i];
  currentCell.addEventListener("click", function() {
    this.classList.add("selected");
  });
}