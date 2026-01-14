import { useState } from "react";
import { RefreshCw, Eye, X, Send, Check, Mail, FileText, Calendar, User, Euro, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DevisStatus = "tous" | "en_attente" | "gagnes" | "perdus";

interface Devis {
  id: string;
  client: string;
  email: string;
  initials: string;
  color: string;
  montant: string;
  mode: "AUTO" | "MANUEL";
  statut: "Relancé" | "Gagné" | "En attente" | "Perdu";
  relances: number;
  description?: string;
  date?: string;
  validite?: string;
}

const devisData: Devis[] = [
  { id: "1", client: "Acme Corp", email: "contact@acme.fr", initials: "AC", color: "bg-blue-600", montant: "15 400 €", mode: "AUTO", statut: "Relancé", relances: 2, description: "Développement application web - Phase 1", date: "12/01/2026", validite: "30 jours" },
  { id: "2", client: "TechStart", email: "hello@techstart.io", initials: "TS", color: "bg-purple-600", montant: "8 750 €", mode: "AUTO", statut: "Gagné", relances: 1, description: "Refonte site e-commerce", date: "05/01/2026", validite: "30 jours" },
  { id: "3", client: "BuildFlow", email: "info@buildflow.com", initials: "BF", color: "bg-indigo-600", montant: "22 100 €", mode: "MANUEL", statut: "En attente", relances: 0, description: "Migration infrastructure cloud AWS", date: "08/01/2026", validite: "45 jours" },
  { id: "4", client: "DataRise", email: "sales@datarise.eu", initials: "DR", color: "bg-red-600", montant: "5 200 €", mode: "AUTO", statut: "Perdu", relances: 3, description: "Audit sécurité informatique", date: "02/01/2026", validite: "15 jours" },
  { id: "5", client: "Global Industries", email: "contact@global.com", initials: "GI", color: "bg-emerald-600", montant: "45 000 €", mode: "AUTO", statut: "Relancé", relances: 4, description: "ERP personnalisé + Formation", date: "10/01/2026", validite: "60 jours" },
  { id: "6", client: "Petit Bistro", email: "chef@bistro.fr", initials: "PB", color: "bg-orange-600", montant: "1 200 €", mode: "MANUEL", statut: "Gagné", relances: 1, description: "Site vitrine + Réservation en ligne", date: "03/01/2026", validite: "30 jours" },
  { id: "7", client: "Studio Graphique", email: "design@studio.fr", initials: "SG", color: "bg-teal-600", montant: "3 400 €", mode: "AUTO", statut: "En attente", relances: 2, description: "Intégration maquettes Figma", date: "11/01/2026", validite: "30 jours" },
];

const InteractiveDemo = () => {
  const [activeFilter, setActiveFilter] = useState<DevisStatus>("tous");
  const [relanceModal, setRelanceModal] = useState<Devis | null>(null);
  const [relanceStep, setRelanceStep] = useState<"preview" | "sending" | "sent">("preview");
  const [voirDevisModal, setVoirDevisModal] = useState<Devis | null>(null);

  const filteredDevis = devisData.filter(d => {
    if (activeFilter === "tous") return true;
    if (activeFilter === "en_attente") return d.statut === "En attente";
    if (activeFilter === "gagnes") return d.statut === "Gagné";
    if (activeFilter === "perdus") return d.statut === "Perdu";
    return true;
  });

  const stats = {
    actifs: devisData.length,
    gagnes: devisData.filter(d => d.statut === "Gagné").length,
    relances: devisData.reduce((acc, d) => acc + d.relances, 0),
    tauxReponse: "92%"
  };

  const getStatutStyle = (statut: Devis["statut"]) => {
    switch (statut) {
      case "Relancé": return "border border-muted-foreground/50 text-muted-foreground";
      case "Gagné": return "text-green-400";
      case "En attente": return "border border-muted-foreground/30 text-muted-foreground/70";
      case "Perdu": return "bg-red-500/20 text-red-400";
      default: return "";
    }
  };

  const getModeStyle = (mode: Devis["mode"]) => {
    return mode === "AUTO" 
      ? "bg-primary/20 text-primary" 
      : "bg-yellow-500/20 text-yellow-400";
  };

  const handleRelancer = (devis: Devis) => {
    setRelanceModal(devis);
    setRelanceStep("preview");
  };

  const handleEnvoyerRelance = () => {
    setRelanceStep("sending");
    setTimeout(() => {
      setRelanceStep("sent");
    }, 1500);
  };

  const handleCloseRelance = () => {
    setRelanceModal(null);
    setRelanceStep("preview");
  };

  const handleVoirDevis = (devis: Devis) => {
    setVoirDevisModal(devis);
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground italic mb-4">
            Démo Interactive
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ceci est une version de démonstration avec des données fictives. Testez les filtres et 
            l'interface pour voir comment notre solution peut simplifier votre gestion.
          </p>
        </div>

        {/* Demo container */}
        <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Mes Devis</h3>
              <p className="text-sm text-muted-foreground">{stats.actifs} devis actifs • {devisData.filter(d => d.statut === "En attente").length} en attente de réponse</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 gap-2 border-primary text-primary hover:bg-primary/10">
              <RefreshCw className="w-4 h-4" />
              Global Sync
            </Button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stats.actifs}</div>
              <div className="text-sm text-muted-foreground">Devis actifs</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-green-400">{stats.gagnes}</div>
              <div className="text-sm text-muted-foreground">Gagnés</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">{stats.relances}</div>
              <div className="text-sm text-muted-foreground">Relances envoyées</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stats.tauxReponse}</div>
              <div className="text-sm text-muted-foreground">Taux de réponse</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { key: "tous", label: "Tous" },
              { key: "en_attente", label: "En attente" },
              { key: "gagnes", label: "Gagnés" },
              { key: "perdus", label: "Perdus" }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as DevisStatus)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter.key
                    ? "bg-foreground text-background"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Client</th>
                  <th className="pb-3 font-medium">Montant</th>
                  <th className="pb-3 font-medium hidden md:table-cell">Mode</th>
                  <th className="pb-3 font-medium">Statut</th>
                  <th className="pb-3 font-medium hidden md:table-cell">Relances</th>
                  <th className="pb-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDevis.map((devis) => (
                  <tr key={devis.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${devis.color} flex items-center justify-center text-white text-sm font-medium`}>
                          {devis.initials}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{devis.client}</div>
                          <div className="text-sm text-muted-foreground hidden md:block">{devis.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-primary font-medium">{devis.montant}</td>
                    <td className="py-4 hidden md:table-cell">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getModeStyle(devis.mode)}`}>
                        {devis.mode}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatutStyle(devis.statut)}`}>
                        {devis.statut}
                      </span>
                    </td>
                    <td className="py-4 text-muted-foreground hidden md:table-cell">{devis.relances}</td>
                    <td className="py-4 text-right">
                      {devis.statut === "En attente" ? (
                        <button 
                          onClick={() => handleRelancer(devis)}
                          className="text-primary hover:underline text-sm font-medium"
                        >
                          Relancer
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleVoirDevis(devis)}
                          className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 ml-auto"
                        >
                          <Eye className="w-4 h-4" />
                          Voir
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Relance Email */}
      <Dialog open={!!relanceModal} onOpenChange={() => handleCloseRelance()}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Mail className="w-5 h-5 text-primary" />
              {relanceStep === "sent" ? "Email envoyé !" : "Relance de devis"}
            </DialogTitle>
          </DialogHeader>
          
          {relanceStep === "preview" && relanceModal && (
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-full ${relanceModal.color} flex items-center justify-center text-white text-xs font-medium`}>
                    {relanceModal.initials}
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{relanceModal.client}</div>
                    <div className="text-xs text-muted-foreground">{relanceModal.email}</div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-3 mt-3">
                  <div className="text-xs text-muted-foreground mb-1">Objet :</div>
                  <div className="text-sm font-medium text-foreground mb-3">
                    Relance - Devis {relanceModal.description}
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-1">Message :</div>
                  <div className="text-sm text-foreground/90 bg-background/50 rounded p-3 border border-border/50">
                    <p className="mb-2">Bonjour,</p>
                    <p className="mb-2">
                      Je me permets de vous recontacter concernant notre devis "{relanceModal.description}" 
                      d'un montant de <span className="text-primary font-medium">{relanceModal.montant}</span>.
                    </p>
                    <p className="mb-2">
                      Avez-vous eu l'occasion de l'examiner ? Je reste à votre disposition pour 
                      répondre à vos questions ou adapter notre proposition à vos besoins.
                    </p>
                    <p className="text-muted-foreground">Cordialement,<br/>L'équipe LOBOAI</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={handleCloseRelance}>
                  Annuler
                </Button>
                <Button onClick={handleEnvoyerRelance} className="gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer la relance
                </Button>
              </div>
            </div>
          )}
          
          {relanceStep === "sending" && (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground font-medium">Envoi en cours...</p>
              <p className="text-sm text-muted-foreground">Veuillez patienter</p>
            </div>
          )}
          
          {relanceStep === "sent" && relanceModal && (
            <div className="py-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-foreground font-medium mb-2">Email envoyé avec succès !</p>
              <p className="text-sm text-muted-foreground mb-6">
                La relance a été envoyée à {relanceModal.email}
              </p>
              <Button onClick={handleCloseRelance} className="gap-2">
                <Check className="w-4 h-4" />
                Terminé
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal Voir Devis */}
      <Dialog open={!!voirDevisModal} onOpenChange={() => setVoirDevisModal(null)}>
        <DialogContent className="sm:max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <FileText className="w-5 h-5 text-primary" />
              Devis #{voirDevisModal?.id}
            </DialogTitle>
          </DialogHeader>
          
          {voirDevisModal && (
            <div className="space-y-6">
              {/* En-tête devis */}
              <div className="flex items-start justify-between p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full ${voirDevisModal.color} flex items-center justify-center text-white font-medium`}>
                    {voirDevisModal.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{voirDevisModal.client}</div>
                    <div className="text-sm text-muted-foreground">{voirDevisModal.email}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatutStyle(voirDevisModal.statut)}`}>
                  {voirDevisModal.statut}
                </span>
              </div>
              
              {/* Détails du devis */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">Date d'émission</span>
                  </div>
                  <div className="font-medium text-foreground">{voirDevisModal.date}</div>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">Validité</span>
                  </div>
                  <div className="font-medium text-foreground">{voirDevisModal.validite}</div>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs">Description</span>
                </div>
                <div className="font-medium text-foreground">{voirDevisModal.description}</div>
              </div>
              
              {/* Lignes du devis */}
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">
                  Détail de la prestation
                </div>
                <div className="divide-y divide-border">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-foreground">Prestation principale</div>
                      <div className="text-xs text-muted-foreground">{voirDevisModal.description}</div>
                    </div>
                    <div className="text-sm font-medium text-foreground">{voirDevisModal.montant}</div>
                  </div>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Total TTC</span>
                </div>
                <div className="text-2xl font-bold text-primary">{voirDevisModal.montant}</div>
              </div>
              
              {/* Historique relances */}
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="text-xs text-muted-foreground mb-2">Historique des relances</div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    {voirDevisModal.relances} relance{voirDevisModal.relances > 1 ? "s" : ""} envoyée{voirDevisModal.relances > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setVoirDevisModal(null)}>
                  Fermer
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InteractiveDemo;
