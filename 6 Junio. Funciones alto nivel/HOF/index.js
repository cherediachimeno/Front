// first-class functions -> tradicionales, las que hemos visto
/*
saludar();

function saludar() {
  console.log("hola mundo");
}

const calculando = function (x) {
  return x * x;
};

creandoSaludos("formal");

function creandoSaludos(tipo) {
  if (tipo == "formal") {
    alert("buenos días");
  } else {
    alert("eii");
  }
}*

Higher-Order Functions -> son funciones que operan con otras funciones*/

// HOF - MAP
// Sin usar HOF
/*
const lista = [1, 2, 3];
const listaVacia = [];

for (let i = 0; i < lista.length; i++) {
  listaVacia.push(lista[i] * 2);
}

alert(listaVacia);
*/
// Usando HOF (concretamente el tipo MAP, similar al for pero más óptimo)

//const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
const listaNumerosVacia = listaNumeros.map(function (item) {
  return item * 2;
}); */

/*const listaNumerosVacia = listaNumeros.map((item) => item * 2);

alert(listaNumerosVacia);*/
/*
const aniversarios = [1992, 1995, 2000, 1985, 1972, 1965, 1990];
const years = aniversarios.map(
  (year) => `Nació en ${year} y tiene ${2023 - year}`
);
alert(years);

const lista = ["Saab"];
lista[0] = "Fiat";*/

// HOF - Filter
// EJEMPLO SIN USAR FILTER
/*
const personas = [
  { nombre: "Marta", edad: 21 },
  { nombre: "Carmen", edad: 51 },
  { nombre: "Constanza", edad: 2 },
  { nombre: "Thainá", edad: 16 },
];

const mayoresEdad = [];
const menores = [];

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad >= 18) {
    mayoresEdad.push(personas[i]);
  } else {
    menores.push(personas[i]);
  }
}

console.log(mayoresEdad);
console.log(menores);*/
/*
const lista = [
  { nombre: "Marta", edad: 21 },
  { nombre: "Carmen", edad: 51 },
  { nombre: "Constanza", edad: 2 },
  { nombre: "Thainá", edad: 16 },
];

const mayoresEdad = lista.filter((persona) => persona.edad >= 18);
const menores = lista.filter((persona) => persona.edad < 18);
*/

// HOF - REDUCE

const array = [5, 7, 1, 8, 4];
const suma = array.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
});

alert(suma);
