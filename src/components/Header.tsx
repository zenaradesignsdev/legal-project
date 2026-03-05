import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const navigate = useNavigate();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle link click with delayed navigation
  const handleLinkClick = (to: string) => {
    setMobileOpen(false);
    // Wait for exit animation before navigating
    setTimeout(() => {
      navigate(to);
    }, 400);
  };

  // Mobile menu content
  const mobileMenuContent = (
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop - full viewport coverage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-[100] lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Menu Panel - slides from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-primary z-[101] lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between h-16 md:h-20 px-4 border-b border-primary-foreground/10 flex-shrink-0">
                <span className="font-serif text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
                  Pickering <span className="text-gold">Law Firm</span>
                </span>
                <button
                  className="text-primary-foreground p-2"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 flex flex-col px-4 py-6 gap-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.to)}
                      className={`w-full text-left block py-4 px-4 rounded-xl text-base font-medium transition-colors ${
                        location.pathname === link.to
                          ? "text-gold bg-primary-foreground/10"
                          : "text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Footer CTA */}
              <div className="px-4 py-6 border-t border-primary-foreground/10 space-y-4 flex-shrink-0">
                <a
                  href="tel:9055550100"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-base text-primary-foreground/80 hover:text-gold transition-colors rounded-xl hover:bg-primary-foreground/5"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  (905) 555-0100
                </a>
                <Button
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full bg-gold text-accent-foreground hover:bg-gold-light rounded-full py-3 text-base font-semibold"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
              Pickering <span className="text-gold">Law Firm</span>
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
              href="tel:9055550100"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              (905) 555-0100
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
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu portal - rendered at document root */}
      {typeof document !== "undefined" &&
        createPortal(mobileMenuContent, document.body)}
    </>
  );
};

export default Header;
