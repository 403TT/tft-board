const board = document.getElementById("board");
const buildInput = document.getElementById("buildInput");

const championIcons = {
  "sett": "https://cdn.example.com/icons/sett.png",
  "darius": "https://cdn.example.com/icons/darius.png",
  "shen": "https://cdn.example.com/icons/shen.png"
  // Add more champions
};

const builds = {
  "dynamo miss fortune": [
    { name: "Poppy", row: 0, col: 1 },
    { name: "Gragas", row: 0, col: 2 },
    { name: "Zac", row: 0, col: 3 },
    { name: "Kobuko", row: 0, col: 4 },
    { name: "Renekton", row: 1, col: 5 },
    { name: "Miss Fortune", row: 2, col: 0 },
    { name: "Morgana", row: 2, col: 1 },
    { name: "Aurora", row: 2, col: 2 },
    { name: "Elise", row: 2, col: 5 }
  ]
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

function placeChampionsFromBuild(buildName) {
  createBoard();
  const champions = builds[buildName.toLowerCase()];
  if (!champions) return;

  champions.forEach(champ => {
    const icon = championIcons[champ.name];
    const cell = [...document.querySelectorAll(".hex")]
      .find(div => div.dataset.row == champ.row && div.dataset.col == champ.col);
    if (cell && icon) {
      const img = document.createElement("img");
      img.src = icon;
      img.alt = champ.name;
      cell.appendChild(img);
    }
  });
}

buildInput.addEventListener("change", (e) => {
  placeChampionsFromBuild(e.target.value.trim());
});

createBoard();