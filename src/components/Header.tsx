
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <RouterLink to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <div className="text-holoscale-primary font-bold text-2xl">Holoscale Digital</div>
          </RouterLink>
        </div>
        <nav className="hidden md:flex space-x-8">
          <RouterLink to="/" className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors">
            Privacy Policy
          </RouterLink>
          <RouterLink to="/terms" className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors">
            Terms of Service
          </RouterLink>
          <RouterLink to="/contact" className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors">
            Contact
          </RouterLink>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-gray-600 hover:text-holoscale-secondary transition-colors">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8">
              <RouterLink 
                to="/" 
                className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </RouterLink>
              <RouterLink 
                to="/terms" 
                className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms of Service
              </RouterLink>
              <RouterLink 
                to="/contact" 
                className="text-gray-600 hover:text-holoscale-secondary font-medium transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </RouterLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
