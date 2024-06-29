import React, { useContext } from 'react';
import { CountryContext } from '../../Context/CountryContext';  // Adjust the path as necessary
import CountryCard from './CountryCard';

const CountryList = () => {
    const { countries } = useContext(CountryContext);

    return (
        <div>
            {countries.map((country) => (
                <CountryCard key={country.cca2} country={country} />
            ))}
        </div>
    );
};

export default CountryList;
