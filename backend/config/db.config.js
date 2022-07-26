const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
        authSource: 'test',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.error(err));