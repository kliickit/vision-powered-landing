import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien ça coûte ?",
    answer: "Le diagnostic est gratuit. Ensuite, nos packs commencent à 490€ HT de mise en place + 79€ HT/mois. Le tarif dépend du nombre d'assistants IA dont vous avez besoin."
  },
  {
    question: "Est-ce que je dois changer mes outils ?",
    answer: "Non. Nos agents IA s'intègrent avec vos outils existants (Gmail, Outlook, votre logiciel de facturation, etc.). Vous n'avez rien à changer."
  },
  {
    question: "Je n'y connais rien en IA, c'est un problème ?",
    answer: "Pas du tout ! C'est justement notre métier de tout gérer pour vous. Vous n'avez rien à apprendre ni à paramétrer."
  },
  {
    question: "En combien de temps c'est en place ?",
    answer: "Généralement entre 1 et 2 semaines selon la complexité. On s'occupe de tout : installation, paramétrage et tests."
  },
  {
    question: "Et la confidentialité / RGPD ?",
    answer: "Toutes nos solutions sont hébergées en France et conformes au RGPD. Vos données restent vos données."
  },
  {
    question: "Est-ce que ça marche pour mon activité ?",
    answer: "Nos solutions s'adaptent à tous les secteurs : services, artisanat, commerce, e-commerce, BTP, etc. Le diagnostic gratuit permet de valider que c'est pertinent pour vous."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Questions fréquentes
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
