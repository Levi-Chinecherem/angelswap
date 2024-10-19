import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import WalletConnect from './WalletConnect';

const Header = ({ onAccountChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Trading Platform</h1>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
                <nav className={`flex-col md:flex md:flex-row md:items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <NavLink to="/" exact className="mr-4 p-2" activeClassName="font-bold">Home</NavLink>
                    <NavLink to="/trading" className="mr-4 p-2" activeClassName="font-bold">Trading</NavLink>
                    <NavLink to="/faucet" className="mr-4 p-2" activeClassName="font-bold">Faucet</NavLink>
                    <NavLink to="/about" className="p-2" activeClassName="font-bold">About</NavLink>
                </nav>
                <div className="ml-4">
                    <WalletConnect onAccountChange={onAccountChange} />
                </div>
            </div>
        </header>
    );
};

export default Header;
