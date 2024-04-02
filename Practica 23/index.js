var numero;

function comparar(numero) {
  if ((numero % 2) == 0) {
      alert("El número es par");
  } else {
      alert("El número es impar") ;
  }
}

numero = prompt("Ingrese un numero:")
comparar(numero);