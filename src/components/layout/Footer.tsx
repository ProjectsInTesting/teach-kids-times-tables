import Link from 'next/link';
import { APP_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">×</span>
              </div>
              <span className="font-bold text-lg text-gray-900">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Helping kids learn multiplication tables in a fun, safe, and simple way.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/learn" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Learn Mode
                </Link>
              </li>
              <li>
                <Link 
                  href="/practice" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Practice Mode
                </Link>
              </li>
              <li>
                <Link 
                  href="/print" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Print Chart
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={`mailto:${APP_CONFIG.email}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              © {currentYear} {APP_CONFIG.domain}. All rights reserved.
            </p>
            <p className="mt-2 sm:mt-0">
              Safe learning environment for kids aged 6-10
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}