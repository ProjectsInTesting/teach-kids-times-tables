export interface QuizQuestion {
  num1: number;
  num2: number;
  answer: number;
  userAnswer?: number;
  isCorrect?: boolean;
}

export interface QuizSettings {
  tables: number[];
  questionCount: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  stars: number;
  questions: QuizQuestion[];
  completedAt: Date;
}

export interface UserProgress {
  version: string;
  totalQuizzesCompleted: number;
  bestScores: Record<string, number>;
  completedTables: Set<number>;
  achievements: string[];
  lastUpdated: Date;
}

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export interface TimesTable {
  number: number;
  color: string;
  problems: Array<{
    multiplier: number;
    result: number;
  }>;
}

export type QuizMode = 'single' | 'range';

export interface QuizState {
  currentQuestion: number;
  questions: QuizQuestion[];
  isComplete: boolean;
  startTime: Date;
}