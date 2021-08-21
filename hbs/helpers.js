const hbs = require('hbs'); // Importa la librería 'hbs' de los Handlebars para poder usar sus propiedades y métodos


//  Helpers funciones que se disparan cuando una template (la plantilla o la vista html) lo requiera
hbs.registerHelper('getAnio', () => { // Un Helper no es más que una función que se dispara cuando el template (la plantilla o la vista html) lo requiera. Se declara el nombre de la función (helper), en este caso 'getAnio' y después viene la función con su contenido
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => { // Un Helper no es más que una función que se dispara cuando el template (la plantilla o la vista html) lo requiera. Se declara el nombre de la función (helper), en este caso 'capitalizar' y después viene la función con sus parámetros (en este caso es 'texto') y contenido
    let palabras = texto.split(' '); // Convierte el 'texto' en un arreglo de palabras separadas donde exista un espacio ' '. Por ej. texto = 'juan perez' y palabras almacenaría algo así palabras = ['juan', 'perez']
    palabras.forEach((palabra, idx) => { // Recorre cada palabra del arreglo 'palabras'
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() // Para cada palabra del arreglo convierte la primera letra en mayúscula y el resto en minúscuala
    });
    return palabras.join(' '); // Une las palabras del arreglo de palabras por un espacio ' ' y retórnalo
});