import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              William's <span className="text-gold">Legal</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional Paralegal & Notary Services serving the Greater Toronto Area since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Team", to: "/team" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="tel:6476315516" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold" />
                (647) 631-5516
              </a>
              <a
                href="mailto:damianwilliams@williamslegalservices.ca"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 text-gold" />
                damianwilliams@williamslegalservices.ca
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Office Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-gold" />
                <div>
                  <p>Mon – Fri: 10:00 a.m. – 6:00 p.m.</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-primary-foreground/50 text-center leading-relaxed max-w-3xl mx-auto">
            William's Legal Services provides paralegal services as permitted under the Law Society of Ontario. 
            A paralegal is not a lawyer. The information on this website is for general informational purposes only 
            and does not constitute legal advice. No solicitor-client relationship is created by using this website. 
            © {new Date().getFullYear()} William's Legal Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
