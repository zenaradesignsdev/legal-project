import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SafeImage } from "@/components/SafeImage";
import sarahMitchellPhoto from "@/assets/sarah-mitchell.png";
import davidChenPhoto from "@/assets/david-chen.png";

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our People</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">Meet Our Team</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Sarah Mitchell - Principal */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="relative mb-8 lg:mb-0">
                <SafeImage
                  src={sarahMitchellPhoto}
                  alt="Sarah Mitchell — Principal & Founding Partner"
                  className="rounded-xl sm:rounded-2xl shadow-xl object-cover aspect-[4/5] max-w-md mx-auto lg:max-w-none"
                  priority={false}
                />
                <style>{`
                  .relative.mb-8 picture img {
                    object-position: 60% center;
                  }
                `}</style>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-xl sm:rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-1 sm:mb-2">Principal & Founding Partner</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 leading-tight">Sarah Mitchell</h2>
              <p className="text-muted-foreground font-medium mb-4 sm:mb-6 text-sm sm:text-base">Lawyer & Notary Public</p>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <AnimatedSection delay={0.2} className="order-2 lg:order-1">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-1 sm:mb-2">Partner</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 leading-tight">David Chen</h2>
              <p className="text-muted-foreground font-medium mb-4 sm:mb-6 text-sm sm:text-base">Lawyer & Notary Public</p>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
            <AnimatedSection className="order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <SafeImage
                  src={davidChenPhoto}
                  alt="David Chen — Partner"
                  className="rounded-xl sm:rounded-2xl shadow-xl object-cover aspect-[4/5] max-w-md mx-auto lg:max-w-none"
                  priority={false}
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-xl sm:rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
