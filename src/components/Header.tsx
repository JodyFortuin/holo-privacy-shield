
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <RouterLink to="/" className="flex items-center">
            <div className="text-holoscale-primary font-bold text-2xl">Holoscale Digital</div>
          </RouterLink>
        </div>
        <nav className="hidden md:flex space-x-8">
          <RouterLink to="/privacy" className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors">
            Privacy Policy
          </RouterLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
