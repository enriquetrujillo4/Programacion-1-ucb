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



ListaObjeto = [
    {nombre: "Bruno Antelo Caceres.", edad: "18", correo: "bruno.antelo@ucb.edu.bo", carrera: "Medicina", telefono: 770911740},
    {nombre: "Francisco Javier Aguilera Urgel.",edad: 18, correo: "francisco.aguilera@ucb.edu.bo",carrera: "Ingenieria industrial.",telefono: "77625626"},
    {nombre: "Mateo Cossio Villena.",edad: 18,correo: "mcossio@ucb.edu.bo",carrera: "Ingenieria Industrial.",telefono: "75027212"},
    {nombre: "Jorge Aguirre Chavez", edad: "18", correo: "jorge.aguirre.c1@ucb.edu.bo", carrera: "Ingenieria en software", telefono: "68791910"},
    {nombre: "Diego Andrade Canedo", edad: "18", correo: "diego.andrade.c@ucb.edu.bo", carrera: "Ingeniería en inteligencia artificial", telefono: "76677712"},
    {nombre: "Daniel Elias Roca Padilla" , edad: 24, correo: "elias.roca@ucb.edu.bo", carrera: "Ingenieria en inteligendia artificial" , telefono: "75763743"},

]

function AddEstudiante() {
  var varName = document.getElementById("input_name").value;
  var varEdad = Number(document.getElementById("input_edad").value);
  var varCorreo = document.getElementById("input_correo").value;
  var varCarrera = document.getElementById("input_carrera").value;
  var varPhone = document.getElementById("input_phone").value;

  var estudiante = {
    nombre: varName,
    edad: varEdad,
    correo: varCorreo,
    carrera: varCarrera,
    telefono: varPhone
  }

  if (estudiante.edad >= 18) {
    console.log("INSERTADO CON EXITO!!!");
    ListaObjeto.push(estudiante);
  } else {
    console.log("Ahorita no joven, vuelve cuanto tengas 18 años");
  }

  console.log(ListaObjeto);
  crearTabla(ListaObjeto);
}


function crearTabla(datos) {
  let tabla = '<table>';
  tabla += `
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Carrera</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
      `;

  datos.forEach(estudiante => {
    tabla += `
          <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.correo}</td>
            <td>${estudiante.carrera}</td>
            <td>${estudiante.telefono}</td>
          </tr>
        `;
  });

  tabla += '</tbody></table>';
  document.getElementById("tabla-container").innerHTML = tabla;
}

function cargarColores(){
  const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Morado"];
  const select = document.getElementById("colorSelect");

  colores.forEach(color => {
    const option = document.createElement("option");
    option.value = color.toLowerCase();
    option.textContent = color;
    select.appendChild(option);
  });
}

cargarColores();

//Metodo que muestra el colro seleccionado (mostrar el select)

function mostrarColor(){
  const select = document.getElementById("colorSelect");
  const valor = select.value;
  alert(valor);
}



    

