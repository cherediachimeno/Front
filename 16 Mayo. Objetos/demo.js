const persona1 = {
  nombre: "Maria",
  edad: 33,
  profesion: "coder",
  hobbies: "surf",
  mascota: {
    perro: {
      nombre: "Toby",
      edad: 5,
      origen: "protectora",
    },
    gato: "Mauricio",
    conejo: "Rabbit",
  },
  estaEstudiante: false,
};

// pregunto al usuario: dime la persona de la que quieres información.
// bridgette.

if (eleccion == "Bridgette") {
  console.log(persona.Bridgette.about);
} else if (eleccion == "Mateo") {
  console.log(persona.Mateo.about);
}

console.log(
  "Probando " + persona.Mateo.about + " y esto es " + persona.Bridgette.about
);
console.log(
  `Probando ${persona.Mateo.about} y esto ${persona.Bridgette.about}`
);

console.log(persona1.mascota.perro.origen);
console.log(persona1["mascota"]["gato"]);
/* 
persona1.hobbies = "jugar a fútbol";
persona1["mascota"] = "Blacky";
console.log(persona1);

delete persona1.hobbies;
delete persona1["mascota"];

const fichaPelicula = {
  nombre: "James Bond contra el Dr. No",
  actores: "Sean Connery...",
  precioEntrada: 8.95,
};

let descuento = prompt("tienes algún descuento");

if (descuento == "si") {
  fichaPelicula.precioEntrada = 5.95;
}

const persona3 = {
  nombre: "Aura",
  edad: 56,
  profesion: "diseñadora",
  hobbies: "leer",
  mascota: "no tiene",
  estaEstudiante: false,
};

/*
// Guardame datos de: Carla, 17 años, estudiante, le gusta el Zelda y odia los perros

let nombre3 = "Carla";
let edad3 = 17;
let profesion3 = "estudiante";
let hobbies3 = "Zelda";
let mascota3 = "odia los perros";
let estaEstudiante = true; */
