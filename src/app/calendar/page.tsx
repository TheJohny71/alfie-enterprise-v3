"use client";

import { useState } from 'react';
import { Calendar } from '@/components/features/calendar/calendar';
import { Sparkles, CalendarDays, Users, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { CalendarView } from '@/components/features/welcome/types';

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState<CalendarView>('personal');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-purple-500 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              alfie calendar
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* View Selector */}
        <div className="flex gap-4 mb-6">
          <Button 
            variant={currentView === 'personal' ? 'default' : 'secondary'}
            className="flex items-center gap-2"
            onClick={() => setCurrentView('personal')}
          >
            <CalendarDays className="w-4 h-4" />
            Personal
          </Button>
          <Button 
            variant={currentView === 'team' ? 'default' : 'secondary'}
            className="flex items-center gap-2"
            onClick={() => setCurrentView('team')}
          >
            <Users className="w-4 h-4" />
            Team
          </Button>
          <Button 
            variant={currentView === 'holiday' ? 'default' : 'secondary'}
            className="flex items-center gap-2"
            onClick={() => setCurrentView('holiday')}
          >
            <Building2 className="w-4 h-4" />
            Holidays
          </Button>
        </div>

        {/* Calendar Container */}
        <Card className="border-gray-800/50 bg-gray-800/30 backdrop-blur-sm">
          <div className="p-6">
            <Calendar 
              mode="month" 
              className={currentView === 'team' ? 'team-view' : ''}
            />
          </div>
        </Card>
      </main>
    </div>
  );
}
