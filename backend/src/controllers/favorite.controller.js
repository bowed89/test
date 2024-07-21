// controllers/favorite.controller.js
const { addFavorite, getFavoritesByUserId, removeFavorite } = require('../services/favorite.service');
const { successResponse, errorResponse } = require('../utils/response.util');

// Función flecha para agregar un nuevo favorito
const newFavorite = async (req, res) => {
    const { id_usuario, title, year, poster } = req.body;

    try {
        const newFavorite = await addFavorite(id_usuario, title, year, poster);
        successResponse(res, newFavorite);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const listFavoritesByUserId = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const favorites = await getFavoritesByUserId(id_usuario);
        successResponse(res, favorites);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

const deleteFavorite = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedFavorite = await removeFavorite(id);
        if (updatedFavorite) {
            successResponse(res, { message: 'Favorito eliminado!', favorite: updatedFavorite });
        } else {
            errorResponse(res, 'Favorito no encontrado');
        }

    } catch (err) {
        errorResponse(res, err.message);
    }
};

module.exports = {
    newFavorite,
    listFavoritesByUserId,
    deleteFavorite
};
