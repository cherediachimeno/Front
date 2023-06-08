// EJERCICO 1
// Crea una función a la que le puedas pasar un string.
//  Dicha función devolverá una parte en mayúscula y otra en minúsculas
//        pero la primera letra SIEMPRE será en mayúscula
/*
console.log(convertirString("probando esta función"));

function convertirString(string) {
  // Primero, dividimos los caracteres entre dos para conocer la mitad.
  // ejemplo: hola, la mitad será un 2, porque tiene 4 caracteres
  let mitad = string.length / 2;
  // segundo, cortamos pequeñas partes del string. La primera letra, la primera parte
  // y la segunda parte
  let letra = string.substring(0, 1);
  let primeraParte = string.substring(1, mitad);
  let segundaParte = string.substring(mitad);
  // tercero, convertimos cada parte a mayúscula, minúscula... lo que proceda.
  letra = letra.toUpperCase();
  primeraParte = primeraParte.toLowerCase(); // minúscula
  segundaParte = segundaParte.toUpperCase(); // mayúscula
  return letra + primeraParte + segundaParte;
}

// Intentando que la primera palabra salga mayúscula (sin tiempo)
/*
let frase = "probando este ejercicio";

for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
  if (frase[i] != " ") {
    frase[i] = frase[i].toUpperCase();
  } else {
    break;
  }
}

console.log(frase); */

// EJERCICIO 2
// Crea una función al que le puedas pasar como parámetro un número.
// Dicha función devolverá, usando un bucle, un árbol de asteriscos.
/*
crearArbol(5);

function crearArbol(num) {
  let arbol = "";
  for (let i = 0; i < num; i++) {
    arbol += "*";
    console.log(arbol);
  }
  return arbol;
}*/

// EJERCICIO 3

//Escribe una función a la que le puedas pasar un array y te los muestre en orden inverso.
// Asimismo, deberá imprimirse con puntos y comas en vez de comas.
// Es decir: el array [elefante, rinoceronte], se convertiría en rinoceronte; elefante
/*
let lista = ["elefante", "rinoceronte", "leon", "tigre"];
let inversion = [];
let string = "";
revertirArray(lista);

function revertirArray(array) {
  for (let i = 0; i < lista.length; i++) {
    inversion.unshift(array[i]);
  }

  for (let i = 0; i < inversion.length; i++) {
    if (inversion[i] == "elefante") {
      string += inversion[i] + ". ";
    } else {
      string += inversion[i] + "; ";
    }
  }
}

console.log(inversion);
console.log(string); */

// EJERCICIO 4

// Haz una función que le puedas pasar tres parámetros (un string, un true/false y un color en inglés).
// Dicha función imprimirá por pantalla el string en mayúscula (si es true) o en minúscula (si es false)
//  y te dirá que, en caso de imprimirlo por pantalla, saldría del color indicado.
// Por ejemplo:
// i. "PROBANDO saldría de color rojo"
//ii. "otrostring saldría de color marrón".
/*
console.log(ejercicio4("hola que ase", false, "red"));

function ejercicio4(string, boolean, color) {
  if (boolean) {
    string = string.toUpperCase();
  } else {
    string = string.toLowerCase();
  }

  return string + " saldría de color " + color;
} */
