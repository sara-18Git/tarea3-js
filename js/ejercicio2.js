let porBateria = parseInt(
  prompt("ingrese el nivel de batería (un número del 0 al 100)")
);
if(porBateria >=80){console.log("Batería llena 🔋");
}
else if(porBateria >=30){
    console.log("Batería media ⚠️");
    
}
else{
    console.log("Batería baja, conectá el cargador 🔌");
    
}