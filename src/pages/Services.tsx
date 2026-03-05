import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Real Estate & Landlord-Tenant",
    description: "Residential & commercial leases, evictions, tenant rights & property disputes",
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
    consultationPrice: "$200 + HST",
    hourlyRate: "$250-$400/hour + HST",
  },
  {
    title: "Employment Law",
    description: "Wrongful dismissal, severance packages, employment contracts & workplace disputes",
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
    consultationPrice: "$250 + HST",
    hourlyRate: "$300-$500/hour + HST",
  },
  {
    title: "Family Law",
    description: "Divorce, separation agreements, child custody, support & property division",
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
    consultationPrice: "$300 + HST",
    hourlyRate: "$350-$550/hour + HST",
  },
  {
    title: "Criminal Law",
    description: "Summary criminal offences, DUI, theft, assault & peace bonds",
    items: [
      "Summary criminal offences",
      "DUI & impaired driving charges",
      "Theft under $5,000",
      "Assault & peace bonds",
      "Dangerous driving",
      "Mischief & property damage",
      "Criminal record suspensions",
      "Court representation & plea negotiations",
    ],
    consultationPrice: "$200 + HST",
    hourlyRate: "$300-$600/hour + HST",
    note: "Fixed fees available",
  },
  {
    title: "Provincial Offences",
    description: "Traffic violations, speeding tickets, parking infractions & municipal bylaw offences",
    items: [
      "Speeding & traffic violations",
      "Parking infractions",
      "Red light camera tickets",
      "Cell phone & distracted driving",
      "Fail to remain at scene",
      "Municipal bylaw offences",
      "Traffic court representation",
      "Ticket dispute & reduction",
    ],
    consultationPrice: "$150 + HST",
    hourlyRate: "$250-$400/hour + HST",
    note: "Fixed fees available for ticket disputes",
  },
  {
    title: "Civil Litigation",
    description: "Small claims court, contract disputes, debt collection & personal injury",
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
    consultationPrice: "$200 + HST",
    hourlyRate: "$300-$500/hour + HST",
    note: "Contingency fees available for personal injury",
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
      <section className="bg-primary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">What We Do</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg mb-2 leading-relaxed">
              Comprehensive legal services for individuals across the GTA.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed">
              Free 30-minute consultation • Extended consultations: $200 – $300 + HST
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group bg-card rounded-xl sm:rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
                  {/* Card Header */}
                  <div className="relative p-4 sm:p-6 border-b-2 border-gold/20 flex-shrink-0">
                    <div className="mb-2 sm:mb-3">
                      <span className="inline-block text-[10px] sm:text-xs font-semibold text-gold tracking-wider uppercase mb-1 sm:mb-2">
                        Practice Area
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-tight min-h-[2.5rem] sm:min-h-[3rem]">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed min-h-[2rem] sm:min-h-[2.5rem]">
                      {service.description}
                    </p>
                  </div>

                  {/* Services List */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 flex-shrink-0">
                      {service.items.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5 sm:mt-2" />
                          <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                      {service.items.length > 5 && (
                        <li className="text-xs sm:text-sm text-muted-foreground/70 italic pl-3 sm:pl-4">
                          More services available
                        </li>
                      )}
                    </ul>

                    {/* Pricing Section */}
                    <div className="bg-muted/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-border/30 flex-shrink-0">
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-muted-foreground">Initial Consultation</span>
                          <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{service.consultationPrice}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-muted-foreground">Representation</span>
                          <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{service.hourlyRate}</span>
                        </div>
                        {service.note && (
                          <div className="pt-1.5 sm:pt-2 border-t border-border/30 mt-1.5 sm:mt-2">
                            <span className="text-[10px] sm:text-xs text-muted-foreground italic leading-relaxed">{service.note}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        size="default"
                        className="w-full rounded-full border-gold text-gold hover:bg-gold hover:text-accent-foreground transition-colors text-sm sm:text-base py-2.5 sm:py-3 h-auto min-h-[44px]"
                      >
                        <Link to="/contact">Book Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notary Public */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Additional Services</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Notary Public Services
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              We provide notarization services for affidavits, statutory declarations, certified copies, 
              and other legal documents. Both partners are certified Notary Publics.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-xl sm:rounded-2xl shadow-lg border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="p-4 sm:p-6 border-b-2 border-gold/20">
                <span className="inline-block text-[10px] sm:text-xs font-semibold text-gold tracking-wider uppercase mb-1 sm:mb-2">
                  Additional Services
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2 leading-tight">Document Notarization</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Competitive pricing for multiple documents</p>
              </div>

              {/* Pricing Table */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {notaryPricing.map((row, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors gap-2"
                    >
                      <span className="text-xs sm:text-sm text-muted-foreground">{row.docs}</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{row.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/50 border border-border/30 col-span-1 sm:col-span-2 gap-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">Travel fee (if required)</span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">$50 – $100 + HST</span>
                  </div>
                </div>

                <div className="text-center pt-3 sm:pt-4 border-t border-border/30">
                  <Button
                    asChild
                    className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-6 sm:px-8 text-sm sm:text-base py-2.5 sm:py-3 h-auto min-h-[44px] w-full sm:w-auto"
                  >
                    <Link to="/contact">Book Notary Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
