function manipularDOM() {
  // PRIMERO, DEBO RECOGER LOS DATOS QUE
  // EL USUARIO ME ESTÁ APORTANDO (ES DECIR,
  // NOMBRE, APELLIDO Y EDAD)
  let nombre = document.getElementById("fname").value;
  let apellido = document.getElementById("fsurname").value;
  let age = document.getElementById("fage").value;

  // SEGUNDO, IMPRIMIR POR PANTALLA LO QUE
  // QUERAMOS

  if (age >= 18) {
    document.getElementById("print").innerHTML += `
    <div class="card" onclick="clicando()">
        <h1>Nombre: ${nombre}</h1>
        <h3>Apellido: ${apellido}</h3>
        <h3>Edad: ${age}</h3>
    </div>
    `;
  } else {
    document.getElementById("print").innerHTML += `
    <div class="card menor" onclick="clicando()">
        <h1>Nombre: ${nombre}</h1>
    </div>
    `;
  }
}

function clicando() {
  document.getElementById("formulario").style.display = "none";
}
