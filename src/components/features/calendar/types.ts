// src/components/features/calendar/types.ts
export type CalendarView = 'personal' | 'team' | 'holiday';
export type CalendarMode = 'month' | 'week' | 'day';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'leave' | 'holiday' | 'team-leave';
  status?: 'approved' | 'pending' | 'rejected';
  userId?: string;
  description?: string;
}

export interface CalendarProps {
  mode?: CalendarMode;
  view?: CalendarView;
  className?: string;
  onEventClick?: (event: CalendarEvent) => void;
  onDateSelect?: (date: Date) => void;
}
