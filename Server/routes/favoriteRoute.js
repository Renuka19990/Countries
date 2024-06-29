const express = require('express');
const { addFavorite, getFavorites } = require('../Controller/favoriteController');
const authMiddleware = require('../middleware/authmiddleware');


const router = express.Router();

router.post('/', authMiddleware, addFavorite);
router.get('/', authMiddleware, getFavorites);

module.exports = router;
