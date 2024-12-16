"use client";

import { FC } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import type { LanguageSelectorProps } from './types';

export const LanguageSelector: FC<LanguageSelectorProps> = ({ show, onToggle }) => {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <Globe className="w-5 h-5" />
        <ChevronDown className="w-4 h-4" />
      </button>
      {show && (
        <div className="absolute right-0 mt-2 py-2 w-48 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-lg">
          {['English', 'Español', 'Français'].map((lang) => (
            <button 
              key={lang} 
              className="w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
