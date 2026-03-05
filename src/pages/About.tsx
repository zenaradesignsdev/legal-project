import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, Users, Award, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const pillars = [
  { icon: Scale, title: "Access to Justice", desc: "We believe everyone deserves quality legal representation regardless of their background or financial situation." },
  { icon: Users, title: "Community Involvement", desc: "From youth mentorship to community outreach, we're invested in the GTA communities we serve." },
  { icon: Award, title: "Professional Standards", desc: "Licensed and regulated by the Law Society of Ontario, we uphold the highest standards of professional conduct." },
  { icon: Shield, title: "Client Advocacy", desc: "We stand firmly in our clients' corner, providing clear guidance and strong representation at every stage." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Story
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Providing accessible, professional legal services to individuals across the GTA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="border-l-4 border-gold pl-8">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
                "To provide accessible, professional legal services to individuals across the GTA, ensuring 
                every client understands their rights, options, and next steps."
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our History</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Built on a Foundation of Service
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Pickering Law Firm was established with a simple but powerful mission: make legal services 
                accessible, straightforward, and effective for everyday people across the Greater Toronto Area.
              </p>
              <p>
                Our firm handles matters across Provincial Offences, Criminal Law, Landlord & Tenant disputes, 
                Small Claims, Employment Law, Human Rights, Notary services, and Contracts.
              </p>
              <p>
                We continue to grow while staying true to our core principles — clear communication, fair 
                pricing, and unwavering commitment to each client's case.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Pillars</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Discuss Your Case?
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-10 text-base font-semibold"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
