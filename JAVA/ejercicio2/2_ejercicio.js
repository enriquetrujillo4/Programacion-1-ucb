function hexaADecimal(hex) {
    let digitos = "0123456789ABCDEF";
    hex = hex.toUpperCase();
    let decimal = 0;
    let potencia = 1;

    for (let i = hex.length - 1; i >= 0; i--) {
        let valor = digitos.indexOf(hex[i]);
        decimal += valor * potencia;
        potencia *= 16;
    }

    return decimal;
}

function decimalABinario(numero) {
    let resultado = "";
    if (numero === 0) return "0";

    while (numero > 0) {
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2);
    }

    return resultado;
}

function binarioADecimal(binario) {
    let decimal = 0;
    let potencia = 1;

    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += potencia;
        }
        potencia *= 2;
    }
    return decimal;
}

function binarioAHex(binario) {
    let numero = binarioADecimal(binario);
    return convertirDecimalAHex(numero);
}

function convertirDecimalAHex(numero) {
    let resultado = "";
    let digitos = "0123456789ABCDEF";

    while (numero > 0) {
        let residuo = numero % 16;
        resultado = digitos[residuo] + resultado;
        numero = Math.floor(numero / 16);
    }

    return resultado || "0";
}
console.log("Hex a binario:", decimalABinario(hexaADecimal("1F")));
console.log("Binario a hex:", binarioAHex("11111"));
let bin = binarioAHex("11111");
let hex = decimalABinario(hexaADecimal("1F"));
document.getElementById("resultado").innerText = "Hex a binario (1F): " + hex;
document.getElementById("resultado2").innerText = "Binario a Hex (11111): " + bin;