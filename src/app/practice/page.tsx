'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import QuizSetup from '@/components/practice/QuizSetup';
import QuizQuestion from '@/components/practice/QuizQuestion';
import QuizResults from '@/components/practice/QuizResults';
import { QuizSettings, QuizState, QuizQuestion as QuizQuestionType, QuizResult } from '@/types';
import { generateQuizQuestions, calculateQuizResult, checkAnswer } from '@/lib/quiz';
import { updateProgressWithQuizResult } from '@/lib/storage';

type QuizPhase = 'setup' | 'quiz' | 'results';

function PracticePageContent() {
  const searchParams = useSearchParams();
  const [phase, setPhase] = useState<QuizPhase>('setup');
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | undefined>();

  const handleStartQuiz = useCallback((settings: QuizSettings) => {
    const questions = generateQuizQuestions(settings);
    setQuizState({
      currentQuestion: 0,
      questions,
      isComplete: false,
      startTime: new Date()
    });
    setTimeRemaining(30); // 30 seconds per question
    setPhase('quiz');
  }, []);

  // Initialize quiz from URL parameters if present
  useEffect(() => {
    const tableParam = searchParams.get('table');
    if (tableParam) {
      const table = parseInt(tableParam);
      if (!isNaN(table) && table >= 0 && table <= 12) {
        handleStartQuiz({
          tables: [table],
          questionCount: 10
        });
      }
    }
  }, [searchParams, handleStartQuiz]);

  const handleAnswer = useCallback((userAnswer: number) => {
    if (!quizState) return;

    const currentQ = quizState.questions[quizState.currentQuestion];
    const isCorrect = checkAnswer(currentQ, userAnswer);

    // Update the question with user's answer
    const updatedQuestions = [...quizState.questions];
    updatedQuestions[quizState.currentQuestion] = {
      ...currentQ,
      userAnswer,
      isCorrect
    };

    const nextQuestion = quizState.currentQuestion + 1;
    const isLastQuestion = nextQuestion >= quizState.questions.length;

    if (isLastQuestion) {
      // Quiz is complete
      const result = calculateQuizResult(updatedQuestions);
      setQuizResult(result);
      updateProgressWithQuizResult(result);
      setPhase('results');
      setTimeRemaining(undefined);
    } else {
      // Move to next question
      setQuizState({
        ...quizState,
        currentQuestion: nextQuestion,
        questions: updatedQuestions
      });
      setTimeRemaining(30); // Reset timer for next question
    }
  }, [quizState]);

  const handleRetakeQuiz = useCallback(() => {
    if (!quizState) return;
    
    // Regenerate questions with same settings
    const tables = Array.from(new Set(
      quizState.questions.map(q => Math.max(q.num1, q.num2))
    ));
    
    handleStartQuiz({
      tables,
      questionCount: quizState.questions.length
    });
  }, [quizState, handleStartQuiz]);

  const handleNewQuiz = useCallback(() => {
    setPhase('setup');
    setQuizState(null);
    setQuizResult(null);
    setTimeRemaining(undefined);
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (phase === 'quiz' && timeRemaining !== undefined && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => (prev && prev > 0) ? prev - 1 : 0);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && quizState) {
      // Time's up, submit answer as 0 (wrong)
      handleAnswer(0);
    }
  }, [timeRemaining, phase, quizState, handleAnswer]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <AnimatePresence mode="wait">
        {phase === 'setup' && (
          <motion.div
            key="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <QuizSetup onStartQuiz={handleStartQuiz} />
          </motion.div>
        )}

        {phase === 'quiz' && quizState && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <QuizQuestion
              question={quizState.questions[quizState.currentQuestion]}
              questionNumber={quizState.currentQuestion + 1}
              totalQuestions={quizState.questions.length}
              onAnswer={handleAnswer}
              timeRemaining={timeRemaining}
            />
          </motion.div>
        )}

        {phase === 'results' && quizResult && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <QuizResults 
              result={quizResult} 
              onRetakeQuiz={handleRetakeQuiz}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading practice mode...</p>
        </div>
      </div>
    }>
      <PracticePageContent />
    </Suspense>
  );
}