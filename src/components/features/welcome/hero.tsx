"use client";

import { FC } from "react";
import { useState, useEffect } from "react";

export const Hero: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="text-center relative"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
    >
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 relative"
        aria-label="Create moments for what matters"
      >
        <span 
          className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Create moments
        </span>
        <span 
          className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600"
          style={{ 
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          for what matters
        </span>
      </h1>

      <p 
        className="mb-12 relative" 
        style={{ 
          transform: `translateY(${scrollY * 0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <span className="text-2xl md:text-3xl text-gray-400 font-light">
          When making time means being present
        </span>
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <button 
          className="px-8 py-3 text-white rounded-lg font-medium bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          aria-label="Sign in with SSO"
        >
          Sign in with SSO
        </button>
        <button 
          className="px-8 py-3 rounded-lg font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          aria-label="View Design System"
        >
          View Design System
        </button>
      </div>
    </div>
  );
};
