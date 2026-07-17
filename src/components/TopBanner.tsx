import { X, BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-accent to-primary text-white py-2.5 px-4 text-center relative overflow-hidden">
      <div className="relative flex items-center justify-center gap-2 flex-wrap pr-8">
        <BookOpen className="w-4 h-4 flex-shrink-0" />
        <p className="text-sm font-medium">
          <span className="font-bold">New on the Blog:</span>{" "}
          <span className="hidden sm:inline">Expert tips on Thyroid, PCOS & natural healing.</span>{" "}
          <Link to="/blog" className="underline font-bold hover:text-yellow-200 inline-flex items-center gap-1">
            Read articles <ArrowRight className="w-3 h-3" />
          </Link>
        </p>
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
