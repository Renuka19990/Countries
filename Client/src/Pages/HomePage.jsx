import React, { useRef, useEffect } from 'react';
import CountryList from '../Componnets/Country/CountryList';
import HistoryList from '../Componnets/History/History';


const HomePage = () => {
    const searchInput = useRef();

    useEffect(() => {
        searchInput.current.focus();
    }, []);

    return (
        <div>
            <h1>Countries of the World</h1>
            <input type="text" ref={searchInput} placeholder="Enter currency code..." />
            <CountryList />
            <HistoryList />
        </div>
    );
};

export default HomePage;
