let estudianteObjeto = {
  nombre: "Carlos",
  profesion: "coder",
};

let estudianteArray = [
  "Suren", // 0
  "Cristina", // 1
  "Javier", // 2
  "Miriam",
  true,
  (informacionClave = {
    // 5
    nombre: "estudiante",
    grupo: 5,
    mascotas: {
      nombre: "Toby",
      edad: 5,
      especie: "perro",
    },
  }),
  18, // 6
  (lista2 = ["hola", "adios", "probando", "CodeOp", (arrayInterno = ["hola"])]), // 7
  1991, // 8
  "String", // 9
];

console.log(estudianteArray.length);

console.log(estudianteArray[5].mascotas.nombre);
console.log(estudianteArray[5]["mascotas"]["nombre"]);

console.log(estudianteArray[7][4][0]);

// 0  1   2   3
let nota = [9, 10, 10, 2];
let coche = ["Saab", "Renault", "Volvo"];
coche = 10;
const trenes = ["UT447", "UT448", "252", "UT101", "UT100"];

//         INDICE POR EL QUE EMPIEZAS     ELEMENTOS A BORRAR    ELEMENTO A AÑADIR
console.log(trenes);
trenes.splice(2, 2);
console.log(trenes);

/*
trenes.push("UT465");
trenes.push("UT101");
console.log(trenes);
trenes.pop();
console.log(trenes);


coche[1]; // Renault
coche[0]; // Saab
coche[2]; // Volvo
*/
