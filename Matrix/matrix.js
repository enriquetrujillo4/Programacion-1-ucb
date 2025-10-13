class Matrix {
    rows;
    cols;
    data;

    constructor(rowsParam, colsParam, defaultValue = 0) {
        this.rows = rowsParam;
        this.cols = colsParam;
        this.data = [];

        for (let i = 0; i < rowsParam; i++) {
            const rowTemp = [];
            for (let j = 0; j < colsParam; j++) {
                rowTemp.push(defaultValue);
            }
            this.data.push(rowTemp);
        }
    }

    isValidPosition(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    setValue(row, col, value) {
        if (this.isValidPosition(row, col)) {
            this.data[row][col] = value;
        }
    }

    getValue(row, col) {
        if (this.isValidPosition(row, col)) {
            return this.data[row][col];
        }
    }

    fillRandom(min, max) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const random = Math.floor(Math.random() * (max - min + 1)) + min;
                this.data[i][j] = random;
            }
        }
    }

    fillIncrementRows(){
        var initialValue = 1;
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                this.data[i][j] = initialValue;
            }
            initialValue = initialValue + 2;
        }
    }

    todo1() {
        for (let fil = 0; fil < 10; fil++) {
            for (let col = 0; col < 10; col++) {
            this.data[fil][col] = 1;
            }
        }

    }

    borde0(){
        for (let fil = 1; fil < 9; fil++) {
            for (let col = 1; col < 9; col++) {
            this.data[fil][col] = 1;
            }
        }
    }

    cruz1(){
        const centroFila = Math.floor(this.rows / 2);
        const centroCol = Math.floor(this.cols / 2);

        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil === centroFila || col === centroCol) {
                    this.data[fil][col] = 1;
                } else {
                    this.data[fil][col] = 0;
                }
            }
    
        }
    }

    bordeconcruz(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                const esBorde = fil === 0 || fil === this.rows - 1 || col === 0 || col === this.cols - 1;
                const esDiagonalPrincipal = fil === col;
                const esDiagonalSecundaria = fil + col === this.cols - 1;

                if (esBorde) {
                this.data[fil][col] = 1;
                    } else if (esDiagonalPrincipal || esDiagonalSecundaria) {
                this.data[fil][col] = 2;
                    } else {
                this.data[fil][col] = 0;
                    }
            }
        }
    }

    banderanum(){
        const tercio = Math.floor(this.rows / 3);

        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil < tercio) {
                    this.data[fil][col] = 1; // Primera franja
                        } else if (fil < 2 * tercio) {
                    this.data[fil][col] = 2; // Segunda franja
                        } else {
                    this.data[fil][col] = 0; // Tercera franja
                        }
            }
        }
    }

    rellenoalt(){   
        for (let fil = 0; fil < this.rows; fil++) {
            const valor = fil % 2; 
            for (let col = 0; col < this.cols; col++) {
                this.data[fil][col] = valor;
            }
        }
    }

    espiralde1(){

    }

    esquinade1(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (col > fil) break;
                    this.data[fil][col] = 1;
            }
        }
    }

    esquinaderecha(){  
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = this.cols - 1; col >= 0; col--) {
                if (col < this.cols - fil - 1) break;
                    this.data[fil][col] = 1;
            }
        }
    }

    cuadriculade1(){
        for (let fil = 0; fil < this.rows; fil++) {
            for (let col = 0; col < this.cols; col++) {
                if (fil % 2 === 0 || col === 0 || col === this.cols - 1) {
                    this.data[fil][col] = 1;
                } else {
                    this.data[fil][col] = 0;
                }
            }
        }
    }

    toString() {
        return this.data.map(row => row.join('\t')).join('\n');
    }
}