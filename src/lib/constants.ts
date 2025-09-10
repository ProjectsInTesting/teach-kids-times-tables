export const APP_CONFIG = {
  name: 'Teach Kids Times Tables',
  domain: 'TeachKidsTimesTables.com',
  email: 'support@TeachKidsTimesTables.com',
  version: '1.0.0',
  storageKey: 'tt.progress.v1'
} as const;

export const TIMES_TABLES_RANGE = {
  min: 0,
  max: 12
} as const;

export const QUIZ_CONFIG = {
  defaultQuestionCount: 10,
  maxQuestionCount: 20,
  minQuestionCount: 5,
  timePerQuestion: 30000, // 30 seconds
  starsThresholds: {
    three: 0.9, // 90%+
    two: 0.7,   // 70%+
    one: 0.5    // 50%+
  }
} as const;

export const TABLE_COLORS = [
  '#fef3c7', // 0 - yellow-100
  '#ddd6fe', // 1 - violet-200
  '#fecaca', // 2 - red-200
  '#a7f3d0', // 3 - emerald-200
  '#bfdbfe', // 4 - blue-200
  '#f9a8d4', // 5 - pink-200
  '#fed7aa', // 6 - orange-200
  '#c7d2fe', // 7 - indigo-200
  '#bbf7d0', // 8 - green-200
  '#fde68a', // 9 - yellow-200
  '#e9d5ff', // 10 - purple-200
  '#fbb6ce', // 11 - pink-300
  '#fcd34d'  // 12 - yellow-300
] as const;

export const CUSTOMER_REVIEWS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Parent of Emma (8)',
    rating: 5,
    text: 'Emma loves the colorful number cards! She went from struggling with 7s to knowing them perfectly in just two weeks.',
    date: '2024-01-15'
  },
  {
    id: '2', 
    name: 'Mike Chen',
    role: '3rd Grade Teacher',
    rating: 5,
    text: 'This is exactly what my classroom needed. The kids are actually excited about multiplication now!',
    date: '2024-01-20'
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    role: 'Homeschool Mom',
    rating: 5,
    text: 'Safe, simple, and effective. No ads or distractions - just pure learning. My son mastered his 12s in a week!',
    date: '2024-02-01'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Parent of twins (7)',
    rating: 5,
    text: 'Both kids can use it without any help. The star system keeps them motivated to improve their scores.',
    date: '2024-02-10'
  },
  {
    id: '5',
    name: 'Maria Garcia',
    role: 'Elementary Tutor',
    rating: 4,
    text: 'Great tool for reinforcing what we learn in sessions. Parents love having something educational at home.',
    date: '2024-02-15'
  },
  {
    id: '6',
    name: 'Jennifer Wu',
    role: 'Parent of Alex (9)',
    rating: 5,
    text: 'Finally found something that makes math fun! Alex asks to practice his times tables now.',
    date: '2024-02-20'
  }
] as const;

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/learn', label: 'Learn' },
  { href: '/practice', label: 'Practice' },
  { href: '/print', label: 'Print Chart' }
] as const;