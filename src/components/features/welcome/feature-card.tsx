import { FC } from 'react';
import type { FeatureCardProps } from './types';
import { Card } from '@/components/ui/card'; // Using your existing Card component

export const FeatureCard: FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  tag
}) => {
  // We're using your existing Card component as a base and enhancing it
  // with specific styling for feature presentation
  return (
    <Card className="p-6 transition-all duration-300 hover:-translate-y-1">
      {/* Icon container with consistent sizing and color */}
      <div className="mb-4">
        <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
      </div>

      {/* Enterprise or New tag displayed when provided */}
      {tag && (
        <span className="inline-block px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 dark:text-purple-300 dark:bg-purple-900 rounded-full mb-2">
          {tag}
        </span>
      )}

      {/* Feature title with appropriate heading size */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Feature description with muted color for visual hierarchy */}
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Card>
  );
};
