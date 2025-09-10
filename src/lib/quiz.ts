import { QuizQuestion, QuizResult, QuizSettings } from '@/types';
import { QUIZ_CONFIG } from './constants';

export const generateQuizQuestions = (settings: QuizSettings): QuizQuestion[] => {
  const { tables, questionCount } = settings;
  const questions: QuizQuestion[] = [];
  
  for (let i = 0; i < questionCount; i++) {
    // Randomly select a table from the chosen tables
    const tableIndex = Math.floor(Math.random() * tables.length);
    const num1 = tables[tableIndex];
    
    // Generate a random multiplier (0-12)
    const num2 = Math.floor(Math.random() * 13);
    
    questions.push({
      num1,
      num2,
      answer: num1 * num2
    });
  }
  
  return shuffleArray(questions);
};

export const calculateQuizResult = (questions: QuizQuestion[]): QuizResult => {
  const correctAnswers = questions.filter(q => q.isCorrect).length;
  const score = correctAnswers;
  const percentage = correctAnswers / questions.length;
  
  let stars = 0;
  if (percentage >= QUIZ_CONFIG.starsThresholds.three) stars = 3;
  else if (percentage >= QUIZ_CONFIG.starsThresholds.two) stars = 2;
  else if (percentage >= QUIZ_CONFIG.starsThresholds.one) stars = 1;
  
  return {
    score,
    totalQuestions: questions.length,
    stars,
    questions,
    completedAt: new Date()
  };
};

export const checkAnswer = (question: QuizQuestion, userAnswer: number): boolean => {
  return question.answer === userAnswer;
};

export const formatQuestionText = (question: QuizQuestion): string => {
  return `${question.num1} × ${question.num2}`;
};

export const getEncouragementMessage = (stars: number, score: number, total: number): string => {
  const percentage = Math.round((score / total) * 100);
  
  if (stars === 3) {
    return "🌟 Perfect! You're a times table superstar! 🌟";
  } else if (stars === 2) {
    return "⭐ Great job! You're getting really good at this! ⭐";
  } else if (stars === 1) {
    return "👍 Good work! Keep practicing and you'll improve!";
  } else {
    return "💪 Don't give up! Every mistake helps you learn better!";
  }
};

export const getTableRange = (tables: number[]): string => {
  if (tables.length === 1) {
    return `${tables[0]} times table`;
  }
  
  const sorted = [...tables].sort((a, b) => a - b);
  if (sorted.length === 2) {
    return `${sorted[0]} and ${sorted[1]} times tables`;
  }
  
  if (areConsecutive(sorted)) {
    return `${sorted[0]}-${sorted[sorted.length - 1]} times tables`;
  }
  
  if (sorted.length <= 3) {
    return sorted.join(', ') + ' times tables';
  }
  
  return `${sorted.length} different times tables`;
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const areConsecutive = (numbers: number[]): boolean => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] + 1) {
      return false;
    }
  }
  return true;
};

export const getTimesTableData = (number: number) => {
  const problems = [];
  for (let i = 0; i <= 12; i++) {
    problems.push({
      multiplier: i,
      result: number * i
    });
  }
  return problems;
};