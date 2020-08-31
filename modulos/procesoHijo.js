// Esto es muy util para acceder a más de una propiedad
const { exec, spawn } = require("child_process");

// Es equivalente a decir:
// const exec = require('child_process').exec;

// exec("node modulos/consola.js", (error, stdout, stderror) => {
//   if (error) {
//     console.error(error);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("El proceso terminó");
});
