import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Calendar, Users } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="container mx-auto p-8 bg-enterprise-gray-dark text-enterprise-gray-text">
      <div className="text-center py-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-enterprise-teal-DEFAULT">
          Create Moments That Matter
        </h1>
        <p className="mt-4 text-enterprise-gray-text">
          Alfie is the ultimate leave management tool for your enterprise.
        </p>
        <Button variant="primary" className="mt-8">
          Get Started
        </Button>
      </div>

      <div className="flex space-x-4 mt-8">
        <Button variant="outline" className="border-enterprise-purple-medium">
          <Clock className="mr-2" /> Request Time Off
        </Button>
        <Button variant="outline" className="border-enterprise-teal-bright">
          <Calendar className="mr-2" /> Team Calendar
        </Button>
        <Button variant="outline" className="border-enterprise-purple-light">
          <Users className="mr-2" /> Team Availability
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <Card variant="feature" className="bg-enterprise-gray-card">
          <h3 className="text-enterprise-teal-DEFAULT font-bold">Intelligent Scheduling</h3>
          <p className="text-enterprise-gray-text">
            Alfie's AI-powered scheduling tools ensure seamless leave management.
          </p>
          <div className="flex items-center mt-4 text-enterprise-purple-light">
            Learn More <span className="ml-2">→</span>
          </div>
        </Card>
        {/* Add more feature cards here */}
      </div>
    </div>
  );
}
