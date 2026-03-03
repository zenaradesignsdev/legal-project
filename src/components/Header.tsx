import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
            William's <span className="text-gold">Legal</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:6476315516"
            className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            (647) 631-5516
          </a>
          <Button
            asChild
            className="bg-gold text-accent-foreground hover:bg-gold-light rounded-full px-6 font-semibold"
          >
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold bg-primary-foreground/5"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6476315516"
              className="flex items-center gap-2 py-3 px-3 text-sm text-primary-foreground/80 hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              (647) 631-5516
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
