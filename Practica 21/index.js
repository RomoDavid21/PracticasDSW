var opcion, resultado = 0;
var peso = 80;
var peso_tierra = 9.81;
var peso_marte = 3.71;
var peso_jupiter = 24.79;

opcion = prompt("Ingrese una opcion (1 o 2):");

if(opcion == 1){
  resultado = (peso * peso_marte)/peso_tierra;
  alert("Su peso es: "+resultado);
}else{
  if(opcion == 2){
    resultado = (peso * peso_jupiter)/peso_tierra;
    alert("Su peso es: "+resultado);
  }else{
    alert("No existe esta opcion");
  }
}