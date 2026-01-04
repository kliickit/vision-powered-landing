import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import Avantages from "@/components/Avantages";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Agents />
      <Avantages />
      <HowItWorks />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;