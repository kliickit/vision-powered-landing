import { Cog, TrendingUp, Cpu } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Seamless Workflows",
    description: "Automatisez vos processus métier complexes avec une simplicité déconcertante.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description: "Exploitez vos données pour des décisions éclairées en temps réel.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description: "Des algorithmes IA qui apprennent et s'adaptent à vos besoins.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
