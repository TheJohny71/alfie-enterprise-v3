"use client";

import { FC } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import type { LanguageSelectorProps } from './types';

export const LanguageSelector: FC<LanguageSelectorProps> = ({ 
  show, 
  onToggle,
  ariaLabel = "Language Selector" 
}) => {
  const languages = ['English', 'Español', 'Français'];
  
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg p-1"
        aria-label={ariaLabel}
        aria-expanded={show}
        aria-controls="language-menu"
      >
        <Globe className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${show ? 'rotate-180' : ''}`} />
      </button>
      {show && (
        <div 
          id="language-menu"
          role="menu"
          className="absolute right-0 mt-2 py-2 w-48 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-lg shadow-xl shadow-black/10"
          style={{
            translate: "none",
            opacity: 1,
            transform: "none"
          }}
        >
          {languages.map((lang, index) => (
            <button 
              key={lang} 
              role="menuitem"
              className="w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:bg-gray-800/50 focus:text-white transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
