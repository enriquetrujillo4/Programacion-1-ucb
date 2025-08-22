function esPrimo(n) {
    if (n < 2) return false;

    let i = 2;
    while (i <= Math.sqrt(n)){
        if (n % i === 0) return false;
        i++;
    }

    return true;
}

function sumaPrimos() {
    let suma = 0;
    let i = 1;

    while (i<= 100) {
        if (esPrimo(i)){
            suma += i;

        }
        i++;
    }
    console.log("suma de primos entre 1 y 100:", suma);

}
sumaPrimos();