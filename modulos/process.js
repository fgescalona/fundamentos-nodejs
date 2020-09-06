//const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("Gerardo, el proceso terminó");
  setTimeout(() => {
    console.log("Esto no se va a ejecutar nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto SI se va a ver");
}, 0);

// Escuchar una excepción que nadie ha capturado
process.on("uncaughtException", (error, origen) => {
  console.log("Vaya, se nos ha olvidado capturar un error");
  //console.error(error);
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});

funcionQueNoExiste();

//console.log("Esto si el error no se recoje, no sale");

// Para promesas que se han rechazado y no hay un catch
//process.on("uncaughtRejection");
