import React, { useEffect, useContext, useState } from 'react';
import {AuthContext}  from '../../Context/authContext';
import countryService from '../../services/countryService';

const HistoryList = () => {
    const { auth } = useContext(AuthContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const data = await countryService.getHistory(auth);
            setHistory(data);
        };
        fetchHistory();
    }, [auth]);

    return (
        <div>
            <h2>Search History</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryList;
