
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  const lastUpdated = "April 13, 2025";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-holoscale-dark mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last Updated: {lastUpdated}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By downloading, installing, accessing, or using any Holoscale Digital mobile applications or services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
                </p>
                <p className="text-gray-700 mb-4">
                  These Terms constitute a legally binding agreement between you and Holoscale Digital ("Company," "we," "us," or "our").
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  Holoscale Digital provides mobile applications and software-as-a-service products. Our Services may include both free and paid features, including in-app purchases and subscription services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our Services, you may be required to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">4. In-App Purchases and Subscriptions</h2>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">4.1 Payment Terms</h3>
                <p className="text-gray-700 mb-4">
                  Our Services may offer in-app purchases and subscription services. All purchases are processed through the Apple App Store or Google Play Store, and are subject to their respective terms and conditions.
                </p>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">4.2 Subscription Auto-Renewal</h3>
                <p className="text-gray-700 mb-4">
                  Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage or cancel subscriptions through your Apple App Store or Google Play Store account settings.
                </p>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">4.3 Refunds</h3>
                <p className="text-gray-700 mb-4">
                  Refund requests for in-app purchases must be made through the Apple App Store or Google Play Store, as applicable. We do not directly process refunds for mobile app purchases.
                </p>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">4.4 Price Changes</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify subscription prices with advance notice. Price changes will not affect your current subscription period but will apply to subsequent renewals.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">5. Acceptable Use</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to use our Services to:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our Services</li>
                  <li>Use our Services for commercial purposes without authorization</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, and software, are owned by Holoscale Digital and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700 mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to use our Services for personal, non-commercial purposes in accordance with these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">7. Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which describes how we collect, use, and protect your information when you use our Services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">8. Disclaimers and Limitation of Liability</h2>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">8.1 Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We strive to maintain service availability but do not guarantee uninterrupted access. Our Services are provided "as is" and "as available" without warranties of any kind.
                </p>
                
                <h3 className="text-lg md:text-xl font-medium text-holoscale-secondary mb-3">8.2 Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Holoscale Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access to our Services at any time, with or without cause, and with or without notice. Upon termination, your right to use the Services will cease immediately.
                </p>
                <p className="text-gray-700 mb-4">
                  You may terminate your account at any time by ceasing to use our Services and cancelling any active subscriptions through your app store account.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">10. Apple App Store Additional Terms</h2>
                <p className="text-gray-700 mb-4">
                  If you downloaded our app from the Apple App Store, the following additional terms apply:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                  <li>Apple is not a party to these Terms and has no responsibility for the app or its content</li>
                  <li>Apple has no obligation to provide maintenance or support for the app</li>
                  <li>In case of app failure to conform to warranty, you may notify Apple for a refund</li>
                  <li>Apple is not responsible for addressing claims related to the app or your use of it</li>
                  <li>You represent that you are not located in a country subject to U.S. embargo or designated as a "terrorist supporting" country</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">11. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Holoscale Digital is established, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms in the app and updating the "Last Updated" date.
                </p>
                <p className="text-gray-700 mb-4">
                  Your continued use of our Services after any modifications indicates your acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl md:text-2xl font-semibold text-holoscale-primary mb-4">13. Severability</h2>
                <p className="text-gray-700 mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
