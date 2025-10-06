class pasajero {
 //Atributos de la clase
    nombre = "";
    edad = 0 ;
    genero = "";
    tipo_boleto = "";

 //Constructor 
    constructor(paramNombre, paramEdad, paramGenero, paramTipo_boleto){
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.genero = paramGenero;
        this.tipo_boleto = paramTipo_boleto;
    }

    //Setters
    SetNombre(paramNombre) {this.nombre = paramNombre}
    SetEdad(paramEdad) {this.edad = paramEdad}
    SetGenero(paramGenero) {this.genero = paramGenero}
    SetTipoboleto(paramTipo_boleto) {this.tipo_boleto = paramTipo_boleto}

    //Getters
    GetNombre(){return this.nombre; }
    GetEdad(){return this.edad; }
    GetGenero(){return this.genero; }
    GetTipoboleto(){return this.tipo_boleto; }

    //Mostrar los valores de los atributos 
    ToString(){
        return "Pasajero:" +
            "Nombre: " + this.GetNombre()+
            "Edad: " + this.GetEdad()+
            "Genero: " + this.GetGenero()+
            "Tipo de Boleto: " + this.GetTipoboleto();
    }

}
class BoteRescate {
    capacidad_maxima = 0;
    ocupantes = [];

    
    constructor(paramCapacidad) {
        this.capacidad_maxima = paramCapacidad;
    }

    
    AgregarPasajero(pasajero) {
        if (this.ocupantes.length < this.capacidad_maxima) {
            this.ocupantes.push(pasajero);
            return true; 
        } else {
            return false; 
        }
    }

    
    MostrarOcupantes() {
        if (this.ocupantes.length === 0) {
            console.log("El bote está vacío.");
        } else {
            console.log("=== Ocupantes del Bote ===");
            this.ocupantes.forEach((p, i) => {
                console.log((i + 1) + ". " + p.ToString());
            });
        }
    }
}


function algoritmoEvacuacion(listaPasajeros, listaBotes) {

    const prioridadBoleto = { "1ra Clase": 1, "2da Clase": 2, "3ra Clase": 3 };

    listaPasajeros.sort((a, b) => {
        if (a.GetGenero() !== b.GetGenero()) {
            return a.GetGenero() === "Femenino" ? -1 : 1;
        } else if (a.GetEdad() !== b.GetEdad()) {
            return a.GetEdad() - b.GetEdad();
        } else {
            return prioridadBoleto[a.GetTipoboleto()] - prioridadBoleto[b.GetTipoboleto()];
        }
    });

    let noSubieron = [];

    listaPasajeros.forEach(pasajero => {
        let subido = false;
        for (let bote of listaBotes) {
            if (bote.AgregarPasajero(pasajero)) {
                subido = true;
                break;
            }
        }
        if (!subido) {
            noSubieron.push(pasajero);
        }
    });

    listaBotes.forEach((b, i) => {
        console.log("\nBote #" + (i + 1) + " (Capacidad: " + b.capacidad_maxima + ")");
        b.MostrarOcupantes();
    });

    console.log("\n=== Pasajeros que NO lograron subir ===");
    if (noSubieron.length === 0) {
        console.log("Todos los pasajeros fueron evacuados.");
    } else {
        noSubieron.forEach(p => console.log(p.ToString()));
    }
}

let pasajeros = [
    new Pasajero("Ana", 25, "Femenino", "1ra Clase"),
    new Pasajero("Luis", 30, "Masculino", "2da Clase"),
    new Pasajero("Sofía", 5, "Femenino", "3ra Clase"),
    new Pasajero("Carlos", 40, "Masculino", "1ra Clase"),
    new Pasajero("María", 60, "Femenino", "2da Clase"),
    new Pasajero("Jorge", 15, "Masculino", "3ra Clase"),
    new Pasajero("Lucía", 33, "Femenino", "2da Clase"),
    new Pasajero("Pedro", 8, "Masculino", "3ra Clase"),
    new Pasajero("Elena", 20, "Femenino", "1ra Clase"),
    new Pasajero("Raúl", 50, "Masculino", "2da Clase")
];


let botes = [
    new BoteRescate(2),
    new BoteRescate(2),
    new BoteRescate(2)
];


algoritmoEvacuacion(pasajeros, botes);


