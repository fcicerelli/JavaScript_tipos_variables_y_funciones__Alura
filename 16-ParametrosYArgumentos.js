// Declaración
function sumaYPorcentaje(a,b) {
  let c = a + b;  
  c *= 10/100;
  
  function multiplicaNumeros(a,b) {
    return a * b;
  }
  
  return c + multiplicaNumeros(a,b);
}

function saludar() {
  console.log('Hola!');
}

function mostrarTexto(texto = 'Texto por defecto') {
  console.log(texto);
}

// Ejecución
console.log(sumaYPorcentaje(50,15));
console.log(sumaYPorcentaje(17,72));

saludar();
mostrarTexto('Hola, soy un programa de JavaScript');  
mostrarTexto('Otro texto');
mostrarTexto(); 