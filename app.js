const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Foundation Laid');
})

app.listen(3000, function(){
    console.log("info", 'Server is running on port ' + 3000);
});