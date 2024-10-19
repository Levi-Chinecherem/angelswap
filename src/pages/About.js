import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Introduction Section */}
            <section className="py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">About Our Platform</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    Our decentralized trading platform allows users to securely trade tokens, manage liquidity, and place limit orders with ease. We combine cutting-edge technology with a user-friendly interface to make trading accessible for everyone.
                </p>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg">
                        Our mission is to revolutionize decentralized finance by offering a secure and transparent platform for token trading and liquidity management. We aim to empower users with the tools they need to take control of their digital assets.
                    </p>
                </div>
            </section>

            {/* Features Overview Section */}
            <section className="py-20 text-center">
                <h3 className="text-3xl font-bold mb-8">Platform Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-2">Decentralized Trading</h4>
                        <p>Trade tokens directly from your wallet without any intermediaries.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-2">Automated Liquidity Pools</h4>
                        <p>Provide liquidity to earn rewards and support the trading ecosystem.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-2">Secure Limit Orders</h4>
                        <p>Place limit orders with zk-proof security to protect your trading intentions.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-20 text-center">
                <h3 className="text-3xl font-bold mb-8">Meet the Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <img src="/assets/team-member-1.jpg" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-bold mb-2">John Doe</h4>
                        <p>Lead Developer</p>
                    </div>
                    <div className="p-6">
                        <img src="/assets/team-member-2.jpg" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
                        <p>Product Manager</p>
                    </div>
                    <div className="p-6">
                        <img src="/assets/team-member-3.jpg" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-bold mb-2">Emily Johnson</h4>
                        <p>Blockchain Engineer</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 text-center">
                <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-2">Transparency</h4>
                        <p>Our platform operates on a public blockchain, ensuring transparency and trust.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-2">Security</h4>
                        <p>We utilize zk-proof technology and other security measures to safeguard your assets.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-blue-500 text-white py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="mb-8">Connect your wallet and explore our platform to start trading.</p>
                    <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                        Connect Wallet
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
