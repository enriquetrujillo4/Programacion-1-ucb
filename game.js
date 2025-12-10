
class enemigos {
  constructor(row, col, value = 7) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = 1; // movimiento vertical (nivel 1 y 2)
  }
  moveVertical(rows) {
    let newRow = this.row + this.dr;
    if (newRow < 0 || newRow >= rows) {
      this.dr = -this.dr;
      newRow = this.row + this.dr;
    }
    this.row = newRow;
  }
}
// Enemigos horizontales (nivel 3)
class enemigolados {
  constructor(row, col, value = 7) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dc = 1; // se mueve derecha
  }
  moveHorizontal(cols) {
    let newCol = this.col + this.dc;
    if (newCol < 0 || newCol >= cols) {
      this.dc = -this.dc; // cambio de dirección
      newCol = this.col + this.dc;
    }
    this.col = newCol;
  }
}
// Bala del jugador
class Bullet {
  constructor(row, col, value = 8) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = -1;
    this.dc = 0;
  }
  move(rows, cols) {
    const newRow = this.row + this.dr;
    const newCol = this.col + this.dc;

    if (newRow < 0 || newRow >= rows) return false;
    if (newCol < 0 || newCol >= cols) return false;

    this.row = newRow;
    this.col = newCol;
    return true;
  }
}
// Bala enemiga
class EnemyBullet {
  constructor(row, col, dr, dc, value = 9) {
    this.row = row;
    this.col = col;
    this.value = value;
    this.dr = dr;
    this.dc = dc;
  }
  move(rows, cols) {
    const newRow = this.row + this.dr;
    const newCol = this.col + this.dc;
    if (newRow < 0 || newRow >= rows) return false;
    if (newCol < 0 || newCol >= cols) return false;
    this.row = newRow;
    this.col = newCol;
    return true;
  }
}
//GAME CLASS
class Game {
  currentLevel = 1;
  lastDirection = { dr: -1, dc: 0 };
  startCellCleared = false;

  constructor(canvasId, mapMatrix, images) {

    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.rows = mapMatrix.rows || 10;
    this.cols = mapMatrix.cols || 10;
    this.cellSize = this.canvas.width / this.cols;

    this.mapMatrix = mapMatrix;
    this.images = images;

    this.player = this.initPlayer();

    this.enemies = [];
    this.horizontalEnemies = [];
    this.bullets = [];
    this.enemyBullets = [];

    this.spawnEnemies();
    this.moveEnemies();
    this.moveEnemyBullets();
    this.moveBullets();

    this.initControls();
  }
  // PLAYER
  initPlayer() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.mapMatrix.getValue(r, c) === 6) {
          return new Player(r, c, 6);
        }
      }
    }
    return new Player(0, 0, 6);
  }
  initControls() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.lastDirection = { dr: -1, dc: 0 }; 
          this.handleMove(-1, 0); 
          break;
        case "ArrowDown":  
          this.lastDirection = { dr: 1, dc: 0 };  
          this.handleMove(1, 0); 
          break;
        case "ArrowLeft":  
          this.lastDirection = { dr: 0, dc: -1 }; 
          this.handleMove(0, -1); 
          break;
        case "ArrowRight": 
          this.lastDirection = { dr: 0, dc: 1 };  
          this.handleMove(0, 1); 
          break;
        case " ": 
          this.fireBullet(); break;
      }
    });
  }
  //SISTEMA DE NIVELES
  nextLevel() {
    this.currentLevel++;
    if (!LEVELS[this.currentLevel]) {
      window.location.href = "game-win.html";
      return;
    }
    this.loadLevel(LEVELS[this.currentLevel]);
  }

  loadLevel(levelData) {
    this.mapMatrix.fillFromArray(levelData);

    this.player = this.initPlayer();
    this.enemies = [];
    this.horizontalEnemies = [];
    this.bullets = [];
    this.enemyBullets = [];

    this.spawnEnemies();
    this.draw();
  }

  handleMove(dr, dc) {
  const beforeRow = this.player.row;
  const beforeCol = this.player.col;

  const newRow = beforeRow + dr;
  const newCol = beforeCol + dc;
  // Obtener el tipo de casilla a la que quiero moverme
  const tile = this.mapMatrix.getValue(newRow, newCol);
  // Valores permitidos (vacio y pasto)
  const walkable = [1, 4];
  // lugares donde no avanza 
  if (!walkable.includes(tile)) return;
  this.player.move(dr, dc, this.rows, this.cols);
  // Borrar la casilla inicial cuando se mueve por primera vez
  const moved = this.player.row !== beforeRow || this.player.col !== beforeCol;
  if (moved && !this.startCellCleared) {
    this.mapMatrix.setValue(beforeRow, beforeCol, 1);
    this.startCellCleared = true;
  }
  this.draw();
}
  spawnEnemies() {
    //  1 enemigos naturales 
    if (this.currentLevel === 1) {
      for (let i = 0; i < 3; i++) {
        this.enemies.push(new enemigos(0, Math.floor(Math.random() * this.cols)));
      }
    }
    // 2 enemigos rapidos 
    if (this.currentLevel === 2) {
      for (let i = 0; i < 7; i++) {
        this.enemies.push(new enemigos(0, Math.floor(Math.random() * this.cols)));
      }
    }
    // enemigos horizontales
    if (this.currentLevel === 3) {
  // Enemigos horizontales
      const rows = [2, 8, 15];
      rows.forEach(r => {
        this.horizontalEnemies.push(new enemigolados(r, 0));
        });
  // Enemigos verticales tambien
        for (let i = 0; i < 5; i++) {
        this.enemies.push(new enemigos(0, Math.floor(Math.random() * this.cols)));
        }
        }
        }
  moveEnemies() {
    setInterval(() => {
      // enemigos verticales
      const speed = this.currentLevel === 2 ? 2 : 1; // nivel 2 más rápido
      for (let i = 0; i < speed; i++) {
        this.enemies.forEach(enemy => {
          enemy.moveVertical(this.rows);
          this.enemyBullets.push(new EnemyBullet(enemy.row, enemy.col, 1, 0));
        });
      }
      // enemigos horizontales 
      this.horizontalEnemies.forEach(enemy => {
        enemy.moveHorizontal(this.cols);
        this.enemyBullets.push(new EnemyBullet(enemy.row, enemy.col, 0, enemy.dc));
      });
      this.draw();
    }, 450);
  }
  moveEnemyBullets() {
    setInterval(() => {
      this.enemyBullets =
        this.enemyBullets.filter(b => b.move(this.rows, this.cols));
      this.checkEnemyBulletCollision();
      this.draw();
    }, 120);
  }
  fireBullet() {
    const b = new Bullet(this.player.row, this.player.col);
    b.dr = this.lastDirection.dr;
    b.dc = this.lastDirection.dc;
    this.bullets.push(b);
  }

  moveBullets() {
    setInterval(() => {
      this.bullets = this.bullets.filter(b => b.move(this.rows, this.cols));
      this.checkBulletCollisions();
      this.draw();
    }, 90);
  } 
  checkBulletCollisions() {

    // verticales
    for (let b = this.bullets.length - 1; b >= 0; b--) {
      for (let e = this.enemies.length - 1; e >= 0; e--) {
        if (this.bullets[b].row === this.enemies[e].row &&
            this.bullets[b].col === this.enemies[e].col) {

          this.bullets.splice(b, 1);
          this.enemies.splice(e, 1);
          break;
        }
      }
    }
    // horizontales
    for (let b = this.bullets.length - 1; b >= 0; b--) {
      for (let e = this.horizontalEnemies.length - 1; e >= 0; e--) {
        if (this.bullets[b].row === this.horizontalEnemies[e].row &&
            this.bullets[b].col === this.horizontalEnemies[e].col) {

          this.bullets.splice(b, 1);
          this.horizontalEnemies.splice(e, 1);
          break;
        }
      }
    }
    if (this.enemies.length === 0 && this.horizontalEnemies.length === 0) {
      this.nextLevel();
    }
  }
  checkEnemyBulletCollision() {
    for (let b = this.enemyBullets.length - 1; b >= 0; b--) {
      if (this.enemyBullets[b].row === this.player.row &&
          this.enemyBullets[b].col === this.player.col) {

        window.location.href = "game-over.html";
        return;
      }
    }
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // fondo
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const value = this.mapMatrix.getValue(r, c);
        const img = this.images[value];
        if (img) {
          this.ctx.drawImage(
            img,
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
        }
      }
    }
    // jugador
    if (this.player) {
      const img = this.images[this.player.value];
      const x = this.player.col * this.cellSize;
      const y = this.player.row * this.cellSize;
      const size = this.cellSize;

      this.ctx.save();
      this.ctx.translate(x + size / 2, y + size / 2);

      if (this.lastDirection.dr === -1) this.ctx.rotate(0);
      if (this.lastDirection.dr === 1) this.ctx.rotate(Math.PI);
      if (this.lastDirection.dc === 1) this.ctx.rotate(Math.PI / 2);
      if (this.lastDirection.dc === -1) this.ctx.rotate(-Math.PI / 2);

      this.ctx.drawImage(img, -size/2, -size/2, size, size);
      this.ctx.restore();
    }
    // enemigos normales
    this.enemies.forEach(e => {
      const img = this.images[e.value];
      this.ctx.drawImage(
        img,
        e.col * this.cellSize,
        e.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });
    // enemigos horizontales
    this.horizontalEnemies.forEach(e => {
      const img = this.images[e.value];
      this.ctx.drawImage(
        img,
        e.col * this.cellSize,
        e.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });
    // balas jugador
    this.bullets.forEach(b => {
      const img = this.images[b.value];
      this.ctx.drawImage(
        img,
        b.col * this.cellSize,
        b.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });  
    this.enemyBullets.forEach(b => {
      const img = this.images[b.value];
      this.ctx.drawImage(
        img,
        b.col * this.cellSize,
        b.row * this.cellSize,
        this.cellSize,
        this.cellSize
      );
    });
  }
}