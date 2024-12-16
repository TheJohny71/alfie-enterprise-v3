"use client";

import { FC } from "react";
import { Clock, Users, Building2, ArrowRight } from "lucide-react";
import type { QuickAction } from "./types";

export const QuickActions: FC = () => {
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
      ariaLabel: "Request Time Off Action",
      delay: 100
    },
    {
      icon: Users,
      label: "View Team Calendar",
      ariaLabel: "View Team Calendar Action",
      delay: 200
    },
    {
      icon: Building2,
      label: "Check Holiday Calendar",
      ariaLabel: "Check Holiday Calendar Action",
      delay: 300
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
      {actions.map((action) => (
        <button 
          key={action.label}
          className="group flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
          aria-label={action.ariaLabel}
          style={{
            animationDelay: `${action.delay}ms`,
            translate: "none",
            opacity: 1,
            transform: "none"
          }}
        >
          <div className="flex items-center gap-3">
            <action.icon className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span className="text-gray-300 relative">
              {action.label}
              <span className="absolute -inset-1 rounded-lg bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
};
