const http = require('http'); // Importar el 'http' (no hay que instalarlo con npm ya viene con Node)

http.createServer((req, res) => { // Método 'createServer()' que ejecuta una callback que tiene como parámetros una 'req' (petición) y una 'res' (respuesta)

    res.writeHead(200, { 'Content-Type': 'Application/json' }); // Encabezado de la respuesta del servidor (tipo de contenido, en este caso un json)

    let salida = {
        nombre: 'Perico',
        edad: 45,
        url: req.url
    };

    res.write(JSON.stringify(salida)); // Envía como respuesta (write) el objeto 'salida' convertido a JSON (stringify)
    res.end(); // Finaliza la respuesta enviada por el servidor http, Si no se emplea el navegador estaría cargando indefinidamente ya que piensa que la respuesta no está completa
}).listen(8080); // El 'listen()' se emplea para especificar el puerto por el que va ha escuchar el servidor las peticiones http

console.log('Escuchando en el puerto 8080');