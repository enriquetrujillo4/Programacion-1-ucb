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


function EliminarElementoLista(){

    const input = document.getElementById("input").value;
    //EL ELEMENTO ESTA INCLUIDO EN LA LISTA?
    console.log(input)
    while(lista.includes(input)){
        console.log("El input esta incluido en la lista")
        var pos = lista.indexOf(input);
        console.log("Input en la posicion; ",pos)
        lista.splice(pos,1);
        console.log("Input eliminado ----------- :", input)
    }
    console.log("Lista actualizada !!!")
    console.log(lista.toString())

    alert(input)
}


