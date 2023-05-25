/*let coches = ["Saab", "Mercedes", "Renault", "Fiat"];
console.log(coches[0]);

for (let i = 0; i < coches.length; i++) {
  console.log(coches[i]);
}

for (let i = coches.length - 1; i >= 0; i--) {
  console.log(coches[i]);
}

/*
let letters = ["A", "B", "C"];
let i = 0;

while (i < letters.length) {
  console.log(letters[i]);
  i++;
} */

//  2                 >= 0
/*
let letters = ["A", "B", "C"];
let i = letters.length - 1;

while (i >= 0) {
  console.log(letters[i]);
  i--;
} */
/*
let letters = ["A", "B", "C"];

for (let i of letters) {
  console.log(i);
}*/
/*
const transportes = [
  ["Saab", "Citroen", "Tesla"], // transportes[0].length -> 3
  ["B-737", "B-739", "B-777"], // transportes[1]
  ["UT447", "UT448", "252", "UT449", "250"], // transportes[2].length -> 5
];

for (let i = 0; i < transportes.length; i++) {
  for (let j = 0; j < transportes[i].length; j++) {
    console.log(transportes[i][j]);
  }
}

console.log(transportes[1][1]);*/
/*
const trenes = [
  [
    ["UT447", "UT451"], //trenes[0][0]
    ["250", "251", "252", "253"], //trenes[0][1]
    ["UT448", "UT449"], //trenes[0][2]
  ],
  [[4], [5], [6]],
  [[7], [8], [9]],
];

trenes[0][1][2]; // 252
trenes[0][2][0]; // UT 448
trenes[0][1][3]; // UT 253

for (let i = 0; i < trenes.length; i++) {
  for (let j = 0; j < trenes[i].length; j++) {
    for (let k = 0; k < trenes[i][j].length; k++) {
      console.log(trenes[i][j][k]);
    }
  }
}

let coder = ["Front", "Back"];
coder[0];

for (let i = 0; i < coder.length; i++) {
  console.log(coder[i]);
}

let programacion = [
  ["Front", "Back"],
  ["Servidor", "Cliente"],
];

programacion[0][0]; //

for (let i = 0; i < programacion.length; i++) {
  for (let j = 0; j < programacion[i].length; j++) {
    console.log(programacion[i][j]);
  }
}

let ordenadores = [
  [
    ["Front", "Back"],
    ["Servidor", "Nube"],
  ],
  ["Servidor", "Cliente"],
];

ordenadores[0][1][0];

for (let i = 0; i < ordenadores.length; i++) {
  for (let j = 0; j < ordenadores[i].length; j++) {
    for (let k = 0; k < ordenadores[i][j].length; k++) {
      console.log(ordenadores[i][j][k]);
    }
  }
}
*/
//     0         1        2
let array = ["libros", "cómics", "mangas"];
let caja = "";
// 3
for (let i = 0; i < array.length; i++) {
  if (i == array.length - 1) {
    caja += array[i] + ".";
  } else {
    caja += array[i] + ", ";
  }
}

alert("en mi caja tengo " + caja);
