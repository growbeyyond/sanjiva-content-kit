import { X, Gift, Sparkles } from "lucide-react";
import { useState } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white py-2.5 px-4 text-center relative overflow-hidden">
      {/* Festive decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 animate-pulse">❄️</div>
        <div className="absolute top-0 right-20 animate-pulse delay-100">✨</div>
        <div className="absolute bottom-0 left-1/4 animate-pulse delay-200">🎄</div>
        <div className="absolute bottom-0 right-1/3 animate-pulse delay-300">⭐</div>
      </div>
      
      <div className="relative flex items-center justify-center gap-2 flex-wrap">
        <Gift className="w-4 h-4 animate-bounce" />
        <p className="text-sm font-medium">
          <span className="font-bold">🎄 Christmas & New Year Special:</span>{" "}
          <span className="hidden sm:inline">Book your consultation & get </span>
          <span className="font-bold text-yellow-300">20% OFF</span> on first treatment!
          <span className="hidden md:inline"> | Valid till Jan 15th</span>
        </p>
        <Sparkles className="w-4 h-4 animate-pulse text-yellow-300" />
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TopBanner;
