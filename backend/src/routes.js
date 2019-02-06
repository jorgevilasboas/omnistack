const express = require('express');
const routes = express.Router();
const TweetController = require('./controllers/TweetController');

routes.get('/', (req, res) => {
    res.send('Hello World! =D');
});

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

module.exports = routes;