let opciones = parseInt(
  prompt(
    "Menú de cajero automático\n" +
      "1-Consultar saldo\n" +
      "2-Retirar dineros\n" +
      "3-Depositar dinero\n" +
      "4-Ver últimos movimientos\n" +
      "5-Cambiar clave:\n" +
      "6-Transferir dinero:\n" +
      "7-salir:\n"
  )
);
let opcion = "";
switch (opciones) {
  case 1:
    opcion = "Mostrando saldo disponible...";
    break;
  case 2:
    opcion = "Iniciando proceso de retiro...";
    break;
  case 3:
    opcion = "Depósito en curso...";
    break;
  case 4:
    opcion = "Depósito en curso...";
    break;
  case 5:
    opcion = "Redirigiendo para cambiar la clave...";
    break;
  case 6:
    opcion = "Preparando transferencia...";
    break;
  case 7:
    opcion = "Gracias por usar el cajero. ¡Hasta pronto!";
    break;
  default:
    opcion = "Opción inválida. Por favor, seleccioná una opción del 1 al 7.";
    break;
}
console.log(opcion);

