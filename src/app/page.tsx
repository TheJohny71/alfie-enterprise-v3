'use client'

import React, { useState } from 'react';
import { Calendar, Globe, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isAssistantVisible, setAssistantVisible] = useState(false);
  
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: 'Smart Calendar',
      description: 'Intelligent planning that puts your time first',
      subtext: 'AI-powered scheduling'
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: 'Region Aware',
      description: 'Seamlessly adapts to your location and policies',
      subtext: 'Global support'
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Team Sync',
      description: "Keep your team aligned while you're away",
      subtext: 'Real-time updates'
    }
  ];

  const ssoProviders = [
    { name: 'Azure AD', color: 'bg-blue-600' },
    { name: 'Okta', color: 'bg-blue-500' },
    { name: 'Google', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header with refined spacing */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-900">
            alfie
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
              aria-label="Region Settings"
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main content with gradient accent */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Hero section with enhanced typography */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent -z-10 rounded-3xl" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Create moments for<br />what matters
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            When making time means being present
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative group">
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300">
                Sign in with SSO
              </button>
              <div className="hidden group-hover:flex absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 gap-2">
                {ssoProviders.map((provider, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-md text-sm text-white transition-all duration-300 hover:opacity-90 ${provider.color}`}
                  >
                    {provider.name}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/design-system">
              <button className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all duration-300">
                View Design System
              </button>
            </Link>
          </div>
        </div>

        {/* Feature grid with enhanced responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
              style={{
                transform: `translateY(${index * 8}px)`,
                opacity: 0,
                animation: `slideUp 0.5s cubic-bezier(0.4, 0.0, 0.2, 1) ${index * 0.1}s forwards`
              }}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {feature.description}
              </p>
              <p className="text-sm font-medium text-emerald-700">
                {feature.subtext}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced AI Assistant Button */}
      <button
        onClick={() => setAssistantVisible(!isAssistantVisible)}
        className="fixed bottom-8 right-8 bg-white p-4 rounded-full border border-gray-200 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6 text-accent" />
      </button>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
