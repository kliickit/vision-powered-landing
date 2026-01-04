import { Receipt, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    icon: Receipt,
    title: "Relance factures",
    subtitle: "Vos factures ne doivent plus dormir.",
    features: [
      "Relances automatiques email/SMS",
      "Messages adaptés au retard",
      "Suivi clair des paiements"
    ],
    benefit: "Moins de retards, plus de trésorerie.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: FileText,
    title: "Suivi des devis",
    subtitle: "Chaque demande reçoit une réponse.",
    features: [
      "Qualification des prospects",
      "Préparation de devis automatisée",
      "Relances sans oubli"
    ],
    benefit: "Plus de devis envoyés, plus de ventes.",
    color: "from-primary/15 to-primary/5"
  }
];

const Agents = () => {
  return (
    <section id="agents" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            2 agents IA à votre service
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Des assistants qui travaillent pour vous
          </h2>
        </div>

        {/* Agents grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6`}>
                <agent.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {agent.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {agent.subtitle}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {agent.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Benefit */}
              <p className="text-primary font-medium">
                {agent.benefit}
              </p>

              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" className="gap-2">
            Demander mon diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Agents;
