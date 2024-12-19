import { LucideIcon } from "lucide-react";

// Existing interfaces
export interface QuickAction {
  icon: LucideIcon;
  label: string;
  action: () => void;  // Updated to fix deployment issue
  ariaLabel?: string;
  delay?: number;
  href?: string; // Optional property for navigation
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  ariaLabel?: string;
  delay?: number;
}

export interface WelcomePageProps {
  isVisible?: boolean;
  showLanguage?: boolean;
  scrollY?: number;
  prefersReducedMotion?: boolean;
}

export interface FeatureCardProps extends Feature {
  Icon: LucideIcon;
}

export interface LanguageSelectorProps {
  show: boolean;
  onToggle: () => void;
  ariaLabel?: string;
}

export interface IconProps {
  icon: LucideIcon;
  className?: string;
  ariaLabel?: string;
  animated?: boolean;
}

export interface AnimationConfig {
  delay?: number;
  duration?: number;
  prefersReducedMotion?: boolean;
}

// Calendar-related interfaces
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

export interface LeaveRequest {
  startDate: string;
  endDate: string;
  type: 'vacation' | 'sick' | 'personal';
  reason: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  leaves?: LeaveRequest[];
}
