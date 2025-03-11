const nombre = "Leonardo";
const paisNacimieno = "Venezuela";
const paisDomicilio = "Chile";
const deporteFavorito = "Voley";

const texto = 'Mi nombre es ' + nombre + ', naci en '
              +paisNacimieno+ ".\n"
              + 'Actualmente vivo en ' +paisDomicilio+".\n"
              + 'Mi deporte favorito es ' +deporteFavorito+ ".";

const textoTemplate = `Mi nombre es ${nombre}, naci en ${paisNacimieno}.
Actualmente vivo en ${paisDomicilio}.
Mi deporte favorito es ${deporteFavorito}.`;

console.log(texto);
console.log("");
console.log(textoTemplate);
console.log("");

const edad = 39;
const bebidaMayorEdad= "cerveza";
const bebidaMenorEdad = "jugo"; 

const pedido = `${nombre} dice: "Por favor, quiero beber ${edad >= 18 ? bebidaMayorEdad : bebidaMenorEdad}"`
console.log (pedido);