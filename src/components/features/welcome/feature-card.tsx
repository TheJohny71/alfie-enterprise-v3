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
  // We use a compound className structure for better organization and readability
  const baseCardClass = "p-6 transition-all duration-300 hover:-translate-y-1";
  const backgroundClass = "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700";
  const hoverClass = "hover:shadow-lg hover:border-purple-500/50";

  return (
    <Card className={`${baseCardClass} ${backgroundClass} ${hoverClass}`}>
      {/* Icon container with subtle gradient background for visual interest */}
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full" />
        <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Enterprise or New tag with enhanced styling */}
      {tag && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          {tag}
        </span>
      )}
      
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
