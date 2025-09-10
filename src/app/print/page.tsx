'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { TIMES_TABLES_RANGE } from '@/lib/constants';

export default function PrintPage() {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header - Hidden when printing */}
      <div className="no-print py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Printable Times Tables Chart
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Print this comprehensive times tables chart for offline practice, homework, or classroom reference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={handlePrint} size="lg" className="px-8">
                🖨️ Print Chart
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/times-tables-chart.pdf" download>
                  📁 Download PDF
                </a>
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-blue-800 mb-2">📋 Print Tips</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Use landscape orientation for best results</li>
                <li>• Print on standard 8.5" × 11" paper</li>
                <li>• Consider laminating for durability</li>
                <li>• Perfect for desks, folders, or wall display</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Printable Chart */}
      <div className={`${isPrintMode ? 'print-mode' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 print:px-0 print:max-w-none">
          <TimesTablesChart />
        </div>
      </div>
    </div>
  );
}

function TimesTablesChart() {
  return (
    <div className="bg-white print:shadow-none shadow-lg rounded-lg p-6 print:rounded-none print:p-4">
      {/* Chart Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">
          Times Tables Chart (0-12)
        </h2>
        <p className="text-gray-600 print:text-black print:text-sm">
          Complete multiplication reference for grades 1-6
        </p>
      </div>

      {/* Main Multiplication Grid */}
      <div className="grid grid-cols-14 gap-0 border-2 border-gray-900 mb-8 print-avoid-break">
        {/* Header Row */}
        <div className="bg-gray-800 text-white font-bold text-center py-2 text-sm border-r border-gray-600">
          ×
        </div>
        {Array.from({ length: 13 }, (_, i) => (
          <div
            key={`header-${i}`}
            className="bg-gray-800 text-white font-bold text-center py-2 text-sm border-r border-gray-600 last:border-r-0"
          >
            {i}
          </div>
        ))}

        {/* Data Rows */}
        {Array.from({ length: 13 }, (_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="contents">
            {/* Row Header */}
            <div className="bg-gray-800 text-white font-bold text-center py-2 text-sm border-r border-gray-600 border-t border-gray-300">
              {rowIndex}
            </div>
            
            {/* Row Data */}
            {Array.from({ length: 13 }, (_, colIndex) => {
              const result = rowIndex * colIndex;
              const isHighlighted = 
                (rowIndex === 0 || colIndex === 0) ||
                (rowIndex === 1 || colIndex === 1) ||
                (rowIndex === 10 || colIndex === 10) ||
                (rowIndex === 11 || colIndex === 11) ||
                (rowIndex === 12 || colIndex === 12);

              return (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className={`
                    text-center py-2 text-sm font-medium border-r border-gray-300 border-t border-gray-300 last:border-r-0
                    ${isHighlighted ? 'bg-blue-50 print:bg-gray-100' : 'bg-white'}
                    ${result >= 100 ? 'text-xs' : ''}
                  `}
                >
                  {result}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Individual Tables Section */}
      <div className="print-break-before">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Individual Times Tables
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 13 }, (_, tableNum) => (
            <div
              key={`table-${tableNum}`}
              className="border border-gray-300 rounded-lg p-4 print-avoid-break"
            >
              <h4 className="text-lg font-semibold text-center mb-3 text-gray-800">
                {tableNum} Times Table
              </h4>
              <div className="space-y-1">
                {Array.from({ length: 13 }, (_, i) => (
                  <div
                    key={`${tableNum}x${i}`}
                    className="text-sm flex justify-between items-center"
                  >
                    <span>{tableNum} × {i}</span>
                    <span className="font-medium">{tableNum * i}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500 print:text-black">
        <p>© TeachKidsTimesTables.com - Free educational resource</p>
        <p className="mt-1">Visit us online for interactive learning and practice quizzes!</p>
      </div>
    </div>
  );
}