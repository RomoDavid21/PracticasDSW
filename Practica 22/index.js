//Arreglo
var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

//Visualizacion
alert(semana);

//Eliminar el ultimo
semana.pop();
alert(semana);

//Eliminar el primero
semana.shift();
alert(semana);

//Agregar al ultimo
semana.push("Otro dia");
alert(semana);

//While 
var contador = 1;
var resultado = 0;

while(contador < 6){
  resultado += contador;
  contador++;
}

alert(resultado);

//Do While
var numero = 5;
var factorial = 1;

do{
  factorial *= numero;
  numero--;
}while(numero > 0);

alert(factorial);

//For
var i;
var palabras = "";

for(i = 0; i < 7; i++){
  if(i == 3){
    palabras += "Soy el 4to\n"
  }else{
    if(i == 6){
      palabras += "Acabamos de saludar."
    }else{
      palabras += "Hola\n"
    }
  }
}

alert(palabras);

//Fors 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Usando un bucle for-in
for (var indice in meses) {
  console.log(meses[indice]);
}

// Usando un bucle forEach
meses.forEach(function(mes) {
  console.log(mes);
});

// Usando un bucle for-of
for (var mes of meses) {
  console.log(mes);
}

// Remover el mes de "Julio"
meses.splice(6, 1);

// Agregar "Diciembre" fuera del arreglo
meses.push("Diciembre");

// Iterar sobre todos los meses, incluido "Diciembre"
for (var mes of meses) {
    console.log(mes);
}


