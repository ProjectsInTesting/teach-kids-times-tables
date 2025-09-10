import type { Metadata } from 'next';
import { APP_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for TeachKidsTimesTables.com - Simple, fair terms for our educational service.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';
  
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using {APP_CONFIG.domain} (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {APP_CONFIG.name} provides educational resources and interactive tools to help children learn multiplication tables. Our Service includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Interactive learning modules for times tables 0-12</li>
              <li>Practice quizzes with immediate feedback</li>
              <li>Printable reference charts</li>
              <li>Progress tracking stored locally on user devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Age Requirements and Parental Supervision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service is designed for children ages 6-10. We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13.
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Children under 13 should use this Service only with parental supervision</li>
              <li>Parents are responsible for monitoring their child's use of the Service</li>
              <li>We encourage parents to review these terms with their children</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Privacy and Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting privacy, especially for children:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>We do not collect, store, or transmit any personal information</li>
              <li>Progress data is stored locally on your device only</li>
              <li>We do not use cookies, analytics, or tracking technologies</li>
              <li>We do not display advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Service only for educational purposes and in accordance with these terms:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Do not attempt to disrupt or interfere with the Service</li>
              <li>Do not use automated systems to access the Service excessively</li>
              <li>Respect the educational purpose of the platform</li>
              <li>Do not attempt to extract or download our educational content for commercial use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by {APP_CONFIG.domain} and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may print our times tables charts for personal educational use. Commercial redistribution is not permitted without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Educational Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate and helpful educational content, the Service is provided "as is" without warranties of any kind. We make no guarantees about learning outcomes or academic performance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Parents and educators should use their professional judgment in incorporating our tools into their teaching methods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall {APP_CONFIG.domain}, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Email: <a href={`mailto:${APP_CONFIG.email}`} className="text-primary-600 hover:text-primary-700">{APP_CONFIG.email}</a><br />
                Website: <a href={`https://${APP_CONFIG.domain}`} className="text-primary-600 hover:text-primary-700">{APP_CONFIG.domain}</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be interpreted and governed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}