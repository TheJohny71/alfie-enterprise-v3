import { FC } from 'react';
import { Clock, Users, Calendar, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Using your existing Button component
import type { QuickAction } from './types';

export const QuickActions: FC = () => {
  // Define the quick actions that will be available on the welcome page
  // Each action has an icon, label, and associated function
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      action: async () => {
        // We'll implement this later when we add routing
        console.log("Request time off clicked");
      }
    },
    {
      icon: Calendar,
      label: "View Team Calendar",
      action: async () => {
        console.log("View calendar clicked");
      },
      enterpriseRequired: true // This feature requires enterprise subscription
    },
    {
      icon: Users,
      label: "Manage Team",
      action: async () => {
        console.log("Manage team clicked");
      },
      enterpriseRequired: true
    },
    {
      icon: Settings,
      label: "Settings",
      action: async () => {
        console.log("Settings clicked");
      }
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Button
          key={index}
          onClick={() => action.action()}
          variant="outline" // Using your existing button variants
          className="flex flex-col items-center p-4 h-auto"
        >
          <action.icon className="w-6 h-6 mb-2 text-teal-600 dark:text-teal-400" />
          <span className="text-sm font-medium">
            {action.label}
          </span>
          {action.enterpriseRequired && (
            <span className="text-xs text-purple-600 dark:text-purple-400 mt-1">
              Enterprise
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};
