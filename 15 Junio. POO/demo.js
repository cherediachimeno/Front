class Gato {
  // Vamos a definir la teoría de lo que es un gato.
  // El "plano" de un gato
  // Este gato va a tener atributos/propiedades y métodos/funciones
  // ******** ATRIBUTOS O PROPIEDADES *****
  edad;
  nombre;
  raza;
  energia;
  nivelDiversion;

  // ***** TENEMOS AQUÍ UN MÉTODO "ESPECIAL", AL QUE LLAMAMOS CONSTRUCTOR
  // Yo como programador@ puedo querer que los gatos que vayamos a crear
  // sean siempre, por ejemplo, siameses.
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.raza = "siamés";
    this.edad = edad;
    this.energia = 100;
    this.nivelDiversion = 10;
  }

  // ****** FUNCIONALIDADES (MÉTODOS) *****
  jugar() {
    console.log(`${this.nombre} está jugando`);
    this.nivelDiversion += 30;
    this.energia -= 30;
    if (this.nivelDiversion > 30) {
      this.maullar();
    }
    console.log(
      `nivel de diversión ${this.nivelDiversion} y su nivel de energía es de ${this.energia}`
    );
  }

  maullar() {
    console.log(`SORPRESA: ${this.nombre} está maullando`);
  }

  alimentar() {
    console.log(`Estás alimentando a ${this.nombre}`);
    this.energia += 30;
    this.nivelDiversion += 10;
  }

  dormir() {
    console.log(`${this.nombre} está durmiendo`);
    this.energia += 40;
    this.nivelDiversion -= 30;
  }
}

class Siames extends Gato {
  // Pero aquí nos tenemos que imaginar que hay 51 líneas de
  // código.
  saltar() {
    console.log(`el siamés está saltando`);
  }
}

let nombreGato = prompt("dime el nombre de tu gato");
let edad = prompt("dime la edad que tiene");
let interaccion;

// Una vez tengo esa información por parte del usuario, crearemos nuestro
// primer objeto.

// Aquí creo un objeto gato basado en la clase gato. Por tanto,
// tiene TODAS las características del gato que yo definí en la clase
// y también TIENE TODAS las funciones.
let miGato = new Gato(nombreGato, edad);

// Aquí creo otro objeto gato basado en la clase gato. Por tanto,
// tiene TODAS las características del gato que yo definí en la clase
// y también TIENE TODAS las funciones.
let Mauricio = new Gato("Mauricio", 5);

let siames = new Siames("siamesito", 10);
siames.jugar();
siames.saltar();
Mauricio.saltar();

let decision = prompt(
  "dime con qué gato quieres interactuar, con el tuyo (escribe miGato) o con Mauricio (escribe Mauricio) ?"
);

switch (decision) {
  case "miGato":
    interaccion = prompt("qué quieres hacer: jugar, alimentar o dormir?");
    if (interaccion == "jugar") miGato.saltar();
    else if (interaccion == "dormir") miGato.dormir();
    else if (interaccion == "alimentar") miGato.alimentar();
    break;
  case "Mauricio":
    interaccion = prompt("qué quieres hacer: jugar, alimentar o dormir?");
    if (interaccion == "jugar") Mauricio.jugar();
    else if (interaccion == "dormir") Mauricio.dormir();
    else if (interaccion == "alimentar") Mauricio.alimentar();
    break;
}
