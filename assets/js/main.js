/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const containerElement = document.querySelector(".container");

let cellsNumber = 100;

const levelSelectorElement = document.querySelector("#level");

const playButton = document.querySelector("#game_options > button");

levelSelectorElement.addEventListener("change", function() {
  switch (this.value) {
    case "medium":
      cellsNumber = 81;
      break;
    case "easy":
      cellsNumber = 49;
      break;
    default:
      cellsNumber = 100;
  }
});

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

