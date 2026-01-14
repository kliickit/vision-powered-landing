import { useState } from "react";
import { RefreshCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

const devisData: Devis[] = [
  { id: "1", client: "Acme Corp", email: "contact@acme.fr", initials: "AC", color: "bg-blue-600", montant: "15 400 €", mode: "AUTO", statut: "Relancé", relances: 2 },
  { id: "2", client: "TechStart", email: "hello@techstart.io", initials: "TS", color: "bg-purple-600", montant: "8 750 €", mode: "AUTO", statut: "Gagné", relances: 1 },
  { id: "3", client: "BuildFlow", email: "info@buildflow.com", initials: "BF", color: "bg-indigo-600", montant: "22 100 €", mode: "MANUEL", statut: "En attente", relances: 0 },
  { id: "4", client: "DataRise", email: "sales@datarise.eu", initials: "DR", color: "bg-red-600", montant: "5 200 €", mode: "AUTO", statut: "Perdu", relances: 3 },
  { id: "5", client: "Global Industries", email: "contact@global.com", initials: "GI", color: "bg-emerald-600", montant: "45 000 €", mode: "AUTO", statut: "Relancé", relances: 4 },
  { id: "6", client: "Petit Bistro", email: "chef@bistro.fr", initials: "PB", color: "bg-orange-600", montant: "1 200 €", mode: "MANUEL", statut: "Gagné", relances: 1 },
  { id: "7", client: "Studio Graphique", email: "design@studio.fr", initials: "SG", color: "bg-teal-600", montant: "3 400 €", mode: "AUTO", statut: "En attente", relances: 2 },
];

const InteractiveDemo = () => {
  const [activeFilter, setActiveFilter] = useState<DevisStatus>("tous");

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
                        <button className="text-primary hover:underline text-sm font-medium">Relancer</button>
                      ) : (
                        <button className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 ml-auto">
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
    </section>
  );
};

export default InteractiveDemo;
