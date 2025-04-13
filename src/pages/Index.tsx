import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PolicyNavigation from '../components/PolicyNavigation';
import { Element } from 'react-scroll';

const Index = () => {
  const lastUpdated = "April 13, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-holoscale-dark mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: {lastUpdated}</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation - Hidden on Mobile */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <PolicyNavigation />
            </aside>
            
            {/* Main Content */}
            <div className="flex-grow max-w-3xl mx-auto lg:mx-0">
              <div className="prose max-w-none">
                <Element name="introduction" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-4">
                      At Holoscale Digital ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and software-as-a-service (SaaS) products.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our applications or services.
                    </p>
                  </section>
                </Element>

                <Element name="information-collection" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Information We Collect</h2>
                    
                    <h3 className="text-xl font-medium text-holoscale-secondary mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">
                      We may collect personal information that you voluntarily provide when using our applications and services, including but not limited to:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li>Name, email address, and contact details</li>
                      <li>Account credentials</li>
                      <li>Profile information</li>
                      <li>Payment and billing information</li>
                      <li>User-generated content and communications</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium text-holoscale-secondary mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-700 mb-4">
                      When you access our applications and services, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li>Device information (model, operating system, unique device identifiers)</li>
                      <li>Log data (IP address, access times, app features used)</li>
                      <li>Usage data and analytics</li>
                      <li>Location data (if permission is granted)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </section>
                </Element>

                <Element name="information-use" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">
                      We may use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li>Providing and maintaining our applications and services</li>
                      <li>Processing transactions and managing your account</li>
                      <li>Personalizing your user experience</li>
                      <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
                      <li>Responding to your comments, questions, and customer service requests</li>
                      <li>Monitoring usage patterns and analyzing trends</li>
                      <li>Improving our applications and services</li>
                      <li>Detecting, preventing, and addressing technical issues and security breaches</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </section>
                </Element>

                <Element name="information-sharing" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Information Sharing and Disclosure</h2>
                    <p className="text-gray-700 mb-4">
                      We may share your information in the following situations:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
                      <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
                      <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                      <li><strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of data collection.</li>
                    </ul>
                    
                    <p className="text-gray-700 mb-4">
                      We do not sell your personal information to third parties.
                    </p>
                  </section>
                </Element>

                <Element name="data-security" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Data Security</h2>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We use industry-standard encryption, secure server infrastructure, and regular security assessments to safeguard your information.
                    </p>
                  </section>
                </Element>

                <Element name="data-retention" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Data Retention</h2>
                    <p className="text-gray-700 mb-4">
                      We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-gray-700 mb-4">
                      When determining the appropriate retention period, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
                    </p>
                  </section>
                </Element>

                <Element name="user-rights" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Your Rights and Choices</h2>
                    <p className="text-gray-700 mb-4">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li><strong>Access and Update:</strong> You can review and update your account information within our applications or by contacting us.</li>
                      <li><strong>Data Portability:</strong> You may request a copy of your personal information in a structured, machine-readable format.</li>
                      <li><strong>Deletion:</strong> You may request the deletion of your personal information, subject to certain exceptions.</li>
                      <li><strong>Objection and Restriction:</strong> You may object to or request restriction of processing of your personal information.</li>
                      <li><strong>Withdraw Consent:</strong> You can withdraw your consent at any time where we relied on your consent to process your information.</li>
                    </ul>
                    
                    <p className="text-gray-700 mb-4">
                      To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                    </p>
                    
                    <h3 className="text-xl font-medium text-holoscale-secondary mb-3">App Permissions</h3>
                    <p className="text-gray-700 mb-4">
                      Our applications may request certain permissions, such as access to your camera, photos, location, or contacts. You can manage these permissions through your device settings. Disabling permissions may limit certain features of our applications.
                    </p>
                  </section>
                </Element>

                <Element name="children-privacy" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Children's Privacy</h2>
                    <p className="text-gray-700 mb-4">
                      Our services are not intended for individuals under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child, we will promptly delete that information.
                    </p>
                    <p className="text-gray-700 mb-4">
                      If you believe we have collected information from a child, please contact our legal department through appropriate channels.
                    </p>
                  </section>
                </Element>

                <Element name="policy-updates" className="scroll-mt-24">
                  <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-holoscale-primary mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-4">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date. We may also provide additional notification methods for material changes.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our applications and services after any modifications indicates your acceptance of the updated Privacy Policy.
                    </p>
                  </section>
                </Element>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
