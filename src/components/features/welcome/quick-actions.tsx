"use client";

import { FC } from "react";
import { Clock, Users, Building2, ArrowRight } from "lucide-react";
import type { QuickAction } from "./types";

export const QuickActions: FC = () => {
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      ariaLabel: "Request Time Off Action"
    },
    {
      icon: Users,
      label: "View Team Calendar",
      ariaLabel: "View Team Calendar Action"
    },
    {
      icon: Building2,
      label: "Check Holiday Calendar",
      ariaLabel: "Check Holiday Calendar Action"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
      {actions.map((action) => (
        <button 
          key={action.label}
          className="group relative flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300"
          aria-label={action.ariaLabel}
        >
          <div className="absolute inset-0 bg-teal-600/5 rounded-lg transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
          <div className="flex items-center gap-3 relative">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-teal-600/20 group-hover:bg-teal-600/30 blur-xl transition-all duration-300 group-hover:scale-150" />
              <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <action.icon 
                  className="w-6 h-6 text-teal-500 transition-all duration-300" 
                  strokeWidth={1.5} 
                />
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">
              {action.label}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300 relative" />
        </button>
      ))}
    </div>
  );
};
