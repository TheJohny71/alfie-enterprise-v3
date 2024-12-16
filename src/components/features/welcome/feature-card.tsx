"use client";

import { FC } from 'react';
import type { FeatureCardProps } from './types';

export const FeatureCard: FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  tag
}) => {
  return (
    <div className="group rounded-lg p-6 border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
      <Icon 
        className="w-6 h-6 mb-4 text-teal-500 group-hover:scale-110 transition-transform duration-300" 
        aria-hidden="true"
      />
      <h3 className="text-lg font-semibold text-white mb-2">
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
