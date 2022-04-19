const MissionCommander = require('./app/missionCommander'); //se importa la clase, no es necesario poner .js en el arhcivo, es sufucuiente con el nombre
const carlo = new MissionCommander("Carlo") //se crea un objeto a paertir de la clase
const abraham = new MissionCommander("Abraham") //se crea un segundo objeto a partir de la clase
const horacio = new MissionCommander("Horacio") //se crea un tercer objeto a partir de la clase
console.log(carlo.name)
console.log(abraham.name);
console.log(horacio.name);