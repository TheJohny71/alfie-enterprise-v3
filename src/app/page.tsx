// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, Users, ChevronDown, Bell,
  HelpCircle, Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Color tokens based on your scheme
const tokens = {
  teal: {
    default: '#00a68e',
    bright: '#00c4a8'
  },
  purple: {
    light: '#8B5CF6',
    medium: '#6D5AE6',
    dark: '#5B21B6'
  },
  gray: {
    dark: '#1a1d24',
    card: '#1E2128',
    border: '#2D3748',
    text: '#94A3B8'
  }
};

const QuickAction = ({ Icon, label, badge }) => (
  <div className="w-full p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-100 flex items-center group transition-all duration-300">
    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5" style={{ color: tokens.teal.bright }} />
    </div>
    <div className="flex-1 text-center">
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
    {badge && (
      <span className="px-2 h-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center">
        {badge}
      </span>
    )}
  </div>
);

const FeatureCard = ({ Icon, title, description, tag }) => (
  <Card className="p-6 border-gray-100 hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6" style={{ color: tokens.teal.bright }} />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-sm mb-4 text-gray-500">{description}</p>
    <span className="text-sm font-medium" style={{ color: tokens.purple.light }}>{tag}</span>
  </Card>
);

const WelcomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-semibold" style={{ color: tokens.teal.default }}>
              alfie
            </span>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-400">
                <HelpCircle className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-400">
                <Bell className="w-5 h-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-900" />
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-3 text-gray-900">
            <div>Create moments for</div>
            <div>what matters</div>
          </h1>
          <p className="text-gray-400">
            When making time means being present
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <QuickAction Icon={Clock} label="Request Time Off" />
          <QuickAction Icon={Users} label="Team Calendar" badge="2" />
          <QuickAction Icon={Building2} label="Holiday Calendar" />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={Clock}
            title="Smart Calendar"
            description="AI-powered planning that adapts to your team's schedule"
            tag="Predictive scheduling"
          />
          <FeatureCard
            Icon={Building2}
            title="Region Aware"
            description="Automatic holiday and policy adaptation by location"
            tag="Global ready"
          />
          <FeatureCard
            Icon={Users}
            title="Team Sync"
            description="Real-time team availability and coverage insights"
            tag="Live updates"
          />
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
