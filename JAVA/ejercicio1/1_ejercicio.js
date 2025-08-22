function binarioADecimal(binario){
    let decimal = 0; 
    let potencia = 1;

    for (let i = binario.length - 1; i >= 0; i--){
        if (binario[i]=== '1'){
            decimal += potencia;

        }
        potencia *=2;
    }

    return decimal;

}

function sumarBinarios(bin1, bin2){
    let num1 = binarioADecimal(bin1);
    let num2 = binarioADecimal(bin2);
    let suma = num1 + num2;

    console.log("Suma en decimal:", suma);
    document.getElementById("resultado").innerText = "Suma en dcimal: " + suma;

}
sumarBinarios("1010", "1100");