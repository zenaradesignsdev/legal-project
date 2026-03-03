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

      {/* Damian */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <img
                src="/images/damian-williams.jpeg"
                alt="Damian Williams — Paralegal & Notary Public"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Principal</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">Damian Williams</h2>
              <p className="text-muted-foreground font-medium mb-6">Paralegal & Notary Public</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Damian began his legal career as a solo practitioner in 2015 and founded William's Legal 
                  Services shortly after. Since then, he has assembled a dedicated team of paralegals committed 
                  to delivering professional, accessible legal services across the GTA.
                </p>
                <p>
                  Damian holds a diploma in Paralegal Studies and practices primarily in Provincial Offences 
                  and Summary Criminal Law. Outside of law, he mentors youth and enjoys automotive performance 
                  and restoration.
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
