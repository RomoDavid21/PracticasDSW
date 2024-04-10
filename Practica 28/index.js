// Crea las variables
function calculateGrades() {
    var subject1 = document.getElementById("subject1").value;
    var subject2 = document.getElementById("subject2").value;
    var subject3 = document.getElementById("subject3").value;
    var subject4 = document.getElementById("subject4").value;
    var subject5 = document.getElementById("subject5").value;
    var subject6 = document.getElementById("subject6").value;
    var subject7 = document.getElementById("subject7").value;
    var subject8 = document.getElementById("subject8").value;
  
    // Validar que los campos no estén vacíos
    if (subject1 == "" || subject2 == "" || subject3 == "" || subject4 == "" || subject5 == "" || subject6 == "" || subject7 == "" || subject8 == "") {
      alert("Por favor, llene todas las calificaciones, existen campos vacios.");
      if (subject1 == "") {
        document.getElementById("subject1").focus();
      } else if (subject2 == "") {
        document.getElementById("subject2").focus();
      } else if (subject3 == "") {
        document.getElementById("subject3").focus();
      } else if (subject4 == "") {
        document.getElementById("subject4").focus();
      } else if (subject5 == "") {
        document.getElementById("subject5").focus();
      } else if (subject6 == "") {
        document.getElementById("subject6").focus();
      } else if (subject7 == "") {
        document.getElementById("subject7").focus();
      } else if (subject8 == "") {
        document.getElementById("subject8").focus();
      }
      return;
    }

    if (subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100 || subject3 < 0 || subject3 > 100 || subject4 < 0 || subject4 > 100 || subject5 < 0 || subject5 > 100 || subject6 < 0 || subject6 > 100 || subject7 < 0 || subject7 > 100 || subject8 < 0 || subject8 > 100) {
        alert("Por favor, ingrese calificaciones válidas entre 0 y 100.");
        return;
      }
  
    // Calcular promedio
    var total = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3) + parseFloat(subject4) + parseFloat(subject5) + parseFloat(subject6) + parseFloat(subject7) + parseFloat(subject8);
    var average = total / 8;
  
    // Mostrar promedio
    alert("El promedio final es: " + average.toFixed(2));
  
    // Verificar si está exento de ordinario o no
    if (average > 85) {
      alert("¡Felicidades! Estás exento de ordinario.");
    } else {
      alert("Debes presentar examen ordinario.");
    }
  }