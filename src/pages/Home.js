import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Hero Section */}
            <section className="bg-vintage-pattern bg-cover text-white py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Welcome to the Decentralized Trading Platform</h1>
                    <p className="mb-8">Experience secure, fast, and seamless trading with our cutting-edge platform. Connect your wallet to start trading.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Connect Wallet
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Token Swapping</h3>
                        <p>Swap your tokens easily with low fees and fast execution times.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Liquidity Pools</h3>
                        <p>Add and remove liquidity to earn rewards and support the platform.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Secure Limit Orders</h3>
                        <p>Place limit orders with zk-proof technology for added security.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-50 py-20 text-center">
                <h2 className="text-3xl font-bold mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">Step 1: Connect Your Wallet</h4>
                        <p>Connect your wallet using MetaMask or another supported wallet.</p>
                    </div>
                    <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">Step 2: Choose an Action</h4>
                        <p>Start trading, adding liquidity, or placing a limit order.</p>
                    </div>
                    <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">Step 3: Complete the Transaction</h4>
                        <p>Confirm your transaction and see your updated balance instantly.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="mb-4">"This platform is amazing! It makes trading so much easier and secure. I love it!"</p>
                        <h5 className="font-bold">- User A</h5>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="mb-4">"Adding liquidity and earning rewards has never been this simple. Highly recommend."</p>
                        <h5 className="font-bold">- User B</h5>
                    </div>
                </div>
            </section>

            {/* Footer Call-to-Action Section */}
            <section className="bg-blue-500 text-white py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
                    <p className="mb-8">Connect your wallet and begin exploring our platform today.</p>
                    <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                        Connect Wallet
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
