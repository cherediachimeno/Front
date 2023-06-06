let euros = Number(prompt("dame la cantidad en euros que quieres convertir"));
let moneda = prompt(
  "introduce moneda: dólar o yen (escribe la moneda de manera exacta)"
);
let resultado;
let funcionamiento = false;

moneda = moneda.toLowerCase();

conversor(euros, moneda);

function conversor(euros, moneda) {
  if (moneda == "dólar" || moneda == "dolar") {
    resultado = euros * 1.28611;
    funcionamiento = true;
  } else if (moneda == "yen") {
    resultado = euros * 129.852;
    funcionamiento = true;
  }

  if (funcionamiento)
    alert(`el cambio de ${euros} euros equivale a ${resultado} ${moneda}`);

  /*
  switch (moneda) {
    case "dólar":
      resultado = euros * 1.28611;
      funcionamiento = true;
      break;
    case "dolar":
      resultado = euros * 1.28611;
      funcionamiento = true;
      break;
    case "yen":
      resultado = euros * 129.852;
      funcionamiento = true;
      break;
    default:
      alert("moneda no reconocida");
  }

  if (funcionamiento)
    alert(`el cambio de ${euros} euros equivale a ${resultado} ${moneda}`); */
}
