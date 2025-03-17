console.log(multiplicaNumeros(1,2,3));

// si es válido porque es una función
// y funciona el hoisting
function multiplicaNumeros(a,b,c) {
  const resultado = a*b*c;
  return resultado;
}

// ReferenceError: 
// Cannot access 'multiplicaNumeros' before initialization
// no es válido y no funciona el hoisting
/*
const multiplicaNumeros = function(a,b,c) {
  const resultado = a*b*c;
  return resultado;
}
*/

