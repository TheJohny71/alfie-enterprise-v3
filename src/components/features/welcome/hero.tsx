"use client";

import { FC } from "react";
import { useState, useEffect } from "react";

const Hero: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-center relative">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 relative">
        <span 
          className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          Create moments
        </span>
        <span 
          className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          for what matters
        </span>
      </h1>

      <p className="mb-12 relative" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
        <span className="text-2xl md:text-3xl text-gray-400 font-light">
          When making time means being present
        </span>
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <button className="px-8 py-3 text-white rounded-lg font-medium bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
          Sign in with SSO
        </button>
        <button className="px-8 py-3 rounded-lg font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
          View Design System
        </button>
      </div>
    </div>
  );
};

export { Hero };
