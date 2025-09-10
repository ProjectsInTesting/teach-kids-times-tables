'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { QuizQuestion as QuizQuestionType } from '@/types';
import { formatQuestionText } from '@/lib/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: number) => void;
  timeRemaining?: number;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  timeRemaining
}: QuizQuestionProps) {
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when question changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Reset state for new question
    setUserInput('');
    setShowFeedback(false);
  }, [question]);

  const handleSubmit = () => {
    const answer = parseInt(userInput);
    if (isNaN(answer)) return;

    const correct = answer === question.answer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Auto-advance after showing feedback
    setTimeout(() => {
      onAnswer(answer);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userInput.trim() && !showFeedback) {
      handleSubmit();
    }
  };

  const progress = ((questionNumber - 1) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <motion.div
          className="bg-primary-500 h-2 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Question Counter and Timer */}
      <div className="flex justify-between items-center mb-8 text-sm text-gray-600">
        <span>Question {questionNumber} of {totalQuestions}</span>
        {timeRemaining !== undefined && (
          <div className="flex items-center space-x-2">
            <span>⏱️</span>
            <span className={timeRemaining < 10 ? 'text-error-600 font-semibold' : ''}>
              {timeRemaining}s
            </span>
          </div>
        )}
      </div>

      <motion.div
        key={`question-${questionNumber}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        {/* Question */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="mb-8"
        >
          <h2 className="quiz-question mb-4">
            {formatQuestionText(question)} = ?
          </h2>
        </motion.div>

        {/* Input and Answer */}
        <AnimatePresence mode="wait">
          {!showFeedback ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="number"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full max-w-xs mx-auto text-3xl font-bold text-center p-4 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all"
                  placeholder="?"
                  inputMode="numeric"
                />
              </div>
              
              <Button
                onClick={handleSubmit}
                disabled={!userInput.trim()}
                size="lg"
                className="px-8"
              >
                Submit Answer
              </Button>

              {/* Number Pad for Mobile */}
              <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mt-6 sm:hidden">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => setUserInput(prev => prev + num)}
                    className="aspect-square bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-semibold transition-colors min-h-[48px]"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => setUserInput(prev => prev.slice(0, -1))}
                  className="aspect-square bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition-colors"
                >
                  ⌫
                </button>
                <button
                  onClick={() => setUserInput(prev => prev + '0')}
                  className="aspect-square bg-gray-100 hover:bg-gray-200 rounded-lg text-xl font-semibold transition-colors"
                >
                  0
                </button>
                <button
                  onClick={() => setUserInput('')}
                  className="aspect-square bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-semibold transition-colors"
                >
                  Clear
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-6"
            >
              {/* Feedback Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`text-6xl mb-4 ${
                  isCorrect ? 'animate-bounce' : 'animate-pulse'
                }`}
              >
                {isCorrect ? '🎉' : '💭'}
              </motion.div>

              {/* Answer Display */}
              <div className="space-y-2">
                <div className="quiz-question text-primary-600">
                  {formatQuestionText(question)} = {question.answer}
                </div>
                <div className={`text-xl font-semibold ${
                  isCorrect ? 'text-success-600' : 'text-error-600'
                }`}>
                  {isCorrect ? 'Correct! Well done!' : `Your answer: ${userInput}`}
                </div>
              </div>

              {/* Encouragement */}
              <p className={`text-lg ${
                isCorrect ? 'text-success-700' : 'text-gray-600'
              }`}>
                {isCorrect
                  ? encouragementMessages.correct[Math.floor(Math.random() * encouragementMessages.correct.length)]
                  : encouragementMessages.incorrect[Math.floor(Math.random() * encouragementMessages.incorrect.length)]
                }
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const encouragementMessages = {
  correct: [
    "Amazing! You're a math star! ⭐",
    "Perfect! Keep up the great work! 🌟",
    "Excellent! You've got this! 🎯",
    "Fantastic! You're getting really good! 🚀",
    "Outstanding! Way to go! 🏆"
  ],
  incorrect: [
    "Don't worry, practice makes perfect! 💪",
    "Keep trying, you're learning! 📚",
    "That's okay, mistakes help us learn! 🧠",
    "Good effort, let's keep going! 👍",
    "No problem, you'll get the next one! ✨"
  ]
} as const;