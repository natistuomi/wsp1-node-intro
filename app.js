const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (request, response, next) {
    response.render('index.njk', {
        message: 'Hello world!',
        title: 'Nunjucks hello world',
    });
});

app.use(express.static('public'));