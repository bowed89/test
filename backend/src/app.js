const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const favoriteRoutes = require('./routes/favorite.routes');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Permite todos los orígenes. Para producción, especifica el dominio permitido.
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use('/api/auth', authRoutes);
app.use('/api/favorite', favoriteRoutes);


module.exports = app 
