function avisoHuracan(hayUnHuracan) {
  if (hayUnHuracan) {
      alert("¡Hay un Huracán!");
  } else {
      alert("Está Soleado");
  }
}

var hayHuracan = prompt("¿Hay un huracán? (true/false)");
hayHuracan = hayHuracan.toLowerCase();

if (hayHuracan == "true" || hayHuracan == "false") {
  avisoHuracan(hayHuracan == "true");
} else {
  alert("Por favor, ingresa true o false.");
}
