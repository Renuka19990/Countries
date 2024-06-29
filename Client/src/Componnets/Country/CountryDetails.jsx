import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountryContext } from '../Context/CountryContext';
import countryService from '../services/countryService';
import CountryCard from './CountryCard';

const CountryDetails = () => {
    const { currencyCode } = useParams();
    const { countries, setCountries } = useContext(CountryContext);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const data = await countryService.getCountryByCurrency(currencyCode);
                setCountries(data);
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        };
        fetchCountryDetails();
    }, [currencyCode, setCountries]);

    return (
        <div>
            {countries.map((country) => (
                <CountryCard key={country.cca2} country={country} />
            ))}
        </div>
    );
};

export default CountryDetails;
