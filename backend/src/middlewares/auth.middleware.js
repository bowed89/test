const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No existe Token!' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Fallo en la autenticacion del Token!' });
        }

        req.userId = decoded.id;
        req.usuario = decoded.usuario;
        next();
        
    });
};

module.exports = {
    authenticateToken
};
