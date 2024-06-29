import axios from '../Axios';

const getCountryByCurrency = async (currencyCode) => {
    try {
        const response = await axios.get(`/api/v1/countries/currency/${currencyCode}`);  // Endpoint to fetch country by currency
        return response.data;
    } catch (error) {
        console.error('Error fetching country by currency:', error);
        throw error;
    }
};

export default {
    getCountryByCurrency,
};
