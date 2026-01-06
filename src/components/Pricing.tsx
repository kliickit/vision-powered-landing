import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Pack Essentiel",
    description: "Idéal pour tester l'IA sur un premier cas d'usage",
    setup: "490 € HT",
    monthly: "79 € HT/mois",
    agents: "1 assistant",
    features: [
      "1 assistant IA au choix",
      "Mise en place complète",
      "Formation incluse",
      "Support par email"
    ],
    popular: false
  },
  {
    name: "Pack Business",
    description: "Le plus vendu — automatisez plusieurs processus",
    setup: "790 € HT",
    monthly: "149 € HT/mois",
    agents: "2 assistants",
    features: [
      "2 assistants IA",
      "Mise en place prioritaire",
      "Formation équipe incluse",
      "Support prioritaire",
      "Tableau de bord analytics"
    ],
    popular: true
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Tarifs transparents
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Des tarifs adaptés à votre activité
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Commencez par un diagnostic gratuit, puis choisissez le pack qui correspond à vos besoins.
          </p>
        </div>

        {/* Free diagnostic */}
        <div className="max-w-md mx-auto mb-12 p-6 bg-card rounded-2xl border border-primary/30 text-center">
          <div className="text-sm text-primary font-medium mb-2">Diagnostic IA</div>
          <div className="text-3xl font-bold text-foreground mb-2">Gratuit</div>
          <p className="text-muted-foreground text-sm">
            15 minutes • Sans engagement • Analyse personnalisée de vos besoins
          </p>
          <Button 
            variant="hero" 
            className="mt-4 gap-2"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Réserver mon diagnostic
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl p-8 border ${plan.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border'}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Le plus populaire
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-1">Mise en place</div>
                <div className="text-3xl font-bold text-foreground mb-2">{plan.setup}</div>
                <div className="text-muted-foreground">
                  Puis <span className="text-foreground font-semibold">{plan.monthly}</span>
                </div>
                <div className="text-primary font-medium mt-2">{plan.agents}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Tous les prix sont HT. Engagement minimum de 3 mois. Annulation possible avec préavis de 30 jours.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
