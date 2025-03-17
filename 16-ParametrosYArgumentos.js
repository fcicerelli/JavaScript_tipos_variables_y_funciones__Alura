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

function imprimirTexto(texto1, texto2, texto3) {
  console.log(texto1);
  console.log(texto2);
  console.log(texto3);
}

function muchoTexto(...texto) {
  console.log(texto);
  if(texto.length > 0) {
    console.log("****");
    texto.map((oneTexto) => {
      console.log(oneTexto)
    });
    console.log();
  }
}

// Ejecución
console.log(sumaYPorcentaje(50,15));
console.log(sumaYPorcentaje(17,72));

console.log();

saludar();
mostrarTexto('Hola, soy un programa de JavaScript');  
mostrarTexto('Otro texto');
mostrarTexto(); 

console.log();

imprimirTexto("hola");
imprimirTexto("hola", "bienvenido");
imprimirTexto("hola", "bienvenido", "a mi programa");

console.log();

muchoTexto("hola");
muchoTexto("hola", "bienvenido");
muchoTexto("hola", "bienvenido", "a mi programa");