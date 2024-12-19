"use client";

import { FC } from "react";
import { Clock, Users, Building2, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import type { QuickAction } from "./types";

export const QuickActions: FC = () => {
  const router = useRouter();

  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      ariaLabel: "Request Time Off Action",
      action: () => router.push('/calendar?view=personal&action=request')
    },
    {
      icon: Users,
      label: "View Team Calendar",
      ariaLabel: "View Team Calendar Action",
      action: () => router.push('/calendar?view=team')
    },
    {
      icon: Building2,
      label: "Check Holiday Calendar",
      ariaLabel: "Check Holiday Calendar Action",
      action: () => router.push('/calendar?view=holiday')
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
      {actions.map((action) => (
        <button 
          key={action.label}
          onClick={action.action}
          className="group relative flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
          aria-label={action.ariaLabel}
        >
          <div className="flex items-center gap-3 relative">
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-purple-900/20 group-hover:bg-purple-800/30 transition-all duration-300" />
              <action.icon 
                className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-all duration-300 relative" 
                strokeWidth={1.5} 
              />
            </div>
            <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
              {action.label}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
        </button>
      ))}
    </div>
  );
};
