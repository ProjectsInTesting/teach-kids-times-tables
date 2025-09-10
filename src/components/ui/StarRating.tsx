'use client';

import { motion } from 'framer-motion';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  animate = true,
  className = ''
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const isFilled = index < rating;
    const isPartial = rating > index && rating < index + 1;
    
    return (
      <motion.div
        key={index}
        initial={animate ? { scale: 0, rotate: -180 } : false}
        animate={animate ? { scale: 1, rotate: 0 } : false}
        transition={animate ? {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: index * 0.1
        } : undefined}
        className="relative"
      >
        <svg
          className={`${sizeClasses[size]} ${className}`}
          fill={isFilled || isPartial ? '#fbbf24' : '#e5e7eb'}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {isPartial && (
          <svg
            className={`${sizeClasses[size]} absolute top-0 left-0`}
            fill="#fbbf24"
            viewBox="0 0 24 24"
            style={{ clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </motion.div>
    );
  });

  return (
    <div className="flex items-center gap-1">
      {stars}
    </div>
  );
}