// src/app/components/features/calendar/calendar.tsx
'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CalendarProps {
  mode?: 'month' | 'week' | 'day';
  className?: string;
}

export function Calendar({ mode = 'month', className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Helper functions
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

  // Navigation handlers
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Build calendar grid
  const buildCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100 bg-gray-50" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={cn(
            "h-24 border border-gray-100 p-2 transition-colors",
            "hover:bg-gray-50",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50",
            isSelected && "bg-accent/10 border-accent/20",
            isToday && "font-semibold"
          )}
        >
          <span className={cn(
            "inline-flex h-6 w-6 items-center justify-center rounded-full",
            isToday && "bg-accent/10 text-accent"
          )}>
            {day}
          </span>
        </button>
      );
    }

    return days;
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={previousMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px rounded-lg bg-gray-200">
        {/* Weekday headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {buildCalendarDays()}
      </div>
    </div>
  );
}