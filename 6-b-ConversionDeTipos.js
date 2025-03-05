let telefono = 12341234;
console.log("El teléfono es " + String(telefono)); // haremos la conversión del número 12341234 para una cadena de caracteres o string “12341234” y así podemos hacer una concatenación entre strings

console.log("El teléfono es " +telefono.toString()); // toString() es otra forma de realizar esta conversión, está es forma es posible verla también en otros lenguajes de programación

let usuarioConectado = false;
console.log(String(usuarioConectado)); // esto realizará un conversión del tipo de dato booleano para string, va a mostrar un string igual a “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // ahora tendremos un string igual a “true”.

// Vamos calcular a área de un rectángulo
let ancho = "10";
let alto = "5";
console.log(Number(ancho) * Number(alto)); // De esta forma realizaremos una conversión de String para números, luego es realizada la multiplicación

console.log( + ancho * + alto); // obtendremos una conversión de String para números usando el signo + antes de las variables.

let miNombre = "Leonardo";
console.log(Number(miNombre)); // como la variable miNombre no es solo números, en realidad son solo letras, entonces retorna el error NaN (Not a Number, no es número);
console.log( + miNombre); // la conversión también devolverá NaN

usuarioConectado = false;
console.log(Number(usuarioConectado)); // obtendremos una conversión de dato booleano para número, en ese caso false (falso) retorna el número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // ahora obtendremos la conversión del valor booleano para valor numerico, en ese caso true (verdadero) retorna el número 1.

