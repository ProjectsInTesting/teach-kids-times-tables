'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import StarRating from '@/components/ui/StarRating';
import { QuizResult } from '@/types';
import { getEncouragementMessage, getTableRange } from '@/lib/quiz';

interface QuizResultsProps {
  result: QuizResult;
  onRetakeQuiz: () => void;
}

export default function QuizResults({ result, onRetakeQuiz }: QuizResultsProps) {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const tables = Array.from(new Set(
    result.questions.map(q => Math.max(q.num1, q.num2))
  )).sort((a, b) => a - b);

  const wrongAnswers = result.questions.filter(q => !q.isCorrect);
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        {/* Main Results Card */}
        <Card className="text-center mb-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50" />
          <CardContent className="relative py-12">
            {/* Celebration Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-8xl mb-6"
            >
              {result.stars === 3 ? '🏆' : result.stars === 2 ? '⭐' : result.stars === 1 ? '👍' : '💪'}
            </motion.div>

            {/* Score Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2 font-display">
                Quiz Complete!
              </h1>
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {result.score}/{result.totalQuestions}
              </div>
              <div className="text-2xl text-gray-700 mb-4">
                {percentage}% Correct
              </div>
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center mb-6"
            >
              <StarRating 
                rating={result.stars} 
                maxRating={3} 
                size="lg" 
                animate={true}
              />
            </motion.div>

            {/* Encouragement Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-xl text-gray-700 max-w-md mx-auto">
                {getEncouragementMessage(result.stars, result.score, result.totalQuestions)}
              </p>
              <p className="text-gray-500 mt-2">
                You practiced {getTableRange(tables)}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button onClick={onRetakeQuiz} size="lg" className="px-8">
                🔄 Try Again
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/practice">
                  🎯 New Quiz
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/learn">
                  📚 Learn More
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  📊 Performance Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Correct Answers</span>
                    <span className="font-semibold text-success-600">
                      {result.score}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Wrong Answers</span>
                    <span className="font-semibold text-error-600">
                      {result.totalQuestions - result.score}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="font-semibold text-primary-600">
                      {percentage}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Star Rating</span>
                    <StarRating rating={result.stars} maxRating={3} size="sm" />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress to 3 stars</span>
                    <span>{Math.min(100, Math.round((percentage / 90) * 100))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, (percentage / 90) * 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    90% or higher for 3 stars! ⭐⭐⭐
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wrong Answers Review */}
          {wrongAnswers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    📝 Let's Review These
                  </h3>
                  
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {wrongAnswers.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                      >
                        <div className="flex-1">
                          <span className="font-semibold">
                            {question.num1} × {question.num2} = {question.answer}
                          </span>
                          {question.userAnswer !== undefined && (
                            <span className="text-error-600 text-sm ml-2">
                              (You answered: {question.userAnswer})
                            </span>
                          )}
                        </div>
                        <Link
                          href={`/learn`}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Review →
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Visit the Learn page to review these times tables 
                      with memory tricks and patterns!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Perfect Score Celebration */}
          {result.score === result.totalQuestions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Perfect Score! Amazing Work! 
                  </h3>
                  <p className="text-gray-600 mb-4">
                    You got every single question right! You're becoming a times table master!
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="warning" asChild>
                      <Link href="/practice">
                        🚀 Try a Harder Challenge
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}