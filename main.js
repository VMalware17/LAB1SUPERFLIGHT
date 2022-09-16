function precio() {
  let pasajeros = document.getElementById("CantidadPasajeros").value;
  let ciudad = document.getElementById("destino").value;
  let pesoMaleta = document.getElementById("PesoMaletas").value;
  let tipoAsiento = document.getElementById("asiento").value;
  let totalAsiento = 0;
  let tiquete = 0;
  let pagoAdicional = 0;
  let totalPago = 0;

  if (ciudad == 1) {
    tiquete = 100000 * pasajeros;
  }
  if (ciudad == 2) {
    tiquete = 90000 * pasajeros;
  }
  if (ciudad == 3) {
    tiquete = 150000 * pasajeros;
  }
  if (ciudad == 4) {
    tiquete = 75000 * pasajeros;
  }
  if (ciudad == 5) {
    tiquete = 105000 * pasajeros;
  }
  if (pesoMaleta > 50) {
    pagoAdicional = (pesoMaleta - 50) * 15000;
  }
  if (tipoAsiento == 1) {
    totalAsiento = 0 * pasajeros;
  }
  if (tipoAsiento == 2) {
    totalAsiento = 20000 * pasajeros;
  }
  if (tipoAsiento == 3) {
    totalAsiento = 40000 * pasajeros;
  }
  totalPago =
    "la ciudad donde usted va es: " +
    ciudad +
    tiquete +
    pagoAdicional +
    totalAsiento;
  let factura = document.getElementById("capaMostrar");

  factura.innerHTML =
    "FACTURA DE VIAJE" +
    "<br>" +
    " " +
    "<br>" +
    "Ciudad de destino: " +
    ciudad +
    "<br>" +
    "Personas que viajan: " +
    pasajeros +
    "<br>" +
    "Peso de las maletas: " +
    pesoMaleta +
    "<br>" +
    "Tipo de sillas: " +
    tipoAsiento +
    "<br>" +
    "Precio del viaje: " +
    tiquete +
    "<br>" +
    "Precio adicional por maletas: " +
    pagoAdicional +
    "<br>" +
    "Precio de las sillas: " +
    totalAsiento +
    "<br>" +
    "El total a pagar por el vuelo es: " +
    totalPago;
}
