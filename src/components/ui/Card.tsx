'use client';

import { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'colorful' | 'bordered';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className,
  onClick,
  style,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-100',
    colorful: 'shadow-lg border-2 border-white/20',
    bordered: 'bg-white border-2 border-gray-200 hover:border-primary-300',
  };

  const CardComponent = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 }
  } : {};

  return (
    <CardComponent
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={style}
      onClick={onClick}
      {...(hover ? motionProps : {})}
      {...props}
    >
      {children}
    </CardComponent>
  );
}

export function CardHeader({ 
  children, 
  className, 
  ...props 
}: { children: ReactNode; className?: string; } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ 
  children, 
  className, 
  ...props 
}: { children: ReactNode; className?: string; } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ 
  children, 
  className, 
  ...props 
}: { children: ReactNode; className?: string; } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 pb-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}