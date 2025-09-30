
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-holoscale-primary mb-2">Holoscale Digital</h3>
            <p className="text-gray-600 text-sm max-w-md">
              Developing high-quality mobile applications and SaaS products with a focus on security and privacy.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-holoscale-primary mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">
              For support inquiries, please contact:
            </p>
            <a href="mailto:jody606@icloud.com" className="text-holoscale-secondary hover:text-holoscale-primary text-sm">
              jody606@icloud.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Holoscale Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
