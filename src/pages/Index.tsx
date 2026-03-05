import { Link } from "react-router-dom";
import { Phone, Calendar, Scale, Shield, Users, FileText, Gavel, Home as HomeIcon, Briefcase, Heart, PenTool, Award, MessageCircle, DollarSign, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBackground from "@/assets/hero-background.png";

const practiceAreas = [
  { icon: Gavel, title: "Provincial Offences", desc: "Speeding, parking, reckless driving & DUI infractions" },
  { icon: Shield, title: "Criminal Law", desc: "Summary offences including dangerous driving & theft" },
  { icon: HomeIcon, title: "Landlord & Tenant", desc: "Evictions, unpaid rent & tenant/landlord rights" },
  { icon: Scale, title: "Small Claims", desc: "Claims up to $35,000 & breach of contract" },
  { icon: Briefcase, title: "Employment Law", desc: "Wrongful dismissal, severance & contracts" },
  { icon: Heart, title: "Human Rights", desc: "Violations & compensation claims" },
  { icon: PenTool, title: "Notary Public", desc: "Certified document notarization services" },
  { icon: FileText, title: "Contracts", desc: "Review, interpretation & PIPEDA compliance" },
];

const values = [
  { icon: Award, title: "Established & Experienced", desc: "Serving the GTA with dedication and expertise" },
  { icon: MessageCircle, title: "Clear Communication", desc: "Straightforward advice with full transparency" },
  { icon: DollarSign, title: "Accessible Pricing", desc: "Fair and competitive rates for quality representation" },
  { icon: UserCheck, title: "Client-Focused", desc: "Your case, your goals — always the priority" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-navy/60 to-navy-light/70" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Pickering Law Firm
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Trusted Legal Representation in the GTA since 2012
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl">
              Professional Legal & Notary Services — Clear Advice. Strong Representation. Real Results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-8 text-base font-semibold shadow-lg"
              >
                <Link to="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Free 30-Minute Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base"
              >
                <a href="tel:9055550100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (905) 555-0100
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="rounded-2xl shadow-xl w-full max-w-md mx-auto lg:mx-0 bg-muted aspect-[4/5] flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Team Photo Coming Soon</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Our Firm</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Two Partners, One Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Pickering Law Firm is a boutique practice led by partners Sarah Mitchell and David Chen. Founded in 2012, 
                our two-partner structure ensures that every client receives personalized attention and direct access to 
                experienced legal professionals. With over 25 years of combined experience, we provide accessible, 
                professional legal representation across the GTA.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light rounded-full px-8">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Practice Areas</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group block bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <area.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <val.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-navy-light opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Free 30-Minute Consultation
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-3">
              Discuss your legal matter with no obligation.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-10">
              Extended consultations available: $50 – $100 + HST
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-10 text-base font-semibold shadow-lg"
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
