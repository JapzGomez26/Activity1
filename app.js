const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/router');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);
app.use(express.static('public'))
app.use(express.static('src'))

app.listen(4000, () => {
    console.log('server running on http://localhost:4000');
});

