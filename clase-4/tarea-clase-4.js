// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


function tarea4() {
    //ejercicio1 ();
    ejercicio1Solucion2 ();
    ejercicio2 ();
    ejercicio3 ();
    ejercicio4 ()
}

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function ejercicio1 () {
    
    let contador = 3;
    while (contador <= 22) {
         for (let i=1; i<=3;i++){
            if (i === 3){
                contador++;
                if (contador <= 22) {
                    console.log(contador)
                }
            } else {
                contador++;
            }
        }
    }

}

function ejercicio1Solucion2 () {
    
    let contador = Number(prompt('¿Desde qué número querés empezar?'));
    const CADA_CUANTO = Number(prompt('¿Cada cuántos números querés contar?'));
    const HASTA_CUANTO = Number(prompt('¿Hasta qué número querés contar?'));

    contador--;
    while (contador <= HASTA_CUANTO) {
         for (let i=1; i<=CADA_CUANTO;i++){
            if (i === 1){
                contador++;
                console.log(contador);
            } else {
                contador++;
            }
        }
    }

}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function ejercicio2() {
    let contador = 10;
    const archivadorDeNumeros = [];
    while (contador >=1) {
        console.log(contador);
        archivadorDeNumeros.push(contador);
        contador--;
    }
    console.log(archivadorDeNumeros)
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function ejercicio3 () {
    for(let i = 1; i <= 50; i++) {
        if (i% 3 === 0 && i%5 === 0){
            console.log('FizzBuzz');
        } else if (i% 3 === 0) {
            console.log('Fizz');
        } else if (i% 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }

    }


}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function ejercicio4 () {
    const LISTA_DE_NOTAS = ingresarNotas();
    const PROMEDIO = calcularPromedio(LISTA_DE_NOTAS);

    alert(`Tu promedio es ${PROMEDIO}`);
}

function ingresarNotas () {
    
    let listaDeNotas = prompt('Hola! Por favor escribe las notas de tu cursada separadas por un espacio. Ej: 10 9 8 7.5').split(' ');

    listaDeNotas = listaDeNotas.map(str => Number(str));
   
    /* ANTES DE SABER LO DE MAP

    for (i = 0; i < listaDeNotas.length ; i++) {
        listaDeNotas[i] = Number(listaDeNotas[i]);
    }

    */

    return listaDeNotas;
}

function calcularPromedio(listaDeNotas) {
    let sumaDeNotas = 0;
    for (i = 0; i < listaDeNotas.length ; i++) {
        sumaDeNotas += listaDeNotas[i];
    }
    return (sumaDeNotas / listaDeNotas.length).toFixed(1);
}

tarea4();