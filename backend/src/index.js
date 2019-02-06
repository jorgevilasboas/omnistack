const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://omni:omni123@ds123625.mlab.com:23625/omnistack', {useNewUrlParser:true});

app.use(require('./routes'));

app.listen(3000, 'localhost', () => {
    console.log(`Rodando na porta 3000...`);
})