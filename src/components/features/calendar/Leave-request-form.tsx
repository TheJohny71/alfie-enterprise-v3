// src/components/features/calendar/leave-request-form.tsx
"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface LeaveRequestFormProps {
  onSubmit: (data: LeaveRequestData) => void;
  onCancel: () => void;
}

interface LeaveRequestData {
  startDate: string;
  endDate: string;
  reason: string;
  type: 'vacation' | 'sick' | 'personal';
}

export function LeaveRequestForm({ onSubmit, onCancel }: LeaveRequestFormProps) {
  const [formData, setFormData] = useState<LeaveRequestData>({
    startDate: '',
    endDate: '',
    reason: '',
    type: 'vacation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="border-gray-800/50 bg-gray-800/30 backdrop-blur-sm p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-100">Request Time Off</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Start Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">End Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Leave Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as LeaveRequestData['type'] }))}
            className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 focus:border-teal-500 focus:ring-teal-500"
            required
          >
            <option value="vacation">Vacation</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Reason</label>
          <textarea
            value={formData.reason}
            onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 focus:border-teal-500 focus:ring-teal-500"
            rows={4}
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            Submit Request
          </Button>
        </div>
      </form>
    </Card>
  );
}
