import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">LOBO AI</span>
        </div>

        {/* CTA */}
        <Button variant="hero" size="sm">
          Diagnostic gratuit
        </Button>
      </div>
    </header>
  );
};

export default Header;