import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-12 pb-12 border-b border-background/20">
          <Button variant="hero" className="gap-2 bg-primary hover:bg-primary/90">
            Diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-semibold">LOBO.AI</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#agents" className="text-background/70 hover:text-background transition-colors text-sm">
              Nos Agents
            </a>
            <a href="#avantages" className="text-background/70 hover:text-background transition-colors text-sm">
              Avantages
            </a>
            <a href="#tarifs" className="text-background/70 hover:text-background transition-colors text-sm">
              Tarifs
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © 2024 LOBO.AI — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;