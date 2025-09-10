'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { TABLE_COLORS } from '@/lib/constants';

interface Problem {
  multiplier: number;
  result: number;
}

interface TimesTableCardProps {
  number: number;
  problems: Problem[];
  onClose: () => void;
}

export default function TimesTableCard({ number, problems, onClose }: TimesTableCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="max-w-4xl mx-auto"
    >
      <Card 
        className="overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${TABLE_COLORS[number]}22 0%, ${TABLE_COLORS[number]}44 100%)`,
          borderColor: TABLE_COLORS[number]
        }}
      >
        <CardHeader className="text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Close times table"
          >
            ×
          </button>
          
          <div 
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 text-3xl font-bold text-gray-800"
            style={{ backgroundColor: TABLE_COLORS[number] }}
          >
            {number}
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
            {number} Times Table
          </h2>
          <p className="text-gray-600 mt-2">
            Learn all the multiplication facts for {number}
          </p>
        </CardHeader>

        <CardContent>
          {/* Times Table Problems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {problems.map((problem, index) => (
              <motion.div
                key={`${number}x${problem.multiplier}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/90 transition-colors"
              >
                <div className="text-lg sm:text-xl font-semibold text-gray-800 font-display">
                  {number} × {problem.multiplier} = <span className="text-primary-600">{problem.result}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Memory Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              💡 Memory Tip
            </h3>
            <p className="text-gray-700">
              {getMemoryTip(number)}
            </p>
          </motion.div>

          {/* Pattern Recognition */}
          {number > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                🔍 Pattern Spotter
              </h3>
              <p className="text-gray-700">
                {getPatternTip(number, problems)}
              </p>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex-1"
              asChild
            >
              <Link href={`/practice?table=${number}`}>
                🎯 Practice {number} Times Table
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onClose}
              className="flex-1 sm:flex-initial"
            >
              Choose Different Number
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            Ready to test your knowledge? Try the practice quiz above!
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function getMemoryTip(number: number): string {
  const tips: Record<number, string> = {
    0: "Any number times 0 always equals 0. It's like having zero groups of anything!",
    1: "Any number times 1 stays the same. It's like having one group of that number!",
    2: "Double everything! Just add the number to itself. 2 × 7 = 7 + 7 = 14",
    3: "Count by 3s: 3, 6, 9, 12, 15... Each time, add 3 more!",
    4: "Double, then double again! 4 × 6 = (2 × 6) × 2 = 12 × 2 = 24",
    5: "All answers end in 0 or 5! Half the number, then add a 0 or 5.",
    6: "For even numbers, half it and add a 0. For odd numbers, use the pattern!",
    7: "The trickiest one! Look for patterns: 7, 14, 21, 28, 35...",
    8: "Double three times! 8 × 3 = ((3 × 2) × 2) × 2 = 6 × 4 = 24",
    9: "The digits always add up to 9! 9 × 4 = 36, and 3 + 6 = 9",
    10: "Just add a zero to the end! 10 × 7 = 70. Super easy!",
    11: "Up to 11 × 9, just repeat the number! 11 × 4 = 44, 11 × 7 = 77",
    12: "Think of a dozen! 12 × 2 = 24 (2 dozen), 12 × 3 = 36 (3 dozen)"
  };
  
  return tips[number] || "Look for patterns in the numbers to help you remember!";
}

function getPatternTip(number: number, problems: Problem[]): string {
  if (number === 2) {
    return "All answers are even numbers! They end in 2, 4, 6, 8, or 0.";
  }
  
  if (number === 5) {
    return "Answers alternate between ending in 5 and 0: 5, 10, 15, 20, 25, 30...";
  }
  
  if (number === 9) {
    const sums = problems.slice(1, 10).map(p => {
      const digits = p.result.toString().split('').map(Number);
      return digits.reduce((sum, digit) => sum + digit, 0);
    });
    return `The digits in each answer add up to 9! Try: ${problems[4].result} → ${problems[4].result.toString().split('').join(' + ')} = 9`;
  }
  
  if (number === 10) {
    return "Just count by 10s! 10, 20, 30, 40... Always ends with 0!";
  }
  
  if (number === 11 && number <= 9) {
    return "For 1-9: just write the number twice! 11 × 3 = 33, 11 × 7 = 77";
  }
  
  return `Count by ${number}s: ${problems.slice(1, 4).map(p => p.result).join(', ')}... each time add ${number}!`;
}