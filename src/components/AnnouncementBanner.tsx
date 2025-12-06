import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner in this session
    const dismissed = sessionStorage.getItem("announcement-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcement-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-hero text-white py-2 px-4 relative animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
        <Sparkles className="w-4 h-4 flex-shrink-0" />
        <p className="text-center">
          <span className="font-semibold">New Year Special!</span>
          {" "}Free consultation + 10% off on first treatment.{" "}
          <Link 
            to="/contact" 
            className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity"
          >
            Book Now →
          </Link>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;