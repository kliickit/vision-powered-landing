import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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

        {/* Single plan centered */}
        <div className="flex justify-center max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 border border-border max-w-md w-full">
            {/* Plan header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Pack Essentiel
              </h3>
              <p className="text-muted-foreground text-sm">
                Idéal pour tester l'IA sur un premier cas d'usage
              </p>
            </div>

            {/* Pricing */}
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-1">Mise en place</div>
              <div className="text-3xl font-bold text-foreground mb-2">200 € HT</div>
              <div className="text-muted-foreground">
                Puis <span className="text-foreground font-semibold">50 € par mois HT</span>
              </div>
              <div className="text-primary font-medium mt-2">1 automatisation</div>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/80">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Relance des devis automatique
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Mise en place complète
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Formation incluse
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                Support par email
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
