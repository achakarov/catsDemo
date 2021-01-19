const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello world from Express!');
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

app.all('/', (req, res) => {
   res.send('Handle all requests');
});

app.listen(port, () => console.log(`This server is running on port ${port}`));

