import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gold p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 text-accent-foreground font-semibold text-sm"
      >
        <Calendar className="h-4 w-4" />
        Book Free Consultation
      </Link>
    </div>
  );
};

export default MobileCTA;
