// Crearemos un programa que me pregunte mi edad y en base a ello imprima por pantalla
// feliz cumpleaños tantas veces edad tengo.
/*
let edad = Number(prompt("dime tu edad"));

for (let i = 0; i <= edad; i++) {
  console.log("feliz cumpleaños, estamos en la vuelta " + i);
}

/*

let lista = [
  "Constanza",
  "Emma",
  "Laura",
  "Cristina",
  "Javier",
  "Isaac",
  "Levi",
];

/*
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

let i = 0;

while (i < lista.length) {
  alert(lista[i]);
  i++;
}

let edad = Number(prompt("dime tu edad"));
alert(edad);

while (edad >= 18) {
  alert("eres mayor de edad");
  edad = Number(
    prompt(
      "vuelve a decirme la edad. Te seguiré preguntando hasta que digas que eres menor"
    )
  );
}

*/ /*
let pass = 0;

do {
  pass = prompt("dime la contraseña");

  if (pass == "1234") {
    pass = true;
  }

} while (pass != true);

alert("login correcto");
*/

let count = 0;

do {
  console.log("Hola " + count);
  count++;
} while (count <= 50);
