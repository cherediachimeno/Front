/*

let edad = 10;
/*
if (edad > 10) {
  console.log("eres mayor a 10");
}

switch (edad) {
  case 1:
    "tienes 1 año";
    break;
  case 2:
    "tienes 2 años";
    break;
  default:
    "tienes más 2 años";
} */
/*
let lista = ["Nil", "Didac", "Constanza", "Javier", "Juanita", "Carlos"];

for (let i = 0; i < lista.length; i++) {
  if (i == lista.length / 2) {
    console.log("he llegado a la mitad");
    continue;
  } else if (i == lista.length / 2 + 1) {
    console.log("he llegado a la mitad + 1");
    continue;
  }

  console.log("estoy dando vueltas");
} */
/*
lista[0] = "Eduard";
lista.push("Maria");
lista.unshift("David"); */
/*
let alumnas = {
  Maria: {
    nombreCompleto: "Maria Juárez",
    edad: 41,
    profesion: "programadora",
  },
  Mateo: {
    nombreCompleto: "Mateo Rodríguez",
    edad: 51,
    profesion: "maquinista",
  },
};

let listaCompleta = "";

for (let x in alumnas) {
  listaCompleta += `- ${alumnas[x].nombreCompleto} tiene ${alumnas[x].edad} años y de profesión ${alumnas[x].profesion} \n`;
}

console.log(listaCompleta);
*/

console.log("el precio final es de " + calculoFinal(13));

function calculoFinal(precio) {
  return precio + 3 + 3.5;
}
