## Battle City Super Tank 2d

Battle City Super TankX es un juego 2D inspirado en Battle City / Super Tank, desarrollado con HTML5 Canvas, JavaScript y un motor simple de mapas basado en matrices.
El jugador controla un tanque, destruye enemigos y avanza entre niveles cada vez más difíciles. Incluye:
Movimiento libre con rotación real del tanque
Enemigos verticales y horizontales
Balas del jugador y de enemigos
Sistema de niveles automático
Colisiones y detección de impactos
Pantallas de Game Over y You Win
# imagenes del juego:
![](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/GAME/assets/6.png)
>esta imagen corresponde a el jugador del juego(el bueno).

**#El villano:**
![Asset 7](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/GAME/assets/7.png)
##las balas del jugador:
![Asset 8](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/GAME/assets/8.png)
##las balas del villano:
![Asset 9](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/GAME/assets/9.png)




## Controles del Juego

| *Acción*          | *Tecla*             |
|---------------------|-----------------------|
| Mover arriba        | ↑ (Flecha arriba)     |
| Mover abajo         | ↓ (Flecha abajo)      |
| Mover izquierda     | ← (Flecha izquierda)  |
| Mover derecha       | → (Flecha derecha)    |
| Disparar            | Barra espaciadora     |

#Seccion web:
##index.html:

![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20113322.png)

> el index.
## game.html

![Captura del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20092230.png)

> Esta es una captura de pantalla de como se ve el  game.html   que se dedica a unir todas las funciones del juego .
Su función es servir como punto de entrada y presentación del proyecto antes de comenzar la partida.
##game.html:
[Ver aquí](https://htmlpreview.github.io/?https://github.com/enriquetrujillo4/Programacion-1-ucb/blob/main/GAME/game.html)

> Este enlace abre el archivo game.html del repositorio y lo muestra renderizado como una página web interactiva aunque se dice que aqui es donde nace la magia 
## game.Over.html

![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20112455.png)

> Corresponde a la pantalla que sale una vez se queda sin vidas el jugador  .

>esyta es la pantlla de game over 
## est es el game.win.html

![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20112434.png)

> esta es la mantalla mostrada una vez el jugador gana el juego al lograr soperar su ultimo nivel.
#js(logica del jugo):

#Matrix.js:

![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20114235.png)

>  extrae los elementos de los mapas.

##Game.js
###claseenemy
aqui se puede ver la base de esta seccion con la clase enemy. 
![Captura de pantalla](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20124258.png)
>la clase enemy sirve tanto para comprobar el movimiento de los enemigos como para ver cuantos de ellos hay.

##clasebullets 
![Captura de pantalla 2](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20124344.png)
>esta controla las balas  sus movimientos y sus reacciones.

##clase game 

![Captura de pantalla 3](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20124358.png)
>importa el nivel en el que estamos el mapa 

##funciones de game:
###como se mueve:
![Captura de pantalla 10](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173102.png)
>ve que hacer al precionar los botones del juego.

##handleMove():
![Captura de pantalla 4](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173119.png)
>handlemove es una funcionn que primero(ve si se puede avanzar en cierta casilla)y borra al jugador de la casilla en la que estaba previamente.

##spawnEnemies():
![Captura de pantalla 5](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173132.png)
>crea a los enemigos base(n1) de ahi crea enemigos rapidos(n2) y a los enemigos horizontales(n3)y a los verticales.

##movimientos del enemigo y bala:
![Captura de pantalla 6](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173201.png)
>hace que el enemigo se mueva automaticamente y programa sus disparos con estas dos funciones.

##checkBulletColissions():
![Captura de pantalla 7](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173243.png)
>se encarga de ver que las balas inpacten al jugador.

##chekEnemyBulletCollissions:
![Captura de pantalla 11](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173301.png)
>ven el impacto que tienen las balas en ele enemigo.


##Movimiento del jugador:
![Captura de pantalla 8](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20173408.png)
>ven movimiento.

##Main.js:
![Captura de pantalla 9](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20175243.png)
>es donde se crean los niveles y mapas de l juego representando cada numero una de nuestras 9 imagenes.

##app.js:
![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20115714.png)
> define   la  matriz su ancho su largo y la cantidad de celdas que este contiene ademas carga las imagenes desde assets y las dibuja en la mtriz.

##player.js:
![Vista del juego](https://raw.githubusercontent.com/enriquetrujillo4/Programacion-1-ucb/main/fotos/Captura%20de%20pantalla%202025-12-11%20115925.png)
 > Esta imagen corresponge al cogigo del jugador
