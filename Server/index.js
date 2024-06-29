const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');  // Corrected import
const countryRoutes = require('./routes/countryRoutes');
const favoriteRoutes = require('./routes/favoriteRoute');
const historyRoutes = require('./routes/historyRoutes');

require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
