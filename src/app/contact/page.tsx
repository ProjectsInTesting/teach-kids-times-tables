import type { Metadata } from 'next';
import Card, { CardContent } from '@/components/ui/Card';
import { APP_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the TeachKidsTimesTables.com team. We\'d love to hear your feedback, questions, or success stories!',
  keywords: ['contact', 'support', 'feedback', 'help', 'questions'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or just want to share your success story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📧</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                  <a
                    href={`mailto:${APP_CONFIG.email}`}
                    className="text-primary-600 hover:text-primary-700 text-lg transition-colors"
                  >
                    {APP_CONFIG.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 mb-4">What to Include</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left max-w-sm mx-auto">
                      <li>• Your question or feedback</li>
                      <li>• Which device/browser you're using (if reporting an issue)</li>
                      <li>• Your child's age (for educational feedback)</li>
                      <li>• Any suggestions for improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Quick Answers */}
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❓</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Quick Answers</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactReasons.map((reason, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Invitation */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌟</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Share Your Success Story!
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Has your child mastered their times tables using our site? We'd love to hear about their progress! 
              Your success story could inspire other families and help us improve our educational tools.
            </p>
            <a
              href={`mailto:${APP_CONFIG.email}?subject=Success Story&body=Hi! I'd like to share how ${APP_CONFIG.name} helped my child learn times tables...`}
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-colors"
            >
              ✉️ Share Your Story
            </a>
          </CardContent>
        </Card>

        {/* Response Time & Privacy Note */}
        <div className="mt-8 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-900 mb-3">📬 Our Promise to You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <strong>Quick Response:</strong> We respond to all emails within 24-48 hours (usually much sooner!)
                </div>
                <div>
                  <strong>Privacy First:</strong> We'll never share your email or use it for marketing - just direct responses to your questions
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Is the website completely free?",
    answer: "Yes! No hidden costs, subscriptions, or premium features. Everything is 100% free forever."
  },
  {
    question: "Do you collect any personal information?",
    answer: "No, we collect zero personal data. Progress is saved locally on your device only."
  },
  {
    question: "What ages is this appropriate for?",
    answer: "Designed for ages 6-10, but helpful for anyone learning times tables!"
  },
  {
    question: "Does it work on tablets and phones?",
    answer: "Absolutely! Works great on all devices with touch-friendly controls."
  },
  {
    question: "Can teachers use this in classrooms?",
    answer: "Yes! Perfect for math centers, independent practice, or homework support."
  },
  {
    question: "How do I print the times tables chart?",
    answer: "Visit our Print page and use your browser's print function - it's optimized for printing!"
  }
] as const;

const contactReasons = [
  {
    icon: "💡",
    title: "Suggestions",
    description: "Have ideas for new features or improvements? We'd love to hear them!"
  },
  {
    icon: "🐛", 
    title: "Report Issues",
    description: "Found a bug or something not working right? Let us know so we can fix it!"
  },
  {
    icon: "🏫",
    title: "Educator Support", 
    description: "Questions about using our tools in your classroom or homeschool? We're here to help!"
  }
] as const;