import { LucideIcon } from 'lucide-react';

// These interfaces define the shape of our welcome page components
export interface FeatureCardProps {
  Icon: LucideIcon;  // Icon component from lucide-react
  title: string;     // Feature title
  description: string; // Feature description
  tag?: string;      // Optional tag like "Enterprise" or "New"
}

export interface QuickAction {
  icon: LucideIcon;  // Action icon
  label: string;     // Action label
  action: () => Promise<void>; // Async action handler
  enterpriseRequired?: boolean; // Whether this is an enterprise feature
}
