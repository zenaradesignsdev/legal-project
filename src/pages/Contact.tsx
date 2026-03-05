import { Phone, Mail, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().refine(
    (val) => !val || /^[\d\s\-\(\)]+$/.test(val),
    "Please enter a valid phone number"
  ),
  matter: z.string().min(1, "Please select a legal matter"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const matterValue = watch("matter");

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 1 business day.",
    });
    
    // Clear the form
    reset();
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
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service Area</p>
                      <p className="font-medium text-foreground mb-1">Greater Toronto Area</p>
                      <p className="text-sm text-muted-foreground">
                        Toronto • Mississauga • Brampton • Markham • Vaughan • Pickering
                      </p>
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your full name"
                        className={`rounded-xl ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className={`rounded-xl ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(647) 000-0000"
                        className={`rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="matter" className="text-sm font-medium text-foreground mb-1.5 block">
                        Legal Matter *
                      </Label>
                      <Select value={matterValue} onValueChange={(v) => setValue("matter", v)}>
                        <SelectTrigger 
                          id="matter"
                          className={`rounded-xl ${errors.matter ? "border-destructive" : ""}`}
                        >
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
                      {errors.matter && (
                        <p className="text-sm text-destructive mt-1">{errors.matter.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your situation..."
                      className={`rounded-xl min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-accent-foreground hover:bg-gold-light rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message & Book Consultation"}
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
