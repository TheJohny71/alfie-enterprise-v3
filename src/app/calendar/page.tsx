"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/features/calendar/calendar';
import { Sparkles, CalendarDays, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CalendarPage() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'personal' | 'team' | 'holiday'>(
    (searchParams.get('view') as 'personal' | 'team' | 'holiday') || 'personal'
  );

  useEffect(() => {
    const viewParam = searchParams.get('view') as 'personal' | 'team' | 'holiday';
    if (viewParam) {
      setView(viewParam);
    }
  }, [searchParams]);

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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* View Selector */}
        <Card className="mb-6 p-4 border-gray-800/50 bg-gray-800/30 backdrop-blur-sm">
          <div className="flex gap-4">
            <Button 
              variant={view === 'personal' ? 'default' : 'ghost'}
              onClick={() => setView('personal')}
              className="flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              Personal
            </Button>
            <Button 
              variant={view === 'team' ? 'default' : 'ghost'}
              onClick={() => setView('team')}
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Team
            </Button>
            <Button 
              variant={view === 'holiday' ? 'default' : 'ghost'}
              onClick={() => setView('holiday')}
              className="flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              Holidays
            </Button>
          </div>
        </Card>

        {/* Calendar Container */}
        <Card className="border-gray-800/50 bg-gray-800/30 backdrop-blur-sm">
          <div className="p-6">
            <Calendar 
              mode="month"
              className="bg-transparent"
            />
          </div>
        </Card>
      </main>
    </div>
  );
}
