import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-semibold text-foreground">LOBO.AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Nos Agents
            </a>
            <a href="#avantages" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Avantages
            </a>
            <a href="#tarifs" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Tarifs
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex gap-2" variant="default">
            Diagnostic gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors">
                Nos Agents
              </a>
              <a href="#avantages" className="text-muted-foreground hover:text-foreground transition-colors">
                Avantages
              </a>
              <a href="#tarifs" className="text-muted-foreground hover:text-foreground transition-colors">
                Tarifs
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button className="w-full gap-2">
                Diagnostic gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;