
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

const rows = 30;
const cols = 30;
const cellSize = canvas.width / cols;

let nivelActual = 1;

// Crear instancia de Matrix y cargar el mapa del nivel 1
const mapMatrix = new Matrix(rows, cols);
mapMatrix.fillFromArray(LEVELS[nivelActual]);
if (nivelActual > 3){
    window.location.href = "game-win.html"
}

console.log("Mapa cargado nivel:", nivelActual);
console.log(mapMatrix.toString());
// IMAGENES
const images = {};
let loadedCount = 1;
const totalImages = 12; // subir si agregas más sprites

for (let i = 1; i < totalImages; i++) {
  const img = new Image();
  img.src = `assets/${i}.png`;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === totalImages) {
      drawMap(); // solo cuando todas estén listas
    }
  };
  images[i] = img;
}

// Dibujar mapa inicial
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const value = mapMatrix.getValue(r, c);
      const img = images[value];
      if (img && img.complete) {
        ctx.drawImage(img, c * cellSize, r * cellSize, cellSize, cellSize);
      } else if (img) {
        img.onload = () => {
          ctx.drawImage(img, c * cellSize, r * cellSize, cellSize, cellSize);
        };
      }
    }
  }
}
const game = new Game("gameCanvas", mapMatrix, images);

// Dibujar primera vez
game.draw();

