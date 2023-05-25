const curso = {
  nombre: "Front End",
  alumnas: 30,
  profesoras: {
    profe1: "Carlos",
    profe2: "Guiomar",
    profe3: "Irene",
  },
  esFlexible: true,
};
/*
for (let key in curso) {
  if (key == "profesoras") {
    for (let key in curso.profesoras) {
      console.log(key + ": " + curso.profesoras[key]);
    }
  } else {
    console.log(key + ": " + curso[key]);
  }
}
*/
const person = {
  name: "Sofia",
  age: 30,
  coder: true,
};

for (let key in person) {
  console.log(person[key]);
}

const array = [
  (persona = {
    name: "Sofia",
    age: 30,
    intereses: {
      interes1: "coches",
      interes2: "ordenadores",
    },
    coder: true,
  }),
  (persona2 = {
    name: "Maria",
    age: 35,
    intereses: {
      interes1: "pintar",
    },
    coder: false,
  }),
];

for (let i = 0; i < array.length; i++) {
  console.log(
    `Intereses de 
    ${array[i].name}: 
    ${array[i].intereses.interes1} 
    ${array[i].intereses.interes2} `
  );
}

for (let i = 0; i < array.length; i++) {
  for (let key in array[i]) {
    console.log(array[i][key]);
  }
}
