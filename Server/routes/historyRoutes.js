const express = require('express');
const authMiddleware = require('../middleware/authmiddleware');
const { addHistory, getHistory } = require('../Controller/historyController');

const router = express.Router();

router.post('/', authMiddleware, addHistory);
router.get('/', authMiddleware, getHistory);

module.exports = router;
