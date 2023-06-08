// PRIMER EJERCICIO ****

// 1º PASO. Haz una función que le pases dos números y un booleano.
// 2º PASO. Si es true, devolverá la suma de los números
// 3º PASO. (siempre en positivo, los números negativos los ignorará).
// 4º PASO. Si es false, los restará.
// 5º PASO. En caso de que la resta sea menor a 0, mostrará por pantalla una advertencia "el resultado es menor a 0
//  y no se mostrará".
/*
console.log(sumar(50, 52, false));

function sumar(num1, num2, booleano) {
  if (booleano) {
    let suma = num1 + num2;
    if (suma < 0) return "la suma sale en negativo y por tanto la ignoramos";
    else return "Haremos una suma " + suma;
  } else {
    let resta = num1 - num2;
    if (resta < 0) return "el resultado es menor a 0 y NO se mostrará";
    else return "Haremos una resta " + resta;
  }
}*/

// SEGUNDO EJERCICIO ****

// 1º PASO Crea una función que, al pasarle un número, te diga si es par e impar.
// 2º PASO- En caso de que sea par, imprimirá por pantalla lo siguiente:
// ** EL NÚMERO ELEGIDO (NUM ESCOGIDO) ES PAR **
// ** EL NÚMERO ELEGIDO (NUM ESCOGIDO) ES IMPAR **
/*
console.log(pasarNumeros(5));

function pasarNumeros(num) {
  if (num % 2 == 0) return `** EL NÚMERO ELEGIDO ${num} ES PAR **`;
  else return `** EL NÚMERO ELEGIDO ${num} ES IMPAR **`;
}*/

// TERCER EJERCICIO

// 1º  Haz una función a la que le puedas pasar un array de strings.
// 2º Dicha función imprimirá por pantalla la mitad del array en mayúscula y la otra mitad en minúscula.
/*
let mensajesOptimistas = [
  "Vamos a suspender",
  "Qué pena",
  "El sábado moriremos",
  "Qué difícil",
];

convertir(mensajesOptimistas);

function convertir(array) {
  let mitad = array.length / 2; // 2

  for (let i = 0; i < array.length; i++) {
    if (i < mitad) array[i] = array[i].toUpperCase();
    else array[i] = array[i].toLowerCase();
  }

  console.log(array);
} */
