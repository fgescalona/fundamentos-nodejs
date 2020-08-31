var tabla = [
  {
    nombre: "Gerardo",
    apellido: "Escalona",
  },
  {
    nombre: "Sandra",
    apellido: "Pérez",
  },
];

console.table(tabla);

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

console.group("diasSemana");
for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}
console.groupEnd("diasSemana");
