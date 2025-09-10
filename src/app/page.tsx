'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import CustomerReviews from '@/components/reviews/CustomerReviews';
import { APP_CONFIG, TABLE_COLORS } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display"
            >
              Learn Times Tables{' '}
              <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                the Fun Way!
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Help kids ages 6-10 master multiplication tables from 0 to 12 
              in a safe, fun, and simple learning environment. No ads, no tracking, just pure learning!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" asChild>
                <Link href="/learn">
                  🎯 Start Learning
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/practice">
                  🌟 Take Quiz
                </Link>
              </Button>
            </motion.div>

            {/* Interactive Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-6 sm:grid-cols-13 gap-2 max-w-4xl mx-auto mb-8"
            >
              {Array.from({ length: 13 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + (i * 0.05),
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square"
                >
                  <div 
                    className="w-full h-full rounded-lg flex items-center justify-center text-lg font-bold text-gray-800 cursor-pointer number-card"
                    style={{ backgroundColor: TABLE_COLORS[i] }}
                  >
                    {i}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-sm text-gray-500 max-w-md mx-auto"
            >
              Click any number above to see its times table! 
              (This works on the actual Learn page)
            </motion.p>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60 blur-xl" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-60 blur-xl" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-100 rounded-full opacity-60 blur-xl" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Kids Love Learning Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for young learners with safety and engagement in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of kids who've already mastered their times tables!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/learn">
                  🎯 Explore Numbers
                </Link>
              </Button>
              <Button 
                variant="warning"
                size="lg"
                asChild
              >
                <Link href="/practice">
                  🚀 Take Your First Quiz
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: '🎯',
    title: 'Interactive Learning',
    description: 'Colorful number cards and engaging visuals make learning multiplication tables fun and memorable.'
  },
  {
    icon: '🛡️',
    title: 'Completely Safe',
    description: 'COPPA-compliant with no ads, tracking, or data collection. Parents can trust their kids are safe.'
  },
  {
    icon: '📱',
    title: 'Works Everywhere',
    description: 'Fully responsive design works perfectly on tablets, phones, and computers with easy touch controls.'
  },
  {
    icon: '🌟',
    title: 'Progress Tracking',
    description: 'Star ratings and local progress saving help kids see their improvement and stay motivated.'
  },
  {
    icon: '🎮',
    title: 'Fun Quizzes',
    description: 'Practice modes with immediate feedback make learning feel like playing games, not studying.'
  },
  {
    icon: '🖨️',
    title: 'Printable Charts',
    description: 'Download and print times table charts for offline practice and homework reference.'
  }
] as const;