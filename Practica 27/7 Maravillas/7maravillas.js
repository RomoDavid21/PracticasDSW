//Creacion de variables para almacenar/arreglos para almacenar informacion
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1];
let opciones = [];

//Con el metodo push se ingresan los elementos al arreglo opciones
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

//Contadores
let posActual = 0;
let cantidadAcertadas = 0;

//Funcion para iniciar el juego
function comenzarJuego(){
    //Contadores
    posActual = 0;
    cantidadAcertadas = 0;
    //Obtiene elementos del html por su id y se utiliza el metodo style para indicar como se mostraran en pantalla
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    //llamada al metodo cargar maravilla
    cargarMaravilla();

}

//Funcion para cargar los svg de las maravillas
function cargarMaravilla(){
    //Condicion que lee el tamaño del arreglo de las maravillas e indica que termina el juego y cuando cambiar las opciones
    if(maravillas.length <= posActual){
        //Llamada a la funcion de terminar juego
        terminarJuego();
    }
    else{
        //Llamada a la funcion de limpiar opciones
        limpiarOpciones();

        //Optiene los ids del archivo html
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Funcion para limpiar opciones del juego
function limpiarOpciones(){
    //Optiene los ids del archivo html
    //E classname le da ese atributo al elemento
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

//Funcion para comprobar las respuests elegidas
function comprobarRespuesta(opElegida){
//Condicion que compara la opcion elegida con la opcion correcta
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        //Suma al contador de acertadas
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //suma al contador de maravillas
    posActual++;
    setTimeout(cargarMaravilla,1000);
}

//Funcion para terminar el juego
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //Muestra en pantalla cuantas corectas y cuantas incorrectas son
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Funcion para volver a iniciar el juego
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}