import { FileText, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Agents = () => {
  return (
    <section id="agents" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Notre Automatisation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Pilotez votre business depuis votre smartphone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Déléguez les tâches répétitives à notre automatisation intelligente. Elle travaille 24h/24, sans pause, sans oubli.
          </p>
        </div>

        {/* Single agent centered */}
        <div className="flex justify-center max-w-5xl mx-auto">
          <div className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 max-w-md w-full">
            {/* Avatar IA */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center shadow-lg">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Suivi Devis
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chaque demande reçoit une réponse.
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground/80">
                <FileText className="w-4 h-4 text-primary" />
                Préparation de devis automatisée
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <FileText className="w-4 h-4 text-primary" />
                Relances sans oubli
              </li>
            </ul>

            {/* Benefit */}
            <div className="pt-4 border-t border-border">
              <p className="text-primary font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Plus de devis envoyés, plus de ventes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            className="gap-2"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Demander mon diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Agents;
