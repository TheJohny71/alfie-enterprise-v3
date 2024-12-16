import { LucideIcon } from "lucide-react";

export interface QuickAction {
  icon: LucideIcon;
  label: string;
  action?: () => Promise<void>;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export interface WelcomePageProps {
  isVisible?: boolean;
  showLanguage?: boolean;
  scrollY?: number;
}

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export interface LanguageSelectorProps {
  show: boolean;
  onToggle: () => void;
}
