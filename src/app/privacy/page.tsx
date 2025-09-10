import type { Metadata } from 'next';
import { APP_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'COPPA-compliant privacy policy for TeachKidsTimesTables.com - We collect no data, use no tracking, and ensure complete privacy for children.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';
  
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Last updated: {lastUpdated}
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🛡️ COPPA Compliant - Zero Data Collection
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Quick Summary */}
          <section className="mb-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Privacy Summary (TL;DR)</h2>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li><strong>We collect ZERO personal information</strong></li>
              <li><strong>No cookies, tracking, or analytics</strong></li>
              <li><strong>No advertisements or third-party services</strong></li>
              <li><strong>Progress saved locally on your device only</strong></li>
              <li><strong>Fully COPPA compliant for children's safety</strong></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {APP_CONFIG.name} ("{APP_CONFIG.domain}") is committed to protecting the privacy of all users, especially children. This Privacy Policy explains how we handle information when you use our educational website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The bottom line:</strong> We don't collect, store, transmit, or share any personal information. Period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. COPPA Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We comply with the Children's Online Privacy Protection Act (COPPA), which requires special protections for children under 13. Our commitment goes beyond compliance:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>We do not collect personal information from anyone, regardless of age</li>
              <li>We do not require registration, accounts, or sign-ups</li>
              <li>We do not use tracking technologies or cookies</li>
              <li>We do not display advertisements</li>
              <li>We do not share any information with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information We Do NOT Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To be absolutely clear, we do NOT collect:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">❌ Personal Information</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Names or nicknames</li>
                  <li>• Email addresses</li>
                  <li>• Phone numbers</li>
                  <li>• Addresses or location data</li>
                  <li>• Photos or images</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">❌ Technical Data</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• IP addresses</li>
                  <li>• Browser information</li>
                  <li>• Device information</li>
                  <li>• Usage analytics</li>
                  <li>• Cookies or tracking pixels</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How Progress Is Saved</h2>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Local Storage Only</h3>
              <p className="text-green-700 leading-relaxed mb-3">
                Quiz scores and progress are saved using your device's local storage technology. This means:
              </p>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Data stays on your device - it never leaves</li>
                <li>We cannot access or see this data</li>
                <li>Data is not transmitted over the internet</li>
                <li>You can clear this data anytime through your browser settings</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not use any third-party services that could collect data, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>❌ Google Analytics or similar analytics services</li>
              <li>❌ Social media plugins or sharing buttons</li>
              <li>❌ Advertising networks or tracking pixels</li>
              <li>❌ External fonts that could track usage (we use system fonts)</li>
              <li>❌ Content delivery networks that track users</li>
              <li>❌ Chat widgets or support systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="text-green-800 font-semibold mb-2">🍪 No Cookies Policy</p>
              <p className="text-green-700 leading-relaxed">
                Our website does not use cookies, local storage for tracking, or any other tracking technologies. 
                The only local storage we use is for saving quiz progress on your device, which is completely private and never transmitted.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we don't collect data, we don't have data to secure! However, we implement several security measures:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>HTTPS encryption for all website traffic</li>
              <li>Regular security updates and monitoring</li>
              <li>Secure hosting infrastructure</li>
              <li>No user accounts or databases to compromise</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. International Users</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our privacy practices meet or exceed international privacy standards including GDPR (Europe), 
              PIPEDA (Canada), and other regional privacy laws. Since we collect no data, there are no cross-border 
              data transfers or regional compliance issues to worry about.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. However, our core commitment to collecting 
              zero personal data will not change. Any updates will be posted on this page with a new "last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We encourage parents and educators to review this policy periodically to stay informed about how 
              we protect privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href={`mailto:${APP_CONFIG.email}`} className="text-primary-600 hover:text-primary-700">{APP_CONFIG.email}</a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Website:</strong> <a href={`https://${APP_CONFIG.domain}`} className="text-primary-600 hover:text-primary-700">{APP_CONFIG.domain}</a>
              </p>
              <p className="text-sm text-gray-600">
                We typically respond to privacy inquiries within 48 hours.
              </p>
            </div>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Parent & Educator Note</h2>
            <p className="text-blue-800 leading-relaxed">
              We designed {APP_CONFIG.name} with your peace of mind in mind. You can confidently let children 
              use our site knowing that their privacy is completely protected. No registration, no data collection, 
              no tracking - just safe, effective learning.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}