const Favorite = require('../models/favorite.model');

exports.addFavorite = async (req, res) => {
    const { userId } = req.user;
    const { countryCode } = req.body;

    try {
        const newFavorite = new Favorite({ userId, countryCode });
        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({ message: 'Error adding favorite', error });
    }
};

exports.getFavorites = async (req, res) => {
    const { userId } = req.user;

    try {
        const favorites = await Favorite.find({ userId });
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching favorites', error });
    }
};
