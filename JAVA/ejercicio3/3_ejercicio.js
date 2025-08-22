function operarBinarios(bin1, bin2, operacion){
    let a = binarioADecimal(bin1);
    let b = binarioADecimal(bin2);
    let resultado;

    if (operacion === "suma") {
        resultado = a + b;
    } else if (operacion === "resta"){
        resultado = a - b;
    } else if (operacion === "multiplicacion"){
        resultado = a * b;
    } else if (operacion === "division"){
        if (b === 0){
            console.log("Error: división por cero.");
            return;
        }
        resultado = Math.floor(a / b);
    } else {
        console.log("Operación no válida.");
        return "operacion no valida.";
    }

    let mensaje = `
    Operacion: ${operacion} <br>
    Resultado en binario: ${decimalABinario(resultado)} <br>
    Resultado en decimal: ${resultado}
    `;

    console.log(mensaje);
    document.getElementById("resultados").innerHTML +=
    `<div class="resultado">${mensaje}</div>`;



    console.log(`Resultado en binario (${operacion}):`, decimalABinario(resultado));
    console.log(`Resultado en decimal (${operacion}):`, resultado);
}

operarBinarios("1010", "0011", "suma");
operarBinarios("1010", "0011", "resta");
operarBinarios("1010", "0011", "multiplicaion");
operarBinarios("1010", "0011", "division");