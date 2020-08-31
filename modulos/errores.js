function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi función asíncrona");
      callback(error);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona((error) => {
    console.log("Error: ", error.message);
  });
} catch (error) {
  console.error("Ha ocurrido un error: ");
  console.error(error.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aquí está hasta el final");
