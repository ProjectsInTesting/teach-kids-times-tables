'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TABLE_COLORS, TIMES_TABLES_RANGE } from '@/lib/constants';
import { getTimesTableData } from '@/lib/quiz';
import { getTableProgress } from '@/lib/storage';
import TimesTableCard from './TimesTableCard';

export default function NumberGrid() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const handleTableSelect = (number: number) => {
    setSelectedTable(selectedTable === number ? null : number);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Choose a Times Table to Learn
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Click on any number below to see its complete times table. 
          Watch your progress as you master each one!
        </p>
      </div>

      {/* Number Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-13 gap-3 sm:gap-4 mb-8">
        {Array.from({ length: TIMES_TABLES_RANGE.max - TIMES_TABLES_RANGE.min + 1 }, (_, index) => {
          const number = index + TIMES_TABLES_RANGE.min;
          const progress = getTableProgress(number);
          
          return (
            <NumberCard
              key={number}
              number={number}
              isSelected={selectedTable === number}
              isCompleted={progress.isCompleted}
              bestScore={progress.bestScore}
              onClick={() => handleTableSelect(number)}
            />
          );
        })}
      </div>

      {/* Selected Times Table Display */}
      <AnimatePresence mode="wait">
        {selectedTable !== null && (
          <motion.div
            key={selectedTable}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TimesTableCard
              number={selectedTable}
              problems={getTimesTableData(selectedTable)}
              onClose={() => setSelectedTable(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {selectedTable === null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Select a number to get started!
          </h3>
          <p className="text-gray-500">
            Click any colorful number above to explore its times table
          </p>
        </motion.div>
      )}
    </div>
  );
}

interface NumberCardProps {
  number: number;
  isSelected: boolean;
  isCompleted: boolean;
  bestScore: number;
  onClick: () => void;
}

function NumberCard({ number, isSelected, isCompleted, bestScore, onClick }: NumberCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative aspect-square rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center
        text-gray-800 font-bold transition-all duration-200 min-h-[60px] sm:min-h-[80px]
        number-card focus:outline-none focus:ring-4 focus:ring-primary-300
        ${isSelected ? 'ring-4 ring-primary-400 shadow-xl scale-105' : 'hover:shadow-lg'}
      `}
      style={{ backgroundColor: TABLE_COLORS[number] }}
    >
      {/* Completion Badge */}
      {isCompleted && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-success-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-xs">✓</span>
        </motion.div>
      )}

      {/* Number */}
      <span className="text-2xl sm:text-3xl lg:text-4xl font-display">
        {number}
      </span>

      {/* Best Score */}
      {bestScore > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-1 right-1 text-xs bg-black/20 text-gray-700 px-1.5 py-0.5 rounded"
        >
          {bestScore}%
        </motion.div>
      )}

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          layoutId="selectedIndicator"
          className="absolute inset-0 border-4 border-primary-400 rounded-xl pointer-events-none"
        />
      )}
    </motion.button>
  );
}