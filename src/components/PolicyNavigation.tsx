
import React from 'react';
import { Link } from 'react-scroll';

interface NavigationItem {
  id: string;
  title: string;
}

const PolicyNavigation = () => {
  const navItems: NavigationItem[] = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information Collection' },
    { id: 'information-use', title: 'Use of Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'user-rights', title: 'Your Rights' },
    { id: 'children-privacy', title: 'Children\'s Privacy' },
    { id: 'policy-updates', title: 'Policy Updates' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <div className="bg-holoscale-light rounded-lg p-6 sticky top-4">
      <h3 className="font-semibold text-holoscale-primary mb-4">On This Page</h3>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="block text-gray-600 hover:text-holoscale-secondary cursor-pointer py-1 text-sm transition-colors"
            activeClass="text-holoscale-primary font-medium"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default PolicyNavigation;
