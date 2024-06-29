import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/authContext';
import { CountryContext } from '../../Context/CountryContext';
import countryService from '../../services/countryService';
import CountryList from '../Country/CountryList';

const FavoritesPage = () => {
    const { auth } = useContext(AuthContext);
    const { setCountries } = useContext(CountryContext);

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await countryService.getFavorites(auth);
            setCountries(data);
        };
        fetchFavorites();
    }, [auth, setCountries]);

    return (
        <div>
            <h2>Favorites</h2>
            <CountryList />
        </div>
    );
};

export default FavoritesPage;
