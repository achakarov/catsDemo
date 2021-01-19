const express = require('express');
const checkCatIdMiddleware = require('./middlewares/middleware');
const loggerMiddleware = require ('./middlewares/logger');

const app = express();
const port = 5000;

const cats = [];

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello world from Express!');
});

app.get('/download', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// app.get('/cats', (req, res) => {
//     res.redirect('/');
// });

app.get('/cats/:catId?', checkCatIdMiddleware, (req, res) => {
    // if (!/\d+/.test(req.params.catId)) {
    //     res.status(404).send('You need to specify cat ID number');
    //     return;
    // }
    res.send(`You are looking at profile of ${req.params.catId}`);
});

app.post('/cats', (req, res) => {
    console.log('Create cat');

    res
        .status(201)
        .send('Cat created!');
});

// app.put('/cats/:id', (req, res)=>{
//     console.log('Update cat');
// }); 

app.listen(port, () => console.log(`This server is running on port ${port}`));