// src/components/features/welcome/feature-card.tsx
import { FC } from 'react';
import type { FeatureCardProps } from './types';
import { Card } from '@/components/ui/card';

export const FeatureCard: FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  tag
}) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      {/* Icon container with gradient background effect */}
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full" />
        <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400 relative" />
      </div>
      
      {/* Enterprise or New tag with enhanced styling */}
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30 rounded-full mb-3">
          {tag}
        </span>
      )}
      
      {/* Feature title with proper hierarchy */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      
      {/* Feature description with improved readability */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
