// EJERCICIO NÚMERO AL REVÉS
/*
let num;
let result = "";

do {
  num = prompt("dime un número y te lo pongo al revés"); // siempre
  // va a recoger un string excepto que se lo especifique (parseInt)

  // 1234 será un string de 4 caracteres (índices 0, 1, 2, 3)

  // empezaré a contar desde el final
  for (let i = num.length - 1; i >= 0; i--) {
    console.log(num.substring(i, i + 1));
    result += num.substring(i, i + 1); // por cada vuelta, seleccioname
    // el índice concreto, y me creas un substring que solo tenga ese indice
  }

  alert("el resultado al revés es " + result);
  result = "";
} while (num != 0);
*/

// EJERCICIO LUCKY NUMBER

/* 
Se desea conocer el lucky number (número de la suerte) de cualquier persona.
El número de la suerte se consigue reduciendo la fecha de nacimiento a un
número de un solo dígito. Por ejemplo, la fecha de nacimiento de Emma es la
siguiente: 16-08-1973 16+8+1973=1997 1+9+9+7=26 2+6=8. El número de
la suerte de Emma será el 8.*/

let dia, mes, anyo, sumaFecha, total, totalFinal;

dia = parseInt(prompt("dime el día en que naciste"));
mes = parseInt(prompt("dime el mes en que naciste"));
anyo = parseInt(prompt("dime el año en que naciste"));

sumarFecha = (dia + mes + anyo).toString(); // 4 caracteres (por tanto, indice 0, 1, 2 y 3)

substring1 = parseInt(sumarFecha.substring(0, 1)); // 1
substring2 = parseInt(sumarFecha.substring(1, 2)); // 9
substring3 = parseInt(sumarFecha.substring(2, 3)); // 9
substring4 = parseInt(sumarFecha.substring(3, 4)); // 7

total = (substring1 + substring2 + substring3 + substring4).toString(); // 26
totalFinal = parseInt(total.substring(0, 1)) + parseInt(total.substring(1, 2)); // 8

alert("tu número de la suerte es el " + totalFinal);
