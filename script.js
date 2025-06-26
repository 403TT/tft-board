const board = document.getElementById("board");
const buildInput = document.getElementById("buildInput");

const championIcons = {
  "sett": "https://cdn.example.com/icons/sett.png",
  "darius": "https://cdn.example.com/icons/darius.png",
  "shen": "https://cdn.example.com/icons/shen.png"
  // Add more champions
};

const championPositions = {
  "sett": { row: 3, col: 3 },
  "darius": { row: 2, col: 2 },
  "shen": { row: 2, col: 4 }
};

function createBoard() {
  board.innerHTML = "";
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 7; col++) {
      const cell = document.createElement("div");
      cell.className = "hex";
      cell.dataset.row = row;
      cell.dataset.col = col;
      board.appendChild(cell);
    }
  }
}

function placeChampions(buildText) {
  createBoard();
  const names = buildText.toLowerCase().split(",").map(n => n.trim());
  names.forEach(name => {
    const pos = championPositions[name];
    const icon = championIcons[name];
    if (pos && icon) {
      const cell = [...document.querySelectorAll(".hex")]
        .find(div => div.dataset.row == pos.row && div.dataset.col == pos.col);
      if (cell) {
        const img = document.createElement("img");
        img.src = icon;
        cell.appendChild(img);
      }
    }
  });
}

buildInput.addEventListener("change", (e) => {
  placeChampions(e.target.value);
});

createBoard();