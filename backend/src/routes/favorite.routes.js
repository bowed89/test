const express = require('express');
const router = express.Router();
const { newFavorite, listFavoritesByUserId, deleteFavorite } = require('../controllers/favorite.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');


router.post('/', authenticateToken, newFavorite);
router.get('/:id_usuario', authenticateToken, listFavoritesByUserId);
router.put('/:id', authenticateToken, deleteFavorite);

module.exports = router;
