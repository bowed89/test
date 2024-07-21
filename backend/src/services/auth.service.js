const bcrypt = require('bcrypt');
const { pool } = require('../config/database');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const saltRounds = 10;

const registerUser = async (usuario, nombres, primer_apellido, segundo_apellido, password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = `INSERT INTO usuarios (usuario, nombres, primer_apellido, segundo_apellido, password) 
                   VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    const values = [usuario, nombres, primer_apellido, segundo_apellido, hashedPassword];

    try {
        const res = await pool.query(query, values);
        return res.rows[0].id;

    } catch (err) {
        throw err;
    }
}

const loginUser = async (usuario, plainPassword) => {
    const query = `SELECT * FROM usuarios WHERE usuario = $1`;
    const values = [usuario];

    try {
        const res = await pool.query(query, values);


        const user = res.rows[0];
        const comparePassword = await bcrypt.compare(plainPassword, user.password);

        if (user && comparePassword) {
            const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
            //res.json({ token });
            return token;

        } else {
            // res.status(401).json({ error: 'Usuario y/o password no validos' });
            throw 'err';

        }
    } catch (err) {
        //res.status(500).json({ error: 'Error logging' });
        throw err;

    }
}

module.exports = {
    registerUser,
    loginUser
};
