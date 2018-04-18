const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/all-quotes', (req, res) => {
    const quotes = [
        { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
        { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
        { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
    ]; 
    res.send(quotes);
});

app.get('/quotes', (req, res) => {
    const quotes = [
        { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
        { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
        { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
    ]; 
    const randomNumber = Math.floor(Math.random() * 3);
    res.send(quotes[randomNumber]);
});

app.get('/', (req, res) => {
    console.log('yep, it works!');
    res.send('Happy Wednesday');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});


