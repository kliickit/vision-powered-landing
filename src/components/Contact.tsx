import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast.success("Demande envoyée ! Nous vous recontacterons sous 24h.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Demandez votre diagnostic gratuit
            </h2>
            <p className="text-muted-foreground">
              Dites-nous ce que vous voulez automatiser. Réponse sous 24h.
            </p>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom et prénom *
                </label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12 bg-card"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 bg-card"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone *
                </label>
                <Input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 bg-card"
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom de l'entreprise *
                </label>
                <Input 
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="h-12 bg-card"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Décrivez votre situation *
              </label>
              <Textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-card resize-none"
                placeholder="Que souhaitez-vous automatiser ? Relance de factures, suivi des devis, ou les deux ?"
                disabled={isLoading}
              />
            </div>

            <Button type="submit" variant="hero" className="w-full gap-2" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
