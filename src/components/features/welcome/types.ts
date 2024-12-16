import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  action: () => Promise<void>;
  enterpriseRequired?: boolean;
}
