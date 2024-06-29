const express = require('express');
const authMiddleware = require('../middleware/authmiddleware');
const { getCountryByCurrency } = require('../Controller/countrycontroller');


const router = express.Router();

router.get('/:currencyCode', authMiddleware, getCountryByCurrency);

module.exports = router;
