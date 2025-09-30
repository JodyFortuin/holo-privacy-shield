
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-holoscale-dark mb-4">Contact Us</h1>
            <p className="text-gray-600">We're here to help</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-holoscale-primary mb-6">Get in Touch</h2>
              
              <p className="text-gray-700 mb-6">
                For support inquiries, questions about our applications, or any other concerns, please reach out to us at:
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-holoscale-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:jody606@icloud.com" 
                    className="text-holoscale-secondary hover:text-holoscale-primary text-lg font-medium transition-colors"
                  >
                    jody606@icloud.com
                  </a>
                </div>
              </div>
              
              <div className="text-gray-600 text-sm">
                <p className="mb-4">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
                <p>
                  When contacting us, please include as much detail as possible about your question or issue to help us assist you better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
