var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2){
  alert("Numero 1 no es mayor a numero 2.");
  if (numero2 >= 0){
    alert("Numero 2 es positivo.");
    if ((++numero1) < numero2 ){
      alert("Incrementar uno en Numero 1, no lo hace mayor que Numero 2.")
    }
  }
}