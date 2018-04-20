const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const quotes = require('./modules/all-quotes');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded( { extended: true } ))

app.get('/all-quotes', (req, res) => {
    res.send(quotes);
});

app.get('/quotes', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 3);
    res.send(quotes[randomNumber]);
});

app.post('/add-quotes', (req, res) => {
    console.log(req.body);
    quotes.push(req.body);
    res.sendStatus(200);
})

app.get('/', (req, res) => {
    console.log('yep, it works!');
    res.send('Happy Wednesday');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});


