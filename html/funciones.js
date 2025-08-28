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

    renderizarLista();
}

function EliminarLista(valor) {

    lista = lista.filter(item => item !== valor);

    
    renderizarLista();
}

function EliminarListaCompleta() {
    lista = []; 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
}

function renderizarLista() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    lista.forEach(valor => {
        const boton = document.createElement("button");
        boton.textContent = valor;
        boton.classList.add("botonLista");

        boton.addEventListener("click", () => {
            EliminarLista(valor);
        });

        resultado.appendChild(boton);
    });
}


