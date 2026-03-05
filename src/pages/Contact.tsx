import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", matter: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you within 1 business day." });
    setForm({ name: "", email: "", phone: "", matter: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Ready to discuss your legal matter? Reach out for a free 30-minute consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a href="tel:9055550100" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">(905) 555-0100</p>
                    </div>
                  </a>
                  <a href="mailto:info@pickeringlawfirm.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground text-sm">info@pickeringlawfirm.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Office Hours</p>
                      <p className="font-medium text-foreground">Mon – Fri: 10 a.m. – 6 p.m.</p>
                      <p className="text-sm text-muted-foreground">Sat: By Appointment</p>
                      <p className="text-sm text-muted-foreground">Sun: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service Area</p>
                      <p className="font-medium text-foreground">Greater Toronto Area</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-2xl h-48 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Serving the Greater Toronto Area</p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll respond within 1 business day.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(647) 000-0000"
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Legal Matter *</label>
                      <Select value={form.matter} onValueChange={(v) => setForm({ ...form, matter: v })}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select a matter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="provincial-offences">Provincial Offences</SelectItem>
                          <SelectItem value="criminal-law">Criminal Law</SelectItem>
                          <SelectItem value="landlord-tenant">Landlord & Tenant</SelectItem>
                          <SelectItem value="small-claims">Small Claims</SelectItem>
                          <SelectItem value="employment-law">Employment Law</SelectItem>
                          <SelectItem value="human-rights">Human Rights</SelectItem>
                          <SelectItem value="notary">Notary Public</SelectItem>
                          <SelectItem value="contracts">Contracts</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your situation..."
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold text-accent-foreground hover:bg-gold-light rounded-full font-semibold"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Send Message & Book Consultation
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
