function OperacionesMatematicas(operacion, a, b) {
  var resultado = 0;
  switch (operacion) {
      case "sumar":
          resultado = a + b;
          break;
      case "restar":
          resultado = a - b;
          break;
      case "multiplicar":
          resultado = a * b;
          break;
      case "dividir":
          if (b != 0) {
              resultado = a / b;
          } else {
              alert("¡Error! No se puede dividir por cero.");
              return;
          }
          break;
      case "residuo":
          if (b != 0) {
              resultado = a % b;
          } else {
              alert("¡Error! No se puede dividir por cero para obtener el residuo.");
              return;
          }
          break;
      default:
          alert("Operación no válida.");
          return "0";
  }
  alert("El resultado de la operación es: " + resultado);
}

var operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir, residuo):");
operacion = operacion.toLowerCase();
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

OperacionesMatematicas(operacion, numero1, numero2);
