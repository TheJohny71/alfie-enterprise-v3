// src/components/features/welcome/types.ts
import { LucideIcon } from "lucide-react";

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  action?: () => Promise<void>;
  ariaLabel: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  ariaLabel: string;
}

export interface WelcomePageProps {
  isVisible?: boolean;
  showLanguage?: boolean;
  scrollY?: number;
  prefersReducedMotion?: boolean;
}

export interface FeatureCardProps extends Feature {
  delay?: number;
}

export interface LanguageSelectorProps {
  show: boolean;
  onToggle: () => void;
}

export interface IconProps {
  icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
}
