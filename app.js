const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(express.static('public'));

app.use('/', indexRouter);