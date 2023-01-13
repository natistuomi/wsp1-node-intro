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

// catch 404 and forward to error handler
app.use(function (request, response, next) {
    next(createError(404));
});

// error handler
app.use(function (err, request, response, next) {
    // set locals, only providing error in development
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};

    // render the error page
    response.status(err.status || 500);
    response.render('error.njk');
});