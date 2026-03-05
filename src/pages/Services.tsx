import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Real Estate & Landlord-Tenant",
    items: [
      "Residential lease agreements & renewals",
      "Commercial lease negotiations",
      "Eviction proceedings & notices",
      "Tenant rights & landlord obligations",
      "Rent increase disputes",
      "Property maintenance & repair issues",
      "Security deposit disputes",
      "N12 & N13 applications",
      "Landlord & Tenant Board representation",
    ],
    pricing: "Initial consultation: $200 + HST | Representation: $250-$400/hour + HST",
  },
  {
    title: "Employment Law",
    items: [
      "Wrongful dismissal claims",
      "Severance package review & negotiation",
      "Employment contract review & drafting",
      "Constructive dismissal",
      "Workplace harassment & discrimination",
      "Employment Standards Act violations",
      "Termination negotiations",
      "Non-compete & confidentiality agreements",
      "Employment Standards Board representation",
    ],
    pricing: "Initial consultation: $250 + HST | Representation: $300-$500/hour + HST",
  },
  {
    title: "Family Law",
    items: [
      "Divorce & separation agreements",
      "Child custody & access arrangements",
      "Child support & spousal support",
      "Property division & equalization",
      "Prenuptial & cohabitation agreements",
      "Domestic contracts",
      "Parenting plans & schedules",
      "Enforcement of support orders",
      "Family court representation",
    ],
    pricing: "Initial consultation: $300 + HST | Representation: $350-$550/hour + HST",
  },
  {
    title: "Criminal Law",
    items: [
      "Summary criminal offences",
      "Provincial offences (speeding, parking, etc.)",
      "DUI & impaired driving charges",
      "Theft under $5,000",
      "Assault & peace bonds",
      "Dangerous driving",
      "Mischief & property damage",
      "Criminal record suspensions",
      "Court representation & plea negotiations",
    ],
    pricing: "Initial consultation: $200 + HST | Representation: $300-$600/hour + HST | Fixed fees available",
  },
  {
    title: "Civil Litigation",
    items: [
      "Small Claims Court (up to $35,000)",
      "Contract disputes & breach of contract",
      "Debt collection & enforcement",
      "Personal injury claims",
      "Property damage claims",
      "Consumer protection matters",
      "Dispute resolution & mediation",
      "Judgment enforcement",
      "Civil court representation",
    ],
    pricing: "Initial consultation: $200 + HST | Representation: $300-$500/hour + HST | Contingency fees available for personal injury",
  },
];

const notaryPricing = [
  { docs: "1st document", price: "$17 + HST" },
  { docs: "2nd document", price: "$14 + HST" },
  { docs: "3rd document", price: "$12 + HST" },
  { docs: "4th document", price: "$10 + HST" },
  { docs: "5th document", price: "$8 + HST" },
  { docs: "Each additional", price: "$5 + HST" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-2">
              Comprehensive legal services for individuals across the GTA.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Free 30-minute consultation • Extended consultations: $200 – $300 + HST
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <Accordion type="multiple" className="space-y-4">
              {services.map((s) => (
                <AccordionItem
                  key={s.title}
                  value={s.title}
                  className="bg-card rounded-2xl border shadow-sm px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:no-underline py-5">
                    {s.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mb-6">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-muted/50 rounded-xl p-4 mb-4">
                      <p className="text-sm font-semibold text-foreground mb-1">Pricing</p>
                      <p className="text-sm text-muted-foreground">{s.pricing}</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-gold text-gold hover:bg-gold/10"
                    >
                      <Link to="/contact">Book Consultation</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Notary Public */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Additional Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Notary Public Services
            </h2>
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Document</th>
                    <th className="text-right px-6 py-4 font-semibold text-foreground">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {notaryPricing.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-6 py-4 text-muted-foreground">{row.docs}</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">{row.price}</td>
                    </tr>
                  ))}
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 text-muted-foreground">Travel fee (if required)</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">$50 – $100 + HST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm mb-6">
              <p className="text-sm text-muted-foreground mb-4">
                We provide notarization services for affidavits, statutory declarations, certified copies, 
                and other legal documents. Both partners are certified Notary Publics.
              </p>
            </div>
            <div className="text-center">
              <Button
                asChild
                className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-8"
              >
                <Link to="/contact">Book Notary Appointment</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
