'use client';

import { motion } from 'framer-motion';
import Card, { CardContent } from '@/components/ui/Card';
import StarRating from '@/components/ui/StarRating';
import { CUSTOMER_REVIEWS, APP_CONFIG } from '@/lib/constants';
import { CustomerReview } from '@/types';

export default function CustomerReviews() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": APP_CONFIG.name,
            "description": "Educational website helping kids learn multiplication tables from 0 to 12 in a fun, safe, and simple way.",
            "url": `https://${APP_CONFIG.domain}`,
            "brand": {
              "@type": "Brand",
              "name": APP_CONFIG.domain
            },
            "category": "Educational Software",
            "audience": {
              "@type": "Audience",
              "audienceType": "Children ages 6-10"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": CUSTOMER_REVIEWS.length.toString(),
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": CUSTOMER_REVIEWS.map(review => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })
        }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Parents & Teachers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of families and educators worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>

          {/* Overall Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-4 rounded-2xl border border-yellow-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">out of 5</div>
              </div>
              <div className="flex items-center space-x-2">
                <StarRating rating={5} size="lg" />
                <span className="text-gray-600 text-sm">
                  ({CUSTOMER_REVIEWS.length} reviews)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ReviewCard({ review, index }: { review: CustomerReview; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-xs text-gray-500">
              {new Date(review.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <blockquote className="flex-1 text-gray-700 mb-4 italic">
            "{review.text}"
          </blockquote>
          
          <div className="border-t border-gray-100 pt-4">
            <div className="font-semibold text-gray-900 text-sm">
              {review.name}
            </div>
            <div className="text-gray-500 text-xs">
              {review.role}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}