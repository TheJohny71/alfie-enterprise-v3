"use client";

import { useSearchParams } from 'next/navigation';
import { Calendar } from '@/components/features/calendar/calendar';
import { Sparkles } from 'lucide-react';

export default function CalendarPage() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || 'personal';

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
        <div className="rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm p-6">
          <Calendar mode="month" />
        </div>
      </main>
    </div>
  );
}
