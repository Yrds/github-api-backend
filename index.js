const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const userController = require('./controllers/user');

app.use(cors(corsOptions));
app.use('/users', userController);

app.listen(port, () => console.log('Starting application on port ' + port));
