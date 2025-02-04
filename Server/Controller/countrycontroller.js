const axios = require('axios');

exports.getCountryByCurrency = async (req, res) => {
    const { currencyCode } = req.params;

    try {
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching country data', error });
    }
};
