import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our People</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Meet Our Team</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl shadow-xl w-full bg-muted aspect-[4/5] flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Team Photo Coming Soon</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Our Team</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">Experienced Legal Professionals</h2>
              <p className="text-muted-foreground font-medium mb-6">Paralegals & Notary Publics</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our team consists of licensed paralegals committed to delivering professional, accessible 
                  legal services across the GTA. We bring years of combined experience in various areas of law.
                </p>
                <p>
                  Our paralegals practice primarily in Provincial Offences, Summary Criminal Law, Landlord & Tenant, 
                  Small Claims, Employment Law, Human Rights, and provide Notary Public services. We are dedicated 
                  to providing clear guidance and strong representation for our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Future team placeholder */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <p className="text-muted-foreground text-lg">
              Our team is growing. Stay tuned for new additions.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
