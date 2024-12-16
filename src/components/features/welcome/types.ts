// src/components/features/welcome/types.ts
import { LucideIcon } from "lucide-react";

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  description: string;
  action: () => Promise<void>;
  enterpriseRequired?: boolean;
}

// Add this interface for the FeatureCard
export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}
