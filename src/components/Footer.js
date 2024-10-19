import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Trading Platform. All rights reserved.</p>
                <p>Follow us on <a href="#" className="text-blue-400">Twitter</a> | <a href="#" className="text-blue-400">GitHub</a></p>
            </div>
        </footer>
    );
};

export default Footer;
