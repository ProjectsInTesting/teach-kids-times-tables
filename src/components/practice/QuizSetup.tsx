'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { QuizSettings } from '@/types';
import { TIMES_TABLES_RANGE, QUIZ_CONFIG, TABLE_COLORS } from '@/lib/constants';
import { getTableProgress } from '@/lib/storage';

interface QuizSetupProps {
  onStartQuiz: (settings: QuizSettings) => void;
}

export default function QuizSetup({ onStartQuiz }: QuizSetupProps) {
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(QUIZ_CONFIG.defaultQuestionCount);
  const [selectionMode, setSelectionMode] = useState<'individual' | 'range'>('individual');

  const handleTableToggle = (table: number) => {
    setSelectedTables(prev => 
      prev.includes(table) 
        ? prev.filter(t => t !== table)
        : [...prev, table].sort((a, b) => a - b)
    );
  };

  const handleRangeSelection = (start: number, end: number) => {
    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    setSelectedTables(range);
  };

  const handleStartQuiz = () => {
    if (selectedTables.length === 0) return;
    
    onStartQuiz({
      tables: selectedTables,
      questionCount
    });
  };

  const isValidSelection = selectedTables.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Practice Your Times Tables
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose which tables to practice and take a quick quiz to test your knowledge!
          </p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Quiz Setup
            </h2>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Selection Mode Tabs */}
            <div className="flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setSelectionMode('individual')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  selectionMode === 'individual'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Pick Individual Numbers
              </button>
              <button
                onClick={() => setSelectionMode('range')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  selectionMode === 'range'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Choose a Range
              </button>
            </div>

            {/* Individual Selection */}
            {selectionMode === 'individual' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Select Times Tables to Practice
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-13 gap-2">
                  {Array.from({ length: 13 }, (_, i) => (
                    <TableSelectButton
                      key={i}
                      number={i}
                      isSelected={selectedTables.includes(i)}
                      onClick={() => handleTableToggle(i)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Range Selection */}
            {selectionMode === 'range' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  Choose a Range of Tables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickRanges.map((range, index) => (
                    <motion.button
                      key={range.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleRangeSelection(range.start, range.end)}
                      className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all text-left"
                    >
                      <div className="font-semibold text-gray-800">{range.label}</div>
                      <div className="text-sm text-gray-600">{range.description}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Question Count */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-4">
                Number of Questions: {questionCount}
              </label>
              <input
                type="range"
                min={QUIZ_CONFIG.minQuestionCount}
                max={QUIZ_CONFIG.maxQuestionCount}
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{QUIZ_CONFIG.minQuestionCount}</span>
                <span>{QUIZ_CONFIG.maxQuestionCount}</span>
              </div>
            </div>

            {/* Selected Summary */}
            {selectedTables.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-50 border border-primary-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-primary-800 mb-2">Quiz Summary</h4>
                <div className="text-primary-700">
                  <p>Tables: {selectedTables.join(', ')}</p>
                  <p>Questions: {questionCount}</p>
                  <p>Estimated time: {Math.ceil(questionCount * 0.5)} minutes</p>
                </div>
              </motion.div>
            )}
          </CardContent>

          <CardFooter>
            <div className="w-full text-center space-y-4">
              <Button
                onClick={handleStartQuiz}
                disabled={!isValidSelection}
                size="lg"
                className="w-full sm:w-auto px-12"
              >
                {isValidSelection ? '🚀 Start Quiz' : 'Select Tables First'}
              </Button>
              {!isValidSelection && (
                <p className="text-sm text-gray-500">
                  Choose at least one times table to begin
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

interface TableSelectButtonProps {
  number: number;
  isSelected: boolean;
  onClick: () => void;
}

function TableSelectButton({ number, isSelected, onClick }: TableSelectButtonProps) {
  const progress = getTableProgress(number);
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative aspect-square rounded-lg p-2 flex items-center justify-center
        text-gray-800 font-bold transition-all duration-200 min-h-[50px]
        focus:outline-none focus:ring-4 focus:ring-primary-300
        ${isSelected 
          ? 'ring-4 ring-primary-400 shadow-lg scale-105' 
          : 'hover:shadow-md hover:scale-102'
        }
      `}
      style={{ backgroundColor: TABLE_COLORS[number] }}
    >
      {/* Completion Badge */}
      {progress.isCompleted && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}

      <span className="text-xl font-display">{number}</span>

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          layoutId="selection"
          className="absolute inset-0 border-4 border-primary-400 rounded-lg pointer-events-none"
        />
      )}
    </motion.button>
  );
}

const quickRanges = [
  {
    label: 'Easy Start (0-3)',
    description: 'Perfect for beginners',
    start: 0,
    end: 3
  },
  {
    label: 'Building Up (4-6)', 
    description: 'Getting more challenging',
    start: 4,
    end: 6
  },
  {
    label: 'Advanced (7-9)',
    description: 'For confident learners',
    start: 7,
    end: 9
  },
  {
    label: 'Expert Level (10-12)',
    description: 'The biggest numbers',
    start: 10,
    end: 12
  },
  {
    label: 'All Tables (0-12)',
    description: 'Ultimate challenge',
    start: 0,
    end: 12
  }
] as const;