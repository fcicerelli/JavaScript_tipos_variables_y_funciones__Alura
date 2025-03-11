const edad = 39;
const edadMinimaParaCompra = 18;
const edadComoTexto = "39";

console.log(edad > edadMinimaParaCompra); // true
console.log(edad != edadMinimaParaCompra);  // true

console.log(edad <= edadComoTexto); // hace un casteo automatico a número

console.log(edad === edadComoTexto); // false, compara también el tipo de datos
console.log(edad !== edadComoTexto); // true, compara también el tipo de datos

console.log(typeof(edad));
console.log(typeof(edadComoTexto));

console.log(typeof(edad) === typeof(edadComoTexto)); // compara también el tipo de datos

