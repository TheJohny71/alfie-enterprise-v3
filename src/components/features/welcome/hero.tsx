// src/components/features/welcome/hero.tsx
import { FC } from 'react';
import { Button } from '@/components/ui/button';

export const Hero: FC = () => {
  return (
    <section className="relative text-center py-16 md:py-24">
      {/* Background gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="container mx-auto px-4">
        {/* Main heading with gradient text effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-purple-600 mb-6">
          Create moments for what matters
        </h1>
        
        {/* Subheading with adaptive color for dark mode */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Streamline your team's leave management with AI-powered scheduling and seamless coordination
        </p>
        
        {/* Primary action button with hover effect */}
        <Button 
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white transform transition-all hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
