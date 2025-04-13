
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-holoscale-primary font-bold text-2xl">Holoscale Digital</div>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors">
            Privacy Policy
          </Link>
          <a 
            href="mailto:privacy@holoscaledigital.com" 
            className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
