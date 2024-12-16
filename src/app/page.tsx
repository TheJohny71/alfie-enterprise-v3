"use client";

import { useState, useEffect } from 'react';
import { Hero } from "@/components/features/welcome/hero";
import { QuickActions } from "@/components/features/welcome/quick-actions";
import { FeatureCard } from "@/components/features/welcome/feature-card";
import { LanguageSelector } from "@/components/features/welcome/language-selector";
import { Calendar, Globe, Users, Sparkles } from "lucide-react";

export default function WelcomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Intelligent planning that puts your time first",
      tag: "AI-powered scheduling"
    },
    {
      icon: Globe,
      title: "Region Aware",
      description: "Seamlessly adapts to your location and policies",
      tag: "Global support"
    },
    {
      icon: Users,
      title: "Team Sync",
      description: "Keep your team aligned while you're away",
      tag: "Real-time updates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Ambient Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-purple-900/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* Header with Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-teal-500 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              alfie
            </span>
            <LanguageSelector 
              show={showLanguage}
              onToggle={() => setShowLanguage(!showLanguage)}
            />
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4">
        <div className="py-24">
          <Hero />
          <QuickActions />
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                Icon={feature.icon}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tag={feature.tag}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
