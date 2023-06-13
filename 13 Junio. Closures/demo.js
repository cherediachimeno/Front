// Un closure es una función que se crea dentro
// de otra función y que tiene acceso a las variables
// de su ámbito padre, incluso aunque esta
// última haya terminado de ejecutarse.
// Podemos decir, por tanto, que un closure
// es una función que "recuerda" el ámbito
// en el que se creó.
/*
console.log(sumar(44)); // dos procesos aquí: a) invoco función y se
// ejecutan todos los procesos de la función.
// b) me imprime el return

function sumar(a) {
  return function (b) {
    return a + b;
  };
}

let suma5 = sumar(5); // en suma5 estoy grabando la función que
// me devuelve por el return el padre
// el padre es sumar(a), el hijo es function(b)

// function suma5 (b) {
// return 5 + b
//}

console.log(suma5(2));
console.log(suma5(7));*/
/*
function contador() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let contar = contador();
contar();
contar();
contar();
contar();*/

let vecesEnTienda = tienda(); // vecesEnTienda será la función hija
// de tienda.
// Como hemos dicho, las closures "recuerdan"
// valores del padre.
console.log(vecesEnTienda);
vecesEnTienda();
vecesEnTienda();
vecesEnTienda();
vecesEnTienda();
vecesEnTienda();
vecesEnTienda();

function tienda() {
  let mensaje = "Bienvenida a la tienda. Has visitado la tienda estas veces: ";
  let count = 0;
  return function () {
    count++;
    console.log(mensaje + count);
  };
}

// function vecesEnTienda {
// va a recordar las variables internas del padre. Es decir
// sabe qué valor tiene count y qué valor tiene mensaje

//  count++;
// console.log(mensaje + count)
// }
/*
function tiendaConvencional() {
  let mensaje = "Bienvenida a la tienda. Has visitado la tienda estas veces: ";
  let count = 0;
  count++;
  console.log(mensaje + count);
}*/

function createPasswordChecker(newPassword) {
  let password = newPassword;
  return function checkPassword(guess) {
    return guess === password;
  };
}

let comprobadorPassword = createPasswordChecker("CODEOP");
console.log(comprobadorPassword("CODEOP"));
