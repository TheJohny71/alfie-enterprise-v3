"use client";

import { FC } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import type { LanguageSelectorProps } from './types';

export const LanguageSelector: FC<LanguageSelectorProps> = ({ show, onToggle, ariaLabel }) => {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative group px-4 py-2 rounded-lg"
        aria-expanded={show}
        aria-haspopup="true"
        aria-label={ariaLabel || "Language selector"}
      >
        <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/50 rounded-lg transition-all duration-300" />
        <Globe className="w-5 h-5 relative" />
        <ChevronDown className={`w-4 h-4 relative transition-transform duration-300 ${show ? 'rotate-180' : ''}`} />
      </button>
      
      {show && (
        <div className="absolute right-0 mt-2 py-2 w-48 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-lg transform-gpu transition-all duration-300">
          {['English', 'Español', 'Français'].map((lang) => (
            <button 
              key={lang} 
              className="w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
