const express = require('express');
const app = express()
const cors = require('cors');
const port = 80

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}

const userController = require('./controllers/user');

app.use(cors(corsOptions));
app.use('/users', userController);

app.listen(port, () => console.log('Starting application'));
