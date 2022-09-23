function precio() {
  let pasajeros = Number(document.getElementById("CantidadPasajeros").value);
  let ciudad = document.getElementById("destino").value;
  let pesoMaleta = Number(document.getElementById("PesoMaletas").value);
  let tipoAsiento = document.getElementById("asiento").value;
  let totalAsiento = 0;
  let tiquete = 0;
  let pagoAdicional = 0;
  let totalPago;

  if (ciudad == "Medellin") {
    tiquete = 100000 * pasajeros;
  }
  if (ciudad == "Cali") {
    tiquete = 90000 * pasajeros;
  }
  if (ciudad == "Bogota") {
    tiquete = 150000 * pasajeros;
  }
  if (ciudad == "Pereira") {
    tiquete = 75000 * pasajeros;
  }
  if (ciudad == "Manizales") {
    tiquete = 105000 * pasajeros;
  }
  if (pesoMaleta > 50) {
    pagoAdicional = (pesoMaleta - 50) * 15000;
  }
  if (tipoAsiento == "Normal") {
    totalAsiento = 0 * pasajeros;
  }
  if (tipoAsiento == "Ejecutiva") {
    totalAsiento = 20000 * pasajeros;
  }
  if (tipoAsiento == "VIP(Incluye copa de Whiskey)") {
    totalAsiento = 40000 * pasajeros;
  }
  totalPago = tiquete + pagoAdicional + totalAsiento;
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
