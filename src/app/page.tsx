import { Hero } from '@/components/features/welcome/hero';
import { FeatureCard } from '@/components/features/welcome/feature-card';
import { QuickActions } from '@/components/features/welcome/quick-actions';
import { Calendar, Brain, Users, Shield } from 'lucide-react';

// This is the main welcome page component that Next.js will render at your root route
export default function WelcomePage() {
  // Define the features that will be displayed in the features grid
  // Each feature has an icon, title, description, and optional tag
  const features = [
    {
      Icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered leave suggestions based on team availability and workplace patterns.",
      tag: "Enterprise"
    },
    {
      Icon: Brain,
      title: "Intelligent Insights",
      description: "Get data-driven recommendations for better leave management.",
      tag: "New"
    },
    {
      Icon: Users,
      title: "Team Coordination",
      description: "Seamlessly coordinate time off with your team members."
    },
    {
      Icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SSO and compliance features.",
      tag: "Enterprise"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero section appears at the top of the page */}
      <Hero />
      
      {/* Quick Actions section with grid of action buttons */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Quick Actions
          </h2>
          <QuickActions />
        </div>
      </section>

      {/* Features section with grid of feature cards */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
