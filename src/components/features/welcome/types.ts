import { LucideIcon } from "lucide-react";

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  action?: () => Promise<void>;
  ariaLabel?: string;
  delay?: number;
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
