// models/favorite.model.js
const { pool } = require('../config/database');

const addFavorite = async (id_usuario, title, year, poster) => {
    const query = `
    INSERT INTO favoritos (id_usuario, title, year, poster)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
    const values = [id_usuario, title, year, poster];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};

const getFavoritesByUserId = async (id_usuario) => {
    const query = 'SELECT * FROM favoritos WHERE id_usuario = $1 AND deleted = TRUE';
    const values = [id_usuario];

    try {
        const res = await pool.query(query, values);
        return res.rows;

    } catch (err) {
        throw err;
    }
};

const removeFavorite = async (id) => {
    const query = `UPDATE favoritos SET deleted = FALSE WHERE id = $1 RETURNING *`;
    const values = [id];

    try {
        const res = await pool.query(query, values);
        return res.rows[0]; // Retorna el registro actualizado

    } catch (err) {
        throw err;
    }
};


module.exports = {
    addFavorite,
    getFavoritesByUserId,
    removeFavorite
};
