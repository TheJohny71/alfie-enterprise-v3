"use client";

import { FC } from 'react';
import type { FeatureCardProps } from './types';

export const FeatureCard: FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  tag,
  ariaLabel
}) => {
  return (
    <div 
      className="group rounded-lg p-6 border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
      aria-label={ariaLabel}
    >
      <div className="relative w-12 h-12 mb-6">
        <div className="absolute inset-0 rounded-full bg-purple-900/20 group-hover:bg-purple-800/30 transition-all duration-300" />
        <div className="relative w-full h-full flex items-center justify-center">
          <Icon 
            className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-all duration-300" 
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm mb-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      {tag && (
        <span className="inline-block text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
          {tag}
        </span>
      )}
    </div>
  );
};
