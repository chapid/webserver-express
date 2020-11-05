const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos',
        ciudad: 'Sogamoso'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        ciudad: 'Sogamoso'
    });
});

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Carlos',
//         ciudad: 'Sogamoso',
//         url: req.url
//     }

//     res.send(salida);
// });


app.listen(port, () => {
    console.log(`Escuchano peticiones en el puerto ${port}`);
});