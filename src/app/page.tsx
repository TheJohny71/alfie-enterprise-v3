import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Calendar, Users } from 'lucide-react';

export default function WelcomePage() {
  return (
    // Adding a main tag for better semantic HTML structure
    <main className="container mx-auto p-8 bg-enterprise-gray-dark text-enterprise-gray-text">
      {/* Hero Section */}
      <div className="text-center py-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-enterprise-teal-DEFAULT">
          Create Moments That Matter
        </h1>
        <p className="mt-4 text-enterprise-gray-text">
          Alfie is the ultimate leave management tool for your enterprise.
        </p>
        {/* Adding role="button" for better accessibility */}
        <Button variant="primary" className="mt-8" role="button">
          Get Started
        </Button>
      </div>

      {/* Quick Actions Section */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
        <Button variant="outline" className="border-enterprise-purple-medium">
          <Clock className="mr-2" aria-hidden="true" /> Request Time Off
        </Button>
        <Button variant="outline" className="border-enterprise-teal-bright">
          <Calendar className="mr-2" aria-hidden="true" /> Team Calendar
        </Button>
        <Button variant="outline" className="border-enterprise-purple-light">
          <Users className="mr-2" aria-hidden="true" /> Team Availability
        </Button>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <Card className="bg-enterprise-gray-card p-6">
          <h3 className="text-enterprise-teal-DEFAULT font-bold text-xl mb-3">
            Intelligent Scheduling
          </h3>
          <p className="text-enterprise-gray-text">
            Alfie&apos;s AI-powered scheduling tools ensure seamless leave management.
          </p>
          <div className="flex items-center mt-4 text-enterprise-purple-light hover:text-enterprise-purple-medium transition-colors">
            Learn More <span className="ml-2" aria-hidden="true">→</span>
          </div>
        </Card>
        {/* Add more feature cards here */}
      </div>
    </main>
  );
}
