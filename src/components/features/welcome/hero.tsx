// src/components/features/welcome/hero.tsx
export const Hero: FC = () => {
  return (
    <section className="text-center py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-purple-600">
          Create moments for what matters
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
          Streamline your leave management with intelligent suggestions and team coordination
        </p>
        <Button 
          className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
