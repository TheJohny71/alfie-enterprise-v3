// src/components/features/welcome/quick-actions.tsx
import { FC } from 'react';
import { Clock, Users, Calendar, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { QuickAction } from './types';

export const QuickActions: FC = () => {
  // Enhanced quick actions with more descriptive labels and enterprise features
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      description: "Submit and track your leave requests",
      action: async () => console.log("Request time off clicked")
    },
    {
      icon: Calendar,
      label: "Team Calendar",
      description: "View and coordinate team schedules",
      action: async () => console.log("View calendar clicked"),
      enterpriseRequired: true
    },
    {
      icon: Users,
      label: "Team Availability",
      description: "Check who's available and when",
      action: async () => console.log("Check availability clicked"),
      enterpriseRequired: true
    },
    {
      icon: Settings,
      label: "Settings",
      description: "Customize your experience",
      action: async () => console.log("Settings clicked")
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => action.action()}
          className="flex flex-col items-center p-6 h-auto hover:border-purple-500 transition-all hover:-translate-y-1 bg-white dark:bg-gray-800"
        >
          <action.icon className="w-8 h-8 mb-4 text-teal-600 dark:text-teal-400" />
          <span className="text-lg font-semibold mb-2">{action.label}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {action.description}
          </span>
          {action.enterpriseRequired && (
            <span className="mt-3 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">
              Enterprise
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};
