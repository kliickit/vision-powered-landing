import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Agent avatars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              <span className="text-primary font-semibold">2 agents IA</span> travaillent pour vous 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Automatisez vos tâches grâce à{" "}
            <span className="text-primary">l'IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Des automatisations IA opérationnelles qui gèrent les relances de factures, les devis et l'administratif à votre place. 
            Vous récupérez du temps et améliorez votre trésorerie, sans changer d'outils.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Entrez votre email professionnel"
              className="h-12 px-6 bg-card border-border rounded-full"
            />
            <Button variant="hero" className="w-full sm:w-auto whitespace-nowrap gap-2">
              Devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              <span>Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;