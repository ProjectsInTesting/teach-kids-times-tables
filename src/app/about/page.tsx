'use client';

import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import { APP_CONFIG } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About {APP_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Helping kids master multiplication tables with joy, safety, and confidence
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We believe every child deserves to learn in a safe, encouraging environment. 
                  {APP_CONFIG.name} was created to help kids ages 6-10 master their multiplication 
                  tables without the distractions of ads, data tracking, or complicated interfaces. 
                  Just pure, focused learning that builds confidence and mathematical fluency.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">{value.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Safety & Privacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety First</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    We take child safety seriously. Our website is fully COPPA-compliant and designed 
                    with privacy by design principles:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>No data collection:</strong> We don't collect, store, or track any personal information</li>
                    <li><strong>No advertisements:</strong> Zero ads means zero exposure to inappropriate content</li>
                    <li><strong>Local storage only:</strong> Progress is saved locally on your device</li>
                    <li><strong>No external tracking:</strong> No analytics, cookies, or third-party services</li>
                    <li><strong>Safe environment:</strong> Clean, distraction-free interface designed for kids</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* For Educators Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👩‍🏫</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Educators & Parents</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    Whether you're a teacher, homeschool parent, or tutor, our tools are designed to support 
                    your educational goals:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🏫 In the Classroom</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Perfect for math centers or independent practice</li>
                        <li>• Printable charts for reference</li>
                        <li>• Self-paced learning for different skill levels</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🏠 At Home</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Supplement homework and study time</li>
                        <li>• Build confidence before tests</li>
                        <li>• Track progress without pressure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Questions or Feedback?
                </h3>
                <p className="text-gray-600 mb-6">
                  We'd love to hear from you! Whether you have suggestions, questions, 
                  or just want to share your success story.
                </p>
                <a
                  href={`mailto:${APP_CONFIG.email}`}
                  className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                >
                  📧 Contact Us
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: '🎯',
    title: 'Focused Learning',
    description: 'Clean, distraction-free interface that keeps kids engaged with the math, not flashy animations or irrelevant content.'
  },
  {
    icon: '🌟',
    title: 'Confidence Building',
    description: 'Positive reinforcement and encouraging feedback help build mathematical confidence at every step.'
  },
  {
    icon: '📱',
    title: 'Accessibility',
    description: 'Works perfectly on any device - tablets, phones, computers - with touch-friendly controls designed for small hands.'
  },
  {
    icon: '🚀',
    title: 'Effective Methods',
    description: 'Evidence-based learning techniques including spaced repetition, immediate feedback, and progress tracking.'
  }
] as const;