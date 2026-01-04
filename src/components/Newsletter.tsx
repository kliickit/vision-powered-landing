import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Merci ! Vous êtes inscrit à notre newsletter.");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Sign up for Updates
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-secondary border-border rounded-lg"
              required
            />
            <Button type="submit" variant="default" size="default">
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
