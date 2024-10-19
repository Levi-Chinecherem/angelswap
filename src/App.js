import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trading from './pages/Trading';
import Faucet from './pages/Faucet';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const [userAddress, setUserAddress] = useState('');

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header onAccountChange={setUserAddress} />
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" exact component={Home} />
                        <Route path="/trading" component={Trading} />
                        <Route path="/faucet" component={Faucet} />
                        <Route path="/about" component={About} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
