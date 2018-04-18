const express = require('express');

const app = express();
const PORT = 5000;


//req is request, res is response
app.get('/', function (req, res) {
    res.send('Happy Wednesday');
    
});

app.use(express.static('server/public'));

app.get('/hey', function (req, res) {
    res.send('Howdy');
    
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`);
});