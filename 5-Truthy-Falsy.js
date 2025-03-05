const usuarioConectado = false;
const cuentaDisponible = true;
const cadenaVacia = "";
// const variableNoDefinida; siempre se tiene que inicializar las constantes
let variableNoDefinida;
const variableNula = null;
const numeroEntero = 5;

//console.log(usuarioConectado == "0");
//console.log(cuentaDisponible == "1");
//console.log(cadenaVacia == false);
console.log(variableNoDefinida == false); // undefined es falso en un contexto d
console.log(variableNula == false); // null es falso en un contexto de comparación

console.log(variableNoDefinida);
console.log(variableNoDefinida == null);
console.log(variableNula == null);

console.log(typeof variableNula);
console.log(typeof variableNoDefinida);
console.log(variableNoDefinida == 'undefined');
console.log(typeof variableNoDefinida == 'undefined');

console.log(typeof variableNula);
console.log(typeof variableNoDefinida);
console.log(typeof numeroEntero);
console.log(typeof cadenaVacia);
console.log(typeof cuentaDisponible);