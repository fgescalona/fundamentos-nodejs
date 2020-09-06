const os = require("os");

// //64 o 32 bits
// console.log(os.arch());
// //SO: Linuex, Windows, Android
// console.log(os.platform());
// //cores
// console.log(os.cpus().length);
// Señales del sistema
// //console.log(os.constants);

// const SIZE = 1024;
// function kb(bytes) {
//   return bytes / SIZE;
// }

// function mb(bytes) {
//   return kb(bytes / SIZE);
// }

// function gb(bytes) {
//   return mb(bytes / SIZE);
// }

// //memoria libre en bytes
// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// // Memoria Total en GB en este caso
// console.log(gb(os.totalmem()));

// Directorio raiz del usuario
// console.log(os.homedir());

// // Directorio temporal
// console.log(os.tmpdir());

// // Servidores:
// console.log(os.hostname());

// Interfaz de red
console.log(os.networkInterfaces());
