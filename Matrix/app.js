const canvas = document.getElementById('matrixCanvas');
const fillButton = document.getElementById('fillBtn');
const clearButton = document.getElementById('clearBtn');
const incrementBtn = document.getElementById('incrementBtn')

const context = canvas.getContext('2d');
const matrix = new Matrix(10, 10, 0);

function initializeCanvas() {
    drawMatrix();
    window.addEventListener('resize', drawMatrix);
    fillButton.addEventListener('click', fillMatrix);
    clearButton.addEventListener('click', clearCanvas);
    incrementBtn.addEventListener('click', fillIncrementRows);
    full1.addEventListener('click', todo1);
    borde.addEventListener('click', borde0);
    cruz.addEventListener('click', cruz1);
    bordecruz.addEventListener('click', bordeconcruz);
    bandera.addEventListener('click', banderanum);
    alterno.addEventListener('click', rellenoalt);
    espiral.addEventListener('cilck', espiralde1);
    esquina.addEventListener('click', esquinade1);
    esquinadere.addEventListener('click', esquinaderecha);
    cuadricula.addEventListener('click', cuadriculade1);
}



function drawMatrix() {
    const width = canvas.width = canvas.clientWidth;
    const height = canvas.height = canvas.clientHeight;
    const cellWidth = width / matrix.cols;
    const cellHeight = height / matrix.rows;

    context.clearRect(0, 0, width, height);
    context.font = `${Math.min(cellWidth, cellHeight) / 3}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (let row = 0; row < matrix.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
            const x = col * cellWidth;
            const y = row * cellHeight;
            const value = matrix.getValue(row, col);

            context.strokeRect(x, y, cellWidth, cellHeight);
            context.fillText(value, x + cellWidth / 2, y + cellHeight / 2);
        }
    }
}

function fillMatrix() {
    matrix.fillRandom(0, 9);
    drawMatrix();
}

function fillIncrementRows(){
    matrix.fillIncrementRows();
    drawMatrix();
}

function todo1() {
    matrix.todo1();
    drawMatrix();
}

function borde0(){
    matrix.borde0();
    drawMatrix();
}

function cruz1(){
    matrix.cruz1();
    drawMatrix();
}

function bordeconcruz(){
    matrix.bordeconcruz();
    drawMatrix();
}

function banderanum() {
    matrix.banderanum();
    drawMatrix();
}

function rellenoalt(){
    matrix.rellenoalt();
    drawMatrix();
}

function espiralde1(){
    matrix.espiralde1();
    drawMatrix();
}

function esquinade1(){
    matrix.esquinade1();
    drawMatrix();
}

function esquinaderecha(){
    matrix.esquinaderecha();
    drawMatrix();
}

function cuadriculade1(){
    matrix.cuadriculade1();
    drawMatrix();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

initializeCanvas();