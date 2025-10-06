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