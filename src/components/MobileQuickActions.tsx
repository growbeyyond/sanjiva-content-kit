import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const MobileQuickActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
      <div className="grid grid-cols-3 h-14">
        {/* Call Button */}
        <a
          href="tel:+918179942297"
          className="flex flex-col items-center justify-center gap-0.5 text-foreground hover:bg-primary/10 transition-colors"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium">Call Now</span>
        </a>

        {/* Book Button */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center gap-0.5 bg-gradient-hero text-white"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-medium">Book</span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918179942297?text=Hi%20Doctor,%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-foreground hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          <span className="text-[10px] font-medium text-green-600">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileQuickActions;