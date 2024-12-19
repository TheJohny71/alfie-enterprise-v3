"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { CalendarView } from '@/components/features/welcome/types';

interface CalendarProps {
  mode?: 'month' | 'week' | 'day';
  view?: CalendarView;
  className?: string;
}

export function Calendar({ mode = 'month', view = 'personal', className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const buildCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div 
          key={`empty-${i}`} 
          className="h-24 border border-gray-800/20 bg-gray-900/20 backdrop-blur-sm" 
        />
      );
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={cn(
            "h-24 border border-gray-800/20 p-2 transition-all duration-200",
            "bg-gray-900/20 backdrop-blur-sm hover:bg-gray-800/30",
            "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
            isSelected && "bg-purple-900/20 border-purple-500/20",
            isToday && "font-semibold"
          )}
        >
          <span
            className={cn(
              "inline-flex h-6 w-6 items-center justify-center rounded-full",
              isToday && "bg-purple-900/20 text-purple-400"
            )}
          >
            {day}
          </span>
          {/* View-specific indicators */}
          {view === 'team' && (
            <div className="mt-1 flex flex-wrap gap-1">
              {/* Team view indicators would go here */}
            </div>
          )}
          {view === 'holiday' && (
            <div className="mt-1 text-xs text-gray-400">
              {/* Holiday indicators would go here */}
            </div>
          )}
        </button>
      );
    }
    return days;
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-purple-400">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4 text-purple-400" />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4 text-purple-400" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px rounded-lg bg-gray-800/20 overflow-hidden">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-gray-900/40 py-2 text-center text-sm font-medium text-gray-400"
          >
            {day}
          </div>
        ))}
        {buildCalendarDays()}
      </div>
    </div>
  );
}
