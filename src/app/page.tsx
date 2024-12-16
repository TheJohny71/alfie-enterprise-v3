"use client";

import { useState, useEffect, useRef } from 'react';
import { Hero } from "@/components/features/welcome/hero";
import { QuickActions } from "@/components/features/welcome/quick-actions";
import { FeatureCard } from "@/components/features/welcome/feature-card";
import { LanguageSelector } from "@/components/features/welcome/language-selector";
import { Calendar, Globe, Users, Sparkles } from "lucide-react";
import type { Feature } from '@/components/features/welcome/types';

export default function WelcomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check user's motion preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Initialize visibility
    setIsVisible(true);

    // Smooth scroll handler with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const features: Feature[] = [
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Intelligent planning that puts your time first",
      tag: "AI-powered scheduling",
      ariaLabel: "Smart Calendar Feature"
    },
    {
      icon: Globe,
      title: "Region Aware",
      description: "Seamlessly adapts to your location and policies",
      tag: "Global support",
      ariaLabel: "Region Awareness Feature"
    },
    {
      icon: Users,
      title: "Team Sync",
      description: "Keep your team aligned while you're away",
      tag: "Real-time updates",
      ariaLabel: "Team Synchronization Feature"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Enhanced Ambient Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-purple-900/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        {!prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent opacity-50 animate-pulse" />
          </div>
        )}
      </div>

      {/* Enhanced Header with Depth */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo with enhanced animation */}
            <span className="text-xl font-semibold text-teal-500 flex items-center gap-2 relative group">
              <div className="absolute inset-0 bg-teal-500/10 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <Sparkles className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">alfie</span>
            </span>
            
            <LanguageSelector 
              show={showLanguage}
              onToggle={() => setShowLanguage(!showLanguage)}
              ariaLabel="Select language"
            />
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4">
        <div className="py-24">
          <Hero prefersReducedMotion={prefersReducedMotion} />
          <QuickActions />
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                Icon={feature.icon}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tag={feature.tag}
                ariaLabel={feature.ariaLabel}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
