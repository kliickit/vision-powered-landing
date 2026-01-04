import { Clock, Wallet, Brain } from "lucide-react";

const avantages = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    description: "Moins d'appels à gérer, moins d'emails à trier, moins de relances manuelles.",
    benefit: "Plus de temps pour piloter, vendre, respirer."
  },
  {
    icon: Wallet,
    title: "Récupérez de l'argent",
    description: "Factures relancées automatiquement, devis envoyés et suivis sans oubli.",
    benefit: "De l'argent qui rentre plus vite."
  },
  {
    icon: Brain,
    title: "Moins de charge mentale",
    description: "Vous n'êtes plus le point de passage pour tout. Votre entreprise avance même quand vous n'êtes pas là.",
    benefit: "Plus de tranquillité au quotidien."
  }
];

const Avantages = () => {
  return (
    <section id="avantages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Avantages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Pourquoi choisir LOBO.AI ?
          </h2>
        </div>

        {/* Avantages grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {avantages.map((avantage, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <avantage.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {avantage.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {avantage.description}
              </p>
              <p className="text-primary font-medium text-sm">
                {avantage.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="max-w-3xl mx-auto text-center mt-16 p-8 bg-card rounded-3xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vous n'avez rien à apprendre. Nous nous occupons de tout.
          </h3>
          <p className="text-muted-foreground">
            Vous n'avez pas besoin de comprendre l'IA, ni de changer vos outils. 
            On repère ce qui vous ralentit, puis on met en place des assistants automatiques qui travaillent pour vous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
