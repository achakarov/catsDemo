const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
// const checkCatIdMiddleware = require('./middlewares/middleware');
// const loggerMiddleware = require('./middlewares/logger');

const app = express();
const port = 5000;
const cats = require('./cats');

// app.use(express.static('public'));
// app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    let name = 'Navcho';
    res.render('home', { layout: false, name });
});

app.get('/download', (req, res) => {
    res.download('./views/home.html');
});

app.get('/cats', (req, res) => {
    res.render('cats', {cats: cats.getAll()});
});

// app.get('/cats/:catId?', (req, res) => {
//     if (!/\d+/.test(req.params.catId)) {
//         res.status(404).send('You need to specify cat ID number');
//         return;
//     }
//     res.send(`You are looking at profile of ${req.params.catId}`);
// });

app.post('/cats', (req, res) => {
    let catName = req.body.cat;
    cats.add(catName)
    res.redirect('/cats');
});

// app.put('/cats/:id', (req, res)=>{
//     console.log('Update cat');
// }); 

app.listen(port, () => console.log(`This server is running on port ${port}`));