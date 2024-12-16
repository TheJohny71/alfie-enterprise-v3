"use client";

import { FC } from 'react';
import type { FeatureCardProps } from './types';

export const FeatureCard: FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  tag,
  ariaLabel,
  delay = 0
}) => {
  return (
    <div 
      className="group rounded-lg p-6 border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
      aria-label={ariaLabel || title}
      style={{ 
        animationDelay: `${delay}ms`,
        translate: "none",
        opacity: 1,
        transform: "none"
      }}
    >
      <Icon 
        className="w-6 h-6 mb-4 text-teal-500 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3" 
        aria-hidden="true"
      />
      <h3 className="text-lg font-semibold text-white mb-2 relative">
        {title}
        <span className="absolute -inset-1 rounded-lg bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
