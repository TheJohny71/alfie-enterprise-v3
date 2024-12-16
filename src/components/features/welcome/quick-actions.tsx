// src/components/features/welcome/quick-actions.tsx
import { FC } from 'react';
import { Clock, Users, Calendar, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { QuickAction } from './types';

export const QuickActions: FC = () => {
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      description: "Plan your leave with smart suggestions",
      action: async () => console.log("Request time off clicked")
    },
    {
      icon: Calendar,
      label: "Team Calendar",
      description: "View your team's schedule",
      action: async () => console.log("View calendar clicked"),
      enterpriseRequired: true
    },
    {
      icon: Users,
      label: "Team Availability",
      description: "Check team coverage",
      action: async () => console.log("Team availability clicked"),
      enterpriseRequired: true
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Customize your workspace",
      action: async () => console.log("Settings clicked")
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => action.action()}
          className="flex flex-col items-center p-6 h-auto group relative"
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/0 to-purple-50/50 dark:from-purple-900/0 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          
          <action.icon className="w-8 h-8 mb-3 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
          
          <span className="text-base font-semibold mb-1 relative z-10">
            {action.label}
          </span>
          
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center relative z-10">
            {action.description}
          </span>
          
          {action.enterpriseRequired && (
            <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 relative z-10">
              Enterprise
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};
