import { Receipt, FileText, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    icon: Receipt,
    title: "Agent Relance Factures",
    subtitle: "Vos factures ne doivent plus dormir.",
    features: [
      "Relances automatiques email/SMS",
      "Messages adaptés au retard",
      "Suivi clair des paiements"
    ],
    benefit: "Moins de retards, plus de trésorerie.",
    avatarColor: "bg-primary"
  },
  {
    icon: FileText,
    title: "Agent Suivi Devis",
    subtitle: "Chaque demande reçoit une réponse.",
    features: [
      "Qualification des prospects",
      "Préparation de devis automatisée",
      "Relances sans oubli"
    ],
    benefit: "Plus de devis envoyés, plus de ventes.",
    avatarColor: "bg-primary/80"
  }
];

const Agents = () => {
  return (
    <section id="agents" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Nos agents IA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            2 assistants IA qui travaillent pour vous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Déléguez les tâches répétitives à nos agents intelligents. Ils travaillent 24h/24, sans pause, sans oubli.
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Avatar IA */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full ${agent.avatarColor} flex items-center justify-center shadow-lg`}>
                  <Bot className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {agent.subtitle}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {agent.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <agent.icon className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Benefit */}
              <div className="pt-4 border-t border-border">
                <p className="text-primary font-medium flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  {agent.benefit}
                </p>
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
