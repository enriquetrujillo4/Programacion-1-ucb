 function mostrarNombre() {
            const nombre = document.getElementById("nombre").value;
            const resultado = document.getElementById("resultado");

            if (nombre.trim() === "") {
                resultado.textContent = "Por favor, escribe tu nombre.";
            }else {
                resultado.textContent = "Hola, " + nombre + "  🤗";
            }
        }

var lista = [];
function InsertarLista() {
    var valorAleatorio = Math.floor(Math.random() * 10);
    lista.push(valorAleatorio);

    const resultado = document.getElementById("resultado");

    // Crear un botón
    const boton = document.createElement("button");
    boton.textContent = valorAleatorio;
    boton.classList.add("botonLista"); // Clase para estilizar con CSS

    // Agregar el botón al contenedor
    resultado.appendChild(boton);
}
