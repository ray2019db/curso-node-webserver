const express = require('express'); // Importa la librería de express
const app = express();
const hbs = require('hbs'); // Importa la librería 'hbs' de los Handlebars para poder usar sus propiedades y métodos
require('./hbs/helpers'); // Importa el archivo 'helpers.js' para poder emplearlo cada vez que se requiera
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Middleware para llamar archivos estáticos (en este caso ejecuta el contenido del archivo index.html si existe de la carpeta public)

// Express HBS (Handlebars)
hbs.registerPartials(__dirname + '/views/parciales'); // Se declara la ruta de los parciales (archivos con pedazos de código común que pueden ser anidados en otros archivos) en este caso '__dirname/views/parciales'
app.set('view engine', 'hbs'); // Se declara el uso de los Handlebars (view engine) y la extención de los archivos empleados como view engine para entregar al cliente (navegador) y este pueda mostrarlo al usuario como vista html, en este caso con extensión '.hbs'


app.get('/', (req, res) => { // Ejecuta lo que está en el callback cuendo se hace la petición http a la ruta especificada '/', en este caso 'http://localhost:3000/'

    res.render('home', { // El método 'render()' renderiza y envía la vista (html) especificada cuando se hace una petición http a esta ruta, en este caso el archivo 'home.hbs'
        nombre: 'francisco garcía' // Objeto donde se declaran las variables que pueden ser cargadas de forma dinámica para mostrarse en la vista
    });
});

app.get('/about', (req, res) => { // Ejecuta lo que está en el callback cuando se hace la petición http a la ruta especificada '/about', en este caso 'http://localhost:3000/about'

    res.render('about') // Renderiza el archivo 'about.hbs' y envíalo como respuesta cuando se haga una petición http a esta ruta 'http://localhost:3000/about'
});

app.listen(port, () => { // Con el método 'listen()' se declara el puerto por el que el servidor va a escuchar las peticiones http y una callback que ejecuta lo que contiene
    console.log(`Escuchando peticiones por el puerto: ${port}`);
});