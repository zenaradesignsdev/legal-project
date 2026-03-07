import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SafeImage } from "@/components/SafeImage";
import { SafeBackgroundImage } from "@/components/SafeBackgroundImage";
import gavelLawImage from "@/assets/gavel-law.png";
import lawyerDocumentImage from "@/assets/lawyer-document.png";
import { useEffect, useState } from "react";

const pillars = [
  { number: "01", title: "Access to Justice", desc: "We believe everyone deserves quality legal representation regardless of their background or financial situation." },
  { number: "02", title: "Community Involvement", desc: "From youth mentorship to community outreach, we're invested in the GTA communities we serve." },
  { number: "03", title: "Professional Standards", desc: "Licensed and regulated by the Law Society of Ontario, we uphold the highest standards of professional conduct." },
  { number: "04", title: "Client Advocacy", desc: "We stand firmly in our clients' corner, providing clear guidance and strong representation at every stage." },
];

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Mississauga, ON",
    text: "Sarah and David helped me navigate a complex employment dispute with professionalism and care. Their clear communication and strategic approach resulted in a favorable outcome. I couldn't have asked for better representation.",
  },
  {
    name: "Jennifer Martinez",
    location: "Brampton, ON",
    text: "The team at Pickering Law Firm made what seemed like an overwhelming landlord-tenant issue manageable. They explained everything clearly, kept me informed throughout the process, and achieved a resolution that worked for everyone.",
  },
  {
    name: "Robert Chen",
    location: "Markham, ON",
    text: "I was facing serious traffic violations and didn't know where to turn. David's expertise in provincial offences helped reduce my charges significantly. The firm's transparent pricing and honest advice were exactly what I needed.",
  },
  {
    name: "Amanda Williams",
    location: "Toronto, ON",
    text: "Going through a family law matter is never easy, but Sarah's empathy and legal expertise made the process much smoother. She was always available to answer questions and provided guidance that put my mind at ease.",
  },
];

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <SafeBackgroundImage
          src={gavelLawImage}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy/90" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">About Us</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Providing accessible, professional legal services to individuals across the GTA.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-background overflow-hidden">
        {/* Background Image */}
        <SafeBackgroundImage
          src={gavelLawImage}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/70 to-background" />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-gold/20">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Our Mission</p>
              <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-medium">
                To provide accessible, professional legal services to individuals across the GTA, ensuring 
                every client understands their rights, options, and next steps. We believe that quality 
                legal representation should be available to everyone, regardless of their circumstances.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Quote */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-block mb-4 sm:mb-6">
                <svg width="40" height="30" viewBox="0 0 48 36" fill="none" className="text-gold/30 sm:w-12 sm:h-9">
                  <path d="M0 36V21.6C0 15.6 1.2 10.8 3.6 7.2C6 3.6 9.6 1.2 14.4 0L18 4.8C14.4 5.6 11.6 7.2 9.6 9.6C7.6 12 6.4 15.2 6 19.2H12V36H0ZM28.8 36V21.6C28.8 15.6 30 10.8 32.4 7.2C34.8 3.6 38.4 1.2 43.2 0L46.8 4.8C43.2 5.6 40.4 7.2 38.4 9.6C36.4 12 35.2 15.2 34.8 19.2H40.8V36H28.8Z" fill="currentColor"/>
                </svg>
              </div>
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
                "Pickering Law Firm provided exceptional service during our contract dispute. Their clear communication, fair pricing, and unwavering dedication resulted in a favorable resolution that exceeded our expectations."
              </blockquote>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                — <span className="font-semibold text-foreground">Toronto Business Solutions Inc.</span>, Corporate Client
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* History */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative mb-8 lg:mb-0">
                <SafeImage
                  src={lawyerDocumentImage}
                  alt="Legal representation and document review"
                  className="rounded-xl sm:rounded-2xl shadow-xl object-cover aspect-[4/5] max-w-md mx-auto lg:max-w-none"
                  priority={false}
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-xl sm:rounded-2xl -z-10 hidden lg:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our History</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Built on a Foundation of Service
              </h2>
              <div className="space-y-3 sm:space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                <p>
                  Pickering Law Firm was founded in 2012 by Sarah Mitchell, a seasoned lawyer with a vision to bridge 
                  the gap between complex legal systems and the individuals who need representation most. Recognizing that 
                  many GTA residents faced barriers accessing quality legal services, Sarah established the firm with a 
                  commitment to providing professional, accessible, and client-centered representation.
                </p>
                <p>
                  In 2015, David Chen joined the practice as a partner, bringing complementary expertise and expanding the 
                  firm's capacity to serve clients across a broader range of legal matters. Together, Sarah and David have 
                  built a practice that combines deep legal knowledge with genuine care for each client's unique circumstances.
                </p>
                <p>
                  Today, Pickering Law Firm handles matters across Provincial Offences, Criminal Law, Landlord & Tenant 
                  disputes, Small Claims, Employment Law, Human Rights, Notary services, and Contracts. Our two-partner 
                  structure allows us to maintain the personal attention and responsiveness that larger firms often cannot, 
                  while providing comprehensive legal services backed by decades of combined experience.
                </p>
                <p>
                  We remain committed to our founding principles: clear communication, fair and transparent pricing, and 
                  unwavering dedication to achieving the best possible outcomes for our clients. Every case receives the 
                  careful attention and strategic approach it deserves, regardless of its size or complexity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">What We Stand For</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Our Pillars</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm h-full border border-border/50 hover:border-gold/30 transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/30 flex items-center justify-center">
                        <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gold">{p.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 sm:mb-2 leading-tight">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Client Experiences</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Don't just take our word for it. Here's what clients have to say about working with Pickering Law Firm.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-border/50 h-full flex flex-col">
                      <div className="mb-3 sm:mb-4">
                        <svg width="28" height="21" viewBox="0 0 48 36" fill="none" className="text-gold/40 sm:w-8 sm:h-6">
                          <path d="M0 36V21.6C0 15.6 1.2 10.8 3.6 7.2C6 3.6 9.6 1.2 14.4 0L18 4.8C14.4 5.6 11.6 7.2 9.6 9.6C7.6 12 6.4 15.2 6 19.2H12V36H0ZM28.8 36V21.6C28.8 15.6 30 10.8 32.4 7.2C34.8 3.6 38.4 1.2 43.2 0L46.8 4.8C43.2 5.6 40.4 7.2 38.4 9.6C36.4 12 35.2 15.2 34.8 19.2H40.8V36H28.8Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{testimonial.name}</p>
                        <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </AnimatedSection>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection className="text-center">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Meet the Team</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              The People Behind Pickering Law Firm
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
              Get to know Sarah Mitchell and David Chen, the experienced lawyers who founded and lead our firm. 
              Learn about their backgrounds, expertise, and commitment to serving the GTA community.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-gold text-gold hover:bg-gold hover:text-accent-foreground px-6 sm:px-8 text-xs sm:text-sm md:text-base py-2.5 sm:py-3 h-auto min-h-[44px]"
            >
              <Link to="/team">Learn More About Our Team</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary -mb-16 lg:mb-0">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Ready to Discuss Your Case?
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary-foreground/70 text-xs sm:text-sm">
                Free 30-minute consultation • Extended consultations: $200 – $300 + HST
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-8 sm:px-10 text-sm sm:text-base font-semibold py-2.5 sm:py-3 h-auto min-h-[44px]"
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
