import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../Axios';  // Adjust the path as necessary

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/api/v1/countries');  // Endpoint to fetch all countries
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries, setCountries }}>
            {children}
        </CountryContext.Provider>
    );
};

// Make sure to export CountryContext here
export { CountryContext };
export const useCountry = () => useContext(CountryContext);
