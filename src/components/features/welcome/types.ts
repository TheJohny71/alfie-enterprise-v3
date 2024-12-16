// src/components/features/welcome/types.ts
import { LucideIcon } from 'lucide-react';

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  description: string;
  action: () => Promise<void>;
  enterpriseRequired?: boolean;
}

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}
