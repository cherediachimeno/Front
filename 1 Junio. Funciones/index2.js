/* 1º Escribe un programa que pida al usuario dos números. *** HECHO
   2º Usa esos 2 números en una función que divide el primero por el segundo
        y devuelve el resultado. 
    3º Muestra el resultado que devuelve la función en un alert. 
    4º Después vuelve a pedir los números y hacer todo otra vez hasta que el usuario 
    introduzca un 0 como segundo número. */

// 1º PARTE
/*
let num1 = Number(prompt("dime un número"));
let num2 = parseInt(prompt("dime otro número"));

alert(`los números seleccionados son ${num1} y ${num2}`);

// 2º PARTE Y 3º PARTE
alert(calcular(num1, num2));

function calcular(x, y) {
  return x / y;
} */ /*
let num1, num2;

do {
  num1 = Number(prompt("dime un número"));
  num2 = Number(prompt("dime otro número"));
  alert(`los números seleccionados son ${num1} y ${num2}`);
  alert(calcular(num1, num2));
} while (num1 != 0 || num2 != 0);

function calcular(x, y) {
  return x / y;
}
*/

/*let edad = Number(prompt("dime tu edad"));
let datoFuncion;

//let string = calculoEdad(edad); // el return de la funcion calculoEdad

//alert(string);

function calculoEdad(num) {
  if (num >= 18) {
    datoFuncion = "eres mayor de edad";
    return "**** mayor de edad *****";
  } else {
    return "**** menor de edad *****";
  }
}
*/
