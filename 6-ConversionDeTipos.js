// Conversión implícita
const edad = 39;
const edadUsuario = "39";

console.log(edad == edadUsuario); //true
console.log(edad === edadUsuario); //false

console.log(edad + edadUsuario); // 3939
console.log(edad - edadUsuario); // 0




// Conversión explícita
console.log(edad + Number(edadUsuario)); // 78
console.log(String(edad) + edadUsuario); // 3939
console.log(edad + Number("39a")); // NaN

console.log(edad.toString() + "39a"); 