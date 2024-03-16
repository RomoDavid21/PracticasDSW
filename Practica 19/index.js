var valores = [true, 10, false, "codigo", "herramientas", 7];

var resultado1, resultado2, resultado3, suma, resta, multiplicacion, division;

resultado1 = valores[4] > valores[3];
resultado2 = valores[0] == valores[2];
resultado3 = valores[0] > valores[2];
suma = valores[1] + valores[5];
resta = valores[1] - valores[5];
multiplicacion = valores[1] * valores[5];
division = valores[1] / valores[5];

alert("Objetivo 1:\n"+resultado1+"\nObjetivo 2:\n"+resultado2+"\n"+resultado3+"\nObjetivo 3:\n"+suma+"\n"+resta+"\n"+multiplicacion+"\n"+division);