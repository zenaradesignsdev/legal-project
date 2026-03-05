import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBackground from "@/assets/hero-background.png";
import sarahMitchellPhoto from "@/assets/sarah-mitchell.png";
import davidChenPhoto from "@/assets/david-chen.png";
import gavelLawImage from "@/assets/gavel-law.png";
import lawyerDocumentImage from "@/assets/lawyer-document.png";

const practiceAreas = [
  { title: "Real Estate & Landlord-Tenant", desc: "Residential & commercial leases, evictions, tenant rights & property disputes" },
  { title: "Employment Law", desc: "Wrongful dismissal, severance packages, employment contracts & workplace disputes" },
  { title: "Family Law", desc: "Divorce, separation agreements, child custody, support & property division" },
  { title: "Criminal Law", desc: "Summary offences, DUI, theft, assault & peace bonds" },
  { title: "Provincial Offences", desc: "Traffic violations, speeding tickets, parking infractions & municipal bylaw offences" },
  { title: "Civil Litigation", desc: "Small claims court, contract disputes, debt collection & personal injury" },
];

const values = [
  { title: "Established & Experienced", desc: "Serving the GTA with dedication and expertise" },
  { title: "Clear Communication", desc: "Straightforward advice with full transparency" },
  { title: "Accessible Pricing", desc: "Fair and competitive rates for quality representation" },
  { title: "Client-Focused", desc: "Your case, your goals — always the priority" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden py-12 sm:py-16 md:py-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-navy/60 to-navy-light/70" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="max-w-3xl relative z-10">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Pickering Law Firm
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
              Trusted Legal Representation in the GTA since 2012
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-3 sm:mb-4 max-w-2xl">
              Professional Legal & Notary Services — Clear Advice. Strong Representation. Real Results.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-6 sm:mb-10 max-w-2xl">
              Free 30-minute consultation • Extended consultations: $200 – $300 + HST
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg relative z-10 py-2.5 sm:py-3 h-auto min-h-[44px]"
              >
                <Link to="/contact">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="hidden sm:inline">Book Free 30-Minute Consultation</span>
                  <span className="sm:hidden">Book Consultation</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full px-6 sm:px-8 text-sm sm:text-base relative z-10 py-2.5 sm:py-3 h-auto min-h-[44px]"
              >
                <a href="tel:9055550100">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="hidden sm:inline">Call Now: (905) 555-0100</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1 mb-8 lg:mb-0">
              <div className="relative max-w-xs mx-auto lg:mx-0 pb-12 sm:pb-16 pr-8 sm:pr-12">
                {/* Sarah Mitchell - Back Photo */}
                <div className="relative z-10">
                  <img
                    src={sarahMitchellPhoto}
                    alt="Sarah Mitchell — Principal & Founding Partner"
                    className="rounded-xl sm:rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                    style={{ objectPosition: '60% center' }}
                  />
                </div>
                {/* David Chen - Front Photo (Overlapping) */}
                <div className="absolute -bottom-12 sm:-bottom-16 -right-4 z-20 w-[60%]">
                  <img
                    src={davidChenPhoto}
                    alt="David Chen — Partner"
                    className="rounded-xl sm:rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-xl sm:rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">About Our Firm</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Two Partners, One Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Pickering Law Firm is a boutique practice led by partners Sarah Mitchell and David Chen. Founded in 2012, 
                our two-partner structure ensures that every client receives personalized attention and direct access to 
                experienced legal professionals. With over 25 years of combined experience, we provide accessible, 
                professional legal representation across the GTA.
              </p>
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-navy-light rounded-full px-6 sm:px-8 text-sm sm:text-base py-2.5 sm:py-3 h-auto min-h-[44px]"
              >
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${gavelLawImage})`,
            opacity: 0.35
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/90 to-secondary" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">What We Do</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">Practice Areas</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {practiceAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group block bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border border-border/50"
                >
                  <div className="mb-2 sm:mb-3">
                    <span className="inline-block text-[10px] sm:text-xs font-semibold text-gold tracking-wider uppercase mb-1 sm:mb-2">
                      Practice Area
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1 mb-8 lg:mb-0">
              <div className="relative">
                <img
                  src={lawyerDocumentImage}
                  alt="Professional legal representation"
                  className="rounded-xl sm:rounded-2xl shadow-xl w-full object-cover aspect-[4/5] max-w-md mx-auto lg:max-w-none"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-xl sm:rounded-2xl -z-10 hidden lg:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our Difference</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
                Why Choose Us
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {values.map((val, i) => (
                  <div key={val.title} className="border-l-2 border-gold/30 pl-4 sm:pl-6">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 leading-tight">{val.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-primary relative overflow-hidden -mb-16 lg:mb-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-navy-light opacity-90" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Get Started</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Free 30-Minute Consultation
            </h2>
            <p className="text-primary-foreground/70 text-base sm:text-lg mb-2 sm:mb-3 leading-relaxed">
              Discuss your legal matter with no obligation.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-6 sm:mb-10">
              Extended consultations available: $200 – $300 + HST
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-8 sm:px-10 text-sm sm:text-base font-semibold shadow-lg py-2.5 sm:py-3 h-auto min-h-[44px]"
            >
              <Link to="/contact">Schedule Your Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
