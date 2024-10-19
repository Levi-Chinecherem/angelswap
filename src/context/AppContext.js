// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userAddress, setUserAddress] = useState('');
    const [tokenBalances, setTokenBalances] = useState({});
    const [secureMode, setSecureMode] = useState(false);

    return (
        <AppContext.Provider value={{ userAddress, setUserAddress, tokenBalances, setTokenBalances, secureMode, setSecureMode }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
