import { UserProgress, QuizResult } from '@/types';
import { APP_CONFIG } from './constants';

const STORAGE_KEY = APP_CONFIG.storageKey;

export const createDefaultProgress = (): UserProgress => ({
  version: APP_CONFIG.version,
  totalQuizzesCompleted: 0,
  bestScores: {},
  completedTables: new Set(),
  achievements: [],
  lastUpdated: new Date()
});

export const loadProgress = (): UserProgress => {
  if (typeof window === 'undefined') {
    return createDefaultProgress();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return createDefaultProgress();
    }

    const parsed = JSON.parse(stored);
    
    // Convert completedTables array back to Set
    const progress: UserProgress = {
      ...parsed,
      completedTables: new Set(parsed.completedTables || []),
      lastUpdated: new Date(parsed.lastUpdated || Date.now())
    };

    return progress;
  } catch (error) {
    console.warn('Failed to load progress from localStorage:', error);
    return createDefaultProgress();
  }
};

export const saveProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Convert Set to array for JSON serialization
    const toStore = {
      ...progress,
      completedTables: Array.from(progress.completedTables),
      lastUpdated: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  } catch (error) {
    console.warn('Failed to save progress to localStorage:', error);
  }
};

export const updateProgressWithQuizResult = (result: QuizResult): void => {
  const progress = loadProgress();
  
  // Update total quizzes completed
  progress.totalQuizzesCompleted += 1;
  
  // Update best scores for each table
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const tablesKey = result.questions
    .map(q => Math.max(q.num1, q.num2))
    .filter((val, idx, arr) => arr.indexOf(val) === idx)
    .sort((a, b) => a - b)
    .join(',');
  
  if (!progress.bestScores[tablesKey] || progress.bestScores[tablesKey] < percentage) {
    progress.bestScores[tablesKey] = percentage;
  }
  
  // Mark tables as completed if scored 80%+
  if (percentage >= 80) {
    result.questions.forEach(q => {
      progress.completedTables.add(Math.max(q.num1, q.num2));
    });
  }
  
  // Add achievements
  if (result.stars === 3 && !progress.achievements.includes('first_perfect')) {
    progress.achievements.push('first_perfect');
  }
  
  if (progress.totalQuizzesCompleted >= 10 && !progress.achievements.includes('ten_quizzes')) {
    progress.achievements.push('ten_quizzes');
  }
  
  if (progress.completedTables.size >= 13 && !progress.achievements.includes('all_tables')) {
    progress.achievements.push('all_tables');
  }
  
  saveProgress(progress);
};

export const clearProgress = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear progress from localStorage:', error);
  }
};

export const getTableProgress = (tableNumber: number): {
  isCompleted: boolean;
  bestScore: number;
} => {
  const progress = loadProgress();
  return {
    isCompleted: progress.completedTables.has(tableNumber),
    bestScore: progress.bestScores[tableNumber.toString()] || 0
  };
};