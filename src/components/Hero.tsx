import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Network dots and lines */}
          <defs>
            <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="currentColor" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          
          {/* Connecting lines */}
          <g stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" opacity="0.5">
            <line x1="100" y1="200" x2="200" y2="150" />
            <line x1="200" y1="150" x2="300" y2="180" />
            <line x1="300" y1="180" x2="400" y2="120" />
            <line x1="400" y1="120" x2="500" y2="200" />
            <line x1="500" y1="200" x2="600" y2="160" />
            <line x1="600" y1="160" x2="700" y2="220" />
            <line x1="700" y1="220" x2="800" y2="180" />
            <line x1="800" y1="180" x2="900" y2="240" />
            
            <line x1="150" y1="400" x2="250" y2="350" />
            <line x1="250" y1="350" x2="350" y2="380" />
            <line x1="350" y1="380" x2="450" y2="320" />
            <line x1="450" y1="320" x2="550" y2="400" />
            <line x1="550" y1="400" x2="650" y2="360" />
            <line x1="650" y1="360" x2="750" y2="420" />
            <line x1="750" y1="420" x2="850" y2="380" />
            
            <line x1="200" y1="600" x2="300" y2="550" />
            <line x1="300" y1="550" x2="400" y2="580" />
            <line x1="400" y1="580" x2="500" y2="520" />
            <line x1="500" y1="520" x2="600" y2="600" />
            <line x1="600" y1="600" x2="700" y2="560" />
            <line x1="700" y1="560" x2="800" y2="620" />
            
            {/* Cross connections */}
            <line x1="200" y1="150" x2="250" y2="350" />
            <line x1="400" y1="120" x2="450" y2="320" />
            <line x1="600" y1="160" x2="650" y2="360" />
            <line x1="800" y1="180" x2="750" y2="420" />
            <line x1="300" y1="550" x2="350" y2="380" />
            <line x1="500" y1="520" x2="550" y2="400" />
            <line x1="700" y1="560" x2="650" y2="360" />
          </g>
          
          {/* Larger node points */}
          <g fill="currentColor" className="text-muted-foreground">
            <circle cx="100" cy="200" r="4" />
            <circle cx="200" cy="150" r="3" />
            <circle cx="300" cy="180" r="5" />
            <circle cx="400" cy="120" r="3" />
            <circle cx="500" cy="200" r="4" />
            <circle cx="600" cy="160" r="3" />
            <circle cx="700" cy="220" r="5" />
            <circle cx="800" cy="180" r="3" />
            <circle cx="900" cy="240" r="4" />
            
            <circle cx="150" cy="400" r="3" />
            <circle cx="250" cy="350" r="4" />
            <circle cx="350" cy="380" r="3" />
            <circle cx="450" cy="320" r="5" />
            <circle cx="550" cy="400" r="4" />
            <circle cx="650" cy="360" r="3" />
            <circle cx="750" cy="420" r="4" />
            <circle cx="850" cy="380" r="3" />
            
            <circle cx="200" cy="600" r="4" />
            <circle cx="300" cy="550" r="3" />
            <circle cx="400" cy="580" r="4" />
            <circle cx="500" cy="520" r="5" />
            <circle cx="600" cy="600" r="3" />
            <circle cx="700" cy="560" r="4" />
            <circle cx="800" cy="620" r="3" />
          </g>
        </svg>
      </div>

      {/* Content Card */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-2xl p-12 md:p-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Automate the Future. Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Intelligent solutions for a smarter tomorrow.
            <br />
            Get exclusive early access.
          </p>
          <Button variant="hero" size="lg">
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
