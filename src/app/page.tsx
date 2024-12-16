import { Hero } from "@/components/features/welcome/hero";
import { FeatureCard } from "@/components/features/welcome/feature-card";
import { QuickActions } from "@/components/features/welcome/quick-actions";
import { Calendar, Brain, Users, Shield } from "lucide-react";

export default function WelcomePage() {
  const features = [
    {
      Icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Experience AI-powered leave management that adapts to your team's patterns and preferences, making scheduling effortless.",
      tag: "Enterprise",
    },
    {
      Icon: Brain,
      title: "Intelligent Insights",
      description:
        "Gain valuable insights into leave patterns and team availability with our advanced analytics engine.",
      tag: "New",
    },
    {
      Icon: Users,
      title: "Team Coordination",
      description:
        "Foster better collaboration with transparent team calendars and automated conflict resolution.",
    },
    {
      Icon: Shield,
      title: "Enterprise Security",
      description:
        "Rest easy with bank-grade security protocols and comprehensive compliance features.",
      tag: "Enterprise",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Hero />

      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access commonly used features and streamline your workflow with our intuitive action panels.
            </p>
          </div>
          <QuickActions />
        </div>
      </section>

      <section className="py-16 px-4 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how our enterprise-grade capabilities can transform your leave management experience.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join leading organizations that trust Alfie for their leave management needs.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </section>
    </main>
  );
}
