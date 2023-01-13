const  express = require('express');
const  router = express.Router();

router.get('/', async function (request, response, next) {
    response.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
    });
});

module.exports = router