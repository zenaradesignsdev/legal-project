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

      {/* Sarah Mitchell - Principal */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl shadow-xl w-full bg-muted aspect-[4/5] flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Photo Coming Soon</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Principal & Founding Partner</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">Sarah Mitchell</h2>
              <p className="text-muted-foreground font-medium mb-6">Lawyer & Notary Public</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sarah Mitchell founded Pickering Law Firm in 2012 with a vision to make quality legal representation 
                  accessible to individuals and families across the Greater Toronto Area. With over 15 years of experience 
                  in legal practice, Sarah has built a reputation for her meticulous attention to detail and unwavering 
                  commitment to client advocacy.
                </p>
                <p>
                  She specializes in Provincial Offences, Criminal Law (Summary Offences), and Employment Law matters. 
                  Sarah's approach combines legal expertise with genuine empathy, ensuring clients feel heard and understood 
                  throughout their legal journey. She received her Juris Doctor from Osgoode Hall Law School and was called 
                  to the Ontario Bar in 2007. She maintains active membership with the Law Society of Ontario.
                </p>
                <p>
                  Beyond her practice, Sarah is actively involved in community legal education initiatives and serves as a 
                  mentor to junior lawyers entering the profession.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* David Chen - Partner */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Partner</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">David Chen</h2>
              <p className="text-muted-foreground font-medium mb-6">Lawyer & Notary Public</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  David Chen joined Pickering Law Firm as a partner in 2015, bringing extensive experience in Landlord & 
                  Tenant disputes, Small Claims Court matters, and Human Rights cases. His analytical approach and strategic 
                  thinking have made him an invaluable asset to the firm and a trusted advocate for clients facing complex 
                  legal challenges.
                </p>
                <p>
                  With a background that includes working with community legal clinics and private practice, David understands 
                  the unique needs of GTA residents navigating the legal system. He is particularly skilled at breaking down 
                  complex legal concepts into clear, actionable advice that empowers clients to make informed decisions. 
                  David received his Juris Doctor from the University of Toronto Faculty of Law and was called to the Ontario 
                  Bar in 2010.
                </p>
                <p>
                  David is also a certified Notary Public and handles document notarization services for the firm. He is 
                  committed to maintaining the highest standards of professional conduct and continues to expand his expertise 
                  through ongoing legal education and professional development.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-2xl shadow-xl w-full bg-muted aspect-[4/5] flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Photo Coming Soon</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
