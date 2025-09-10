import type { Metadata } from 'next';
import NumberGrid from '@/components/learn/NumberGrid';

export const metadata: Metadata = {
  title: 'Learn Times Tables',
  description: 'Interactive multiplication table learning with colorful number cards, memory tips, and pattern recognition for kids ages 6-10.',
  keywords: ['learn multiplication', 'times tables', 'interactive math', 'kids learning', 'multiplication facts'],
};

export default function LearnPage() {
  return <NumberGrid />;
}