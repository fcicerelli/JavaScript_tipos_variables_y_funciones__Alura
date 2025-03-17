// Función tradicional
function multiplicacionDeNumeros(a,b,c) {
  return resultado = a*b*c;
}

// Expresión de función
const multiplicaNumeros = function(a,b,c) {
  return resultado = a*b*c;
}

// Arrow Function
const multiplicaNumeroFuncionFlecha = (a, b, c) => a*b*c;
 
const potenciaDe2 = numero => numero * numero;

console.log(multiplicacionDeNumeros(2,3,4));
console.log(multiplicaNumeros(2,3,4));
console.log(multiplicaNumeroFuncionFlecha(2,3,4));
console.log(potenciaDe2(6));