// src/components/features/welcome/types.ts
import { LucideIcon } from 'lucide-react';

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  description: string;  // Adding the description field
  action: () => Promise<void>;
  enterpriseRequired?: boolean;
}
