"use client";

import { FC } from "react";
import { Clock, Users, Building2, ArrowRight } from "lucide-react";
import type { QuickAction } from "./types";

export const QuickActions: FC = () => {
  const actions: QuickAction[] = [
    {
      icon: Clock,
      label: "Request Time Off",
    },
    {
      icon: Users,
      label: "View Team Calendar",
    },
    {
      icon: Building2,
      label: "Check Holiday Calendar",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24">
      {actions.map((action) => (
        <button 
          key={action.label}
          className="group flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <action.icon className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-300">{action.label}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300" />
        </button>
      ))}
    </div>
  );
};
