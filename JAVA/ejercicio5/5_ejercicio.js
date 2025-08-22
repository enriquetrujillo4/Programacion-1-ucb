function sumaPares(){
    let suma = 0;
    let i = 1;

    while (i <= 50){
        if ( i % 2 === 0){
            suma += i;
        }
        i++;
    }

    console.log("Suma de pares entre 1 y 50:", suma);
}

sumaPares();