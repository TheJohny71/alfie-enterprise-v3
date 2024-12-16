// src/components/features/welcome/types.ts
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

export interface LanguageSelectorProps {
  show: boolean;
  onToggle: () => void;
}
