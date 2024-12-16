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
      className="group rounded-lg p-6 border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
      aria-label={ariaLabel}
    >
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full bg-teal-600/20 group-hover:bg-teal-600/30 blur-xl transition-all duration-300 group-hover:scale-150" />
        <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon 
            className="w-8 h-8 text-teal-500 transition-all duration-300" 
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 transform transition-all duration-300 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="text-sm mb-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      {tag && (
        <span className="inline-block text-xs font-medium text-teal-500 group-hover:text-teal-400 transition-colors duration-300">
          {tag}
        </span>
      )}
    </div>
  );
};
