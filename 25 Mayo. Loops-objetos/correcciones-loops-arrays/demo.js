let allAddress = [];
let direccion = "";

const addressList = [
  {
    line1: "Carrer de CodeOp",
    line2: 42,
    city: "Barcelona",
    country: "Spain",
  },
  {
    line1: "Carrer de Tech",
    line2: 200,
    city: "Madrid",
    country: "Spain",
  },
  {
    line1: "Carrer de JSON",
    line2: 22,
    city: "Seville",
    country: "Spain",
  },
];

/* Crea un 'nested loop' que afegeixi cada adreça
a l'array "allAdress". En comptes d'afegir-les
com a objectes però, recorre cadascun dels objectes
per concatenar els seus valors en un string.

El teu resultats hauria de ser com aquest:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech 200 Madrid Spain", "Carrer de JSON Seville Spain"]

Pista: intenta crear una variable entre els loops
per emmagatzemar cada adreça com a string abans
d'introduir-la a l'array "allAdress
*/

for (let i = 0; i < addressList.length; i++) {
  direccion = `${addressList[i].line1} ${addressList[i].line2} ${addressList[i].city} ${addressList[i].country}`;
  allAddress.push(direccion);
}

console.log(allAddress);
