// Traernos el módulo

const fs = require("fs");

// la ruta del archivo y un callback para hacer algo despues de leer
function leer(ruta, callback) {
  fs.readFile(ruta, (error, data) => {
    // aqui el archivo ya está leido
    callback(data.toString());
  });
}

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.error("Ocurrió un error escribiendo en el archivo", error);
    } else {
      console.log("La escritura del archivo se realizo correctamente");
    }
  });
}

function borrar(ruta, callback) {
  fs.unlink(ruta, callback);
}

// escribir(
//   __dirname + "/archivo1.txt",
//   "Soy un archivo nuevo con más texto",
//   console.log
// );
//leer(__dirname + "/archivo.txt", console.log);

borrar(__dirname + "/archivo1.txt", console.log);
